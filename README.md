# ADL Website

Artemis Design Labs marketing website built with Next.js.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## Site Structure

```
├── Homepage (/)
├── About (/about)
├── Products & Services (/services)
├── Our AI (/our-ai)
├── Work (/work)
├── Pricing (/pricing) - Hidden from nav
└── Contact (/contact)
```

---

## Global Components

### Navigation
- **Logo:** Artemis Design Labs
- **Links:** About, Products & Services, Our AI, Work
- **CTA Button:** Contact
- **Theme Toggle:** Dark/Light mode switch

### Footer
- **Tagline:** Design systems that ship. We deliver Figma AND production-ready React for B2B startups scaling from Seed to Series C.
- **Status:** Available for new projects
- **Services Links:** Design System Creation, Design System Maintenance, Design-to-Code Handoff
- **Company Links:** About, Work, Pricing, Contact
- **Email:** hello@artemisdesignlabs.com

---

## Page Content

### Homepage (/)

#### Hero
- **Eyebrow:** AI-Powered Design Infrastructure
- **Headline:** From Bootstrapped to Unicorn / We Grow with You.
- **Subheadline:** We combine human expertise with AI-powered delivery to solve design-to-development friction permanently.
- **Primary CTA:** About Us
- **Secondary CTA:** Get a Free Audit
- **Trust Indicator:** Trusted by product teams at Series A-C startups

#### Problem Section
- **Eyebrow:** From Inconvenience to Emergency
- **Headline:** You don't need more Designers / You need better Infrastructure
- **Description:** Design-dev friction follows your growth curve—except it compounds faster. We've mapped the patterns across hundreds of startups and built the infrastructure to break the cycle.

**Pain Points:**
1. Your engineers are translating Figma files instead of shipping features.
2. Enterprise buyers are noticing what you've learned to ignore.
3. Design debt compounds faster than your runway shrinks.
4. Traditional agencies aren't built to scale with you.
5. A design system nobody uses is worse than no design system at all.

#### How It Works Section
- **Eyebrow:** The Process
- **Headline:** How We Work

**Steps:**
1. **Discovery** - We audit your current setup and identify gaps
2. **Build** - Our AI-powered tools accelerate component development
3. **Integrate** - We deliver production-ready code that passes review

#### Our AI Preview Section
- **Eyebrow:** Our Technology
- **Headline:** AI-Powered, Human-Guided

**Features:**
- 190K+ training images powering our models
- 3-4 weeks delivery (not 3-4 months)
- 5 states per component (loading, error, empty, partial, permission-denied)

#### Social Proof Section

**Metrics:**
| Value | Label | Description |
|-------|-------|-------------|
| 40% | Faster design-to-code | Average velocity improvement |
| 25+ | Components per system | Production-ready with full states |
| 2x | Faster onboarding | New engineers ship on day one |
| 100% | Code coverage | Every design ships with React |

**Testimonials:**
> "ADL transformed how our team ships UI. We went from weeks of back-and-forth to same-day implementation."
> — Engineering Lead, Series B Healthcare Startup

> "Before ADL, every new engineer spent their first two weeks figuring out our component mess. Now they're shipping features on day one."
> — VP of Engineering, Series A Fintech

#### CTA Section
- **Headline:** Ready to stop debugging handoffs?
- **Description:** Let's have a conversation about what you're building. No pitch deck. No pressure.
- **Primary CTA:** Book a Conversation
- **Secondary CTA:** UI Forge Waitlist

---

### About (/about)

#### Hero
- **Eyebrow:** About Us
- **Headline:** Design systems exist to make developers faster.
- **Description:** Not just designers happier. That's the philosophy behind everything we build.

#### Origin Story
- **Eyebrow:** The Origin Story
- **Headline:** Why we exist

Artemis Design Labs started because we kept seeing the same problem: design agencies delivering beautiful Figma files that gathered dust because no one could translate them to code.

**We asked: what if we delivered both?**

