import {
  interopCta,
  interopHero,
  interopMovingParts,
  interopPart2,
  interopStrip,
} from '../../../data/interoperability';
import PageSeo from '../../../components/seo/PageSeo/PageSeo';
import ComplianceHero from '../components/ComplianceHero/ComplianceHero';
import PointsStrip from '../components/PointsStrip/PointsStrip';
import ExplainerSection from '../components/ExplainerSection/ExplainerSection';
import DarkCardsSection from '../components/DarkCardsSection/DarkCardsSection';
import ComplianceCta from '../components/ComplianceCta/ComplianceCta';
import LayersSection from './sections/LayersSection/LayersSection';
import BlockingSection from './sections/BlockingSection/BlockingSection';

/** Interoperability (FHIR/HL7) (Compliance & Security), from the supplied HTML page. */
function Interoperability() {
  return (
    <>
      <PageSeo path="/healthcare-interoperability" />
      <ComplianceHero {...interopHero} />
      <PointsStrip items={interopStrip} />
      <LayersSection />
      <BlockingSection />
      <ExplainerSection {...interopPart2} />
      <DarkCardsSection {...interopMovingParts} />
      <ComplianceCta {...interopCta} />
    </>
  );
}

export default Interoperability;
