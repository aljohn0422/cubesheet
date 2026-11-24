# 0008. Dependencies that only run in the browser

- Status: Accepted
- Date: 2026-11-25
- Replaces comments in: `vite.config.ts`, `333bld/practice/+page.svelte`, `cube/cubeImage.svelte`

## Context

SvelteKit renders pages on the server first. Two dependencies cannot be evaluated there.

## Decisions

- **cubing.js scramble generator** (`cubing/scramble`, used by 盲解練習) starts a Web Worker. It is loaded with a dynamic `import()` inside `onMount`, never imported at the top of a module.
- **Worker bundle format:** that worker code-splits. Vite's default worker format is `iife`, which cannot code-split. So `vite.config.ts` sets `worker.format: "es"`.
- **sr-visualizer** depends on svg.js, which reads `window` as soon as it is imported. `CubeImage` imports it dynamically inside an `$effect` ([0004](0004-client-side-2d-diagrams.md)).

## Consequences

- Moving either import to the top of a module breaks SSR and the Vercel build.
- Removing `worker.format: "es"` breaks the scramble generator in production builds.
