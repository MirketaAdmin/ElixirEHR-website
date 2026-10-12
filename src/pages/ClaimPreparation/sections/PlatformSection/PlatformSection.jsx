import { pcPlatform } from '../../../../data/claimPreparation';
import Section from '../../../../components/layout/Section/Section';
import PcSplit from '../../components/PcSplit/PcSplit';
import PcCheckList from '../../components/PcCheckList/PcCheckList';
import styles from './PlatformSection.module.css';

function PlatformSection() {
  const { title, description, points, icon, frame } = pcPlatform;

  return (
    <Section spacing="none" className={styles.section}>
      <PcSplit frame={frame}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <PcCheckList items={points} icon={icon} className={styles.list} />
      </PcSplit>
    </Section>
  );
}

export default PlatformSection;
