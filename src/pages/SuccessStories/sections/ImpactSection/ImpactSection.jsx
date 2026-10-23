import { useId, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { successStoriesImpact } from '../../../../data/successStories';
import Section from '../../../../components/layout/Section/Section';
import EyebrowHeading from '../../../../components/ui/EyebrowHeading/EyebrowHeading';
import Icon from '../../../../components/ui/Icon/Icon';
import { useAutoRotate } from '../../../../hooks/useAutoRotate';
import { useSwipe } from '../../../../hooks/useSwipe';
import styles from './ImpactSection.module.css';

/**
 * A story link when the story has a page (`to`); until then the label is shown as drawn but is not
 * interactive (and hidden from assistive tech, since it leads nowhere).
 */
function StoryLink({ to, className, children }) {
  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <span className={className} aria-hidden="true">
      {children}
    </span>
  );
}

/**
 * "Our Impact in Action": the featured-story carousel and the story cards.
 *
 * Only one featured story (with a quote) is supplied, so the carousel also cycles through the story
 * cards as summary slides — their own tag, title, text and image, no quote — until more featured
 * stories arrive. It loops, advances every 6 seconds (paused while the pointer or focus is inside,
 * and for reduced motion), and swipes on touch screens.
 */
function ImpactSection() {
  const { eyebrow, title, description, featured, stories } = successStoriesImpact;
  const featuredId = useId();
  const slides = useMemo(
    () => [
      ...featured,
      ...stories.map((item) => ({ tag: item.category, title: item.title, text: item.text, image: item.image })),
    ],
    [featured, stories],
  );
  const [paused, setPaused] = useState(false);
  const [index, select] = useAutoRotate(slides.length, { interval: 6000, paused });
  const swipe = useSwipe({ onPrev: () => select(index - 1), onNext: () => select(index + 1) });
  const story = slides[index];

  return (
    <Section spacing="none" className={styles.section} aria-labelledby="ss-impact">
      <div className={styles.header}>
        <div>
          <EyebrowHeading id="ss-impact" eyebrow={eyebrow} title={title} className={styles.heading} />
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.controls}>
          <button
            type="button"
            className={styles.prev}
            aria-label="Previous featured story"
            aria-controls={featuredId}
            onClick={() => select(index - 1)}
          >
            <Icon name="arrowLeft" size={20} />
          </button>
          <button
            type="button"
            className={styles.next}
            aria-label="Next featured story"
            aria-controls={featuredId}
            onClick={() => select(index + 1)}
          >
            <Icon name="arrowRight" size={20} />
          </button>
        </div>
      </div>

      <div
        className={styles.carousel}
        aria-roledescription="carousel"
        aria-label="Featured stories"
        onPointerEnter={() => setPaused(true)}
        onPointerLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={(event) => !event.currentTarget.contains(event.relatedTarget) && setPaused(false)}
        {...swipe}
      >
        {/* Keyed by slide so each new story fades in. */}
        <article
          key={index}
          id={featuredId}
          className={styles.featured}
          aria-roledescription="slide"
          aria-label={`${index + 1} of ${slides.length}`}
          aria-live={paused ? 'polite' : 'off'}
        >
          {story.quote ? (
            <img src={story.image.src} alt={story.image.alt} width="576" height="666" className={styles.featuredImage} />
          ) : (
            // Story-card photos are small 360 × 224 crops: framed near their own size rather than
            // stretched to fill the portrait slot.
            <div className={styles.summaryMedia}>
              <img src={story.image.src} alt={story.image.alt} width="360" height="224" />
            </div>
          )}
          <div className={styles.featuredBody}>
            <p className={styles.tag}>{story.tag}</p>
            <h3 className={styles.featuredTitle}>{story.title}</h3>
            {story.quote ? (
              <blockquote className={styles.quote}>
                <p>{story.quote}</p>
                <footer className={styles.attribution}>{story.attribution}</footer>
              </blockquote>
            ) : (
              <p className={styles.summary}>{story.text}</p>
            )}
            {story.cta && (
              <StoryLink to={story.cta.to} className={styles.featuredCta}>
                {story.cta.label}
              </StoryLink>
            )}
          </div>
        </article>
      </div>

      <ul className={styles.grid}>
        {stories.map((item) => (
          <li key={item.title} className={styles.card}>
            <div className={styles.media}>
              <img src={item.image.src} alt={item.image.alt} width="360" height="224" />
              <span className={styles.badge}>{item.category}</span>
            </div>
            <div className={styles.body}>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.text}>{item.text}</p>
              <StoryLink to={item.to} className={styles.readMore}>
                Read more
                <Icon name="arrowRight" size={14} />
              </StoryLink>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default ImpactSection;
