import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { cn } from '@/lib/cn';

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Case studies from teams that shipped design infrastructure with ADL. Real metrics, real outcomes, real engineering review.',
};

const METRICS = [
  { value: '40%',  label: 'Faster case processing', project: 'HANDS AI' },
  { value: '60%',  label: 'Decision time reduction', project: 'Insight' },
  { value: '94%',  label: 'First-PR approval rate', project: 'Average' },
  { value: '3-4',  label: 'Weeks to delivery',     project: 'Average' },
];

const PROJECTS = [
  {
    title: 'HANDS AI',
    client: 'Public Healthcare',
    description:
      'A WIC case management platform powered by a custom AI agent. We built the design system and the production frontend in three weeks — the first PR passed senior-engineer review on submission.',
    image: '/images/hands-ai/cover.png',
    link: '/hands-ai',
    tags: ['AI', 'Case Management', 'Healthcare'],
    metric: { value: '40%', label: 'Faster case processing' },
  },
  {
    title: 'Insight',
    client: 'Department of Education',
    description:
      'A school-data platform for DOE officials. Predictive AI on top, comprehensive visualization underneath, design system that scales from 3 dashboards to 30 without rebuilding.',
    image: '/images/insight/cover.png',
    link: '/insight',
    tags: ['AI', 'Education', 'Data Viz'],
    metric: { value: '60%', label: 'Decision time reduction' },
  },
  {
    title: 'My Project Inbox',
    client: 'Enterprise Engineering',
    description:
      'A project management surface for internal engineering teams. Cuts context-switching between Linear, GitHub, and Slack. Shipped with full state coverage and virtualized lists for 10K+ items.',
    image: '/images/my-project-inbox/cover.png',
    link: '/my-project-inbox',
    tags: ['Project Mgmt', 'Enterprise'],
    metric: { value: '25%', label: 'Team velocity increase' },
  },
];

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)]">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-[50vh] pointer-events-none opacity-60"
          style={{ background: 'var(--gradient-subtle)' }}
        />
        <div className="relative max-w-[var(--container-wide)] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)] mb-5">
              › our work
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] text-[var(--color-text-primary)] leading-[1.05]">
              Transformations,
              <br />
              <span className="text-[var(--color-accent)]">not just deliverables.</span>
            </h1>
            <p className="mt-7 text-base md:text-lg lg:text-xl text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">
              Every engagement starts with a real problem and ends with measurable impact. Here&apos;s some of what we&apos;ve shipped.
            </p>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 md:py-24 bg-[var(--color-bg-secondary)]">
        <div className="max-w-[var(--container-wide)] mx-auto px-6 lg:px-8">
          <header className="text-center mb-10 max-w-2xl mx-auto">
            <span className="inline-block font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)] mb-4">
              › results
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.025em] text-[var(--color-text-primary)] leading-[1.1]">
              Measurable impact.
            </h2>
          </header>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {METRICS.map((m) => (
              <article
                key={m.label}
                className={cn(
                  'p-6 lg:p-7 rounded-xl text-center',
                  'bg-[var(--color-bg-elevated)] border border-[var(--color-border)]'
                )}
              >
                <div className="text-3xl md:text-4xl font-semibold tracking-[-0.025em] text-[var(--color-accent)] mb-2">
                  {m.value}
                </div>
                <div className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-text-primary)] mb-1">
                  {m.label}
                </div>
                <div className="text-sm text-[var(--color-text-tertiary)]">
                  {m.project}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="py-24 md:py-32 bg-[var(--color-bg-primary)]">
        <div className="max-w-[var(--container-wide)] mx-auto px-6 lg:px-8">
          <header className="text-center mb-14 md:mb-16 max-w-2xl mx-auto">
            <span className="inline-block font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)] mb-4">
              › case studies
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.025em] text-[var(--color-text-primary)] leading-[1.1]">
              Featured projects.
            </h2>
          </header>

          <div className="space-y-20 md:space-y-24">
            {PROJECTS.map((project, idx) => {
              const isFlipped = idx % 2 === 1;
              return (
                <Link
                  key={project.title}
                  href={project.link}
                  className="block group rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-primary)]"
                >
                  <article className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Image */}
                    <div
                      className={cn(
                        'lg:col-span-7 relative aspect-[4/3] overflow-hidden rounded-2xl',
                        'border border-[var(--color-border)] bg-[var(--color-bg-elevated)]',
                        'group-hover:border-[var(--color-accent)] transition-colors',
                        isFlipped ? 'lg:order-2' : ''
                      )}
                    >
                      <Image
                        src={project.image}
                        alt={`${project.title} cover`}
                        fill
                        sizes="(min-width: 1024px) 60vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>

                    {/* Content */}
                    <div className={cn('lg:col-span-5 space-y-5', isFlipped ? 'lg:order-1' : '')}>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-tertiary)] px-2.5 py-1 rounded-full border border-[var(--color-border)]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div>
                        <span className="block font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)] mb-2">
                          {project.client}
                        </span>
                        <h3 className="text-3xl md:text-4xl font-semibold tracking-[-0.025em] text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors leading-[1.1]">
                          {project.title}
                        </h3>
                      </div>

                      <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                        {project.description}
                      </p>

                      <div className="inline-flex items-center gap-4 p-4 rounded-xl bg-[var(--color-bg-elevated)] border border-[var(--color-border)]">
                        <span className="text-3xl font-semibold tracking-[-0.025em] text-[var(--color-accent)]">
                          {project.metric.value}
                        </span>
                        <span className="text-sm md:text-base text-[var(--color-text-secondary)]">
                          {project.metric.label}
                        </span>
                      </div>

                      <div className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-text-tertiary)] group-hover:text-[var(--color-accent)] inline-flex items-center gap-2 transition-colors">
                        View case study
                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M5 12h14M13 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32 bg-[var(--color-bg-secondary)] overflow-hidden">
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
            Want results like these?
            <br />
            <span className="text-[var(--color-accent)]">Let&apos;s talk about your project.</span>
          </h2>
          <p className="text-base md:text-lg text-[var(--color-text-secondary)] mb-10 max-w-xl mx-auto leading-relaxed">
            No pitch deck. No pressure. Just a real conversation about what you&apos;re building and where it&apos;s stuck.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 h-12 px-7 rounded-md bg-[var(--color-accent)] text-[var(--color-text-on-accent)] font-medium text-base hover:bg-[var(--color-accent-hover)] hover:shadow-[var(--shadow-glow)] active:translate-y-px transition-all duration-150"
          >
            Start a Conversation
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
