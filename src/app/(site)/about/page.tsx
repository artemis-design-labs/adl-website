import Link from 'next/link';
import type { Metadata } from 'next';
import { cn } from '@/lib/cn';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Built by ex-startup founders who lived the design-to-development friction. ADL ships the design infrastructure we wished we had.',
};

const STORY_PARAGRAPHS = [
  "Before we built ADL, we ran startups. We watched our own engineering teams lose entire sprints decoding Figma files that — beautiful as they were — never fully matched the product. We burned six-figure agency retainers on design systems nobody on our team ever fully trusted, let alone shipped.",
  "Every design-to-development handoff felt like translating poetry into engineering tickets. Colors drifted. States got dropped. The 'we'll fix it later' bin filled up faster than the runway shrank.",
  "We didn't start ADL because we saw a market opportunity. We started it because the agencies we were paying weren't built for how we actually worked, and the AI tools on the market generated code our engineers refused to merge.",
  "So we built the infrastructure ourselves — the senior-engineer-validated AI, the production-grade component libraries, the cycles that turn weeks into days. And then we made it available to other founders who can't afford to wait for someone else to solve their problem either.",
];

const PRINCIPLES = [
  {
    num: '01',
    title: 'Ship code, not just designs.',
    detail:
      'Every Figma component leaves with a production-grade equivalent. Designs that don\'t ship aren\'t designs — they\'re wishes. Our deliverables are the kind your senior engineer would merge without asking.',
  },
  {
    num: '02',
    title: 'Engineering empathy at every layer.',
    detail:
      'Design systems exist to make developers faster, not just designers happier. Every token, every prop, every doc is optimized for the engineer at 2 a.m. before a launch.',
  },
  {
    num: '03',
    title: 'Transparency builds trust.',
    detail:
      'Fixed pricing. Clear timelines. No "this scope expanded" emails halfway through. You see the audit, you keep the audit, you make the call.',
  },
  {
    num: '04',
    title: 'The best partnership ends.',
    detail:
      'Our goal is to build infrastructure your team can own and maintain. We create capability, not dependency. The maintenance retainer is optional, not the deliverable.',
  },
];

const STATS = [
  { value: '190K+',   label: 'training images' },
  { value: '3-4 wks', label: 'average delivery' },
  { value: '$0',      label: 'figma-only output' },
  { value: '24h',     label: 'first response' },
];

