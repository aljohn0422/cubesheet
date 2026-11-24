export interface AlgCase {
    alg: string;
    name: string;
    algDisplay?: string;
    alternatives?: string[];
    arrow?: string;
    setup?: string;
}

export const DIVIDER = "divider";

export interface AlgSection {
    header: string;
    stage?: string;
    algorithms: (AlgCase | typeof DIVIDER)[];
}
