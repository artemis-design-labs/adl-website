'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/cn';

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className={cn(
        'fixed bottom-6 right-6 z-50',
        'inline-flex items-center justify-center w-11 h-11 rounded-full',
        'bg-[var(--color-accent)] text-[var(--color-text-on-accent)]',
        'shadow-lg hover:bg-[var(--color-accent-hover)] hover:shadow-[var(--shadow-glow)]',
        'transition-all duration-300 ease-in-out',
        visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
      )}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}
