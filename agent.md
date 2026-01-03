# agent.md — Apex Nova Labs Website (Next.js)

A shared guide for anyone (human or AI) working on the **Apex Nova Labs** marketing website. Use this to align on goals, scope, tone, architecture, and “Definition of Done.”

---

## 1) Brand snapshot

**Company:** Apex Nova Labs
**Meaning:** _Apex_ = the peak, the highest point; _Nova_ = a new, bright star; _Labs_ = a place for experimentation & product R&D.
**One‑liner:** "We design and build peak‑quality software that lets new stars rise."
**Voice:** Clear, confident, modern, helpful; no jargon unless needed; global English.
**Values:** Reliability • Craft • Curiosity • Results • Partnership.

---

## 2) Project goals (MVP)

- Tell the company story and services credibly.
- Generate qualified leads with a strong **Contact/Consult** CTA.
- Showcase selected projects/case studies.
- Rank for relevant keywords with solid technical SEO.
- Ship a fast, accessible, privacy‑respecting site.

**Success signals**

- Time‑to‑Interactive < 2.5s on 4G, Lighthouse Perf ≥ 90.
- Core Web Vitals passing on field data.
- Contact conversions from organic & direct.
- 0 a11y violations in automated checks; manual spot‑checks pass.

---

## 3) Tech stack & decisions

- **Framework:** Next.js (App Router) + TypeScript
- **Styling:** Tailwind CSS + CSS variables for design tokens
- **UI Kit:** shadcn/ui (Composable, accessible primitives)
- **Icons:** lucide-react
- **Content:** MDX for marketing pages & blog; (optional) Contentlayer
- **Images:** next/image; on‑the‑fly OG images via `next/og`
- **Forms:** Resend (email) or serverless function; honeypot + rate limit
- **Analytics:** GA4 or Plausible (prefer privacy‑friendly)
- **Hosting:** Vercel (Preview deploys → PRs)

> Keep third‑party deps minimal. Prefer first‑party Next.js features.

---

## 4) Information architecture (routes)

- `/` — Home
- `/services` — Services overview
- `/services/[slug]` — Service detail (e.g., web, mobile, cloud)
- `/work` — Case studies/projects
- `/work/[slug]` — Case study detail
- `/about` — Mission, team, approach
- `/blog` — Articles (optional for MVP)
- `/blog/[slug]` — Post detail
- `/contact` — Contact/Consult form
- `/privacy` — Privacy policy
- `/terms` — Terms of service
- `/sitemap.xml`, `/robots.txt`, `/.well-known/security.txt`

---

## 5) Page briefs (copy & sections)

### Home (`/`)

**Goal:** Communicate value fast and drive to Contact.
**Hero:**

- H1: _Build peak‑quality software. Launch like a new star._
- Subcopy: _Apex Nova Labs designs, builds, and scales web & mobile products for ambitious teams._
- Primary CTA: **Request a consult** → `/contact`
- Secondary CTA: **See our work** → `/work`

**Sections:**

1. **Value pillars** (Quality • Velocity • Reliability)
2. **Services grid** (cards link to `/services/[slug]`)
3. **Selected work** (3 highlights → case studies)
4. **Approach** (Discovery → Delivery → Growth)
5. **Logos/Trust** (clients/partners, optional)
6. **Final CTA** (contact)

### Services (`/services` & `/services/[slug]`)

List core offers (examples; adjust):

- Web apps (Next.js, React)
- Mobile apps (Flutter)
- Backends & APIs (Node/Nest, Spring)
- Cloud & DevOps (Docker, CI/CD)
- UI/UX & Design systems

Each service detail page should include: problem we solve, outcomes, process, stack, example work, FAQ, and CTA.

### Work (`/work` & `/work/[slug]`)

- Grid of case studies with filters (industry, platform).
- Detail page: challenge → solution → result → stack → testimonials → CTA.

### About (`/about`)

- Mission/values, team photos/bios, how we work, socials.

### Contact (`/contact`)

- Short form (name, email, company, budget range, message).
- Add anti‑spam, success page/inline message, and email receipts.

---

## 6) Components to build

- `Section`/`Container` layout primitives
- `Navbar` (sticky, scroll state), `Footer`
- `ThemeToggle` (light/dark)
- `Hero`, `FeatureCard`, `ServiceCard`, `CaseStudyCard`
- `Testimonial`, `LogoCloud`, `Stats`
- `Markdown/MDX` components (Prose)
- `ContactForm` (server action), `Alert`/`Toast`
- `Breadcrumb`, `Pagination`, `Tag`/`Badge`
- `SEO` helpers (JSON‑LD, OpenGraph)

---

## 7) Design system (tokens)

**Brand direction:** clean, modern, “cosmic” accents.
**Palette (suggested):**

- `--brand: #6B5BFF` (indigo‑violet)
- `--brand-600: #5B4BE6`
- `--brand-700: #4B3CCC`
- `--accent: #00C2FF`
- `--bg: #0B0B12` (dark) / `#FFFFFF` (light)
- `--fg: #EDEDF2` (dark) / `#0A0A0F` (light)

**Typography:**

- Heading: _Inter_ or _Satoshi_; Body: _Inter_; Mono: _Geist Mono_

**Motion:** Subtle parallax/constellation dots on hero (prefers‑reduced‑motion safe).

> All colors via CSS custom properties; expose to Tailwind theme for light/dark.

---

## 8) Content model (TypeScript)

