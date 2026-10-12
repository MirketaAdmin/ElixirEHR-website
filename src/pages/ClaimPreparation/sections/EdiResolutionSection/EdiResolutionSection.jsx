import { pcEdiResolution } from '../../../../data/claimPreparation';
import Section from '../../../../components/layout/Section/Section';
import PcSplit from '../../components/PcSplit/PcSplit';
import PcCheckList from '../../components/PcCheckList/PcCheckList';
import styles from './EdiResolutionSection.module.css';

function EdiResolutionSection() {
  const { title, description, items, frame } = pcEdiResolution;

  return (
    <Section spacing="none" className={styles.section}>
      <PcSplit frame={frame} className={styles.split}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>
          {description.before}
          <code className={styles.code}>{description.code}</code>
          {description.after}
        </p>
        <PcCheckList items={items} className={styles.list} />
      </PcSplit>
    </Section>
  );
}

export default EdiResolutionSection;
