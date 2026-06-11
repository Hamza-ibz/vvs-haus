# VVS Haus Codex Instructions

## Project Identity

VVS Haus is a premium mobile detailing brand. The website must feel luxury, cinematic, modern, high-end automotive, Mercedes-focused, professional, clean, and minimalist.

Codex must treat this repository as a multi-page React/Vite website, not a one-page scrolling landing page. Build the site page by page and component by component.

## Core Rules

- Always explain architecture decisions before generating code.
- Build one page, section, or focused UI unit at a time.
- Do not create or edit unrelated files.
- Do not rewrite existing work unless the user explicitly asks for it.
- Preserve user changes in the working tree.
- Keep changes small, reviewable, and aligned with the current task.
- Prefer existing project patterns over new abstractions.
- Do not install packages unless the user explicitly asks.
- Do not edit `package.json` unless the user explicitly asks.
- Do not use anchor-scroll navigation as the main site structure.

## Routing Direction

Use `react-router-dom` for page routing when routing implementation begins.

Required routes:

- Home: `/`
- Services: `/services`
- Gallery: `/gallery`
- About: `/about`
- Contact / Booking: `/contact`

Navbar behavior:

- Home navigates to `/`
- Services navigates to `/services`
- Gallery navigates to `/gallery`
- About navigates to `/about`
- Contact navigates to `/contact`
- Book Now navigates to `/contact`

## Home Page Direction

The Home page first screen should be hero-focused and match the confirmed visual direction:

- Shared navbar at the top.
- VVS Haus logo on the left.
- Navigation links centered.
- Book Now button on the right.
- Dark cinematic warehouse background.
- Branded mobile detailing van on the left.
- Mercedes vehicle on the right.
- Large glowing VVS diamond/logo in the center.
- Main text: `PRECISION MOBILE DETAILING`
- Subtitle: `Luxury care. German precision. Built different.`
- Buttons: `Book Your Detail` and `View Services`
- Bottom feature strip: `Mobile Service`, `Premium Products`, `German Precision`, `Satisfaction Guaranteed`

The Home hero viewport must not include service cards, gallery sections, about sections, social sections, or footer content.

## Page Direction

- Services page: full services menu, packages, process section, and booking CTA.
- Gallery page: transformations, before/after images, gallery grid, and booking CTA.
- About page: brand story, values, why choose us, founder/equipment content, and booking CTA.
- Contact page: booking form, contact details, WhatsApp CTA, service area, and footer.

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
- react-router-dom

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
  pages/
  styles/
```

Guidelines:

- Put page-level route components in `src/pages/`.
- Keep `Navbar` and `Footer` shared in `src/components/layout/`.
- Put reusable visual primitives in `src/components/ui/`.
- Put reusable page sections in `src/components/sections/`.
- Put static content arrays in `src/data/`.
- Put animation helpers and shared utilities in `src/lib/`.
- Keep page files focused on composition and avoid large multipurpose components.

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
- Run `npm run build` before marking major page or shared component work complete.
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

- Explain the component or page architecture before coding.
- Build each page, section, or component as an isolated, reusable unit.
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
- When a page or shared component is complete, summarize changed files, validation commands, and any remaining risks.