```ts
// content/types.ts
export type Service = {
  slug: string;
  title: string;
  summary: string;
  benefits: string[]; // bullet points
  process: string[]; // steps
  icon?: string; // lucide icon name
};

export type CaseStudy = {
  slug: string;
  title: string;
  client?: string;
  industry?: string;
  challenge: string;
  solution: string;
  results?: { label: string; value: string }[]; // e.g., +42% conversion
  stack?: string[];
  coverImage?: string; // /public/work/slug.jpg
  year?: number;
};

export type Testimonial = {
  author: string;
  role?: string;
  company?: string;
  quote: string;
  avatar?: string;
};
```

---

## 9) SEO & metadata

- Dynamic metadata with `app/**/page.tsx` `generateMetadata()`.
- Title template: `"%s | Apex Nova Labs"` (Home: just brand).
- Canonical URLs via `metadataBase` and `alternates.canonical`.
- `robots.txt`, `sitemap.xml` via `next-sitemap` or manual route handlers.
- Social cards: automatic OG image per page with `next/og`.
- JSON‑LD: `Organization`, `WebSite`, `BreadcrumbList`, `Article` for blog, `Product/Service` for service pages.
- Keywords (example): software development, web apps, mobile apps, Next.js, Flutter, Sri Lanka software company (adjust to target market).

**Example `app/robots.ts`**

```ts
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${process.env.NEXT_PUBLIC_SITE_URL}/sitemap.xml`,
  };
}
```

---

## 10) Accessibility & performance

**a11y checklist**

- Color contrast AA+; keyboard focus outlines; skip‑to‑content link.
- Proper landmarks, headings order, alt text, form labels & errors.
- Prefers‑reduced‑motion support; no content flashing.

**Perf budget**

- ≤ 150KB JS on first load (gz).
- All images optimized; use `next/image`; lazy+priority where appropriate.
- Avoid client components unless needed; prefer server components.

---

## 11) Forms & email

- Use Next.js **Server Actions** and a minimal email provider.
- Anti‑spam: hidden honeypot + server‑side validation + basic rate‑limit.
- Store no PII beyond the email; if needed, encrypt at rest.

**ENV**

```
NEXT_PUBLIC_SITE_URL=https://www.example.com
RESEND_API_KEY=
CONTACT_TO_EMAIL=hello@apexnovalabs.com
GA_MEASUREMENT_ID=
PLAUSIBLE_DOMAIN=
```

---

## 12) Analytics & events

- Choose **Plausible** (recommended) or **GA4** (fallback).
- Track: `contact_submit`, `cta_click`, `case_view`, `service_view`.

---

## 13) Project structure (proposed)

```
app/
  (marketing)/
    page.tsx            # Home
    services/
      page.tsx
      [slug]/page.tsx
    work/
      page.tsx
      [slug]/page.tsx
    about/page.tsx
    contact/page.tsx
    privacy/page.tsx
    terms/page.tsx
  api/
    contact/route.ts    # POST email/send
components/
  ui/                   # shadcn/ui wrappers
  layout/
  cards/
  forms/
lib/
  seo.ts
  analytics.ts
  mail.ts
content/
  services/*.mdx
  work/*.mdx
  blog/*.mdx           # optional
public/
  og/
  images/
styles/
  globals.css
  tailwind.css
```

---

## 14) Commands & tooling

**Node:** 20.x
**Pkg manager:** pnpm (preferred) or npm

```bash
pnpm dlx create-next-app@latest apex-nova-labs --ts --app --eslint --tailwind --src-dir=false --import-alias "@/*"

pnpm dev
pnpm build
pnpm start
pnpm lint
pnpm format
```

**Tailwind config:** add CSS variables for brand tokens; plugin for typography.

---

## 15) CI/CD

- Vercel: PR = Preview URL with checks (lint, typecheck, build).
- Protect main branch; squash & merge; conventional commits.

**PR checklist**

- [ ] Pages render and match briefs
- [ ] a11y checks pass (axe/lighthouse)
- [ ] CLS < 0.1 on hero
- [ ] All links/CTAs tracked
- [ ] Meta & OG set
- [ ] No large regressions in bundle size

---

## 16) Definition of Done (per page)

- Clear primary CTA; no dead ends.
- Copy proofread; tone matches brand.
- Mobile‑first responsive; test on 360px width.
- a11y & perf budgets met.
- SEO: title/description, canonical, OG/Twitter, JSON‑LD.
- Images optimized; alt text complete.
- Analytics events wired.

---

## 17) Starter copy blocks (edit freely)

**Tagline options**

- _Build at the peak. Launch like a nova._
- _Peak‑quality software. Stellar outcomes._

**CTA copy**

- _Request a consult_
- _Tell us about your project_
- _See our work_

**About snippet**

> Apex Nova Labs is a software studio focused on reliable engineering and clean, modern design. We partner with teams to deliver web and mobile products that scale.

---

## 18) Legal & privacy (placeholders)

- We collect only the data you submit via the contact form.
- No third‑party ad pixels.
- Data processed for the sole purpose of responding to inquiries.
- Update Privacy/Terms with counsel before launch.

---

## 19) Roadmap (post‑MVP)

- Blog & newsletter (MDX + RSS).
- Case‑study generator template.
- Careers page + simple application form.
- i18n (English first; add locales later).
- CMS (if content editors required): Sanity, Contentful, or Payload.

---

## 20) Ownership & contacts (fill in)

- Brand/Copy: <owner>@apexnovalabs.com
- Web: <owner>@apexnovalabs.com
- Security: [security@apexnovalabs.com](mailto:security@apexnovalabs.com)
