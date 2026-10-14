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
      'One case system for pension administration across all four NYCERS business units, serving more than 350,000 members. Cases that used to need manual hand-offs between units now route themselves, and AI checks every tier, eligibility and benefit decision against the rules — with each answer traceable to the law it came from. Designed and built end-to-end for work where a wrong answer is permanent.',
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
      'An AI assistant for caseworkers who each carry 250+ families. Every morning it ranks the families most at risk of slipping through the cracks and explains every flag in plain language. Caseworkers search across what used to be four disconnected systems by simply asking a question, and every answer shows where it came from. Live across six health departments. Designed, built and governed end-to-end.',
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
      'An analytics platform for the country\'s largest public school system. It turns scattered data on attendance, achievement, course access and discipline into clear visual stories that principals and teachers can act on. Teams annotate and share the same views, so everyone agrees on the numbers before deciding on an intervention. Its reusable building blocks were adopted across 15+ data products. Platform, system and rollout playbook delivered end-to-end.',
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
      'A real-time operations view for NBCUniversal\'s media supply chain. Delays, volume and errors across linear, cable and streaming distribution come together on one screen, so the network operations team can spot, prioritize and resolve incidents before viewers notice. Designed end-to-end, from how the data is structured to the screen an engineer sees mid-incident. Designed for the 3am call.',
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
      'One shared coordination platform for Verizon\'s engineering organization, replacing a sprawl of personal spreadsheets, one-off trackers and lost email threads. Every contributor sees what they own, what\'s blocking them and who else is involved; leadership sees every active project at once, with a blocker list they can trust. Fewer dropped tasks, more predictable delivery dates. Defined, designed and built end-to-end.',
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
