// Case study written from the Mirketa YouTube video "Case Study | How Elixir Cut Claim Processing
// Time by 40% for OncoHost" (KFZbjCc1FAs, published 11 Aug 2026): facts from its description and its
// title slide only. Image: the video's YouTube thumbnail.
import featuredImage from '../../assets/posts/case-study/oncohost-claim-processing-elixir-billing.webp';

const strong = (text) => ({ text, strong: true });
const youtubeId = 'KFZbjCc1FAs';
const title = 'How Elixir Cut Claim Processing Time by 40% for OncoHost';

export default {
  title,
  excerpt:
    'How OncoHost, an AI-powered precision medicine company, automated medical billing with Elixir Billing on Salesforce: 40% faster claim processing and 25% fewer manual errors.',
  publishDate: '2026-08-11',
  seo: {
    description:
      'OncoHost automated medical billing and claims with Elixir EHR and RCM on Salesforce, ClaimMD and Authorize.Net: 40% faster claim processing, 25% fewer manual errors, 95% user adoption.',
  },
  cardImage: { src: featuredImage, alt: 'How Elixir Automated Billing for OncoHost: case study title slide' },
  heroImage: {
    src: featuredImage,
    alt: 'How Elixir Automated Billing for OncoHost: case study title slide',
    width: 1280,
    height: 720,
  },
  content: [
    { type: 'heading', level: 2, text: 'At a Glance' },
    { type: 'paragraph', text: [strong('Client:'), ' OncoHost'] },
    { type: 'paragraph', text: [strong('Industry:'), ' HealthTech, AI-powered precision medicine'] },
    { type: 'paragraph', text: [strong('Location:'), ' North Carolina, United States'] },
    { type: 'paragraph', text: [strong('Employees:'), ' 100+'] },
    { type: 'paragraph', text: [strong('Solution:'), ' RCM, Elixir Billing on Salesforce'] },
    { type: 'paragraph', text: [strong('Integrations:'), ' ClaimMD, Authorize.Net'] },

    { type: 'video', src: `https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0`, title },

    { type: 'heading', level: 2, text: 'Project Overview' },
    {
      type: 'paragraph',
      text: 'OncoHost is an AI-powered precision medicine company. Mirketa delivered a medical-billing and revenue-cycle system built on Salesforce and Elixir Billing, so OncoHost could automate its medical billing, eliminate manual errors and streamline claims processing across its clinical and financial workflows on a single connected platform.',
    },

    { type: 'heading', level: 2, text: 'Solution Implemented' },
    {
      type: 'list',
      items: [
        [strong('Streamlined claims, ERAs and patient billing'), ' on Elixir EHR and RCM, built natively on Salesforce.'],
        [strong('Automated claim submission'), ' through the ClaimMD integration.'],
        [strong('Native Salesforce payments'), ' with the Authorize.Net integration.'],
        [strong('Faster onboarding'), ' with 60-day warranty support.'],
      ],
    },

    { type: 'heading', level: 2, text: 'Results' },
    {
      type: 'list',
      items: [
        [strong('40% faster claim processing,'), ' with significantly reduced claim cycle time and overhead.'],
        [strong('25% reduction in manual errors'), ' across claims, ERAs and patient billing.'],
        [strong('95% user adoption'), ' through a seamless transition.'],
        'Complete financial transparency on a single connected platform.',
      ],
    },
  ],
};
