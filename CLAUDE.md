# CLAUDE.md — Pallume Website
**Path:** ~/claude-code-projects/pallume-website/
**Branch:** pallume (local only — not pushed)
**Domain:** pallume.com (pending connection)
**Last updated:** 04/15/2026

---

## WHAT THIS SITE IS

**Business:** Pallume (formerly SkemaLS)
**Owner:** Camden Bennett — camden@livewyoming.net
**Purpose:** AI-powered execution coaching for business owners. Custom accountability systems built by a coach, running every morning.
**Primary action:** Qualify → book discovery call.
**Audience:** Business owners, 30–55, $100K–$2M revenue, services businesses.

---

## CONTEXT FILES

Full brand context, messaging framework, and content strategy live in ClaudeOS:
`~/ClaudeOS/02-businesses/pallume/pallume-website-builder/`

Key files there:
- `skemels-messaging-framework-v2.md` — voice and positioning
- `skemels-website-master-knowledge-v2.md` — full site knowledge base
- `skemels-website-content-brief.md` — content decisions
- `style-library.jsx` — component reference

Read those before making copy or design decisions.

---

## TECH STACK

- Next.js 14 App Router + TypeScript
- Tailwind CSS 3 JIT — configs use `__dirname` for absolute paths (CWD fix)
- Fonts: Playfair Display (serif/headings) + Inter (sans/body) via `next/font/google`
- Vercel (deploy pending domain connection)

**Rules:**
1. All copy lives in `content/siteContent.ts` — never edit text inside page/component files
2. Images in `/public/images/`
3. No new packages without asking
4. `npm run build` before any commit
5. Test at 375px before marking visual work done
6. 8px spacing grid — no arbitrary values
7. Complete files only — no stubs

---

## DESIGN SYSTEM

**Style:** Warm editorial — not dark/tech. Premium coaching brand.

**Colors (tailwind.config.js):**
- `navy` — `#0F1B2D` — primary dark background
- `navySecondary` — `#1B2838` — secondary dark
- `gold` — `#C89B3C` — primary CTA and accent
- `goldHover` — `#D4A843` — CTA hover state
- `bodyBg` — `#F8F6F0` — light section background
- `cardBg` — `#FFFFFF` — card surface
- `textDark` — `#1A1A1A` — dark section body text
- `textLight` — `#F8F6F0` — light text on dark
- `textMuted` — `#6B7280` — muted body
- `textLightMuted` — `#B0B8C4` — muted on dark
- `border` — `#E5E1D8` — subtle borders

**Fonts:**
- `font-serif` / `font-heading` → Playfair Display via `var(--font-serif)`
- `font-sans` / `font-body` → Inter via `var(--font-sans)`
- Explicit rules in `globals.css` as belt-and-suspenders

**SectionWrapper variants:** `dark` | `navy2` | `light` | `white`

---

## CURRENT STATE (04/15/2026)

**Completed:**
- Full rebrand from SkemaLS → Pallume design system
- Hero section — approved. Single CTA ("See If You Qualify"), photo card with Camden caption, feature strip with proof stats, content anchored to bottom
- Tailwind CWD fix — `tailwind.config.js` uses `__dirname`, `postcss.config.mjs` clean

**In progress:**
- Remaining homepage sections need mockups before building

**Pre-launch blockers:**
- 3 articles needed for `/the-work` route — DO NOT LAUNCH without them
- `/myskema-lite` route rename decision pending
- pallume.com domain connection in Vercel

---

## SITE STRUCTURE

```
/              Homepage (long-scroll)
/about         Founder story + credibility
/services      Offer detail (PATH A / B / C)
/faq           Objection handling
/contact       Qualifier form + booking
/the-work      Articles / case studies (3 needed pre-launch)
```

---

## SEO

- Title format: `[Page Topic] — Pallume`
- Organization name: Pallume
- Domain: pallume.com (update all schema once live)
- Canonical URLs, OG images 1200×630 per page

---

## PRE-LAUNCH CHECKLIST

- [ ] Remaining homepage sections built against mockups
- [ ] /myskema-lite route rename resolved
- [ ] 3 articles live at /the-work
- [ ] pallume.com connected in Vercel
- [ ] Meta description on homepage
- [ ] robots.txt with AI crawler allowances
- [ ] XML sitemap via next-sitemap
- [ ] llms.txt
- [ ] Organization + Person JSON-LD schema (update to Pallume/pallume.com)
- [ ] OG + Twitter Card meta tags
- [ ] GA4 installed and generate_lead conversion firing
- [ ] Privacy policy page
- [ ] Terms of service page
- [ ] Footer email → Pallume contact (not Pinedale Properties)
- [ ] Favicon
- [ ] Mobile usability check at 375px
- [ ] Lighthouse 95+ on homepage
