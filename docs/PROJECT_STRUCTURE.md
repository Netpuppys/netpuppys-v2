# Project Structure & Conventions

Adapted from the team's standard Next.js architecture doc for this project,
which uses the **App Router** (Next.js 16) instead of the Pages Router the
original doc assumed. Routing conventions differ; the component/lib
organisation is preserved.

```text
netpuppys-site/
├── public/
│   └── images/                 # Site imagery
├── src/
│   ├── app/                    # App Router routes (Next.js file-system routing)
│   │   ├── layout.tsx          # Root layout — fonts, metadata, wraps <Layout>
│   │   ├── page.tsx            # Homepage (/) — composes section components
│   │   └── globals.css re-export lives in src/styles/
│   │
│   ├── components/
│   │   ├── common/              # Atomic, reusable UI primitives
│   │   │   ├── Button/          # Solid / outline / ghost variants, used everywhere
│   │   │   ├── Card/            # "What We Do" service tile
│   │   │   ├── Diamond/         # Small rotated-square accent glyph
│   │   │   ├── Logo/            # Site wordmark (header + footer)
│   │   │   ├── SectionEyebrow/  # Underlined caption above section headings
│   │   │   └── icons/           # Inline SVG icon set
│   │   │
│   │   └── containers/
│   │       ├── common/           # Structural layout containers, used app-wide
│   │       │   ├── Container/    # Max-width + gutter wrapper
│   │       │   ├── Wrapper/      # Vertical section spacing
│   │       │   ├── Header/       # Utility bar + nav + mobile menu
│   │       │   ├── Footer/       # Link columns + contact + social
│   │       │   └── Layout/       # Wraps every page with Header + main + Footer
│   │       │
│   │       └── pages-component/  # Page-specific section components
│   │           └── home/         # Homepage-only sections (Hero, Programmes, ...)
│   │
│   ├── lib/
│   │   ├── data/                # Static content (home-content.ts) — copy lives
│   │   │                          here, not hardcoded in components
│   │   └── helpers/              # fonts.ts and other non-UI utilities
│   │
│   ├── styles/
│   │   └── globals.css          # Tailwind v4 entry + brand color tokens
│   │
│   └── types/
│       └── site.d.ts            # Shared content/prop types
```

## Conventions

- **DRY components first.** Before adding markup to a page section, check
  `components/common/` and `components/containers/common/` for an existing
  primitive (Button, Card, Container, Wrapper, SectionEyebrow). New reusable
  pieces get added there, not copy-pasted inline.
- **Content lives in `lib/data/`, not JSX.** Homepage copy is in
  `lib/data/home-content.ts`, typed via `types/site.d.ts`. Adding a fifth
  programme or a new footer link is a data-array edit, not a JSX edit.
- **One component per folder** (`Button/Button.tsx` + `Button/index.ts`),
  matching the original doc's pattern, so each has room for co-located
  styles/tests later without restructuring.
- **Path aliases** (`tsconfig.json`): `@/*` → `src/*`, plus the
  `@/components/*`, `@/containers/*`, `@/lib/*`, `@/styles/*`, `@/types/*`
  shortcuts from the original doc.
- **Routing**: new pages are added as `src/app/<route>/page.tsx` (App Router
  file convention) — there is no `src/pages/` in this project.

## Status

Empty skeleton cloned from the MCMCER project structure. The component
folders listed above are the target layout — create each primitive
(`Button/Button.tsx` + `Button/index.ts`, etc.) as it's needed.
