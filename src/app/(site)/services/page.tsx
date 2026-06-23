import Link from 'next/link';
import type { Metadata } from 'next';
import { cn } from '@/lib/cn';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Two engagement tracks. One mission: UI infrastructure that ships, scales, and stays governed. Build Track, Operate Track, Agentic Ecosystem, and UI Forge.',
};

const SERVICES = [
  {
    num: '01',
    title: 'Build Track',
    tagline: 'From fragmented to governed in 3–4 weeks.',
    price: '$15K–$25K',
    priceNote: 'fixed scope',
    timeline: '3–4 weeks',
    description:
      'We audit your UI infrastructure, then build a custom AI-powered governance system — component architecture, drift detection, and a Figma-to-React pipeline your team owns after delivery. The first PR passes senior-engineer review on submission.',
    deliverables: [
      '25+ components in Figma AND your framework (React, Angular, Vue)',
      'Design tokens that sync across the entire product',
      'Full state coverage: loading · error · empty · partial · denied',
      'Storybook documentation built for engineers',
      'WCAG 2.1 AA accessibility baked in from day one',
      '30-day post-delivery support',
    ],
    bestFor: 'Founders with no design system, or fragments nobody trusts.',
    href: '/contact?type=build-track',
  },
  {
    num: '02',
    title: 'Operate Track',
    tagline: 'We run your UI infrastructure. You ship product.',
    price: '$4K–$15K',
    priceNote: '/ month',
    timeline: 'ongoing',
    description:
      'We take over and run your entire UI infrastructure operation. Drift monitoring, governed component delivery, governance enforcement, and monthly health reports. 500-person quality at 15-person startup pricing.',
    deliverables: [
      'Up to 5 new components/month — Figma + code together',
      'AI-powered drift detection between Figma and your codebase',
      'Monthly health reports your leadership team can read',
      'Office hours for your designers and engineers',
      'Governance support — scales from 5 to 500 people',
      'Priority response when something breaks before a demo',
    ],
    bestFor: 'Companies whose system is drifting or whose adoption is stalling.',
    href: '/contact?type=operate-track',
  },
  {
    num: '03',
    title: 'Agentic Ecosystem',
    tagline: '500-person quality. 15-person startup pricing.',
    price: 'Custom',
    priceNote: 'scoped per org',
    timeline: 'always on',
    description:
      'A master "UI Infrastructure Architect" agent coordinating specialized sub-agents that autonomously govern, maintain, and scale your frontend. Every component passes through automated drift detection, token validation, and governance enforcement before it reaches your codebase.',
    deliverables: [
      'Master UI Infrastructure Architect agent',
      'Automated drift detection and governance enforcement',
      'Token validation pipeline before code merge',
      'Figma ↔ React sync — bidirectional, continuous',
      'Monthly health reports with drift scores',
      'WCAG 2.1 AA automated checks',
    ],
    bestFor: 'Scale-stage teams that need autonomous governance without headcount.',
    href: '/contact?type=agentic',
  },
  {
    num: '04',
    title: 'UI Forge',
    tagline: 'Figma in. Production React out.',
    price: '$8K–$15K',
    priceNote: 'per engagement',
    timeline: '2–3 weeks',
    description:
      'Our internal AI engine converts Figma designs into production-ready React — all 5 interaction states, full token integration, governance review before output touches your codebase. PR-ready on the first submission.',
    deliverables: [
      'Production-ready components in TypeScript + Tailwind',
      'Full state coverage beyond the happy path',
      'Performance optimization — virtualization for 10K+ rows',
      'Storybook docs your team can onboard with immediately',
      'PR-ready: code that passes review on first submission',
      'Framework-agnostic: React, Angular, Vue — your call',
    ],
    bestFor: 'Teams with Figma ready but no frontend bandwidth to ship it.',
    href: '/contact?type=ui-forge',
  },
];

