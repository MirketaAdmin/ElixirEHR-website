import { useId, useState } from 'react';
import { features } from '../../../../data/home';
import { cn } from '../../../../utils/cn';
import { useAutoRotate } from '../../../../hooks/useAutoRotate';
import Section from '../../../../components/layout/Section/Section';
import ImagePlaceholder from '../../../../components/ui/ImagePlaceholder/ImagePlaceholder';
import styles from './FeaturesSection.module.css';

/**
 * Feature tabs: the active feature's screenshot shows on the right. The section steps through the
 * features by itself (`features.rotationSeconds` each); choosing one restarts the countdown from
 * it, and rotation pauses while the pointer or keyboard focus is in the section.
 */
function FeaturesSection() {
  const baseId = useId();
  const [paused, setPaused] = useState(false);
  const [active, select] = useAutoRotate(features.items.length, {
    interval: features.rotationSeconds * 1000,
    paused,
  });
  const tabId = (index) => `${baseId}-tab-${index}`;

  function handleKeyDown(event) {
    const step = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[event.key];
    if (!step) return;
    event.preventDefault();
    const next = (active + step + features.items.length) % features.items.length;
    select(next);
    document.getElementById(tabId(next))?.focus();
  }

  return (
    <Section
      tone="surface"
      spacing="none"
      className={styles.section}
      containerClassName={styles.inner}
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => !event.currentTarget.contains(event.relatedTarget) && setPaused(false)}
    >
      <div className={styles.content}>
        <p className={styles.eyebrow}>{features.eyebrow}</p>
        <h2 className={cn('text-headline-lg', styles.title)}>
          {features.titleLines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>
        <div className={styles.list} role="tablist" aria-orientation="vertical" aria-label="Elixir features">
          {features.items.map((item, index) => (
            <button
              key={item.title}
              type="button"
              role="tab"
              id={tabId(index)}
              aria-selected={index === active}
              aria-controls={`${baseId}-panel`}
              tabIndex={index === active ? 0 : -1}
              onClick={() => select(index)}
              onKeyDown={handleKeyDown}
              className={cn(styles.item, index === active && styles.active, paused && styles.paused)}
              style={{ '--rotation': `${features.rotationSeconds}s` }}
            >
              {/* Keyed so the bar restarts with the timer (new feature, or rotation resuming). */}
              {index === active && <span key={`${active}-${paused}`} className={styles.progress} aria-hidden="true" />}
              <span className={styles.itemTitle}>{item.title}</span>
              <span className={styles.itemDescription}>{item.description}</span>
            </button>
          ))}
        </div>
      </div>

      <div id={`${baseId}-panel`} role="tabpanel" aria-labelledby={tabId(active)} className={styles.media}>
        {features.items.map((item, index) => (
          <div key={item.title} className={cn(styles.slide, index === active && styles.visible)} aria-hidden={index !== active}>
            {item.image ? (
              <img src={item.image.src} alt={item.image.alt} width="810" height="530" className={styles.image} />
            ) : (
              <ImagePlaceholder className={styles.placeholder} description={`Product screenshot: ${item.title}`} />
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}

export default FeaturesSection;
