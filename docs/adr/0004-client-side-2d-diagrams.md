# 0004. Draw 2D case diagrams in the browser with sr-visualizer, using VisualCube parameters

- Status: Accepted
- Date: 2026-11-25
- Replaces comments in: `cube/cubeImage.svelte`, `cube/vis2dCard.svelte`, `data/types.ts`

## Context

The diagrams used to be `<img>` tags pointing at a hosted VisualCube image service. That made every page depend on an outside server for its main content.

## Decision

- `CubeImage` builds a VisualCube query string (`pzl`, `view`, `case`, `stage`, `r`, `arw`, `fc`, `cc`) and hands it to **sr-visualizer**, which draws an SVG in the browser. No outside image service is involved.
- The parameters keep their VisualCube meanings, so existing case data and VisualCube docs still apply:
  - `arrow` uses VisualCube arrow syntax (`"U0U2,U2U6"`). `CubeImage` adds the `-s8-black` style suffix.
  - `pzl` takes only the cube size. `Vis2dCard` gets it from the cubing.js puzzle id (`"4x4x4"` → `4`).
- The default for each diagram parameter is defined once, in `CubeImage`. `Vis2dCard` passes `view`, `arrow`, `rotation`, `fc` and so on straight through.
- **The query is built with `encodeURIComponent`, not `URLSearchParams`.** sr-visualizer decodes with `decodeURIComponent`, which does not turn `+` back into a space. So the spaces in an algorithm would arrive as `+`.
- **Unknown `stage` values are dropped with a console warning.** The old VisualCube service quietly ignored a `stage` it did not know, but sr-visualizer throws. The data still has stages that only VisualCube supported.
- sr-visualizer loads in the browser only ([0008](0008-browser-only-dependencies.md)).

## Consequences

- Diagrams work offline and in print, with no third-party requests.
- `CubeImage` imports sr-visualizer's internal `dist/lib/cube/parsing/options` path. That path can break when sr-visualizer is upgraded.
