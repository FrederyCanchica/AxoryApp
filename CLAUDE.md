# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Marketing site for **aXory** (brand name in `siteConfig`, repo/package name is `AxoryApp` / `axory-app`) — a single-page site selling web development + automation + AI agent services, plus a set of standalone `/demos/*` pages showcasing fictional client sites (barber, tattoo studio, legal firm, restaurant, clinic, etc.) used as sales collateral.

Built with the Lovable.dev Vite/React/shadcn scaffold (see `lovable-tagger` dev-mode plugin in `vite.config.ts`).

## Commands

- `npm run dev` — start Vite dev server on port 8080
- `npm run build` — production build
- `npm run build:dev` — build in development mode (unminified, for debugging build issues)
- `npm run lint` — run ESLint over the whole repo
- `npm run test` — run vitest once (`vitest run`)
- `npm run test:watch` — run vitest in watch mode
- Run a single test file: `npx vitest run src/test/example.test.ts`

There is no separate typecheck script; `tsc` is invoked as part of `vite build`.

## Architecture

### Two site "zones"

1. **Main landing page** (`src/pages/Index.tsx`) — a single scrolling page composed of section components from `src/components/site/*` (`Hero`, `ProblemSolution`, `Demos`, `Process`, `About`, `Pricing`, `Testimonials`, `LeadMagnet`, `FAQ`, `Contact`, `Footer`, plus a persistent `WhatsAppFab`). Routing anchors like `/#demos`, `/#pricing`, `/#contact` are used for in-page navigation from other pages.
2. **Demo pages** (`src/pages/demos/*`) — each is a fully self-contained fictional client site reachable at `/demos/<slug>` (see route table in `src/App.tsx`). Most demos (Tattoo, Barber, Local, Mechanic, Legal, Restaurant, Beauty, LegalPardo) are single large files (100–550+ lines) wrapped in the shared `DemoLayout` component (`src/components/site/DemoLayout.tsx`), which provides a consistent header/hero/CTA-footer shell. The **Clinic demo** (`src/pages/demos/clinic/*`) is the exception: it's a multi-route sub-app with its own `ClinicLayout` (nested `<Route>` with an `Outlet`, own header/footer, own AI-chat widget, own scoped CSS-in-JS design tokens via a `<style>` block with `--vc-*` custom properties) rather than reusing `DemoLayout`. When adding a new demo, prefer the single-file + `DemoLayout` pattern unless the demo genuinely needs multiple sub-routes.

Demo pages intentionally simulate product behavior with local component state and `setTimeout`-driven scripts (e.g. `ClinicLayout`'s scripted AI chat conversation) rather than calling any real backend — there is no server in this repo.

### Editorial design system

The main site (not the demos, which mostly define their own look) uses a consistent "editorial" visual language defined in `src/index.css` + `tailwind.config.ts`:
- Custom color tokens: `carbon`, `graphite`/`graphite-soft`, `bone`/`bone-dim`, `oxblood`/`oxblood-glow` (all HSL CSS variables), alongside the standard shadcn tokens (`background`, `foreground`, `primary`, etc.)
- Custom fonts: `font-display` (Fraunces, for headlines), `font-mono` (JetBrains Mono, for eyebrow/label text), default `font-sans` (Inter)
- Utility classes: `.container-editorial` (page container), `.label-eyebrow` (uppercase mono kicker text), `.grain` (noise texture overlay)
- Animation/scroll hooks in `src/hooks`: `use-reveal.ts` (IntersectionObserver-based fade/stagger-in via `.reveal` / `.reveal-item` classes), `use-stagger-reveal.ts`, `use-cursor-glow.ts`, `use-magnetic.ts` (magnetic hover effect on buttons/links)

shadcn/ui primitives live in `src/components/ui/*` and are managed via `components.json` (style: default, baseColor: slate, no RSC). Import them with the `@/` alias (configured in `vite.config.ts`, `vitest.config.ts`, and `tsconfig.json` to point at `src/`).

### i18n

`src/lib/i18n.tsx` implements a minimal custom i18n system — no external library. All UI copy lives in a single flat `dict` object keyed by dotted string keys (e.g. `"hero.title"`) for `es` and `en`. Language is picked up from `localStorage["mr_lang"]` (default `es`) and exposed via the `useI18n()` hook (`{ lang, setLang, t }`). Demo pages under `src/pages/demos/*` are **not** wired into this i18n system — their copy is hardcoded Spanish, since they're static sales demos, not part of the translatable main site. When adding copy to the main site, add both `es` and `en` entries to the `dict` in `i18n.tsx` rather than hardcoding strings.

### Site configuration & lead capture

`src/lib/site-config.ts` centralizes brand name, WhatsApp number, Calendly URL, contact email, and the Make.com lead-capture webhook URL (`siteConfig.leadsWebhookUrl`). Forms (e.g. `LeadMagnet.tsx`, `Contact.tsx`) validate input with `zod` then POST JSON directly to that webhook; if the webhook isn't configured they fall back to a `mailto:` link. `whatsappLink(msg?)` builds a `wa.me` deep link using `siteConfig.whatsappNumber`. Update values here rather than hardcoding contact info elsewhere.

### Testing

Vitest + Testing Library + jsdom (`vitest.config.ts`, `src/test/setup.ts`). Test files must match `src/**/*.{test,spec}.{ts,tsx}`. The test suite is currently minimal — no established per-component testing convention yet, so match the existing style in `src/test/` when adding new tests.

### Linting

ESLint flat config (`eslint.config.js`) using `typescript-eslint` recommended rules + `react-hooks` + `react-refresh`. Notably `@typescript-eslint/no-unused-vars` is turned **off** project-wide.
