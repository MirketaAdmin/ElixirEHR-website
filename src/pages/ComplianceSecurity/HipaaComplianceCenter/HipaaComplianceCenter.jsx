import {
  hipaaCertification,
  hipaaCta,
  hipaaHero,
  hipaaStrip,
} from '../../../data/hipaaComplianceCenter';
import PageSeo from '../../../components/seo/PageSeo/PageSeo';
import ComplianceHero from '../components/ComplianceHero/ComplianceHero';
import PointsStrip from '../components/PointsStrip/PointsStrip';
import ExplainerSection from '../components/ExplainerSection/ExplainerSection';
import ComplianceCta from '../components/ComplianceCta/ComplianceCta';
import AgreementsSection from './sections/AgreementsSection/AgreementsSection';
import RegulatorySection from './sections/RegulatorySection/RegulatorySection';
import RelatedSection from './sections/RelatedSection/RelatedSection';
import FaqCardsSection from './sections/FaqCardsSection/FaqCardsSection';

/** HIPAA Compliance Center (Compliance & Security), from the supplied HTML page. */
function HipaaComplianceCenter() {
  return (
    <>
      <PageSeo path="/hipaa-compliant-ehr" />
      <ComplianceHero {...hipaaHero} />
      <PointsStrip items={hipaaStrip} />
      <ExplainerSection {...hipaaCertification} />
      <AgreementsSection />
      <RegulatorySection />
      <RelatedSection />
      <FaqCardsSection />
      <ComplianceCta {...hipaaCta} />
    </>
  );
}

export default HipaaComplianceCenter;
