# ADL Website Content

Live copy reference — mirrors what's actually rendered in production.

Last synced **2026-07-25** against `main @ 12077e9`. For component implementations see `src/components/organisms/`; for the design system map see `CLAUDE.md`; for chronology see `CHANGELOG.md`.

**Positioning:** ADL builds and operates **governed UI infrastructure** for enterprise B2B startups. Two engagement tracks — **Build Track** (fixed scope, one-time) and **Operate Track** (monthly retainer). Dollar figures are deliberately absent from the site; engagements are scoped after a discovery call.

**Live pages:** `/` · `/services` · `/work` · `/contact` · `/hands-ai` · `/publication` (noindex). Everything else (`/about`, `/pricing`, `/our-ai`, `/clients`, `/blog`, `/insight`, `/marketplace`, `/design-system-license`, `/my-project-inbox`) lives in `src/app/_archived/` and does not route — copy for those is **not** tracked here anymore.

**Public contact email:** `pritish@artemisdesignlabs.com`. **Blog** is external: `medium.com/ai-ui`.

---

## Homepage — `src/app/(site)/page.tsx`

Order: Hero → Clients → Services → StatBar → OperationalMoat → Testimonials → CTA.

### 1. Hero — `organisms/Hero`

**Eyebrow:** AI DESIGN INFRASTRUCTURE · B2B SOFTWARE TEAMS

**Headline:**
> The UI infrastructure
> your product team
> is missing.

**Body:** Most fast-growing teams have designers, engineers, and a roadmap — but no single owner for the layer connecting them. ADL builds that layer and keeps it governed, so your product scales without the UI debt that compounds every sprint.

**CTAs:** Book a free audit (accent fill → `/contact?type=audit`) · About us → (outline → `#clients`)

**Capabilities panel** (right rail, `› Capabilities`):
- Design Language Architecture
- Figma-to-Code Pipeline
- Agentic UI Generation
- Drift Detection & Governance
- Infrastructure Lifecycle Management

### 2. Clients — `organisms/ClientsSection`

Logo grid (4-col desktop, auto-advancing carousel on mobile), theme-aware SVG per client. No headline. Screen-reader list carries the names:

AT&T · Verizon · NBCUniversal · NYCERS · Qualitrol · CMA Global · NYC DOE · Freshop

### 3. Services — `organisms/ServicesSection`

**Eyebrow:** › What We Do

**Headline:** One Single Ecosystem designed to scale / with your product and team.

**Body:** Most infrastructure work fixes one layer at a time. ADL architects every layer as a unified system — so design decisions, code, and documentation compound together instead of drifting apart.

| Capability | Description |
|---|---|
| Design Language Architecture | The token-based foundation that gives every design decision a single source of truth across your entire product. |
| Figma-to-Code Pipeline | Automated sync between design intent and production code, eliminating the translation layer that costs engineering teams hours every sprint. |
| Agentic UI Generation | AI-powered pipelines that produce production-ready UI at the speed your roadmap demands, without the manual overhead. |
| Drift Detection & Governance | Continuous monitoring that catches inconsistencies before they compound, keeping every layer aligned as your team scales. |
| Infrastructure Lifecycle Management | Ongoing evolution of the system as your product, team, and stack grow — so the infrastructure never becomes the constraint. |

### 4. Stat bar — `organisms/StatBarSection`

- **5 states** — Per component
- **0** — Figma-only deliverables
- **WCAG 2.1 AA** — Accessibility baseline

All three describe ADL's own delivery standard and are backed by the Build Track deliverables listed on `/services`. `190K+ AI training images` was **removed on 2026-07-25** — no citable source.

### 5. Operational moat — `organisms/OperationalMoatSection`

**Headline:** Your product can only scale as far as your UI infrastructure lets it.

**Body:** Most agencies hand off a Figma file and leave your team to figure out the rest. ADL builds the layer that makes everything else move faster — the architecture, the automation, the guardrails — so your team ships consistent UI without a growing design ops headcount. Every engagement starts with systems, not screens.

### 6. Testimonials — `organisms/TestimonialsSection`

**Headline:** What Our Clients Say

| Quote | Attribution |
|---|---|
| "We'd burned $40K on an agency that delivered Figma files our engineers couldn't use. ADL delivered Figma and production-ready React — and the code actually passed review the first time. I didn't know that was possible at this stage." | CTO & Co-founder, Series A Healthcare SaaS |
| "We lost an enterprise deal because the buyer flagged UI inconsistency in the demo. After ADL built our governance system, we closed the same deal. That's the only number that matters." | CEO & Co-founder, Seed-Stage B2B SaaS |
| "Nobody on our team owned UI infrastructure — everyone built inconsistently and the debt was invisible until it wasn't. ADL built the governance layer and ran it for us. New engineers ship their first feature significantly faster now." | VP of Engineering, Series A Analytics Platform |

> ⚠️ All three are **anonymous** — de-anonymizing them is the top open trust gap.

### 7. CTA — `organisms/CTASection`

**Headline:** Ready to build your / UI infrastructure?

