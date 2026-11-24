import { readdir, readFile, writeFile } from "node:fs/promises";
import { Alg } from "cubing/alg";
import { cube3x3x3 } from "cubing/puzzles";

const CACHE = new URL("../../.reco-cache/solve/", import.meta.url);
const OUT = new URL("../../src/lib/data/cross-plus-one.json", import.meta.url);

const kp = await cube3x3x3.kpuzzle();
const solved = kp.defaultPattern();

const decode = (s) =>
    s
        .replace(/&#0*39;|&apos;/g, "'")
        .replace(/&quot;/g, '"')
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&nbsp;/g, " ");

function parse(id, html) {
    const text = decode(
        html
            .replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, "")
            .replace(/<br\s*\/?>/g, "\n")
            .replace(/<[^>]+>/g, "\n"),
    );
    const lines = text.split("\n").map((l) => l.trim()).filter(Boolean);
    const at = lines.findIndex((l) => l.includes("reconstruction by"));
    if (at < 1) return null;
    let head = lines[at - 1].match(/^(.*) - ([\d.]+) 3x3 solve/);
    if (!head) {
        const m = lines[at - 1].match(/^- ([\d.]+) 3x3 solve/);
        if (m) head = [null, lines[at - 2], m[1]];
    }
    const meta = lines[at].match(/(\d{4}-\d{2}-\d{2}) - (.*) - reconstruction by\s*(.*)$/);
    const byOnNext = !meta?.[3];
    const reconstructor = byOnNext ? lines[at + 1] : meta[3];
    let i = at + (byOnNext ? 2 : 1);
    const scramble = lines[i++];
    const steps = [];
    for (; i < lines.length; i++) {
        const l = lines[i];
        if (l.startsWith("view at") || l === "Total") break;
        const m = l.match(/^(.*?)\/\/\s*(.*)$/);
        if (m) steps.push({ moves: m[1].replace(/[()]/g, " ").trim(), label: m[2].trim() });
    }
    if (!head || !meta) return null;
    return {
        id,
        solver: head[1].replace(/^\[[^\]]*\]\s*/, ""),
        time: head[2],
        date: meta[1],
        comp: meta[2].replace(/^\[[^\]]*\]\s*/, ""),
        reconstructor,
        scramble,
        steps,
    };
}

const rotations = [""];
{
    const seen = new Set([key(solved.patternData.CENTERS.pieces)]);
    for (let i = 0; i < rotations.length; i++)
        for (const m of ["x", "y", "z"]) {
            const a = `${rotations[i]} ${m}`.trim();
            const k = key(solved.applyAlg(a).patternData.CENTERS.pieces);
            if (!seen.has(k)) {
                seen.add(k);
                rotations.push(a);
            }
        }
}
function key(a) {
    return a.join(",");
}
function frameOf(p) {
    const c = key(p.patternData.CENTERS.pieces);
    for (const r of rotations) {
        const f = solved.applyAlg(r);
        if (key(f.patternData.CENTERS.pieces) === c) return f;
    }
    throw new Error("no frame");
}
const home = (p, f, orbit, pos) =>
    p.patternData[orbit].pieces[pos] === f.patternData[orbit].pieces[pos] &&
    p.patternData[orbit].orientation[pos] === f.patternData[orbit].orientation[pos];

const D_EDGES = [4, 5, 6, 7];
const SLOTS = {
    FR: { corner: 4, edge: 8, name: "右前" },
    FL: { corner: 5, edge: 9, name: "左前" },
    BL: { corner: 6, edge: 11, name: "左後" },
    BR: { corner: 7, edge: 10, name: "右後" },
};
const WHITE_CENTER = 0;

function crossSolved(p) {
    const f = frameOf(p);
    return D_EDGES.every((i) => home(p, f, "EDGES", i));
}

function solvedSlots(p) {
    const f = frameOf(p);
    return Object.keys(SLOTS).filter(
        (s) => home(p, f, "CORNERS", SLOTS[s].corner) && home(p, f, "EDGES", SLOTS[s].edge),
    );
}

const movesOf = (s) => {
    try {
        return [...new Alg(s).childAlgNodes()].map(String);
    } catch {
        return null;
    }
};
const simplify = (moves) => movesOf(new Alg(moves.join(" ")).experimentalSimplify({ cancel: true }).toString()) ?? moves;
const isRotation = (m) => /^[xyz]/.test(m);
const stm = (moves) => moves.filter((m) => !isRotation(m)).length;

function pairsInSlots(p) {
    return solvedSlots(p).map((slot) => ({
        slot,
        corner: p.patternData.CORNERS.pieces[SLOTS[slot].corner],
        edge: p.patternData.EDGES.pieces[SLOTS[slot].edge],
    }));
}

