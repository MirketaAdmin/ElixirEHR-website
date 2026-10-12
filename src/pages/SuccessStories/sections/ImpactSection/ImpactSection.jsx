import { useId, useState } from 'react';
import { Link } from 'react-router-dom';
import { successStoriesImpact } from '../../../../data/successStories';
import Section from '../../../../components/layout/Section/Section';
import EyebrowHeading from '../../../../components/ui/EyebrowHeading/EyebrowHeading';
import Icon from '../../../../components/ui/Icon/Icon';
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

/** "Our Impact in Action": featured story (with previous/next controls) and the story cards. */
function ImpactSection() {
  const { eyebrow, title, description, featured, stories } = successStoriesImpact;
  const featuredId = useId();
  const [index, setIndex] = useState(0);
  const story = featured[index];
  const atStart = index === 0;
  const atEnd = index === featured.length - 1;

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
            aria-disabled={atStart}
            onClick={() => !atStart && setIndex(index - 1)}
          >
            <Icon name="arrowLeft" size={20} />
          </button>
          <button
            type="button"
            className={styles.next}
            aria-label="Next featured story"
            aria-controls={featuredId}
            aria-disabled={atEnd}
            onClick={() => !atEnd && setIndex(index + 1)}
          >
            <Icon name="arrowRight" size={20} />
          </button>
        </div>
      </div>

      <article id={featuredId} className={styles.featured} aria-live="polite">
        <img src={story.image.src} alt={story.image.alt} width="576" height="666" className={styles.featuredImage} />
        <div className={styles.featuredBody}>
          <p className={styles.tag}>{story.tag}</p>
          <h3 className={styles.featuredTitle}>{story.title}</h3>
          <blockquote className={styles.quote}>
            <p>{story.quote}</p>
            <footer className={styles.attribution}>{story.attribution}</footer>
          </blockquote>
          <StoryLink to={story.cta.to} className={styles.featuredCta}>
            {story.cta.label}
          </StoryLink>
        </div>
      </article>

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