**Actions:** Book a free audit → `/contact?type=audit` · `pritish@artemisdesignlabs.com`

Reused at the bottom of `/services`, `/work`, `/hands-ai` and `/publication`; takes `background="primary" | "elevated"` to continue each page's section alternation.

---

## `/services` — `src/app/(site)/services/page.tsx`

**Meta title:** Services
**Meta description:** Two engagement tracks. One mission: UI infrastructure that ships, scales, and stays governed. Build Track, Operate Track, Agentic Ecosystem, and UI Forge.

**Hero eyebrow:** Services
**Hero headline:** Build the infrastructure. / Then run it.
**Hero body:** ADL builds and operates governed UI infrastructure for enterprise B2B startups. Fixed-scope engagements, agentic automation, and ongoing governance — designed to scale from 5 to 500 engineers without rebuilding.
**CTAs:** Book a free audit · View services

### Two tracks — "Two ways to engage. One standard of output."

**01 · Build Track** — *Your foundation for governed, scalable UI.*
For teams that want to own their UI infrastructure but need the expertise to build it right. ADL audits what's broken, designs a custom governance system around your stack, and delivers an operational capability your team can run — not a Figma file that becomes tomorrow's debt.
- **Infrastructure Foundation** — a custom governance system built around your stack, giving your team a single source of truth between design and code from day one.
- **Automated Design-to-Code** — an AI-powered pipeline that converts Figma to production-ready React, eliminating the translation work that burns engineering cycles every sprint.
- **Drift Prevention Architecture** — governance rules and detection baselines built into the system before handoff, so consistency is enforced structurally, not manually.
- **Team Ownership by Design** — your team is embedded throughout the build so when ADL hands off, you run a system you understand, not a dependency you manage.

**02 · Operate Track** — *We run your UI infrastructure. You ship product.*
For teams that want UI infrastructure to work without dedicating internal headcount to it. ADL runs the entire operation — powered by a coordinated system of AI agents — so your engineers stay focused on product while the foundation stays governed underneath them.
- **Always-On Infrastructure Management** — a coordinated system of AI agents that keeps your UI layer stable, consistent, and evolving.
- **Continuous Design-Code Alignment** — bidirectional sync that catches drift before it compounds.
- **Autonomous Component Delivery** — production-ready components generated and governed on a monthly cadence.
- **Operational Visibility** — monthly health reports showing what was maintained, what was added, and the velocity impact.

### Process — "From audit to governed infrastructure."

Every engagement follows the same sequence — not because it's templated, but because the order matters. Each phase builds on the last, so the system you receive is coherent from the token layer up, not assembled from independent decisions made in isolation.

| # | Step | Description |
|---|---|---|
| 01 | UI Audit | We identify where your UI is drifting, where ownership is missing, and what needs to be built. |
| 02 | System Architecture | We design a governance system around your stack — the foundation every component is built on. |
| 03 | AI-Assisted Build | Our agents convert design intent into production-ready code, consistently, across every component. |
| 04 | Governance Layer | Drift detection and enforcement are embedded before delivery — consistency is structural, not manual. |
| 05 | Handoff or Operate | Your team takes ownership, or ADL keeps running it. The infrastructure doesn't stop at delivery. |

**What changes after:**
- Engineering ships UI without rebuilding the same patterns every sprint
- Design and code share a single source of truth — drift is caught before it ships
- New engineers contribute from day one, without weeks of codebase archaeology
- Every component covers every interaction state — QA cycles shrink
- The system scales with your product without rebuilding when your team doubles
- Governance is structural — not dependent on whoever remembered to check

### Engagement — "Scoped to your situation."

Every engagement is scoped after a discovery call. Pricing is determined by the complexity and scale of your infrastructure needs.

| Build Track — *Fixed Scope · One-Time* | Operate Track — *Monthly Retainer · Ongoing* (featured) |
|---|---|
| Component library: Figma + production React | Ongoing component delivery: Figma + React |
| Token architecture tailored to your stack | Agentic drift detection + alerts |
| Full interaction state coverage | Figma ↔ React continuous sync |
| AI-powered Figma → React pipeline | Autonomous governance enforcement |
| Storybook documentation | Monthly infrastructure health reports |
| WCAG 2.1 AA accessibility | Office hours included |
| Post-delivery support included | Priority response SLA |

Both cards CTA "Get started →" to `/contact?type=build-track` / `?type=operate-track`.

**Footnote:** Not sure which track fits? Start with a free 30-minute audit — we'll scope the right engagement after we understand your situation. **Book an audit →**

---

## `/work` — `src/app/(site)/work/page.tsx`

**Meta description:** Selected projects from Artemis Design Labs — UI infrastructure, design systems, and AI-powered platforms shipped for enterprise teams.

**Eyebrow:** › Selected Work
**Headline:** Work that ships / and stays shipped.
**Filter pills** (decorative — not wired to filtering): All · Public Sector · Healthcare · Education · Enterprise

