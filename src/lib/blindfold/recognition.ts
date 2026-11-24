import { letterCode } from "./cycles";

const FACE: Record<string, number> = { U: 0, L: 1, F: 2, R: 3, B: 4, D: 5 };

const NORMAL: Record<string, number[]> = {
    U: [0, 1, 0],
    D: [0, -1, 0],
    L: [-1, 0, 0],
    R: [1, 0, 0],
    F: [0, 0, 1],
    B: [0, 0, -1],
};

function cross(a: number[], b: number[]) {
    return [
        a[1] * b[2] - a[2] * b[1],
        a[2] * b[0] - a[0] * b[2],
        a[0] * b[1] - a[1] * b[0],
    ];
}

function dot(a: number[], b: number[]) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

export type RecogItem = {
    letter: string;
    location: string;
    main: number;
    sides: number[];
};

function locations(type: "edge" | "corner") {
    const len = type === "edge" ? 2 : 3;
    return Object.keys(letterCode).filter((loc) => loc.length === len);
}

export function randomRecognition(type: "edge" | "corner"): RecogItem {
    const locs = locations(type);
    const location = locs[Math.floor(Math.random() * locs.length)];
    const letter = (letterCode as Record<string, string>)[location];
    const main = FACE[location[0]];
    const sides = [-1, -1, -1, -1];

    if (type === "edge") {
        const side = Math.floor(Math.random() * 4);
        sides[side] = FACE[location[1]];
    } else {
        const [, o1, o2] = location;
        const look = NORMAL[location[0]].map((x) => -x);
        const cw =
            dot(cross(NORMAL[o1], NORMAL[o2]), look) > 0
                ? [FACE[o1], FACE[o2]]
                : [FACE[o2], FACE[o1]];
        const k = Math.floor(Math.random() * 4);
        sides[k] = cw[0];
        sides[(k + 1) % 4] = cw[1];
    }

    return { letter, location, main, sides };
}
