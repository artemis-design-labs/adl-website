'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useRef, useState } from 'react';
import { useFadeInOnView } from '@/hooks/useFadeInOnView';
import { cn } from '@/lib/cn';

/* ------------------------------------------------------------------ data */

const PILLARS = [
  {
    title: 'UI Infrastructure',
    description:
      'As your team grows, different people make different decisions. Products start looking inconsistent, and fixing it eats more time than building new features. We install the foundation that keeps everything aligned — across every team, every screen, every release.',
  },
  {
    title: 'AI Product Solutions',
    description:
      'Off-the-shelf AI tools handle generic tasks. We build custom solutions for the specific manual work slowing your team down — automating the workflows that currently require a person to check, generate, or approve.',
  },
  {
    title: 'Agentic Workflows & Automations',
    description:
      'When critical knowledge lives in one person\'s head, you\'re one departure away from a crisis. We build automated systems that monitor your operations, catch problems early, and handle complex coordination — without someone managing them every day.',
  },
  {
    title: 'Training',
    description:
      'Most agencies deliver and disappear. We treat your team\'s ability to own and evolve the system as a core deliverable. New hires are productive in days, not weeks. Key exits don\'t break anything. The work lasts.',
  },
];

// Every figure here must be something we can point at a source for.
// See the fact-audit table in Website-Content.md before adding another.
const METRICS = [
  { value: '10',   label: 'Design systems deployed' },
  { value: '15',   label: 'AI solutions & agentic workflows implemented' },
  { value: '20+',  label: 'Years of combined experience' },
  { value: '250+', label: 'Active users trained on our solutions' },
];

// White-ink artwork — the canvas is black.
const CLIENTS = [
  { name: 'AT&T',         src: '/images/atnt-dark.svg'         },
  { name: 'Verizon',      src: '/images/verizon-dark.svg'      },
  { name: 'NBCUniversal', src: '/images/nbcuniversal-dark.svg' },
  { name: 'NYCERS',       src: '/images/nycers-dark.svg'       },
  { name: 'Qualitrol',    src: '/images/qualitrol-dark.svg'    },
  { name: 'CMA Global',   src: '/images/cma-global-dark.svg'   },
  { name: 'NYC DOE',      src: '/images/nyc-doe-dark.svg'      },
  { name: 'Freshop',      src: '/images/freshop-dark.svg'      },
];

const TESTIMONIALS = [
  {
    quote:
      "We'd burned $40K on an agency that delivered Figma files our engineers couldn't use. ADL delivered Figma and production-ready React — and the code actually passed review the first time. I didn't know that was possible at this stage.",
    author: 'CTO & Co-founder',
    company: 'Series A Healthcare SaaS',
  },
  {
    quote:
      "We lost an enterprise deal because the buyer flagged UI inconsistency in the demo. After ADL built our governance system, we closed the same deal. That's the only number that matters.",
    author: 'CEO & Co-founder',
    company: 'Seed-Stage B2B SaaS',
  },
  {
    quote:
      'Nobody on our team owned UI infrastructure — everyone built inconsistently and the debt was invisible until it wasn\'t. ADL built the governance layer and ran it for us. New engineers ship their first feature significantly faster now.',
    author: 'VP of Engineering',
    company: 'Series A Analytics Platform',
  },
];

/* ------------------------------------------------------------------ tile */

/**
 * Column spans, as literal strings so Tailwind's scanner can see them.
 *
 * Track counts per breakpoint: 1 / 2 / 12. Twelve divides by 2, 3 and 4, so
 * 2-up (span-6), 3-up (span-4) and 4-up (span-3) rows all resolve on the
 * same track list without a second grid.
 */
const SPAN = {
  3:  'lg:col-span-3',
  4:  'lg:col-span-4',
  6:  'lg:col-span-6',
  8:  'md:col-span-2 lg:col-span-8',
  12: 'md:col-span-2 lg:col-span-12',
} as const;

interface TileProps {
  span: keyof typeof SPAN;
  /** In-page anchor target. Offset clears the fixed nav. */
  id?: string;
  /** Fill one full screen (min-height), per the viewport-block rule. */
  viewport?: boolean;
  /** Within-row stagger, ms. Each tile observes itself, so this only ever
   *  offsets siblings that enter together — never tiles further down. */
  delay?: number;
  className?: string;
  children: React.ReactNode;
}

