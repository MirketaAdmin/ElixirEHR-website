// How to Close Care Episodes & Automate Claims in Elixir EHR (YouTube BMLlQ73Xo9I, Mirketa Inc,
// published 4 Nov 2026, 1:15). Title and body copy are taken from the video's YouTube title and
// description (emoji, hashtags, contact lines, social links and the channel sign-off left out). The
// card image is the video's YouTube thumbnail.
import cardImage from '../../assets/posts/video/elixir-ehr-close-care-episodes-automate-claims/card.jpg';

const youtubeId = 'BMLlQ73Xo9I';

export default {
  title: 'How to Close Care Episodes & Automate Claims in Elixir EHR',
  excerpt: 'Discover how Elixir EHR streamlines the end-of-care workflow.',
  publishDate: '2026-11-04',
  label: 'Revenue Cycle',
  category: 'Revenue Cycle (RCM)',
  duration: '1:15',
  youtubeId,
  cardImage: {
    src: cardImage,
    alt: 'Elixir Care Episodes demo: close care episodes from the list or the episode record',
  },
  content: [
    {
      type: 'video',
      src: `https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0`,
      title: 'How to Close Care Episodes & Automate Claims in Elixir EHR',
    },
    {
      type: 'lead',
      text: 'Are billing bottlenecks, manual data handoffs, and delayed claim generation slowing down your revenue cycle?',
    },
    {
      type: 'paragraph',
      text: 'Stop losing valuable time on administrative friction at the end of a patient’s treatment cycle.',
    },
    {
      type: 'paragraph',
      text: 'Discover how Elixir EHR streamlines the end-of-care workflow. With Elixir, closing a care episode finalizes treatment details and automatically triggers clean, ready-to-submit claims in seconds. Whether closing individual episodes from patient charts or managing bulk updates from lists, your practice ensures complete clinical accuracy, faster reimbursements, and zero revenue leakage. Empower your facility with enterprise-grade healthcare automation.',
    },
    {
      type: 'cta',
      title: 'Book a demo to understand more on such AI capabilities of Elixir.',
      action: { label: 'Request a Demo', to: '/request-demo/' },
    },
  ],
};
