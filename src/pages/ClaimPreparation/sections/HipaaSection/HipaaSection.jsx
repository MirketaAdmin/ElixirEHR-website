import { pcHipaa } from '../../../../data/claimPreparation';
import Section from '../../../../components/layout/Section/Section';
import PcSplit from '../../components/PcSplit/PcSplit';
import PcCheckList from '../../components/PcCheckList/PcCheckList';
import styles from './HipaaSection.module.css';

function HipaaSection() {
  const { title, description, items, frame } = pcHipaa;

  return (
    <Section tone="surface" spacing="none" className={styles.section}>
      <PcSplit frame={frame}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <PcCheckList items={items} className={styles.list} />
      </PcSplit>
    </Section>
  );
}

export default HipaaSection;
