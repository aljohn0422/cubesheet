---
name: delete-comment
description: Audit code comments in this repo, sort each one (tautology, stale, excuse, decision record), then delete it, file an issue, or move it into an ADR, and ratchet the comment baseline down. Use when `npm run lint:comments` reports comments, when asked to remove or clean up comments, or to repeat the no-comments pass. Optional argument: a path to limit the pass to.
---

# /delete-comment

This repo bans code comments ([ADR 0001](../../../docs/adr/0001-no-code-comments.md)). Every comment is either deleted or moved somewhere it can be found. `scripts/lint/comment-baseline.json` records how many comments each file may still have. This skill lowers those numbers.

A partial pass is fine. Finish a coherent part (one folder, one feature) properly instead of rushing every file. The ratchet keeps whatever you remove from coming back.

## 1. Inventory

```bash
npm run -s lint:comments -- --list    # JSON: file, line, endLine, ownLine, text
npm run -s lint:comments              # what the baseline still allows
```

If an argument was given, keep only the comments under that path. If nothing is listed, report that and stop.

Comments that tools read are exempt and never listed. Do not touch them:
- `@ts-expect-error`, `svelte-ignore`, `eslint-…`, `prettier-ignore`, `/// <reference>`
- JSDoc type tags in `.js` files

## 2. Classify each comment

**Read the code around each comment before you decide.** Also search `DESIGN.md` and `docs/adr/` for the same knowledge: `grep -rn "<keyword>" DESIGN.md docs/adr`.

| Category | Test | Examples from the first pass |
| --- | --- | --- |
| **Tautology** | Says what the next line already says, or what a good name or type would say | `// U 白` next to `"#ffffff"`; `/** 替代公式 */` above `alternatives`; `// ── 解析 ──` section dividers |
| **Stale** | Describes code that is gone, never used, or different from what the code does now | SvelteKit scaffold text; commented-out config; "不再依賴外部圖片服務"; an offset said to be 3.5rem next to a 5rem value |
| **Excuse** | Justifies a shortcut, workaround, hard-coded value, timing guess, duplicate, or "keep X in sync with Y" | a hand-typed count with "remember to sync"; regexes that "assume the data stays simple"; `requestAnimationFrame` because content "may not be mounted yet"; "ported, logic unchanged" |
| **Decision record** | Explains a non-obvious *why*: an outside library quirk, an invariant, or a choice between real alternatives that someone could otherwise undo by mistake | `encodeURIComponent` because sr-visualizer does not decode `+`; custom sticker masks because `x2` flips the built-in ones; letters on the same piece must never be paired |

Tie-breakers:
- If a comment is both a decision and an excuse, it is an **Excuse**. Put the decision part in the issue, or in an ADR that links to the issue.
- If a decision is already written down in `DESIGN.md` or an ADR, just delete the comment.
- When in doubt between Tautology and Decision record, ask: "Would a competent newcomer undo this code without the comment?" If yes, it is a Decision record.

## 3. Act

### Tautology / Stale: delete

### Excuse: delete, and file an issue
1. Look for an existing issue first:

   ```bash
   gh issue list --label comment-debt --state open
   ```

   If the same hack is already tracked, add a comment there instead of filing a new issue.
2. Otherwise group related excuses into one issue per hack (not per comment):

   ```bash
   gh issue create --label comment-debt --title "<imperative fix>" --body-file <file>
   ```

   The body has four parts:
   - what the hack is and why it is fragile;
   - the removed comments, quoted, with `file:line`;
   - `## Fix`: a concrete proposal;
   - `## Done when`: checkable criteria.
3. If an ADR mentions the hack, link the issue from it.

### Decision record: move it into an ADR
- Prefer adding to the ADR whose topic matches (see `docs/adr/README.md`). Add the file to that ADR's "Replaces comments in" line.
- Otherwise create `docs/adr/NNNN-<slug>.md` with the next number. It has:
  - a title;
  - Status, Date and "Replaces comments in";
  - Context, Decision and Consequences sections.

  Add it to the README index.
- **Check every fact against the code before writing it down:** prop names, values, which component does what. Comments are often slightly wrong, and an ADR should not repeat the mistake.
- Write ADRs in English. Keep Chinese UI terms such as 十字 +1 or 「或」 as they are.

## 4. Delete the comments

- A comment on its own line: delete the whole line or lines.
- A trailing comment: delete it and the whitespace before it.
- Do not leave two blank lines in a row, or a blank line where the comment used to open a block.
- Do not change code while doing this. Fixing the hack belongs to the issue, not to this pass.

## 5. Verify and ratchet

```bash
npm run check                          # svelte-check: 0 errors
npx vite build                         # the Vercel adapter step fails on Node > 22 locally; the vite bundles must build
npm run -s lint:comments               # will say the baseline is stale
npm run -s lint:comments -- --update   # lower the baseline (it can never go up)
npm run -s lint:comments               # OK
```

Commit the code, the ADRs and `comment-baseline.json` together.

## 6. Report

Tell the user:
- how many comments there were in each category;
- the ADRs you created or updated;
- the issues you filed (with links);
- lines removed (`git diff --shortstat`, not counting `docs/`);
- how many comments are left in the baseline.

For a PR, put the same table in the description.
