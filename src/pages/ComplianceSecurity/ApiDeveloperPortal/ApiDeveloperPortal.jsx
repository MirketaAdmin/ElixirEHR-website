import {
  apiCta,
  apiHero,
  apiReference,
  apiSchema,
  apiScope,
  apiStrip,
} from '../../../data/apiDeveloperPortal';
import PageSeo from '../../../components/seo/PageSeo/PageSeo';
import ComplianceHero from '../components/ComplianceHero/ComplianceHero';
import PointsStrip from '../components/PointsStrip/PointsStrip';
import ExplainerSection from '../components/ExplainerSection/ExplainerSection';
import ComplianceCta from '../components/ComplianceCta/ComplianceCta';
import ReferenceSection from './sections/ReferenceSection/ReferenceSection';
import TermsSection from './sections/TermsSection/TermsSection';

/**
 * API Developer Portal (Compliance & Security › ONC Certification), from the supplied
 * HTML page. Required public API documentation: keep it ungated (no form, login or agreement before
 * the content) and keep its URL stable.
 */
function ApiDeveloperPortal() {
  return (
    <>
      <PageSeo path="/onc-certification/api-developer-portal" schema={apiSchema} />
      <ComplianceHero {...apiHero} />
      <PointsStrip items={apiStrip} />
      {apiReference.map((section) => (
        <ReferenceSection key={section.id} {...section} />
      ))}
      <TermsSection />
      <ExplainerSection {...apiScope} />
      <ComplianceCta {...apiCta} />
    </>
  );
}

export default ApiDeveloperPortal;
