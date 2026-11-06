// How to Track Patient Outcomes & Progress in Elixir EHR (YouTube h5aIyWgZQ3U, Mirketa Inc, published 5
// Nov 2026, 1:59). Title and body copy are taken from the video's YouTube title and description (emoji,
// hashtags, contact lines, social links and the channel sign-off left out). The card image is the
// video's YouTube thumbnail.
import cardImage from '../../assets/posts/video/elixir-ehr-patient-outcomes-progress-tracking/card.jpg';

const youtubeId = 'h5aIyWgZQ3U';

export default {
  title: 'How to Track Patient Outcomes & Progress in Elixir EHR',
  excerpt: 'Discover how Elixir EHR empowers multidisciplinary care teams to define precise outcomes and track patient progress in real time.',
  publishDate: '2026-11-05',
  label: 'Care Plans',
  category: 'EHR Optimization',
  duration: '1:59',
  youtubeId,
  cardImage: {
    src: cardImage,
    alt: 'Elixir Care Plan Outcomes demo: define outcomes and record progress',
  },
  content: [
    {
      type: 'video',
      src: `https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0`,
      title: 'How to Track Patient Outcomes & Progress in Elixir EHR',
    },
    {
      type: 'lead',
      text: 'Are you struggling to measure real clinical progress and prove patient outcomes across your care programs?',
    },
    {
      type: 'paragraph',
      text: 'Stop letting vague tracking and disconnected metrics compromise your care quality.',
    },
    {
      type: 'paragraph',
      text: 'Discover how Elixir EHR empowers multidisciplinary care teams to define precise outcomes and track patient progress in real time. Whether configuring template-driven metrics, recording manual or device-driven numerical readings, or capturing descriptive progress notes for sleep and energy levels, Elixir gives providers total visibility from baseline to target. Equip your healthcare facility with enterprise-grade clinical automation designed to eliminate data silos and drive superior patient results.',
    },
    {
      type: 'cta',
      title: 'Book a demo to understand more on such AI capabilities of Elixir.',
      action: { label: 'Request a Demo', to: '/request-demo/' },
    },
  ],
};
