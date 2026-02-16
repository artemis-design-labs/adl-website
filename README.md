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
