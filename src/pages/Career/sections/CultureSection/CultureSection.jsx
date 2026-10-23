import { careerCulture } from '../../../../data/career';
import Section from '../../../../components/layout/Section/Section';
import EyebrowHeading from '../../../../components/ui/EyebrowHeading/EyebrowHeading';
import styles from './CultureSection.module.css';

/** "Come work with us": centred heading, four culture cards and the wide Deep Purple "Transparency" card. */
function CultureSection() {
  const { eyebrow, title, description, items, highlight } = careerCulture;

  return (
    <Section tone="white" spacing="none" className={styles.section} aria-labelledby="career-culture-title">
      <EyebrowHeading id="career-culture-title" eyebrow={eyebrow} title={title} align="center" className={styles.heading} />
      <p className={styles.description}>{description}</p>
      <ul className={styles.grid}>
        {items.map((item) => (
          <li key={item.title} className={styles.card}>
            <span className={styles.tile}>
              <img src={item.icon} alt="" width="32" height="32" />
            </span>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.text}>{item.description}</p>
          </li>
        ))}
        <li className={styles.highlight}>
          <span className={styles.circle}>
            <img src={highlight.icon} alt="" width="40" height="40" />
          </span>
          <div>
            <h3 className={styles.highlightTitle}>{highlight.title}</h3>
            <p className={styles.highlightText}>{highlight.description}</p>
          </div>
        </li>
      </ul>
    </Section>
  );
}

export default CultureSection;
