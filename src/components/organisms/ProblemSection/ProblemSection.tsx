'use client';

import Link from 'next/link';
import { cn } from '@/lib/cn';

const CONTENT = {
  eyebrow: "We've lived this — here's what we know",
  headline: "These problems aren't new.\nWe had them too.",
  description:
    "Before we built ADL, we were on the other side — scaling startups, burning runway on agency retainers, watching engineers waste sprints translating Figma files nobody asked them to translate. We've lived every one of these problems. That's why we stopped outsourcing the solution and built our own.",
  cards: [
    {
      number: '01',
      title: 'Your engineers are deciphering Figma files instead of shipping features.',
      detail:
        "We've sat in the sprint retros where this comes up. Every quarter, your engineering team loses 350+ hours to design translation — not building, not shipping, just deciphering. We built AI that eliminates this entirely. Not by generating sloppy code your team has to fix, but by producing components your senior engineers actually approve.",
    },
    {
      number: '02',
      title: 'Enterprise buyers are noticing what your team has learned to ignore.',
      detail:
        'The missing loading state. The table that chokes at 500 rows. The inconsistent spacing between screens. We\'ve watched founders lose six-figure deals over details like these — because we\'ve been the founders losing those deals. Your product works. But "works" and "wins enterprise contracts" are different standards.',
    },
    {
      number: '03',
      title: "Design debt is compounding while you're focused on features.",
      detail:
        "We've made the \"we'll fix it later\" decision. Every founder has. Six months later, your engineers are afraid to touch the UI, your design system is a graveyard of half-adopted components, and the rewrite conversation starts. We built tools that prevent this from happening — because we learned the hard way what it costs when it does.",
    },
    {
      number: '04',
      title: "Traditional agencies aren't built for how startups actually work.",
      detail:
        "We've hired them. $50K+ for Figma files your engineers have to rebuild anyway. Three-month timelines when you needed it in three weeks. Beautiful portfolios, zero understanding of what it's like to ship under runway pressure. The agency model was built for enterprises with procurement teams, not founders burning cash.",
    },
    {
      number: '05',
      title: 'Most "AI-powered" tools generate code nobody wants to deploy.',
      detail:
        "We've tried them all. Anima, Locofy, Builder.io — they get you 70% of the way there, and your engineers spend longer fixing the output than they would have spent building from scratch. That's not AI-powered delivery. That's AI-powered technical debt. We built something different because the market didn't.",
    },
  ],
  transition:
    "We didn't start ADL because we saw a market opportunity. We started it because we lived these problems as founders and couldn't find anyone who solved them properly — so we built the AI to do it ourselves.",
};

export function ProblemSection() {
  const [line1, line2] = CONTENT.headline.split('\n');

  return (
    <section
      id="pain-points"
      className="relative py-24 md:py-32 bg-[var(--color-bg-secondary)]"
    >
      <div className="max-w-[var(--container-wide)] mx-auto px-6 lg:px-8">
        <header className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <span className="inline-block font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)] mb-5">
            {CONTENT.eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.025em] text-[var(--color-text-primary)] leading-[1.1]">
            {line1}
            <br />
            <span className="text-[var(--color-accent)]">{line2}</span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
            {CONTENT.description}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {CONTENT.cards.map((card) => (
            <article
              key={card.number}
              className={cn(
                'group relative p-7 rounded-xl',
                'bg-[var(--color-bg-elevated)] border border-[var(--color-border)]',
                'hover:border-[var(--color-accent)] hover:bg-[var(--color-bg-tertiary)]',
                'transition-colors duration-200'
              )}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="font-[var(--font-mono)] text-[12px] uppercase tracking-[0.18em] text-[var(--color-accent)]">
                  {card.number}
                </span>
                <span className="h-px flex-1 bg-[var(--color-border)] group-hover:bg-[var(--color-accent-muted)] transition-colors" />
              </div>
              <h3 className="text-lg lg:text-xl font-medium text-[var(--color-text-primary)] leading-snug mb-3">
                {card.title}
              </h3>
              <p className="text-sm md:text-base text-[var(--color-text-secondary)] leading-relaxed">
                {card.detail}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-20 max-w-3xl mx-auto text-center">
          <p className="text-base md:text-lg text-[var(--color-text-secondary)] italic">
            {CONTENT.transition}
          </p>
          <Link
            href="#about"
            className={cn(
              'inline-flex items-center gap-2 mt-8 h-11 px-6 rounded-md',
              'bg-[var(--color-accent)] text-[var(--color-text-on-accent)]',
              'font-medium text-sm',
              'hover:bg-[var(--color-accent-hover)] hover:shadow-[var(--shadow-glow)] transition-all duration-150'
            )}
          >
            See how we work
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
