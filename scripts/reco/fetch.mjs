// 從 reco.nz 抓官方 3x3 CFOP reconstruction 的原始 HTML，存在 .reco-cache/（不進 git）。
// 禮貌抓取：一次一個請求、間隔 1 秒；已經抓過的不重抓。
// 用法：node scripts/reco/fetch.mjs [列表頁數，預設 6（每頁 50 筆）]
import { mkdir, writeFile, access } from "node:fs/promises";

const CACHE = new URL("../../.reco-cache/", import.meta.url);
const pages = Number(process.argv[2] ?? 6);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const exists = (u) => access(u).then(() => true, () => false);

async function get(url) {
    const res = await fetch(url, { headers: { "User-Agent": "cubesheet-study-notes (personal, low-rate)" } });
    if (!res.ok) throw new Error(`${res.status} ${url}`);
    await sleep(1000);
    return res.text();
}

await mkdir(new URL("solve/", CACHE), { recursive: true });
const ids = [];
for (let page = 1; page <= pages; page++) {
    const html = await get(`https://reco.nz/?sort=id_desc&official=on&3x3=on&CFOP=on&page=${page}`);
    ids.push(...[...html.matchAll(/data-id='(\d+)'/g)].map((m) => m[1]));
}
console.log(`${ids.length} solves listed`);
let fetched = 0;
for (const id of ids) {
    const file = new URL(`solve/${id}.html`, CACHE);
    if (await exists(file)) continue;
    await writeFile(file, await get(`https://reco.nz/solve/${id}`));
    if (++fetched % 25 === 0) console.log(`fetched ${fetched}`);
}
console.log(`done, ${fetched} new`);
