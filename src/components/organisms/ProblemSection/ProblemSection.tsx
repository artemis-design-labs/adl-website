'use client';

const problemCards = [
  {
    number: '01',
    title: 'Your engineers are translating Figma files instead of shipping features.',
    detail: 'Every hour spent decoding design specs is an hour not spent on your product. At 10 engineers, that\'s 350+ hours per quarter lost to translation. At 50 engineers, the math gets ugly.',
  },
  {
    number: '02',
    title: 'Enterprise buyers are noticing what you\'ve learned to ignore.',
    detail: 'The missing loading state. The inconsistent spacing. The table that freezes at 500 rows. At Seed, these are TODO comments. By Series B, they\'re the reason your enterprise deal just went dark.',
  },
  {
    number: '03',
    title: 'Design debt compounds faster than your runway shrinks.',
    detail: '"We\'ll fix it later" becomes six months of engineers afraid to touch the UI. Then it becomes a rewrite. Then it becomes a reason your Series B takes longer than it should.',
  },
  {
    number: '04',
    title: 'Traditional agencies aren\'t built to scale with you.',
    detail: 'They deliver Figma files at $50K+ and disappear. Your engineers rebuild everything anyway. The cycle repeats every time you need to move fast—and startups always need to move fast.',
  },
  {
    number: '05',
    title: 'A design system nobody uses is worse than no design system at all.',
    detail: 'Documentation nobody reads. Components nobody trusts. Now your team builds around the system instead of with it—and you\'re paying for maintenance on infrastructure that creates more friction than it solves.',
  },
];

export function ProblemSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-[var(--color-bg-secondary)]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <header className="text-center mb-16">
          <span className="inline-block text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-4">
            From Inconvenience to Emergency
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-[-0.02em] text-[var(--color-text-primary)] leading-tight">
            This is what&apos;s slowing you down.<br />
            And it&apos;s getting worse.
          </h2>
          <p className="mt-6 text-base text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Design-dev friction follows your growth curve—except it compounds faster. We&apos;ve mapped the patterns across hundreds of startups and built the infrastructure to break the cycle.
          </p>
        </header>

        {/* Problem Cards - Responsive CSS Grid */}
        {/* Mobile: 1 col | Tablet: 2 cols | Desktop: 3 cols */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--color-border)]"
          style={{ border: '1px solid var(--color-border)' }}
        >
          {problemCards.map((item, index) => (
            <article
              key={index}
              className="bg-[var(--color-bg-elevated)] p-6 lg:p-8 flex flex-col"
            >
              {/* Number indicator - visually secondary */}
              <span className="text-[10px] font-medium tracking-[0.15em] text-[var(--color-text-muted)] mb-4">
                {item.number}
              </span>

              {/* Headline - dominant */}
              <h3 className="text-base lg:text-lg font-medium text-[var(--color-text-primary)] leading-snug mb-3">
                {item.title}
              </h3>

              {/* Body text - subdued */}
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                {item.detail}
              </p>
            </article>
          ))}
        </div>

        {/* Transition text */}
        <div className="mt-16 pt-16 border-t border-[var(--color-border)]">
          <p className="text-center text-base md:text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            These problems are predictable. They don&apos;t require more headcount to solve—they require better infrastructure. That&apos;s why we built ours differently.
          </p>
        </div>
      </div>
    </section>
  );
}
