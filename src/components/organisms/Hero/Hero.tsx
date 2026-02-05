'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/atoms/Button';
import { cn } from '@/lib/cn';

const HEADLINE_PART1 = 'From Bootstrapped to Unicorn';
const HEADLINE_PART2 = 'We Grow with You.';
const TYPING_SPEED = 35;
const START_DELAY = 400;

export function Hero() {
  const [displayedText1, setDisplayedText1] = useState('');
  const [displayedText2, setDisplayedText2] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let currentIndex = 0;
    let isTypingPart2 = false;

    const typeNextChar = () => {
      if (!isTypingPart2) {
        if (currentIndex < HEADLINE_PART1.length) {
          setDisplayedText1(HEADLINE_PART1.slice(0, currentIndex + 1));
          currentIndex++;
          timeout = setTimeout(typeNextChar, TYPING_SPEED);
        } else {
          isTypingPart2 = true;
          currentIndex = 0;
          timeout = setTimeout(typeNextChar, TYPING_SPEED);
        }
      } else {
        if (currentIndex < HEADLINE_PART2.length) {
          setDisplayedText2(HEADLINE_PART2.slice(0, currentIndex + 1));
          currentIndex++;
          timeout = setTimeout(typeNextChar, TYPING_SPEED);
        } else {
          setIsTypingComplete(true);
        }
      }
    };

    timeout = setTimeout(typeNextChar, START_DELAY);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (isTypingComplete) {
      const timeout = setTimeout(() => setShowCursor(false), 800);
      return () => clearTimeout(timeout);
    }

    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(interval);
  }, [isTypingComplete]);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[var(--color-bg-primary)]">
      {/* Content container */}
      <div className="relative max-w-5xl mx-auto px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          {/* Eyebrow - corporate badge style */}
          <div className="inline-flex items-center gap-3 px-4 py-2 mb-10 border border-[var(--color-border)] bg-[var(--color-bg-elevated)]">
            <span className="w-2 h-2 bg-[var(--color-accent)]" />
            <span
              className={cn(
                'text-xs font-medium tracking-[0.15em] uppercase',
                'text-[var(--color-text-tertiary)]'
              )}
            >
              AI-Powered Design Infrastructure
            </span>
          </div>

          {/* Headline with typing animation */}
          <h1
            className={cn(
              'text-2xl sm:text-3xl md:text-4xl lg:text-5xl',
              'font-medium tracking-[-0.02em]',
              'text-[var(--color-text-primary)]',
              'leading-[1.15]',
              'min-h-[2.5em] sm:min-h-[2em]'
            )}
          >
            {displayedText1}
            {displayedText1.length === HEADLINE_PART1.length && <br />}
            <span className="text-[var(--color-accent)]">{displayedText2}</span>
            {showCursor && (
              <span
                className="inline-block w-[2px] h-[0.85em] bg-[var(--color-text-primary)] ml-1 align-middle"
              />
            )}
          </h1>

          {/* Subheadline */}
          <p
            className={cn(
              'mt-8 text-base md:text-lg',
              'text-[var(--color-text-secondary)]',
              'max-w-xl mx-auto leading-relaxed'
            )}
          >
            We combine human expertise with AI-powered delivery to solve design-to-development friction permanently.
          </p>

          {/* CTAs - geometric, minimal */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#about">
              <Button size="lg" className="min-w-[160px]">
                About us
              </Button>
            </a>
            <Link href="/contact?type=audit">
              <Button variant="secondary" size="lg" className="min-w-[160px]">
                Get a Free Audit
              </Button>
            </Link>
          </div>

          {/* Trust indicator - understated */}
          <p className="mt-16 text-xs tracking-[0.1em] uppercase text-[var(--color-text-muted)]">
            Trusted by product teams at Series A–C startups
          </p>
        </div>
      </div>

      {/* Scroll indicator - minimal, geometric */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-muted)]">
          Scroll
        </span>
        <div className="w-px h-8 bg-[var(--color-border)]" />
      </div>
    </section>
  );
}
