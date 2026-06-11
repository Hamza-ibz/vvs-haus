# VVS Haus Codex Instructions

## Project Identity

VVS Haus is a premium mobile detailing brand. The website must feel luxury, cinematic, modern, high-end automotive, Mercedes-focused, professional, clean, and minimalist.

Codex must treat this repository as a section-by-section React/Vite frontend build. Do not generate the whole website at once.

## Core Rules

- Always explain architecture decisions before generating code.
- Build one website section at a time.
- Do not create or edit unrelated files.
- Do not rewrite existing work unless the user explicitly asks for it.
- Preserve user changes in the working tree.
- Keep changes small, reviewable, and aligned with the current section.
- Prefer existing project patterns over new abstractions.
- Do not install packages unless the user explicitly asks.
- Do not edit `App.jsx` unless the user explicitly asks.
- Do not create website components until the user requests implementation work.

## Brand Rules

- Use black `#050505`, charcoal `#111111`, white `#FFFFFF`, and cyan `#00D9FF`.
- Use dark backgrounds with subtle cyan glow effects.
- Use `Orbitron` for headings.
- Use `Inter` for body text.
- Use Mercedes vehicles only.
- Do not use BMW, Audi, Porsche, Lamborghini, or any other car brands.
- Keep the visual system clean, cinematic, premium, and restrained.
- Avoid loud gradients, cluttered layouts, generic stock imagery, and non-luxury styling.

## Tech Stack

- React
- Vite
- Tailwind CSS
- Framer Motion
- GSAP
- Lucide React Icons

## Website Sections

Build and verify these sections one at a time:

1. Loading Screen
2. Hero Section
3. Features Section
4. Services Section
5. About Section
6. Gallery Section
7. Before & After Section
8. Social Media Section
9. Booking Section
10. Final CTA Section
11. Footer

## Repo Structure Guidance

Preferred structure as the project grows:

```text
src/
  assets/
    images/
    videos/
  components/
    layout/
    sections/
    ui/
  data/
  hooks/
  lib/
  styles/
```

Guidelines:

- Put reusable visual primitives in `src/components/ui/`.
- Put full page sections in `src/components/sections/`.
- Put layout wrappers in `src/components/layout/`.
- Put static content arrays in `src/data/`.
- Put animation helpers and shared utilities in `src/lib/`.
- Keep section files focused and avoid large multipurpose components.

## Build And Test Commands

Use these commands when validating changes:

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

Expected workflow:

- Run `npm run lint` after code edits.
- Run `npm run build` before marking major section work complete.
- Use `npm run dev` for visual review.
- Use `npm run preview` to inspect the production build when needed.

## Design And Animation Rules

- Use cinematic pacing, not busy motion.
- Prefer subtle fades, reveals, parallax, glow, blur, and precision movement.
- Use Framer Motion for React component entrance and interaction states.
- Use GSAP for timeline-heavy or scroll-driven cinematic sequences.
- Keep animations performant and respectful of responsive layouts.
- Avoid animation that distracts from booking, service clarity, or brand trust.

## Implementation Rules

- Explain the component architecture before writing a section.
- Build each section as an isolated, reusable component.
- Keep copy premium, concise, and service-focused.
- Ensure responsive layouts for mobile, tablet, and desktop.
- Use Lucide React Icons where icons are useful.
- Do not hardcode large repeated datasets inside JSX when a small data module would be cleaner.
- Keep accessibility in mind for headings, buttons, links, contrast, and focus states.

## Git And Change Safety

- Do not revert changes made by the user.
- Do not modify unrelated files.
- Do not run destructive Git commands unless the user explicitly asks.
- Commit only when the user asks.
- When a section is complete, summarize changed files, validation commands, and any remaining risks.
