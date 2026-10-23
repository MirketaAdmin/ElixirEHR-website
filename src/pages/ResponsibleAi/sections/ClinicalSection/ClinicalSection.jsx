import { raClinical } from '../../../../data/responsibleAi';
import Section from '../../../../components/layout/Section/Section';
import { cn } from '../../../../utils/cn';
import RaIntro from '../../components/RaIntro/RaIntro';
import RaEnforced from '../../components/RaEnforced/RaEnforced';
import styles from './ClinicalSection.module.css';

/** "Responsible AI principles for clinical documentation and insights" — five principle cards. */
function ClinicalSection() {
  const { id, chip, title, description, principles } = raClinical;

  return (
    <Section id={id} tone="white" spacing="none" className={styles.section} aria-labelledby="ra-clinical-title">
      <RaIntro id="ra-clinical-title" chip={chip} title={title} description={description} className={styles.intro} />
      <ol className={styles.list}>
        {principles.map((principle, index) => (
          <li key={principle.title} className={cn(styles.card, principle.boxFirst && styles.boxFirst)}>
            <div className={styles.copy}>
              <h3 className={styles.title}>
                <span className={styles.number}>{index + 1}</span>
                {principle.title}
              </h3>
              <p className={styles.text}>{principle.text}</p>
            </div>
            <RaEnforced
              text={principle.enforced}
              appliesTo={principle.appliesTo}
              chip="Enforcement architecture"
              className={styles.box}
            />
          </li>
        ))}
      </ol>
    </Section>
  );
}

export default ClinicalSection;
