/** F2L 用的 3D 斜角視圖：只顯示前兩層；頂面黃、前面藍、右面紅 */
export const F2L_VIEW = {
    stage: "f2l",
    rotation: "y35x-30",
    view: "",
    fc: "yyyyyyyyyrrrrrrrrrbbbbbbbbbwwwwwwwwwoooooooooggggggggg",
} as const;

/**
 * 3D 動畫的貼紙遮罩（cubing.js stickering mask），依步驟只顯示相關顏色。
 * 播放器以 `x2` 把黃色翻到頂面，而遮罩是跟著「方塊」走的，所以不能用內建的 "OLL"/"PLL"
 * （它們會把白色層當成頂層），改成自訂字串：
 *   方塊順序 EDGES = UF UR UB UL | DF DR DB DL | FR FL BR BL、CORNERS = UFR URB UBL ULF | DRF DFL DLB DBR
 *   CENTERS = U L F R B D
 *   "-" 原色、"O" 只顯示主色（黃色）、"I" 全灰、"D" 變暗
 * 原本的 U 層（白色）在畫面底部、D 層（黃色）在頂部。
 */
export const PLAYER_MASKS: Record<string, string> = {
    // 前兩層原色，頂層全灰
    f2l: "EDGES:----IIII----,CORNERS:----IIII,CENTERS:------",
    // 前兩層原色，頂層只顯示黃色
    oll: "EDGES:----OOOO----,CORNERS:----OOOO,CENTERS:------",
    // ll（PLL）不加遮罩：動畫全部貼紙原色顯示，只有 2D 圖會用到 stage
};
