import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { cn } from '@/lib/cn';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Design infrastructure insights, UI engineering deep-dives, and founder-to-founder perspective from the team at Artemis Design Labs.',
};

const FEATURED = {
  id: 1,
  title: 'Design Trends 2024',
  summary:
    'Explore the latest in UI/UX design for web and mobile.',
  image: '/images/publication/design-trends.png',
  link: '#',
  category: 'Design Systems',
  readTime: '8 min read',
};

const ARTICLES = [
  {
    id: 2,
    title: 'Building with React',
    summary: 'A guide to building scalable web apps with React.',
    image: '/images/publication/react-guide.png',
    link: '#',
    category: 'Engineering',
    readTime: '6 min read',
  },
  {
    id: 3,
    title: 'Figma for Teams',
    summary: 'Collaborative workflows and best practices in Figma.',
    image: '/images/publication/figma-teams.png',
    link: '#',
    category: 'Workflow',
    readTime: '5 min read',
  },
  {
    id: 4,
    title: 'Accessibility in Design',
    summary: 'How to make your products accessible to everyone.',
    image: '/images/publication/accessibility.png',
    link: '#',
    category: 'Accessibility',
    readTime: '7 min read',
  },
  {
    id: 5,
    title: 'Design Systems 101',
    summary: 'Why every product team needs a design system.',
    image: '/images/publication/design-systems.png',
    link: '#',
    category: 'Design Systems',
    readTime: '10 min read',
  },
  {
    id: 6,
    title: 'Prototyping Fast',
    summary: 'Tips for rapid prototyping and iteration.',
    image: '/images/publication/prototyping.png',
    link: '#',
    category: 'Workflow',
    readTime: '4 min read',
  },
];

const CATEGORIES = ['All', 'Design Systems', 'Engineering', 'Workflow', 'Accessibility'];

