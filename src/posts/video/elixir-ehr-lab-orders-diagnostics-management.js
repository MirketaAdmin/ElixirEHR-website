// Streamline Lab Orders & Diagnostics Management in Elixir EHR (YouTube SaFbowjIlEU, Mirketa Inc,
// published 5 Nov 2026, 2:47). Title and body copy are taken from the video's YouTube title and
// description (emoji, hashtags, contact lines, social links and the channel sign-off left out). The
// card image is the video's YouTube thumbnail.
import cardImage from '../../assets/posts/video/elixir-ehr-lab-orders-diagnostics-management/card.jpg';

const youtubeId = 'SaFbowjIlEU';

export default {
  title: 'Streamline Lab Orders & Diagnostics Management in Elixir EHR',
  excerpt: 'Discover how Elixir EHR revolutionizes lab order management directly from the patient’s chart.',
  publishDate: '2026-11-05',
  label: 'Lab Orders',
  category: 'EHR Optimization',
  duration: '2:47',
  youtubeId,
  cardImage: {
    src: cardImage,
    alt: 'Elixir Lab Order Management demo: create and transmit lab orders electronically',
  },
  content: [
    {
      type: 'video',
      src: `https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0`,
      title: 'Streamline Lab Orders & Diagnostics Management in Elixir EHR',
    },
    {
      type: 'lead',
      text: 'Are manual test requisitions, disconnected lab workflows, and administrative tracking errors slowing down your clinical operations?',
    },
    {
      type: 'paragraph',
      text: 'Stop letting manual paperwork create unnecessary bottlenecks and diagnostic delays.',
    },
    {
      type: 'paragraph',
      text: 'Discover how Elixir EHR revolutionizes lab order management directly from the patient’s chart. With Elixir, care teams can seamlessly select tests, link patient diagnoses to individual test panels in one click, and transmit orders electronically to the lab with total accuracy. From multi-panel orders and real-time status tracking (saved, transmitted, error) to automated provider prep, Elixir eliminates administrative friction and accelerates patient care. Equip your healthcare facility with enterprise-grade clinical automation designed for efficiency and scale.',
    },
    {
      type: 'cta',
      title: 'Book a demo to understand more on such AI capabilities of Elixir.',
      action: { label: 'Request a Demo', to: '/request-demo/' },
    },
  ],
};
