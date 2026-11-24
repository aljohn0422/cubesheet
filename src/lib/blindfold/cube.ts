const U = 0;
const L = 1;
const F = 2;
const R = 3;
const B = 4;
const D = 5;

const originalFaces = [
    [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ],
    [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
    ],
    [
        [2, 2, 2],
        [2, 2, 2],
        [2, 2, 2],
    ],
    [
        [3, 3, 3],
        [3, 3, 3],
        [3, 3, 3],
    ],
    [
        [4, 4, 4],
        [4, 4, 4],
        [4, 4, 4],
    ],
    [
        [5, 5, 5],
        [5, 5, 5],
        [5, 5, 5],
    ],
];
function _transpose(mat: Array<Array<number>>) {
    const n = mat.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const temp = mat[j][i];
            mat[j][i] = mat[i][j];
            mat[i][j] = temp;
        }
    }
    return mat;
}

function _rotate(mat: Array<Array<number>>) {
    const n = mat.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n / 2; j++) {
            const temp = mat[i][j];
            mat[i][j] = mat[i][n - 1 - j];
            mat[i][n - 1 - j] = temp;
        }
    }
    return mat;
}

function _clockwise(mat: Array<Array<number>>) {
    return _rotate(_transpose(mat));
}
function _counterClockwise(mat: Array<Array<number>>) {
    return _transpose(_rotate(mat));
}

function move(faces: number[][][], notation: string) {
    let tmp: number[] | number;
    switch (notation) {
        case "U":
            faces[U] = _clockwise(faces[U]);
            tmp = faces[L][0];
            faces[L][0] = faces[F][0];
            faces[F][0] = faces[R][0];
            faces[R][0] = faces[B][0];
            faces[B][0] = tmp;
            break;
        case "U'":
            faces[U] = _counterClockwise(faces[U]);
            tmp = faces[B][0];
            faces[B][0] = faces[R][0];
            faces[R][0] = faces[F][0];
            faces[F][0] = faces[L][0];
            faces[L][0] = tmp;
            break;
        case "D":
            faces[D] = _clockwise(faces[D]);
            tmp = faces[B][2];
            faces[B][2] = faces[R][2];
            faces[R][2] = faces[F][2];
            faces[F][2] = faces[L][2];
            faces[L][2] = tmp;
            break;
        case "D'":
            faces[D] = _counterClockwise(faces[D]);
            tmp = faces[L][2];
            faces[L][2] = faces[F][2];
            faces[F][2] = faces[R][2];
            faces[R][2] = faces[B][2];
            faces[B][2] = tmp;
            break;
        case "R":
            faces[R] = _clockwise(faces[R]);
            tmp = [faces[U][2][2], faces[U][1][2], faces[U][0][2]];
            for (let i = 0; i < 3; i++) faces[U][i][2] = faces[F][i][2];
            for (let i = 0; i < 3; i++) faces[F][i][2] = faces[D][i][2];
            for (let i = 0; i < 3; i++)
                faces[D][i][2] = faces[B][Math.abs(i - 2)][0];
            for (let i = 0; i < 3; i++) faces[B][i][0] = tmp[i];
            break;
        case "R'":
            faces[R] = _counterClockwise(faces[R]);
            tmp = [faces[D][2][2], faces[D][1][2], faces[D][0][2]];
            for (let i = 0; i < 3; i++) faces[D][i][2] = faces[F][i][2];
            for (let i = 0; i < 3; i++) faces[F][i][2] = faces[U][i][2];
            for (let i = 0; i < 3; i++)
                faces[U][i][2] = faces[B][Math.abs(i - 2)][0];
            for (let i = 0; i < 3; i++) faces[B][i][0] = tmp[i];
            break;
        case "L":
            faces[L] = _clockwise(faces[L]);
            tmp = [faces[D][2][0], faces[D][1][0], faces[D][0][0]];
            for (let i = 0; i < 3; i++) faces[D][i][0] = faces[F][i][0];
            for (let i = 0; i < 3; i++) faces[F][i][0] = faces[U][i][0];
            for (let i = 0; i < 3; i++)
                faces[U][i][0] = faces[B][Math.abs(i - 2)][2];
            for (let i = 0; i < 3; i++) faces[B][i][2] = tmp[i];
            break;
        case "L'":
            faces[L] = _counterClockwise(faces[L]);
            tmp = [faces[U][2][0], faces[U][1][0], faces[U][0][0]];
            for (let i = 0; i < 3; i++) faces[U][i][0] = faces[F][i][0];
            for (let i = 0; i < 3; i++) faces[F][i][0] = faces[D][i][0];
            for (let i = 0; i < 3; i++)
                faces[D][i][0] = faces[B][Math.abs(i - 2)][2];
            for (let i = 0; i < 3; i++) faces[B][i][2] = tmp[i];
            break;
        case "F":
            faces[F] = _clockwise(faces[F]);
            tmp = faces[U][2];
            faces[U][2] = [faces[L][2][2], faces[L][1][2], faces[L][0][2]];
            for (let i = 0; i < 3; i++) faces[L][i][2] = faces[D][0][i];
            faces[D][0] = [faces[R][2][0], faces[R][1][0], faces[R][0][0]];
            for (let i = 0; i < 3; i++) faces[R][i][0] = tmp[i];
            break;
        case "F'":
            faces[F] = _counterClockwise(faces[F]);
            tmp = faces[U][2].reverse();
            faces[U][2] = [faces[R][0][0], faces[R][1][0], faces[R][2][0]];
            for (let i = 0; i < 3; i++)
                faces[R][Math.abs(i - 2)][0] = faces[D][0][i];
            faces[D][0] = [faces[L][0][2], faces[L][1][2], faces[L][2][2]];
            for (let i = 0; i < 3; i++) faces[L][i][2] = tmp[i];
            break;
        case "B":
            faces[B] = _clockwise(faces[B]);
            tmp = faces[U][0].reverse();
            faces[U][0] = [faces[R][0][2], faces[R][1][2], faces[R][2][2]];
            for (let i = 0; i < 3; i++)
                faces[R][Math.abs(i - 2)][2] = faces[D][2][i];
            faces[D][2] = [faces[L][0][0], faces[L][1][0], faces[L][2][0]];
            for (let i = 0; i < 3; i++) faces[L][i][0] = tmp[i];
            break;
        case "B'":
            faces[B] = _counterClockwise(faces[B]);
            tmp = faces[U][0];
            faces[U][0] = [faces[L][2][0], faces[L][1][0], faces[L][0][0]];
            for (let i = 0; i < 3; i++) faces[L][i][0] = faces[D][2][i];
            faces[D][2] = [faces[R][2][2], faces[R][1][2], faces[R][0][2]];
            for (let i = 0; i < 3; i++) faces[R][i][2] = tmp[i];
            break;
        default:
            break;
    }
    return faces
}

export function doScramble(scramble: string) {
    let faces = originalFaces.map((face) => face.map((row) => [...row]));
    for (let notation of scramble.split(" ")) {
        let times = 1;
        const match = /(\D+)(\d*)/.exec(notation);

        if (match) {
            times = match[2] ? parseInt(match[2]) : 1;
            notation = match[1];
        }

        for (let index = 0; index < times; index++) {
            faces = move(faces, notation);
        }
    }
    return faces
}

export const STICKER_COLORS = [
    "#ffffff",
    "#FF9800",
    "#43A047",
    "#F44336",
    "#1565C0",
    "#FDD835",
];
