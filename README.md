# NeoAxis Health — Homepage Redesign Concepts

Two visually distinct, client-presentation-quality homepage demos for **Neo Axis Health Private Limited** (tagline: "Medicine with a Cause").

## Quick Start

```bash
npm install
npm run dev      # Development server at http://localhost:3000
npm run build    # Production build
npm start        # Production server
npm run lint     # ESLint
npx tsc --noEmit # TypeScript check
```

## Routes

| Route | Description |
|---|---|
| `/` | Selection screen linking to both concepts |
| `/demo/neoaxis-precision` | **Concept A** — Premium, contemporary corporate site |
| `/demo/medicine-with-a-cause` | **Concept B** — Human-centred, editorial design |

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Fonts:** Inter + Playfair Display (via `next/font/google`)
- **Images:** `next/image` with explicit sizing, lazy loading, priority hero

## Project Structure

```
src/
├── app/
│   ├── page.tsx                          # Selection screen
│   ├── layout.tsx                        # Root layout with fonts
│   ├── globals.css                       # Brand tokens & base styles
│   └── demo/
│       ├── neoaxis-precision/
│       │   ├── page.tsx                  # Concept A (12 sections)
│       │   └── PrecisionHeader.tsx       # Sticky header (client)
│       └── medicine-with-a-cause/
│           ├── page.tsx                  # Concept B (12 sections)
│           └── CauseHeader.tsx           # Airy header (client)
├── components/
│   └── shared/
│       ├── ImpactCarousel.tsx            # 6-image carousel (shared, dual-styled)
│       ├── MobileMenu.tsx                # Accessible mobile nav
│       └── ProductDisclosure.tsx         # Expandable product cards
└── content/
    ├── assets.ts                         # Image paths, alt text, carousel slides
    ├── brand.ts                          # Company name, tagline, copy
    ├── facts.ts                          # Claims needing confirmation
    ├── leadership.ts                     # Team profiles
    ├── navigation.ts                     # Nav items & contact info
    ├── pillars.ts                        # The 6 Es
    ├── products.ts                       # Product categories
    └── publications.ts                   # Publication entries

public/assets/neoaxis/
├── carousel/                             # 6 original event photographs
├── community/                            # Community/field images
├── hero/                                 # Hero photograph
├── leadership/                           # 3 leadership portraits
├── logo/                                 # Original logo (PNG, transparent)
├── products/                             # Product page images
├── publications/                         # 21 publication images
└── team/                                 # Team/company images
docs/                                     # Design tokens, comparison, missing assets
research/                                 # Asset manifest CSV
```

## Key Components

- **ImpactCarousel** — Full-featured image carousel with prev/next controls, pagination dots, touch/swipe support, keyboard accessibility, optional autoplay (pauses on interaction and respects `prefers-reduced-motion`). Dual-styled for both concepts.
- **MobileMenu** — Accessible slide-out mobile navigation with keyboard support (Esc to close, focus management, `aria-expanded`, body scroll lock)
- **ProductDisclosure** — Expandable product category cards with accessible `aria-expanded` state
- **PrecisionHeader / CauseHeader** — Sticky headers with scroll-based transparency, desktop nav, and mobile menu integration

## Content Layer

All verified content lives in typed TypeScript modules under `src/content/`. No content is hardcoded in components. Changes to company information only need to be made in one place.

## Assets

42 original images downloaded from the NeoAxis Health website:
- 1 logo (PNG with transparency)
- 1 hero photograph
- 4 community/team photographs
- 3 leadership portraits
- 6 carousel event photographs
- 21 publication images
- 6 product page images

No stock photography or AI-generated images are used.

## Documentation

- [`docs/design-tokens.md`](docs/design-tokens.md) — Brand colours and typography
- [`docs/design-comparison.md`](docs/design-comparison.md) — Detailed comparison of Concepts A and B
- [`docs/missing-assets.md`](docs/missing-assets.md) — Asset download status and notes
- [`research/asset-manifest.csv`](research/asset-manifest.csv) — Full asset register
