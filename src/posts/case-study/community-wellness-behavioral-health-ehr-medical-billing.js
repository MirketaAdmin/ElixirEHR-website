// Case study written from two Mirketa YouTube videos about the same client, which share one
// description: "Elixir Case Study: EHR and RCM for a Behavioral Healthcare Provider" (lSRW38RWPgw,
// published 16 Jul 2026; its title slide names the client, Community Wellness) and "Elixir Case Study:
// EHR and Medical Billing for a Behavioral Healthcare Provider in DC" (m4ahoaRKZfI, published 8 Jul
// 2026). Facts from the description and the title slides only. Image: lSRW38RWPgw's YouTube thumbnail.
import featuredImage from '../../assets/posts/case-study/community-wellness-behavioral-health-ehr-medical-billing.webp';

const strong = (text) => ({ text, strong: true });
const title = 'How Elixir EHR Transformed Community Wellness';

export default {
  title,
  excerpt:
    'How a non-profit behavioral healthcare provider in Washington, DC unified patient CRM, EHR and medical billing on Salesforce with Elixir, and accelerated Medicaid reimbursement.',
  publishDate: '2026-07-08',
  seo: {
    description:
      'Community Wellness, a non-profit behavioral healthcare provider in Washington, DC, unified intake, EHR and medical billing on Salesforce with Elixir and accelerated Medicaid reimbursement.',
  },
  cardImage: { src: featuredImage, alt: 'How Elixir EHR Transformed Community Wellness: case study title slide' },
  heroImage: {
    src: featuredImage,
    alt: 'How Elixir EHR Transformed Community Wellness: case study title slide',
    width: 1280,
    height: 720,
  },
  content: [
    { type: 'heading', level: 2, text: 'At a Glance' },
    { type: 'paragraph', text: [strong('Client:'), ' Community Wellness'] },
    { type: 'paragraph', text: [strong('Industry:'), ' Non-profit behavioral healthcare provider, community-focused, serving disinvested areas'] },
    { type: 'paragraph', text: [strong('Location:'), ' Washington, DC'] },
    { type: 'paragraph', text: [strong('Employees:'), ' 50+'] },
    { type: 'paragraph', text: [strong('Solution:'), ' Elixir Contact Center, EHR and RCM on Salesforce (CRM + EHR + Medical Billing unified)'] },

    {
      type: 'video',
      src: 'https://www.youtube-nocookie.com/embed/lSRW38RWPgw?rel=0',
      title: 'Elixir Case Study: EHR and RCM for a Behavioral Healthcare Provider',
    },

    { type: 'heading', level: 2, text: 'Project Overview' },
    {
      type: 'paragraph',
      text: 'Community Wellness is a non-profit behavioral healthcare organization in Washington, DC with 50+ employees, focused on communities in disinvested areas. It transformed patient care and operations with Elixir Contact Center, EHR and RCM, built natively on Salesforce, bringing end-to-end patient CRM, EHR and medical billing onto one platform.',
    },

    { type: 'heading', level: 2, text: 'Solution Implemented' },
    {
      type: 'list',
      items: [
        'Digital patient intake and admissions.',
        'Automated patient and provider communication.',
        'Behavioral Health EHR on Salesforce, with clinical documentation and care coordination.',
        'Medical billing and Revenue Cycle Management (RCM), including Medicaid claims and reimbursement workflows.',
        'Salesforce Health Cloud integration.',
      ],
    },

    { type: 'heading', level: 2, text: 'Results' },
    {
      type: 'list',
      items: ['Improved efficiency.', 'Reduced administrative work.', 'Accelerated Medicaid reimbursement.'],
    },

    { type: 'heading', level: 2, text: 'Watch the Full Story' },
    {
      type: 'video',
      src: 'https://www.youtube-nocookie.com/embed/m4ahoaRKZfI?rel=0',
      title: 'Elixir Case Study: EHR and Medical Billing for a Behavioral Healthcare Provider in DC',
    },
  ],
};
