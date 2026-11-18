---
name: 給老婆小孩的魔術方塊筆記
description: A well-printed algorithm cheat sheet. Black ink on white, ruled table cells, notation as the largest text; cube stickers are the only colour.
colors:
  ink: "#111111"
  paper: "#ffffff"
  errata: "#c4301a"
  rule-grey: "#d4d4d4"
  secondary-grey: "#525252"
  wash-grey: "#f5f5f5"
  press-grey: "#e5e5e5"
  ink-hover: "#262626"
typography:
  display:
    fontFamily: "\"Schibsted Grotesk\", \"Noto Sans TC\", ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3.5rem, 11vw, 6rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.03em"
  display-home:
    fontFamily: "\"Schibsted Grotesk\", \"Noto Sans TC\", ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 6vw, 4.25rem)"
    fontWeight: 900
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  headline-error:
    fontFamily: "\"Schibsted Grotesk\", \"Noto Sans TC\", ui-sans-serif, system-ui, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 800
    lineHeight: 1.11
    letterSpacing: "-0.02em"
  title:
    fontFamily: "\"Schibsted Grotesk\", \"Noto Sans TC\", ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.33
  notation:
    fontFamily: "\"Schibsted Grotesk\", \"Noto Sans TC\", ui-sans-serif, system-ui, sans-serif"
    fontSize: "19px"
    fontWeight: 600
    lineHeight: 1.375
  lede:
    fontFamily: "\"Schibsted Grotesk\", \"Noto Sans TC\", ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.75
  body:
    fontFamily: "\"Schibsted Grotesk\", \"Noto Sans TC\", ui-sans-serif, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "\"Schibsted Grotesk\", \"Noto Sans TC\", ui-sans-serif, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 600
    lineHeight: 1.5
  caption:
    fontFamily: "\"Schibsted Grotesk\", \"Noto Sans TC\", ui-sans-serif, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.5
    fontFeature: "\"tnum\""
rounded:
  none: "0px"
  sticker: "4px"
  figure: "6px"
  control: "8px"
  frame: "12px"
spacing:
  hairline: "1px"
  head-rule: "2px"
  cell: "16px"
  row-x: "8px"
  gutter: "20px"
  section: "64px"
components:
  case-cell:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.notation}"
    rounded: "{rounded.none}"
    padding: "16px"
  case-cell-hover:
    backgroundColor: "{colors.wash-grey}"
  case-cell-active:
    backgroundColor: "{colors.press-grey}"
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0 20px"
    height: "44px"
  button-ink-hover:
    backgroundColor: "{colors.ink-hover}"
  button-outline:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0 16px"
    height: "44px"
  button-outline-hover:
    backgroundColor: "{colors.wash-grey}"
  index-row:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0 8px"
    height: "44px"
  index-row-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  jump-link:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    height: "44px"
  dialog:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.frame}"
    padding: "16px 20px 20px"
    width: "384px"
---

# Design System: 給老婆小孩的魔術方塊筆記

## Overview

**Creative North Star: "公式速查表 (The Alg Cheat Sheet)"**

The site is a well-printed algorithm cheat sheet: black ink on white paper, ruled table cells, and notation set as the largest, heaviest text inside each cell. It reads like a sheet you could print and tape next to the cube, and `@media print` makes that literal: header, index and jump row drop away, cells refuse to break across pages.

Density is high but orderly. Every case is one cell in a 1px ruled grid; every section opens with a bold heading over a 2px rule and a grey count at the right. Nothing is boxed for decoration: borders exist only where a table would draw them. Colour is reserved for the cube diagrams themselves, so the yellow of an OLL face or the red/blue of an F2L slot is the only chroma on the page and therefore the thing the eye lands on.

Structure is data-driven. One list in `src/lib/nav.ts` (groups → chapters) generates the left index, the home tables, the header path and the document title, so a new puzzle or method is a data entry plus a route, not a redesign.

Confirmed rejection: the earlier "boxed reference manual" world (coloured divider boards, acetate leaf, fore-edge tab rail) was built and rejected by the user. Colour fields and decorative shells are out.

**Key Characteristics:**
- Ink #111 on white; grey only for secondary text and hairlines; red only for errors.
- 1px ruled grids inside rounded 12px frames, 2px rule under section heads, 8px rounded controls.
- Schibsted Grotesk for Latin and notation, Noto Sans TC for CJK, one sans stack.
- Notation is the largest text in a cell (19px semibold), larger than the case name.
- Cube stickers are the only colour.
- Navigation is generated from `navGroups`; extending the site is a data change.

