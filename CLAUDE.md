# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Dev server (Vite)
npm run build        # Production build → dist/
npm run lint         # ESLint
npm run test         # Vitest (watch mode)
npm run test:run     # Vitest (single run)
npm run test:coverage
npm run deploy       # Build + deploy to GitHub Pages (gh-pages)
```

Run a single test file:
```bash
npx vitest run src/test/Hero.test.jsx
```

## Architecture

Single-page React 19 app, no router. All sections are rendered in sequence inside `App.jsx`. Theme (dark/light) is managed in `App` via `useState` and applied as `data-theme` attribute on `<html>`.

**Data is co-located in components** — `projects` array lives in `Projects.jsx`, `experienceData` in `Experiences.jsx`. To add a project or experience, edit the data array directly in the component.

**CSS architecture**: global design tokens (CSS variables) are defined in `src/style/App.css` under `:root` and `[data-theme="light"]`. Each component has its own CSS file in `src/style/`. Always use CSS variables — never hardcode colors.

**Design tokens:**
- Colors: `--bg-primary/secondary/surface`, `--border`, `--accent` (#2D6A4F), `--accent-hover`, `--accent-glow`, `--text-primary/secondary/muted`
- Fonts: Inter (body), JetBrains Mono (labels, code, accents via `font-family: 'JetBrains Mono', monospace`)
- Transition: `var(--transition)` (0.25s ease)
- Container: max-width 1100px, `padding: 0 24px`

**Three.js** (`Hero.jsx`): particle network rendered in `ParticleBackground` component. Cleanup is handled in the `useEffect` return (cancelAnimationFrame, removeEventListeners, dispose). Three.js is code-split into its own chunk via `vite.config.js` `manualChunks`.

## Tests

- Framework: Vitest 4 + React Testing Library + happy-dom
- Test files in `src/test/`, setup in `src/test/setup.js`
- Three.js is mocked in `Hero.test.jsx` — use `vi.mock('three', ...)` pattern for any new Three.js tests
- `css: false` in vite config — CSS is not processed in tests

## Skills disponibles

Des skills projet sont dans `.claude/skills/` :
- `/new-project` — ajouter un projet à `Projects.jsx`
- `/new-experience` — ajouter diplôme/certification/stage à `Experiences.jsx`
- `/deploy` — pipeline lint → tests → build → audit → déploiement
