import { useState } from 'react';
import { Link } from 'react-router-dom';
import { testimonials } from '../../../../data/home';
import { cn } from '../../../../utils/cn';
import { useAutoRotate } from '../../../../hooks/useAutoRotate';
import { useMediaQuery } from '../../../../hooks/useMediaQuery';
import Section from '../../../../components/layout/Section/Section';
import Icon from '../../../../components/ui/Icon/Icon';
import styles from './TestimonialsSection.module.css';

function initials(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('');
}

/**
 * Testimonial carousel: two cards per view on desktop, one below 1200px. It moves one card per
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

      <div className={styles.viewport}>
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
                className={cn(styles.card, item.featured && styles.featured)}
                aria-hidden={!inView}
                inert={!inView}
              >
                <span className={styles.quoteMark} aria-hidden="true" />
                {item.photo ? (
                  <img src={item.photo} alt={item.name} width="124" height="124" className={styles.photo} />
                ) : (
                  <span className={cn(styles.photo, styles.monogram)} aria-hidden="true">
                    {initials(item.name)}
                  </span>
                )}
                <figure className={styles.body}>
                  <figcaption>
                    <p className={styles.name}>{item.name}</p>
                    <p className={styles.role}>{item.role}</p>
                  </figcaption>
                  <blockquote className={styles.quote}>{item.quote}</blockquote>
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