function Tile({ span, id, viewport = false, delay = 0, className, children }: TileProps) {
  const { ref, dataVisible } = useFadeInOnView(0.1);

  return (
    <div
      ref={ref}
      id={id}
      data-visible={dataVisible}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        'fade-up flex flex-col justify-start rounded-[var(--radius-lg)] p-8 md:p-10 scroll-mt-[var(--viewport-block-offset)]',
        viewport && 'min-h-[var(--viewport-block-h)]',
        'border border-[var(--color-border)] bg-[var(--color-bg-secondary)]',
        SPAN[span],
        className
      )}
    >
      {children}
    </div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent-text)] mb-5">
      {children}
    </p>
  );
}

/* -------------------------------------------------------------- carousel */

/**
 * The four pillars, one at a time.
 *
 * Three stacked parts: the image track, the controls, then the active
 * pillar's copy. The controls sit directly under the image so they are
 * visible without reading past the description first.
 *
 * Only the image track scrolls. It is a native scroll-snap track rather than
 * transforms, so touch swipe, trackpad and momentum come from the browser for
 * free. The buttons and dots just scroll the track; the active index is read
 * back from scrollLeft so both input paths stay in sync, and the copy below
 * follows that index.
 *
 * All four copy blocks share one grid cell, so the panel is always as tall as
 * the longest description and nothing below it jumps when the slide changes.
 */
function PillarCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const last = PILLARS.length - 1;

  const goTo = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(last, index));
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    track.scrollTo({ left: clamped * track.clientWidth, behavior: reduce ? 'auto' : 'smooth' });
  }, [last]);

  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    setActive(Math.round(track.scrollLeft / track.clientWidth));
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); goTo(active + 1); }
    if (e.key === 'ArrowLeft')  { e.preventDefault(); goTo(active - 1); }
  };

  const arrow = cn(
    'inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-full)]',
    'border border-[var(--color-border)] text-[var(--color-text-secondary)]',
    'hover:border-[var(--color-accent)] hover:text-[var(--color-text-primary)]',
    'disabled:opacity-40 disabled:pointer-events-none transition-colors duration-150',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]'
  );

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Our four pillars"
      onKeyDown={onKeyDown}
      className="flex flex-1 flex-col"
    >
      {/* 1 — image track (the only part that scrolls) */}
      <div
        ref={trackRef}
        onScroll={onScroll}
        className="flex flex-1 snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {PILLARS.map((pillar) => (
          <div
            key={pillar.title}
            aria-hidden="true"
            className="flex w-full shrink-0 snap-start flex-col"
          >
            {/* Image placeholder — replace with real asset when provided */}
            <div className="relative flex min-h-[240px] w-full flex-1 items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg-tertiary)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--color-border)]">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" className="text-[var(--color-text-tertiary)]" />
                  <circle cx="7" cy="8.5" r="1.5" fill="currentColor" className="text-[var(--color-text-tertiary)]" />
                  <path d="M2 14l4-3 3 2.5 3-4 4 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-text-tertiary)]" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 2 — controls, directly under the image */}
      <div className="mt-6 mb-8 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          {PILLARS.map((pillar, i) => (
            <button
              key={pillar.title}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Show ${pillar.title}`}
              aria-current={i === active}
              className={cn(
                'h-[6px] rounded-[var(--radius-full)] transition-all duration-200',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]',
                i === active
                  ? 'w-6 bg-[var(--color-accent)]'
                  : 'w-[6px] bg-[var(--color-border-strong)] hover:bg-[var(--color-text-tertiary)]'
              )}
            />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button type="button" onClick={() => goTo(active - 1)} disabled={active === 0} aria-label="Previous pillar" className={arrow}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button type="button" onClick={() => goTo(active + 1)} disabled={active === last} aria-label="Next pillar" className={arrow}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* 3 — the active pillar's copy */}
      <div aria-live="polite" className="grid">
        {PILLARS.map((pillar, i) => (
          <div
            key={pillar.title}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${PILLARS.length}`}
            aria-hidden={i !== active}
            className={cn(
              '[grid-area:1/1] transition-opacity duration-200 motion-reduce:transition-none',
              i === active ? 'opacity-100' : 'invisible opacity-0'
            )}
          >
            <span
              className="block font-[var(--font-mono)] text-[11px] tracking-[0.14em] text-[var(--color-accent-text)] mb-6"
              aria-hidden="true"
            >
              {String(i + 1).padStart(2, '0')} / {String(PILLARS.length).padStart(2, '0')}
            </span>
            <h3 className="text-[clamp(1.125rem,1.6vw,var(--text-body-lg))] font-semibold text-[var(--color-text-primary)] mb-3 leading-snug">
              {pillar.title}
            </h3>
            <p className="text-[15px] text-[var(--color-text-secondary)] leading-[1.7]">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ bento */

