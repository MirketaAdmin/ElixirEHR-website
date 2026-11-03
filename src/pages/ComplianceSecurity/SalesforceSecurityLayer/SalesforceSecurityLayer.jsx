import { sslCta, sslHero, sslStrip } from '../../../data/salesforceSecurityLayer';
import PageSeo from '../../../components/seo/PageSeo/PageSeo';
import ComplianceHero from '../components/ComplianceHero/ComplianceHero';
import PointsStrip from '../components/PointsStrip/PointsStrip';
import ComplianceCta from '../components/ComplianceCta/ComplianceCta';
import TiersSection from './sections/TiersSection/TiersSection';
import AccessSection from './sections/AccessSection/AccessSection';
import AuditSection from './sections/AuditSection/AuditSection';
import AttributionSection from './sections/AttributionSection/AttributionSection';

/** Salesforce Security Layer (Compliance & Security), from the supplied HTML page. */
function SalesforceSecurityLayer() {
  return (
    <>
      <PageSeo path="/salesforce-data-security" />
      <ComplianceHero {...sslHero} />
      <PointsStrip items={sslStrip} />
      <TiersSection />
      <AccessSection />
      <AuditSection />
      <AttributionSection />
      <ComplianceCta {...sslCta} />
    </>
  );
}

export default SalesforceSecurityLayer;
