import { useRef } from 'react';

/**
 * Horizontal swipe for carousels on touch screens. Spread the returned handlers on the swipeable
 * element: a mostly-horizontal touch drag of at least `threshold` px calls `onPrev` (dragged right)
 * or `onNext` (dragged left). Mouse input is ignored, so clicks and text selection are unaffected,
 * and vertical drags fall through to page scrolling.
 */
export function useSwipe({ onPrev, onNext, threshold = 40 }) {
  const start = useRef(null);

  return {
    onPointerDown(event) {
      if (event.pointerType === 'mouse') return;
      start.current = { x: event.clientX, y: event.clientY };
    },
    onPointerUp(event) {
      if (!start.current) return;
      const dx = event.clientX - start.current.x;
      const dy = event.clientY - start.current.y;
      start.current = null;
      if (Math.abs(dx) < threshold || Math.abs(dx) < Math.abs(dy)) return;
      if (dx > 0) onPrev();
      else onNext();
    },
    onPointerCancel() {
      start.current = null;
    },
  };
}