/**
 * Everything below the hero, as one continuous bento.
 *
 * Replaces the six stacked <section> bands (clients, services, stats, moat,
 * testimonials, CTA) that used to make up the homepage. Those organisms are
 * still in the tree but are no longer wired here — CTASection is the only one
 * of them still imported anywhere, by the five inner routes.
 *
 * Every row holds one to three tiles. Spans always sum to 12, so the grid's
 * auto-placement lands each row exactly as laid out below without a single
 * explicit row definition.
 *
 *   row 1   6 + 6      about us (#about): heading + statement | pillar carousel
 *   row 2   12         client wall (marquee)
 *   row 3   6 + 6      moat headline + statement | metrics panel (2×2)
 *   row 4   12         "What Our Clients Say" title (bare heading, no tile)
 *           4 + 4 + 4  quote 1 | quote 2 | quote 3
 *   row 5   12         CTA
 *
 * The latest-projects list used to sit in row 2; it now lives on /services
 * as the LatestProjects organism.
 *
 * Tiles themselves are not interactive, so none of them carry a hover
 * state — a card that lifts but cannot be clicked is a false affordance.
 * The carousel's own controls are the only interactive elements.
 */
export function HomeBento() {
  return (
    <section
      className="bg-[var(--color-bg-primary)] p-[var(--bento-gap)]"
      aria-label="What we do"
    >
      {/* Full-page grid: no max-width wrapper and no px-10 lg:px-20. The
          one --bento-gap margin sets both the tile gutters and the screen
          edges (see CLAUDE.md → Layout & Grid). */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-[var(--bento-gap)]">

          {/* row 1 — about us: positioning | pillar carousel */}
          <Tile span={6} id="about" viewport>
            <Eyebrow>What We Do</Eyebrow>
            <h2 className="text-[clamp(1.75rem,3.5vw,var(--text-h2))] font-semibold leading-[1.1] tracking-[-0.03em] text-[var(--color-text-primary)] mb-6">
              Transform Operations. Scale Efficiency.
            </h2>
            <div className="space-y-5 text-[16px] md:text-[17px] text-[var(--color-text-secondary)] leading-[1.75]">
              <p>
                Artemis Design Labs (ADL) is an operational partner dedicated to
                eliminating manual friction and operational debt. We deploy
                integrated, scalable and self-governing solutions that eliminate
                critical bottlenecks.
              </p>
              <p>
                Whether you are an established legacy business modernizing through AI
                or a high-growth startup navigating a scaling crisis, our solutions
                are engineered to resolve your core operational drag.
              </p>
              <p>
                We build automated workflows and resilient internal systems designed
                to remain stable, transparent, and self-sustaining long after our
                engagement ends.
              </p>
            </div>
          </Tile>

          <Tile span={6} delay={80} viewport>
            <PillarCarousel />
          </Tile>

          {/* row 2 — the client wall, full width */}
          <Tile span={12}>
            <h2 className="text-[clamp(1.5rem,3vw,var(--text-h3))] font-semibold leading-[1.1] tracking-[-0.03em] text-[var(--color-text-primary)] mb-10">
              We have built and implemented systems at
            </h2>
            {/* Perpetual logo marquee. The list renders twice and the track
                slides by exactly -50%, so the loop seam is invisible — which
                is why spacing lives in each item's padding, not a track gap.
                Hover pauses it; under reduced motion the duplicate drops out
                and the single list wraps as a static wall. */}
            <div className="marquee-mask overflow-hidden">
              <div className="flex w-max animate-marquee-x motion-reduce:w-full">
                {[0, 1].map((copy) => (
                  <ul
                    key={copy}
                    aria-hidden={copy === 1 || undefined}
                    className={cn(
                      'flex shrink-0 items-center',
                      copy === 1
                        ? 'motion-reduce:hidden'
                        : 'motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-y-8'
                    )}
                  >
                    {CLIENTS.map((client) => (
                      <li key={client.name} className="w-[225px] sm:w-[300px] shrink-0 px-5 sm:px-8 motion-reduce:w-1/2 sm:motion-reduce:w-[300px]">
                        <Image
                          src={client.src}
                          alt={copy === 1 ? '' : client.name}
                          width={300}
                          height={200}
                          decoding="async"
                          className="h-auto w-full max-h-[117px] object-contain opacity-60"
                          unoptimized
                        />
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          </Tile>

          {/* row 3 — the moat: headline + statement | the four metrics */}
          <Tile span={6}>
            <div
              className="w-10 h-[2px] bg-[var(--color-accent)] mb-8"
              aria-hidden="true"
            />
            <h2 className="text-[clamp(1.75rem,4vw,var(--text-h1))] font-semibold leading-[1.05] tracking-[-0.035em] text-balance text-[var(--color-text-primary)] max-w-[20ch] mb-8">
              Your business can only scale as fast as the systems running it.
            </h2>
            <p className="text-[15px] md:text-[16px] text-[var(--color-text-secondary)] leading-[1.75] max-w-[56ch]">
              Most agencies solve one thing and leave your team to manage the rest.
              ADL installs four connected systems — UI infrastructure, AI tools,
              automated workflows, and training — so your operation runs cleanly as
              you scale. Every engagement targets the root cause, not the symptom.
            </p>
          </Tile>

          <Tile span={6} delay={80}>
            <h2 className="sr-only">By the numbers</h2>
            <dl className="grid grid-cols-2 gap-x-8 gap-y-10">
              {METRICS.map((m) => (
                <div key={m.label} className="flex flex-col border-t border-[var(--color-border)] pt-6">
                  <dt className="text-[13px] text-[var(--color-text-tertiary)] leading-snug max-w-[22ch]">
                    {m.label}
                  </dt>
                  <dd className="order-first text-[clamp(2.25rem,4vw,var(--text-h2))] font-semibold leading-none tracking-[-0.04em] text-[var(--color-text-primary)] mb-4">
                    {m.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Tile>

          {/* row 4 — proof: section title above a 3-column quote grid. The
              title is a bare grid row, not a tile, so it reads as the header
              of the three quotes rather than a fourth card. Side padding
              matches the tile interior so it lines up with the quote text. */}
          <h2 className="md:col-span-2 lg:col-span-12 px-8 md:px-10 pt-12 pb-4 text-[clamp(1.5rem,3vw,var(--text-h3))] font-semibold leading-[1.1] tracking-[-0.03em] text-[var(--color-text-primary)]">
            What Our Clients Say
          </h2>

          {TESTIMONIALS.map((t, i) => (
            <Tile key={t.company} span={4} delay={i * 80}>
              <figure className="flex flex-1 flex-col">
                <blockquote className="flex-1 text-[15px] text-[var(--color-text-secondary)] leading-[1.75] mb-8">
                  {t.quote}
                </blockquote>
                <figcaption className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.12em] text-[var(--color-text-tertiary)] leading-[1.7]">
                  {t.author}
                  <br />
                  {t.company}
                </figcaption>
              </figure>
            </Tile>
          ))}

          {/* row 5 — the one action, full width */}
          <Tile span={12} className="bg-[var(--color-bg-tertiary)]">
            <h2 className="text-[clamp(1.75rem,3.5vw,var(--text-h2))] font-semibold leading-[1.1] tracking-[-0.03em] text-[var(--color-text-primary)] max-w-[18ch] mb-8">
              Let&apos;s start transforming your business
            </h2>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Link
                href="/contact#book-a-call"
                className={cn(
                  'inline-flex items-center justify-center gap-2 h-[48px] px-8 rounded-[var(--radius-md)]',
                  'bg-[var(--color-accent)] text-[var(--color-text-on-accent)] font-semibold text-[15px]',
                  'hover:bg-[var(--color-accent-hover)] hover:shadow-[var(--shadow-glow)]',
                  'active:brightness-90 transition-all duration-150',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-tertiary)]'
                )}
              >
                Book a free audit
              </Link>
              <a
                href="mailto:pritish@artemisdesignlabs.com"
                className="font-[var(--font-mono)] text-[13px] text-[var(--color-text-tertiary)] hover:text-[var(--color-text-secondary)] transition-colors duration-150"
              >
                pritish@artemisdesignlabs.com
              </a>
            </div>
          </Tile>

        </div>
    </section>
  );
}