const PROCESS = [
  { num: '01', title: 'UI Audit', description: 'We map your component drift, token sprawl, and handoff gaps in 48 hours.' },
  { num: '02', title: 'System Architecture', description: 'Token hierarchy, component API, governance rules — designed for your stack.' },
  { num: '03', title: 'AI-Assisted Build', description: 'Our agents convert Figma to production React, state by state.' },
  { num: '04', title: 'Governance Layer', description: 'Drift detection, enforcement rules, and monthly health reports.' },
  { num: '05', title: 'Handoff or Operate', description: 'Your team takes ownership — or we keep running it under the Operate Track.' },
];

const COMPARISON = [
  { option: 'Premium Agency (Clay, Ramotion)', price: '$50K+',         delivery: 'Figma only. No code. No states.' },
  { option: 'Budget Shop',                     price: '$10–15K',       delivery: 'Figma only. You fix the inconsistencies.' },
  { option: 'Figma-to-Code Tools',             price: '$0–500/mo',     delivery: '70% solution. Your engineers fix the rest.' },
  { option: 'In-House Design Systems Engineer',price: '$180K+/year',   delivery: 'One person. Slower than a focused engagement.' },
  { option: 'Artemis Design Labs',             price: '$15–25K',       delivery: 'Figma + React + 5 states + virtualization + docs', highlight: true },
];

