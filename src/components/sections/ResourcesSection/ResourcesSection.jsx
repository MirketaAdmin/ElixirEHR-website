import { useId, useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../../utils/cn';
import { useAutoRotate } from '../../../hooks/useAutoRotate';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import { useSwipe } from '../../../hooks/useSwipe';
import Section from '../../layout/Section/Section';
import Icon from '../../ui/Icon/Icon';
import SectionHeading from '../../ui/SectionHeading/SectionHeading';
import userIcon from '../../../assets/icons/meta-user.png';
import calendarIcon from '../../../assets/icons/meta-calendar.png';
import styles from './ResourcesSection.module.css';

// Seconds between automatic slides: an unhurried pace, one card per step.
const AUTOPLAY_SECONDS = 5;

/** The one resource card, used by every category (only the data changes). */
function ResourceCard({ item, hidden }) {
  return (
    <li className={styles.card} aria-hidden={hidden || undefined} inert={hidden || undefined}>
      <div className={styles.media}>
        <img src={item.image} alt="" width="361" height="224" className={styles.image} />
        <span className={styles.tag}>{item.tag}</span>
      </div>
      <div className={styles.body}>
        <p className={styles.meta}>
          <span className={styles.metaItem}>
            <img src={userIcon} alt="" width="12" height="13" />
            {item.author}
          </span>
          <span className={styles.metaItem}>
            <img src={calendarIcon} alt="" width="13" height="14" />
            {item.date}
          </span>
        </p>
        <h3 className={styles.title}>{item.title}</h3>
        <Link to={item.link.to} className={styles.link}>
          {item.link.label}
          <img src={item.link.icon} alt="" width={item.link.iconSize[0]} height={item.link.iconSize[1]} />
        </Link>
      </div>
    </li>
  );
}

/**
 * One category's cards: the designed row (three across on desktop, two on tablets, one on
 * phones). When a category has more cards than fit, the row becomes a slow carousel moving one
 * card per step — by the arrows, the dots, a swipe, or by itself every few seconds (paused while
 * the pointer or focus is inside, and for reduced motion) — wrapping from the end to the start.
 */
function ResourceCarousel({ items, label }) {
  const desktop = useMediaQuery('(min-width: 1200px)');
  const tablet = useMediaQuery('(min-width: 768px)');
  const perView = desktop ? 3 : tablet ? 2 : 1;
  const positions = Math.max(items.length - perView + 1, 1);
  const [paused, setPaused] = useState(false);
  const [index, select] = useAutoRotate(positions, { interval: AUTOPLAY_SECONDS * 1000, paused });
  const swipe = useSwipe({ onPrev: () => select(index - 1), onNext: () => select(index + 1) });
  const sliding = positions > 1;

  return (
    <div
      onPointerEnter={(event) => event.pointerType === 'mouse' && setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => !event.currentTarget.contains(event.relatedTarget) && setPaused(false)}
    >
      <div
        className={styles.viewport}
        {...(sliding ? { 'aria-roledescription': 'carousel', 'aria-label': label, ...swipe } : {})}
      >
        <ul className={styles.grid} style={{ '--index': index, '--per-view': perView }}>
          {items.map((item, itemIndex) => (
            <ResourceCard
              key={item.title}
              item={item}
              hidden={sliding && (itemIndex < index || itemIndex >= index + perView)}
            />
          ))}
        </ul>
      </div>

      {sliding && (
        <div className={styles.controls}>
          <button
            type="button"
            className={styles.arrow}
            aria-label="Previous resources"
            onClick={() => select(index - 1)}
          >
            <Icon name="chevronLeft" size={22} />
          </button>
          <ol className={styles.dots} aria-label={`${label} positions`}>
            {Array.from({ length: positions }, (_, position) => (
              <li key={position}>
                <button
                  type="button"
                  className={cn(styles.dot, position === index && styles.dotActive)}
                  aria-label={`Show resources ${position + 1} to ${position + perView}`}
                  aria-current={position === index ? 'true' : undefined}
                  onClick={() => select(position)}
                />
              </li>
            ))}
          </ol>
          <button
            type="button"
            className={cn(styles.arrow, styles.arrowNext)}
            aria-label="Next resources"
            onClick={() => select(index + 1)}
          >
            <Icon name="chevronRight" size={22} />
          </button>
        </div>
      )}
    </div>
  );
}

/**
 * Knowledge Base (Home, Referral Program, A/R Agent): category tabs (Blog first, as in the frames)
 * switching the category's cards (see ResourceCarousel). Content comes in as props (`eyebrow`, `title`, `categories`; Home's is
 * `resources` in data/home.js). `tagTone`: 'yellow' (Home) or 'purple' (Referral Program) card tags.
 */
function ResourcesSection({ eyebrow, title, categories, tagTone = 'yellow', className }) {
  const baseId = useId();
  const [active, setActive] = useState(0);
  const tabId = (index) => `${baseId}-tab-${index}`;

  function handleKeyDown(event) {
    const step = { ArrowRight: 1, ArrowLeft: -1 }[event.key];
    let next;
    if (step) next = (active + step + categories.length) % categories.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = categories.length - 1;
    else return;
    event.preventDefault();
    setActive(next);
    document.getElementById(tabId(next))?.focus();
  }

  return (
    <Section tone="surface" spacing="none" className={cn(styles.section, tagTone === 'purple' && styles.purpleTags, className)}>
      <SectionHeading
        eyebrow={eyebrow}
        title={title}
        align="center"
        className={styles.heading}
      />

      <div className={styles.categories} role="tablist" aria-label="Resource categories">
        {categories.map((category, index) => (
          <button
            key={category.label}
            type="button"
            role="tab"
            id={tabId(index)}
            aria-selected={index === active}
            aria-controls={`${baseId}-panel`}
            tabIndex={index === active ? 0 : -1}
            onClick={() => setActive(index)}
            onKeyDown={handleKeyDown}
            className={cn(styles.category, index === active && styles.active)}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div id={`${baseId}-panel`} role="tabpanel" aria-labelledby={tabId(active)}>
        {/* Keyed by category so the new cards fade in, from the first, when the tab changes. */}
        <ResourceCarousel key={active} items={categories[active].items} label={categories[active].label} />
      </div>
    </Section>
  );
}

export default ResourcesSection;