export default function AboutPage() {
  return (
    <>

      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-[55vh] pointer-events-none opacity-60"
          style={{ background: 'var(--gradient-subtle)' }}
        />
        <div className="relative max-w-[var(--container-wide)] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)] mb-5">
              › about adl
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] text-[var(--color-text-primary)] leading-[1.05]">
              We built this for the
              <br />
              <span className="text-[var(--color-accent)]">founders we used to be</span>
            </h1>
            <p className="mt-7 text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">
              Artemis Design Labs is the design infrastructure we wished existed when we were running startups —
              built by people who lived the problem before they tried to solve it.
            </p>
          </div>
        </div>
      </section>

      {/* Origin story */}
      <section className="py-24 md:py-32 bg-[var(--color-bg-secondary)]">
        <div className="max-w-[var(--container-wide)] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <span className="inline-block font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)] mb-4">
                › origin story
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.025em] text-[var(--color-text-primary)] leading-[1.1]">
                Why we exist.
              </h2>
              <p className="mt-5 text-base text-[var(--color-text-secondary)] leading-relaxed">
                Less manifesto, more confession.
              </p>
            </div>
            <div className="lg:col-span-8 space-y-6 text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
              {STORY_PARAGRAPHS.map((p, i) => (
                <p key={i} className={i === STORY_PARAGRAPHS.length - 1 ? 'text-[var(--color-text-primary)] font-medium' : undefined}>
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* By the numbers */}
      <section className="py-24 md:py-32 bg-[var(--color-bg-primary)]">
        <div className="max-w-[var(--container-wide)] mx-auto px-6 lg:px-8">
          <header className="text-center mb-14 max-w-2xl mx-auto">
            <span className="inline-block font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)] mb-4">
              › by the numbers
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.025em] text-[var(--color-text-primary)] leading-[1.1]">
              The shape of how we work.
            </h2>
          </header>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {STATS.map((s) => (
              <article
                key={s.label}
                className={cn(
                  'p-6 lg:p-8 rounded-xl text-center',
                  'bg-[var(--color-bg-elevated)] border border-[var(--color-border)]'
                )}
              >
                <div className="text-3xl md:text-4xl font-semibold tracking-[-0.025em] text-[var(--color-accent)] mb-2">
                  {s.value}
                </div>
                <div className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-tertiary)]">
                  {s.label}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-24 md:py-32 bg-[var(--color-bg-secondary)]">
        <div className="max-w-[var(--container-wide)] mx-auto px-6 lg:px-8">
          <header className="max-w-2xl mb-14">
            <span className="inline-block font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)] mb-4">
              › what we stand for
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.025em] text-[var(--color-text-primary)] leading-[1.1]">
              Four things we keep
              <br />
              <span className="text-[var(--color-accent)]">non-negotiable</span>
            </h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PRINCIPLES.map((p) => (
              <article
                key={p.num}
                className={cn(
                  'group p-7 lg:p-8 rounded-xl',
                  'bg-[var(--color-bg-elevated)] border border-[var(--color-border)]',
                  'hover:border-[var(--color-accent)] hover:bg-[var(--color-bg-tertiary)]',
                  'transition-colors duration-200'
                )}
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="font-[var(--font-mono)] text-[12px] uppercase tracking-[0.18em] text-[var(--color-accent)]">
                    {p.num}
                  </span>
                  <span className="flex-1 h-px bg-[var(--color-border)] group-hover:bg-[var(--color-accent-muted)] transition-colors" />
                </div>
                <h3 className="text-lg lg:text-xl font-medium text-[var(--color-text-primary)] mb-3">
                  {p.title}
                </h3>
                <p className="text-sm md:text-base text-[var(--color-text-secondary)] leading-relaxed">
                  {p.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-24 md:py-32 bg-[var(--color-bg-primary)]">
        <div className="max-w-[var(--container-wide)] mx-auto px-6 lg:px-8">
          <header className="max-w-2xl mb-12">
            <span className="inline-block font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)] mb-4">
              › who&apos;s behind it
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.025em] text-[var(--color-text-primary)] leading-[1.1]">
              The founder you&apos;ll actually talk to.
            </h2>
          </header>

          <article className="max-w-3xl flex flex-col sm:flex-row items-start gap-6 sm:gap-8 p-7 lg:p-9 rounded-2xl bg-[var(--color-bg-elevated)] border border-[var(--color-border)]">
            {/* Headshot placeholder — swap for a photo by dropping a file at
                public/images/founders/pritish-sai.jpg and replacing this div
                with a next/image. */}
            <div
              className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[var(--color-accent-subtle)] border border-[var(--color-accent)]/40 flex items-center justify-center"
              aria-hidden="true"
            >
              <span className="text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--color-accent)]">PS</span>
            </div>

            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-semibold text-[var(--color-text-primary)]">
                Pritish Sai Kannan
              </h3>
              <p className="mt-1 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)]">
                Founder · Design Leader, Enterprise AI
              </p>
              <p className="mt-4 text-base text-[var(--color-text-secondary)] leading-relaxed">
                Five years leading design teams across large-scale private and federal organizations,
                solving complex enterprise challenges that impact thousands of users across the U.S. —
                the experience ADL is built on.
              </p>
              <a
                href="https://www.linkedin.com/in/pritishsai"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pritish Sai Kannan on LinkedIn"
                className="inline-flex items-center gap-2 mt-5 text-sm font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors duration-150 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-elevated)]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                Connect on LinkedIn
              </a>
            </div>
          </article>

          <p className="mt-6 text-sm text-[var(--color-text-tertiary)]">
            Follow{' '}
            <a
              href="https://www.linkedin.com/company/artemis-design-labs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] underline-offset-4 hover:underline transition-colors"
            >
              Artemis Design Labs on LinkedIn
            </a>
            .
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32 bg-[var(--color-bg-primary)] overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -bottom-1/2 h-[120%] pointer-events-none opacity-50"
          style={{ background: 'var(--gradient-subtle)' }}
        />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <span className="inline-block font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)] mb-5">
            › ready when you are
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.025em] text-[var(--color-text-primary)] leading-[1.1] mb-6">
            If our story sounds like yours,
            <br />
            <span className="text-[var(--color-accent)]">let&apos;s have a real conversation.</span>
          </h2>
          <p className="text-base md:text-lg text-[var(--color-text-secondary)] mb-10 max-w-xl mx-auto leading-relaxed">
            No pitch deck. No pressure. Just founder-to-founder talk about what you&apos;re building and whether we&apos;re the right fit.
          </p>
          <Link
            href="/contact"
            className={cn(
              'inline-flex items-center gap-2 h-12 px-7 rounded-md',
              'bg-[var(--color-accent)] text-[var(--color-text-on-accent)]',
              'font-medium text-base',
              'hover:bg-[var(--color-accent-hover)] hover:shadow-[var(--shadow-glow)]',
              'active:translate-y-px transition-all duration-150'
            )}
          >
            Book a Conversation
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

    </>
  );
}
