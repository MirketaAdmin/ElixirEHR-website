import { pcClaimTypes } from '../../../../data/claimPreparation';
import Section from '../../../../components/layout/Section/Section';
import PcSplit from '../../components/PcSplit/PcSplit';
import PcCheckList from '../../components/PcCheckList/PcCheckList';
import styles from './ClaimTypesSection.module.css';

function ClaimTypesSection() {
  const { title, description, icon, types } = pcClaimTypes;

  return (
    <Section spacing="none" className={styles.section}>
      <div className={styles.intro}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
      {types.map((type, index) => (
        <PcSplit key={type.title} frame={type.frame} reverse={index % 2 === 1} className={styles.row}>
          <p className={styles.badge}>{type.badge}</p>
          <h3 className={styles.typeTitle}>{type.title}</h3>
          <PcCheckList items={type.points} icon={icon} className={styles.list} />
        </PcSplit>
      ))}
    </Section>
  );
}

export default ClaimTypesSection;
