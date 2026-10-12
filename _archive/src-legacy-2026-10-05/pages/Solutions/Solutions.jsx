import { Helmet } from 'react-helmet-async';
import PageHeroSection from '../../components/sections/PageHeroSection/PageHeroSection';
import SolutionsSection from '../../components/sections/SolutionsSection/SolutionsSection';
import FeatureGridSection from '../../components/sections/FeatureGridSection/FeatureGridSection';
import CTABannerSection from '../../components/sections/CTABannerSection/CTABannerSection';
import { solutionCategories } from '../../data/solutionCategories';

function Solutions() {
  return (
    <>
      <Helmet>
        <title>Elixir Solutions | AI Solutions for Healthcare Providers</title>
        <meta
          name="description"
          content="Discover Elixir's AI healthcare solutions, from clinical documentation and claim rejection prediction to EHR, revenue cycle management, telehealth, and patient engagement."
        />
        <link rel="canonical" href="/solutions" />
        <meta property="og:title" content="Elixir Solutions | AI Solutions for Healthcare Providers" />
        <meta
          property="og:description"
          content="AI-powered clinical assistance, revenue cycle automation, and patient engagement tools built for modern healthcare teams."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <main>
        <PageHeroSection
          breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Solutions' }]}
          title="AI Solutions for Every Corner of Your Practice"
          subtitle="From clinical documentation to revenue cycle and patient engagement, Elixir's AI solutions work together across your entire practice."
          primaryCta={{ label: 'Request a Demo', href: '/demo' }}
          secondaryCta={{ label: 'See Product Capabilities', href: '/products' }}
          imageAlt="Clinician reviewing Elixir's AI-powered clinical insights"
          imageLabel="Product screenshot — needs hi-res export from Figma"
        />

        <SolutionsSection />

        <FeatureGridSection
          eyebrow="Solution Categories"
          title="Built Around Your Practice, Not the Other Way Around"
          description="Each Elixir solution is grouped around the part of your workflow it supports."
          items={solutionCategories}
          tone="low"
        />

        <CTABannerSection
          title="Find the Right Solution for Your Practice"
          subtitle="Talk to our team about which Elixir solutions fit your workflow best."
          cta={{ label: 'Request a Demo', href: '/demo' }}
        />
      </main>
    </>
  );
}

export default Solutions;
