import raw from "./cross-plus-one.json";

/**
 * 十字 +1 的例子：從 reco.nz 的比賽 reconstruction 挑出來，由 scripts/reco/analyze.mjs 產生。
 * 範圍是十字加前兩組 F2L（某一步一次做好更多組時也算進去）。只有客觀資料：轉法、步數、放進哪一槽。
 * 全部是白十字（白色在底），跟本站黃頂白底一致。
 */
export interface CrossStep {
    moves: string;
    /** 步數（不算整顆轉向） */
    stm: number;
    /** 「十字」「xcross」「第一組」「第二組和第三組」… */
    label: string;
    /** 這一步放好的槽，以選手當下拿方塊的方向為準（右前、左後…）；十字為空 */
    slots: string[];
    /** 這一步放好的組是哪兩塊（cubing.js 的塊編號），網頁用來決定亮哪些貼紙 */
    pairs: { corner: number; edge: number }[];
}

export interface CrossExample {
    id: string;
    solver: string;
    time: string;
    date: string;
    comp: string;
    reconstructor: string;
    url: string;
    scramble: string;
    /** 觀察時的整顆轉向，例如 "x2 y" */
    inspection: string;
    /** 十字（xcross 時含第一組） */
    cross: CrossStep;
    /** 十字之後的每一步 F2L，做到前兩組為止 */
    f2l: CrossStep[];
}

export const crossExamples = (raw as { examples: CrossExample[] }).examples;

/**
 * 3D 遮罩：白色十字邊（cubing.js 編號 0-3）一定亮，再加上勾選的那幾組，其他變淺灰。
 * 遮罩跟著塊走，所以塊移動到哪裡都還是亮的。
 */
export function crossMask(pairs: { corner: number; edge: number }[]) {
    const edges = new Set([0, 1, 2, 3, ...pairs.map((p) => p.edge)]);
    const corners = new Set(pairs.map((p) => p.corner));
    const row = (n: number, lit: Set<number>) =>
        Array.from({ length: n }, (_, i) => (lit.has(i) ? "-" : "I")).join("");
    return `EDGES:${row(12, edges)},CORNERS:${row(8, corners)},CENTERS:------`;
}
