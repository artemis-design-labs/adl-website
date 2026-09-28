'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/cn';

/**
 * Hero — single full-bleed banner.
 *
 * One unbroken media band with the copy set ON it, centred on both axes and
 * sized to 75vw. This is the 12-column lead cell of the homepage bento:
 * nothing is inset, nothing is split, and the banner runs edge to edge so the
 * grid below it reads as the first *divided* surface on the page.
 *
 * The band stays dark in BOTH themes so the overlaid copy keeps its
 * contrast. Legibility is held by two layers, both tokenised so they can be
 * tuned without touching this file: --banner-media-filter grades the footage
 * down (darker, flatter, slightly desaturated) so it reads as ground rather
 * than subject, and --banner-scrim lays a four-stop gradient over it that
 * peaks through the vertical middle, where the copy now sits.
 *
 * Audio: the source has been stripped of its audio track at encode time
 * (`ffmpeg -an`), and the element is `muted` regardless — muted is also
 * what makes autoplay legal in every browser.
 *
 * Single CTA by design: "Who we are" drops the reader into the About us
 * tile directly below (#about in HomeBento). Booking lives in the nav.
 */
export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Respect prefers-reduced-motion: hold on the poster frame instead of
  // looping. Autoplay can't be gated in CSS, so it's gated here.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const apply = () => {
      if (media.matches) {
        video.pause();
        video.currentTime = 0;
      } else {
        void video.play().catch(() => {
          /* autoplay blocked — poster remains, no action needed */
        });
      }
    };

    apply();
    media.addEventListener('change', apply);
    return () => media.removeEventListener('change', apply);
  }, []);

  return (
    <section className="relative isolate flex min-h-svh items-center overflow-hidden bg-[var(--color-bg-dark)] pt-[var(--nav-height-full)]">

      {/* ---- Banner media ----------------------------------------------
          Decorative: the headline carries the meaning, so the video is
          hidden from assistive tech entirely. */}
      <video
        ref={videoRef}
        aria-hidden="true"
        tabIndex={-1}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/videos/adl-hero-poster.jpg"
        className="absolute inset-0 -z-10 h-full w-full object-cover [filter:var(--banner-media-filter)]"
      >
        <source src="/videos/adl-hero.mp4" type="video/mp4" />
      </video>

      {/* Scrim — four stops, peaking through the vertical middle where the
          centred copy sits, and still substantial at the top for the nav
          that overlays this band. Tunable via --banner-scrim. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 [background-image:var(--banner-scrim)]"
      />

      {/* ---- Content ----------------------------------------------------
          Centred on both axes and sized to 75vw.

          Below md the block goes full-width with the standard page gutter —
          75vw on a phone leaves too little room to set display type. From md
          up the 12.5vw margin either side already exceeds the 40/80px page
          gutter (96px at 768, 240px at 1920), so the rule is satisfied by the
          width itself and no px is needed. */}
      <div className="relative mx-auto w-full px-10 md:w-[75vw] md:px-0 lg:w-[86vw] py-16 md:py-24 text-center">

        {/* Display scale — the one element on the site allowed to be this
            large. Everything else steps down hard from here.

            Two lines at lg+, forced rather than inferred: text-wrap:balance
            picks its own break and flips to three lines the moment the
            container tightens, so the break is set explicitly here.

            Two lines from md up, forced: each line is its own nowrap block,
            so the break always falls after "that" and never mid-phrase.

            The size is solved from the LONGER line. Measured in the rendered
            face with tracking-[-0.035em], "We build AI-powered systems that"
            is 14.04em; with ~6% headroom that is 14.9em. So the font must
            satisfy  font-size <= container / 14.9  at every width:

              md  (container 75vw)   75 / 14.9 = 5.03vw   → 5vw
              lg  (container 86vw)   86 / 14.9 = 5.77vw   → 5.75vw

            both capped at --text-display. Below md the headline wraps
            naturally. If the copy changes, re-measure the longer line and
            move only these two vw values. */}
        <h1
          className={cn(
            'text-[clamp(2.5rem,6.5vw,var(--text-display))] font-semibold',
            'md:text-[length:min(5vw,var(--text-display))] lg:text-[length:min(5.75vw,var(--text-display))]',
            'leading-[1.02] tracking-[-0.035em] text-balance',
            'text-[var(--color-text-on-dark)] mb-7 hero-animate'
          )}
          style={{ animationDelay: '120ms' }}
        >
          <span className="md:block md:whitespace-nowrap">We build AI-powered systems that</span>{' '}
          <span className="md:block md:whitespace-nowrap">remove operational bottlenecks.</span>
        </h1>

        <p
          className="mx-auto text-[17px] md:text-[18px] leading-[1.6] text-[color-mix(in_srgb,var(--color-text-on-dark)_72%,transparent)] max-w-[62ch] mb-9 hero-animate"
          style={{ animationDelay: '200ms' }}
        >
          Every growing business needs to run without friction. In the age
          of AI, manual processes need to be replaced with AI-powered
          systems and solutions that run automatically. Our team builds that
          infrastructure and ensures it integrates seamlessly into your
          organization.
        </p>

        <div className="hero-animate" style={{ animationDelay: '280ms' }}>
          <Link
            href="#about"
            className={cn(
              'inline-flex items-center justify-center gap-2 h-[48px] px-8 rounded-[var(--radius-md)]',
              'bg-[var(--color-accent)] text-[var(--color-text-on-accent)] font-semibold text-[15px]',
              'hover:bg-[var(--color-accent-hover)] hover:shadow-[var(--shadow-glow)]',
              'active:brightness-90 transition-all duration-150',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-dark)]'
            )}
          >
            Who we are
          </Link>
        </div>
      </div>
    </section>
  );
}
