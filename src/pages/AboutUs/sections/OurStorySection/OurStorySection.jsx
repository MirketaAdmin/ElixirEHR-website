import { ourStory } from '../../../../data/about';
import { cn } from '../../../../utils/cn';
import Section from '../../../../components/layout/Section/Section';
import storyImage from '../../../../assets/about/our-story-team.png';
import styles from './OurStorySection.module.css';

function highlightFounder(text) {
  const [before, after] = text.split(ourStory.founder);
  if (after === undefined) return text;
  return (
    <>
      {before}
      <span className={styles.founder}>{ourStory.founder}</span>
      {after}
    </>
  );
}

function OurStorySection() {
  return (
    <Section spacing="none" className={styles.section} containerClassName={styles.inner}>
      <figure className={styles.media}>
        <img
          src={storyImage}
          alt="Elixir clinicians reviewing the platform on a large display"
          width="542"
          height="305"
          className={styles.image}
        />
        <figcaption className={styles.badge}>
          <span className={styles.badgeTitle}>{ourStory.badge.title}</span>
          <span className={styles.badgeSubtitle}>{ourStory.badge.subtitle}</span>
        </figcaption>
      </figure>

      <div>
        <p className={styles.eyebrow}>{ourStory.eyebrow}</p>
        <h2 className={cn('text-headline-lg', styles.title)}>{ourStory.title}</h2>
        {ourStory.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 24)} className={styles.paragraph}>
            {highlightFounder(paragraph)}
          </p>
        ))}
        <blockquote className={styles.quote}>
          <span className={styles.quoteBar} aria-hidden="true" />
          <p>{ourStory.quote}</p>
        </blockquote>
      </div>
    </Section>
  );
}

export default OurStorySection;
