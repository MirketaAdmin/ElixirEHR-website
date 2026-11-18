// Case study written from the Mirketa YouTube video "Case Study | How Elixir Transformed Elder Care
// with Salesforce EHR, Medical Billing & RCM" (Ltvr7lPTSf0, published 16 Jul 2026): facts from its
// description and its title slide (which names the client, Palm Beach Eldercare) only. Image: the
// video's YouTube thumbnail.
import featuredImage from '../../assets/posts/case-study/palm-beach-eldercare-ehr-medical-billing-rcm.webp';

const strong = (text) => ({ text, strong: true });
const youtubeId = 'Ltvr7lPTSf0';
const title = 'How Elixir EHR Transformed Palm Beach Eldercare';

export default {
  title,
  excerpt:
    'How Palm Beach Eldercare, an elder care facility in Florida, streamlined patient care, automated medical billing and simplified third-party provider invoicing on Salesforce with Elixir.',
  publishDate: '2026-07-16',
  seo: {
    description:
      'Palm Beach Eldercare streamlined patient care, automated medical billing and simplified third-party provider invoicing and payment with Elixir EHR and RCM on Salesforce.',
  },
  cardImage: { src: featuredImage, alt: 'How Elixir EHR Transformed Palm Beach Eldercare: case study title slide' },
  heroImage: {
    src: featuredImage,
    alt: 'How Elixir EHR Transformed Palm Beach Eldercare: case study title slide',
    width: 1280,
    height: 720,
  },
  content: [
    { type: 'heading', level: 2, text: 'At a Glance' },
    { type: 'paragraph', text: [strong('Client:'), ' Palm Beach Eldercare'] },
    { type: 'paragraph', text: [strong('Industry:'), ' Elder care (CMS GUIDE dementia model; Medicare + contract nursing)'] },
    { type: 'paragraph', text: [strong('Location:'), ' Palm Beach, Florida'] },
    { type: 'paragraph', text: [strong('Solution:'), ' Elixir EHR, Medical Billing and RCM on Salesforce (end-to-end patient CRM, EHR and medical billing on one platform)'] },

    {
      type: 'video',
      src: `https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0`,
      title: 'How Elixir Transformed Elder Care with Salesforce EHR, Medical Billing & RCM',
    },

    { type: 'heading', level: 2, text: 'Project Overview' },
    {
      type: 'paragraph',
      text: 'Palm Beach Eldercare is an elder care facility in Florida working under the CMS GUIDE dementia model, with Medicare and contract nursing. With Elixir EHR and Revenue Cycle Management (RCM), built natively on Salesforce, it streamlined patient care, automated medical billing, and simplified third-party provider invoicing and payment on a single, connected platform.',
    },

    { type: 'heading', level: 2, text: 'Solution Implemented' },
    {
      type: 'list',
      items: [
        'Automated patient intake and care coordination.',
        'Electronic Health Records (EHR) managed on Salesforce.',
        'Streamlined home care and elder care workflows.',
        'Medical billing and Revenue Cycle Management (RCM), supporting Medicare, Medicaid and private-pay billing processes.',
        'Automated third-party provider invoicing and payment, with vendor billing and reimbursement management.',
        'Disconnected systems replaced by a single Salesforce-native platform.',
      ],
    },

    { type: 'heading', level: 2, text: 'Results' },
    {
      type: 'list',
      items: [
        'Manual processes eliminated and operational efficiency improved.',
        'Complete visibility across clinical, financial and administrative workflows.',
        'Higher staff productivity through workflow automation.',
      ],
    },
  ],
};
