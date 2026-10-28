import { referralCtaBand, referralHero } from '../../data/referralProgram';
import { resources } from '../../data/home';
import { updatedContactLogos } from '../../data/contact';
import PageHero from '../../components/sections/PageHero/PageHero';
import ResourcesSection from '../../components/sections/ResourcesSection/ResourcesSection';
import CtaBanner from '../../components/sections/CtaBanner/CtaBanner';
import ContactSection from '../../components/sections/ContactSection/ContactSection';
import ReferralSteps from './sections/ReferralSteps/ReferralSteps';
import ReferralBenefits from './sections/ReferralBenefits/ReferralBenefits';
import styles from './ReferralProgram.module.css';

function ReferralProgram() {
  const { image, ...hero } = referralHero;

  return (
    <>
      <title>Referral Program | Elixir</title>
      <meta name="description" content={hero.description} />
      <PageHero
        {...hero}
        className={styles.hero}
        media={
          <div className={styles.heroMedia}>
            <img src={image.src} alt={image.alt} width="504" height="384" className={styles.heroImage} />
          </div>
        }
      />
      <ReferralSteps />
      <ReferralBenefits />
      {/* The frame's Knowledge Base is Home's, with Deep Purple card tags and one row of three cards. */}
      <ResourcesSection {...resources} tagTone="purple" limit={3} />
      <CtaBanner {...referralCtaBand} className={styles.ctaBand} ctaClassName={styles.ctaButton} />
      <ContactSection logos={updatedContactLogos} logoGap={24} />
    </>
  );
}

export default ReferralProgram;
