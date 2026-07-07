import type { Metadata } from 'next';
import { CTASection } from '@/components/organisms/CTASection';

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Selected projects from Artemis Design Labs — UI infrastructure, design systems, and AI-powered platforms shipped for enterprise teams.',
};

const FILTERS = ['All', 'Public Sector', 'Healthcare', 'Education', 'Enterprise'];

const PROJECTS = [
  {
    category: 'Public Healthcare · AI Platform',
    client: 'HANDS AI',
    title: 'HANDS AI — WIC Case Management Platform',
    description:
      'A complete redesign of a WIC case management platform with a custom AI-powered design system and production React frontend. First PR passed senior-engineer review on submission.',
    stats: [
      { label: 'Outcome',   value: '40% faster' },
      { label: 'PR review', value: '94% pass'   },
    ],
    href: '/hands-ai',
  },
  {
    category: 'Education · Data Platform',
    client: 'Insight',
    title: 'Insight — School Data Intelligence Platform',
    description:
      'A school data intelligence platform for the Department of Education. Predictive AI on top, comprehensive visualization underneath — scales from 3 dashboards to 30 without rebuilding.',
    stats: [
      { label: 'Decision time', value: '60% faster' },
      { label: 'Dashboards',    value: '30+'         },
    ],
    href: '/insight',
  },
  {
    category: 'Enterprise · Project Management',
    client: 'My Project Inbox',
    title: 'My Project Inbox — Unified Engineering Surface',
    description:
      'A unified engineering surface that cuts context-switching between Linear, GitHub, and Slack. Full state coverage with virtualized lists handling 10K+ items.',
    stats: [
      { label: 'Velocity',  value: '+25%'    },
      { label: 'Items',     value: '10K+'    },
    ],
    href: '/my-project-inbox',
  },
];

const ImagePlaceholder = () => (
  <div className="w-full aspect-[16/10] rounded-2xl bg-[var(--color-bg-primary)] border border-[var(--color-border)] flex items-center justify-center">
    <svg
      width="32" height="32" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5"
      strokeLinecap="round" strokeLinejoin="round"
      className="text-[var(--color-text-tertiary)]"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21 15 16 10 5 21" />
    </svg>
  </div>
);

export default function WorkPage() {
  return (
    <>
      {/* ── Hero — Semiflat pattern ───────────────────────────────────────────
          Eyebrow + headline + filter pills                                    */}
      <section className="bg-[var(--color-bg-primary)] pt-28 md:pt-40 pb-12 md:pb-16 border-b border-[var(--color-border)]">
        <div className="max-w-[var(--container-max)] mx-auto px-10 lg:px-20">

          <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)] mb-5">
            › Selected Work
          </p>

          <h1 className="text-[clamp(2.5rem,5vw,3.75rem)] font-bold leading-[1.1] tracking-[-0.04em] text-[var(--color-text-primary)] max-w-[720px] mb-10">
            Work that ships<br />and stays shipped.
          </h1>

          <div className="flex flex-wrap gap-2">
            {FILTERS.map((filter, i) => (
              <span
                key={filter}
                className={[
                  'inline-flex items-center h-[34px] px-[18px] rounded-full font-[var(--font-mono)] text-[12px] tracking-[0.06em] cursor-pointer transition-colors duration-150',
                  i === 0
                    ? 'bg-[var(--color-text-primary)] text-[var(--color-bg-primary)]'
                    : 'bg-[var(--color-bg-elevated)] border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]',
                ].join(' ')}
              >
                {filter}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* ── Featured Work — Semiflat pattern, all three projects ─────────────
          Alternating bg · image left · metadata + stats + CTA right          */}
      {PROJECTS.map((p, i) => (
        <section
          key={p.client}
          className={[
            'border-b border-[var(--color-border)] py-14 md:py-20',
            i % 2 === 0 ? 'bg-[var(--color-bg-elevated)]' : 'bg-[var(--color-bg-primary)]',
          ].join(' ')}
        >
          <div className="max-w-[var(--container-max)] mx-auto px-10 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_440px] gap-10 lg:gap-16 items-center">

              <ImagePlaceholder />

              <div>
                <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)] mb-1">
                  Featured
                </p>
                <p className="font-[var(--font-mono)] text-[11px] text-[var(--color-text-tertiary)] tracking-[0.1em] mb-6">
                  {p.category}
                </p>
                <h2 className="text-[clamp(1.5rem,2vw,2rem)] font-bold leading-[1.15] tracking-[-0.03em] text-[var(--color-text-primary)] mb-5">
                  {p.title}
                </h2>
                <p className="text-[14px] text-[var(--color-text-secondary)] leading-[1.7] mb-8">
                  {p.description}
                </p>

                <div className="flex gap-10 mb-8">
                  {p.stats.map((s) => (
                    <div key={s.label}>
                      <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.12em] text-[var(--color-text-tertiary)] mb-1">
                        {s.label}
                      </p>
                      <p className="text-[14px] font-bold text-[var(--color-text-primary)] tracking-[-0.02em]">
                        {s.value}
                      </p>
                    </div>
                  ))}
                </div>

                <a
                  href={p.href}
                  className="inline-flex items-center justify-center h-[44px] px-7 rounded-full bg-[var(--color-accent)] text-[var(--color-text-on-accent)] font-bold text-[14px] hover:bg-[var(--color-accent-hover)] transition-colors duration-150"
                >
                  View Case Study
                </a>
              </div>

            </div>
          </div>
        </section>
      ))}

      <CTASection />
    </>
  );
}
