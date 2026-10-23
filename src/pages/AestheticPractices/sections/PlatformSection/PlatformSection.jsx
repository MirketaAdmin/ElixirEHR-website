import { Link } from 'react-router-dom';
import { aePlatform } from '../../../../data/aestheticPractices';
import Section from '../../../../components/layout/Section/Section';
import AeIntro from '../../components/AeIntro/AeIntro';
import styles from './PlatformSection.module.css';

/** "Built on Salesforce: The CRM Half of an Aesthetic Practice" — an inset text column with related links. */
function PlatformSection() {
  const { eyebrow, title, lead, paragraphs, related } = aePlatform;

  return (
    <Section tone="surface" spacing="none" className={styles.section} aria-labelledby="ae-platform-title">
      <div className={styles.inner}>
        <AeIntro id="ae-platform-title" eyebrow={eyebrow} title={title} description={lead} className={styles.intro} />
        {paragraphs.map((paragraph) => (
          <p key={paragraph} className={styles.text}>
            {paragraph}
          </p>
        ))}
        <p className={styles.related}>
          <span>Related:</span>
          {related.map((part) =>
            part.to ? (
              <Link key={part.text} to={part.to} className={styles.link}>
                {part.text}
              </Link>
            ) : (
              <span key={part.text}>{part.text}</span>
            ),
          )}
        </p>
      </div>
    </Section>
  );
}

export default PlatformSection;
