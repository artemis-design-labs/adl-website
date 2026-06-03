'use client';

import { useEffect, useRef } from 'react';

/**
 * Cloudflare Turnstile widget — invisible captcha-style verification.
 *
 * Activates only when NEXT_PUBLIC_TURNSTILE_SITE_KEY is set. Without
 * a site key the component renders nothing and the parent form
 * proceeds normally — useful in dev and during the rollout window
 * before the keys land in production env.
 *
 * The matching secret key lives on the Worker as
 * TURNSTILE_SECRET_KEY and is consumed by /api/contact at verify time.
 */

interface TurnstileProps {
  onToken: (token: string) => void;
  onExpire?: () => void;
  className?: string;
  theme?: 'auto' | 'light' | 'dark';
}

declare global {
  interface Window {
    turnstile?: {
      render: (
        el: HTMLElement,
        opts: {
          sitekey: string;
          callback: (token: string) => void;
          'expired-callback'?: () => void;
          'error-callback'?: () => void;
          theme?: 'auto' | 'light' | 'dark';
        }
      ) => string;
      remove: (widgetId: string) => void;
      reset: (widgetId: string) => void;
    };
  }
}

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
const SCRIPT_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';

export function Turnstile({ onToken, onExpire, className, theme = 'auto' }: TurnstileProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const widgetIdRef = useRef<string | null>(null);

  useEffect(() => {
    if (!SITE_KEY || !containerRef.current) return;

    const renderWidget = () => {
      if (!containerRef.current || !window.turnstile) return;
      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey: SITE_KEY,
        callback: onToken,
        'expired-callback': onExpire,
        theme,
      });
    };

    if (window.turnstile) {
      renderWidget();
    } else {
      // Load the script if not already present
      const existing = document.querySelector<HTMLScriptElement>(`script[src="${SCRIPT_SRC}"]`);
      if (existing) {
        existing.addEventListener('load', renderWidget);
      } else {
        const script = document.createElement('script');
        script.src = SCRIPT_SRC;
        script.async = true;
        script.defer = true;
        script.addEventListener('load', renderWidget);
        document.head.appendChild(script);
      }
    }

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [onToken, onExpire, theme]);

  if (!SITE_KEY) return null;

  return <div ref={containerRef} className={className} />;
}