What if every Figma component came with a production-ready React component—TypeScript, Tailwind, 5 states, accessibility baked in?

#### Operating Principles
- **Eyebrow:** How We Work
- **Headline:** Operating principles

1. **Ship Code, Not Just Designs** - Designs that don't ship aren't designs—they're wishes.
2. **B2B-Native** - We specialize in enterprise complexity: data tables, permissions, compliance.
3. **Engineering Empathy** - Design systems exist to make developers faster.
4. **Eat Our Own Cooking** - Our internal tools power our service delivery.
5. **Productize Everything** - Systematization is how we deliver quality at speed.

#### Why B2B
- **Eyebrow:** Our Focus
- **Headline:** Why we specialize in B2B

**B2B Design Challenges We Solve:**
- Complex data interfaces (tables with 50+ columns)
- Multi-role UIs (admin vs. user vs. viewer)
- Compliance requirements (WCAG, SOC2, HIPAA)
- Power-user features (bulk actions, keyboard shortcuts)
- Permission-based UI states
- Enterprise-grade performance (10K+ rows)

#### Values
- **Eyebrow:** Our Beliefs
- **Headline:** What we stand for

1. Design without code is just a picture.
2. Speed and quality aren't trade-offs.
3. Transparency builds trust.
4. The best partnership is one where you don't need us.

---

### Products & Services (/services)

#### Hero
- **Eyebrow:** Products & Services
- **Headline:** Three Ways to Eliminate Design-Dev Friction
- **Description:** Every engagement is scoped, priced, and delivered on a fixed timeline. No hourly billing. No scope creep. No surprises.

#### Service A: Design System Creation
- **Price:** $15,000 - $25,000
- **Timeline:** 3-4 weeks
- **Tagline:** From chaos to foundation

**What You Get:**
- 25+ core Figma components with variants
- React/TypeScript component library
- Design tokens + dark mode support
- Storybook documentation
- WCAG 2.1 AA accessibility
- 30-day post-delivery support

**Best For:** Startups with no design system or fragmented components

**Guarantee:** Developers ship 2x faster within 30 days or extended support free

#### Service B: Design System Maintenance
- **Price:** $4,000 - $6,000/month
- **Timeline:** 6-month minimum
- **Tagline:** Keep it alive, keep it aligned

**What You Get:**
- Up to 5 new components per month
- Monthly Figma ↔ React sync audits
- Continuous documentation updates
- 2-4 hours monthly office hours
- Quarterly health assessments
- Same-week turnaround on critical requests

**Best For:** Companies with existing systems experiencing drift

**Guarantee:** Same-week turnaround on critical component requests

#### Service C: Design-to-Code Handoff
- **Price:** $8,000 - $15,000
- **Timeline:** 2-3 weeks
- **Tagline:** Your designs, shipped

**What You Get:**
- Production-ready React components
- Full state coverage (loading, error, empty, partial, permission-denied)
- Virtualization for large datasets (10K+ rows)
- WCAG 2.1 AA accessibility
- API integration patterns
- Performance benchmarks

**Best For:** Teams with Figma ready but struggling with implementation

**Guarantee:** 100% design fidelity or we revise until it matches

---

### Our AI (/our-ai)

#### Hero
- **Eyebrow:** Our AI
- **Headline:** We Didn't Bolt AI Onto an Existing Workflow. We Built From Scratch.
- **Description:** Proprietary tools trained on 190,000+ labeled examples from real production codebases.

#### Human vs AI Roles
- **Eyebrow:** The Partnership
- **Headline:** Human Expertise Meets AI Precision

| Humans Handle | AI Handles |
|---------------|------------|
| Understanding your product vision | Converting design files to code |
| Strategic architecture decisions | Generating consistent implementations |
| Quality review and edge cases | Handling repetitive patterns |
| Team training and governance | Documentation generation |
| Adapting to unique constraints | State coverage automation |

