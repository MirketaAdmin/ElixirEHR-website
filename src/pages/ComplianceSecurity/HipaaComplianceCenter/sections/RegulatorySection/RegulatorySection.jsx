import { hipaaRegulatory } from '../../../../../data/hipaaComplianceCenter';
import Section from '../../../../../components/layout/Section/Section';
import RichText from '../../../../../components/ui/RichText/RichText';
import ComplianceIntro from '../../../components/ComplianceIntro/ComplianceIntro';
import CardPair from '../../../components/CardPair/CardPair';
import styles from './RegulatorySection.module.css';

/** "What Is Currently in Force": two cards, then the vendor-review note. */
function RegulatorySection() {
  const { eyebrow, title, description, cards, caption } = hipaaRegulatory;

  return (
    <Section tone="white" spacing="none" className={styles.section} aria-labelledby="hipaa-regulatory-title">
      <ComplianceIntro id="hipaa-regulatory-title" eyebrow={eyebrow} title={title} description={description} />
      <CardPair cards={cards} />
      <p className={styles.caption}>
        <RichText content={caption} strongClassName={styles.strong} />
      </p>
    </Section>
  );
}

export default RegulatorySection;
