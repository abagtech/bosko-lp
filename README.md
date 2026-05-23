# Bosko Landing Page

A clean, minimalist Next.js landing page for **Bosko** — a gamified Brazilian e-book reader. Built from the Bosko Design System handoff.

## Features

- 🎨 **Design System Compliant** — Black, white, and piercing orange (`#FF6900`) palette
- 📱 **Responsive Design** — Mobile-first layout with media queries for tablet/desktop
- ⚡ **Next.js 16** — App Router with src/ directory, TypeScript, minimal dependencies
- 🎯 **Portuguese-First** — All UI text in Brazilian Portuguese
- 🔧 **ESLint + Prettier** — Configured exactly like bosko-app
- 🌊 **Wave Dividers** — SVG curves transitioning between colored sections

## Sections

1. **Navigation** — Sticky header with Bosko logo and CTA
2. **Hero** — Black background, orange K-wave pattern, device mockup, App Store/Google Play badges
3. **Features** — 4 cards describing key features (personal shelf, public library, refined reader, gamification)
4. **Showcase** — 3 app screenshots in dark theme
5. **Quote** — Centered testimonial with orange quotes
6. **Call-to-Action** — Orange section with final message and download badges
7. **Footer** — Dark background with product/company/legal links

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm run start
```

### Linting & Formatting

```bash
npm run lint        # Check ESLint issues
npm run lint:fix    # Auto-fix ESLint issues
npm run format      # Check Prettier formatting
npm run format:fix  # Auto-fix formatting
```

## Design System

The landing page implements the **Bosko Design System**, a minimalist visual language:

- **Colors:** `#000000` (black), `#FF6900` (orange), `#FFFFFF` (white), warm cream and stone for surfaces
- **Typography:** Inter (product UI), Hind Bold (marketing display)
- **Spacing:** 24px default padding (p-6), 32px between sections
- **Borders:** Small radii (4.8px), 1px borders, minimal shadows
- **Icons:** Inline SVG icons (no icon library)
- **No:** Gradients, glassmorphism, emoji, photography, or decorative illustration

For detailed design guidelines, see [CLAUDE.md](./CLAUDE.md).

## File Structure

```text
bosko-lp/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout (metadata, CSS imports)
│   │   └── page.tsx          # Landing page component
│   └── styles/
│       └── globals.css       # All landing page styles
├── public/
│   ├── colors_and_type.css   # Design system tokens
│   ├── favicon.png
│   └── assets/               # Logos, patterns, screenshots
├── eslint.config.mjs         # ESLint configuration
├── .prettierrc                # Prettier configuration
├── tsconfig.json             # TypeScript paths (src/ aliases)
├── package.json              # Dependencies and scripts
├── CLAUDE.md                 # Developer guide
└── README.md                 # This file
```

## Key Technologies

- **Next.js 16** — React framework
- **TypeScript** — Type safety
- **Tailwind CSS 4** — CSS framework (imported but not used on this page)
- **ESLint 9** — Code linting
- **Prettier 3** — Code formatting

## Deployment

The site is a static Next.js export. Suitable for deployment on:

- Vercel (automatic from git)
- Netlify (with `npm run build && npm run start`)
- AWS S3 + CloudFront (after `npm run build`)
- Any Node.js hosting (with `npm run build && npm run start`)

## Adding Pages

To add support.html or privacy.html as Next.js pages:

1. Create `pages/support.tsx` or `pages/privacy.tsx`
2. Reuse the CSS classes from `styles/globals.css`
3. Link from footer/navigation

## Contributing

- Follow kebab-case file naming (enforced by ESLint)
- Use path aliases (`@/*`) for imports
- No semicolons, trailing commas in multiline (Prettier)
- Always run `npm run lint:fix && npm run format:fix` before committing

## License

© 2026 abag.tech · Todos os direitos reservados.

---

Built with ❤️ in Brasil.
