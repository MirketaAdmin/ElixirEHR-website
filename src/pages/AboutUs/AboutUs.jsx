import { aboutHero, nextStep } from '../../data/about';
import { updatedContactLogos } from '../../data/contact';
import PageHero from '../../components/sections/PageHero/PageHero';
import OurStorySection from './sections/OurStorySection/OurStorySection';
import MissionSection from './sections/MissionSection/MissionSection';
import TeamSection from './sections/TeamSection/TeamSection';
import CtaBanner from '../../components/sections/CtaBanner/CtaBanner';
import ContactSection from '../../components/sections/ContactSection/ContactSection';

function AboutUs() {
  return (
    <>
      <title>About Us | Elixir</title>
      <meta
        name="description"
        content="Empowering Providers with Customizable, Efficient, and Patient-Centered Solutions"
      />
      <PageHero {...aboutHero} />
      <OurStorySection />
      <MissionSection />
      <TeamSection />
      {/* "Contact Us Now" scrolls to the contact form further down this page. */}
      <CtaBanner {...nextStep} />
      <ContactSection logos={updatedContactLogos} logoGap={24} />
    </>
  );
}

export default AboutUs;
