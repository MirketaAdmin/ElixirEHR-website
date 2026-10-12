import { useCallback, useEffect, useState } from 'react';
import { usePrefersReducedMotion } from './useMediaQuery';

/**
 * Index state that advances by itself every `interval` ms, wrapping from the last position to the
 * first. Shared by the Features tabs and the Testimonials carousel.
 *
 * - `select(i)` jumps to a position and restarts the timer from there, so a manual choice is
 *   never overridden by an automatic step that was already due.
 * - Rotation stops while `paused` is true (hover/focus), when there is nothing to rotate
 *   (`count` < 2), and for visitors who prefer reduced motion.
 */
export function useAutoRotate(count, { interval = 6000, paused = false } = {}) {
  const [state, setState] = useState({ index: 0, version: 0 });
  const reducedMotion = usePrefersReducedMotion();
  const index = count > 0 ? Math.min(state.index, count - 1) : 0;
  const running = !paused && !reducedMotion && count > 1;

  useEffect(() => {
    if (!running) return undefined;
    const timer = setTimeout(
      () => setState((current) => ({ index: (Math.min(current.index, count - 1) + 1) % count, version: current.version })),
      interval,
    );
    return () => clearTimeout(timer);
    // `state.version` restarts the countdown after a manual selection.
  }, [running, count, interval, index, state.version]);

  const select = useCallback(
    (next) => setState((current) => ({ index: ((next % count) + count) % count, version: current.version + 1 })),
    [count],
  );

  return [index, select];
}
