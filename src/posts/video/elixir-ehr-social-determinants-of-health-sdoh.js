// How to Track Social Determinants of Health (SDOH) in Elixir EHR (YouTube NdnHC-5B0JQ, Mirketa Inc,
// published 6 Nov 2026, 1:29). Title and body copy are taken from the video's YouTube title and
// description (emoji, hashtags, contact lines, social links and the channel sign-off left out). The
// card image is the video's YouTube thumbnail.
import cardImage from '../../assets/posts/video/elixir-ehr-social-determinants-of-health-sdoh/card.jpg';

const youtubeId = 'NdnHC-5B0JQ';

export default {
  title: 'How to Track Social Determinants of Health (SDOH) in Elixir EHR',
  excerpt: 'Discover how Elixir EHR empowers care teams to capture, assess, and track social determinants of health in a structured, unified workflow right from the patient chart.',
  publishDate: '2026-11-06',
  label: 'SDOH',
  category: 'EHR Optimization',
  duration: '1:29',
  youtubeId,
  cardImage: {
    src: cardImage,
    alt: 'Elixir Social Determinants of Health demo: record SDOH assessments in the patient chart',
  },
  content: [
    {
      type: 'video',
      src: `https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0`,
      title: 'How to Track Social Determinants of Health (SDOH) in Elixir EHR',
    },
    {
      type: 'lead',
      text: 'Are unaddressed social determinants of health, like housing insecurity, food access, and transportation sabotaging your patient outcomes and driving up readmissions?',
    },
    {
      type: 'paragraph',
      text: 'Stop letting critical blind spots outside the clinic walls compromise clinical success.',
    },
    {
      type: 'paragraph',
      text: 'Discover how Elixir EHR empowers care teams to capture, assess, and track social determinants of health in a structured, unified workflow right from the patient chart. Utilizing standardized tools like PRAPARE, Elixir enables providers to record essential domains, from housing and financial stability to social support and stress, maintain a clear history of active versus historical records, and gain true visibility into what keeps patients from reaching their goals. Equip your healthcare organization with enterprise-grade clinical automation designed to eliminate coordination gaps and drive superior patient results.',
    },
    {
      type: 'cta',
      title: 'Book a demo to understand more on such AI capabilities of Elixir.',
      action: { label: 'Request a Demo', to: '/request-demo/' },
    },
  ],
};
