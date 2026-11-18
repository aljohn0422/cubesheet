import type { AlgCase, AlgSection } from "./types";

export const advancedF2lCases: AlgCase[] = [
    {
        alg: "(R U2' R' U' R U' R') R' U' R",
        alternatives: ["(R U R' U R U2 R') R' U R"],
        name: "Sune 1",
    },
    {
        alg: "(R U2' R' U' R U' R') L U' L'",
        alternatives: ["(R U R' U R U2 R') L U L'"],
        name: "Sune 2",
    },
    {
        alg: "(R U R' U R U2 R') R' U' R",
        name: "Sune 3",
    },
    {
        alg: "(R U R' U R U2 R') U' L' U L",
        name: "Sune 4",
    },
    {
        alg: "(R U2' R' U' R U' R') L U2 L'",
        name: "Sune 5",
    },
];

export const advancedF2lSections: AlgSection[] = [
    {
        header: "A、Sune",
        algorithms: advancedF2lCases,
    },
];
