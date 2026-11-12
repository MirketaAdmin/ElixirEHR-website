// How to Organize Patient Messages, Filters & Bookmarks in Elixir EHR (YouTube YGqwo9MMDSo, Mirketa
// Inc, published 12 Nov 2026, 0:57). Title and body copy are taken from the video's YouTube title and
// description (emoji, hashtags, contact lines, social links and the channel sign-off left out). The
// card image is the video's YouTube thumbnail.
import cardImage from '../../assets/posts/video/elixir-ehr-message-center-filters-bookmarks/card.jpg';

const youtubeId = 'YGqwo9MMDSo';

export default {
  title: 'How to Organize Patient Messages, Filters & Bookmarks in Elixir EHR',
  excerpt: 'Discover how Elixir EHR revolutionizes message center management directly from the clinical workflow.',
  publishDate: '2026-11-12',
  label: 'Message Center',
  category: 'Patient Engagement',
  duration: '0:57',
  youtubeId,
  cardImage: {
    src: cardImage,
    alt: 'Elixir Message Center demo: organize messages with filters, bookmarks and archiving',
  },
  content: [
    {
      type: 'video',
      src: `https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0`,
      title: 'How to Organize Patient Messages, Filters & Bookmarks in Elixir EHR',
    },
    {
      type: 'lead',
      text: "Are overflowing inboxes, lost patient messages, and messy communication folders wasting your care teams' valuable time?",
    },
    {
      type: 'paragraph',
      text: 'Stop letting disorganized communication channels compromise practice responsiveness.',
    },
    {
      type: 'paragraph',
      text: 'Discover how Elixir EHR revolutionizes message center management directly from the clinical workflow. With Elixir, care teams can effortlessly organize inboxes and outboxes using advanced filter views, instantly pull up bookmarked messages for quick reference, and archive completed conversations to keep workspaces clutter-free. From one-click flagging to comprehensive folder management, Elixir eliminates administrative friction and protects practice efficiency. Equip your healthcare facility with enterprise-grade clinical automation designed for efficiency and scale.',
    },
    {
      type: 'cta',
      title: 'Book a demo to understand more on such AI capabilities of Elixir.',
      action: { label: 'Request a Demo', to: '/request-demo/' },
    },
  ],
};
