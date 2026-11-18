// Case study written from the Mirketa YouTube video "How Granite Recovery Automated Patient Pre-Intake
// with Elixir Contact Center & KIPU EHR | Case Study" (I13VpU2po9M, published 26 Aug 2026): facts from
// its description and its "At a glance" title slide only. Image: the video's YouTube thumbnail.
import featuredImage from '../../assets/posts/case-study/granite-recovery-patient-pre-intake-automation.webp';

const strong = (text) => ({ text, strong: true });
const youtubeId = 'I13VpU2po9M';
const title = 'How Granite Recovery Automated Patient Pre-Intake with Elixir Contact Center & KIPU EHR';

export default {
  title,
  excerpt:
    'How Granite Recovery, a New Hampshire behavioral healthcare provider, automated pre-intake on Salesforce with Elixir Contact Center and a bi-directional KIPU EHR integration.',
  publishDate: '2026-08-26',
  seo: {
    description:
      'Granite Recovery automated patient pre-intake with Elixir Contact Center on Salesforce: unified lead capture, custom pre-intake and VOB forms, and bi-directional KIPU EHR sync.',
  },
  cardImage: { src: featuredImage, alt: 'How Elixir Automated Patient Pre-Intake for Granite Recovery: case study title slide' },
  heroImage: {
    src: featuredImage,
    alt: 'How Elixir Automated Patient Pre-Intake for Granite Recovery: case study title slide',
    width: 1280,
    height: 720,
  },
  content: [
    { type: 'heading', level: 2, text: 'At a Glance' },
    { type: 'paragraph', text: [strong('Client:'), ' Granite Recovery'] },
    { type: 'paragraph', text: [strong('Industry:'), ' Behavioral Healthcare (Addiction Treatment & Recovery)'] },
    { type: 'paragraph', text: [strong('Location:'), ' New Hampshire, USA'] },
    { type: 'paragraph', text: [strong('Employees:'), ' 100+'] },
    { type: 'paragraph', text: [strong('Solution:'), ' Elixir Contact Center on Salesforce'] },
    { type: 'paragraph', text: [strong('Integrations:'), ' Call Rail, Web-to-Lead, KIPU EHR (bi-directional)'] },

    { type: 'video', src: `https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0`, title },

    { type: 'heading', level: 2, text: 'Project Overview' },
    {
      type: 'paragraph',
      text: 'Granite Recovery is a New Hampshire-based behavioral healthcare provider with 100+ employees, specializing in addiction treatment and recovery. Mirketa delivered an end-to-end pre-intake and contact center solution built on Salesforce with Elixir Contact Center, integrated bi-directionally with the KIPU EHR.',
    },

    { type: 'heading', level: 2, text: 'The Challenge' },
    {
      type: 'paragraph',
      text: 'Granite Recovery had the KIPU EHR in place but no CRM for patient intake. Patient information had to be re-entered manually between Salesforce and KIPU, creating handoff delays between lead generation and care delivery.',
    },

    { type: 'heading', level: 2, text: 'Solution Implemented' },
    {
      type: 'list',
      items: [
        [strong('Bi-directional KIPU sync:'), ' patient records are created automatically in KIPU upon transfer, keeping demographics and utilization data in sync across both systems.'],
        [strong('Unified lead capture:'), ' leads from Call Rail and Web-to-Lead are ingested and tracked in a single, centralized intake queue.'],
        [strong('Custom pre-intake and VOB forms:'), ' tailored pre-assessment, Verification of Benefits (VOB), cost-of-care and travel management workflows built directly into the platform.'],
      ],
    },

    { type: 'heading', level: 2, text: 'Results' },
    {
      type: 'list',
      items: [
        'Manual re-entry between Salesforce and KIPU EHR eliminated.',
        'Less screen time and fewer errors, reducing administrative friction for care teams.',
        'Significantly higher intake conversion rates.',
      ],
    },
  ],
};
