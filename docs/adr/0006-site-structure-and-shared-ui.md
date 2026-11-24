# 0006. Site structure and shared UI conventions

- Status: Accepted
- Date: 2026-11-25
- Replaces comments in: `anchor.ts`, `nav.ts`, `site-index.svelte`, `case-sections.svelte`, `vis2dCard.svelte`, `ui/dialog/dialog-content.svelte`

The visual rules live in `DESIGN.md`. This ADR records the structural decisions behind them that the code cannot explain by itself.

## Decisions

### Section anchors come from the title
`anchorId(title)` is the section title with its whitespace removed, because an HTML `id` cannot contain spaces. `Section`, the jump row and the index all use this one function, so a link and its target cannot disagree. `anchorHref(title, path?)` links to the current page when `path` is left out.

### The site title is stored in two parts
`SITE_TITLE_LINES` splits the site name in two, at the only place where the home page's display heading may wrap: after 「的」. The home page renders each part as an `inline-block` span. `SITE_TITLE` is the two parts joined, for `<title>` and the header.

### The index uses an `onnavigate` callback, not `afterNavigate`
The mobile index sheet has to close when a link is tapped. Same-page anchor links do not fire SvelteKit's `afterNavigate`. So `SiteIndex` calls its `onnavigate` prop on every link click instead.

### Case cells span rows with subgrid
Every cell in a case table spans `1 + (the largest number of alternatives in its section)` rows and uses `grid-template-rows: subgrid`. As a result, cells in the same row share row heights: main rows line up and every 「或」 row lines up, so the hairlines form one straight line across the table. `CaseSections` works out the span. `Vis2dCard` applies it.

### The dialog can choose which element gets focus first
When the dialog opens, the first element marked `data-autofocus` gets focus (for example the player's play button). Otherwise focus goes to the first focusable element. bits-ui on its own would focus the first button in the content, which is usually a restart or step control. Waiting one frame before looking is tracked in [#10](https://github.com/aljohn0422/cubesheet/issues/10).

## Consequences

- Renaming a section title changes its anchor URL.
- New dialogs pick their first focus by adding `data-autofocus`, not by reordering markup.
