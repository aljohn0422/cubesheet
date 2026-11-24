import { DIVIDER, type AlgCase, type AlgSection } from "./types";

export const isCase = (item: AlgCase | typeof DIVIDER): item is AlgCase => item !== DIVIDER;

export const countAlgs = (section: AlgSection) => section.algorithms.filter(isCase).length;

export const sumAlgs = (sections: AlgSection[]) =>
    sections.reduce((sum, section) => sum + countAlgs(section), 0);

export const indexByName = (cases: AlgCase[]) =>
    Object.fromEntries(cases.map((c) => [c.name, c])) as Record<string, AlgCase>;

export const jumpItems = (sections: AlgSection[]) =>
    sections.map((section) => ({ title: section.header, count: countAlgs(section) }));

export const picker = (cases: AlgCase[]) => {
    const byName = indexByName(cases);
    return (names: string[]) => names.map((n) => (n === DIVIDER ? DIVIDER : byName[n]));
};
