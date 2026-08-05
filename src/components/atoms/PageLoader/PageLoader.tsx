'use client';

import { useState, useEffect } from 'react';

const GIF_DURATION_MS = 2250;
const TOTAL_LOOPS = 3;
const FADE_DURATION_MS = 600;
const SESSION_KEY = 'adl-loader-shown';

export function PageLoader() {
  const [hiding, setHiding] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) {
      setDone(true);
      return;
    }

    const dismissTimer = setTimeout(() => {
      sessionStorage.setItem(SESSION_KEY, '1');
      setHiding(true);
      setTimeout(() => setDone(true), FADE_DURATION_MS);
    }, GIF_DURATION_MS * TOTAL_LOOPS);

    return () => clearTimeout(dismissTimer);
  }, []);

  if (done) return null;

  return (
    <div
      className={[
        'fixed inset-0 z-[9999] flex items-center justify-center bg-[#141414]',
        'transition-opacity',
        hiding ? 'opacity-0 pointer-events-none' : 'opacity-100',
      ].join(' ')}
      style={{ transitionDuration: `${FADE_DURATION_MS}ms` }}
      aria-hidden="true"
    >
      { }
      <img
        src="/loading/ui-assembly.gif"
        alt=""
        className="w-auto h-auto max-w-[45vw] max-h-[45vh]"
      />
    </div>
  );
}
