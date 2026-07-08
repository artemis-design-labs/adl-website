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
    category: 'Enterprise · Internal Tooling',
    client: 'AT&T',
    title: 'AT&T Cloud Optimizer — Enterprise Data Design System',
    description:
      'A governed design system and data visualization component library for AT&T\'s internal cloud cost intelligence platform — serving everyone from SVP to individual application owner through a single, consistent UI.',
    stats: [
      { label: 'Applications', value: '1,800+' },
      { label: 'Cloud spend surfaced', value: '$36.7M' },
    ],
  },
  {
    category: 'Public Healthcare · AI Design System',
    client: 'HANDS AI',
    title: 'HANDS AI — AI-Powered Case Management Design System',
    description:
      'A tokenized design system and production component library for HANDS AI\'s WIC case management platform — purpose-built for predictive risk interfaces, natural language search, and AI-human collaboration at scale.',
    stats: [
      { label: 'Case prep time',      value: '40% faster' },
      { label: 'Departments deployed', value: '6'         },
    ],
  },
  {
    category: 'Education · Data Visualization System',
    client: 'Insight AI',
    title: 'Insight — Data Intelligence Design System for NYC DOE',
    description:
      'A data visualization design system for New York City\'s Department of Education — transforming fragmented student data into shareable visual narratives across 1,800+ public schools.',
    stats: [
      { label: 'NYC schools served',   value: '1,800+' },
      { label: 'Data domains unified', value: '4'      },
    ],
  },
  {
    category: 'Enterprise · Internal Tooling Design System',
    client: 'Verizon',
    title: 'My Project Inbox — Enterprise Coordination Design System',
    description:
      'A governed design system for Verizon\'s internal project coordination platform — replacing three fragmented tool categories with a single component library that standardizes how engineering teams track, assign, and hand off work.',
    stats: [
      { label: 'Projects unified',     value: '60+'  },
      { label: 'Tool categories replaced', value: '3' },
    ],
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

              </div>

            </div>
          </div>
        </section>
      ))}

      <CTASection />
    </>
  );
}
