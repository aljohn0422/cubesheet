---
version: 1
slug: "src-routes"
primary_target: "src/routes"
related_targets: []
---

# Surface brief: cubesheet site shell and chapter pages

Scope: every route (home, chapter pages, error). Mode: Read.
Audience/job: family and public cubers; follow the learning order, scan cases, replay one with a cube in hand.
Constraints: keep card + tap-to-animate model and VisualCube diagram style; minimal colour (user: "too much color"); must stay extensible to more puzzles and methods (user-confirmed).
Decision history: the reference-manual direction (seed 31cf09c5) was built, then rejected by the user after live previews; user chose preview B.
Unresolved: remaining 33 OLL cases.

## Direction contract

THESIS: The site is a well-printed algorithm cheat sheet: black on white, ruled table cells, notation as the largest text. It refuses colour fields and decorative shells.
OWN-WORLD: Ink #111 on white; 1px ruled grids, 2px rule under section heads, 12px rounded frames and 8px rounded controls (lines inside tables stay straight); Schibsted Grotesk with Noto Sans TC; grey only for secondary text; red only for errors; cube stickers are the only colour.
STORY: The reader picks a chapter from a data-driven index, scans ruled case cells, taps one, and steps through the 3D player.
FIRST VIEWPORT: Sticky header (site name, path, mobile index button); left index column grouped by puzzle with counts; oversized bold chapter title, then a ruled jump row of the page's sections with counts; on chapter pages the teaching prose comes before the first case table (user-confirmed: 「維持現在：先說明，再看公式」), and the jump row reaches the tables in one tap.
FORM: user-chosen live preview B "公式速查表" (was src/routes/preview/[style] variant b, removed after the choice); user: 「我會選B，但是以後還會再擴充更多東西進入這個網站，需要保留擴充性」. The user's pick replaces seed 31cf09c5; no re-roll.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
