import { raRevenue } from '../../../../data/responsibleAi';
import Section from '../../../../components/layout/Section/Section';
import RaIntro from '../../components/RaIntro/RaIntro';
import RaEnforced from '../../components/RaEnforced/RaEnforced';
import styles from './RevenueSection.module.css';

/** "Responsible AI principles for coding, claims and the revenue cycle" — three swimlanes. */
function RevenueSection() {
  const { chip, title, description, lanes } = raRevenue;

  return (
    <Section tone="surface" spacing="none" className={styles.section} aria-labelledby="ra-revenue-title">
      <RaIntro
        id="ra-revenue-title"
        chip={chip}
        chipTone="teal"
        title={title}
        description={description}
        className={styles.intro}
      />
      <div className={styles.lanes}>
        {lanes.map((lane, laneIndex) => (
          <section key={lane.label} className={styles.lane} aria-label={lane.label}>
            <p className={styles.laneHead}>
              <span className={styles.badge}>Swimlane {String(laneIndex + 1).padStart(2, '0')}</span>
              {lane.label}
            </p>
            <ol className={styles.principles} start={laneIndex * 2 + 1}>
              {lane.principles.map((principle, index) => (
                <li key={principle.title} className={styles.principle}>
                  <h3 className={styles.title}>
                    <span className={styles.number}>{laneIndex * 2 + index + 1}</span>
                    {principle.title}
                  </h3>
                  <p className={styles.text}>{principle.text}</p>
                  <RaEnforced
                    text={principle.enforced}
                    appliesTo={principle.appliesTo}
                    tone="teal"
                    className={styles.box}
                  />
                </li>
              ))}
            </ol>
          </section>
        ))}
      </div>
    </Section>
  );
}

export default RevenueSection;
