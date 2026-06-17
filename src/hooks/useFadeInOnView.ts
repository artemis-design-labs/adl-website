'use client';

import { useInView } from 'react-intersection-observer';

/**
 * Scroll-triggered fade-up reveal. Returns a ref to attach to the element and
 * a `data-visible` attribute string for the `.fade-up` CSS utility.
 *
 * Pair with `className="fade-up"` and `style={{ transitionDelay: '...' }}` to
 * stagger reveals across a list.
 *
 * Example:
 *   const { ref, dataVisible } = useFadeInOnView();
 *   <div ref={ref} className="fade-up" data-visible={dataVisible}>...</div>
 */
export function useFadeInOnView(threshold = 0.2) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold,
    rootMargin: '0px 0px -10% 0px',
  });

  return {
    ref,
    dataVisible: inView ? 'true' : 'false',
  };
}
