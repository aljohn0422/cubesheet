// Speffz 字母與循環追蹤（盲解）。從 solv 搬來，邏輯不變。

type Coordinate = {
    [key: string]: number[][]
}

const index2Face = {
    0: 'U',
    1: 'L',
    2: 'F',
    3: 'R',
    4: 'B',
    5: 'D',

    'U': 0,
    'L': 1,
    'F': 2,
    'R': 3,
    'B': 4,
    'D': 5,
}

let coordMap: Coordinate = {
    'UL': [[0, 1, 0], [1, 0, 1]],
    'UF': [[0, 2, 1], [2, 0, 1]],
    'UR': [[0, 1, 2], [3, 0, 1]],
    'UB': [[0, 0, 1], [4, 0, 1]],

    'DL': [[5, 1, 0], [1, 2, 1]],
    'DF': [[5, 0, 1], [2, 2, 1]],
    'DR': [[5, 1, 2], [3, 2, 1]],
    'DB': [[5, 2, 1], [4, 2, 1]],

    'LF': [[1, 1, 2], [2, 1, 0]],
    'LB': [[1, 1, 0], [4, 1, 2]],
    'RF': [[3, 1, 0], [2, 1, 2]],
    'RB': [[3, 1, 2], [4, 1, 0]],

    'LU': [[1, 0, 1], [0, 1, 0]],
    'FU': [[2, 0, 1], [0, 2, 1]],
    'RU': [[3, 0, 1], [0, 1, 2]],
    'BU': [[4, 0, 1], [0, 0, 1]],
    'LD': [[1, 2, 1], [5, 1, 0]],
    'FD': [[2, 2, 1], [5, 0, 1]],
    'RD': [[3, 2, 1], [5, 1, 2]],
    'BD': [[4, 2, 1], [5, 2, 1]],
    'FL': [[2, 1, 0], [1, 1, 2]],
    'BL': [[4, 1, 2], [1, 1, 0]],
    'FR': [[2, 1, 2], [3, 1, 0]],
    'BR': [[4, 1, 0], [3, 1, 2]],
    // CORNERS
    'UBL': [[0, 0, 0], [4, 0, 2], [1, 0, 0]],
    'UBR': [[0, 0, 2], [4, 0, 0], [3, 0, 2]],
    'UFR': [[0, 2, 2], [2, 0, 2], [3, 0, 0]],
    'UFL': [[0, 2, 0], [2, 0, 0], [1, 0, 2]],

    'LUB': [[1, 0, 0], [0, 0, 0], [4, 0, 2]],
    'LUF': [[1, 0, 2], [0, 2, 0], [2, 0, 0]],
    'LDF': [[1, 2, 2], [5, 0, 0], [2, 2, 0]],
    'LDB': [[1, 2, 0], [5, 2, 0], [4, 2, 2]],

    'FUL': [[2, 0, 0], [0, 2, 0], [1, 0, 2]],
    'FUR': [[2, 0, 2], [0, 2, 2], [3, 0, 0]],
    'FDR': [[2, 2, 2], [5, 0, 2], [3, 2, 0]],
    'FDL': [[2, 2, 0], [5, 0, 0], [1, 2, 2]],

    'RUF': [[3, 0, 0], [0, 2, 2], [2, 0, 2]],
    'RUB': [[3, 0, 2], [0, 0, 2], [4, 0, 0]],
    'RDB': [[3, 2, 2], [5, 2, 2], [4, 2, 0]],
    'RDF': [[3, 2, 0], [5, 0, 2], [2, 2, 2]],

    'BUR': [[4, 0, 0], [0, 0, 2], [3, 0, 2]],
    'BUL': [[4, 0, 2], [0, 0, 0], [1, 0, 0]],
    'BDL': [[4, 2, 2], [5, 2, 0], [1, 2, 0]],
    'BDR': [[4, 2, 0], [5, 2, 2], [3, 2, 2]],

    'DFL': [[5, 0, 0], [2, 2, 0], [1, 2, 2]],
    'DFR': [[5, 0, 2], [2, 2, 2], [3, 2, 0]],
    'DBR': [[5, 2, 2], [4, 2, 0], [3, 2, 2]],
    'DBL': [[5, 2, 0], [4, 2, 2], [1, 2, 0]],
}

