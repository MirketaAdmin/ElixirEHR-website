import { noShowScope } from '../../../../data/patientNoShowPrediction';
import Section from '../../../../components/layout/Section/Section';
import { cn } from '../../../../utils/cn';
import SectionIntro from '../../components/SectionIntro/SectionIntro';
import styles from './ScopeSection.module.css';

/** "What the software actually predicts": what it does (lime cards) and does not do (grey cards). */
function ScopeSection() {
  const { chip, title, description, items } = noShowScope;

  return (
    <Section spacing="none" className={styles.section} aria-labelledby="ns-scope-title">
      <SectionIntro
        id="ns-scope-title"
        chip={chip}
        chipTone="tint"
        title={title}
        description={description}
        className={styles.intro}
      />
      <ul className={styles.grid}>
        {items.map((item) => (
          <li key={item.tag} className={cn(styles.card, styles[item.tone])}>
            <p className={styles.tag}>{item.tag}</p>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.text}>{item.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default ScopeSection;
