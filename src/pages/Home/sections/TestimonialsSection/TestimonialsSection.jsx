import { useEffect, useRef, useState } from 'react';
import { testimonials } from '../../../../data/home';
import { cn } from '../../../../utils/cn';
import { useAutoRotate } from '../../../../hooks/useAutoRotate';
import { useMediaQuery } from '../../../../hooks/useMediaQuery';
import { useSwipe } from '../../../../hooks/useSwipe';
import Section from '../../../../components/layout/Section/Section';
import Icon from '../../../../components/ui/Icon/Icon';
import styles from './TestimonialsSection.module.css';

const pad = (value) => String(value).padStart(2, '0');

/**
 * Testimonial carousel — "verified review" cards. Every card has the same fixed size: the
 * organization pill (when the customer is a person at an organization), the quote (trimmed to the card with a "Read full testimonial" button that
 * opens the whole quote in a dialog), and a footer with the name and position.
 * Cards alternate Deep Purple and Rose White.
 *
 * Two cards per view on desktop, one below 1200px. The row moves one card per step, by the
 * arrows, by swiping, or automatically every `testimonials.autoplaySeconds` (paused while the
 * pointer or focus is inside, while the dialog is open, and for reduced motion), wrapping from the
 * last position to the first. The segmented bar beside the arrows shows the position and fills
 * over each interval.
 */
function TestimonialsSection() {
  const { items, autoplaySeconds } = testimonials;
  const perView = useMediaQuery('(min-width: 1200px)') ? 2 : 1;
  const positions = Math.max(items.length - perView + 1, 1);
  const [hovered, setHovered] = useState(false);
  const [openItem, setOpenItem] = useState(null);
  const paused = hovered || openItem !== null;
  const [index, select] = useAutoRotate(positions, { interval: autoplaySeconds * 1000, paused });
  const swipe = useSwipe({ onPrev: () => select(index - 1), onNext: () => select(index + 1) });

  // Which quotes are cut off by the fixed card height (re-measured when the cards resize).
  const quoteRefs = useRef([]);
  const [clamped, setClamped] = useState([]);
  useEffect(() => {
    const measure = () =>
      setClamped(quoteRefs.current.map((el) => Boolean(el) && el.scrollHeight > el.clientHeight + 1));
    measure();
    const observer = new ResizeObserver(measure);
    quoteRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [perView]);

  const dialogRef = useRef(null);
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (openItem && !dialog.open) dialog.showModal();
    else if (!openItem && dialog.open) dialog.close();
  }, [openItem]);

  return (
    <Section
      spacing="none"
      className={styles.section}
      onPointerEnter={(event) => event.pointerType === 'mouse' && setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={(event) => !event.currentTarget.contains(event.relatedTarget) && setHovered(false)}
    >
      <div className={styles.header}>
        <div>
          <p className={styles.eyebrow}>{testimonials.eyebrow}</p>
          <h2 className={cn('text-headline-lg', styles.title)}>
            {testimonials.titleLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
        </div>
        <div className={styles.controls}>
          {positions > 1 && (
            <ol className={styles.progress} aria-label="Testimonial positions">
              {Array.from({ length: positions }, (_, position) => (
                <li key={position}>
                  <button
                    type="button"
                    className={cn(styles.segment, position < index && styles.done, position === index && styles.current)}
                    style={{ '--interval': `${autoplaySeconds}s` }}
                    data-paused={paused || undefined}
                    onClick={() => select(position)}
                    aria-label={`Show testimonial ${position + 1}`}
                    aria-current={position === index ? 'true' : undefined}
                  >
                    {/* Keyed so the fill restarts with the timer: on a new position and when a pause ends. */}
                    {position === index && <span key={`${index}-${paused}`} className={styles.fill} />}
                  </button>
                </li>
              ))}
            </ol>
          )}
          <button
            type="button"
            className={styles.control}
            aria-label="Previous testimonial"
            aria-controls="testimonial-track"
            onClick={() => select(index - 1)}
            disabled={positions < 2}
          >
            <Icon name="chevronLeft" />
          </button>
          <button
            type="button"
            className={cn(styles.control, styles.controlNext)}
            aria-label="Next testimonial"
            aria-controls="testimonial-track"
            onClick={() => select(index + 1)}
            disabled={positions < 2}
          >
            <Icon name="chevronRight" />
          </button>
        </div>
      </div>

      <div className={styles.viewport} aria-roledescription="carousel" aria-label="Testimonials" {...(positions > 1 ? swipe : {})}>
        <ul
          id="testimonial-track"
          className={styles.list}
          aria-live={paused ? 'polite' : 'off'}
          style={{ '--index': index, '--per-view': perView }}
        >
          {items.map((item, itemIndex) => {
            const inView = itemIndex >= index && itemIndex < index + perView;
            return (
              <li
                key={item.name}
                className={cn(styles.card, itemIndex % 2 === 0 && styles.dark)}
                aria-hidden={!inView}
                inert={!inView}
              >
                <figure className={styles.figure}>
                  <div className={styles.top}>
                    <span className={styles.mark} aria-hidden="true" />
                    {item.role && <span className={styles.org}>{item.role}</span>}
                  </div>
                  <blockquote ref={(el) => (quoteRefs.current[itemIndex] = el)} className={styles.quote}>
                    <p>“{item.quote}”</p>
                  </blockquote>
                  {clamped[itemIndex] && (
                    <button type="button" className={styles.more} onClick={() => setOpenItem(item)}>
                      Read full testimonial
                      <Icon name="arrowRight" size={16} />
                    </button>
                  )}
                  <figcaption className={styles.footer}>
                    <span className={styles.name}>{item.name}</span>
                    <span className={styles.count} aria-hidden="true">
                      {pad(itemIndex + 1)} <span>/ {pad(items.length)}</span>
                    </span>
                  </figcaption>
                </figure>
              </li>
            );
          })}
        </ul>
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
            <span className={styles.mark} aria-hidden="true" />
            <blockquote className={styles.dialogQuote}>
              <p>“{openItem.quote}”</p>
            </blockquote>
            <figcaption className={styles.footer}>
              <span>
                <span id="testimonial-dialog-name" className={styles.name}>
                  {openItem.name}
                </span>
                {openItem.role && <span className={styles.role}>{openItem.role}</span>}
              </span>
            </figcaption>
          </figure>
        )}
      </dialog>
    </Section>
  );
}

export default TestimonialsSection;
