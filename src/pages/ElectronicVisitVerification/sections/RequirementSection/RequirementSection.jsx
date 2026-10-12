import { evvRequirement } from '../../../../data/electronicVisitVerification';
import Section from '../../../../components/layout/Section/Section';
import RichText from '../../../../components/ui/RichText/RichText';
import EyebrowHeading from '../../../../components/ui/EyebrowHeading/EyebrowHeading';
import EvvSource from '../../components/EvvSource/EvvSource';
import styles from './RequirementSection.module.css';

function RequirementSection() {
  const { eyebrow, title, paragraphs, source, aside } = evvRequirement;

  return (
    <Section tone="surface" spacing="none" className={styles.section} aria-labelledby="evv-requirement">
      <div className={styles.grid}>
        <div>
          <EyebrowHeading id="evv-requirement" eyebrow={eyebrow} title={title} />
          <div className={styles.body}>
            {paragraphs.map((paragraph, index) => (
              <p key={index}>
                <RichText content={paragraph} strongClassName={styles.strong} />
              </p>
            ))}
          </div>
          <EvvSource source={source} className={styles.source} />
        </div>

        <aside className={styles.card} aria-labelledby="evv-not">
          <h3 id="evv-not" className={styles.cardTitle}>
            {aside.title}
          </h3>
          <ul className={styles.list}>
            {aside.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>
      </div>
    </Section>
  );
}

export default RequirementSection;
