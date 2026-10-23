import { referralBenefits } from '../../../../data/referralProgram';
import Section from '../../../../components/layout/Section/Section';
import styles from './ReferralBenefits.module.css';

/** "Why join the Referral Program?": three centred benefits under 96px Deep Purple icon circles. */
function ReferralBenefits() {
  return (
    <Section
      tone="white"
      spacing="none"
      id="referral-benefits"
      className={styles.section}
      aria-labelledby="referral-benefits-title"
    >
      <h2 id="referral-benefits-title" className={styles.heading}>
        {referralBenefits.title}
      </h2>
      <ul className={styles.grid}>
        {referralBenefits.items.map((item) => (
          <li key={item.title} className={styles.item}>
            <span className={styles.circle}>
              <img src={item.icon} alt="" width="32" height="32" />
            </span>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.text}>{item.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default ReferralBenefits;
