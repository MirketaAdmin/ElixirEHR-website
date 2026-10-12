import { pcRejectionPrediction } from '../../../../data/claimPreparation';
import Section from '../../../../components/layout/Section/Section';
import PcSplit from '../../components/PcSplit/PcSplit';
import PcCheckList from '../../components/PcCheckList/PcCheckList';
import styles from './RejectionPredictionSection.module.css';

function RejectionPredictionSection() {
  const { title, description, icon, points, frame } = pcRejectionPrediction;

  return (
    <Section spacing="none" className={styles.section}>
      <PcSplit frame={frame} reverse className={styles.split}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <PcCheckList items={points} icon={icon} className={styles.list} />
      </PcSplit>
    </Section>
  );
}

export default RejectionPredictionSection;
