// How to Automate Super Bill Generation & Streamline Billing in Elixir EHR (YouTube irE1SoGfdhE,
// Mirketa Inc, published 6 Nov 2026, 1:15). Title and body copy are taken from the video's YouTube
// title and description (emoji, hashtags, contact lines, social links and the channel sign-off left
// out). The card image is the video's YouTube thumbnail.
import cardImage from '../../assets/posts/video/elixir-ehr-super-bill-generation/card.jpg';

const youtubeId = 'irE1SoGfdhE';

export default {
  title: 'How to Automate Super Bill Generation & Streamline Billing in Elixir EHR',
  excerpt: 'Discover how Elixir EHR automates super bill creation for single or multiple care episodes in a single click.',
  publishDate: '2026-11-06',
  label: 'Revenue Cycle',
  category: 'Revenue Cycle (RCM)',
  duration: '1:15',
  youtubeId,
  cardImage: {
    src: cardImage,
    alt: 'Elixir Super Bill demo: generate super bills for care episodes as PDF files',
  },
  content: [
    {
      type: 'video',
      src: `https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0`,
      title: 'How to Automate Super Bill Generation & Streamline Billing in Elixir EHR',
    },
    {
      type: 'lead',
      text: "Are manual billing summaries, scattered documentation, and slow revenue cycles holding back your practice's financial performance?",
    },
    {
      type: 'paragraph',
      text: 'Stop wasting valuable administrative hours compiling superbills by hand.',
    },
    {
      type: 'paragraph',
      text: 'Discover how Elixir EHR automates super bill creation for single or multiple care episodes in a single click. From compiling billing provider and patient information to bundling insurance details, procedure codes, diagnosis codes, and total charges directly into downloadable PDF files, Elixir eliminates billing friction and accelerates your reimbursement cycles. Empower your healthcare organization with enterprise-grade clinical and financial automation designed for efficiency and scale.',
    },
    {
      type: 'cta',
      title: 'Book a demo to understand more on such AI capabilities of Elixir.',
      action: { label: 'Request a Demo', to: '/request-demo/' },
    },
  ],
};
