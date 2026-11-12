// How to Generate Comprehensive Patient Charts & Care Summaries in Elixir EHR (YouTube MC5v-A1Wkww,
// Mirketa Inc, published 10 Nov 2026, 1:32). Title and body copy are taken from the video's YouTube
// title and description (emoji, hashtags, contact lines, social links and the channel sign-off left
// out). The card image is the video's YouTube thumbnail.
import cardImage from '../../assets/posts/video/elixir-ehr-patient-charts-care-summaries/card.jpg';

const youtubeId = 'MC5v-A1Wkww';

export default {
  title: 'How to Generate Comprehensive Patient Charts & Care Summaries in Elixir EHR',
  excerpt: 'Discover how Elixir EHR revolutionizes patient chart generation directly from the care episode workflow.',
  publishDate: '2026-11-10',
  label: 'Patient Charts',
  category: 'EHR Optimization',
  duration: '1:32',
  youtubeId,
  cardImage: {
    src: cardImage,
    alt: 'Elixir Chart Generation demo: build patient charts for care episodes',
  },
  content: [
    {
      type: 'video',
      src: `https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0`,
      title: 'How to Generate Comprehensive Patient Charts & Care Summaries in Elixir EHR',
    },
    {
      type: 'lead',
      text: 'Are manual document compilation, scattered clinical histories, and slow administrative reporting slowing down your care teams?',
    },
    {
      type: 'paragraph',
      text: "Stop letting fragmented chart generation eat away at your practice's operational efficiency.",
    },
    {
      type: 'paragraph',
      text: "Discover how Elixir EHR revolutionizes patient chart generation directly from the care episode workflow. With Elixir, providers and administrative staff can compile complete patient charts for single or multiple care episodes in just a few clicks. Select essential chart elements, including demographic info, allergies, diagnoses, procedure codes, and specialized nursing forms, and watch Elixir instantly build, attach, and store the chart in the episode's file section. From individual summaries to bulk chart generation, Elixir eliminates administrative friction and ensures complete clinical documentation. Equip your healthcare facility with enterprise-grade clinical automation designed for efficiency and scale.",
    },
    {
      type: 'cta',
      title: 'Book a demo to understand more on such AI capabilities of Elixir.',
      action: { label: 'Request a Demo', to: '/request-demo/' },
    },
  ],
};
