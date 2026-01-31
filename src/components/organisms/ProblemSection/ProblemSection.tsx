'use client';

import { SectionHeader } from '@/components/molecules/SectionHeader';
import { cn } from '@/lib/cn';

const emotionalTruths = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    truth: 'Your engineers shouldn\'t be translating Figma files.',
    detail: 'They should be shipping features. Every hour spent deciphering design specs is an hour not spent on your product.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    truth: 'Enterprise buyers notice everything.',
    detail: 'The missing loading state. The inconsistent spacing. The table that freezes at 500 rows. These details kill deals.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    truth: 'Design debt compounds faster than you think.',
    detail: 'What starts as "we\'ll fix it later" becomes six months of engineers afraid to touch the UI.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    truth: 'You shouldn\'t need a $50K agency budget.',
    detail: 'Traditional agencies deliver Figma files and wish you luck. We deliver Figma AND React at a price that respects your runway.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    truth: 'The best design system is the one your team actually uses.',
    detail: 'We\'ve seen documentation nobody reads. Components nobody adopts. We build systems designed for adoption—not just delivery.',
  },
];

export function ProblemSection() {
  return (
    <section className="py-24 md:py-32 bg-[var(--color-bg-secondary)]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow="Sound familiar?"
          title="The design-dev friction that slows you down"
          description="These are the patterns we've seen at every startup scaling from Seed to Series C. We've felt these pressures ourselves."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {emotionalTruths.slice(0, 3).map((item, index) => (
            <div
              key={index}
              className={cn(
                'group p-6 rounded-xl',
                'bg-[var(--color-bg-elevated)] border border-[var(--color-border)]',
                'hover:border-[var(--color-accent)] transition-all duration-300',
                'hover:shadow-lg hover:shadow-[var(--color-accent)]/5'
              )}
            >
              <div className="w-12 h-12 rounded-lg bg-[var(--color-accent-subtle)] flex items-center justify-center text-[var(--color-accent)] mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">
                {item.truth}
              </h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {emotionalTruths.slice(3).map((item, index) => (
            <div
              key={index}
              className={cn(
                'group p-6 rounded-xl',
                'bg-[var(--color-bg-elevated)] border border-[var(--color-border)]',
                'hover:border-[var(--color-accent)] transition-all duration-300',
                'hover:shadow-lg hover:shadow-[var(--color-accent)]/5'
              )}
            >
              <div className="w-12 h-12 rounded-lg bg-[var(--color-accent-subtle)] flex items-center justify-center text-[var(--color-accent)] mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">
                {item.truth}
              </h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
