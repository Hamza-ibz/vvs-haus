# VVS Haus

VVS Haus is a premium multi-page React/Vite website for a luxury mobile detailing brand. The project is built to feel cinematic, modern, minimalist, and high-end, with a Mercedes-focused visual direction and a dark luxury design system.

The site is not a one-page scrolling website. It should use route-based pages for Home, Services, Gallery, About, and Contact / Booking.

## Tech Stack

- React
- Vite
- Tailwind CSS
- Framer Motion
- GSAP
- Lucide React Icons
- react-router-dom

## Brand Direction

VVS Haus should feel:

- Luxury
- Cinematic
- Mercedes-focused
- Professional
- Clean
- Minimalist
- High-end automotive

Core colors:

- Black: `#050505`
- Charcoal: `#111111`
- White: `#FFFFFF`
- Cyan: `#00D9FF`

Typography:

- Headings: `Orbitron`
- Body: `Inter`

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Lint the project:

```bash
npm run lint
```

Preview the production build:

```bash
npm run preview
```

## Required Pages

- Home: `/`
- Services: `/services`
- Gallery: `/gallery`
- About: `/about`
- Contact / Booking: `/contact`

## Navigation

The shared navbar should route to pages, not section anchors:

- Home navigates to `/`
- Services navigates to `/services`
- Gallery navigates to `/gallery`
- About navigates to `/about`
- Contact navigates to `/contact`
- Book Now navigates to `/contact`

## Home Page Direction

The Home page first screen should be a focused cinematic hero:

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

The Home hero viewport should not show service cards, gallery sections, about sections, social sections, or footer content.

## Page Direction

- Services page: full services menu, packages, process section, and booking CTA.
- Gallery page: transformations, before/after images, gallery grid, and booking CTA.
- About page: brand story, values, why choose us, founder/equipment content, and booking CTA.
- Contact page: booking form, contact details, WhatsApp CTA, service area, and footer.

## Planned Folder Structure

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

## Build Approach

This project should be developed in small, reviewable phases:

- Explain architecture decisions before generating code.
- Build one page, section, or shared component at a time.
- Keep shared layout in `src/components/layout/`.
- Keep page-level route components in `src/pages/`.
- Keep reusable UI components in `src/components/ui/`.
- Keep reusable sections in `src/components/sections/`.
- Keep data in `src/data/`.
- Test each major page or shared component with lint and production build commands.
- Keep the visual language premium, dark, cinematic, and Mercedes-focused.
- Avoid unrelated refactors while building a page or component.

See `BUILD_PLAN.md` for the phased implementation checklist.