const ORD = ["第一組", "第二組", "第三組", "第四組"];
const SHOW_PAIRS = 2;
const files = (await readdir(CACHE)).filter((f) => f.endsWith(".html"));
const candidates = [];
const stats = { parsed: 0, white: 0, usable: 0 };
for (const f of files) {
    const s = parse(f.replace(".html", ""), await readFile(new URL(f, CACHE), "utf8"));
    if (!s) continue;
    stats.parsed++;
    const inspectionStep = s.steps.find((x) => /inspection/i.test(x.label));
    const crossIdx = s.steps.findIndex((x) => /^x?x?cross$/i.test(x.label));
    if (crossIdx < 0) continue;

    const inspection = movesOf(inspectionStep?.moves ?? "") ?? [];
    const crossRaw = movesOf(s.steps[crossIdx].moves);
    if (!crossRaw) continue;
    const crossMoves = simplify(crossRaw);

    let start;
    try {
        start = solved.applyAlg(s.scramble).applyAlg(inspection.join(" "));
    } catch {
        continue;
    }
    if (start.patternData.CENTERS.pieces[5] !== WHITE_CENTER) continue;
    stats.white++;

    const afterCross = start.applyAlg(crossMoves.join(" "));
    if (!crossSolved(afterCross)) continue;
    const xcrossPairs = pairsInSlots(afterCross);

    const pairSteps = [];
    let p = afterCross;
    let done = xcrossPairs.length;
    let ok = true;
    for (let k = crossIdx + 1; done < SHOW_PAIRS; k++) {
        const raw = s.steps[k] && movesOf(s.steps[k].moves);
        if (!raw || /oll|pll|ll\b/i.test(s.steps[k].label)) {
            ok = false;
            break;
        }
        const moves = simplify(raw);
        const before = new Set(pairsInSlots(p).map((x) => x.corner));
        const after = p.applyAlg(moves.join(" "));
        const added = pairsInSlots(after).filter((x) => !before.has(x.corner));
        if (!added.length || !crossSolved(after)) {
            ok = false;
            break;
        }
        pairSteps.push({ moves, pairs: added, ordinal: done });
        p = after;
        done += added.length;
    }
    if (!ok) continue;

    const allPairs = [...xcrossPairs, ...pairSteps.flatMap((st) => st.pairs)];
    const f2lMoves = pairSteps.flatMap((st) => st.moves);
    stats.usable++;
    candidates.push({
        ...s,
        inspection: inspection.join(" "),
        crossMoves,
        xcrossPairs,
        pairSteps,
        allPairs,
        total: stm(crossMoves) + stm(f2lMoves),
        rotations: [...crossMoves, ...f2lMoves].filter(isRotation).length,
    });
}

const PER_GROUP = 12;
const MAX_PER_SOLVER = 2;
const clear = candidates
    .filter((c) => c.pairSteps.length > 0 && c.rotations <= 1 && c.total <= 26)
    .sort((a, b) => a.total + a.rotations * 3 - (b.total + b.rotations * 3));
const picked = [];
for (const wantX of [false, true]) {
    let n = 0;
    for (const c of clear) {
        if (c.xcrossPairs.length > 0 !== wantX || n >= PER_GROUP) continue;
        if (picked.filter((p) => p.solver === c.solver).length >= MAX_PER_SOLVER) continue;
        picked.push(c);
        n++;
    }
}

const slotNames = (pairs) => pairs.map((x) => SLOTS[x.slot].name);
const examples = picked.map((c) => {
    const piecesOf = (pairs) => pairs.map((x) => ({ corner: x.corner, edge: x.edge }));
    const xcross = c.xcrossPairs.length > 0;
    return {
        id: c.id,
        solver: c.solver,
        time: c.time,
        date: c.date,
        comp: c.comp,
        reconstructor: c.reconstructor,
        url: `https://reco.nz/solve/${c.id}`,
        scramble: c.scramble,
        inspection: c.inspection,
        cross: {
            moves: c.crossMoves.join(" "),
            stm: stm(c.crossMoves),
            label: xcross ? "xcross" : "十字",
            slots: slotNames(c.xcrossPairs),
            pairs: piecesOf(c.xcrossPairs),
        },
        f2l: c.pairSteps.map((st) => ({
            moves: st.moves.join(" "),
            stm: stm(st.moves),
            label: ORD.slice(st.ordinal, st.ordinal + st.pairs.length).join("和"),
            slots: slotNames(st.pairs),
            pairs: piecesOf(st.pairs),
        })),
    };
});

await writeFile(OUT, JSON.stringify({ examples }, null, 2) + "\n");
console.log(stats, `clear: ${clear.length}, picked: ${examples.length}`);
for (const e of examples)
    console.log(
        `#${e.id} ${e.solver} ${e.time}  ${e.cross.label} ${e.cross.stm} 步 → ${e.f2l.map((x) => `${x.label} ${x.stm} 步 ${x.slots.join("、")}`).join("，")}`,
    );
