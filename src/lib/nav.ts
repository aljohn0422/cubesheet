import { advancedF2lSections } from "$lib/data/advanced-f2l";
import { f2lSections } from "$lib/data/cfop-f2l";
import { ollSections } from "$lib/data/cfop-oll";
import { pllSections } from "$lib/data/cfop-pll";
import { sumAlgs } from "$lib/data/util";

/**
 * 網站導覽的唯一來源：目錄、首頁、頁首路徑與 <title> 都從這裡產生。
 *
 * 擴充方式：
 * - 新章節：在對應分組的 `items` 加一筆，並在 src/routes 下建立同網址的頁面。
 * - 新方塊／新解法：在 `navGroups` 加一個分組（例如「二階」「四階」）。
 * - 還沒整理的步驟：不給 `url`，目錄會略過它，首頁會標「未收錄」。
 */
export interface Chapter {
    title: string;
    /** 沒有網址代表尚未收錄 */
    url?: string;
    summary: string;
    /** 收錄的公式數量 */
    extent?: number;
}

export interface NavGroup {
    title: string;
    /** 是否有學習順序；首頁會替這組的章節編號 */
    ordered?: boolean;
    items: Chapter[];
}

/** 網站名稱；分成兩段是首頁大標的斷行位置（只在「的」之後換行） */
export const SITE_TITLE_LINES = ["給老婆小孩的", "魔術方塊筆記"] as const;
export const SITE_TITLE = SITE_TITLE_LINES.join("");

export const navGroups: NavGroup[] = [
    {
        title: "三階 CFOP",
        ordered: true,
        items: [
            {
                title: "白色十字",
                summary: "先用自己會的方法完成底面的白色十字。",
            },
            {
                title: "F2L",
                url: "/333cfop/f2l",
                summary: "一次完成前兩層，大多可以靠理解，不用硬背。",
                extent: sumAlgs(f2lSections),
            },
            {
                title: "OLL",
                url: "/333cfop/oll",
                summary: "把頂面翻成全黃。",
                extent: sumAlgs(ollSections),
            },
            {
                title: "PLL",
                url: "/333cfop/pll",
                summary: "最後把頂層排到正確位置。",
                extent: sumAlgs(pllSections),
            },
        ],
    },
    {
        title: "三階 進階",
        items: [
            {
                title: "十字 +1",
                url: "/333advanced/cross-plus-one",
                summary: "跟比賽高手學：十字做完怎麼順順接到前兩組 F2L。",
            },
            {
                title: "進階 F2L",
                url: "/333advanced/f2l",
                summary: "Sune 系列。",
                extent: sumAlgs(advancedF2lSections),
            },
            {
                title: "ZBLL",
                url: "/333advanced/zbll",
                summary: "依形狀與小組分類。",
                // zbll.json 的筆數。不從資料 import：nav 每一頁都會載入，160KB 的 JSON 只該跟著 ZBLL 頁
                extent: 472,
            },
        ],
    },
    {
        title: "三階 盲解",
        items: [
            {
                title: "盲解練習",
                url: "/333bld/practice",
                summary: "打亂找循環、字母配對、貼紙辨認。",
            },
        ],
    },
];

/** 依路徑找出目前章節與其所屬群組；首頁或找不到時回傳 undefined */
export function findNav(pathname: string) {
    for (const group of navGroups) {
        const item = group.items.find((item) => item.url === pathname);
        if (item) return { group, item };
    }
    return undefined;
}
