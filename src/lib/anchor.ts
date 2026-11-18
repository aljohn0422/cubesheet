/** 段落錨點：以標題為準、去掉空白（HTML id 不能有空白）。Section、本頁段落列、目錄共用。 */
export const anchorId = (title: string) => title.replace(/\s+/g, "");

/** 連到某頁某段落的網址；path 省略時是本頁 */
export const anchorHref = (title: string, path = "") =>
    `${path}#${encodeURIComponent(anchorId(title))}`;
