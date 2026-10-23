import { raData } from '../../../../data/responsibleAi';
import Section from '../../../../components/layout/Section/Section';
import { cn } from '../../../../utils/cn';
import RaIntro from '../../components/RaIntro/RaIntro';
import styles from './DataSection.module.css';

/** "How we handle patient data and AI training" (dark) — four commitments. */
function DataSection() {
  const { chip, title, description, items } = raData;

  return (
    <Section tone="dark" spacing="none" className={styles.section} aria-labelledby="ra-data-title">
      <RaIntro
        id="ra-data-title"
        chip={chip}
        title={title}
        description={description}
        align="center"
        tone="dark"
        className={styles.intro}
      />
      <ul className={styles.grid}>
        {items.map((item) => (
          <li key={item.title} className={cn(styles.card, styles[item.tone])}>
            <span className={styles.tile}>
              <img src={item.icon.src} alt="" width={item.icon.size[0]} height={item.icon.size[1]} />
            </span>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.text}>{item.text}</p>
            <p className={styles.label}>{item.label}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default DataSection;
