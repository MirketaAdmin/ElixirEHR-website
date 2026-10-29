// Elixir AI Contact Center product demo (YouTube 6VQCwL7KaLQ, Mirketa Inc, published 26 Oct 2026,
// 10:23). Title and body copy are taken from the video's YouTube title and description (hashtags,
// social links and the channel sign-off left out). The card image is the video's YouTube thumbnail.
import cardImage from '../../assets/posts/video/elixir-ai-contact-center-demo/card.jpg';

const youtubeId = '6VQCwL7KaLQ';

export default {
  title: 'Elixir AI Contact Center Demo | From First Contact to Admission for Healthcare Providers',
  excerpt:
    'Transform the entire patient intake and admissions journey with Elixir AI Contact Center — from the first inquiry to successful admission.',
  publishDate: '2026-10-26',
  label: 'Contact Center',
  category: 'Patient Engagement',
  duration: '10:23',
  youtubeId,
  cardImage: {
    src: cardImage,
    alt: 'Elixir Contact Center, from first contact to admission: a contact center agent beside the intake-to-admission workflow',
  },
  content: [
    {
      type: 'video',
      src: `https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0`,
      title: 'Elixir AI Contact Center Demo | From First Contact to Admission for Healthcare Providers',
    },
    {
      type: 'lead',
      text: 'Transform the entire patient intake and admissions journey with Elixir AI Contact Center — from the first inquiry to successful admission.',
    },
    {
      type: 'paragraph',
      text: 'Healthcare providers often struggle with disconnected systems, missed inquiries, manual intake processes, poor referral visibility, and limited insight into which marketing campaigns actually generate admissions.',
    },
    {
      type: 'paragraph',
      text: 'Elixir AI Contact Center, built on Salesforce, brings marketing, business development, patient engagement, intake, pre-assessment, referral management, and admissions into one intelligent platform.',
    },
    {
      type: 'paragraph',
      text: 'In this product demonstration, discover how Elixir helps specialty clinics, medical spas, home care agencies, elder care providers, behavioral healthcare organizations, and rehabilitation and treatment centers streamline their entire patient acquisition and admissions lifecycle.',
    },
    { type: 'heading', level: 2, text: "What You'll See in This Demo" },
    {
      type: 'list',
      items: [
        [
          { text: 'Omnichannel Inquiry & Lead Management', strong: true },
          { text: ' – Capture, manage, and track inquiries from calls, websites, marketing campaigns, and referral partners.' },
        ],
        [
          { text: 'Campaign-to-Admission Tracking', strong: true },
          { text: ' – Gain end-to-end visibility into marketing performance, conversion rates, and which campaigns generate actual admissions.' },
        ],
        [
          { text: 'Patient Intake & Pre-Assessment', strong: true },
          { text: ' – Streamline intake workflows, collect patient information, capture medical and treatment history, and evaluate eligibility and care needs.' },
        ],
        [
          { text: 'AI-Powered Document Processing (OCR)', strong: true },
          { text: ' – Extract relevant information from intake forms, identification documents, medical records, and referral documents to reduce manual data entry.' },
        ],
        [
          { text: 'Referral Partner Management & Scoring', strong: true },
          { text: ' – Track referral sources, evaluate partner performance, and identify relationships driving qualified admissions.' },
        ],
        [
          { text: 'Business Development Workflows', strong: true },
          { text: ' – Manage referral partner relationships, outreach activities, follow-ups, and business development pipelines in a unified system.' },
        ],
        [
          { text: 'Intelligent Admissions Management', strong: true },
          { text: ' – Track every prospective patient through intake, assessment, qualification, and admission, with visibility into progress and next steps.' },
        ],
        [
          { text: 'Unified Patient & Referral History', strong: true },
          { text: ' – Give teams a consolidated view of prior interactions, assessments, referral information, and relevant history.' },
        ],
      ],
    },
    { type: 'heading', level: 2, text: 'Who Is Elixir Designed For?' },
    {
      type: 'list',
      items: [
        'Specialty and Multispecialty Clinics',
        'Medical Spas and Wellness Centers',
        'Home Care and Home Health Agencies',
        'Senior Living and Elder Care Providers',
        'Behavioral and Mental Healthcare Organizations',
        'Addiction Treatment and Rehabilitation Centers',
        'Residential and Outpatient Treatment Programs',
      ],
    },
    { type: 'heading', level: 2, text: 'Why Elixir?' },
    {
      type: 'paragraph',
      text: 'Unlike standalone contact center or CRM solutions, Elixir connects the entire front-end patient journey with downstream clinical and operational workflows.',
    },
    {
      type: 'paragraph',
      text: 'Built natively on Salesforce, Elixir combines CRM, AI, intake, admissions, care coordination, EHR, and revenue cycle management capabilities in a scalable healthcare platform.',
    },
    {
      type: 'paragraph',
      text: 'One platform. One connected patient journey. From first contact to admission and beyond.',
    },
    {
      type: 'cta',
      title: 'Learn more about Elixir and schedule a personalized demo with Mirketa.',
      action: { label: 'Request a Demo', to: '/request-demo' },
    },
  ],
};
