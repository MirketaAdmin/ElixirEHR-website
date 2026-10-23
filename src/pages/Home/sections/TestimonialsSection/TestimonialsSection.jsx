import { useState } from 'react';
import { Link } from 'react-router-dom';
import { testimonials } from '../../../../data/home';
import { cn } from '../../../../utils/cn';
import { useAutoRotate } from '../../../../hooks/useAutoRotate';
import { useMediaQuery } from '../../../../hooks/useMediaQuery';
import { useSwipe } from '../../../../hooks/useSwipe';
import Section from '../../../../components/layout/Section/Section';
import Icon from '../../../../components/ui/Icon/Icon';
import styles from './TestimonialsSection.module.css';

/**
 * Testimonial carousel: two cards per view on desktop, one below 1200px. Cards alternate Deep
 * Purple and Rose White; each opens with a quotation-mark tile (no photos) and ends with the
 * customer's name and organization. It moves one card per
 * step — by the arrows or automatically every `testimonials.autoplaySeconds` (paused while the
 * pointer or focus is inside) — and wraps from the last position to the first. With no more
 * cards than fit in one view, the arrows are disabled and nothing moves.
 */
function TestimonialsSection() {
  const { items } = testimonials;
  const perView = useMediaQuery('(min-width: 1200px)') ? 2 : 1;
  const positions = Math.max(items.length - perView + 1, 1);
  const [paused, setPaused] = useState(false);
  const [index, select] = useAutoRotate(positions, { interval: testimonials.autoplaySeconds * 1000, paused });
  const swipe = useSwipe({ onPrev: () => select(index - 1), onNext: () => select(index + 1) });

  return (
    <Section
      spacing="none"
      className={styles.section}
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => !event.currentTarget.contains(event.relatedTarget) && setPaused(false)}
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
            className={styles.control}
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
                className={cn(styles.card, itemIndex % 2 === 0 && styles.featured)}
                aria-hidden={!inView}
                inert={!inView}
              >
                <span className={styles.quoteTile} aria-hidden="true" />
                <figure className={styles.body}>
                  <blockquote className={styles.quote}>“{item.quote}”</blockquote>
                  <figcaption className={styles.attribution}>
                    <p className={styles.name}>{item.name}</p>
                    {item.role && <p className={styles.role}>{item.role}</p>}
                  </figcaption>
                  {item.to && (
                    <Link to={item.to} className={styles.link}>
                      <Icon name="playCircle" />
                      {testimonials.linkLabel}
                    </Link>
                  )}
                </figure>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}

export default TestimonialsSection;
