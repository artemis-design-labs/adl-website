import type { Metadata } from 'next';
import { CTASection } from '@/components/organisms/CTASection';

export const metadata: Metadata = {
  title: 'Work | Artemis Design Labs',
  description:
    'Selected projects from Artemis Design Labs — AI-powered platforms, workflow systems, and operational infrastructure built for enterprise and public sector organizations.',
};

const FILTERS = ['All', 'Public Sector', 'Education', 'Enterprise'];

const PROJECTS = [
  {
    year: '2024–2025',
    category: 'Public Sector · AI Workflow System',
    client: 'NYCERS',
    title: 'NYCEPAS — AI-Powered Pension Administration System',
    description:
      'An AI-powered workflow system that unified pension administration across all four NYCERS business units into one intelligent case surface. Cases that previously required manual cross-unit coordination now route automatically — with AI-assisted tier determination, eligibility checks, and benefit calculations that are fully auditable and sourced to statute.',
    stats: [
      { label: 'Members served',         value: '350,000+' },
      { label: 'Business units unified',  value: '4'        },
    ],
    deliverables: ['Product Design', 'AI Workflow System', 'Rules Engine', 'Agentic Automation'],
  },
  {
    year: '2024',
    category: 'Public Health · AI Case Management',
    client: 'CMA Global',
    title: 'HANDS AI — AI-Powered Case Management for Family Services',
    description:
      'An AI-powered assistant for family support caseworkers that surfaces the highest-risk families every morning — with a plain-language explanation for every flag. Caseworkers can ask questions across their entire caseload in natural language instead of navigating fragmented systems, turning reactive record-keeping into proactive, focused care.',
    stats: [
      { label: 'Caseload prioritization', value: 'Daily' },
      { label: 'Risk flags',              value: 'Explained' },
    ],
    deliverables: ['Product Design', 'AI Case Management', 'Risk Intelligence', 'Natural Language Search'],
  },
  {
    year: '2022–2023',
    category: 'Education · Data Intelligence Platform',
    client: 'NYC Department of Education',
    title: 'Insight AI — Student Data Intelligence for NYC Schools',
    description:
      'A data intelligence platform that transformed fragmented student data into actionable dashboards for New York City\'s public school system. Principals, teachers, and counselors can now surface trends across attendance, achievement, course access, and discipline — and coordinate on interventions — without manually reconciling spreadsheets.',
    stats: [
      { label: 'NYC schools served',   value: '1,800+' },
      { label: 'Data domains unified', value: '4'      },
    ],
    deliverables: ['Product Design', 'Data Visualization', 'Analytics Platform'],
  },
  {
    year: '2022',
    category: 'Enterprise · Media Operations',
    client: 'NBCUniversal',
    title: 'Data Mesh — Real-Time Observability for Global Content Distribution',
    description:
      'A unified observability platform for NBCUniversal\'s Network Operations Center that brought linear, cable, and streaming distribution monitoring into a single real-time view. Engineers went from piecing together incidents across a patchwork of siloed tools to detecting and triaging problems in one place — before viewers are affected.',
    stats: [
      { label: 'Platforms unified',  value: '3'         },
      { label: 'Signal aggregation', value: 'Real-time' },
    ],
    deliverables: ['Product Design', 'Observability Platform', 'Real-Time Monitoring'],
  },
  {
    year: '2020–2021',
    category: 'Enterprise · Internal Tooling',
    client: 'Verizon',
    title: 'My Project Inbox — Engineering Coordination Platform',
    description:
      'A shared coordination platform that replaced scattered spreadsheets, email threads, and tracking tools across Verizon\'s engineering organization with a single project inbox. Every contributor could see exactly what they owned, what was blocking them, and who was involved — across every active project at once.',
    stats: [
      { label: 'Projects unified',         value: '60+' },
      { label: 'Tool categories replaced',  value: '3'   },
    ],
    deliverables: ['Product Design', 'UI Infrastructure', 'Internal Tooling'],
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
                  {p.category} · {p.year}
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

                <div className="flex flex-wrap gap-2">
                  {p.deliverables.map((d) => (
                    <span
                      key={d}
                      className="inline-flex items-center h-[26px] px-3 rounded-full border border-[var(--color-border)] font-[var(--font-mono)] text-[10px] tracking-[0.08em] uppercase text-[var(--color-text-tertiary)]"
                    >
                      {d}
                    </span>
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
