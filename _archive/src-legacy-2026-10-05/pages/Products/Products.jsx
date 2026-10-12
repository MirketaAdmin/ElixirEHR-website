import { Helmet } from 'react-helmet-async';
import PageHeroSection from '../../components/sections/PageHeroSection/PageHeroSection';
import FeatureGridSection from '../../components/sections/FeatureGridSection/FeatureGridSection';
import CTABannerSection from '../../components/sections/CTABannerSection/CTABannerSection';
import { features } from '../../data/features';

function Products() {
  return (
    <>
      <Helmet>
        <title>Elixir Products | AI-Powered EHR Platform for Healthcare Teams</title>
        <meta
          name="description"
          content="Explore Elixir's AI-powered EHR product capabilities: unified patient dashboards, intelligent inventory management, and integrated telehealth built for modern healthcare teams."
        />
        <link rel="canonical" href="/products" />
        <meta property="og:title" content="Elixir Products | AI-Powered EHR Platform" />
        <meta
          property="og:description"
          content="Unified patient dashboards, intelligent inventory management, and integrated telehealth, all built on Elixir's AI-powered EHR platform."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <main>
        <PageHeroSection
          breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Products' }]}
          title="One Platform. Every Clinical Workflow."
          subtitle="Elixir brings patient records, inventory, and telehealth together in a single AI-powered EHR built for modern healthcare teams."
          primaryCta={{ label: 'Request a Demo', href: '/demo' }}
          secondaryCta={{ label: 'Explore Solutions', href: '/solutions' }}
          imageAlt="Elixir EHR platform showing a unified patient dashboard"
          imageLabel="Product screenshot — needs hi-res export from Figma"
        />

        <FeatureGridSection
          eyebrow="Core Capabilities"
          title="Everything Your Team Needs, in One Place"
          description="From the patient chart to the supply closet, Elixir's AI keeps every part of the workflow connected."
          items={features}
        />

        <CTABannerSection
          title="See the Platform in Action"
          subtitle="Book a walkthrough with our team and see how Elixir fits into your existing clinical workflow."
          cta={{ label: 'Request a Demo', href: '/demo' }}
        />
      </main>
    </>
  );
}

export default Products;
