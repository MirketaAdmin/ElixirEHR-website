import { ccVerification } from '../../../../data/contactCenter';
import Section from '../../../../components/layout/Section/Section';
import CcIntro from '../../components/CcIntro/CcIntro';
import FeatureCard from '../../components/FeatureCard/FeatureCard';
import styles from './VerificationSection.module.css';

/** "Insurance Verification & Eligibility Checks at First Contact": six feature cards. */
function VerificationSection() {
  const { chip, title, description, cards } = ccVerification;

  return (
    <Section tone="white" spacing="none" className={styles.section} aria-labelledby="cc-verification-title">
      <CcIntro
        id="cc-verification-title"
        chip={chip}
        title={title}
        description={description}
        className={styles.intro}
      />
      <div className={styles.grid}>
        {cards.map((card) => (
          <FeatureCard key={card.title} {...card} />
        ))}
      </div>
    </Section>
  );
}

export default VerificationSection;
