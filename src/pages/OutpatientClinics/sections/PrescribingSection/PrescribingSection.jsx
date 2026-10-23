import { opPrescribing } from '../../../../data/outpatientClinics';
import Section from '../../../../components/layout/Section/Section';
import { cn } from '../../../../utils/cn';
import shieldIcon from '../../../../assets/outpatient-clinics/icon-shield-sm.png';
import OpIntro from '../../components/OpIntro/OpIntro';
import styles from './PrescribingSection.module.css';

/** "e-Prescribing, EPCS and Medication Management" — intro and badge left, four cards right. */
function PrescribingSection() {
  const { eyebrow, title, description, badge, items } = opPrescribing;

  return (
    <Section tone="white" spacing="none" className={styles.section} aria-labelledby="op-prescribing-title">
      <div className={styles.layout}>
        <div>
          <OpIntro
            id="op-prescribing-title"
            accent="yellow"
            eyebrow={eyebrow}
            title={title}
            description={description}
            className={styles.intro}
          />
          <div className={styles.badge}>
            <p className={styles.badgeLabel}>
              <img src={shieldIcon} alt="" width="14" height="17" />
              {badge.label}
            </p>
            <p className={styles.badgeTitle}>{badge.title}</p>
            <p className={styles.badgeText}>{badge.text}</p>
          </div>
        </div>
        <ul className={styles.list}>
          {items.map((item) => (
            <li key={item.title} className={styles.card}>
              <div className={styles.head}>
                <h3 className={styles.title}>{item.title}</h3>
                <span className={cn(styles.chip, item.tone && styles[item.tone])}>{item.chip}</span>
              </div>
              <p className={styles.text}>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export default PrescribingSection;
