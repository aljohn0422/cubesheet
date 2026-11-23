import raw from "./zbll.json";
import type { AlgSection } from "./types";

/**
 * ZBLL：頂層邊塊已經翻好時，一次完成整個頂層。
 * 資料從 solv 搬來（zbll.json），每個 case 有黃頂的打亂狀態 `setup` 與數條公式；
 * 每條公式都能從 `setup` 的狀態復原（有些最後要補一個 U）。
 */
interface ZbllCase {
    name: string;
    /** 頂面角塊形狀：U、L、T、H、Pi、S、AS */
    subset: string;
    /** 形狀底下依側面顏色分的小組，例如 U1、Pi 1 */
    subgroup: string;
    setup: string;
    algorithms: string[];
}

export interface ZbllSubset {
    name: string;
    count: number;
    sections: AlgSection[];
}

const cases = raw as ZbllCase[];

/** 依資料順序分組：形狀 → 小組，每個小組是一個段落 */
export const zbllSubsets: ZbllSubset[] = [];
for (const c of cases) {
    let subset = zbllSubsets.find((s) => s.name === c.subset);
    if (!subset) {
        subset = { name: c.subset, count: 0, sections: [] };
        zbllSubsets.push(subset);
    }
    let section = subset.sections.find((s) => s.header === c.subgroup);
    if (!section) {
        section = { header: c.subgroup, stage: "ll", algorithms: [] };
        subset.sections.push(section);
    }
    const [alg, ...alternatives] = c.algorithms;
    section.algorithms.push({
        // 「ZBLL U 1」→「U 1」：段落標題已經寫了是哪一組
        name: c.name.replace(/^ZBLL /, ""),
        alg,
        alternatives,
        setup: c.setup,
    });
    subset.count++;
}

export const zbllCount = cases.length;
