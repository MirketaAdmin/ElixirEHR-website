import { naatpCta, naatpHero, naatpMeaning, naatpStrip } from '../../../data/naatp';
import PageSeo from '../../../components/seo/PageSeo/PageSeo';
import ComplianceHero from '../components/ComplianceHero/ComplianceHero';
import PointsStrip from '../components/PointsStrip/PointsStrip';
import ExplainerSection from '../components/ExplainerSection/ExplainerSection';
import ComplianceCta from '../components/ComplianceCta/ComplianceCta';
import QualitySection from './sections/QualitySection/QualitySection';

/** NAATP (Compliance & Security), from the supplied HTML page. */
function Naatp() {
  return (
    <>
      <PageSeo path="/naatp" />
      <ComplianceHero {...naatpHero} />
      <PointsStrip items={naatpStrip} />
      <ExplainerSection {...naatpMeaning} />
      <QualitySection />
      <ComplianceCta {...naatpCta} />
    </>
  );
}

export default Naatp;
