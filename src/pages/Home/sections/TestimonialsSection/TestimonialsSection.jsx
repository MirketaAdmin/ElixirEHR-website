import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { testimonials } from '../../../../data/home';
import { cn } from '../../../../utils/cn';
import { usePrefersReducedMotion } from '../../../../hooks/useMediaQuery';
import { useSwipe } from '../../../../hooks/useSwipe';
import Container from '../../../../components/layout/Container/Container';
import Icon from '../../../../components/ui/Icon/Icon';
import styles from './TestimonialsSection.module.css';

const pad = (value) => String(value).padStart(2, '0');
const wrap = (value, count) => ((value % count) + count) % count;
// Cards rendered on each side of the active one: two are visible (the outer one cut off by the
// viewport edge), the third waits off-screen so a card never pops in during a slide.
const SIDE = 3;

/**
 * Testimonial coverflow (reference design): a full-width row of equal cards centred on the
 * active one, which is taller, outlined in Deep Purple and lifted; its neighbours sit either side
 * and the next ones are cut off by the viewport edges. The row loops endlessly in both
 * directions. It moves by the round arrows on the neighbours' outer edges, by clicking a
 * neighbour, by swiping, or automatically every `testimonials.autoplaySeconds` (paused while the
 * pointer or focus is inside, while the dialog is open, and for reduced motion).
 *
 * Long quotes are trimmed with "Show More", which opens the whole quote in a dialog.
 */
function TestimonialsSection() {
  const { items, autoplaySeconds } = testimonials;
  const count = items.length;
  // Unbounded position, so the row can keep sliding the same way past the last testimonial.
  const [position, setPosition] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [openItem, setOpenItem] = useState(null);
  const reducedMotion = usePrefersReducedMotion();
  const active = wrap(position, count);
  const running = !hovered && openItem === null && !reducedMotion && count > 1;

  const go = useCallback((next) => setPosition(next), []);
  const swipe = useSwipe({ onPrev: () => go(position - 1), onNext: () => go(position + 1) });

  // Autoplay; a manual move restarts the countdown (the effect re-runs on every new position).
  useEffect(() => {
    if (!running) return undefined;
    const timer = setTimeout(() => setPosition((value) => value + 1), autoplaySeconds * 1000);
    return () => clearTimeout(timer);
  }, [running, position, autoplaySeconds]);

  // Which quotes are cut off at their card's current size (the active card shows more lines).
  const quoteRefs = useRef(new Map());
  const [clamped, setClamped] = useState({});
  const measure = useCallback(() => {
    const next = {};
    quoteRefs.current.forEach((el, key) => {
      next[key] = el.scrollHeight > el.clientHeight + 1;
    });
    setClamped(next);
  }, []);
  useLayoutEffect(measure, [position, measure]);
  useEffect(() => {
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [measure]);

  const dialogRef = useRef(null);
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (openItem && !dialog.open) dialog.showModal();
    else if (!openItem && dialog.open) dialog.close();
  }, [openItem]);

  const slots = [];
  for (let virtual = position - SIDE; virtual <= position + SIDE; virtual += 1) slots.push(virtual);

  return (
    <section
      className={styles.section}
      onPointerEnter={(event) => event.pointerType === 'mouse' && setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={(event) => !event.currentTarget.contains(event.relatedTarget) && setHovered(false)}
    >
      <Container>
        <h2 className={cn('text-headline-lg', styles.title)}>
          {testimonials.titleLines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>
      </Container>

      <div
        className={styles.stage}
        aria-roledescription="carousel"
        aria-label="Testimonials"
        {...(count > 1 ? swipe : {})}
      >
        <ul className={styles.track} aria-live={hovered ? 'polite' : 'off'}>
          {slots.map((virtual) => {
            const offset = virtual - position;
            const itemIndex = wrap(virtual, count);
            const item = items[itemIndex];
            const isActive = offset === 0;
            const isNeighbour = Math.abs(offset) === 1;
            const reachable = isActive || isNeighbour;
            return (
              <li
                key={virtual}
                className={cn(styles.card, isActive && styles.active, Math.abs(offset) >= SIDE && styles.parked)}
                style={{ '--offset': offset }}
                aria-hidden={!reachable}
                inert={!reachable}
                aria-roledescription="slide"
                aria-label={`${itemIndex + 1} of ${count}`}
                aria-current={isActive ? 'true' : undefined}
                onClick={(event) => {
                  // A neighbour comes to the centre when clicked (its own button still opens the quote).
                  if (isNeighbour && !event.target.closest('button')) go(virtual);
                }}
              >
                <figure className={styles.figure}>
                  <span className={styles.openMark} aria-hidden="true" />
                  <blockquote
                    ref={(el) => (el ? quoteRefs.current.set(virtual, el) : quoteRefs.current.delete(virtual))}
                    className={styles.quote}
                  >
                    <p>“{item.quote}”</p>
                  </blockquote>
                  <div className={styles.moreRow}>
                    {clamped[virtual] && (
                      <button type="button" className={styles.more} onClick={() => setOpenItem(item)}>
                        Show More
                        <Icon name="arrowRight" size={14} />
                      </button>
                    )}
                    <span className={styles.closeMark} aria-hidden="true" />
                  </div>
                  <figcaption className={styles.footer}>
                    <span className={styles.name}>{item.name}</span>
                    {item.role && <span className={styles.role}>{item.role}</span>}
                  </figcaption>
                  {isActive && (
                    <span className={styles.count} aria-hidden="true">
                      {pad(itemIndex + 1)}
                      <span> / {pad(count)}</span>
                    </span>
                  )}
                </figure>
              </li>
            );
          })}
        </ul>

        {count > 1 && (
          <>
            <button
              type="button"
              className={cn(styles.arrow, styles.prev)}
              aria-label="Previous testimonial"
              onClick={() => go(position - 1)}
            >
              <Icon name="chevronLeft" size={22} />
            </button>
            <button
              type="button"
              className={cn(styles.arrow, styles.next)}
              aria-label="Next testimonial"
              onClick={() => go(position + 1)}
            >
              <Icon name="chevronRight" size={22} />
            </button>
          </>
        )}
      </div>

      <dialog
        ref={dialogRef}
        className={styles.dialog}
        aria-labelledby="testimonial-dialog-name"
        onClose={() => setOpenItem(null)}
        onClick={(event) => event.target === dialogRef.current && setOpenItem(null)}
      >
        {openItem && (
          <figure className={styles.dialogBody}>
            <button type="button" className={styles.close} onClick={() => setOpenItem(null)} aria-label="Close">
              <Icon name="close" size={22} />
            </button>
            <span className={styles.openMark} aria-hidden="true" />
            <blockquote className={styles.dialogQuote}>
              <p>“{openItem.quote}”</p>
            </blockquote>
            <figcaption className={styles.footer}>
              <span id="testimonial-dialog-name" className={styles.name}>
                {openItem.name}
              </span>
              {openItem.role && <span className={styles.role}>{openItem.role}</span>}
            </figcaption>
          </figure>
        )}
      </dialog>
    </section>
  );
}

export default TestimonialsSection;
