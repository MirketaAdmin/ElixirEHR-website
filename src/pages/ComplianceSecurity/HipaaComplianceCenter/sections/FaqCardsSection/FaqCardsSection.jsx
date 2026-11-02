import { hipaaFaq } from '../../../../../data/hipaaComplianceCenter';
import Section from '../../../../../components/layout/Section/Section';
import RichText from '../../../../../components/ui/RichText/RichText';
import ComplianceIntro from '../../../components/ComplianceIntro/ComplianceIntro';
import styles from './FaqCardsSection.module.css';

/** "HIPAA Compliance: Frequently Asked Questions": every answer shown, in lime-topped cards, two per row. */
function FaqCardsSection() {
  const { eyebrow, title, description, items } = hipaaFaq;

  return (
    <Section tone="white" spacing="none" className={styles.section} aria-labelledby="hipaa-faq-title">
      <ComplianceIntro id="hipaa-faq-title" eyebrow={eyebrow} title={title} description={description} />
      <ul className={styles.grid}>
        {items.map((item) => (
          <li key={item.question} className={styles.card}>
            <h3 className={styles.question}>{item.question}</h3>
            <p className={styles.answer}>
              <RichText content={item.answer} linkClassName={styles.link} />
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default FaqCardsSection;
