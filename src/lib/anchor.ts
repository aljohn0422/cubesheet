export const anchorId = (title: string) => title.replace(/\s+/g, "");

export const anchorHref = (title: string, path = "") =>
    `${path}#${encodeURIComponent(anchorId(title))}`;
