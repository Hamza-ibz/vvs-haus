---
name: vvs-haus-premium-frontend
description: Use this skill when building or reviewing premium VVS Haus React/Vite frontend pages, shared layout, sections, UI components, routing, or animations. It guides multi-page Mercedes-focused mobile detailing website work using React, Tailwind CSS, Framer Motion, GSAP, and react-router-dom.
---

# VVS Haus Premium Frontend Skill

Use this skill when working on VVS Haus page builds, reusable sections, UI reviews, routing decisions, animation decisions, responsive polish, or code quality improvements for the React/Vite website.

## Project Context

VVS Haus is a premium mobile detailing brand. The website should feel luxury, cinematic, modern, high-end automotive, Mercedes-focused, professional, clean, and minimalist.

The final confirmed direction is a multi-page website, not a one-page scrolling landing page.

## Required Pages

- Home: `/`
- Services: `/services`
- Gallery: `/gallery`
- About: `/about`
- Contact / Booking: `/contact`

Use `react-router-dom` for routing when implementation begins.

## Navigation Rules

- Home navigates to `/`.
- Services navigates to `/services`.
- Gallery navigates to `/gallery`.
- About navigates to `/about`.
- Contact navigates to `/contact`.
- Book Now navigates to `/contact`.
- Do not use anchor-scroll navigation as the main site structure.

## Home Page Direction

The Home page first screen should be hero-focused and match the confirmed visual reference:

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

The Home hero viewport must not show service cards, gallery sections, about sections, social sections, or footer content.

## Separate Page Direction

- Services page: full services menu, packages, process section, and booking CTA.
- Gallery page: transformations, before/after images, gallery grid, and booking CTA.
- About page: brand story, values, why choose us, founder/equipment content, and booking CTA.
- Contact page: booking form, contact details, WhatsApp CTA, service area, and footer.

## Required Workflow

1. Explain the architecture decision before generating code.
2. Build only one page, section, or focused UI unit at a time.
3. Keep edits scoped to the requested files and page/component.
4. Avoid unrelated refactors.
5. Test the page or component after implementation.
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
- Keep page rhythm consistent from mobile through wide desktop.

## Code Quality Rules

- Put page-level route components in `src/pages/`.
- Keep `Navbar` and `Footer` shared in `src/components/layout/`.
- Put reusable UI primitives in `src/components/ui/`.
- Put reusable page sections in `src/components/sections/`.
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
