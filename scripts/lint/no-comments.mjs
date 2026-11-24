#!/usr/bin/env node
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";
import { parse as parseSvelte } from "svelte/compiler";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const BASELINE = path.join(ROOT, "scripts/lint/comment-baseline.json");
const SOURCE = /\.(ts|js|mjs|cjs|svelte|css|html)$|(^|\/)tsconfig[^/]*\.json$/;

const DIRECTIVE =
    /^(@ts-(ignore|expect-error|nocheck|check)\b|(eslint|prettier|biome)-|svelte-ignore\b|prettier-ignore\b|\/ *<reference\b|[#@]__PURE__|@vite-ignore\b)/;
const JSDOC_TYPE_TAG = /^@(type|typedef|satisfies|param|returns|template|import)\b/;

function body(text) {
    if (text.startsWith("//")) return text.slice(2).trim();
    if (text.startsWith("<!--")) return text.slice(4, -3).trim();
    return text.slice(2, -2).replace(/^\*/, "").trim();
}

function isExempt(text, file) {
    const content = body(text);
    if (DIRECTIVE.test(content)) return true;
    if (/\.(js|mjs|cjs)$/.test(file) && text.startsWith("/**")) {
        const lines = content.split("\n").map((l) => l.replace(/^\s*\*?\s?/, "").trim()).filter(Boolean);
        return lines.length > 0 && lines.every((l) => JSDOC_TYPE_TAG.test(l));
    }
    return false;
}

function scriptKind(file) {
    if (file.endsWith(".json")) return ts.ScriptKind.JSON;
    if (/\.(js|mjs|cjs)$/.test(file)) return ts.ScriptKind.JS;
    return ts.ScriptKind.TS;
}

function jsComments(text, kind) {
    const sf = ts.createSourceFile("x", text, ts.ScriptTarget.Latest, true, kind);
    const seen = new Map();
    const add = (ranges) => ranges?.forEach((r) => seen.set(r.pos, [r.pos, r.end]));
    const visit = (node) => {
        add(ts.getLeadingCommentRanges(text, node.pos));
        add(ts.getTrailingCommentRanges(text, node.end));
        for (const child of node.getChildren(sf)) visit(child);
    };
    visit(sf);
    return [...seen.values()];
}

function cssComments(text) {
    const out = [];
    for (let i = 0; i < text.length; i++) {
        const c = text[i];
        if (c === '"' || c === "'") {
            for (i++; i < text.length && text[i] !== c; i++) if (text[i] === "\\") i++;
        } else if (c === "/" && text[i + 1] === "*") {
            const end = text.indexOf("*/", i + 2);
            const stop = end < 0 ? text.length : end + 2;
            out.push([i, stop]);
            i = stop - 1;
        }
    }
    return out;
}

const TAGS = new Set(["ExpressionTag", "HtmlTag", "RenderTag", "ConstTag"]);

function svelteComments(text) {
    const ast = parseSvelte(text, { modern: true });
    const out = [];
    for (const block of [ast.module, ast.instance]) {
        if (!block) continue;
        const { start, end } = block.content;
        for (const [s, e] of jsComments(text.slice(start, end), ts.ScriptKind.TS)) out.push([start + s, start + e]);
    }
    if (ast.css) {
        const { start, end } = ast.css.content;
        for (const [s, e] of cssComments(text.slice(start, end))) out.push([start + s, start + e]);
    }
    const walk = (node) => {
        if (!node || typeof node !== "object") return;
        if (Array.isArray(node)) return node.forEach(walk);
        if (node.type === "Comment" && typeof node.start === "number") out.push([node.start, node.end]);
        if (TAGS.has(node.type) && typeof node.start === "number") {
            const inner = text.slice(node.start + 1, node.end - 1);
            for (const [s, e] of jsComments(inner, ts.ScriptKind.TS)) out.push([node.start + 1 + s, node.start + 1 + e]);
        }
        for (const [key, value] of Object.entries(node)) if (key !== "parent") walk(value);
    };
    walk(ast.fragment);
    return out;
}

export function findComments(file, text) {
    let ranges;
    if (file.endsWith(".svelte")) ranges = svelteComments(text);
    else if (file.endsWith(".css")) ranges = cssComments(text);
    else if (file.endsWith(".html")) ranges = [...text.matchAll(/<!--[\s\S]*?-->/g)].map((m) => [m.index, m.index + m[0].length]);
    else ranges = jsComments(text, scriptKind(file));

    const lineAt = (i) => text.slice(0, i).split("\n").length;
    return ranges
        .sort((a, b) => a[0] - b[0])
        .map(([s, e]) => {
            const lineStart = text.lastIndexOf("\n", s - 1) + 1;
            const lineEnd = text.indexOf("\n", e) < 0 ? text.length : text.indexOf("\n", e);
            const commentText = text.slice(s, e);
            return {
                file,
                start: s,
                end: e,
                line: lineAt(s),
                endLine: lineAt(e),
                ownLine: !text.slice(lineStart, s).trim() && !text.slice(e, lineEnd).trim(),
                text: commentText,
                exempt: isExempt(commentText, file),
            };
        });
}

function trackedFiles() {
    const out = execFileSync("git", ["ls-files", "--cached", "--others", "--exclude-standard"], { cwd: ROOT, encoding: "utf8" });
    return out.split("\n").filter((f) => f && SOURCE.test(f) && fs.existsSync(path.join(ROOT, f)));
}

function readBaseline() {
    return fs.existsSync(BASELINE) ? JSON.parse(fs.readFileSync(BASELINE, "utf8")) : {};
}

function writeBaseline(counts) {
    const sorted = Object.fromEntries(Object.entries(counts).filter(([, n]) => n > 0).sort(([a], [b]) => a.localeCompare(b)));
    fs.writeFileSync(BASELINE, JSON.stringify(sorted, null, "\t") + "\n");
}

function main(argv) {
    const mode = ["list", "update", "init"].find((m) => argv.includes(`--${m}`)) ?? "check";
    const comments = [];
    const errors = [];
    for (const file of trackedFiles()) {
        try {
            comments.push(...findComments(file, fs.readFileSync(path.join(ROOT, file), "utf8")));
        } catch (err) {
            errors.push(`${file}: could not parse (${err.message.split("\n")[0]})`);
        }
    }
    const counted = comments.filter((c) => !c.exempt);

    if (mode === "list") {
        process.stdout.write(JSON.stringify(counted, null, 1) + "\n");
        return 0;
    }

    const counts = {};
    for (const c of counted) counts[c.file] = (counts[c.file] ?? 0) + 1;
    const baseline = readBaseline();
    const files = new Set([...Object.keys(counts), ...Object.keys(baseline)]);
    const over = [];
    const under = [];
    for (const file of files) {
        const n = counts[file] ?? 0;
        const allowed = baseline[file] ?? 0;
        if (n > allowed) over.push([file, n, allowed]);
        if (n < allowed) under.push([file, n, allowed]);
    }

    if (mode === "init") {
        if (Object.keys(baseline).length) {
            console.error("A baseline already exists; it can only go down (use --update).");
            return 1;
        }
        writeBaseline(counts);
        console.log(`Baseline created: ${counted.length} comments across ${Object.keys(counts).length} files.`);
        return 0;
    }

    if (mode === "update") {
        if (over.length) {
            console.error("Refusing to raise the comment baseline. Remove the new comments instead:");
            for (const [file, n, allowed] of over) console.error(`  ${file}: ${n} (baseline ${allowed})`);
            return 1;
        }
        writeBaseline(counts);
        console.log(`Baseline lowered: ${counted.length} comments left across ${Object.keys(counts).length} files.`);
        return 0;
    }

    for (const e of errors) console.error(e);
    for (const [file, n, allowed] of over) {
        console.error(`\n${file}: ${n} comments, baseline allows ${allowed}. Comments are banned; delete the new ones:`);
        for (const c of counted.filter((c) => c.file === file)) {
            console.error(`  ${file}:${c.line}  ${c.text.split("\n")[0].slice(0, 100)}`);
        }
    }
    if (under.length) {
        console.error("\nComments were removed. Lock in the progress with `npm run lint:comments -- --update`:");
        for (const [file, n, allowed] of under) console.error(`  ${file}: ${n} (baseline ${allowed})`);
    }
    if (errors.length || over.length || under.length) {
        console.error("\nWhy no comments: docs/adr/0001-no-code-comments.md");
        return 1;
    }
    console.log(`no-comments: OK (${counted.length} grandfathered comments left)`);
    return 0;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) process.exit(main(process.argv.slice(2)));
