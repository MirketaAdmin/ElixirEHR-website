import { mhDocumentation } from '../../../../data/mentalHealth';
import Section from '../../../../components/layout/Section/Section';
import BhIntro from '../../../BehavioralHealth/components/BhIntro/BhIntro';
import styles from './DocumentationSection.module.css';

/** "Clinical Documentation for Outpatient Mental Health" (dark) — twelve cards, four per row. */
function DocumentationSection() {
  const { eyebrow, title, description, items } = mhDocumentation;

  return (
    <Section tone="dark" spacing="none" className={styles.section} aria-labelledby="mh-documentation-title">
      <BhIntro
        id="mh-documentation-title"
        eyebrow={eyebrow}
        title={title}
        description={description}
        tone="dark"
        className={styles.intro}
      />
      <ul className={styles.grid}>
        {items.map((item) => (
          <li key={item.title} className={styles.card}>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.text}>{item.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default DocumentationSection;
