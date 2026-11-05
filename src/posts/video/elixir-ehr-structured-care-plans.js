// How to Build Structured Patient Care Plans in Elixir EHR (YouTube Jsx0zOmLjRw, Mirketa Inc, published
// 4 Nov 2026, 2:09). Title and body copy are taken from the video's YouTube title and description
// (emoji, hashtags, contact lines, social links and the channel sign-off left out). The card image is
// the video's YouTube thumbnail.
import cardImage from '../../assets/posts/video/elixir-ehr-structured-care-plans/card.jpg';

const youtubeId = 'Jsx0zOmLjRw';

export default {
  title: 'How to Build Structured Patient Care Plans in Elixir EHR',
  excerpt: 'Discover how Elixir EHR empowers multidisciplinary care teams to build structured, comprehensive care plans in seconds.',
  publishDate: '2026-11-04',
  label: 'Care Plans',
  category: 'EHR Optimization',
  duration: '2:09',
  youtubeId,
  cardImage: {
    src: cardImage,
    alt: 'Elixir Care Plans demo: build care plans with goals, objectives, and interventions',
  },
  content: [
    {
      type: 'video',
      src: `https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0`,
      title: 'How to Build Structured Patient Care Plans in Elixir EHR',
    },
    {
      type: 'lead',
      text: 'Are fragmented patient records, misaligned care teams, and manual care tracking holding your practice back?',
    },
    {
      type: 'paragraph',
      text: 'Stop letting administrative silos compromise patient outcomes.',
    },
    {
      type: 'paragraph',
      text: 'Discover how Elixir EHR empowers multidisciplinary care teams to build structured, comprehensive care plans in seconds. With Elixir, you can seamlessly connect patient goals, objectives, and interventions, assign team responsibilities, and track every milestone through to completion—all within a single, unified patient chart. Equip your healthcare facility with enterprise-grade clinical automation designed to eliminate coordination gaps and drive superior patient results.',
    },
    {
      type: 'cta',
      title: 'Book a demo to understand more on such AI capabilities of Elixir.',
      action: { label: 'Request a Demo', to: '/request-demo/' },
    },
  ],
};
