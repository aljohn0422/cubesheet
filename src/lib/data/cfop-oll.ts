import type { AlgSection } from "./types";

export const ollSections: AlgSection[] = [
    {
        header: "二段OLL",
        stage: "oll",
        algorithms: [
            {
                alg: "R U R' U R U2' R'",
                name: "OLL27",
            },
            {
                alg: "R U2' R' U' R U' R'",
                name: "OLL26",
            },
            {
                alg: "F R U R' U' R U R' U' R U R' U' F'",
                name: "OLL21",
                algDisplay: "F (R U R' U') (R U R' U') (R U R' U') F'",
            },
            {
                alg: "R U2' R2' U' R2 U' R2' U2' R",
                name: "OLL22",
            },
            {
                alg: "x' R U L U' R' U L' U' x",
                name: "OLL25",
            },
            {
                alg: "x' R U L' U' R' U L U' x",
                name: "OLL24",
            },
            {
                alg: "R2' D' R U2' R' D R U2' R",
                name: "OLL23",
            },
        ],
    },
    {
        header: "簡單OLL",
        stage: "oll",
        algorithms: [
            {
                alg: "F (R U R' U') F'",
                name: "OLL45",
            },
            {
                alg: "(R U R' U') R' F R F'",
                name: "OLL33",
            },
            {
                alg: "F (R U R' U') (R U R' U') F'",
                name: "OLL48",
            },
            {
                alg: "F' (L' U' L U) (L' U' L U) F",
                name: "OLL47",
            },
            {
                alg: "R' U' F' U F R",
                name: "OLL43",
            },
            {
                alg: "f (R U R' U') f'",
                name: "OLL44",
            },
            {
                alg: "F (U R U' R') (U R U' R') F'",
                name: "OLL51",
            },
            {
                alg: "R' U' R' F R F' U R",
                name: "OLL46",
            },
            {
                alg: "r U R' U R U2' r'",
                name: "OLL7",
            },
            {
                alg: "l' U' L U' L' U2' l",
                name: "OLL8",
            },
            {
                alg: "F R' F' R U R U' R'",
                name: "OLL37",
            },
            {
                alg: "r U2 R' U' R U' r'",
                name: "OLL6",
            },
            {
                alg: "l' U2 L U L' U l",
                name: "OLL5",
            },
            {
                alg: "r U R' U' r' R U R U' R'",
                name: "OLL28",
            },
            {
                alg: "R U R' U' R' r U R U' r'",
                name: "OLL57",
            },
            {
                alg: "(R U R' U) (R U' R' U') R' F R F'",
                name: "OLL38",
            },
            {
                alg: "(L' U' L U') (L' U L U) L F' L' F",
                name: "OLL36",
            },
        ],
    },
];
