// How to Manage Patient Procedures & Billing Records in Elixir EHR (YouTube j7JYxlR8cVU, Mirketa Inc,
// published 6 Nov 2026, 0:11). Title and body copy are taken from the video's YouTube title and
// description (emoji, hashtags, contact lines, social links and the channel sign-off left out). The
// card image is the video's YouTube thumbnail.
import cardImage from '../../assets/posts/video/elixir-ehr-patient-procedures-billing-records/card.jpg';

const youtubeId = 'j7JYxlR8cVU';

export default {
  title: 'How to Manage Patient Procedures & Billing Records in Elixir EHR',
  excerpt: 'Discover how Elixir EHR revolutionizes procedure tracking and billing preparation directly from the patient’s chart.',
  publishDate: '2026-11-06',
  label: 'Revenue Cycle',
  category: 'Revenue Cycle (RCM)',
  duration: '0:11',
  youtubeId,
  cardImage: {
    src: cardImage,
    alt: 'Elixir Procedures demo: review and add billable procedures in the patient chart',
  },
  content: [
    {
      type: 'video',
      src: `https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0`,
      title: 'How to Manage Patient Procedures & Billing Records in Elixir EHR',
    },
    {
      type: 'lead',
      text: "Are missing procedure records, billing discrepancies, and manual data entry errors eating away at your practice's revenue?",
    },
    {
      type: 'paragraph',
      text: 'Stop letting administrative blind spots compromise your financial performance.',
    },
    {
      type: 'paragraph',
      text: 'Discover how Elixir EHR revolutionizes procedure tracking and billing preparation directly from the patient’s chart. With Elixir, care teams can effortlessly review logged procedures, track billing codes, and add new billable procedures in seconds with total accuracy. From comprehensive procedure summaries to seamless integration with your revenue cycle workflows, Elixir eliminates billing friction and ensures every service delivered is accounted for. Equip your healthcare organization with enterprise-grade clinical automation designed for efficiency and scale.',
    },
    {
      type: 'cta',
      title: 'Book a demo to understand more on such AI capabilities of Elixir.',
      action: { label: 'Request a Demo', to: '/request-demo/' },
    },
  ],
};