export default function BlogPage() {
  return (
    <>
      {/* Hero — Semiflat editorial header */}
      <section className="bg-[var(--color-bg-primary)] pt-28 md:pt-40 pb-0">
        <div className="max-w-[var(--container-max)] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-end mb-12">
            <div>
              <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.14em] text-[var(--color-accent-text)] mb-7">
                ADL PUBLICATION · {ARTICLES.length + 1} ARTICLES
              </p>
              <h1 className="text-[clamp(3rem,7vw,5.5rem)] font-bold leading-[1.0] tracking-[-0.04em] text-[var(--color-text-primary)]">
                Design infrastructure<br />
                <span className="text-[var(--color-accent-text)]">in writing.</span>
              </h1>
            </div>
            <div className="flex flex-wrap gap-2 lg:pb-2">
              {CATEGORIES.map((cat) => (
                <span
                  key={cat}
                  className={cn(
                    'inline-flex items-center px-3.5 py-1.5 rounded-[var(--radius-full)]',
                    'font-[var(--font-mono)] text-[11px] uppercase tracking-[0.1em] cursor-default',
                    cat === 'All'
                      ? 'bg-[var(--color-accent)] text-white'
                      : 'bg-[var(--color-bg-elevated)] border border-[var(--color-border)] text-[var(--color-text-tertiary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent-text)] transition-colors'
                  )}
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
          <div className="border-t border-[var(--color-border)]" aria-hidden="true" />
        </div>
      </section>

      {/* Featured article — Wandr Studio 50/50 large card */}
      <section className="py-10 bg-[var(--color-bg-primary)] border-b border-[var(--color-border)]">
        <div className="max-w-[var(--container-max)] mx-auto px-6 lg:px-8">
          <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.14em] text-[var(--color-accent-text)] mb-8">
            FEATURED
          </p>
          <Link
            href={FEATURED.link}
            className="group grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-[var(--radius-md)] overflow-hidden border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors block"
          >
            <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[360px] bg-[var(--color-bg-elevated)]">
              <Image
                src={FEATURED.image}
                alt={FEATURED.title}
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="bg-[var(--color-bg-elevated)] p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex items-center px-3 py-1 rounded-[var(--radius-xxs)] bg-[var(--color-accent-subtle)] font-[var(--font-mono)] text-[11px] uppercase tracking-[0.1em] text-[var(--color-accent-text)]">
                  {FEATURED.category}
                </span>
                <span className="font-[var(--font-mono)] text-[11px] text-[var(--color-text-tertiary)]">
                  {FEATURED.readTime}
                </span>
              </div>
              <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold leading-[1.1] tracking-[-0.03em] text-[var(--color-text-primary)] group-hover:text-[var(--color-accent-text)] transition-colors mb-4">
                {FEATURED.title}
              </h2>
              <p className="text-[15px] text-[var(--color-text-secondary)] leading-[1.6] mb-8">
                {FEATURED.summary}
              </p>
              <span className="inline-block font-bold text-[13px] text-[var(--color-accent-text)] group-hover:text-[var(--color-accent-hover)] transition-colors">
                Read article →
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Article grid — Semiflat 3-col editorial cards */}
      <section className="py-10 bg-[var(--color-bg-elevated)] border-b border-[var(--color-border)]">
        <div className="max-w-[var(--container-max)] mx-auto px-6 lg:px-8">
          <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.14em] text-[var(--color-accent-text)] mb-10">
            ALL ARTICLES
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ARTICLES.map((article) => (
              <Link
                key={article.id}
                href={article.link}
                className="group block bg-[var(--color-bg-primary)] border border-[var(--color-border)] rounded-[var(--radius-md)] overflow-hidden hover:border-[var(--color-accent)] transition-colors"
              >
                <div className="relative aspect-[16/9] bg-[var(--color-bg-inset)]">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={cn(
                      'inline-flex items-center px-2.5 py-1 rounded-[var(--radius-xxs)]',
                      'font-[var(--font-mono)] text-[10px] uppercase tracking-[0.1em]',
                      'bg-[var(--color-bg-elevated)] border border-[var(--color-border)] text-[var(--color-text-tertiary)]'
                    )}>
                      {article.category}
                    </span>
                    <span className="font-[var(--font-mono)] text-[10px] text-[var(--color-text-tertiary)]">
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="text-[16px] font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent-text)] transition-colors mb-2 leading-[1.3]">
                    {article.title}
                  </h3>
                  <p className="text-[13px] text-[var(--color-text-secondary)] leading-[1.6]">
                    {article.summary}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter — Semiflat centered section */}
      <section className="py-10 bg-[var(--color-bg-primary)] border-b border-[var(--color-border)]">
        <div className="max-w-[var(--container-max)] mx-auto px-6 lg:px-8">
          <div className="max-w-[600px] mx-auto text-center">
            <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.14em] text-[var(--color-accent-text)] mb-5">
              STAY CURRENT
            </p>
            <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.02] tracking-[-0.04em] text-[var(--color-text-primary)] mb-4">
              Design infrastructure<br />
              <span className="text-[var(--color-accent-text)]">insights, monthly.</span>
            </h2>
            <p className="text-[15px] text-[var(--color-text-secondary)] leading-[1.6] mb-10">
              One email a month. No fluff. Just what we&apos;re learning building governed UI infrastructure
              for enterprise B2B startups.
            </p>
            <Link
              href="/contact"
              className={cn(
                'inline-flex items-center justify-center gap-2 h-[44px] px-7 rounded-[var(--radius-md)]',
                'bg-[var(--color-accent)] text-white font-bold text-[14px]',
                'hover:bg-[var(--color-accent-hover)] hover:shadow-[var(--shadow-glow)]',
                'active:brightness-90 transition-all duration-150',
              )}
            >
              Subscribe →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA — Interactivism full-bleed accent banner */}
      <section className="bg-[var(--color-accent)]">
        <div className="max-w-[var(--container-max)] mx-auto px-6 lg:px-8 py-24 lg:py-32 flex flex-col items-center text-center">
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.0] tracking-[-0.04em] text-white max-w-[700px] mb-10">
            Ready to close<br />the gap?
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
            Free 30-minute UI infrastructure audit. Written drift score + three specific recommendations. No pitch deck, no commitment.
          </p>
        </div>
      </section>
    </>
  );
}
