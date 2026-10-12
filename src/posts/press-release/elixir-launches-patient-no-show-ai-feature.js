import cardImage from '../../assets/posts/press-release/elixir-launches-patient-no-show-ai-feature/card.png';
import heroImage from '../../assets/posts/press-release/elixir-launches-patient-no-show-ai-feature/hero.png';

// Detail copy from the Figma "Press Release" detail frame; listing copy (listingTitle, excerpt)
// from the "Press Release" listing frame. Both reproduced verbatim — see DESIGN-SYSTEM.md.
export default {
  title: 'Elixir Launches Revolutionary ‘Patient No-Show’ AI Feature with Early Access Offer',
  listingTitle: "Elixir Launches Revolutionary 'Patient No- Show' AI Feature to Optimize Clinic Efficiency",
  excerpt:
    "Harnessing advanced predictive algorithms, Elixir's new module allows clinical administrators to identify high-risk appointments and proactively optimize schedules, reducing waste by up to 40%.",
  publishDate: '2025-01-30',
  location: 'San Ramon, CA',
  category: null,
  tags: ['Patient No-show', 'EHR', 'Healthcare Provider', 'Medical Billing', 'Salesforce Health Cloud', 'Behavioural Health'],
  cardImage: { src: cardImage, alt: 'Elixir AI press release hub dashboard on a clinic wall display' },
  heroImage: {
    src: heroImage,
    alt: 'Clinician reviewing the Elixir AI patient no-show risk analysis on a desktop monitor',
    width: 757,
    height: 324,
  },
  seo: {
    description:
      'Elixir announces its ‘Patient No-Show’ AI feature, designed to reduce patient no-show rates, enhance patient engagement, and optimize operational efficiency for healthcare providers.',
  },
  content: [
    {
      type: 'lead',
      text: [
        { text: 'San Ramon, CA — ', strong: true },
        { text: 'Elixir', strong: true, to: '/' },
        {
          text: ', an end-to-end integrated solution for patients and providers, is pleased to announce the launch of its groundbreaking‘Patient No-Show’ AI feature',
          strong: true,
        },
        '. This innovative addition to Elixir’s patient appointment scheduling solution is designed to significantly reduce patient no-show rates, enhance patient engagement, and optimize operational efficiency for healthcare providers.',
      ],
    },
    {
      type: 'paragraph',
      text: 'The ‘Patient No-Show’ AI feature utilizes advanced artificial intelligence to predict and identify potential patient no-shows before they happen. By analyzing patient behavior patterns, historical data, and appointment trends, the AI-driven system provides the Patient No-show risk score.',
    },
    {
      type: 'highlights',
      title: 'Key Benefits of Patient No-Show AI feature:',
      items: [
        {
          label: '20% Reduction in No-Show Rates:',
          text: 'Proactively address no-show risks by predicting and managing appointments.',
        },
        {
          label: 'Enhanced Operational Efficiency:',
          text: 'Improves scheduling accuracy, and helps providers allocate resources more effectively.',
        },
        {
          label: 'Data-Driven Insights:',
          text: 'AI provides actionable insights into patient behavior, helping healthcare providers optimize their scheduling strategies and minimize missed appointments.',
        },
      ],
    },
    {
      type: 'quote',
      text: '“We are excited to introduce ‘Patient No-Show’ AI feature to Elixir’s suite of solutions. This feature was designed with one goal in mind: to help healthcare providers reduce no-shows and improve patient engagement. It’s a leap forward in using AI to solve everyday challenges in healthcare.”',
      cite: 'Nitin Nigam, Director of Product at Elixir',
    },
    {
      type: 'paragraph',
      text: 'Rajeev, CEO of Elixir, added: "The introduction of ‘Patient No-Show’ AI feature marks an important milestone for Elixir as we continue to innovate in healthcare technology. Our mission is to provide solutions that help healthcare providers enhance patient care while improving efficiency, and this new AI-driven feature is a perfect example of how we are achieving that. We are excited to see the positive impact this will have on healthcare organizations and their patients."',
    },
    {
      type: 'cta',
      title: 'Limited Time Early Access Offer',
      text: 'To celebrate the launch of ‘Patient No-Show’ AI feature, Elixir is offering early access at a discounted price for healthcare organizations that sign up within the next 90 days.',
      // No destination in the frame; the Contact Us page is the site's enquiry route.
      action: { label: 'Claim Your Discount', to: '/contact-us' },
    },
  ],
};