## Colors

A monochrome ink-and-paper palette with one error red; all chroma comes from the cube stickers.

### Primary
- **Press Ink** (#111111, `--ink: 17 17 17`): all text, every structural rule, the active index row fill, the primary button fill, focus outlines, text selection background, and the player's current-move underline. Exposed to Tailwind as `ink` with alpha (`rgb(var(--ink) / <alpha>)`); the scrollbar thumb uses ink at 35%, the face-down hatch at 8%, the current-move tint at 12%.

### Secondary
- **Errata Red** (#c4301a): errors only. The one current use is the cube diagram's failure state (red 1px frame and "圖片無法顯示"). shadcn's `--destructive` is bound to the same hue.

### Neutral
- **Paper** (#ffffff, `--paper: 255 255 255`): page, cells, dialog, sheet, idle buttons.
- **Secondary Grey** (#525252, Tailwind `neutral-600`, shadcn `--muted-foreground`): counts, move tallies, figure captions, group labels in the index, the header path, chapter summaries' "收錄 N 個", unlisted chapters.
- **Rule Grey** (#d4d4d4, Tailwind `neutral-300`, shadcn `--border`): inner row dividers in lists and tables (index rows, home chapter rows, notation table, alternative-alg rows). The last row of a list closes in ink.
- **Wash Grey** (#f5f5f5, `neutral-100`): hover fill for every interactive row, cell and outline button; also the 12px spacer strip between case groups inside an F2L grid.
- **Press Grey** (#e5e5e5, `neutral-200`): active (pressed) state of a case cell.
- **Ink Hover** (#262626, `neutral-800`): hover on ink-filled buttons.
- **Scrim** (ink at 45%, `bg-ink/45`): the overlay behind dialog and sheet.

### Named Rules
**The Stickers-Only Rule.** Cube diagrams and the 3D player are the only coloured things on the page. No accent colour, no tinted section, no coloured chip.

**The Grey-Is-Secondary Rule.** Grey is for text that is subordinate (counts, captions, summaries) and for inner hairlines. It is never a fill for a panel or a heading.

**The Red-Means-Wrong Rule.** Errata red appears only when something failed. It is not an emphasis or highlight colour.

## Typography

**Display Font:** Schibsted Grotesk (with Noto Sans TC, then system sans)
**Body Font:** Schibsted Grotesk / Noto Sans TC (same stack; Latin glyphs come from Schibsted, CJK falls through to Noto Sans TC)
**Label/Mono Font:** none; counts use `tabular-nums` instead of a mono face.

**Character:** A sturdy, slightly condensed newspaper grotesk paired with a plain CJK gothic. Both are loaded from Google Fonts (Schibsted 400–900 variable, Noto Sans TC 400/500/700/900).

### Hierarchy
- **Display** (800, clamp(3.5rem, 11vw, 6rem), line-height 1, -0.03em): the chapter title in the layout ("OLL", "F2L"). One per page.
- **Display Home** (900, clamp(2.25rem, 6vw, 4.25rem), 1.15, -0.02em): the site title on the home page only; breaks only after 「的」.
- **Headline Error** (800, 2.25rem, -0.02em): the 404 / error page heading.
- **Title** (700, 1.5rem): section heads over the 2px rule; also the player dialog title.
- **Notation** (600, 19px, snug): algorithms in case cells and the notation table symbols; the player's alg viewer (line-height 1.6). Alternatives and the notation table on small screens step down to 17px semibold.
- **Lede** (400, 1.125rem): chapter summary under the display title, home intro, chapter row titles on home (bold there).
- **Body** (400, 17px, line-height 1.75): teaching prose, max 38em per paragraph.
- **Label** (600–700, 15px): site name, header path, index rows, jump-row links, case names, button text, section counts and figure captions (regular weight).
- **Caption** (400, 13px, tabular): move counts ("7 步"), index counts, group labels (semibold), "或" and "未收錄", speed control.

### Named Rules
**The Notation-Is-Largest Rule.** Inside a case cell the algorithm is the biggest, heaviest text (19px semibold); the case name sits above it at 15px bold and the move count below at 13px grey.

**The Closed Ramp Rule.** Every literal font size in app code is one of: 13px, 15px, 17px, 19px, 1.125rem, 1.5rem, 2.25rem, or the two display clamps. Add a step here before using a new size.

## Layout

- **Shell:** max width 90rem, 20px side gutter. A sticky 56px header (site name left, group ／ chapter path centre on lg, 目錄 button right below lg) ruled off with 1px ink.
- **Desktop (lg, 1024px+):** two columns, a 14rem sticky left index and the content column, 56px apart. The index scrolls independently under the header. The header is exactly 3.5rem (`h-14`) including its 1px bottom rule, so anything sticky under it uses `top-14`, and `html { scroll-padding-top: 5rem }` gives every anchor jump room below it. Do not move `h-14` off the `<header>` element, or the rule falls outside the height and sticky elements jump 1px between the scrolled and unscrolled states.
- **Mobile:** the index moves into a left sheet (min(20rem, 85vw)) opened by the 目錄 button and closed on navigation.
- **Chapter page order:** display title + lede, then the jump row (ruled top and bottom, section titles with grey counts), then the teaching section 「怎麼學」, then the case-table sections. This order is a user decision: teaching prose precedes the case tables, and the jump row is the fast path to any table in one tap.
- **Case grid:** 1 column, 2 at md (768px), 3 at xl (1280px). Narrowing drops columns; cells never shrink their 88px diagram.
- **Figures:** pairs of case cells at max 46rem, 2 columns from sm, grey caption beneath.
- **Rhythm:** sections 64px apart (`mb-16`), heading 20px above content, cell padding 16px, list rows 12px vertical / 8px horizontal. Section anchors offset 80px for the sticky header.
- **Touch targets:** every interactive row, link and button is at least 44px tall.

## Elevation & Depth

Flat. Depth is conveyed by ink rules and the scrim, not by shadows. The only shadow in the system is on the modal dialog, a soft drop that separates the floating player from the scrimmed page.

### Shadow Vocabulary
- **Dialog lift** (`box-shadow: 0 18px 40px -8px rgb(17 17 17 / 0.35)`): player dialog only.

### Named Rules
**The Table-Not-Stack Rule.** Hierarchy comes from rule weight (1px cell, 2px section head, ink vs grey hairline), never from raised cards.

## Shapes

Soft corners on a printed table. The user chose rounded corners over the earlier all-square look, so every box and control is rounded, while the lines inside a table stay straight.

- **Radius scale:** 12px frame (`rounded-xl`: case-grid and figure frames, dialog, the practice boxes on 盲解練習, the free edge of the sheet), 8px control (`rounded-lg`: buttons, segmented controls, index rows and home chapter rows), 6px figure (`rounded-md`: the cube diagram's loading and error frames), 4px sticker (`rounded`: stickers in the 盲解 net and the side bars of the recognition sticker).
- **Ruled frame:** `.ruled-frame` draws a full 1px ink border with the 12px radius and clips its content; the `.ruled-grid` inside it draws only each cell's right and bottom line and overhangs the frame by 1px to the right and bottom, so the last column's and last row's lines hide under the frame. Every edge gets exactly one line, and the corner cells' hover fill follows the curve. Cells themselves stay square.
- **Lines stay straight:** never put a border on an element that is also rounded inside a ruled list. Draw the hairlines on a wrapper (`li` or a `divide-y` parent) and let the rounded row carry only its fill, as the index does. Lists open with an ink top rule, separate rows with grey hairlines and close with an ink bottom rule. Disabled controls are "face-down": a 135° ink hatch at 8% like a crossed-out cell. A cube diagram still loading shows a dashed grey frame, like an unpasted figure.

## Components

### Buttons
Rounded, ink-ruled, 44px tall.
- **Shape:** 8px radius (`rounded-lg`).
- **Ink (primary):** ink fill, paper text, 15px semibold, 20px side padding ("回首頁", the player's play/pause). Hover ink-hover.
- **Outline:** 1px ink border on paper, wash-grey hover (目錄 trigger, player step/restart icon buttons at 44×44).
- **Segmented:** a row of 44px cells inside one 8px-rounded ink frame (`overflow-hidden`) with ink dividers; the selected cell is ink-filled. Used for the player speed and the 盲解練習 mode and piece-type pickers.
- **Close:** 44px transparent-bordered, 8px-rounded button in dialog/sheet corners that gains an ink border on hover.
- **Disabled:** text at ink/25 plus the face-down hatch.
- **Focus:** global 2px ink outline, 2px offset.

### Case Cell (signature)
The unit of the sheet. The whole cell is a dialog trigger: 88px VisualCube diagram left, then case name (15px bold), algorithm (19px semibold, grouping chunks never wrap internally), move count (13px grey). Hover wash grey, pressed press grey. Alternatives hang below as 44px rows divided by a grey hairline: "或", the alternative at 17px, its count.

### Player Dialog
Max 24rem, ink border, dialog lift, title over a 2px ink rule. A 224px twisty-player, a control row (restart, step back, play/pause, step forward), the alg viewer between ink rules at 19px with cubing.js's blue current-move marker rethemed to an ink 12% tint with a 2px ink underline, then the speed control.

### Navigation
- **Index:** shared by the desktop column and the mobile sheet. 首頁 and 記號說明 rows, then one block per group that has at least one listed chapter: a 13px grey semibold group label, an ink-ruled list of 44px rows with the title and a 13px grey count. Active row is ink-filled with paper text.
- **Jump row:** a ruled band of the page's section links (15px semibold, grey count), hidden when fewer than two sections. Anchors come from `anchorId(title)`.
- **Header path:** group ／ chapter, chapter in ink semibold, group in grey.
- **Home tables:** each group is a section; ordered groups number their rows; chapters without a URL render grey with "未收錄".

### Lists / Tables
The notation table (`dl`) and home chapter list follow the same ruled-list form: ink top, grey row hairlines, 12px row padding.

### Legacy
Vendored shadcn components other than dialog, sheet and button (sidebar, breadcrumb, card, tooltip, dropdown-menu, hover-card, collapsible, input, label, separator, skeleton) are unused legacy, as are the `sidebar` colour keys in `tailwind.config.ts`. The shadcn button itself is not imported by any page; it predates the radius scale above. None of these are part of the system.

## Do's and Don'ts

### Do:
- **Do** keep ink #111 on white for all text and structure; reach for a heavier rule, not a colour, when something needs emphasis.
- **Do** put every case in a ruled grid cell (1px ink, single-drawn lines) and every section head over a 2px ink rule with its count in grey at the right.
- **Do** set notation at 19px semibold as the largest text in a cell.
- **Do** round boxes and controls on the radius scale (12px frames, 8px controls, 6px diagram frames, 4px stickers) and keep the lines inside a table straight.
- **Do** make interactive rows and buttons at least 44px tall with a wash-grey hover.
- **Do** add chapters and puzzles through `navGroups` plus a route, and keep teaching prose before the case tables with the jump row as the shortcut.
- **Do** use the face-down hatch for disabled controls.

### Don't:
- **Don't** introduce an accent colour, coloured section fields or tinted cards; cube stickers are the only colour.
- **Don't** use errata red for anything but errors.
- **Don't** use grey as a panel fill or for headings; grey is for secondary text and inner hairlines.
- **Don't** add shadows outside the player dialog, or round an element whose border is a hairline in a ruled list (the line would curve).
- **Don't** bring back the reference-manual devices (divider boards, acetate leaf, fore-edge tab rail).
- **Don't** use a font size outside the documented ramp.
- **Don't** apply `PLAYER_MASKS` to non-3x3 puzzles.

## Extending the site

1. **New chapter:** add an item to the right group in `navGroups` (`src/lib/nav.ts`) with `title`, `url`, `summary` and `extent`, and create the route at the same URL. The index, home table, header path and `<title>` update themselves. Leave `url` off to list a step as 未收錄.
2. **New puzzle or method:** add a `NavGroup` (e.g. 「二階」「四階」); set `ordered: true` if it has a learning order. Groups with no listed chapter stay out of the index.
3. **Page body:** `JumpRow` (first item 「怎麼學」, then each section with its count), a `Section` of `Paragraph`s and `Figure`s for teaching, then one `Section` per case group with `count` wrapping a `CaseGrid` of `Vis2dCard`s.
4. **Other puzzles:** pass `puzzle` to `Vis2dCard` (cubing.js id such as `"2x2x2"`, `"4x4x4"`); it sets the VisualCube `pzl` size and the player's puzzle. Player sticker masks (`PLAYER_MASKS`) are written for 3x3 orbits and are applied only when `puzzle === "3x3x3"`; other puzzles play full colour.
