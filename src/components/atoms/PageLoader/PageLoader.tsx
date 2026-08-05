'use client';

import { useRef, useState, useEffect } from 'react';

const TOTAL_LOOPS = 3;
const FADE_DURATION_MS = 600;
const SESSION_KEY = 'adl-loader-shown';

export function PageLoader() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playCountRef = useRef(0);
  const [hiding, setHiding] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Only show once per browser session
    if (sessionStorage.getItem(SESSION_KEY)) {
      setDone(true);
    }
  }, []);

  function handleEnded() {
    playCountRef.current += 1;
    if (playCountRef.current >= TOTAL_LOOPS) {
      sessionStorage.setItem(SESSION_KEY, '1');
      setHiding(true);
      setTimeout(() => setDone(true), FADE_DURATION_MS);
    } else {
      videoRef.current?.play();
    }
  }

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
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        onEnded={handleEnded}
        className="w-auto h-auto max-w-[90vw] max-h-[90vh]"
      >
        <source src="/loading/ui-assembly.webm" type="video/webm" />
        <source src="/loading/ui-assembly.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
