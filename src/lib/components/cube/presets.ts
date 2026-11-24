export const F2L_VIEW = {
    stage: "f2l",
    rotation: "y35x-30",
    view: "",
    fc: "yyyyyyyyyrrrrrrrrrbbbbbbbbbwwwwwwwwwoooooooooggggggggg",
} as const;

export const PLAYER_MASKS: Record<string, string> = {
    f2l: "EDGES:----IIII----,CORNERS:----IIII,CENTERS:------",
    oll: "EDGES:----OOOO----,CORNERS:----OOOO,CENTERS:------",
};
