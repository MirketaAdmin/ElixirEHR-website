import { referralSteps } from '../../../../data/referralProgram';
import Section from '../../../../components/layout/Section/Section';
import EyebrowHeading from '../../../../components/ui/EyebrowHeading/EyebrowHeading';
import styles from './ReferralSteps.module.css';

/** "How it works?": centred heading and intro, then three numbered step cards with lime icon tiles. */
function ReferralSteps() {
  return (
    <Section tone="surface" spacing="none" className={styles.section} aria-labelledby="referral-steps-title">
      <EyebrowHeading
        id="referral-steps-title"
        eyebrow={referralSteps.eyebrow}
        title={referralSteps.title}
        align="center"
        className={styles.heading}
      />
      <p className={styles.description}>{referralSteps.description}</p>
      <ol className={styles.grid}>
        {referralSteps.items.map((step) => (
          <li key={step.title} className={styles.card}>
            <span className={styles.tile}>
              <img src={step.icon} alt="" width="32" height="32" />
            </span>
            <h3 className={styles.title}>{step.title}</h3>
            <p className={styles.text}>{step.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export default ReferralSteps;
