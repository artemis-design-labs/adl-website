import Link from 'next/link';
import type { Metadata } from 'next';
import { FeaturedWorkSection } from './FeaturedWorkSection';

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Case studies from teams that shipped design infrastructure with ADL. Real metrics, real outcomes, real engineering review.',
};

const METRICS = [
  { value: '40%',  label: 'Faster case processing',   sub: 'HANDS AI' },
  { value: '60%',  label: 'Decision time reduction',   sub: 'Insight' },
  { value: '94%',  label: 'First-PR approval rate',    sub: 'Average' },
  { value: '3–4',  label: 'Weeks to delivery',         sub: 'Average' },
];


export default function WorkPage() {
  return (
    <>
      {/* Hero — Interactivism full-width */}
      <section className="bg-[var(--color-bg-primary)] pt-28 md:pt-40 pb-0">
        <div className="max-w-[var(--container-max)] mx-auto px-6 lg:px-8">
          <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.14em] text-[var(--color-accent-text)] mb-7">
            SELECTED WORK · REAL OUTCOMES
          </p>
          <h1 className="text-[clamp(3rem,7vw,5.5rem)] font-bold leading-[1.0] tracking-[-0.04em] text-[var(--color-text-primary)] mb-10">
            Transformations,<br />
            <span className="text-[var(--color-accent-text)]">not just deliverables.</span>
          </h1>
          <p className="text-[16px] text-[var(--color-text-secondary)] leading-[1.6] max-w-[560px] mb-14 lg:mb-20">
            Every engagement starts with a real problem and ends with measurable impact.
            Here&apos;s some of what we&apos;ve shipped.
          </p>
          <div className="border-t border-[var(--color-border)]" aria-hidden="true" />
        </div>
      </section>

      {/* Metrics — Wandr Studio dark elevated cards */}
      <section className="py-10 bg-[var(--color-bg-elevated)] border-b border-[var(--color-border)]">
        <div className="max-w-[var(--container-max)] mx-auto px-6 lg:px-8">
          <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.14em] text-[var(--color-accent-text)] mb-8">
            RESULTS ACROSS ENGAGEMENTS
          </p>
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
                <div className="font-[var(--font-mono)] text-[11px] text-[var(--color-text-tertiary)] uppercase tracking-[0.1em]">
                  {m.sub}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FeaturedWorkSection />

      {/* CTA — Interactivism full-bleed accent banner */}
      <section className="bg-[var(--color-accent)]">
        <div className="max-w-[var(--container-max)] mx-auto px-6 lg:px-8 py-24 lg:py-32 flex flex-col items-center text-center">
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.0] tracking-[-0.04em] text-white max-w-[700px] mb-10">
            Want results<br />like these?
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
            No pitch deck. No pressure. Just a real conversation about what you&apos;re building
            and where it&apos;s stuck.
          </p>
        </div>
      </section>
    </>
  );
}
