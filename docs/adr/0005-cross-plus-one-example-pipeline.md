# 0005. Cross +1 examples: where they come from and how they play

- Status: Accepted
- Date: 2026-11-25
- Replaces comments in: `scripts/reco/fetch.mjs`, `scripts/reco/analyze.mjs`, `data/cross-plus-one.ts`, `cross1/cube-stage.svelte`, `cross1/watch.svelte`

## Context

The 十字 +1 page teaches how strong solvers go from the cross into the first two F2L pairs, using real competition solves. These come from reconstructions on reco.nz.

## Decision

### Fetching (`node scripts/reco/fetch.mjs [listPages=6]`)
- The script downloads the raw HTML of official 3x3 CFOP reconstructions (50 per list page) into `.reco-cache/`. That folder is git-ignored and stays on your machine.
- It fetches politely: one request at a time, one second apart. Pages it already has are not fetched again.

### Analysis (`node scripts/reco/analyze.mjs` → `src/lib/data/cross-plus-one.json`)
1. **Parse** each solve: solver, time, scramble, and the moves and label of each step (inspection / cross / 1st pair …). The title comes in two layouts. It is either `Name - 3.40 3x3 solve` on one line, or the solver's name as its own link with `- 3.40 3x3 solve` on the next line.
2. **Replay and verify** each solve with cubing.js:
   - Only white crosses on the bottom are kept, which matches the site's yellow-top orientation ([0002](0002-cube-orientation-and-case-setup.md)).
   - The cross step must leave the cross complete.
   - After that, every step must place at least one new pair, until at least two pairs are done. Several pairs placed in one step all count.
   - "Solved" always means *relative to the current centres*. The script compares against a solved cube with the same centre layout, so wide moves and rotations do not break the check.
   - **A newly placed pair is identified by its pieces, not by its slot name.** Wide moves (`u`, `d` …) and rotations move already-placed pairs into other slots.
   - Move lists are simplified only by merging consecutive turns of the same face (`U U` → `U2`, `U' U` → nothing). Nothing is rewritten across axes, so the solver's actual moves are kept.
3. **Select** clear examples:
   - Fewer rotations and fewer moves for the cross plus two pairs are better.
   - The script takes `PER_GROUP` normal examples (cross, then first pair) and `PER_GROUP` xcross examples, with at most `MAX_PER_SOLVER` per solver.
   - There must be at least one separate F2L step, so xxcross solves are left out.
4. **Only objective data is stored:** moves, move counts (excluding rotations), the slot filled, and the cubing.js piece ids of each placed pair. The script writes no commentary or interpretation.
   - The slot (front-right, back-left …) is named from the way the solver was holding the cube at that moment.
   - Piece ids use cubing.js 3x3 numbering (`EDGES UF UR UB UL DF DR DB DL FR FL BR BL`, `CORNERS UFR URB UBL ULF DRF DFL DLB DBR`). The page uses them to choose which stickers to light up ([0003](0003-cubingjs-twisty-player-integration.md)).

### Playback (`CubeStage`, `Watch`)
- Each step plays as its own segment. The player sits at the step's `setup` (the scramble plus every earlier step) and plays only that step's moves when Play is pressed.
- Changing step (or example) pauses, jumps to the start of the new step (which is the end of the previous one) and resets the camera. Nothing plays automatically.
- Controls: reset (including the camera) ｜ previous step, step back one move, play, step forward one move, next step. The single-move steps stay inside the current step.
- In the step list you can click any step to jump to it. You can also untick a step's pairs to hide their stickers. Every pair is shown by default, and switching examples shows them all again.

## Consequences

- The JSON is generated and checked in. To refresh it, run fetch and then analyze. Never edit the JSON by hand.
- reco.nz markup changes break parsing in a visible way: solves get rejected rather than producing silently wrong data.
