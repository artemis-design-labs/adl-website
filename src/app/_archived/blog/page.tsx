import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Design infrastructure insights, UI engineering deep-dives, and founder-to-founder perspective from the team at Artemis Design Labs.',
};

const CATEGORIES = [
  'All',
  'Design Process',
  'Product Strategy',
  'UX Research',
  'Design Systems',
  'Case Studies',
];

const FEATURED_POST = {
  category: 'Design Process',
  date: 'June 12, 2025',
  readTime: '8 min read',
  title: 'Why we always start with user flows, not wireframes',
  excerpt:
    "Most design teams jump straight to screens. We've found that starting with user flows catches 60% of design problems before a single wireframe is drawn — and saves weeks of rework downstream.",
  author: 'By the Artemis Design Labs Team',
};

const POSTS = [
  {
    category: 'Design Systems',
    title: 'Why Your Design System Breaks at Scale',
    date: 'Jun 2026',
    readTime: '8 min read',
  },
  {
    category: 'AI Infrastructure',
    title: 'The AI-Assisted Component Pipeline We Built for a Series B Team',
    date: 'May 2026',
    readTime: '12 min read',
  },
  {
    category: 'Governance',
    title: 'Token Drift Is Costing You More Than You Think',
    date: 'Apr 2026',
    readTime: '6 min read',
  },
  {
    category: 'Product Strategy',
    title: 'When Design Systems Become a Competitive Moat',
    date: 'Mar 2026',
    readTime: '9 min read',
  },
  {
    category: 'UX Research',
    title: 'The Hidden Cost of Component Inconsistency',
    date: 'Feb 2026',
    readTime: '7 min read',
  },
  {
    category: 'Case Studies',
    title: 'HANDS AI: A WIC Platform Shipped in Three Weeks',
    date: 'Jan 2026',
    readTime: '10 min read',
  },
];

const ImagePlaceholder = ({ className }: { className?: string }) => (
  <div
    className={`flex items-center justify-center bg-[var(--color-bg-elevated)] border border-[var(--color-border)] ${className ?? ''}`}
  >
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-[var(--color-text-tertiary)]"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21 15 16 10 5 21" />
    </svg>
  </div>
);

export default function BlogPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="bg-[var(--color-bg-primary)] pt-28 md:pt-40 pb-14 md:pb-20 border-b border-[var(--color-border)]">
        <div className="max-w-[var(--container-max)] mx-auto px-10 lg:px-20">
          <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)] mb-5">
            › Insights
          </p>
          <h1
            className="text-[clamp(2.5rem,5vw,3.75rem)] font-bold leading-[1.08] tracking-[-0.035em]
            text-[var(--color-text-primary)] max-w-[640px] mb-5"
          >
            Design infrastructure thinking<br />from the ADL team.
          </h1>
          <p className="text-[16px] text-[var(--color-text-secondary)] leading-[1.6] max-w-[480px]">
            Essays, frameworks, and lessons from building AI-native design systems.
          </p>
        </div>
      </section>

      {/* ── Filter tabs ──────────────────────────────────────────────────────── */}
      <div className="bg-[var(--color-bg-primary)] border-b border-[var(--color-border)] sticky top-0 z-10">
        <div className="max-w-[var(--container-max)] mx-auto px-10 lg:px-20">
          <div className="flex gap-8 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
            {CATEGORIES.map((cat, i) => (
              <span
                key={cat}
                className={[
                  'relative py-4 font-[var(--font-mono)] text-[12px] uppercase tracking-[0.12em] whitespace-nowrap cursor-pointer transition-colors duration-150',
                  i === 0
                    ? 'text-[var(--color-text-primary)]'
                    : 'text-[var(--color-text-tertiary)] hover:text-[var(--color-text-secondary)]',
                ].join(' ')}
              >
                {cat}
                {i === 0 && (
                  <span
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-[var(--color-accent)]"
                    aria-hidden="true"
                  />
                )}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Featured post ─────────────────────────────────────────────────────── */}
      <section className="bg-[var(--color-bg-elevated)] border-b border-[var(--color-border)] py-12 md:py-16">
        <div className="max-w-[var(--container-max)] mx-auto px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <ImagePlaceholder className="w-full aspect-[16/9] rounded-xl" />
            <div>
              <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)] mb-1">
                {FEATURED_POST.category}
              </p>
              <p className="font-[var(--font-mono)] text-[11px] text-[var(--color-text-tertiary)] tracking-[0.1em] mb-6">
                {FEATURED_POST.date} · {FEATURED_POST.readTime}
              </p>
              <h2
                className="text-[clamp(1.5rem,2.5vw,2.25rem)] font-bold leading-[1.15] tracking-[-0.03em]
                text-[var(--color-text-primary)] mb-5"
              >
                {FEATURED_POST.title}
              </h2>
              <p className="text-[14px] text-[var(--color-text-secondary)] leading-[1.7] mb-6">
                {FEATURED_POST.excerpt}
              </p>
              <p className="text-[13px] text-[var(--color-text-tertiary)] mb-3">
                {FEATURED_POST.author}
              </p>
              <a
                href="#"
                className="font-[var(--font-mono)] text-[13px] text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors duration-150"
              >
                Read article →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Post grid ─────────────────────────────────────────────────────────── */}
      <section className="bg-[var(--color-bg-primary)] py-16 md:py-24">
        <div className="max-w-[var(--container-max)] mx-auto px-10 lg:px-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {POSTS.map((post) => (
              <article key={post.title} className="group cursor-pointer">
                <ImagePlaceholder
                  className="w-full aspect-[4/3] rounded-xl mb-5 group-hover:border-[var(--color-accent)] transition-colors duration-150"
                />
                <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.14em] text-[var(--color-accent)] mb-2">
                  {post.category}
                </p>
                <h3
                  className="text-[15px] font-bold leading-[1.4] tracking-[-0.02em]
                  text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors duration-150 mb-3"
                >
                  {post.title}
                </h3>
                <p className="font-[var(--font-mono)] text-[11px] text-[var(--color-text-tertiary)]">
                  {post.date} · {post.readTime}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter ────────────────────────────────────────────────────────── */}
      <section className="bg-[var(--color-bg-elevated)] border-t border-[var(--color-border)] py-16 md:py-20">
        <div className="max-w-[var(--container-max)] mx-auto px-10 lg:px-20">
          <h2
            className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-[1.15] tracking-[-0.03em]
            text-[var(--color-text-primary)] max-w-[520px] mb-8"
          >
            Get design infrastructure thinking<br />delivered to your inbox.
          </h2>
          <form className="flex flex-col sm:flex-row gap-3 max-w-[480px]">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 h-[44px] px-4 rounded-[var(--radius-md)] bg-[var(--color-bg-primary)] border border-[var(--color-border)] text-[14px] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-tertiary)] focus:outline-none focus:border-[var(--color-accent)] transition-colors duration-150"
            />
            <button
              type="submit"
              className="h-[44px] px-6 rounded-[var(--radius-md)] bg-[var(--color-accent)] text-[var(--color-text-on-accent)] font-bold text-[14px] hover:bg-[var(--color-accent-hover)] transition-colors duration-150 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
