import { cn } from '../../../../utils/cn';
import Section from '../../../../components/layout/Section/Section';
import styles from './FeatureSplitSection.module.css';

/** Image + text split used by the four EHR feature bands (Patient Management … Lab Ordering). */
function FeatureSplitSection({ id, title, paragraphs, image, mediaSide, tone }) {
  return (
    <Section
      tone={tone}
      spacing="none"
      className={cn(styles.section, styles[id])}
      containerClassName={cn(styles.inner, mediaSide === 'right' && styles.mediaRight)}
      aria-labelledby={`${id}-title`}
    >
      <div className={styles.media}>
        <img src={image.src} alt={image.alt} width="504" height="455" />
      </div>
      <div className={styles.content}>
        <h2 id={`${id}-title`} className={styles.title}>
          {title}
        </h2>
        {paragraphs.map((paragraph) => (
          <p key={paragraph} className={styles.paragraph}>
            {paragraph}
          </p>
        ))}
      </div>
    </Section>
  );
}

export default FeatureSplitSection;
