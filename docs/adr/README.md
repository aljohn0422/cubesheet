# Architecture Decision Records

These record non-obvious decisions. Code comments are banned ([0001](0001-no-code-comments.md)), so a "why" that the code cannot say for itself goes here. Visual rules go in [`DESIGN.md`](../../DESIGN.md).

| # | Decision |
| --- | --- |
| [0001](0001-no-code-comments.md) | No comments in source code; enforced by `npm run lint:comments` with a ratchet |
| [0002](0002-cube-orientation-and-case-setup.md) | Yellow-top orientation; how `setup`, `case` and the player anchor relate |
| [0003](0003-cubingjs-twisty-player-integration.md) | How the 3D player is used: state, custom sticker masks, current-move styling |
| [0004](0004-client-side-2d-diagrams.md) | 2D diagrams drawn in the browser by sr-visualizer with VisualCube parameters |
| [0005](0005-cross-plus-one-example-pipeline.md) | Cross +1 examples: fetching and analysing reco.nz, and playback |
| [0006](0006-site-structure-and-shared-ui.md) | Anchors, site title, index navigation, subgrid case cells, dialog focus |
| [0007](0007-blindfold-trainer-model.md) | Blindfold trainer: cube model, Speffz rules, recognition rotation |
| [0008](0008-browser-only-dependencies.md) | Dependencies that load only in the browser, and the ES worker format |

## Adding one

Copy the shape of an existing record: a title, then Status, Date and the files it replaces comments in, then Context, Decision and Consequences. Number it next in sequence. To change a decision, write a new record that supersedes the old one, and mark the old one `Superseded by NNNN`.
