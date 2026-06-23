import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { cn } from '@/lib/cn';

export const metadata: Metadata = {
  title: 'Clients',
  description:
    'Enterprise product teams, government agencies, and Series A-C startups that have shipped design infrastructure with Artemis Design Labs.',
};

const CLIENTS = [
  { name: 'AT&T',      src: '/images/AT&T-Logo.png',     industry: 'Telecommunications',  type: 'Enterprise' },
  { name: 'Verizon',   src: '/images/Verizon-logo.png',   industry: 'Telecommunications',  type: 'Enterprise' },
  { name: 'NBCU',      src: '/images/NBCU-logo.png',      industry: 'Enterprise Media',    type: 'Component Library' },
  { name: 'NYCPS',     src: '/images/NYCPS-logo.png',     industry: 'Public Education',    type: 'Data Platform' },
  { name: 'NYCERS',    src: '/images/NYCERS-logo.png',    industry: 'Government',          type: 'Pension System' },
  { name: 'CMA',       src: '/images/CMA-logo.png',       industry: 'Financial Services',  type: 'Enterprise' },
  { name: 'Qualitrol', src: '/images/Qualitrol-logo.png', industry: 'Industrial',          type: 'Design System' },
  { name: 'Freshop',   src: '/images/Freshop-logo.png',   industry: 'E-commerce',          type: 'Design System' },
];

const METRICS = [
  { value: '8+',    label: 'Enterprise clients',        sub: 'Public and private sector' },
  { value: '94%',   label: 'First-PR approval rate',    sub: 'Average across engagements' },
  { value: '3–4',   label: 'Weeks to delivery',         sub: 'Full design system + code' },
  { value: '$0',    label: 'Figma-only output',          sub: 'Every design ships with production code' },
];

const INDUSTRIES = [
  {
    sector: 'Enterprise Technology',
    clients: ['AT&T', 'Verizon'],
    description:
      'Large-scale component libraries and design systems for consumer-facing and internal enterprise products serving millions of users.',
  },
  {
    sector: 'Enterprise Media',
    clients: ['NBCU'],
    description:
      'Unified component architecture across four separate product teams — one source of truth, every surface, zero handoff chaos.',
  },
  {
    sector: 'Public Sector',
    clients: ['NYCPS', 'NYCERS'],
    description:
      'Accessible, WCAG-compliant design systems for government and education platforms used by thousands of officials daily.',
  },
  {
    sector: 'Industrial & Commercial',
    clients: ['Qualitrol', 'Freshop', 'CMA'],
    description:
      'Precision component libraries built for complex, data-dense environments and enterprise operational tools.',
  },
];

const TESTIMONIALS = [
  {
    quote:
      "We'd burned $40K on an agency that delivered Figma files our engineers couldn't use. ADL delivered Figma and production-ready React in three weeks — and the code actually passed review the first time. I didn't know that was possible at this stage.",
    author: 'CTO & Co-founder',
    company: 'Series A Healthcare SaaS',
  },
  {
    quote:
      "We lost an enterprise deal because the buyer flagged UI inconsistency in the demo. Six weeks after ADL built our governance system, we closed the same deal. That's the only number that matters.",
    author: 'CEO & Co-founder',
    company: 'Seed-Stage B2B SaaS',
  },
  {
    quote:
      "Nobody on our team owned UI infrastructure — everyone built inconsistently and the debt was invisible until it wasn't. ADL built the governance layer and ran it for us. New engineers ship their first feature in three days now. It used to take two weeks.",
    author: 'VP of Engineering',
    company: 'Series A Analytics Platform',
  },
];

const FEATURED_WORK = [
  {
    eyebrow: 'PUBLIC HEALTHCARE',
    title: 'HANDS AI — Production Design System',
    description: 'WIC case management platform. First PR passed senior review on submission.',
    image: '/images/hands-ai/cover.png',
    metric: '40%',
    metricLabel: 'Faster case processing',
    href: '/hands-ai',
  },
  {
    eyebrow: 'ENTERPRISE MEDIA',
    title: 'NBCU — Unified Component Architecture',
    description: 'Eliminated handoff chaos across four product teams. One source of truth, every surface.',
    image: '/images/insight/cover.png',
    metric: '94%',
    metricLabel: 'First-PR approval rate',
    href: '/work',
  },
];

