import { letterCode } from "./cycles";

// Face -> color/palette index, matching STICKER_COLORS in cube.ts.
const FACE: Record<string, number> = { U: 0, L: 1, F: 2, R: 3, B: 4, D: 5 };

// Outward normal of each face in a right-handed frame (x right, y up, z front).
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

// One sticker to recognise. `main` is the palette index of the sticker facing
// the solver; `sides` are the neighbouring stickers in [top, right, bottom,
// left] order (-1 = empty). The rotation is randomised so the same physical
// piece is trained from every angle.
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
    const sides = [-1, -1, -1, -1]; // top, right, bottom, left

    if (type === "edge") {
        // The partner sticker can sit on any of the 4 sides — every rotation
        // is the same edge, so pick one at random.
        const side = Math.floor(Math.random() * 4);
        sides[side] = FACE[location[1]];
    } else {
        // Order the two neighbours clockwise as seen looking straight at the
        // main sticker, then drop them onto a random vertex (two adjacent
        // sides). Preserving clockwise order keeps every rotation a valid view
        // of the same corner.
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
