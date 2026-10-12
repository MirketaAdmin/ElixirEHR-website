import { Helmet } from 'react-helmet-async';
import styles from './About.module.css';
import PageHeroSection from '../../components/sections/PageHeroSection/PageHeroSection';
import StorySection from '../../components/sections/StorySection/StorySection';
import MissionSection from '../../components/sections/MissionSection/MissionSection';
import TeamSection from '../../components/sections/TeamSection/TeamSection';
import CTABannerSection from '../../components/sections/CTABannerSection/CTABannerSection';
import ContactSection from '../../components/sections/ContactSection/ContactSection';
import FloatingBadge from '../../components/ui/FloatingBadge/FloatingBadge';

function About() {
  return (
    <>
      <Helmet>
        <title>About Elixir | AI-Powered EHR Company Built for Healthcare Teams</title>
        <meta
          name="description"
          content="Learn how Elixir is transforming healthcare through AI-powered EHR innovation — our story, our mission for patient-centered care, and the leadership team behind it."
        />
        <link rel="canonical" href="/company/about" />
        <meta property="og:title" content="About Elixir | Transforming Healthcare Through Innovation" />
        <meta
          property="og:description"
          content="Elixir empowers providers with customizable, efficient, and patient-centered AI solutions. Meet the team and the story behind the platform."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <main>
        <PageHeroSection
          breadcrumb={[{ label: 'Home', href: '/' }, { label: 'About Us' }]}
          title={
            <>
              Transforming Healthcare
              <br />
              <span className={styles.accent}>Through Innovation</span>
            </>
          }
          subtitle="Empowering providers with customizable, efficient, and patient-centered solutions."
          primaryCta={{ label: 'Take a Test Drive →', href: '/demo' }}
          secondaryCta={{ label: 'Explore Capabilities', href: '/platform' }}
          imageAlt="Clinician reviewing AI-generated patient insights on a tablet"
          imageLabel="Clinician using Elixir's AI insights on a tablet — needs hi-res export from Figma"
          badge={<FloatingBadge variant="glass" dot title="AI Insights Active" subtitle="Real-time monitoring" />}
        />

        <StorySection />
        <MissionSection />
        <TeamSection />

        <CTABannerSection
          title="Take the Next Step"
          subtitle="Ready to change how you handle your patients? Click here to be future-ready with Elixir."
          cta={{ label: 'Contact Us Now', href: '#contact' }}
        />

        <ContactSection />
      </main>
    </>
  );
}

export default About;
