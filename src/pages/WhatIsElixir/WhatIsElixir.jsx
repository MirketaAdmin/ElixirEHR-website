import { whatIsElixirHero, ctaBand } from '../../data/whatIsElixir';
import PageHero from '../../components/sections/PageHero/PageHero';
import ModularSolutionsSection from './sections/ModularSolutionsSection/ModularSolutionsSection';
import AiCapabilitiesSection from '../../components/sections/AiCapabilitiesSection/AiCapabilitiesSection';
import PossibilitiesSection from './sections/PossibilitiesSection/PossibilitiesSection';
import CrmPartnershipSection from './sections/CrmPartnershipSection/CrmPartnershipSection';
import CtaBanner from '../../components/sections/CtaBanner/CtaBanner';
import ContactSection from '../../components/sections/ContactSection/ContactSection';
import styles from './WhatIsElixir.module.css';

function WhatIsElixir() {
  return (
    <>
      <title>What Is Elixir | Elixir</title>
      <meta name="description" content={whatIsElixirHero.description} />
      <PageHero {...whatIsElixirHero} />
      <ModularSolutionsSection />
      <AiCapabilitiesSection />
      <PossibilitiesSection />
      <CrmPartnershipSection />
      <CtaBanner {...ctaBand} className={styles.ctaBand} ctaClassName={styles.ctaButton} />
      <ContactSection />
    </>
  );
}

export default WhatIsElixir;
