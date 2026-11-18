# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Primary: the author's family** (spouse and kids) learning to speed-solve the 3x3 cube with CFOP.
- **Also: the public.** The site is deployed publicly on Vercel, and other cubers may use it as a formula reference.
- Skill levels range from someone just starting CFOP to someone who only needs to look up a forgotten case.

## Product Purpose

A personal, family-oriented notebook of Rubik's cube formulas with explanations. Each case shows a 2D/3D diagram, and opens a 3D animation that can be played step by step.

Success means:
- a family member can follow the learning order (cross → F2L → OLL → PLL) on their own;
- anyone can find and replay a specific case quickly.

## Positioning

It is a teaching notebook written by a parent for their own family, not a neutral database. The value is the curated learning order and the explanations:
- F2L taught through understanding (basic shapes plus mirrors) rather than memorization;
- OLL cases grouped by what to learn first, and by mirror or same-fingering pairs;
- playful, opinionated section names (「四大天王」, 「有點奇怪PLL」).

## Operating Context

All of these are real usage scenes:
- **Cube in hand, phone propped beside it.** The user follows an algorithm while their hands are busy, so controls must be easy to hit and the text must be readable at a glance.
- **Reading through on a tablet or computer.** The user studies the explanations and watches animations like a lesson.
- **Quick lookup when stuck.** The user already knows most cases and needs to jump to one forgotten case.
- **A parent and a child looking at the same screen together.** The parent explains while the child turns the cube.

## Capabilities and Constraints

- **Stack:** SvelteKit 2 (Svelte 5), Tailwind 3, shadcn-svelte, deployed with `@sveltejs/adapter-vercel`.
- **2D diagrams:** rendered client-side with `sr-visualizer` using VisualCube-compatible parameters (`src/lib/components/cube/cubeImage.svelte`).
- **3D animations:** `cubing` (`twisty-player`, `twisty-alg-viewer`). The player supports single-step playback, current-move highlighting, speed control and per-stage sticker masks.
- **Orientation convention:** yellow on top, white on the bottom (WCA colour scheme). Cube sticker colours carry meaning and must stay standard.
- **Content:**
  - Current pages: 3x3 CFOP F2L (41 cases), OLL (24 of 57 listed), PLL (21) and advanced F2L (Sune set).
  - Formula data lives in `src/lib/data/*.ts`; navigation lives in `src/lib/nav.ts`.
- **Language:** Traditional Chinese (Taiwan), `zh-Hant-TW`. Cube notation (R U R' U') stays in standard Latin notation.
- **Future scope:** more puzzles and methods will be added (for example 2x2, 4x4, a beginner LBL method). Navigation and page structure must scale beyond one puzzle.
- **Undecided:** whether to add the remaining 33 OLL cases.

## Brand Commitments

- **Site name:** 「給老婆小孩的魔術方塊筆記」. The full name is kept deliberately; the personal, family-notebook framing is the point.
- **Voice:** warm, plain-spoken Traditional Chinese from a parent teaching their family. It encourages ("務必耐心學習") and is mildly playful in section names.

## Evidence on Hand

- Real formula data and explanatory copy in `src/lib/data/` and `src/routes/`.
- No testimonials, user counts or external endorsements exist. Do not fabricate any.

## Product Principles

1. **Learning order first.** Every page should make clear what to learn first and what comes next.
2. **Readable with a cube in your hands.** Algorithms and playback controls must work at a glance and with one tap on a phone.
3. **Understanding over memorization.** Pair cases (mirrors, same fingering), explain shapes, and show the motion.
4. **A family notebook that strangers can still use.** Keep the personal voice, but never make the public guess at notation or navigation.
5. **Room to grow.** New puzzles and methods must slot in without restructuring.

## Accessibility & Inclusion

- **Audiences:** children and adults; mobile-first usage is common.
- **Requirements:** WCAG AA contrast, keyboard operability, touch targets of at least 44px.
- **Colour is not optional:** cube colours inherently carry meaning, so supporting text, case names and arrows must always back them up.
