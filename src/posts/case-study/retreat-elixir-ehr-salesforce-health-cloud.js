// Case study written from the Mirketa YouTube video "How Retreat Transformed Patient Care with Elixir
// EHR on Salesforce Health Cloud | Case Study" (C1bUtN7LWaA, published 7 Aug 2026): facts from its
// description and its title slide only. Image: the video's YouTube thumbnail.
import featuredImage from '../../assets/posts/case-study/retreat-elixir-ehr-salesforce-health-cloud.webp';

const strong = (text) => ({ text, strong: true });
const youtubeId = 'C1bUtN7LWaA';
const title = 'How Retreat Transformed Patient Care with Elixir EHR on Salesforce Health Cloud';

export default {
  title,
  excerpt:
    'How Retreat, an Illinois health and wellness organization, replaced manual processes with one connected care journey on Salesforce Health Cloud and Elixir EHR.',
  publishDate: '2026-08-07',
  seo: {
    description:
      'Retreat unified onboarding, clinical care, lab ordering, e-prescribing, supplement commerce and payments on Salesforce Health Cloud and Elixir EHR across its Deer Park and Northfield locations.',
  },
  cardImage: { src: featuredImage, alt: 'How Elixir EHR Transformed Retreat: case study title slide' },
  heroImage: {
    src: featuredImage,
    alt: 'How Elixir EHR Transformed Retreat: case study title slide',
    width: 1280,
    height: 720,
  },
  content: [
    { type: 'heading', level: 2, text: 'At a Glance' },
    { type: 'paragraph', text: [strong('Client:'), ' Retreat'] },
    { type: 'paragraph', text: [strong('Industry:'), ' Health & Wellness, Holistic & Preventive Care'] },
    { type: 'paragraph', text: [strong('Location:'), ' Illinois, United States (Deer Park and Northfield locations)'] },
    { type: 'paragraph', text: [strong('Employees:'), ' 20–100'] },
    { type: 'paragraph', text: [strong('Solution:'), ' Elixir Contact Center, EHR, Patient Portal & Payments on Salesforce Health Cloud'] },
    { type: 'paragraph', text: [strong('Integrations:'), ' RingCentral, Zoom, NewCrop, InBody, Vital, Shopify, Stripe'] },

    { type: 'video', src: `https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0`, title },

    { type: 'heading', level: 2, text: 'Project Overview' },
    {
      type: 'paragraph',
      text: 'Retreat is an Illinois-based health and wellness organization. It replaced manual processes with one unified platform built on Salesforce Health Cloud and Elixir EHR, bringing onboarding, clinical care, lab ordering, e-prescribing, supplement commerce and payments into a single connected system across its Deer Park and Northfield locations.',
    },

    { type: 'heading', level: 2, text: 'The Challenge' },
    {
      type: 'paragraph',
      text: 'Retreat’s care coordinators, providers and admin teams worked across fragmented tools, with manual handoffs between them.',
    },

    { type: 'heading', level: 2, text: 'Solution Implemented' },
    {
      type: 'list',
      items: [
        [strong('Contact Center, EHR and Patient Portal architecture'), ' on Salesforce.'],
        [strong('A unified patient chart:'), ' encounters, care plans, labs, prescriptions and vitals on one screen.'],
        [strong('Payment-gated portal access'), ' with Stripe-powered payments and membership plans.'],
        [strong('Integrated e-prescribing (NewCrop) and lab and radiology ordering'), ' that automate follow-up tasks.'],
        [strong('Shopify-powered supplement commerce'), ' that syncs live inventory across 10–17 vendors and multiple locations.'],
        [strong('One HIPAA-compliant platform'), ' connecting RingCentral, Zoom, NewCrop, InBody, Vital, Shopify and Stripe.'],
      ],
    },

    { type: 'heading', level: 2, text: 'Results' },
    {
      type: 'paragraph',
      text: 'Retreat moved from disconnected point solutions to one intelligent, end-to-end care journey, natively on Salesforce, eliminating fragmented tools and manual handoffs across its teams and locations.',
    },
  ],
};
