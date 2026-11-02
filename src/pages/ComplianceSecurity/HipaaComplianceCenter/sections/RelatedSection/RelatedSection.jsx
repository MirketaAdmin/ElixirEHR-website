import { hipaaRelated } from '../../../../../data/hipaaComplianceCenter';
import Section from '../../../../../components/layout/Section/Section';
import ComplianceIntro from '../../../components/ComplianceIntro/ComplianceIntro';
import TopicCards from '../../../components/TopicCards/TopicCards';
import styles from './RelatedSection.module.css';

/** "Compliance and Security at Elixir": the related pages, each card titled with its link. */
function RelatedSection() {
  const { eyebrow, title, description, cards } = hipaaRelated;

  return (
    <Section tone="surface" spacing="none" className={styles.section} aria-labelledby="hipaa-related-title">
      <ComplianceIntro id="hipaa-related-title" eyebrow={eyebrow} title={title} description={description} />
      <TopicCards cards={cards} />
    </Section>
  );
}

export default RelatedSection;
