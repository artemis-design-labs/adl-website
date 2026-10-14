import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { cn } from '@/lib/cn';
import { CTASection } from '@/components/organisms/CTASection';
import { INDUSTRIES, getIndustry } from '@/lib/industries';
import { BeforeAfterCarousel } from '@/components/atoms/BeforeAfterCarousel';
import { INDUSTRY_STRIPS } from './industryArt';

/**
 * One page per industry, reached from the "Industries" nav dropdown.
 *
 * Industries with `content` in src/lib/industries.ts render intro + services
 * and are indexable (sitemap.ts lists them). The rest are noindex placeholder
 * shells until their copy is written.
 */

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return INDUSTRIES.map(({ slug }) => ({ slug }));
}

// No `dynamicParams = false`: on Cloudflare (OpenNext, no incremental cache
// configured) a prerendered path is looked up in the cache, misses, and with
// fallback off that miss becomes a 404 for every industry. Unknown slugs
// still 404 through notFound() below.

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const industry = getIndustry((await params).slug);
  if (!industry) return {};
  return {
    title: `${industry.name} | Artemis Design Labs`,
    description: industry.content?.description,
    robots: industry.content ? undefined : { index: false, follow: true },
  };
}

const eyebrow =
  'font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)] mb-6';

export default async function IndustryPage({ params }: Props) {
  const industry = getIndustry((await params).slug);
  if (!industry) notFound();
  const { content } = industry;
  const strip = content && INDUSTRY_STRIPS[industry.slug];

  return (
    <>
      {/* ── Intro ─────────────────────────────────────────────────────────── */}
      <section className="bg-[var(--color-bg-primary)] pt-36 pb-20 md:pt-44 md:pb-28">
        <div
          className={cn(
            'max-w-[var(--container-max)] mx-auto px-10 lg:px-20',
            strip && 'grid grid-cols-1 items-center gap-12 lg:grid-cols-[7fr_3fr] lg:gap-16'
          )}
        >
          {/* 70% — copy */}
          <div>
            <p className={eyebrow}>Industries · {industry.name}</p>

            <h1
              className={cn(
                'text-[clamp(2.25rem,4.5vw,4.25rem)] font-bold leading-[1.05] tracking-[-0.035em]',
                'text-[var(--color-text-primary)] mb-8 max-w-[20ch]'
              )}
            >
              {content ? content.intro.headline : industry.name}
            </h1>

            <p className="text-[16px] md:text-[17px] text-[var(--color-text-secondary)] leading-[1.7] max-w-[620px] mb-10">
              {content
                ? content.intro.body
                : "We're putting this page together. In the meantime, tell us where manual work is slowing your team down and we'll show you what we'd build."}
            </p>

            <Link
              href="/services"
              className="text-[14px] text-[var(--color-accent-text)] hover:text-[var(--color-text-primary)] transition-colors duration-150"
            >
              See how we work →
            </Link>
          </div>

          {/* 30% — before / after AI carousel (copy-creator skill §13.4) */}
          {strip && <BeforeAfterCarousel {...strip} className="mx-auto max-w-[360px] lg:max-w-none" />}
        </div>
      </section>

      {/* ── Services ──────────────────────────────────────────────────────── */}
      {content && (
        <section className="bg-[var(--color-bg-elevated)] border-y border-[var(--color-border)] py-20 md:py-28">
          <div className="max-w-[var(--container-max)] mx-auto px-10 lg:px-20">
            <p className={eyebrow}>Services</p>
            <h2 className="text-[clamp(1.75rem,3.5vw,var(--text-h2))] font-semibold leading-[1.1] tracking-[-0.03em] text-[var(--color-text-primary)] mb-12">
              {content.services.heading}
            </h2>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-[var(--bento-gap)]">
              {content.services.items.map((item, i) => (
                <li
                  key={item.title}
                  className="flex flex-col rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-8 md:p-10"
                >
                  <span
                    className="block font-[var(--font-mono)] text-[11px] tracking-[0.14em] text-[var(--color-accent-text)] mb-6"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-[clamp(1.125rem,1.6vw,var(--text-body-lg))] font-semibold text-[var(--color-text-primary)] mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[15px] text-[var(--color-text-secondary)] leading-[1.7]">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <CTASection background={content ? 'primary' : 'elevated'} />
    </>
  );
}
