# Project Structure & Conventions

Adapted from the team's standard Next.js architecture doc for this project,
which uses the **App Router** (Next.js 16) instead of the Pages Router the
original doc assumed. Routing conventions differ; the component/lib
organisation is preserved.

```text
netpuppys-site/
├── public/images/
│   ├── brand, hero, home, team, work, clients, blog, testimonials, shapes/  # homepage art
│   └── wp/<yyyy>/<mm>/<file>    # images mirrored from the WordPress media library
├── scripts/gen-image-sizes.py   # regenerates src/lib/data/wp-image-sizes.ts (needs Pillow)
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root: <html>/<body>, fonts, Font Awesome CSS
│   │   ├── (site)/              # Pages with the main Header/Footer/FloatingContact
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx         # Homepage
│   │   │   ├── about-us, meet-the-team, careers, contact, free-audit, thankyou,
│   │   │   ├── our-work, success-stories, marketing-solutions,
│   │   │   ├── marketing-solutions/[slug]   # 8 service pages (static params)
│   │   │   └── terms-conditions, privacy-policy, refund-policy
│   │   ├── (landing)/           # Ad landing pages with their own minimal header/footer
│   │   │   └── digital-marketing-agency/
│   │   └── api/contact/route.ts # Lead form endpoint (see "Contact form" below)
│   │
│   ├── components/
│   │   ├── common/              # Primitives: Button, Eyebrow, SectionTitle, Carousel,
│   │   │                          FaIcon, CountUp, Reveal, StarRating, dividers, ...
│   │   └── containers/
│   │       ├── common/          # Container, Header, Footer, Layout
│   │       ├── shared/          # Sections reused across pages: InnerHero, InnerPage,
│   │       │                      ProofSection, TestimonialsSection, ClientLogosSection,
│   │       │                      IconCardGrid, BannerBand, CtaPanel, ContactForm, ...
│   │       └── pages-component/ # Page-only sections: home, about, team, careers,
│   │                              contact, our-work, success-stories, service,
│   │                              solutions, legal, landing
│   ├── lib/
│   │   ├── data/                # ALL copy: home-content.ts, site-content.ts (nav/footer),
│   │   │   │                      services.ts (8 service pages), wp-image-sizes.ts
│   │   │   └── pages/           # One file per inner page (about.ts, careers.ts, ...)
│   │   └── helpers/images.ts    # wp(path, alt) -> {src,width,height,alt}
│   ├── styles/globals.css       # Tailwind v4 + brand tokens
│   └── types/site.d.ts
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
- **Routing**: new pages are added as `src/app/(site)/<route>/page.tsx` (App Router
  file convention) — there is no `src/pages/` in this project.

- **Images**: put new WordPress images under `public/images/wp/...`, run
  `python3 scripts/gen-image-sizes.py`, then reference them via `wp('2024/05/x.webp', 'alt')`.
- **Contact form**: `ContactForm` posts to `/api/contact`, then redirects to `/thankyou`.
  Set `RESEND_API_KEY` + `CONTACT_TO_EMAIL` (optional `CONTACT_FROM_EMAIL`) to email
  leads, or `FORM_WEBHOOK_URL` to forward JSON. With neither set, leads are only logged.

## Status

All pages except the blog have been ported from netpuppys.com (26 static routes).
The blog is pending a headless-WordPress decision.
