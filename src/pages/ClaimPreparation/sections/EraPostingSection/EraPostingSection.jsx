import { pcEraPosting } from '../../../../data/claimPreparation';
import Section from '../../../../components/layout/Section/Section';
import PcSplit from '../../components/PcSplit/PcSplit';
import styles from './EraPostingSection.module.css';

function EraPostingSection() {
  const { title, description, frame } = pcEraPosting;

  return (
    <Section tone="surface" spacing="none" className={styles.section}>
      <PcSplit frame={frame} className={styles.split}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </PcSplit>
    </Section>
  );
}

export default EraPostingSection;
