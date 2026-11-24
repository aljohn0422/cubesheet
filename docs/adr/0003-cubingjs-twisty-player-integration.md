# 0003. How the 3D player (cubing.js `<twisty-player>`) is used

- Status: Accepted
- Date: 2026-11-25
- Replaces comments in: `playerCard.svelte`, `cross1/cube-stage.svelte`, `cube/presets.ts`, `data/cross-plus-one.ts`, `app.css`

## Decisions

### Elements register themselves on import
Importing `cubing/twisty` defines the `<twisty-player>` and `<twisty-alg-viewer>` custom elements. Components that render these tags must keep that import even when no binding from it is used.

### Player state comes from the player
The play/pause button and the enabled state of the step buttons come from the player's own models: `experimentalModel.playingInfo` and `detailedTimelineInfo`. The component keeps no separate copy that could drift. So when playback reaches the end, the button flips back to "play" by itself.

The workarounds needed for this are tracked in [#7](https://github.com/aljohn0422/cubesheet/issues/7). Until that is fixed:

- the "is playing" flag ignores single-move steps;
- auto-skip from one end to the other is turned off.

### Sticker masks are custom orbit strings, not the built-in `"OLL"`/`"PLL"`
The player turns the cube with `x2` to put yellow on top ([0002](0002-cube-orientation-and-case-setup.md)). cubing.js masks follow the pieces, not the screen. So the built-in stickerings would treat the white layer as the last layer. `PLAYER_MASKS` therefore uses `experimental-stickering-mask-orbits` strings:

- Piece order: `EDGES = UF UR UB UL | DF DR DB DL | FR FL BR BL`, `CORNERS = UFR URB UBL ULF | DRF DFL DLB DBR`, `CENTERS = U L F R B D`. These are the pieces' solved positions before `x2`, so the original U layer (white) ends up at the bottom of the screen.
- Letters: `-` normal colours, `O` show only the primary colour (yellow), `I` grey out, `D` dim.
- `f2l`: first two layers in colour, last layer grey. `oll`: first two layers in colour, last layer yellow only.
- `ll` (PLL) has **no** player mask. The animation shows every sticker in its real colour, and `stage` only affects the 2D diagram.
- Masks are written for 3x3 orbits and are only used when `puzzle === "3x3x3"` (DESIGN.md, Don'ts).

Cross +1 builds its masks at runtime (`crossMask`):

- The white cross edges (cubing.js edges 0–3) are always lit, plus whichever F2L pairs are ticked.
- Everything else is light grey.
- Because masks follow the pieces, a lit pair stays lit wherever it moves.

### The current-move highlight reaches into cubing.js's DOM
cubing.js marks the move being played in its light-DOM alg viewer with `.twisty-alg-current-move`. `app.css` applies `filter: grayscale(1)` to that class, so the default blue marker becomes grey (DESIGN.md, Player Dialog). That class is a cubing.js internal, not a public API. Check it whenever cubing is upgraded.

## Consequences

- Upgrading cubing.js means re-checking three things: the side-effect element registration, the orbit order of the masks, and the `.twisty-alg-current-move` class name.