| Client | Title | Stats |
|---|---|---|
| AT&T | AT&T Cloud Optimizer — Enterprise Data Design System | 1,800+ applications · $36.7M cloud spend surfaced |
| HANDS AI | HANDS AI — AI-Powered Case Management Design System | 40% faster case prep · 6 departments deployed |
| Insight AI | Insight — Data Intelligence Design System for NYC DOE | 1,800+ NYC schools served · 4 data domains unified |
| Verizon | My Project Inbox — Enterprise Coordination Design System | 60+ projects unified · 3 tool categories replaced |

Every card renders a **placeholder image** (`ImagePlaceholder` icon), and none links to a case study — `/hands-ai` is the only detail page that exists, and it isn't linked from here.

---

## `/hands-ai` — `src/app/(site)/hands-ai/page.tsx`

**Meta title:** HANDS AI — WIC Case Management
**Meta description:** How ADL designed Emma — an AI assistant that tells WIC caseworkers which of their 250 families need help today, before they slip through the cracks.

Features: **01 Predictive Risk Queue** · **02 Natural Language Search** · **03 Supervisor Visibility**.

---

## `/contact` — `src/app/(site)/contact/page.tsx`

**Eyebrow:** › get in touch
**Headline:** Let's build the / *right infrastructure* / for what you're scaling.
**Body:** We've been on your side of this call. We know what you're looking for. No pitch deck, no pressure — just a real conversation about your design infrastructure.

**Book a call** (`#book-a-call`): "Grab a 30-minute slot." — Pick a time that works — no form required. Prefer to write first? Scroll down and send a message instead. Inline Calendly embed (`calendly.com/itadmin-artemisdesignlabs/30min`, themed to the palette).

**What to expect — "Three steps. Zero surprises."**
1. **Within 24h** — We review your message and respond to schedule.
2. **15-30 min call** — No pitch deck. We talk about what you're building and where it's stuck.
3. **Free audit, 48h** — You get an audit of your design-to-code workflow. Yours to keep either way.

**Form fields:** Name (required) · Company · Email (required) · "What are you interested in?" · "Tell us about your project" (required) + Cloudflare Turnstile.

**Service options** — these values double as the `?type=` deep-link keys used by CTAs elsewhere:
`audit` (Free design-to-code audit) · `build-track` (Build Track — fixed scope, one-time) · `operate-track` (Operate Track — monthly retainer) · `not-sure` (Not sure yet — let's talk)

**Audit banner** (shown for `?type=audit` only): **Free design-to-code audit.** Tell us about your current setup below — we'll send your audit within 48 hours, yours to keep either way.

---

## `/publication` — noindex

Placeholder article grid ("Online Publication") with six stub cards pointing at `#`. Ships `robots: { index: false, follow: false }` and is deliberately kept out of `sitemap.ts` until it has real content.

---

## Global

**Navigation:** Home · Services · Work · Blog (external → `medium.com/ai-ui`) · Contact · **Book a Call** → `/contact#book-a-call`

**Footer:** "Artemis Design Labs" / *UI Infrastructure · AI-Native · New York* — pages column (Services, Work, Blog↗, Contact) + social column (LinkedIn, GitHub, `pritish@artemisdesignlabs.com`) — © {year} Artemis Design Labs. All rights reserved.

**Site metadata** (`src/app/layout.tsx`) — the default for any page that doesn't set its own:
- **Title:** Artemis Design Labs | Governed UI Infrastructure for B2B Teams
- **Description:** ADL builds and operates the UI infrastructure your product team is missing — design language architecture, an automated Figma-to-React pipeline, and drift governance that keeps design and code in sync as you scale.

Per-page titles (via `metadata` on each page, or a passthrough `layout.tsx` where the page is a Client Component): Services · Work · Contact · HANDS AI — WIC Case Management. Canonicals are **self-referencing per route** (`alternates: { canonical: './' }`).

---

## Unsourced claims (open fact audit)

Owner directive is "no made-up numbers, 100% citable".

**Cleared 2026-07-25:** `190K+` training images is **off the site** — removed from the StatBar and from the `layout.tsx` metadata description. Claims that retired with the archived pages (`94%` first-PR approval, `6+ frameworks`, `100% code parity`, `$0 figma-only`) are no longer rendered anywhere.

**Still outstanding — these need the owner, not a code change:**

| Claim | Where | What's needed |
|---|---|---|
| `40%` faster case prep (HANDS AI) | `/work` | The measurement source. Left in place deliberately: these read as **real client outcomes**, and deleting genuine proof would cost more than it protects. Confirm or correct each. |
| `1,800+` applications · `$36.7M` (AT&T) | `/work` | ⇡ same |
| `1,800+` schools · `4` domains (Insight) | `/work` | ⇡ same |
| `60+` projects · `3` categories (Verizon) | `/work` | ⇡ same |
| Anonymous testimonials ×3 | Homepage | **Not a permission problem** — the owner confirmed (2026-06-17) all three quotes are real and attributable, and decided on real company names, text-only (no photos). The only thing missing is **Name — Title — Company** for each (+ optional LinkedIn URL to link the name). Supply those three lines and it's a 5-minute change to the `TESTIMONIALS` array. Top trust gap on the site. |
