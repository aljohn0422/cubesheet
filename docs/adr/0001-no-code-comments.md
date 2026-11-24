# 0001. No comments in source code

- Status: Accepted
- Date: 2026-11-25

## Context

An audit of every comment in the repo (247 of them, in 43 files) found that most of them did not help:

- **Tautologies.** They repeated the line below, e.g. `// U 白` next to `"#ffffff"`, or `/** 替代公式 */` above `alternatives`.
- **Stale comments.** They described code that was gone or never used: SvelteKit scaffold text, commented-out `paths.base` config from the GitHub Pages days, and "no longer depends on the external image service".
- **Wrong comments.** `app.css` said the anchor offset was the header's 3.5rem while the value next to it was 5rem.
- **Excuses.** Some comments justified a workaround, and then the workaround was copied with its comment. The "`playing` is also true during a single step" note and the `autoSkipToOtherEndIfStartingAtBoundary` cast appear word for word in both `playerCard.svelte` and `cube-stage.svelte`. A comment that explains away a hack makes the hack look finished, so nobody fixes it.

The comments that did carry knowledge were decisions. Each one was attached to a single line, so nobody looking at the bigger picture would find it.

## Decision

Source files contain no comments. Knowledge goes where it can be found and kept true:

| Kind of knowledge | Where it goes |
| --- | --- |
| What the code does | Names, types and smaller functions |
| Why it is built this way (non-obvious decisions, invariants, external quirks) | An ADR in `docs/adr/` |
| The visual system | `DESIGN.md` |
| A known shortcut or hack | A GitHub issue (label `comment-debt`) |

Allowed exceptions are comments that tools read:

- `@ts-expect-error`, `@ts-ignore`, `@ts-nocheck` and `@ts-check`
- `svelte-ignore` and `prettier-ignore`
- comments starting with `eslint-`, `prettier-` or `biome-`
- `/// <reference>`
- `#__PURE__` and `@__PURE__`
- `@vite-ignore`
- JSDoc blocks made only of type tags (`@type`, `@typedef`, `@param`, …) in `.js` files, which `checkJs` uses as types

## Enforcement

`npm run lint:comments` runs `scripts/lint/no-comments.mjs` over every git-tracked `.ts`, `.js`, `.mjs`, `.cjs`, `.svelte`, `.css`, `.html` and `tsconfig*.json` file.

How it reads each file type:

- JS and TS are parsed with the TypeScript compiler, so `//` inside strings and template literals is not mistaken for a comment.
- Svelte files are parsed with `svelte/compiler`. The checker covers `<script>`, `<style>`, `<!-- -->` markup comments and `{…}` template tags.
- CSS is scanned with a small string-aware scanner.

The checker ships as a script, not an ESLint rule, for three reasons:

- The repo has no ESLint setup.
- ESLint cannot see CSS or `<style>` blocks.
- `typescript` and `svelte` are already dev dependencies, so the script needs nothing new.

### Ratchet

`scripts/lint/comment-baseline.json` maps each file to the number of comments it is still allowed to have.

- More comments than the baseline allows fails the check. New files have a baseline of 0.
- Fewer comments than the baseline also fails, until you run `npm run lint:comments -- --update` to lower the baseline. That way the progress is locked in.
- `--update` never raises a count. `--init` only works while the baseline is empty.
- Raising a count means editing the JSON by hand, which shows up in review.

To clear out what is left, run the `/delete-comment` skill (`.claude/skills/delete-comment/SKILL.md`).

## Consequences

- Reviewers can reject any new comment without discussion. The check fails first.
- Decisions live in ADRs. Changing a decision means updating or replacing its ADR, not editing a line comment.
- Hacks show up as open issues instead of being explained away in the code.
- Known gap: the checker does not look inside `{#if …}`/`{#each …}` block expressions or attribute expressions. Comments there are rare and get caught in review.
