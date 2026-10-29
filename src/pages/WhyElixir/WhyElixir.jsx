import { whyElixirHero, ctaBand } from '../../data/whyElixir';
import PageHero from '../../components/sections/PageHero/PageHero';
import WhyHeroMedia from './sections/WhyHeroMedia/WhyHeroMedia';
import PillarsSection from './sections/PillarsSection/PillarsSection';
import ModularSolutionsSection from './sections/ModularSolutionsSection/ModularSolutionsSection';
import AiCapabilitiesSection from '../../components/sections/AiCapabilitiesSection/AiCapabilitiesSection';
import PossibilitiesSection from './sections/PossibilitiesSection/PossibilitiesSection';
import CrmPartnershipSection from './sections/CrmPartnershipSection/CrmPartnershipSection';
import SolutionsSection from './sections/SolutionsSection/SolutionsSection';
import CtaBanner from '../../components/sections/CtaBanner/CtaBanner';
import ContactSection from '../../components/sections/ContactSection/ContactSection';
import styles from './WhyElixir.module.css';

/**
 * /why-elixir — also carries the former What Is Elixir page (/what-is-elixir redirects here):
 * why providers choose Elixir, what the platform includes, the AI layer, the optimization
 * features, the Salesforce foundation, who it serves, then the CTA and contact form. The two
 * pages' shared sections (AI capabilities, CTA band) appear once.
 */
function WhyElixir() {
  const { image, stat, ...hero } = whyElixirHero;

  return (
    <>
      <title>Why Elixir | Elixir</title>
      <meta name="description" content={whyElixirHero.description} />
      <PageHero {...hero} className={styles.hero} media={<WhyHeroMedia image={image} stat={stat} />} />
      <PillarsSection />
      <ModularSolutionsSection />
      <AiCapabilitiesSection />
      <PossibilitiesSection />
      <CrmPartnershipSection />
      <SolutionsSection />
      <CtaBanner
        {...ctaBand}
        className={styles.ctaBand}
        ctaClassName={styles.ctaButton}
        secondaryCtaClassName={styles.ctaSecondary}
      />
      <ContactSection />
    </>
  );
}

export default WhyElixir;
