## Goals

1. Make the typewriter feel premium (not jittery / mechanical).
2. Reduce the "zoomed-in" feel on desktop (smaller hero type, tighter container).
3. Tighten vertical rhythm between sections.

---

## 1. Typewriter polish

Current effect types one character at a time with random jitter and a pulsing caret. It reads as twitchy and slow.

New approach in `src/routes/index.tsx` `Typewriter`:

- **Reserve the final layout up front** so the headline doesn't reflow line-by-line. Render the full text invisibly (`opacity-0`) underneath, and overlay the typed slice absolutely on top. Eliminates the jarring text-reflow that makes it feel cheap.
- **Word-by-word reveal with a soft fade** instead of char-by-char. Each word fades + slides up `4px` over `260ms` with a `cubic-bezier(0.22, 1, 0.36, 1)` easing. Stagger ~70ms between words, +160ms after punctuation. Feels like Linear / Vercel hero copy rather than a terminal.
- **Caret**: thin (1.5px), `currentColor` at 70% opacity, smooth `opacity` ease (not steps), 1.05s. Hides 600ms after the last word lands.
- **Respect `prefers-reduced-motion`**: render the full string immediately with the caret only.
- Drop the random jitter and the `caret-soft` keyframe in `src/styles.css`; replace with a single smooth `caret-smooth` keyframe.

## 2. Desktop scale

Everything is sized for very wide screens, so on a normal laptop it reads as zoomed.

In `src/routes/index.tsx`:

- Hero `<h1>`: `text-5xl sm:text-6xl lg:text-8xl` → `text-4xl sm:text-5xl lg:text-7xl`, tracking `-0.04em` → `-0.035em`.
- Hero subcopy: `text-lg sm:text-xl` → `text-base sm:text-lg`, max-width `max-w-2xl` → `max-w-xl`.
- Section H2s (`WhatWeDo`, `Process`, `Network`, `Why`, `Clients`): `text-4xl sm:text-5xl lg:text-6xl` → `text-3xl sm:text-4xl lg:text-5xl`.
- Contact H2: `text-5xl sm:text-6xl lg:text-7xl` → `text-4xl sm:text-5xl lg:text-6xl`.
- Container: `max-w-7xl` (1280px) → `max-w-6xl` (1152px) across sections so content doesn't sprawl edge-to-edge on 1311px viewports.
- Hero stat tiles: number `text-2xl sm:text-3xl` → `text-xl sm:text-2xl`, padding `p-6` → `p-5`.

## 3. Section spacing

Current sections use `py-32` (128px) and the hero `pt-40 pb-32 lg:pt-56 lg:pb-44`. Too airy at this scale.

- Hero: `pt-40 pb-32 lg:pt-56 lg:pb-44` → `pt-32 pb-20 lg:pt-44 lg:pb-28`.
- Hero stat grid top margin: `mt-24` → `mt-16`.
- All `py-32` sections (`WhatWeDo`, `Process`, `Network`, `Clients`, `Why`) → `py-20 lg:py-24`.
- Contact: `py-32 lg:py-44` → `py-24 lg:py-32`.
- Inner `mt-16` grids inside Process / Why / Clients marquee → `mt-12`.
- `WhatWeDo` two-column gap `gap-16` → `gap-10 lg:gap-12`.

## Technical notes

- All edits in `src/routes/index.tsx` and a small keyframe swap in `src/styles.css`.
- No new dependencies. Word-reveal uses pure CSS `animation-delay` driven by index, so there's no per-frame React state churn — better perf than the current per-char `setTimeout` loop.
- Reduced-motion handled via a `motion-reduce:` Tailwind variant and a single `useMemo` guard.

## Out of scope

- No copy changes, no color/token changes, no layout restructure beyond sizing.
