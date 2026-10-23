import { opCoverage } from '../../../../data/outpatientClinics';
import Section from '../../../../components/layout/Section/Section';
import shieldIcon from '../../../../assets/outpatient-clinics/icon-shield-check.png';
import OpIntro from '../../components/OpIntro/OpIntro';
import styles from './CoverageSection.module.css';

/** "Insurance Eligibility Verification" — intro and badge left, four numbered cards right. */
function CoverageSection() {
  const { eyebrow, title, description, badge, items } = opCoverage;

  return (
    <Section tone="white" spacing="none" className={styles.section} aria-labelledby="op-coverage-title">
      <div className={styles.layout}>
        <div>
          <OpIntro
            id="op-coverage-title"
            accent="yellow"
            eyebrow={eyebrow}
            title={title}
            description={description}
            className={styles.intro}
          />
          <div className={styles.badge}>
            <img src={shieldIcon} alt="" width="22" height="28" />
            <div>
              <p className={styles.badgeTitle}>{badge.title}</p>
              <p className={styles.badgeText}>{badge.text}</p>
            </div>
          </div>
        </div>
        <ol className={styles.list}>
          {items.map((item, index) => (
            <li key={item.title} className={styles.card}>
              <span className={styles.number}>{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.text}>{item.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

export default CoverageSection;
