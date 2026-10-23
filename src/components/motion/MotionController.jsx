import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/*
 * Site-wide scroll reveals and card interactions, applied once per route from MainLayout.
 * styles/motion.css holds the visuals; the motion tokens in tokens.css hold the timings.
 *
 * On each route this finds the page's content blocks inside <main>:
 * - section headings and copy;
 * - card-like items in grids and lists;
 * - media, tables and forms.
 * It tags them with [data-reveal] and reveals each one the first time it enters the viewport.
 * A batch that arrives together is staggered in reading order. Revealed blocks are unobserved,
 * so scrolling back up never replays them.
 *
 * Content is hidden only after html.motion-ready is set, and that class is never set when the
 * reader prefers reduced motion or IntersectionObserver is unavailable, so nothing stays hidden
 * if motion cannot run. Heroes ([data-hero]) animate on their own and are skipped.
 */

const COPY = 'h2, h3, h4, p, blockquote, figure, table, form, dl';
const MAX_TARGETS = 600;

function hasPaint(style) {
  const bg = style.backgroundColor;
  const hasBackground = bg && bg !== 'transparent' && !bg.endsWith(', 0)');
  const hasBorder = ['Top', 'Right', 'Bottom', 'Left'].some(
    (side) => parseFloat(style[`border${side}Width`]) > 0 && !style[`border${side}Color`].endsWith(', 0)'),
  );
  return hasBackground || hasBorder || style.boxShadow !== 'none';
}

/** A grid/list item that reads as a card: painted, padded and a reasonable size. */
function isCard(element) {
  // Controls carry their own hover states (Button, form fields, tabs).
  if (element.matches('button, input, select, textarea, label, [role="tab"]')) return false;
  // A link the height of a button (≤ 72px) is a CTA, not a card; whole-card links are taller.
  if (element.matches('a') && element.getBoundingClientRect().height <= 72) return false;
  const style = getComputedStyle(element);
  if (!hasPaint(style)) return false;
  const rect = element.getBoundingClientRect();
  if (rect.width < 120 || rect.height < 56) return false;
  const padded = parseFloat(style.paddingTop) + parseFloat(style.paddingLeft) >= 16;
  return padded && style.position !== 'fixed';
}

function collectTargets(main) {
  const targets = new Set();
  const cards = new Set();

  // Cards: items of grid/flex containers and lists that are painted like cards.
  main.querySelectorAll('*').forEach((parent) => {
    if (parent.closest('[data-hero]')) return;
    if (targets.size > MAX_TARGETS) return;
    const display = getComputedStyle(parent).display;
    const isList = parent.tagName === 'UL' || parent.tagName === 'OL';
    if (!isList && !display.includes('grid') && !display.includes('flex')) return;
    const children = [...parent.children];
    if (children.length < 2) return;
    children.forEach((child) => {
      if (child.closest('[data-hero]') || child.closest('[data-card]')) return;
      if (isCard(child)) {
        cards.add(child);
        targets.add(child);
      }
    });
  });

  // Copy and media that are not inside a card already.
  main.querySelectorAll(COPY).forEach((element) => {
    if (targets.size > MAX_TARGETS || element.closest('[data-hero]')) return;
    if ([...cards].some((card) => card.contains(element))) return;
    // A heading or paragraph inside a list item reveals with its item, not on its own.
    const item = element.closest('li');
    if (item) {
      targets.add(item);
      return;
    }
    // Inside a block that is itself revealed (a form, table, figure…), or inside a link/button.
    if (element.parentElement.closest(`:is(${COPY}), nav, a, button`)) return;
    targets.add(element);
  });

  // Skip screen-reader-only text and anything parked off-screen sideways (carousel slides move in
  // and out on their own; revealing them would fight the carousel).
  const viewportWidth = document.documentElement.clientWidth;
  const visible = [...targets].filter((element) => {
    const rect = element.getBoundingClientRect();
    return rect.width > 2 && rect.height > 2 && rect.left >= -1 && rect.right <= viewportWidth + 1;
  });
  return { targets: visible, cards };
}

function MotionController() {
  const { pathname } = useLocation();

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const main = document.querySelector('main');
    if (!main) return undefined;

    let observer;
    const frame = requestAnimationFrame(() => {
      const { targets, cards } = collectTargets(main);
      cards.forEach((card) => card.setAttribute('data-card', ''));
      if (reduce || !('IntersectionObserver' in window)) return;

      targets.forEach((element) => {
        // An element with its own transform keeps it: it only fades in.
        const ownTransform = getComputedStyle(element).transform !== 'none';
        element.setAttribute('data-reveal', ownTransform ? 'fade' : '');
      });
      document.documentElement.classList.add('motion-ready');

      observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((entry) => entry.isIntersecting)
            .map((entry) => entry.target)
            .sort((a, b) => (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1));
          visible.forEach((element, index) => {
            element.style.setProperty('--reveal-order', Math.min(index, 8));
            element.setAttribute('data-revealed', '');
            observer.unobserve(element);
            // Once settled, drop the reveal styles so the element's own transitions take over.
            const settle = () => {
              element.removeAttribute('data-reveal');
              element.removeAttribute('data-revealed');
              element.style.removeProperty('--reveal-order');
            };
            const onEnd = (event) => {
              if (event.target !== element || event.propertyName !== 'opacity') return;
              element.removeEventListener('transitionend', onEnd);
              settle();
            };
            element.addEventListener('transitionend', onEnd);
            setTimeout(settle, 1600);
          });
        },
        { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
      );
      targets.forEach((element) => observer.observe(element));
    });

    return () => {
      cancelAnimationFrame(frame);
      observer?.disconnect();
      // Leave nothing hidden behind on the next route.
      main.querySelectorAll('[data-reveal]').forEach((element) => {
        element.removeAttribute('data-reveal');
        element.removeAttribute('data-revealed');
      });
    };
  }, [pathname]);

  return null;
}

export default MotionController;
