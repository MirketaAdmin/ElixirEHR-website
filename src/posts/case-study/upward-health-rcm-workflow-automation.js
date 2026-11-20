// Case study written from the Mirketa YouTube video "Case Study | How Elixir Accelerated Workflows
// by approx 35% for Upward Health" (rUIt7Cht5QQ, published 11 Aug 2026): facts from its description
// and its "Measurable impact" slide only. Image: the video's YouTube thumbnail.
import featuredImage from '../../assets/posts/case-study/upward-health-rcm-workflow-automation.webp';

const strong = (text) => ({ text, strong: true });
const youtubeId = 'rUIt7Cht5QQ';
const title = 'How Elixir Accelerated Workflows by approx 35% for Upward Health';

export default {
  title,
  excerpt:
    'How Upward Health, an in-home medical group, automated medical billing and claims with Elixir RCM on Salesforce: 35% faster workflows, 25% fewer errors and 90% user adoption.',
  publishDate: '2026-08-11',
  seo: {
    description:
      'Upward Health automated medical billing with Elixir RCM on Salesforce, Microsoft Azure and ClaimMD: 35% faster workflows, 25% fewer errors and 90% user adoption in the first month.',
  },
  cardImage: { src: featuredImage, alt: 'Measurable impact for Upward Health: 35% faster workflows, 25% fewer errors, 90% user adoption' },
  heroImage: {
    src: featuredImage,
    alt: 'Measurable impact for Upward Health: 35% faster workflows, 25% fewer errors, 90% user adoption',
    width: 1280,
    height: 720,
  },
  content: [
    { type: 'heading', level: 2, text: 'At a Glance' },
    { type: 'paragraph', text: [strong('Client:'), ' Upward Health'] },
    { type: 'paragraph', text: [strong('Industry:'), ' In-home medical group delivering primary, behavioral and social care for complex needs'] },
    { type: 'paragraph', text: [strong('Solution:'), ' Elixir Revenue Cycle Management (RCM) on Salesforce'] },
    { type: 'paragraph', text: [strong('Technologies and integrations:'), ' Salesforce, Microsoft Azure, ClaimMD clearinghouse'] },

    { type: 'video', src: `https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0`, title },

    { type: 'heading', level: 2, text: 'Project Overview' },
    {
      type: 'paragraph',
      text: 'Upward Health is an in-home medical group delivering primary, behavioral and social care for people with complex needs. With Elixir RCM, built natively on Salesforce, Upward Health automated its medical billing, eliminated manual errors, and streamlined claims processing and exception handling, building a scalable RCM operation with clear financial insight.',
    },

    { type: 'heading', level: 2, text: 'Solution Implemented' },
    {
      type: 'list',
      items: [
        [strong('Automated claim and payment workflows'), ' for faster revenue realization and fewer manual interventions.'],
        [strong('Exception handling and reporting:'), ' 10 automated flows for exceptions and reporting, plus 15 reports and 5 dashboards for full visibility.'],
        [strong('Salesforce-native payments'), ' to improve collection efficiency and patient satisfaction.'],
        [strong('Salesforce-native and cloud integration'), ' with Microsoft Azure and the ClaimMD clearinghouse.'],
      ],
    },

    { type: 'heading', level: 2, text: 'Results' },
    {
      type: 'list',
      items: [
        [strong('35% faster workflows:'), ' claim and payment workflows accelerated for faster revenue realization.'],
        [strong('25% reduction in errors'), ' across claims processing and payment handling.'],
        [strong('90% user adoption'), ' within the first month.'],
        [strong('Better financial insight:'), ' automated flows, reports and dashboards, plus aging reports and automated statements for clearer decisions.'],
      ],
    },
  ],
};
