import { apiTerms } from '../../../../../data/apiDeveloperPortal';
import Section from '../../../../../components/layout/Section/Section';
import ComplianceIntro from '../../../components/ComplianceIntro/ComplianceIntro';
import CardPair from '../../../components/CardPair/CardPair';
import styles from './TermsSection.module.css';

/** "Software Requirements and Terms of Use": what you need and the terms, side by side. */
function TermsSection() {
  const { id, eyebrow, title, description, cards } = apiTerms;

  return (
    <Section tone="white" spacing="none" id={id} className={styles.section} aria-labelledby="api-terms-title">
      <ComplianceIntro id="api-terms-title" eyebrow={eyebrow} title={title} description={description} />
      <CardPair cards={cards} />
    </Section>
  );
}

export default TermsSection;
