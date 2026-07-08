import type { Metadata } from 'next';
import Link from 'next/link';
import { CTASection } from '@/components/organisms/CTASection';

export const metadata: Metadata = {
  title: 'HANDS AI — WIC Case Management',
  description:
    'How ADL designed Emma — an AI assistant that tells WIC caseworkers which of their 250 families need help today, before they slip through the cracks.',
};

const FEATURES = [
  {
    num: '01',
    title: 'Predictive Risk Queue',
    description:
      'Every morning, Emma calculates a risk score for every enrolled family — based on missed appointments, benefit redemption patterns, approaching deadlines, and communication signals. Caseworkers see a prioritized queue with plain-language explanations for every flag. No intuition required.',
  },
  {
    num: '02',
    title: 'Natural Language Search',
    description:
      'Instead of filtering through disconnected systems, caseworkers ask questions in plain language: "Which families have children turning one next month who haven\'t scheduled recertification?" Emma queries across all data sources and returns ranked, context-rich results in seconds.',
  },
  {
    num: '03',
    title: 'Supervisor Visibility',
    description:
      'Clinic supervisors see risk distribution across all caseworkers and locations — identifying which families across the entire operation need attention, which caseworkers carry disproportionate burden, and where to allocate limited supervisory time.',
  },
];

export default function HandsAIPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="bg-[var(--color-bg-dark)] pt-28 md:pt-40 pb-16 md:pb-24">
        <div className="max-w-[var(--container-max)] mx-auto px-10 lg:px-20">
          <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)] mb-5">
            › Public Healthcare · AI Platform
          </p>
          <h1 className="text-[clamp(2.25rem,5vw,4rem)] font-bold leading-[1.05] tracking-[-0.04em] text-white mb-6 max-w-[700px]">
            Predictive intelligence<br className="hidden md:block" /> for 6 million families.
          </h1>
          <p className="text-[17px] text-[#a0a0a0] leading-[1.65] mb-12 max-w-[520px]">
            Emma, the AI assistant ADL designed for HANDS AI, tells WIC caseworkers which of
            their 250 families need help today — before they slip through the cracks.
          </p>
          <div className="grid grid-cols-3 gap-px bg-[#2a2a2a] rounded-[8px] overflow-hidden max-w-[460px]">
            {[
              { value: '40%',  label: 'Faster case prep' },
              { value: '30%',  label: 'Better intervention' },
              { value: '6',    label: 'Health departments' },
            ].map((s) => (
              <div key={s.label} className="bg-[#1e1e1e] px-5 py-6">
                <p className="text-[1.875rem] font-bold text-white leading-none tracking-[-0.04em] mb-1">
                  {s.value}
                </p>
                <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.12em] text-[#606060]">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Project Brief ──────────────────────────────────────────────────── */}
      <section className="bg-[var(--color-bg-elevated)] border-b border-[var(--color-border)] py-16 md:py-20">
        <div className="max-w-[var(--container-max)] mx-auto px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)] mb-6">
                › The Brief
              </p>
              <p className="text-[18px] md:text-[20px] text-[var(--color-text-primary)] leading-[1.6] font-light">
                WIC serves 6.2 million women, infants, and children across America — delivering
                $1.77 in healthcare savings for every dollar spent. But the families who need
                it most are the ones most likely to quietly disengage.
              </p>
              <p className="text-[16px] text-[var(--color-text-secondary)] leading-[1.7] mt-5">
                Caseworkers managing 200–300 active cases had no systematic way to identify who
                needed urgent attention. HANDS AI asked ADL to design the intelligence layer
                that would change that.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="space-y-0 divide-y divide-[var(--color-border)]">
                {[
                  { label: 'Client',       value: 'HANDS AI' },
                  { label: 'Domain',       value: 'Public Healthcare' },
                  { label: 'End Users',    value: 'WIC Caseworkers & Supervisors' },
                  { label: 'Deployment',   value: '6 U.S. Health Departments' },
                  { label: 'Program Scale','value': '6.2M families served annually' },
                ].map((item) => (
                  <div key={item.label} className="flex items-baseline gap-4 py-4">
                    <span className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.12em] text-[var(--color-text-tertiary)] w-28 flex-shrink-0">
                      {item.label}
                    </span>
                    <span className="text-[14px] text-[var(--color-text-primary)]">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Problem ──────────────────────────────────────────────────────────── */}
      <section className="bg-[var(--color-bg-primary)] border-b border-[var(--color-border)] py-16 md:py-24">
        <div className="max-w-[var(--container-max)] mx-auto px-10 lg:px-20">
          <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)] mb-6">
            › The Problem
          </p>
          <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold leading-[1.1] tracking-[-0.03em] text-[var(--color-text-primary)] mb-6 max-w-[680px]">
            "Of the 250 families in my caseload,<br className="hidden lg:block" /> who needs my help most urgently today?"
          </h2>
          <p className="text-[16px] md:text-[17px] text-[var(--color-text-secondary)] leading-[1.7] max-w-[620px] mb-14">
            The data existed across appointment histories, benefit utilization records, health
            screenings, and communication logs — spread across multiple disconnected systems.
            Nothing translated it into a clear answer. Caseworkers defaulted to whoever called,
            whoever had an appointment, or whoever happened to be visible. Families in genuine
            crisis stayed invisible until it was too late.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                stat: '80%',
                label: 'Time on admin',
                desc: 'Caseworkers spent most of their day on administrative tasks — leaving only fragmented moments for actual family support.',
              },
              {
                stat: '15 min',
                label: 'Per case review',
                desc: 'Preparing for a single family required clicking through four disconnected systems to piece together a complete picture.',
              },
              {
                stat: '>40%',
                label: 'Burnout rate',
                desc: 'Caseworker burnout exceeded 40%, driven by the frustration of not reaching struggling families before they fell out of the program.',
              },
            ].map((item) => (
              <div
                key={item.stat}
                className="p-6 bg-[var(--color-bg-elevated)] rounded-[8px] border border-[var(--color-border)]"
              >
                <p className="text-[2.25rem] font-bold text-[var(--color-accent)] leading-none tracking-[-0.04em] mb-2">
                  {item.stat}
                </p>
                <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.12em] text-[var(--color-text-tertiary)] mb-3">
                  {item.label}
                </p>
                <p className="text-[14px] text-[var(--color-text-secondary)] leading-[1.65]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Solution ──────────────────────────────────────────────────────── */}
      <section className="bg-[var(--color-bg-elevated)] border-b border-[var(--color-border)] py-16 md:py-24">
        <div className="max-w-[var(--container-max)] mx-auto px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)] mb-6">
                › The Solution
              </p>
              <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-[1.1] tracking-[-0.03em] text-[var(--color-text-primary)] mb-6">
                Emma — from reactive<br className="hidden md:block" /> to proactive.
              </h2>
              <p className="text-[16px] md:text-[17px] text-[var(--color-text-secondary)] leading-[1.7] mb-5">
                ADL designed Emma, an AI assistant that continuously analyzes participant data
                to surface the families most at risk of program disengagement — before problems
                escalate. Each morning, caseworkers see a prioritized queue with clear
                explanations for every flag.
              </p>
              <p className="text-[15px] text-[var(--color-text-tertiary)] leading-[1.7]">
                Emma doesn't replace caseworker judgment. It gives caseworkers the intelligence
                to focus their limited time on the families who need them most — while the
                predictive model gets smarter with every interaction.
              </p>
            </div>
            <div className="w-full aspect-[4/3] rounded-[8px] bg-[var(--color-bg-inset)] border border-[var(--color-border)] flex items-end p-5">
              <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.14em] text-[var(--color-text-tertiary)]">
                Emma · Morning Priority Queue
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ──────────────────────────────────────────────────────── */}
      <section className="bg-[var(--color-bg-primary)] border-b border-[var(--color-border)] py-16 md:py-24">
        <div className="max-w-[var(--container-max)] mx-auto px-10 lg:px-20">
          <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)] mb-6">
            › Core Capabilities
          </p>
          <h2 className="text-[clamp(1.5rem,2.5vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.03em] text-[var(--color-text-primary)] mb-14 max-w-[520px]">
            Three surfaces. One clear answer.
          </h2>
          <div className="divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
            {FEATURES.map((f) => (
              <div
                key={f.num}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 py-10"
              >
                <div className="lg:col-span-1">
                  <span className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)]">
                    {f.num}
                  </span>
                </div>
                <div className="lg:col-span-4">
                  <h3 className="text-[17px] font-bold text-[var(--color-text-primary)] leading-snug">
                    {f.title}
                  </h3>
                </div>
                <div className="lg:col-span-7">
                  <p className="text-[15px] text-[var(--color-text-secondary)] leading-[1.7]">
                    {f.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Outcome ──────────────────────────────────────────────────────── */}
      <section className="bg-[var(--color-bg-dark)] py-16 md:py-24">
        <div className="max-w-[var(--container-max)] mx-auto px-10 lg:px-20">
          <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)] mb-6">
            › The Outcome
          </p>
          <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-[1.1] tracking-[-0.03em] text-white mb-12 max-w-[520px]">
            From firefighting to foresight.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
            {[
              {
                value: '40%',
                label: 'Reduction in case prep',
                detail: 'From 15 minutes to under 1 minute per family.',
              },
              {
                value: '30%',
                label: 'Better early intervention',
                detail: 'Caseworkers shifted from reactive response to proactive outreach.',
              },
              {
                value: '<1 min',
                label: 'Per case review',
                detail: 'A complete family summary with risk factors surfaced instantly.',
              },
              {
                value: '6',
                label: 'Departments deployed',
                detail: 'Production system live across U.S. health departments.',
              },
            ].map((m) => (
              <div key={m.label} className="border-t border-[#2a2a2a] pt-6">
                <p className="text-[2.5rem] font-bold text-white leading-none tracking-[-0.04em] mb-2">
                  {m.value}
                </p>
                <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.12em] text-[var(--color-accent)] mb-3">
                  {m.label}
                </p>
                <p className="text-[13px] text-[#707070] leading-[1.65]">{m.detail}</p>
              </div>
            ))}
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 font-[var(--font-mono)] text-[12px] uppercase tracking-[0.14em] text-[var(--color-accent)] hover:text-white transition-colors duration-150"
          >
            ← Back to all work
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}
