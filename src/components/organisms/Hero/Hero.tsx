'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/atoms/Button';
import { cn } from '@/lib/cn';
import { useSectionVersion } from '@/context/ContentVersionContext';

// V1 Content (Main Branch)
const V1_CONTENT = {
  eyebrow: 'AI-Powered Design Infrastructure',
  headline1: 'From Bootstrap to Unicorn',
  headline2: 'We Make Your Design Scalable.',
  subheadline:
    'We partner with enterprise startups to provide dedicated design infrastructure solutions through a combination of human expertise and AI-powered internal tooling.',
  cta1: { label: 'Why Us', href: '#pain-points' },
  cta2: { label: 'Get a Free Audit', href: '/contact?type=audit' },
};

// V2 Content (AI-First Rebrand)
const V2_CONTENT = {
  eyebrow: 'Built by Founders. Powered by AI.',
  headline1: 'We Build the AI That Builds',
  headline2: 'Your Design Infrastructure.',
  subheadline: "We're ex-startup founders who got tired of the design-to-code problem — so we built proprietary AI to solve it. Not another agency. Not another automation tool. A team that's been in your shoes, armed with technology we built from the trenches.",
  cta1: { label: 'Book a Conversation', href: '/contact' },
  cta2: { label: 'Get a Free Audit', href: '/contact?type=audit' },
};

const TYPING_SPEED = 35;
const START_DELAY = 400;

export function Hero() {
  const version = useSectionVersion('home-hero');
  const content = version === 'v1' ? V1_CONTENT : V2_CONTENT;

  const [displayedText1, setDisplayedText1] = useState('');
  const [displayedText2, setDisplayedText2] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  // Reset and retype when version changes
  useEffect(() => {
    setDisplayedText1('');
    setDisplayedText2('');
    setIsTypingComplete(false);
    setShowCursor(true);

    let timeout: NodeJS.Timeout;
    let currentIndex = 0;
    let isTypingPart2 = false;

    const typeNextChar = () => {
      if (!isTypingPart2) {
        if (currentIndex < content.headline1.length) {
          setDisplayedText1(content.headline1.slice(0, currentIndex + 1));
          currentIndex++;
          timeout = setTimeout(typeNextChar, TYPING_SPEED);
        } else {
          isTypingPart2 = true;
          currentIndex = 0;
          timeout = setTimeout(typeNextChar, TYPING_SPEED);
        }
      } else {
        if (currentIndex < content.headline2.length) {
          setDisplayedText2(content.headline2.slice(0, currentIndex + 1));
          currentIndex++;
          timeout = setTimeout(typeNextChar, TYPING_SPEED);
        } else {
          setIsTypingComplete(true);
        }
      }
    };

    timeout = setTimeout(typeNextChar, START_DELAY);
    return () => clearTimeout(timeout);
  }, [version, content.headline1, content.headline2]);

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
      {/* Version indicator */}
      <div className="absolute top-20 right-4 z-10">
        <span className={cn(
          'px-2 py-1 text-[10px] font-medium uppercase tracking-wider rounded',
          version === 'v1' ? 'bg-blue-600 text-white' : 'bg-green-600 text-white'
        )}>
          {version === 'v1' ? 'V1 - Main' : 'V2 - AI-First'}
        </span>
      </div>

      {/* Content container */}
      <div className="relative max-w-5xl mx-auto px-6 lg:px-8 py-24 md:py-32">
        <div className={cn('mx-auto text-center', version === 'v2' ? 'max-w-4xl' : 'max-w-3xl')}>
          {/* Eyebrow - corporate badge style */}
          <div className="inline-flex items-center gap-3 px-4 py-2 mb-10 border border-[var(--color-border)] bg-[var(--color-bg-elevated)]">
            <span className="w-2 h-2 bg-[var(--color-accent)]" />
            <span
              className={cn(
                'text-xs font-medium tracking-[0.15em] uppercase',
                'text-[var(--color-text-tertiary)]'
              )}
            >
              {content.eyebrow}
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
            {displayedText1.length === content.headline1.length && <br />}
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
              'leading-relaxed',
              version === 'v2' ? 'max-w-2xl mx-auto' : 'max-w-xl mx-auto'
            )}
          >
            {content.subheadline}
          </p>

          {/* CTAs - geometric, minimal */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
            {content.cta1.href.startsWith('#') ? (
              <a href={content.cta1.href}>
                <Button size="lg" className="min-w-[180px]">
                  {content.cta1.label}
                </Button>
              </a>
            ) : (
              <Link href={content.cta1.href}>
                <Button size="lg" className="min-w-[180px]">
                  {content.cta1.label}
                </Button>
              </Link>
            )}
            <Link href={content.cta2.href}>
              <Button variant="secondary" size="lg" className="min-w-[180px]">
                {content.cta2.label}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
