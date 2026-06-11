---
name: vvs-haus-premium-frontend
description: Use this skill when building or reviewing premium VVS Haus frontend sections in React, Tailwind CSS, Framer Motion, or GSAP. It guides section-by-section implementation for a cinematic Mercedes-focused mobile detailing website.
---

# VVS Haus Premium Frontend Skill

Use this skill when working on VVS Haus frontend sections, UI reviews, animation decisions, responsive polish, or code quality improvements for the React/Vite website.

## Project Context

VVS Haus is a premium mobile detailing brand. The website should feel luxury, cinematic, modern, high-end automotive, Mercedes-focused, professional, clean, and minimalist.

This skill applies to React, Tailwind CSS, Framer Motion, GSAP, and Lucide React Icons section work.

## Required Workflow

1. Explain the architecture decision before generating code.
2. Build only one section or focused UI unit at a time.
3. Keep edits scoped to the requested files and section.
4. Avoid unrelated refactors.
5. Test the section after implementation.
6. Summarize changed files, validation results, and remaining risks.

Do not generate the whole website at once.

## Brand Rules

- Use black `#050505`, charcoal `#111111`, white `#FFFFFF`, and cyan `#00D9FF`.
- Use dark backgrounds with subtle cyan glow effects.
- Use `Orbitron` for headings.
- Use `Inter` for body text.
- Use Mercedes vehicles only.
- Do not use BMW, Audi, Porsche, Lamborghini, or other car brands.
- Keep layouts clean, spacious, confident, and premium.
- Avoid generic car-wash styling, loud gradients, clutter, and low-end visual patterns.

## Design Rules

- Favor cinematic spacing and strong visual hierarchy.
- Use cyan as an accent, not as the dominant color.
- Keep backgrounds dark and layered with subtle depth.
- Use crisp borders, soft glows, and restrained glass effects where appropriate.
- Use premium photography or media direction that clearly supports Mercedes-focused detailing.
- Ensure buttons and calls to action feel direct, polished, and conversion-focused.
- Keep copy concise, high-trust, and service-oriented.

## Animation Rules

- Use Framer Motion for component entrance, hover, tap, and reveal states.
- Use GSAP for more complex timelines, loading sequences, and scroll-driven cinematic motion.
- Prefer subtle fades, masked reveals, parallax, blur, light sweeps, and precision movement.
- Avoid excessive movement, looping distractions, and animation that hurts readability.
- Respect responsive layouts and performance.
- Keep transitions smooth and purposeful.

## Responsiveness Rules

- Design mobile-first, then scale up to tablet and desktop.
- Check text fit inside buttons, cards, nav elements, and compact panels.
- Ensure spacing remains premium on small screens.
- Avoid overlapping text, clipped controls, and cramped layouts.
- Make all interactive elements usable on touch devices.
- Keep section rhythm consistent from mobile through wide desktop.

## Code Quality Rules

- Prefer small, focused section components.
- Put reusable UI primitives in `src/components/ui/`.
- Put page sections in `src/components/sections/`.
- Put layout wrappers in `src/components/layout/`.
- Put repeated static content in `src/data/`.
- Put shared animation helpers and utilities in `src/lib/`.
- Use Lucide React Icons where icons improve clarity.
- Avoid large repeated JSX blocks when a data map is cleaner.
- Keep Tailwind class usage readable and consistent.
- Preserve accessibility basics for semantic headings, buttons, links, focus states, and color contrast.

## Validation

After code changes, run the relevant checks:

```bash
npm run lint
npm run build
```

Use `npm run dev` for visual review and `npm run preview` for production-build review when needed.