export default function ClientsPage() {
  return (
    <>
      {/* Hero — Interactivism full-width */}
      <section className="bg-[var(--color-bg-primary)] pt-28 md:pt-40 pb-0">
        <div className="max-w-[var(--container-max)] mx-auto px-6 lg:px-8">
          <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.14em] text-[var(--color-accent-text)] mb-7">
            ENTERPRISE CLIENTS · TRUSTED INFRASTRUCTURE
          </p>
          <h1 className="text-[clamp(3rem,7vw,5.5rem)] font-bold leading-[1.0] tracking-[-0.04em] text-[var(--color-text-primary)] mb-10">
            Product teams you&apos;d recognize.<br />
            <span className="text-[var(--color-accent-text)]">Infrastructure they trust.</span>
          </h1>
          <p className="text-[16px] text-[var(--color-text-secondary)] leading-[1.6] max-w-[560px] mb-14 lg:mb-20">
            From Series A startups to Fortune 500 enterprises, ADL has built the UI infrastructure
            that keeps teams shipping consistently at scale.
          </p>
          <div className="border-t border-[var(--color-border)]" aria-hidden="true" />
        </div>
      </section>

      {/* Metrics — Wandr Studio dark elevated cards */}
      <section className="py-10 bg-[var(--color-bg-elevated)] border-b border-[var(--color-border)]">
        <div className="max-w-[var(--container-max)] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {METRICS.map((m) => (
              <article
                key={m.label}
                className="bg-[var(--color-bg-primary)] border border-[var(--color-border)] rounded-[var(--radius-md)] px-6 py-7"
              >
                <div className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold text-[var(--color-accent)] leading-none tracking-[-0.03em] mb-2">
                  {m.value}
                </div>
                <div className="text-[13px] font-bold text-[var(--color-text-primary)] mb-1">
                  {m.label}
                </div>
                <div className="font-[var(--font-mono)] text-[11px] text-[var(--color-text-tertiary)]">
                  {m.sub}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Client logo grid — Wandr Studio */}
      <section className="py-10 bg-[var(--color-bg-primary)] border-b border-[var(--color-border)]">
        <div className="max-w-[var(--container-max)] mx-auto px-6 lg:px-8">
          <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.14em] text-[var(--color-accent-text)] mb-10">
            TRUSTED BY PRODUCT TEAMS YOU&apos;D RECOGNIZE
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {CLIENTS.map((client) => (
              <div
                key={client.name}
                className="bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-[var(--radius-md)] p-6 flex flex-col items-center gap-4"
              >
                <div className="h-10 relative w-full flex items-center justify-center">
                  <Image
                    src={client.src}
                    alt={client.name}
                    width={120}
                    height={40}
                    className="object-contain brightness-0 invert opacity-50 hover:opacity-80 transition-opacity max-h-10 w-auto"
                  />
                </div>
                <div className="text-center">
                  <p className="text-[13px] font-bold text-[var(--color-text-primary)]">{client.name}</p>
                  <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.1em] text-[var(--color-text-tertiary)] mt-0.5">
                    {client.industry}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries — Wandr Studio numbered accordion */}
      <section className="py-10 bg-[var(--color-bg-elevated)] border-b border-[var(--color-border)]">
        <div className="max-w-[var(--container-max)] mx-auto px-6 lg:px-8">
          <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.14em] text-[var(--color-accent-text)] mb-5">
            INDUSTRIES SERVED
          </p>
          <h2 className={cn(
            'text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.02] tracking-[-0.04em]',
            'text-[var(--color-text-primary)] mb-12 max-w-[640px]'
          )}>
            Complex products.<br />
            <span className="text-[var(--color-accent-text)]">Governed infrastructure.</span>
          </h2>
          <div className="divide-y divide-[var(--color-border)] border-t border-[var(--color-border)]">
            {INDUSTRIES.map((ind, i) => (
              <div
                key={i}
                className="grid grid-cols-1 md:grid-cols-[260px_1fr_200px] gap-6 md:gap-10 py-8 items-start"
              >
                <h3 className="text-[15px] font-bold text-[var(--color-text-primary)]">
                  {ind.sector}
                </h3>
                <p className="text-[14px] text-[var(--color-text-secondary)] leading-[1.65]">
                  {ind.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {ind.clients.map((c) => (
                    <span
                      key={c}
                      className="inline-flex items-center px-3 py-1 rounded-[var(--radius-xxs)] bg-[var(--color-bg-primary)] border border-[var(--color-border)] font-[var(--font-mono)] text-[11px] text-[var(--color-accent-text)]"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials — Interactivism dark cards */}
      <section className="py-10 bg-[var(--color-bg-primary)] border-b border-[var(--color-border)]">
        <div className="max-w-[var(--container-max)] mx-auto px-6 lg:px-8">
          <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.14em] text-[var(--color-accent-text)] mb-10">
            WHAT FOUNDERS SAY
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {TESTIMONIALS.map((t, i) => (
              <article
                key={i}
                className="bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-[var(--radius-md)] p-6 flex flex-col"
              >
                <span
                  className="text-[3.5rem] font-bold leading-none text-[var(--color-accent)] mb-3 select-none"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <blockquote className="text-[14px] text-[var(--color-text-primary)] leading-[1.7] flex-1 mb-6">
                  {t.quote}
                </blockquote>
                <div className="border-t border-[var(--color-border)] pt-4">
                  <p className="font-[var(--font-mono)] text-[11px] text-[var(--color-text-tertiary)] uppercase tracking-[0.08em] leading-[1.5]">
                    {t.author}<br />{t.company}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured work */}
      <section className="py-10 bg-[var(--color-bg-elevated)] border-b border-[var(--color-border)]">
        <div className="max-w-[var(--container-max)] mx-auto px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.14em] text-[var(--color-accent-text)] mb-3">
                FEATURED WORK
              </p>
              <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.02] tracking-[-0.04em] text-[var(--color-text-primary)]">
                See it in action.
              </h2>
            </div>
            <Link
              href="/work"
              className="font-bold text-[13px] text-[var(--color-accent-text)] hover:text-[var(--color-accent-hover)] transition-colors duration-150 flex-shrink-0 ml-8 pb-1"
            >
              View all work →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {FEATURED_WORK.map((w) => (
              <Link
                key={w.href}
                href={w.href}
                className="group block bg-[var(--color-bg-primary)] border border-[var(--color-border)] rounded-[var(--radius-md)] overflow-hidden hover:border-[var(--color-accent)] transition-colors"
              >
                <div className="relative aspect-[16/9] bg-[var(--color-bg-inset)]">
                  <Image
                    src={w.image}
                    alt={w.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="p-6">
                  <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.14em] text-[var(--color-accent-text)] mb-2">
                    {w.eyebrow}
                  </p>
                  <h3 className="text-[17px] font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent-text)] transition-colors mb-2">
                    {w.title}
                  </h3>
                  <p className="text-[13px] text-[var(--color-text-secondary)] leading-[1.6] mb-4">
                    {w.description}
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-[1.75rem] font-bold text-[var(--color-accent)] leading-none tracking-[-0.02em]">
                      {w.metric}
                    </span>
                    <span className="text-[13px] text-[var(--color-text-secondary)]">{w.metricLabel}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — Interactivism blue banner */}
      <section className="bg-[var(--color-accent)]">
        <div className="max-w-[var(--container-max)] mx-auto px-6 lg:px-8 py-24 lg:py-32 flex flex-col items-center text-center">
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.0] tracking-[-0.04em] text-white max-w-[700px] mb-10">
            Ready to join<br />the list?
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
            Free 30-minute UI infrastructure audit. Written drift score + three specific recommendations.
          </p>
        </div>
      </section>
    </>
  );
}
