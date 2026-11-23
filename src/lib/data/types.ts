/** 一個公式；`algDisplay` 為顯示用的分組寫法（未設定時顯示 `alg`）。 */
export interface AlgCase {
    alg: string;
    name: string;
    algDisplay?: string;
    /** 替代公式 */
    alternatives?: string[];
    /** VisualCube 箭頭語法，例如 "U0U2,U2U6" */
    arrow?: string;
    /** 打亂狀態；有設定時圖解與動畫都從這個狀態開始（ZBLL 用） */
    setup?: string;
}

/** 公式表裡的分隔列（同一段落內再分組） */
export const DIVIDER = "divider";

/** 一個段落：標題加一張公式表。`stage` 是圖解的遮罩（oll / ll / f2l…） */
export interface AlgSection {
    header: string;
    stage?: string;
    algorithms: (AlgCase | typeof DIVIDER)[];
}