#### Technology
- **Eyebrow:** The Technology
- **Headline:** Trained on Production, Not Tutorials

| Stat | Label | Description |
|------|-------|-------------|
| 190,000+ | Training images | Powering our proprietary AI models |
| Every Project | Continuous learning | AI improves with every engagement |
| 6+ | Frameworks | React, Vue, Angular, Svelte, and more |
| 94% | First-PR approval | Code that passes review |

#### Comparison Table
- **Eyebrow:** The Difference
- **Headline:** Traditional Agencies vs. ADL

| Feature | Traditional Agency | ADL |
|---------|-------------------|-----|
| Design-to-code accuracy | Manual translation | AI-assisted precision |
| Delivery timeline | 3-4 months | 3-4 weeks |
| State coverage | Happy path only | All 5 states included |
| Documentation | Separate deliverable | Auto-generated with code |
| Consistency | Varies by developer | AI-enforced standards |
| Maintenance | Manual updates | AI-powered drift detection |
| Accessibility | Often an afterthought | Baked in from day one |

---

### Work (/work)

#### Hero
- **Eyebrow:** Our Work
- **Headline:** Transformations, Not Just Deliverables
- **Description:** Every project starts with a problem and ends with measurable impact.

#### Metrics
| Value | Label | Project |
|-------|-------|---------|
| 40% | Faster case processing | HANDS AI |
| 60% | Decision time reduction | Insight |
| 94% | First-PR approval rate | Average |
| 3-4 | Weeks to delivery | Average |

#### Case Studies

**HANDS AI**
- **Client:** Public Healthcare
- **Tags:** AI, Case Management, Healthcare
- **Description:** A WIC case management platform powered by a custom AI agent.
- **Metric:** 40% Faster case processing

**Insight**
- **Client:** Department of Education
- **Tags:** AI, Education, Data Visualization
- **Description:** A school data platform for DOE officials using predictive AI.
- **Metric:** 60% Decision time reduction

**My Project Inbox**
- **Client:** Enterprise Engineering
- **Tags:** Project Management, Enterprise
- **Description:** A project management platform for internal engineering teams.
- **Metric:** 25% Team velocity increase

---

### Pricing (/pricing)

#### Hero
- **Eyebrow:** Pricing
- **Headline:** Transparent Pricing. No Surprises.
- **Description:** Fixed pricing based on scope. Every engagement includes production-ready React components—not just Figma files.

#### Competitive Comparison
| Option | Price | What You Get |
|--------|-------|--------------|
| Premium Agency (Clay, Ramotion) | $50K+ | Figma only. No code. No states. |
| Budget Shop | $10-15K | Figma only. You fix the inconsistencies. |
| Figma-to-Code Tools | $0-500/mo | 80% solution. Requires dev cleanup. |
| In-House Designer | $120K+/year | One person. No code expertise. |
| **Artemis Design Labs** | **$15-25K** | **Figma + React + 5 states + virtualization + docs** |

#### FAQ

**Why not hire in-house?**
A full-time designer costs $120K+/year and can't write React. We deliver a complete system in 3-4 weeks.

**What determines where I fall in the price range?**
Component count and complexity. We scope precisely after our discovery call.

**Do you offer discounts?**
We don't discount, but we offer flexible payment terms for multi-month engagements.

**What's included in the 30-day support?**
Bug fixes, minor adjustments, and implementation questions. Major features scoped separately.

---

### Contact (/contact)

#### Hero
- **Eyebrow:** Contact
- **Headline:** Let's Talk About Your Design System
- **Description:** Whether you need a design system from scratch, help maintaining an existing one, or want to convert Figma to code—we're here to help.

#### Booking Calendar
Schedule a 15-30 minute discovery call. No pitch deck, no pressure.

#### Free Audit Form
**Fields:**
- Name (required)
- Company
- Email (required)
- Service interest (dropdown)
- Project description (required)

