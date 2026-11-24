# 0007. Blindfold trainer: cube model and drill rules

- Status: Accepted
- Date: 2026-11-25
- Replaces comments in: `blindfold/cube.ts`, `blindfold/cycles.ts`, `blindfold/recognition.ts`, `components/blindfold/sticker.svelte`, `333bld/practice/+page.svelte`

## Context

The 盲解練習 page has three drills: tracing a scramble, letter pairs, and sticker recognition. Its cube model and Speffz cycle tracing came over from the older `solv` project.

## Decisions

### Cube model
- `faces[face][row][col]` is a 3×3 sticker array. Faces are ordered `U L F R B D`. Each value is the face the sticker came from, which is also its colour index.
- Orientation is white top, green front (WCA scramble orientation). This is the one place on the site that differs from yellow-top ([0002](0002-cube-orientation-and-case-setup.md)).
- `STICKER_COLORS` follows the same `U L F R B D` order. In 3D maths (`recognition.ts`), faces have outward normals in a right-handed frame: x right, y up, z front.

### Letters and cycles
- Letters use the Speffz scheme. The edge buffer is UF and the corner buffer is UFR.
- `pieceLetterGroups(type)` groups letters by the physical piece they sit on: 2 letters per edge, 3 per corner. **Two letters from the same group are stickers of the same piece and must never be drilled as a pair.**
- When the first cycle starts at the buffer, its first and last letters (the buffer itself) are shown in brackets.

### Letter-pair drill
The drill draws two letters that are different, are not on the same piece, and are not on the buffer piece.

### Sticker recognition drill
- Each item is one sticker facing the solver (`main`), plus the other stickers of the same piece (`sides`), given in `[top, right, bottom, left]` order (`-1` = empty).
- **The view is rotated at random** so the same physical piece is practised from every angle. The random rotation always shows a real view:
  - Edge: the partner sticker can sit on any of the four sides. Every rotation is the same edge.
  - Corner: the two neighbours are put in clockwise order as seen looking straight at `main`, then placed on a random vertex (two adjacent sides). Keeping the clockwise order makes every rotation a real view of the same corner. Mirrored corners never appear.
- Drawing: `main` is a sticker in the middle. Each side sticker is a thin bar on its edge. An edge piece has one bar, centred on that side. A corner piece has two bars, pushed towards the corner they share, so a corner can be recognised at a glance.

### Keyboard
Space advances the current drill: new scramble, new pair, or reveal and then next. Typing in fields and dialogs is ignored. The handler calls `preventDefault()` so a focused button does not also trigger on the same key press, which would run the action twice.

## Consequences

- The recognition maths relies on the clockwise ordering. A new piece type would need the same treatment.
- Cleaning up the code ported from `solv` is tracked in [#9](https://github.com/aljohn0422/cubesheet/issues/9).
