// Elixir EHR care episodes & claim generation product demo (YouTube g1dtu5lYMic, Mirketa Inc, published
// 3 Nov 2026, 0:44). Title and body copy are taken from the video's YouTube title and description
// (emoji, hashtags, contact lines, social links and the channel sign-off left out). The card image is
// the video's YouTube thumbnail.
import cardImage from '../../assets/posts/video/elixir-ehr-care-episode-claim-generation/card.jpg';

const youtubeId = 'g1dtu5lYMic';

export default {
  title: 'Streamline Patient Care & Claim Generation with Elixir EHR',
  excerpt:
    'Discover how Elixir EHR eliminates billing friction by automatically connecting care episodes straight to claim generation.',
  publishDate: '2026-11-03',
  label: 'Revenue Cycle',
  category: 'Revenue Cycle (RCM)',
  duration: '0:44',
  youtubeId,
  cardImage: {
    src: cardImage,
    alt: 'Elixir Care Episodes & Claim Generation product demo: a laptop showing a patient’s care episode list in Elixir RCM',
  },
  content: [
    {
      type: 'video',
      src: `https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0`,
      title: 'Streamline Patient Care & Claim Generation with Elixir EHR',
    },
    {
      type: 'lead',
      text: 'Are manual data exports, billing bottlenecks, and scattered visit notes slowing down your revenue cycle?',
    },
    {
      type: 'paragraph',
      text: 'Discover how Elixir EHR eliminates billing friction by automatically connecting care episodes straight to claim generation.',
    },
    {
      type: 'paragraph',
      text: 'With Elixir, closing a care episode instantly bundles provider details, procedure codes, diagnosis codes, and payer information into a ready-to-submit claim file, no spreadsheets or manual exports needed. Enjoy faster reimbursements, fewer denials, and more time to focus on patient care.',
    },
    {
      type: 'cta',
      title: "Book a demo to understand more about Elixir's advanced AI and RCM capabilities.",
      action: { label: 'Request a Demo', to: '/request-demo/' },
    },
  ],
};