const FAQS = [
  {
    q: 'Why not hire in-house?',
    a: "A full-time designer is $120K+/year and usually can't write React. A full-time design-systems engineer is $180K+. We deliver a complete system in 3–4 weeks. After that, your team can maintain it in-house or roll into a maintenance retainer with us — your call.",
  },
  {
    q: 'What determines where I fall in the price range?',
    a: 'Component count, state complexity, integration requirements. A marketing dashboard with 20 components lands low. An admin panel with data tables, permissions UI, and custom visualizations lands high. We scope it precisely after the discovery call so the proposal you sign is the proposal you pay.',
  },
  {
    q: 'Do you offer discounts?',
    a: "Pricing is set against the scope and the velocity we save you. We don't discount the price, but we do offer flexible payment terms for multi-month engagements.",
  },
  {
    q: 'What if we need something not listed?',
    a: "We're flexible. If you need a one-off audit, a workshop for your team, accessibility remediation on an existing system, or integration support, let's talk. We'll scope something custom.",
  },
  {
    q: "What's included in the 30-day support?",
    a: 'Bug fixes, minor adjustments, implementation Q&A. Major new components or scope additions are quoted separately, or covered by a maintenance retainer.',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero — Interactivism full-width */}
      <section className="bg-[var(--color-bg-primary)] pt-28 md:pt-40 pb-0">
        <div className="max-w-[var(--container-max)] mx-auto px-6 lg:px-8">
          <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.14em] text-[var(--color-accent-text)] mb-7">
            UI INFRASTRUCTURE · TWO TRACKS. ONE MISSION.
          </p>
          <h1 className="text-[clamp(3rem,7vw,5.5rem)] font-bold leading-[1.0] tracking-[-0.04em] text-[var(--color-text-primary)] mb-10">
            Build the infrastructure.<br />
            <span className="text-[var(--color-accent-text)]">Then run it.</span>
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-20 items-start mb-10">
            <p className="text-[16px] text-[var(--color-text-secondary)] leading-[1.6] max-w-[560px]">
              ADL builds and operates governed UI infrastructure for enterprise B2B startups. Fixed-scope engagements,
              agentic automation, and ongoing governance — designed to scale from 5 to 500 engineers without rebuilding.
            </p>
            <div className="flex flex-row lg:flex-col gap-8 lg:gap-6 lg:text-right flex-shrink-0">
              <div>
                <div className="text-[clamp(1.5rem,2.5vw,2rem)] font-bold leading-none tracking-[-0.03em] text-[var(--color-text-primary)]">$15K</div>
                <div className="font-[var(--font-mono)] text-[11px] text-[var(--color-text-tertiary)] mt-1">Starting price</div>
              </div>
              <div>
                <div className="text-[clamp(1.5rem,2.5vw,2rem)] font-bold leading-none tracking-[-0.03em] text-[var(--color-text-primary)]">3–4 wks</div>
                <div className="font-[var(--font-mono)] text-[11px] text-[var(--color-text-tertiary)] mt-1">Delivery window</div>
              </div>
              <div>
                <div className="text-[clamp(1.5rem,2.5vw,2rem)] font-bold leading-none tracking-[-0.03em] text-[var(--color-text-primary)]">0</div>
                <div className="font-[var(--font-mono)] text-[11px] text-[var(--color-text-tertiary)] mt-1">Figma-only deliverables</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-start gap-3 pb-14 lg:pb-20">
            <Link
              href="/contact?type=audit"
              className={cn(
                'inline-flex items-center justify-center gap-2 h-[44px] px-7 rounded-[var(--radius-md)]',
                'bg-[var(--color-accent)] text-white font-bold text-[14px]',
                'hover:bg-[var(--color-accent-hover)] hover:shadow-[var(--shadow-glow)]',
                'active:brightness-90 transition-all duration-150',
              )}
            >
              Book a free audit
            </Link>
            <Link
              href="/pricing"
              className={cn(
                'inline-flex items-center justify-center gap-2 h-[44px] px-7 rounded-[var(--radius-md)]',
                'border border-[var(--color-border-strong)] text-[var(--color-text-secondary)] font-bold text-[14px]',
                'hover:border-[var(--color-accent)] hover:text-[var(--color-accent-text)]',
                'active:brightness-90 transition-all duration-150',
              )}
            >
              View full pricing →
            </Link>
          </div>
          <div className="border-t border-[var(--color-border)]" aria-hidden="true" />
        </div>
      </section>

      {/* Services — Wandr Studio numbered accordion with inline pricing cards */}
      <section id="services" className="bg-[var(--color-bg-primary)] border-b border-[var(--color-border)]">
        <div className="max-w-[var(--container-max)] mx-auto px-6 lg:px-8 pt-10">
          <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.14em] text-[var(--color-accent-text)] mb-5">
            WHAT WE DO
          </p>
          <h2 className={cn(
            'text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.02] tracking-[-0.04em]',
            'text-[var(--color-text-primary)] mb-12 max-w-[640px]'
          )}>
            Four ways to engage.<br />
            <span className="text-[var(--color-accent-text)]">One standard of output.</span>
          </h2>
        </div>

        <div className="max-w-[var(--container-max)] mx-auto px-6 lg:px-8">
          <div className="divide-y divide-[var(--color-border)] border-t border-[var(--color-border)]">
            {SERVICES.map((svc) => (
              <div key={svc.num} className="py-10">
                <div className="grid grid-cols-[3rem_1fr] md:grid-cols-[3rem_1fr_320px] gap-6 md:gap-10 items-start">
                  <span className="text-[clamp(1.25rem,2vw,1.5rem)] font-bold text-[var(--color-text-disabled)] leading-none pt-1 font-[var(--font-mono)]">
                    {svc.num}
                  </span>

                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-3">
                      <h3 className="text-[20px] font-bold text-[var(--color-text-primary)] leading-[1.2]">
                        {svc.title}
                      </h3>
                      <span className="font-[var(--font-mono)] text-[11px] text-[var(--color-text-tertiary)] uppercase tracking-[0.1em]">
                        {svc.tagline}
                      </span>
                    </div>
                    <p className="text-[15px] text-[var(--color-text-secondary)] leading-[1.65] mb-6 max-w-[600px]">
                      {svc.description}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                      {svc.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-[13px] text-[var(--color-text-secondary)]">
                          <span className="text-[var(--color-accent-text)] mt-0.5 flex-shrink-0" aria-hidden="true">→</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="col-span-2 md:col-span-1 border border-[var(--color-border)] rounded-[var(--radius-md)] p-6 bg-[var(--color-bg-elevated)]">
                    <div className="text-[1.75rem] font-bold text-[var(--color-accent)] leading-none tracking-[-0.02em] mb-1">
                      {svc.price}
                    </div>
                    <div className="font-[var(--font-mono)] text-[11px] text-[var(--color-text-tertiary)] uppercase tracking-[0.1em] mb-4">
                      {svc.priceNote} · {svc.timeline}
                    </div>
                    <p className="text-[12px] text-[var(--color-text-secondary)] mb-5 leading-[1.5]">
                      <span className="font-bold text-[var(--color-text-primary)]">Best for: </span>
                      {svc.bestFor}
                    </p>
                    <Link
                      href={svc.href}
                      className={cn(
                        'inline-flex items-center justify-center gap-2 w-full h-[40px] rounded-[var(--radius-md)]',
                        'bg-[var(--color-accent)] text-white font-bold text-[13px]',
                        'hover:bg-[var(--color-accent-hover)] transition-all duration-150',
                      )}
                    >
                      Get started →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process — Wandr Studio 5-step horizontal strip */}
      <section className="py-10 bg-[var(--color-bg-elevated)] border-b border-[var(--color-border)]">
        <div className="max-w-[var(--container-max)] mx-auto px-6 lg:px-8">
          <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.14em] text-[var(--color-accent-text)] mb-5">
            HOW WE WORK
          </p>
          <h2 className={cn(
            'text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.02] tracking-[-0.04em]',
            'text-[var(--color-text-primary)] mb-12 max-w-[640px]'
          )}>
            From audit to governed<br />
            <span className="text-[var(--color-accent-text)]">infrastructure.</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-5 border-t border-[var(--color-border)]">
            {PROCESS.map((step, i) => (
              <div
                key={step.num}
                className={cn(
                  'py-8 pr-6',
                  i < PROCESS.length - 1 && 'border-b sm:border-b-0 sm:border-r border-[var(--color-border)]',
                  i > 0 && 'sm:pl-6'
                )}
              >
                <span className="block font-[var(--font-mono)] text-[11px] text-[var(--color-accent-text)] uppercase tracking-[0.1em] mb-3">
                  {step.num}
                </span>
                <h3 className="text-[15px] font-bold text-[var(--color-text-primary)] mb-2 leading-[1.2]">
                  {step.title}
                </h3>
                <p className="text-[13px] text-[var(--color-text-secondary)] leading-[1.6]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-10 bg-[var(--color-bg-primary)] border-b border-[var(--color-border)]">
        <div className="max-w-[var(--container-max)] mx-auto px-6 lg:px-8">
          <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.14em] text-[var(--color-accent-text)] mb-5">
            HOW WE STACK UP
          </p>
          <h2 className={cn(
            'text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.02] tracking-[-0.04em]',
            'text-[var(--color-text-primary)] mb-12 max-w-[640px]'
          )}>
            Below premium agencies.<br />
            <span className="text-[var(--color-accent-text)]">Above the budget shops.</span>
          </h2>
          <div className="overflow-x-auto -mx-6 lg:mx-0 px-6 lg:px-0">
            <table className="w-full text-left border-separate border-spacing-y-2 min-w-[580px]">
              <thead>
                <tr>
                  <th className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.14em] text-[var(--color-text-tertiary)] pb-3 px-5">Option</th>
                  <th className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.14em] text-[var(--color-text-tertiary)] pb-3 px-5">Price</th>
                  <th className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.14em] text-[var(--color-text-tertiary)] pb-3 px-5">What you get</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row) => (
                  <tr key={row.option} className={row.highlight ? 'bg-[var(--color-accent-subtle)]' : 'bg-[var(--color-bg-elevated)]'}>
                    <td className={cn(
                      'rounded-l-[var(--radius-md)] px-5 py-4 text-[14px] align-middle border-l',
                      row.highlight
                        ? 'font-bold text-[var(--color-text-primary)] border-[var(--color-accent)]'
                        : 'text-[var(--color-text-primary)] border-[var(--color-border)]'
                    )}>
                      {row.option}
                    </td>
                    <td className={cn(
                      'px-5 py-4 text-[14px] align-middle border-t border-b',
                      row.highlight
                        ? 'font-bold text-[var(--color-accent)] border-[var(--color-accent)]'
                        : 'text-[var(--color-text-secondary)] border-[var(--color-border)]'
                    )}>
                      {row.price}
                    </td>
                    <td className={cn(
                      'rounded-r-[var(--radius-md)] px-5 py-4 text-[13px] align-middle border-r',
                      row.highlight
                        ? 'text-[var(--color-text-primary)] border-[var(--color-accent)]'
                        : 'text-[var(--color-text-secondary)] border-[var(--color-border)]'
                    )}>
                      {row.delivery}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ — Wandr Studio accordion in 2-col layout */}
      <section className="py-10 bg-[var(--color-bg-elevated)] border-b border-[var(--color-border)]">
        <div className="max-w-[var(--container-max)] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
            <div>
              <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.14em] text-[var(--color-accent-text)] mb-5">
                FAQ
              </p>
              <h2 className={cn(
                'text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.02] tracking-[-0.04em]',
                'text-[var(--color-text-primary)]'
              )}>
                Questions founders<br />
                <span className="text-[var(--color-accent-text)]">actually ask.</span>
              </h2>
            </div>
            <div className="space-y-3">
              {FAQS.map((faq, i) => (
                <details
                  key={i}
                  className="group p-6 rounded-[var(--radius-md)] bg-[var(--color-bg-primary)] border border-[var(--color-border)] open:border-[var(--color-accent)] transition-colors"
                >
                  <summary className="flex items-start justify-between gap-4 cursor-pointer list-none">
                    <h3 className="text-[15px] font-bold text-[var(--color-text-primary)] leading-snug">
                      {faq.q}
                    </h3>
                    <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center border border-[var(--color-border)] text-[var(--color-text-tertiary)] group-open:bg-[var(--color-accent)] group-open:border-[var(--color-accent)] group-open:text-white transition-colors">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="6 9 12 15 18 9" className="group-open:hidden" />
                        <polyline points="18 15 12 9 6 15" className="hidden group-open:block" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-4 text-[14px] text-[var(--color-text-secondary)] leading-[1.65]">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA — Interactivism full-bleed accent banner */}
      <section className="bg-[var(--color-accent)]">
        <div className="max-w-[var(--container-max)] mx-auto px-6 lg:px-8 py-24 lg:py-32 flex flex-col items-center text-center">
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.0] tracking-[-0.04em] text-white max-w-[700px] mb-10">
            Start with a<br />free audit.
          </h2>
          <div className="flex flex-col sm:flex-row items-center gap-5 mb-6">
            <Link
              href="/contact?type=audit"
              className="inline-flex items-center justify-center gap-2 h-[48px] px-9 rounded-[var(--radius-md)] bg-white text-[var(--color-accent)] font-bold text-[15px] hover:bg-white/90 shadow-[0_2px_12px_rgba(0,0,0,0.15)] active:brightness-95 transition-all duration-150"
            >
              Book a free audit
            </Link>
            <a
              href="mailto:hello@artemisdesignlabs.com"
              className="font-[var(--font-mono)] text-[13px] text-white/70 hover:text-white transition-colors duration-150"
            >
              hello@artemisdesignlabs.com
            </a>
          </div>
          <p className="text-[13px] text-white/60 leading-[1.5] max-w-[400px]">
            Free 30-minute UI infrastructure audit. Written drift score + three specific recommendations. No pitch deck, no commitment.
          </p>
        </div>
      </section>
    </>
  );
}
