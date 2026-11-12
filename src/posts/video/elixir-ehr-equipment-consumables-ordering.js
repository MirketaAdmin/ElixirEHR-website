// How to Manage Patient Equipment & Consumables Ordering in Elixir EHR (YouTube fIooBGM_jBs, Mirketa
// Inc, published 10 Nov 2026, 1:22). Title and body copy are taken from the video's YouTube title and
// description (emoji, hashtags, contact lines, social links and the channel sign-off left out). The
// card image is the video's YouTube thumbnail.
import cardImage from '../../assets/posts/video/elixir-ehr-equipment-consumables-ordering/card.jpg';

const youtubeId = 'fIooBGM_jBs';

export default {
  title: 'How to Manage Patient Equipment & Consumables Ordering in Elixir EHR',
  excerpt: 'Discover how Elixir EHR revolutionizes equipment and consumables ordering directly from the patient’s chart.',
  publishDate: '2026-11-10',
  label: 'Supplies',
  category: 'EHR Optimization',
  duration: '1:22',
  youtubeId,
  cardImage: {
    src: cardImage,
    alt: 'Elixir Equipment & Consumables demo: order medical supplies from the patient chart',
  },
  content: [
    {
      type: 'video',
      src: `https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0`,
      title: 'How to Manage Patient Equipment & Consumables Ordering in Elixir EHR',
    },
    {
      type: 'lead',
      text: "Are manual inventory tracking, disjointed supply chains, and missing medical supply charges eating away at your practice's profitability?",
    },
    {
      type: 'paragraph',
      text: 'Stop letting administrative blind spots in medical supply management compromise your operational efficiency.',
    },
    {
      type: 'paragraph',
      text: 'Discover how Elixir EHR revolutionizes equipment and consumables ordering directly from the patient’s chart. With Elixir, care teams can instantly scan barcodes, browse live inventory databases by type, select specific item lots with real-time unit availability, and calculate totals automatically. From multi-item orders to seamless tracking, Elixir eliminates supply chain friction and ensures every resource used is accurately accounted for. Equip your healthcare facility with enterprise-grade clinical automation designed for efficiency and scale.',
    },
    {
      type: 'cta',
      title: 'Book a demo to understand more on such AI capabilities of Elixir.',
      action: { label: 'Request a Demo', to: '/request-demo/' },
    },
  ],
};
