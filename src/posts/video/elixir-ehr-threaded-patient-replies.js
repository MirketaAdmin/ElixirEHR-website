// How to Manage Threaded Patient Replies & Secure Messaging in Elixir EHR (YouTube IJm4W0e4x8Q, Mirketa
// Inc, published 12 Nov 2026, 0:52). Title and body copy are taken from the video's YouTube title and
// description (emoji, hashtags, contact lines, social links and the channel sign-off left out). The
// card image is the video's YouTube thumbnail.
import cardImage from '../../assets/posts/video/elixir-ehr-threaded-patient-replies/card.jpg';

const youtubeId = 'IJm4W0e4x8Q';

export default {
  title: 'How to Manage Threaded Patient Replies & Secure Messaging in Elixir EHR',
  excerpt: 'Discover how Elixir EHR revolutionizes secure patient messaging directly from the message center.',
  publishDate: '2026-11-12',
  label: 'Message Center',
  category: 'Patient Engagement',
  duration: '0:52',
  youtubeId,
  cardImage: {
    src: cardImage,
    alt: 'Elixir Message Center demo: reply to patient messages in one secure thread',
  },
  content: [
    {
      type: 'video',
      src: `https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0`,
      title: 'How to Manage Threaded Patient Replies & Secure Messaging in Elixir EHR',
    },
    {
      type: 'lead',
      text: "Are scattered communication threads, lost replies, and disjointed patient messaging compromising your clinic's responsiveness and care coordination?",
    },
    {
      type: 'paragraph',
      text: 'Stop letting fragmented communication channels create operational blind spots.',
    },
    {
      type: 'paragraph',
      text: 'Discover how Elixir EHR revolutionizes secure patient messaging directly from the message center. With Elixir, care teams can effortlessly open messages, select reply to automatically carry forward subjects and original thread history, and keep entire conversations unified in a single, secure thread. From instant outbox synchronization to seamless audit trails, Elixir eliminates administrative friction and protects sensitive patient data. Equip your healthcare facility with enterprise-grade clinical automation designed for efficiency and scale.',
    },
    {
      type: 'cta',
      title: 'Book a demo to understand more on such AI capabilities of Elixir.',
      action: { label: 'Request a Demo', to: '/request-demo/' },
    },
  ],
};
