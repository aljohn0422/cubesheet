# 0002. Cube orientation and how a case's start state is defined

- Status: Accepted
- Date: 2026-11-25
- Replaces comments in: `vis2dCard.svelte`, `playerCard.svelte`, `case-tile.svelte`, `zbll/+page.svelte`, `data/types.ts`, `data/zbll.ts`, `scripts/reco/analyze.mjs`

## Context

The site draws every case twice: a 2D diagram (sr-visualizer, see [0004](0004-client-side-2d-diagrams.md)) and a 3D animation (cubing.js `<twisty-player>`, see [0003](0003-cubingjs-twisty-player-integration.md)). The two libraries disagree on orientation, and the data comes in two shapes:

- **Normal case tables** (F2L, OLL, PLL, …) store only the algorithm. The case is "whatever this algorithm solves".
- **ZBLL** (from the older `solv` project's `zbll.json`) stores a yellow-top scramble state `setup` per case and several algorithms that solve it. Some of those algorithms finish one AUF (a `U` turn) short.

## Decision

1. **The site holds the cube yellow on top, white on the bottom.** Every CFOP and advanced page uses this orientation, including the white-cross Cross +1 examples. The one exception is the blindfold trainer, which uses the WCA scramble orientation (white top, green front), as its page text explains.
2. **cubing.js defaults to white on top** (`U` is white). The player gets `x2` in front of every setup (`playerSetup = "x2 " + setup`) to flip yellow onto the top.
3. **The diagram's `case` parameter means "the algorithm that solves this state"** (VisualCube semantics). So:
   - Without `setup`, the diagram gets the algorithm itself, with its grouping brackets removed.
   - With `setup`, the diagram gets `invert(setup)`. The ZBLL shape and group tiles (`CaseTile.case`) do the same with the first case of each group.
4. **`setupAnchor` on the player says which end of the algorithm `setup` is pinned to:**
   - `"end"` (case tables): `setup` is the state after the algorithm. Doing the algorithm ends solved.
   - `"start"` (ZBLL): playback begins from `setup` and runs the algorithm forwards. It may end one AUF away from solved.
5. **`AlgCase.setup` is optional and only ZBLL uses it.** When it is set, both the diagram and the player start from that state.

## Consequences

- New data with a known start state should set `setup` and play with anchor `start`. Data without one leaves `setup` unset.
- Any new 3D view must prepend `x2`, or it will show the case upside down relative to the diagram.
- The masks in [0003](0003-cubingjs-twisty-player-integration.md) are written for the cube after `x2`.
