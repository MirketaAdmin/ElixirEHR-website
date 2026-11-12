// How to Manage Patient Diagnoses & Coded Records in Elixir EHR (YouTube x6PIbUz9quI, Mirketa Inc,
// published 6 Nov 2026, 1:22). Title and body copy are taken from the video's YouTube title and
// description (emoji, hashtags, contact lines, social links and the channel sign-off left out). The
// card image is the video's YouTube thumbnail.
import cardImage from '../../assets/posts/video/elixir-ehr-patient-diagnoses-coded-records/card.jpg';

const youtubeId = 'x6PIbUz9quI';

export default {
  title: 'How to Manage Patient Diagnoses & Coded Records in Elixir EHR',
  excerpt: 'Discover how Elixir EHR revolutionizes diagnosis management directly from the patient’s chart.',
  publishDate: '2026-11-06',
  label: 'Diagnoses',
  category: 'EHR Optimization',
  duration: '1:22',
  youtubeId,
  cardImage: {
    src: cardImage,
    alt: 'Elixir Diagnoses demo: review and record coded diagnoses in the patient chart',
  },
  content: [
    {
      type: 'video',
      src: `https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0`,
      title: 'How to Manage Patient Diagnoses & Coded Records in Elixir EHR',
    },
    {
      type: 'lead',
      text: 'Are manual diagnosis coding errors, scattered problem lists, and slow documentation workflows holding your practice back?',
    },
    {
      type: 'paragraph',
      text: 'Stop letting administrative friction compromise clinical accuracy and revenue potential.',
    },
    {
      type: 'paragraph',
      text: 'Discover how Elixir EHR revolutionizes diagnosis management directly from the patient’s chart. With Elixir, care teams can instantly review comprehensive coded diagnosis lists, link new diagnoses to care episodes, and record primary or secondary conditions in seconds. From instant search codes to streamlined provider attribution and start-date tracking, Elixir eliminates administrative guesswork and ensures complete clinical visibility. Equip your healthcare organization with enterprise-grade clinical automation designed for efficiency and scale.',
    },
    {
      type: 'cta',
      title: 'Book a demo to understand more on such AI capabilities of Elixir.',
      action: { label: 'Request a Demo', to: '/request-demo/' },
    },
  ],
};
