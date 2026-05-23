# Bosko Landing Page (bosko-lp)

A Next.js 16 landing page implementing the **Bosko Design System** handoff. Bosko is a gamified Brazilian e-book reader with a minimalist, high-contrast visual identity.

## Quick Start

```bash
npm install          # Install dependencies
npm run dev          # Start dev server (http://localhost:3000)
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Auto-fix ESLint issues
npm run format       # Check Prettier formatting
npm run format:fix   # Auto-fix formatting
```

## Architecture

**Next.js App Router** (src/ directory) with:

- **src/app/layout.tsx** — Root layout (HTML, metadata, CSS imports)
- **src/app/page.tsx** — Main landing page component with all sections
- **src/styles/globals.css** — All landing page styles (navigation, hero, features, showcase, quote, CTA, footer)
- **public/colors_and_type.css** — Bosko design system CSS variables (fonts, colors, tokens)
- **public/assets/** — Design system assets (logos, SVGs, screenshots)

## Design System

Bosko's identity is deliberately **spartan: black, white, one piercing orange (`#FF6900`)**.

### Colors & Typography

- **Fonts:** Inter (product UI), Hind Bold (marketing display), JetBrains Mono (code)
- **Palette:** `#000000` (obsidian), `#FF6900` (orange), `#FFFFFF` (white), warm cream/stone for surfaces
- **No gradients, no glassmorphism, no emoji, no photography** — only book covers

### Sections

1. **Navigation** — Sticky header with logo, links, CTA badge
2. **Hero** — Black background with orange K-wave pattern, headline ("Levando sua leitura para outro nível"), device mockup, App Store + Google Play badges
3. **Features** — 4 cards: personal shelf, public domain library, refined reader, gamification (coming soon)
4. **Showcase** — 3 app screenshots in dark theme
5. **Quote** — Centered blockquote with orange quotes
6. **CTA** — Orange section with final call-to-action and badges
7. **Footer** — Dark background, links organized by category (Product, Company, Legal)

### Wave Dividers

Between sections: SVG curves transitioning between backgrounds. The divider fills are manually set inline (hardcoded colors) since this is a static page.

## File Structure

```text
bosko-lp/
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout (HTML, metadata, CSS imports)
│   │   └── page.tsx           # Landing page (350 lines, single component)
│   └── styles/
│       └── globals.css        # All landing styles (CSS classes, no Tailwind)
├── public/
│   ├── colors_and_type.css    # Bosko design tokens (fonts, colors, spacing)
│   ├── favicon.png
│   └── assets/                # Logos, patterns, screenshots
│       ├── bosko-logo-horizontal-*.svg
│       ├── bosko-mark-*.svg
│       ├── patterns/          # K-wave, B-wave, dividers
│       └── screenshots/       # App screenshots (05-, 06-, 07-*)
├── eslint.config.mjs          # ESLint config (flat format)
├── .prettierrc                # Prettier config (no Tailwind plugin)
├── tsconfig.json              # TypeScript paths: @/* → ./src/*
├── package.json               # Dependencies + scripts
├── CLAUDE.md                  # This file
└── README.md                  # User documentation
```

## Key Decisions

1. **App Router + src/ directory** — Modern Next.js structure with all code in `src/`
2. **Single page component** — `src/app/page.tsx` contains the entire landing page (350 lines)
3. **CSS classes, not Tailwind** — Hardcoded CSS in `globals.css` for precise design system control
4. **SVG icons inline** — App Store, Google Play, and feature icons as React components (no icon library)
5. **Portuguese-first** — All UI text in Brazilian Portuguese (`lang="pt-BR"`)
6. **Wave dividers hardcoded** — SVG curves between sections use inline fill colors

## Conventions (from bosko-app)

- **File naming:** kebab-case (enforced by ESLint)
- **Imports:** Always use path aliases (`@/*`) — but this project is small enough that no aliases are needed
- **Import order:** built-ins → external → internal
- **Formatting:** No semicolons, trailing commas in multiline structures (Prettier)
- **Language:** English for code/comments, Brazilian Portuguese for UI copy

## ESLint & Prettier

- **ESLint config:** `eslint.config.mjs` (flat config, v9+)
  - TypeScript files: `@typescript-eslint/no-unused-vars` rule
  - Import organization enforced (`import-x/order`)
  - No relative parent imports (`../`) — use absolute/aliases
  - File naming: kebab-case for app files
  - No semicolons, trailing commas in multiline
- **Prettier:** Standard config from bosko-app (no Tailwind plugin since we don't use it)
- **Pre-commit hooks:** None configured (no husky); use `npm run lint:fix && npm run format:fix` before committing

## Deployment

- **Build:** `npm run build` → `.next/` directory
- **Start:** `npm run start` (requires Node.js)
- **Environment:** No env vars required; all assets are static/local

## Adding Pages

To add support and privacy pages:

1. Create `src/app/support/page.tsx` and `src/app/privacy/page.tsx`
2. Copy HTML from the design system handoff and convert to React
3. Reuse CSS class names from `src/styles/globals.css` (already imported in layout)
4. Link from footer/navigation in `src/app/page.tsx`

## Resources

- **Design system source:** `/tmp/bosko-design-system/project/` (or original zip: `bosko-lp/Bosko Design System-handoff.zip`)
- **Bosko app source (reference):** [github.com/abagtech/bosko-app](https://github.com/abagtech/bosko-app)
- **Bosko backend (reference):** [github.com/abagtech/bosko-back](https://github.com/abagtech/bosko-back)

## Notes for Future Work

- The hero K-wave pattern (`pattern-k-orange-vertical.svg`) is referenced but may not exist in current assets; if broken, recreate from the K-pattern SVG
- Screenshot filenames are hardcoded (`02-estante.png`, etc.); verify they exist in `public/assets/screenshots/`
- The "Em breve" (Coming Soon) badge on the gamification feature is inline styled; move to CSS if reused
- No dark mode toggle; the design system supports both light and dark but the page only ships light mode
