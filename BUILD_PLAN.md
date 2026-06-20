# VVS Haus Build Plan

## Phase 1: Project Baseline

- [ ] Confirm the React/Vite project runs locally.
- [ ] Confirm Tailwind CSS is configured and working.
- [ ] Confirm Framer Motion, GSAP, Lucide React Icons, and react-router-dom are available.
- [ ] Establish the planned folder structure under `src/`, including `src/pages/`.
- [ ] Define global brand tokens for black, charcoal, white, and cyan.
- [ ] Document approved brand wording: `VVS Haus`, `Visual Vehicle Standards`, `Professional Mobile Detailing`, `Established 2018`, and `Setting the Standard Since 2018`.
- [ ] Confirm `/assets/logos/logo.png` is the single logo asset used in React components.
- [ ] Confirm font loading strategy for Orbitron and Inter.
- [ ] Run `npm run lint`.
- [ ] Run `npm run build`.
- [ ] Commit the baseline once verified.

## Phase 2: Routing And Shared Layout

- [ ] Explain the routing and shared layout architecture before coding.
- [ ] Install or confirm `react-router-dom` only when package changes are approved.
- [ ] Create page-level route components in `src/pages/`.
- [ ] Configure routes for `/`, `/services`, `/gallery`, `/about`, and `/contact`.
- [ ] Keep `Navbar` and `Footer` shared across pages.
- [ ] Make navbar links route to pages, not section anchors.
- [ ] Make `Book Now` route to `/contact`.
- [ ] Run `npm run lint`.
- [ ] Run `npm run build`.
- [ ] Commit routing and shared layout.

## Phase 3: Visual System

- [ ] Create shared layout primitives.
- [ ] Create shared button styles.
- [ ] Create shared page and section spacing patterns.
- [ ] Create reusable glow, border, and dark surface treatments.
- [ ] Define animation defaults for reveal timing and easing.
- [ ] Test visual consistency on mobile and desktop.
- [ ] Run `npm run lint`.
- [ ] Run `npm run build`.
- [ ] Commit the visual system.

## Phase 4: Loading Screen

- [ ] Explain the loading screen architecture before coding.
- [ ] Build the loading screen as its own reusable component.
- [ ] Add premium motion using Framer Motion.
- [ ] Keep the sequence short, cinematic, and brand-focused.
- [ ] Test loading state behavior.
- [ ] Run `npm run lint`.
- [ ] Run `npm run build`.
- [ ] Commit the loading screen.

## Phase 5: Home Page Hero

- [ ] Explain the Home page hero architecture before coding.
- [ ] Match the confirmed visual reference direction.
- [ ] Use a shared navbar at the top.
- [ ] Place the VVS Haus logo on the left.
- [ ] Center the navigation links.
- [ ] Place the `Book Now` button on the right.
- [ ] Use a dark cinematic warehouse background.
- [ ] Show a branded mobile detailing van on the left.
- [ ] Show a Mercedes vehicle on the right.
- [ ] Show a large glowing VVS diamond/logo in the center.
- [ ] Use main text: `PRECISION MOBILE DETAILING`.
- [ ] Use approved brand support copy such as `Professional Mobile Detailing. Setting the Standard Since 2018.`
- [ ] Add buttons: `Book Your Detail` and `View Services`.
- [ ] Add bottom feature strip: `Mobile Service`, `Premium Products`, `Visual Standards`, `Satisfaction Guaranteed`.
- [ ] Keep service cards, gallery content, about content, social content, and footer content out of the hero viewport.
- [ ] Run `npm run lint`.
- [ ] Run `npm run build`.
- [ ] Commit the Home page hero.

## Phase 6: Services Page

- [ ] Explain the Services page architecture before coding.
- [ ] Build the full services menu.
- [ ] Build service packages.
- [ ] Build the process section.
- [ ] Add a booking CTA that routes to `/contact`.
- [ ] Keep content clear, premium, and conversion-focused.
- [ ] Test mobile readability and hierarchy.
- [ ] Run `npm run lint`.
- [ ] Run `npm run build`.
- [ ] Commit the Services page.

## Phase 7: Gallery Page

- [ ] Explain the Gallery page architecture before coding.
- [ ] Use Mercedes-only imagery.
- [ ] Do not include BMW, Audi, Porsche, Lamborghini, or other brands.
- [ ] Build transformations content.
- [ ] Build before/after image content.
- [ ] Build a gallery grid.
- [ ] Add a booking CTA that routes to `/contact`.
- [ ] Test image sizing, cropping, and loading behavior.
- [ ] Run `npm run lint`.
- [ ] Run `npm run build`.
- [ ] Commit the Gallery page.

## Phase 8: About Page

- [ ] Explain the About page architecture before coding.
- [ ] Build brand story content.
- [ ] Build values content.
- [ ] Build why choose us content.
- [ ] Build founder/equipment content.
- [ ] Add a booking CTA that routes to `/contact`.
- [ ] Keep the copy concise and high-confidence.
- [ ] Test responsive layout.
- [ ] Run `npm run lint`.
- [ ] Run `npm run build`.
- [ ] Commit the About page.

## Phase 9: Contact / Booking Page

- [ ] Explain the Contact page architecture before coding.
- [ ] Build the booking form.
- [ ] Add contact details.
- [ ] Add WhatsApp CTA.
- [ ] Add service area content.
- [ ] Include footer content on this page.
- [ ] Keep form fields accessible and easy to complete.
- [ ] Add validation or integration only when requested.
- [ ] Test keyboard navigation and mobile usability.
- [ ] Run `npm run lint`.
- [ ] Run `npm run build`.
- [ ] Commit the Contact page.

## Phase 10: Full Site QA

- [ ] Review all pages together for visual consistency.
- [ ] Verify route navigation works for `/`, `/services`, `/gallery`, `/about`, and `/contact`.
- [ ] Verify navbar links do not rely on anchor-scroll navigation as the primary structure.
- [ ] Check mobile, tablet, laptop, and wide desktop layouts.
- [ ] Verify there are no non-Mercedes vehicle references.
- [ ] Verify brand colors and fonts are used consistently.
- [ ] Check accessibility basics.
- [ ] Check animation performance.
- [ ] Run `npm run lint`.
- [ ] Run `npm run build`.
- [ ] Run `npm run preview`.
- [ ] Commit final QA fixes.

## Phase 11: Deployment

- [ ] Choose the deployment target.
- [ ] Configure environment variables if needed.
- [ ] Run a production build.
- [ ] Preview the production build locally.
- [ ] Deploy the site.
- [ ] Verify the live URL on mobile and desktop.
- [ ] Verify direct page loads work for every route.
- [ ] Commit deployment configuration changes.
