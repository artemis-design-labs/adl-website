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

            The three numbers below are solved, not guessed. Measured from
            SFNS.ttf with tracking-[-0.035em] applied, the longer of the two
            lines ("remove operational bottlenecks.") is 12.26em, or ~12.75em
            allowing for semibold being wider than the regular master. So the
            container must satisfy  W >= 12.75 * font-size  at every width:

              below the clamp ceiling   0.86vw >= 12.75 * 0.065vw = 0.829vw  OK
              at the ceiling (80px)     0.86 * 1231 = 1059 >= 1020           OK

            That leaves ~8% headroom over the measured width. If the copy ever
            changes, re-measure: the constraint is the LONGER line, and the
            only number to move is the 86vw. */}
        <h1
          className={cn(
            'text-[clamp(2.5rem,6.5vw,var(--text-display))] font-semibold',
            'leading-[1.02] tracking-[-0.035em] text-balance',
            'text-[var(--color-text-on-dark)] mb-7 hero-animate'
          )}
          style={{ animationDelay: '120ms' }}
        >
          We build AI solutions that{' '}
          <span className="lg:block">remove operational bottlenecks.</span>
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
