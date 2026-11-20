// Case study written from the Mirketa YouTube video "Case Study | How Vitra Health Scaled Revenue
// Cycle Operations with Elixir RCM" (LP5hJ6cUTyk, published 11 Aug 2026): facts from its description
// and its title slide only. Image: the video's YouTube thumbnail.
import featuredImage from '../../assets/posts/case-study/vitra-health-revenue-cycle-operations-elixir-rcm.webp';

const strong = (text) => ({ text, strong: true });
const youtubeId = 'LP5hJ6cUTyk';
const title = 'How Vitra Health Scaled Revenue Cycle Operations with Elixir RCM';

export default {
  title,
  excerpt:
    'How Vitra Health, a Massachusetts Home Healthcare and Adult Foster Care provider, automated its billing lifecycle with Elixir RCM on Salesforce and ClaimMD.',
  publishDate: '2026-08-11',
  seo: {
    description:
      'Vitra Health scaled its revenue cycle with Elixir RCM on Salesforce and ClaimMD: automated claims, real-time eligibility checks, faster ERA processing and end-to-end denial management.',
  },
  cardImage: { src: featuredImage, alt: 'Scaling Revenue Cycle Operations for Vitra Health: case study title slide' },
  heroImage: {
    src: featuredImage,
    alt: 'Scaling Revenue Cycle Operations for Vitra Health: case study title slide',
    width: 1280,
    height: 720,
  },
  content: [
    { type: 'heading', level: 2, text: 'At a Glance' },
    { type: 'paragraph', text: [strong('Client:'), ' Vitra Health'] },
    { type: 'paragraph', text: [strong('Industry:'), ' Home Healthcare & Adult Foster Care (AFC)'] },
    { type: 'paragraph', text: [strong('Location:'), ' Massachusetts, USA'] },
    { type: 'paragraph', text: [strong('Solution:'), ' Elixir RCM on Salesforce (end-to-end revenue cycle)'] },
    { type: 'paragraph', text: [strong('Integrations:'), ' ClaimMD for claims and Electronic Remittance Advice (ERA)'] },

    { type: 'video', src: `https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0`, title },

    { type: 'heading', level: 2, text: 'Project Overview' },
    {
      type: 'paragraph',
      text: 'Vitra Health is a Massachusetts-based Home Healthcare and Adult Foster Care (AFC) provider operating in a high-volume, multi-payer environment. Mirketa implemented a complete, end-to-end Revenue Cycle Management solution built on Salesforce and Elixir RCM, integrated with ClaimMD, to bring accuracy, visibility and automation to its billing lifecycle.',
    },

    { type: 'heading', level: 2, text: 'The Challenge' },
    {
      type: 'paragraph',
      text: 'With growing operational complexity across two service lines and multiple payers, Vitra Health needed to automate claim generation and gain end-to-end visibility across Home Healthcare and AFC billing.',
    },

    { type: 'heading', level: 2, text: 'Solution Implemented' },
    {
      type: 'list',
      items: [
        [strong('Streamlined claim lifecycle:'), ' caregiver logs, diagnosis codes and service records flow directly into automated claims without manual re-entry.'],
        [strong('Real-time eligibility and validation:'), ' pre-claim eligibility checks and coverage validation cut rejections at the source.'],
        [strong('Faster ERA processing and reconciliation:'), ' automated ERA ingestion and payment reconciliation across complex, multi-payer scenarios.'],
        [strong('End-to-end denial management:'), ' structured resubmission and correction workflows keep denied claims moving toward payment.'],
      ],
    },

    { type: 'heading', level: 2, text: 'Results' },
    {
      type: 'list',
      items: [
        'Audit-ready visibility, unifying 2 distinct service lines across 4 connected stages for total financial insight.',
        'A revenue cycle that is scalable, accurate, visible and automated.',
      ],
    },
  ],
};
