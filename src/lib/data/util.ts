import { DIVIDER, type AlgCase, type AlgSection } from "./types";

export const isCase = (item: AlgCase | typeof DIVIDER): item is AlgCase => item !== DIVIDER;

/** 段落裡的公式數（不含分隔列） */
export const countAlgs = (section: AlgSection) => section.algorithms.filter(isCase).length;

/** 多個段落的公式總數 */
export const sumAlgs = (sections: AlgSection[]) =>
    sections.reduce((sum, section) => sum + countAlgs(section), 0);

/** 依名稱查公式，給插圖之類需要挑特定公式的地方用 */
export const indexByName = (cases: AlgCase[]) =>
    Object.fromEntries(cases.map((c) => [c.name, c])) as Record<string, AlgCase>;

/** 段落 → 本頁段落列的項目 */
export const jumpItems = (sections: AlgSection[]) =>
    sections.map((section) => ({ title: section.header, count: countAlgs(section) }));

/** 依名稱列出公式的挑選器；"divider" 會保留為分隔列 */
export const picker = (cases: AlgCase[]) => {
    const byName = indexByName(cases);
    return (names: string[]) => names.map((n) => (n === DIVIDER ? DIVIDER : byName[n]));
};
