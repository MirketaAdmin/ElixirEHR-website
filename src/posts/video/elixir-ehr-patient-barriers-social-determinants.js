// How to Track Patient Barriers & Social Determinants in Elixir EHR (YouTube WvT-f2uqYjk, Mirketa Inc,
// published 4 Nov 2026, 1:16). Title and body copy are taken from the video's YouTube title and
// description (emoji, hashtags, contact lines, social links and the channel sign-off left out). The
// card image is the video's YouTube thumbnail.
import cardImage from '../../assets/posts/video/elixir-ehr-patient-barriers-social-determinants/card.jpg';

const youtubeId = 'WvT-f2uqYjk';

export default {
  title: 'How to Track Patient Barriers & Social Determinants in Elixir EHR',
  excerpt: 'Discover how Elixir EHR empowers care teams to seamlessly capture and manage patient barriers.',
  publishDate: '2026-11-04',
  label: 'SDOH',
  category: 'EHR Optimization',
  duration: '1:16',
  youtubeId,
  cardImage: {
    src: cardImage,
    alt: 'Elixir Care Plan Barriers demo: add barriers to goals and care plans',
  },
  content: [
    {
      type: 'video',
      src: `https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0`,
      title: 'How to Track Patient Barriers & Social Determinants in Elixir EHR',
    },
    {
      type: 'lead',
      text: 'Are unaddressed social determinants of health and hidden care barriers sabotaging patient outcomes and increasing readmissions?',
    },
    {
      type: 'paragraph',
      text: 'Stop letting blind spots in patient tracking compromise clinical success.',
    },
    {
      type: 'paragraph',
      text: 'Discover how Elixir EHR empowers care teams to seamlessly capture and manage patient barriers—from meal skipping to caregiver burden, directly tied to specific care plan goals or the entire treatment plan. By drawing insights straight from social determinants records, Elixir ensures your providers have complete visibility into what keeps patients from reaching their goals. Equip your healthcare organization with enterprise-grade clinical automation designed to eliminate coordination gaps and drive superior patient results.',
    },
    {
      type: 'cta',
      title: 'Book a demo to understand more on such AI capabilities of Elixir.',
      action: { label: 'Request a Demo', to: '/request-demo/' },
    },
  ],
};