**What happens next:**
1. We review your request within 24 hours
2. Schedule a 15-30 minute discovery call
3. Receive a custom proposal within 48 hours

#### UI Forge Waitlist
Get early access to UI Forge—our AI-powered design-to-code platform.

---

## Brand Voice

### Tone
- Founder-to-founder, not vendor-to-client
- Direct, no corporate fluff
- Acknowledge real startup pressures (runway, velocity, enterprise deals)

### Key Phrases
- "Human Expertise with AI Velocity"
- "Enterprise-grade output at startup speed"
- "Design systems that ship"
- "We grow with you"

### Emphasis
- AI-powered delivery and tools
- Speed without sacrificing quality
- Infrastructure, not just deliverables
- Partnership model, not agency model

---

## Content Statistics

| Page | Sections |
|------|----------|
| Homepage | 6 |
| About | 5 |
| Services | 4 |
| Our AI | 4 |
| Work | 3 |
| Pricing | 4 |
| Contact | 4 |
| **Total** | **30** |

---

## Website Text Content (For SEO Optimization)

### Homepage

AI-Powered Design Infrastructure

From Bootstrapped to Unicorn. We Grow with You.

We combine human expertise with AI-powered delivery to solve design-to-development friction permanently.

Trusted by product teams at Series A-C startups

From Inconvenience to Emergency

You don't need more Designers. You need better Infrastructure.

Design-dev friction follows your growth curve—except it compounds faster. We've mapped the patterns across hundreds of startups and built the infrastructure to break the cycle.

Your engineers are translating Figma files instead of shipping features. Every hour spent decoding design specs is an hour not spent on your product. At 10 engineers, that's 350+ hours per quarter lost to translation. At 50 engineers, the math gets ugly.

Enterprise buyers are noticing what you've learned to ignore. The missing loading state. The inconsistent spacing. The table that freezes at 500 rows. At Seed, these are TODO comments. By Series B, they're the reason your enterprise deal just went dark.

Design debt compounds faster than your runway shrinks. "We'll fix it later" becomes six months of engineers afraid to touch the UI. Then it becomes a rewrite. Then it becomes a reason your Series B takes longer than it should.

Traditional agencies aren't built to scale with you. They deliver Figma files at $50K+ and disappear. Your engineers rebuild everything anyway. The cycle repeats every time you need to move fast—and startups always need to move fast.

A design system nobody uses is worse than no design system at all. Documentation nobody reads. Components nobody trusts. Now your team builds around the system instead of with it—and you're paying for maintenance on infrastructure that creates more friction than it solves.

How We Work

Discovery. We audit your current setup and identify gaps.

Build. Our AI-powered tools accelerate component development.

Integrate. We deliver production-ready code that passes review.

AI-Powered, Human-Guided

190K+ training images powering our models. 3-4 weeks delivery, not 3-4 months. 5 states per component: loading, error, empty, partial, permission-denied.

40% faster design-to-code. Average velocity improvement. 25+ components per system. Production-ready with full states. 2x faster onboarding. New engineers ship on day one. 100% code coverage. Every design ships with React.

ADL transformed how our team ships UI. We went from weeks of back-and-forth to same-day implementation. The design system they built is actually used by everyone—not just sitting in a Figma file. Engineering Lead, Series B Healthcare Startup.

Before ADL, every new engineer spent their first two weeks figuring out our component mess. Now they're shipping features on day one. That's not an exaggeration. VP of Engineering, Series A Fintech.

Ready to stop debugging handoffs? Let's have a conversation about what you're building. No pitch deck. No pressure. Just a real talk about your design challenges.

### About

Design systems exist to make developers faster. Not just designers happier. That's the philosophy behind everything we build.

Why we exist. Artemis Design Labs started because we kept seeing the same problem: design agencies delivering beautiful Figma files that gathered dust because no one could translate them to code. The design would be perfect. The style guide comprehensive. The handoff immaculate. And then nothing. Engineers would look at the Figma file, scratch their heads, and rebuild everything from scratch anyway.

