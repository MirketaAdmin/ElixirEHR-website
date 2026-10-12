import { evvElements } from '../../../../data/electronicVisitVerification';
import Section from '../../../../components/layout/Section/Section';
import EyebrowHeading from '../../../../components/ui/EyebrowHeading/EyebrowHeading';
import EvvSource from '../../components/EvvSource/EvvSource';
import styles from './ElementsSection.module.css';

function ElementsSection() {
  const { eyebrow, title, description, items, source } = evvElements;

  return (
    <Section spacing="none" className={styles.section} aria-labelledby="evv-elements">
      <EyebrowHeading id="evv-elements" eyebrow={eyebrow} title={title} align="center" className={styles.heading} />
      <p className={styles.description}>{description}</p>

      <ol className={styles.grid}>
        {items.map((item, index) => (
          <li key={item.title} className={styles.card}>
            <p className={styles.label}>Element {String(index + 1).padStart(2, '0')}</p>
            <img src={item.icon} alt="" width="32" height="32" className={styles.icon} />
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.text}>{item.text}</p>
          </li>
        ))}
      </ol>

      <EvvSource source={source} className={styles.source} />
    </Section>
  );
}

export default ElementsSection;
