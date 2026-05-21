'use client';

import { useSectionVersion } from '@/context/ContentVersionContext';
import { cn } from '@/lib/cn';

// V1 Content (Main Branch)
const V1_CONTENT = {
  eyebrow: 'Why Teams Come to Us',
  headline: "You're not behind.\nYou're building without the right foundation.",
  description: "Most B2B startups don't have a design problem. They have an infrastructure problem — and it shows up in ways that compound quietly until they can't be ignored.",
  cards: [
    {
      number: '01',
      title: 'Your engineers are deciphering Figma files instead of shipping features.',
      detail: "Every hour spent decoding design specs is an hour not spent on your product. At 10 engineers, that's 350+ hours per quarter lost to translation. At 50 engineers, the math gets ugly.",
    },
    {
      number: '02',
      title: "Enterprise buyers are noticing what you've learned to ignore.",
      detail: "The missing loading state. The inconsistent spacing. The table that freezes at 500 rows. At Seed, these are TODO comments. By Series B, they're the reason your enterprise deal just went dark.",
    },
    {
      number: '03',
      title: 'Design debt compounds faster than your runway shrinks.',
      detail: '"We\'ll fix it later" becomes six months of engineers afraid to touch the UI. Then it becomes a rewrite. Then it becomes a reason your Series B takes longer than it should.',
    },
    {
      number: '04',
      title: "Traditional agencies aren't built to scale with you.",
      detail: "They deliver Figma files at $50K+ and disappear. Your engineers rebuild everything anyway. The cycle repeats every time you need to move fast—and startups always need to move fast.",
    },
    {
      number: '05',
      title: 'A design system nobody uses is worse than no design system at all.',
      detail: "Documentation nobody reads. Components nobody trusts. Now your team builds around the system instead of with it—and you're paying for maintenance on infrastructure that creates more friction than it solves.",
    },
  ],
  transition: '',
};

// V2 Content (AI-First Rebrand)
const V2_CONTENT = {
  eyebrow: "We've Lived This. Here's What We Know.",
  headline: "These problems aren't new.\nWe had them too.",
  description: "Before we built ADL, we were on the other side — scaling startups, burning runway on agency retainers, watching engineers waste sprints translating Figma files nobody asked them to translate. We've lived every one of these problems. That's why we stopped outsourcing the solution and built our own.",
  cards: [
    {
      number: '01',
      title: 'Your engineers are deciphering Figma files instead of shipping features.',
      detail: "We've sat in the sprint retros where this comes up. Every quarter, your engineering team loses 350+ hours to design translation — not building, not shipping, just deciphering. We built AI that eliminates this entirely. Not by generating sloppy code your team has to fix, but by producing components your senior engineers actually approve.",
    },
    {
      number: '02',
      title: "Enterprise buyers are noticing what your team has learned to ignore.",
      detail: 'The missing loading state. The table that chokes at 500 rows. The inconsistent spacing between screens. We\'ve watched founders lose six-figure deals over details like these — because we\'ve been the founders losing those deals. Your product works. But "works" and "wins enterprise contracts" are different standards.',
    },
    {
      number: '03',
      title: "Design debt is compounding while you're focused on features.",
      detail: "We've made the \"we'll fix it later\" decision. Every founder has. Six months later, your engineers are afraid to touch the UI, your design system is a graveyard of half-adopted components, and the rewrite conversation starts. We built tools that prevent this from happening in the first place — because we learned the hard way what it costs when it does.",
    },
    {
      number: '04',
      title: "Traditional agencies aren't built for how startups actually work.",
      detail: "We've hired them. $50K+ for Figma files your engineers have to rebuild anyway. Three-month timelines when you needed it in three weeks. Beautiful portfolios, zero understanding of what it's like to ship under runway pressure. The agency model was built for enterprises with procurement teams, not founders burning cash.",
    },
    {
      number: '05',
      title: 'Most "AI-powered" tools generate code nobody wants to deploy.',
      detail: "We've tried them all. Anima, Locofy, Builder.io — they get you 70% of the way there, and your engineers spend longer fixing the output than they would have spent building from scratch. That's not AI-powered delivery. That's AI-powered technical debt. We built something different because the market didn't.",
    },
  ],
  transition: "We didn't start ADL because we saw a market opportunity. We started it because we lived these problems as founders and couldn't find anyone who solved them properly — so we built the AI to do it ourselves. Here's how it works.",
};

export function ProblemSection() {
  const version = useSectionVersion('home-problem');
  const content = version === 'v1' ? V1_CONTENT : V2_CONTENT;
  const [line1, line2] = content.headline.split('\n');

  return (
    <section id="pain-points" className="py-20 md:py-28 bg-[var(--color-bg-secondary)] relative">
      {/* Version indicator */}
      <div className="absolute top-4 right-4 z-10">
        <span className={cn(
          'px-2 py-1 text-[10px] font-medium uppercase tracking-wider rounded',
          version === 'v1' ? 'bg-blue-600 text-white' : 'bg-green-600 text-white'
        )}>
          {version === 'v1' ? 'V1' : 'V2'}
        </span>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <header className="text-center mb-16">
          <span className="inline-block text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-secondary)] mb-4">
            {content.eyebrow}
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-[-0.02em] text-[var(--color-text-primary)] leading-tight">
            {line1}<br />
            <span className="text-[var(--color-accent)]">{line2}</span>
          </h2>
          <p className="mt-6 text-base text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            {content.description}
          </p>
        </header>

        {/* Problem Cards - Responsive CSS Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--color-border)]"
          style={{ border: '1px solid var(--color-border)' }}
        >
          {content.cards.map((item, index) => (
            <article
              key={index}
              className="bg-[var(--color-bg-elevated)] p-6 lg:p-8 flex flex-col"
            >
              <span className="text-sm font-medium tracking-[0.15em] text-[var(--color-text-secondary)] mb-4">
                {item.number}
              </span>
              <h3 className="text-base lg:text-lg font-medium text-[var(--color-text-primary)] leading-snug mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                {item.detail}
              </p>
            </article>
          ))}
        </div>

        {/* Transition text */}
        {content.transition && (
          <div className="mt-16 pt-16 border-t border-[var(--color-border)]">
            <p className="text-center text-base md:text-lg text-[var(--color-text-secondary)] max-w-3xl mx-auto">
              {content.transition}
            </p>
          </div>
        )}

        {/* About Us Button */}
        <div className="mt-12 text-left">
          <a
            href="#about"
            className={cn(
              'inline-flex items-center justify-center gap-2',
              'px-6 py-3 text-sm',
              'font-medium tracking-[0.05em] uppercase',
              'bg-[var(--color-text-primary)] text-[var(--color-bg-primary)]',
              'hover:bg-[var(--color-text-secondary)]',
              'transition-colors duration-150'
            )}
          >
            About Us
          </a>
        </div>
      </div>
    </section>
  );
}