We asked: what if we delivered both? What if every Figma component came with a production-ready React component—TypeScript, Tailwind, 5 states, accessibility baked in? What if the handoff wasn't a handoff at all, but a delivery of working code that passes code review on the first submission? That's Artemis Design Labs. Design systems that actually ship.

Ship Code, Not Just Designs. Every Figma file has a corresponding React component. Designs that don't ship aren't designs—they're wishes.

B2B-Native. We specialize in enterprise complexity: data tables with 50+ columns, multi-role permissions, compliance patterns, power-user features.

Engineering Empathy. Design systems exist to make developers faster, not just designers happier. Every decision optimizes for engineering velocity.

Eat Our Own Cooking. Our internal tools power our service delivery. Every project we ship trains and improves our processes.

Productize Everything. Document processes, templatize deliverables, build once and reuse. Systematization is how we deliver quality at speed.

Why we specialize in B2B. B2B products have unique design challenges that generic design agencies don't understand. Consumer apps are about delight. Enterprise apps are about efficiency, power, and trust. We've spent years in the trenches of enterprise software—dashboards, admin panels, data-heavy interfaces.

Complex data interfaces with tables with 50+ columns. Multi-role UIs for admin vs. user vs. viewer. Compliance requirements including WCAG, SOC2, HIPAA. Power-user features like bulk actions and keyboard shortcuts. Permission-based UI states. Enterprise-grade performance handling 10K+ rows.

Design without code is just a picture. The value of design is in what ships to users, not what sits in Figma.

Speed and quality aren't trade-offs. With the right systems, you can have both.

Transparency builds trust. Fixed pricing. Clear timelines. No surprises.

The best partnership is one where you don't need us. Our goal is to build systems your team can maintain and extend.

### Products & Services

Three Ways to Eliminate Design-Dev Friction. Every engagement is scoped, priced, and delivered on a fixed timeline. No hourly billing. No scope creep. No surprises.

Design System Creation. $15,000 - $25,000. 3-4 weeks. From chaos to foundation. You either don't have a design system, or you have fragments scattered across your product. We come in, audit the chaos, and build you a real foundation.

25+ production-ready components in Figma AND your framework. Design tokens that sync across your entire product. Full state coverage: loading, error, empty, partial, permission-denied. Documentation your engineers will actually read. Accessibility baked in from day one. Delivered in 3-4 weeks via AI-accelerated workflow.

Best for startups with no design system or fragmented components. Guarantee: Developers ship 2x faster within 30 days or extended support free.

Design System Maintenance. $4,000 - $6,000 per month. 6-month minimum. Keep it alive, keep it aligned. Design systems die without maintenance. Components drift. Documentation goes stale. We become your dedicated design systems team.

Up to 5 new components per month. AI-powered drift detection between Figma and code. Monthly health reports that prove ROI. Dedicated office hours for your team. Priority response for critical requests. Governance support that scales with you.

Best for companies with existing systems experiencing drift. Guarantee: Same-week turnaround on critical component requests.

Design-to-Code Handoff. $8,000 - $15,000. 2-3 weeks. Your designs, shipped. Your designs are sitting in Figma. Your engineering team doesn't have the frontend bandwidth. Our AI converts your existing designs into production-ready code.

Production-ready components built to your codebase standards. Full state coverage beyond the happy path. Performance optimization for enterprise-scale data. Comprehensive Storybook documentation. Code that passes review on the first PR. Delivered in weeks, not months.

Best for teams with Figma ready but struggling with implementation. Guarantee: 100% design fidelity or we revise until it matches.

### Our AI

We Didn't Bolt AI Onto an Existing Workflow. We Built From Scratch. Most AI-powered design tools generate code nobody wants to deploy. We built something different: proprietary tools trained on 190,000+ labeled examples from real production codebases.

Human Expertise Meets AI Precision. We don't replace human expertise with AI. We amplify it.