export let letterCode = {
    // EDGES
    'UB': 'A',
    'UR': 'B',
    'UF': 'C',
    'UL': 'D',

    'LU': 'E',
    'LF': 'F',
    'LD': 'G',
    'LB': 'H',

    'FU': 'I',
    'FR': 'J',
    'FD': 'K',
    'FL': 'L',

    'RU': 'M',
    'RB': 'N',
    'RD': 'O',
    'RF': 'P',

    'BU': 'Q',
    'BL': 'R',
    'BD': 'S',
    'BR': 'T',

    'DF': 'U',
    'DR': 'V',
    'DB': 'W',
    'DL': 'X',

    // CORNERS
    'UBL': 'A',
    'UBR': 'B',
    'UFR': 'C',
    'UFL': 'D',

    'LUB': 'E',
    'LUF': 'F',
    'LDF': 'G',
    'LDB': 'H',

    'FUL': 'I',
    'FUR': 'J',
    'FDR': 'K',
    'FDL': 'L',

    'RUF': 'M',
    'RUB': 'N',
    'RDB': 'O',
    'RDF': 'P',

    'BUR': 'Q',
    'BUL': 'R',
    'BDL': 'S',
    'BDR': 'T',

    'DFL': 'U',
    'DFR': 'V',
    'DBR': 'W',
    'DBL': 'X',
}
function permute(str: string): string[] {
    if (str.length <= 1) return [str];

    let permutations = [];

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        // recursive call to get permutations of remaining chars 
        let remaining = str.slice(0, i) + str.slice(i + 1);
        let remainingPermuted = permute(remaining);

        // prepend char to each permutation of remaining chars
        for (let j = 0; j < remainingPermuted.length; j++) {
            permutations.push(char + remainingPermuted[j]);
        }
    }
    return permutations;
}


function findSticker(matrix: number[][][], location: string) {
    if (location.length == 3 && !coordMap[location]) {
        location = [location[0], location[2], location[1]].join('');
    }
    const coords = coordMap[location];

    return coords.map(coord => {
        const sticker = matrix[coord[0]][coord[1]][coord[2]];
        const side = index2Face[sticker as keyof typeof index2Face];
        return side
    }).join('')
}

export function findLetter(location: string) {
    if (!letterCode[location as keyof typeof letterCode]) {
        location = [location[0], location[2], location[1]].join('');
    }
    return letterCode[location as keyof typeof letterCode];
}

export function findCycle(matrix: number[][][], buffer: string, stickers: 2 | 3) {
    function filterOrientation(cubicles: string[]) {
        let ans: string[] = [];
        let mem: { [key: string]: number } = {};
        for (let cubicle of cubicles) {
            const group = cubicle.split('').sort().join('');
            if (['U', 'D'].includes(cubicle[0])) continue
            else if (mem[group as keyof typeof mem] == 1) continue
            else if (!coordMap[cubicle]) continue
            else {
                const coord = coordMap[cubicle][0];
                if (stickers == 2 || [0, 5].includes(matrix[coord[0]][coord[1]][coord[2]])) {
                    ans.push(cubicle);
                    mem[group as keyof typeof mem] = 1
                }
            }
        }
        return ans
    }

    const letterSortOrder = {
        'U': 0,
        'D': 1,
        'R': 3,
        'L': 4,
    }
    let unvisited = new Set(Object.keys(coordMap).filter(key => key.length == stickers));

    let cycles: string[][] = [];
    let cyclesCode: string[][] = [];
    let misOriented: Set<string> = new Set();

    let start = buffer;

    let tmpCycle: string[] = [];
    let tmpCycleCode: string[] = [];

    for (const from of Array.from(unvisited)) {
        const to = findSticker(matrix, from);

        if (misOriented.has(to) || misOriented.has(from)) continue
        else if (from == to) unvisited.delete(from);
        else if (new Set(from + to).size == stickers) {
            permute(to).forEach(sticker => {
                misOriented.add(sticker);
                unvisited.delete(sticker);
            })
        }
    }

    while (unvisited.size > 0) {
        tmpCycle.push(buffer);
        tmpCycleCode.push(findLetter(buffer));

        permute(buffer).forEach(sticker => {
            unvisited.delete(sticker);
        })

        buffer = findSticker(matrix, buffer);
        const union = new Set(start + buffer);
        if (union.size == stickers) {
            if (tmpCycle.length > 1) {
                tmpCycle.push(buffer)
                tmpCycleCode.push(findLetter(buffer));

                cycles.push([...tmpCycle]);
                cyclesCode.push([...tmpCycleCode]);

            }
            tmpCycle = [];
            tmpCycleCode = [];

            if (unvisited.size > 0) {
                buffer = Array.from(unvisited).sort((a, b) => {
                    return letterSortOrder[a as keyof typeof letterSortOrder] - letterSortOrder[b as keyof typeof letterSortOrder];
                })[0];
                start = buffer;
            }
        };
    }
    const misOrientedStickers = filterOrientation(Array.from(misOriented))
    let ret = {
        'cycles': cycles,
        'cyclesCode': cyclesCode,
        'misOriented': misOrientedStickers,
        'misOrientedCode': misOrientedStickers.map(sticker => findLetter(sticker)),
    }

    return ret
}

// Groups the speffz letters by the physical piece they sit on: each returned
// array is the letters of one piece (2 per edge, 3 per corner). Two letters
// from the same array are stickers of the same piece and must never be paired.
export function pieceLetterGroups(type: "edge" | "corner"): string[][] {
    const stickers = type === "edge" ? 2 : 3;
    const groups: { [key: string]: string[] } = {};
    for (const [location, letter] of Object.entries(letterCode)) {
        if (location.length !== stickers) continue;
        const key = location.split('').sort().join('');
        if (!groups[key]) groups[key] = [];
        groups[key].push(letter);
    }
    return Object.values(groups);
}