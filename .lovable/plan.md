## Heads up on the stack

Your spec asks for **Next.js 15 (App Router)**, but this Lovable project runs on **TanStack Start v1 + Vite + React 19** (Next.js is not supported here). I'll adapt the spec 1:1 to the supported stack — every visual, motion, and interaction decision in your doc is preserved. Concrete mapping:

| Spec calls for | Will be implemented as |
|---|---|
| Next.js App Router (`app/`) | TanStack Start file-based routes (`src/routes/`) |
| `next/font` (Geist, Geist Mono, Inter) | Google Fonts `<link>` in `__root.tsx` head |
| `next/image` | Native `<img>` with explicit width/height + `loading="lazy"` |
| `next-themes` | Lightweight `ThemeProvider` using `localStorage` + `class` on `<html>` |
| `app/api/contact/route.ts` | TanStack server route at `src/routes/api/contact.ts` (no email backend — logs + success toast; can wire to Resend later) |
| Tailwind v3 config | Tailwind v4 via `src/styles.css` `@theme` block (same tokens, same class names) |

All other libs (Framer Motion, GSAP+ScrollTrigger, Three.js, R3F, drei, shadcn/ui, lucide, react-hook-form, zod) work natively.

## What I'll build (single pass — full site)

**Design system & shell**
- Replace `src/styles.css` with the full token system: dark (default) + light themes, Aurora gradient, glass tokens, glow shadows, fluid type scale, motion tokens.
- Load Geist, Geist Mono, Inter via `<link>` in `__root.tsx`.
- `ThemeProvider` (class-based, persisted, default dark) + smooth body color transition.
- Noise texture (inline SVG data URL — no asset fetch needed).

**Layout components** (`src/components/layout/`)
- `Navbar` — floating glass pill, scroll-spy active indicator with `layoutId="navPill"`, shrinks on scroll, mobile hamburger overlay.
- `CommandPalette` — shadcn `Command` in a Dialog, ⌘K/Ctrl+K, Navigate / Theme / Social / Actions groups, keyboard-first.
- `ThemeToggle` — sun/moon morph via `AnimatePresence`.
- `Footer` — split layout + back-to-top button (appears past hero).
- `LoadingScreen` — SVG "A" stroke-draw + progress line, session-stored so it plays once, upward clip-path wipe exit, reduced-motion fallback.
- `ScrollProgress` — top-of-page Aurora-gradient progress bar.
- `CustomCursor` — dot + lagging ring via GSAP, hover state on `[data-cursor="hover"]`, disabled on touch.

**Shared primitives** (`src/components/shared/`)
- `GlassCard`, `TiltCard` (max 8°, perspective 1000px, spring reset), `MagneticButton` (40px radius, spring), `GradientText`, `SpotlightCard` (CSS custom props from mousemove), `AnimatedCounter` (GSAP ScrollTrigger), `SectionHeading`, `Reveal` (Framer `whileInView`, `once: true`, fadeUp 24px / 600ms / stagger 80ms).
- `lib/animations.ts` — shared variants (`fadeUp`, `staggerContainer`, `magneticSpring`).
- `hooks/`: `useScrollSpy`, `useMousePosition`, `useReducedMotion`.

**Content as data** (`src/content/`) — typed files for `projects`, `experience`, `education`, `skills`, `achievements`, `testimonials`, `blog`, all with the `[DRAFT]` copy from the spec so they're ready to swap.

**Sections** (`src/components/sections/`, composed in `src/routes/index.tsx`)
1. **Hero** — mono eyebrow, Aurora-gradient name (shimmer animation), typed headline (cycles once), intro, 3 magnetic CTAs, mouse-follow radial spotlight, `ConstellationOrb` on the right (mobile: behind text @ 30% opacity), staggered cinematic entrance.
2. **About** — sticky portrait card + scrollable content stack with a self-drawing mini timeline.
3. **Skills** — tabbed filter (Programming/Frontend/Backend/Database/Tools), `TiltCard` with icon + animated progress ring, purple-glow hover. Exact skill list from §7.5.
4. **Projects** — 3 large alternating feature cards (Eshara Nepal, Smart Agro Hub, Emergency Vehicle Alert System) with category eyebrow, tech chips, GitHub / Live Demo links, tilt + Aurora overlay on hover.
5. **Experience** — alternating vertical timeline; entries slide from their side; dot pulses on entry; achievements highlighted with emerald left border.
6. **Education** — horizontal scroll on desktop (GSAP ScrollTrigger pin + xPercent), vertical on mobile; in-progress entries get dashed border.
7. **Achievements** — `AnimatedCounter` stats row + badge grid with overshoot pop.
8. **Testimonials** — glass carousel with peeking neighbors on desktop, swipe on mobile, 6s auto-advance, pause on hover, pill-stretch active dot.
9. **Blog** — 3-col card grid with category chip, reading time, Aurora top-border on hover.
10. **Contact** — react-hook-form + zod, inline errors, magnetic submit, success cross-fade + shadcn toast, social icons with brand-tinted glow.

**3D layer** (`src/components/three/`, all lazy-mounted)
- `ConstellationOrb` — ~70 Fibonacci-sphere nodes, curated nearby-edge lines, slow autonomous rotation (90s/turn), mouse parallax (lerp 0.05), rim point light. **Includes the 3D avatar of a professional man you asked for**: a stylized low-poly figure (head + shoulders silhouette built from primitives — torus/capsule/sphere with theme-aware materials) floating inside the orb's center, gently bobbing, so the constellation reads as a network *around the person*. Low-end fallback to static SVG.
- `ParticleField` — 300 drift points, 30fps throttle.
- `FloatingShapes` — 2–3 low-poly props, used in one section max.
- All R3F canvases lazy-loaded; reduced-motion = static render.

**Routing & SEO**
- `src/routes/index.tsx` composes all sections; metadata (title, description, OG, Twitter) per spec §13 in the route `head()`.
- `src/routes/api/contact.ts` — POST handler with zod validation.
- `sitemap.xml` + `robots.txt`.
- JSON-LD `Person` schema injected in root head.

**Responsive & a11y**
- Breakpoint behavior per spec §11 (touch disables cursor + tilt via `(hover: hover)` check).
- Focus-visible rings on all interactive elements, semantic landmarks, single h1 (hero), labels on form fields, `prefers-reduced-motion` honored globally.

**Assets**
- Generate the hero portrait/avatar reference image and 3 project cover images via imagegen.
- Noise texture inlined as SVG data URL (no PNG fetch).

## Out of scope (call out explicitly)
- No real email backend wired up — contact form validates + shows success state; add Resend later via Lovable Cloud if you want real delivery.
- OG cover image (`/images/og-cover.png`) generated as a static asset; not a runtime render.
- No real testimonial people (uses `[DRAFT]` per your §14 — needs permission before publishing).
- Resume PDF will be a placeholder file at `public/resume.pdf` (1-page stub) until you provide the real one.

## Risks
- Single-pass build of this size is large; I'll execute in the §16 phase order but ship it all in this turn. Expect minor visual tuning after first render.
- Lighthouse ≥95 target with Three.js + GSAP is achievable but tight; the lazy-mount + reduced-motion fallbacks are in place from the start.

Approve and I'll build it end-to-end.