Humans handle understanding your product vision and business context, strategic decisions about component architecture, quality review and edge case identification, team training and governance setup, adapting to your unique constraints and requirements.

AI handles converting design files to production-ready code, generating consistent error-free implementations, handling repetitive patterns across your codebase, documentation generation and maintenance, state coverage for loading error empty and permission-denied.

Trained on Production, Not Tutorials. Our AI wasn't trained on open-source examples or tutorial code. It learned from real production systems at scale.

190,000+ training images powering our proprietary AI models. Continuous learning with every project. Framework agnostic supporting React, Vue, Angular, Svelte, and more. 94% first-PR approval rate because code passes review.

Traditional agencies use manual translation for design-to-code with 3-4 month delivery timelines, happy path only state coverage, documentation as separate deliverable, consistency that varies by developer, manual maintenance updates, and accessibility often as an afterthought.

Artemis Design Labs uses AI-assisted precision with 3-4 week delivery, all 5 states included, auto-generated documentation with code, AI-enforced standards for consistency, AI-powered drift detection for maintenance, and accessibility baked in from day one.

### Work

Transformations, Not Just Deliverables. Every project starts with a problem and ends with measurable impact. Here are some of the teams we've helped ship faster.

40% faster case processing with HANDS AI. 60% decision time reduction with Insight. 94% first-PR approval rate average. 3-4 weeks to delivery average.

HANDS AI. Public Healthcare. AI, Case Management, Healthcare. A WIC case management platform powered by a custom AI agent that helps caseworkers serve vulnerable populations faster and more effectively. 40% faster case processing.

Insight. Department of Education. AI, Education, Data Visualization. A school data platform designed for DOE officials to make fast, informed decisions using predictive AI and comprehensive data visualization. 60% decision time reduction.

My Project Inbox. Enterprise Engineering. Project Management, Enterprise. A project management platform that streamlines workflows for internal engineering teams, reducing context switching and improving delivery velocity. 25% team velocity increase.

### Pricing

Transparent Pricing. No Surprises. Fixed pricing based on scope. Every engagement includes production-ready React components—not just Figma files.

Premium agencies like Clay and Ramotion cost $50K+ and deliver Figma only with no code and no states. Budget shops cost $10-15K and deliver Figma only where you fix the inconsistencies. Figma-to-code tools cost $0-500 per month and deliver an 80% solution that requires dev cleanup. An in-house designer costs $120K+ per year and is one person with no code expertise. Artemis Design Labs costs $15-25K and delivers Figma plus React plus 5 states plus virtualization plus docs.

Why not hire in-house? A full-time designer costs $120K+ per year and can't write React. A full-time design systems engineer costs even more. We deliver a complete system in 3-4 weeks, then you can maintain it in-house or continue with us.

What determines where I fall in the price range? Component count and complexity. A dashboard with 20 basic components is at the lower end. A complex admin panel with data tables, permissions UI, and custom visualizations is at the higher end. We scope it precisely after our discovery call.

Do you offer discounts? Pricing is based on scope and the value delivered. We don't discount, but we do offer flexible payment terms for multi-month engagements.

What's included in the 30-day support? Bug fixes, minor adjustments, and questions about implementation. Major new features or components would be scoped separately or covered under a Maintenance retainer.

### Contact

Let's Talk About Your Design System. Whether you need a design system from scratch, help maintaining an existing one, or want to convert Figma to code—we're here to help.

Schedule a 15-30 minute discovery call. No pitch deck, no pressure—just a conversation about your product.

We review your request within 24 hours. Schedule a 15-30 minute discovery call. Receive a custom proposal within 48 hours.

Get early access to UI Forge—our AI-powered design-to-code platform. Join the waitlist to be the first to know when we launch.

### Footer

Design systems that ship. We deliver Figma AND production-ready React for B2B startups scaling from Seed to Series C. Available for new projects. hello@artemisdesignlabs.com
