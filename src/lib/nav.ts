import { advancedF2lSections } from "$lib/data/advanced-f2l";
import { f2lSections } from "$lib/data/cfop-f2l";
import { ollSections } from "$lib/data/cfop-oll";
import { pllSections } from "$lib/data/cfop-pll";
import { sumAlgs } from "$lib/data/util";

export interface Chapter {
    title: string;
    url?: string;
    summary: string;
    extent?: number;
}

export interface NavGroup {
    title: string;
    ordered?: boolean;
    items: Chapter[];
}

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

export function findNav(pathname: string) {
    for (const group of navGroups) {
        const item = group.items.find((item) => item.url === pathname);
        if (item) return { group, item };
    }
    return undefined;
}
