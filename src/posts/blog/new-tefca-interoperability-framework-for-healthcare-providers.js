// Missed in the migration from the previous website (https://elixirehr.com/new-tefca-interoperability-framework-for-healthcare-providers/): Bhavesh Singla,
// 2022-01-19, "Healthcare Provider". Body copy is exactly as supplied; headings, lists, bold runs and
// the CTA link follow the original page (its CTA went to the old test-drive form, now Contact Us).
// Featured image, its alt text and the meta description are the original page's.
import featuredImage from '../../assets/posts/blog/new-tefca-interoperability-framework-for-healthcare-providers.webp';

const strong = (text) => ({ text, strong: true });

export default {
  title: 'New TEFCA Interoperability Framework for Healthcare Providers',
  excerpt:
    'While almost all healthcare providers use EHR systems, data sharing between different healthcare entities has been a pain point for medical workers, plan administrators, and consumers alike.',
  publishDate: '2022-01-19',
  author: 'Bhavesh Singla',
  category: 'Healthcare Provider',
  seo: {
    description:
      'While almost all healthcare providers use EHR systems, data sharing between different healthcare entities has been a pain point for medical workers, plan administrators, and consumers alike.',
  },
  cardImage: { src: featuredImage, alt: 'Healthcare Providers' },
  heroImage: {
    src: featuredImage,
    alt: 'Healthcare Providers',
    width: 688,
    height: 576,
  },
  content: [
    {
      type: 'paragraph',
      text: 'While almost all healthcare providers use EHR systems, data sharing between different healthcare entities has been a pain point for medical workers, plan administrators, and consumers alike. High incentives have increased the interoperability of medical records in recent years, but significant gaps remain in the system. These gaps were thrown under the spotlight during the pandemic, with public health authorities reporting challenges in getting data due to unstandardized data collection and exchange.',
    },
    {
      type: 'paragraph',
      text: 'With the Biden administration’s aim to enhance and promote interoperability, they have released the much-needed governance framework for information networks across the country. The first draft of this aspirational framework was released over four years ago and has been in a holding pattern since then. The framework is actually a requirement under the 21st Century Cures Act which needed ONC to develop foundational principles for health information exchange with an established technical infrastructure model and governing approach.',
    },
    {
      type: 'paragraph',
      text: 'The Trusted Exchange Framework and the Common Agreement (TEFCA) aim to secure nationwide information sharing across healthcare entities by creating a baseline for legal and technical requirements. This aspirational framework seeks to create a simplified and standardized connectivity infrastructure for health providers, payers, patients, and other public health agencies. ONCs continued effort to strengthen national networks and state and regional health information exchanges will help support TEFCA.',
    },
    {
      type: 'paragraph',
      text: 'TEFCA will make it easier for companies and patients to get the medical information they want for treatment or access purposes and help enable public health and government benefits determinations in the longer term.',
    },
    {
      type: 'paragraph',
      text: 'The Framework has two major components: The trusted Exchange Framework and Common Agreement. The former is a set of principles for allowing data-sharing across health-information networks. The framework has put forward prepositions to enhance standardization, cooperation, access, openness, transparency, etc.',
    },
    {
      type: 'paragraph',
      text: [strong('Some of these policies are:')],
    },
    {
      type: 'list',
      items: [
        '“Health Information Networks should make terms, conditions, and contractual agreements that govern the exchange of digital health information easily and publicly available.”',
        '“Health Information Networks should collaborate with stakeholders across the continuum of care to electronically exchange digital health information, even when a stakeholder may be a business competitor.”',
        '“Health Information Networks should employ a health equity by design approach and should consider the health equity consequences of policy and technology choices upfront.”',
      ],
    },
    {
      type: 'paragraph',
      text: 'The Common Agreement component of TEFCA aims to provide a legal framework for Qualified Health Information Networks to voluntarily enter Recognized Coordination Entity (RCE), which will be charged with overseeing QHINs and developing, maintaining, and updating the common agreement. The Common Agreement component also aims to enable users in different health information networks to share clinical information by establishing an infrastructure model and governing approach.',
    },
    {
      type: 'paragraph',
      text: 'In 2019, Sequoia Project, a public-private partnership, was selected as the RCE. SO a new QHIN will have to sign a contract with Sequoia Project, which will then execute TEFCA policies within QHIN networks.',
    },
    {
      type: 'paragraph',
      text: 'ONC has also published a technical framework for QHINs. The framework comprises of SOPs for executing Common Agreement and outlines a roadmap to merge FHIR standard with TEFCA-based exchange over time. As per ONC, by 2023, a revised QHIN technical framework will make FHIR-based exchange an option under TEFCA, making it mandatory by 2024.',
    },
    {
      type: 'paragraph',
      text: 'Though the stakeholders are still digesting the new framework release, as seen in the past, providers, payers, and Health IT vendors generally support TEFCA. With Congress requiring the participation in TEFCA to be voluntary, there have been large concerns over the success of TEFCA being largely depending on widespread adoption. HITCA has been brainstorming and working out various incentives to get the industry on board, requiring participation as per standard in other federal programs like Medicare or Medicaid.',
    },
    {
      type: 'paragraph',
      text: 'With many health information exchanges only operating in local markets without connecting to other networks, the TEFCA framework, if executed properly to connect nationwide HINs, could prevent future outbreaks and help streamline the administrative burden on providers.',
    },
    {
      type: 'paragraph',
      text: 'To help you guide through the ever-evolving interoperability regulations, we bring to you Elixir EHR, the world’s first EHR system built on Salesforce, the most interoperable cloud system on the market.',
    },
    {
      type: 'paragraph',
      text: 'Elixir Practice Management Suite is a comprehensive solution consisting of four modules that fit rightly into your healthcare business irrespective of your facility size and type. The Elixir Contact Center module helps manage the entire facility census and the patient intake process. At the same time, the Elixir EHR solution aims at delivering an end-to-end seamless patient care experience. The third module is Elixir Billing, and it effectively fetches data from any EHR platform to process medical claims and manages the entire revenue cycle. Elixir Patient Portal is the last module, and it provides an integrated experience for the patients.',
    },
    {
      type: 'paragraph',
      text: ['Do fill out this ', { text: 'contact form', strong: true, to: '/contact-us/' }, ' if you feel that Elixir will be an asset to your system.'],
    },
  ],
};
