import raw from "./zbll.json";
import type { AlgSection } from "./types";

interface ZbllCase {
    name: string;
    subset: string;
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
        name: c.name.replace(/^ZBLL /, ""),
        alg,
        alternatives,
        setup: c.setup,
    });
    subset.count++;
}

export const zbllCount = cases.length;
