import type { AlgCase, AlgSection } from "./types";
import { picker } from "./util";

export const f2lCases: AlgCase[] = [
    {
        alg: "U (R U' R')",
        name: "F2L 1",
    },
    {
        alg: "y U' (L' U L) y'",
        name: "F2L 2",
    },
    {
        alg: "y' (R' U' R) y",
        name: "F2L 3",
    },
    {
        alg: "(R U R')",
        name: "F2L 4",
    },
    {
        alg: "U' R U R' U2 (R U' R')",
        name: "F2L 5",
    },
    {
        alg: "y' U R' U' R U2 (R' U R) y",
        name: "F2L 6",
    },
    {
        alg: "U' R U2 R' U2 (R U' R')",
        name: "F2L 7",
    },
    {
        alg: "d R' U2 R U2 (R' U R) y",
        name: "F2L 8",
    },
    {
        alg: "U' R U' R' d (R' U' R) y",
        name: "F2L 9",
    },
    {
        alg: "U' R U R' U R U R'",
        name: "F2L 10",
    },
    {
        alg: "U' R U2 R' d (R' U' R) y",
        name: "F2L 11",
    },
    {
        alg: "R' U2 R2 U R2 U R",
        name: "F2L 12",
    },
    {
        alg: "d R' U R U' (R' U' R) y",
        name: "F2L 13",
    },
    {
        alg: "U' R U' R' U (R U R')",
        name: "F2L 14",
    },
    {
        alg: "F' U F U2 (R U R')",
        name: "F2L 15",
    },
    {
        alg: "R U' R' U2 y' (R' U' R) y",
        name: "F2L 16",
    },
    {
        alg: "R U2 R' U' (R U R')",
        name: "F2L 17",
    },
    {
        alg: "y' R' U2 R U (R' U' R) y",
        name: "F2L 18",
    },
    {
        alg: "U R U2 R' U (R U' R')",
        name: "F2L 19",
    },
    {
        alg: "y' U' R' U2 R U' (R' U R) y",
        name: "F2L 20",
    },
    {
        alg: "U2 R U R' U (R U' R')",
        name: "F2L 21",
    },
    {
        alg: "y' U2 R' U' R U' (R' U R) y",
        name: "F2L 22",
    },
    {
        alg: "R U R' U2 R U R' U' (R U R')",
        name: "F2L 23",
    },
    {
        alg: "R U R' d R' U R U' (R' U R) y",
        name: "F2L 24",
    },
    {
        alg: "U' F' U F U (R U' R')",
        name: "F2L 25",
    },
    {
        alg: "U R U' R' U' F' U F",
        name: "F2L 26",
    },
    {
        alg: "R U' R' U (R U' R')",
        name: "F2L 27",
    },
    {
        alg: "y' R' U R U' (R' U R) y",
        name: "F2L 28",
    },
    {
        alg: "y' R' U' R U (R' U' R) y",
        name: "F2L 29",
    },
    {
        alg: "R U R' U' (R U R')",
        name: "F2L 30",
    },
    {
        alg: "R U' R' U (F' U F)",
        name: "F2L 31",
    },
    {
        alg: "(R U R' U') (R U R' U') (R U R')",
        name: "F2L 32",
    },
    {
        alg: "U' R U' R' U2 (R U' R')",
        name: "F2L 33",
    },
    {
        alg: "U' R U2 R' U (R U R')",
        name: "F2L 34",
    },
    {
        alg: "U' R U R' U (F' U' F)",
        name: "F2L 35",
    },
    {
        alg: "U F' U' F U' (R U R')",
        name: "F2L 36",
    },
    {
        alg: "R U' R' U y' R' U2 R U2 (R' U R) y",
        name: "F2L 37",
    },
    {
        alg: "(R U R' U') R U2 R' U' (R U R')",
        name: "F2L 38",
    },
    {
        alg: "(R U' R' U) R U2 R' U (R U' R')",
        name: "F2L 39",
    },
    {
        alg: "R U' R' U' R U' R' U (F' U' F)",
        name: "F2L 40",
    },
    {
        alg: "R U R' U' R U' R' U2 (F' U' F)",
        name: "F2L 41",
    },
];

const pick = picker(f2lCases);

export const f2lSections: AlgSection[] = [
    {
        header: "A、作到隔壁",
        algorithms: pick([
            "F2L 1",
            "F2L 5",
            "F2L 7",
            "divider",
            "F2L 2",
            "F2L 6",
            "F2L 8",
        ]),
    },
    {
        header: "B、作到對面",
        algorithms: pick([
            "F2L 3",
            "F2L 9",
            "F2L 11",
            "F2L 13",
            "divider",
            "F2L 4",
            "F2L 10",
            "F2L 12",
            "F2L 14",
        ]),
    },
    {
        header: "C、角塊朝上",
        algorithms: pick(["F2L 19", "F2L 21", "divider", "F2L 20", "F2L 22"]),
    },
    {
        header: "D、黏在一起但是方向錯了",
        algorithms: pick([
            "F2L 15",
            "F2L 16",
            "divider",
            "F2L 17",
            "F2L 18",
            "divider",
            "F2L 23",
            "F2L 24",
        ]),
    },
    {
        header: "E、角塊位置正確",
        algorithms: pick([
            "F2L 25",
            "F2L 26",
            "divider",
            "F2L 27",
            "F2L 28",
            "divider",
            "F2L 29",
            "F2L 30",
        ]),
    },
    {
        header: "F、邊塊位置正確",
        algorithms: pick([
            "F2L 31",
            "F2L 32",
            "divider",
            "F2L 33",
            "F2L 34",
            "divider",
            "F2L 35",
            "F2L 36",
        ]),
    },
    {
        header: "G、邊角位置都正確",
        algorithms: pick([
            "F2L 38",
            "F2L 39",
            "divider",
            "F2L 40",
            "F2L 41",
            "divider",
            "F2L 37",
        ]),
    },
];
