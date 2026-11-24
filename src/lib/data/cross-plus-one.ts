import raw from "./cross-plus-one.json";

export interface CrossStep {
    moves: string;
    stm: number;
    label: string;
    slots: string[];
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
    inspection: string;
    cross: CrossStep;
    f2l: CrossStep[];
}

export const crossExamples = (raw as { examples: CrossExample[] }).examples;

export function crossMask(pairs: { corner: number; edge: number }[]) {
    const edges = new Set([0, 1, 2, 3, ...pairs.map((p) => p.edge)]);
    const corners = new Set(pairs.map((p) => p.corner));
    const row = (n: number, lit: Set<number>) =>
        Array.from({ length: n }, (_, i) => (lit.has(i) ? "-" : "I")).join("");
    return `EDGES:${row(12, edges)},CORNERS:${row(8, corners)},CENTERS:------`;
}
