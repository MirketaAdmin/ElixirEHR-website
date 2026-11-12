// How to Manage Secure Patient Messaging & HIPAA-Compliant Communication in Elixir EHR (YouTube
// ZHCtCSkB8lk, Mirketa Inc, published 12 Nov 2026, 2:46). Title and body copy are taken from the
// video's YouTube title and description (emoji, hashtags, contact lines, social links and the channel
// sign-off left out). The card image is the video's YouTube thumbnail.
import cardImage from '../../assets/posts/video/elixir-ehr-secure-patient-messaging-hipaa-communication/card.jpg';

const youtubeId = 'ZHCtCSkB8lk';

export default {
  title: 'How to Manage Secure Patient Messaging & HIPAA-Compliant Communication in Elixir EHR',
  excerpt: 'Discover how Elixir EHR revolutionizes secure patient communication directly from the patient’s chart.',
  publishDate: '2026-11-12',
  label: 'Message Center',
  category: 'Data Privacy & Security',
  duration: '2:46',
  youtubeId,
  cardImage: {
    src: cardImage,
    alt: 'Elixir Message Center demo: manage inbox, outbox and secure patient messages',
  },
  content: [
    {
      type: 'video',
      src: `https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0`,
      title: 'How to Manage Secure Patient Messaging & HIPAA-Compliant Communication in Elixir EHR',
    },
    {
      type: 'lead',
      text: "Are unsecure messaging channels, fragmented patient communication, and compliance risks holding back your practice's operational efficiency?",
    },
    {
      type: 'paragraph',
      text: 'Stop letting scattered correspondence compromise patient engagement and data security.',
    },
    {
      type: 'paragraph',
      text: 'Discover how Elixir EHR revolutionizes secure patient communication directly from the patient’s chart. With Elixir’s integrated Message Center, care teams can easily manage inboxes and outboxes, send HIPAA-compliant messages with automated PHI masking, utilize pre-defined message templates, and thread replies seamlessly. From quick bookmarking and archiving to instant patient portal synchronization, Elixir eliminates administrative friction and protects sensitive patient data. Equip your healthcare facility with enterprise-grade clinical automation designed for efficiency and scale.',
    },
    {
      type: 'cta',
      title: 'Book a demo to understand more on such AI capabilities of Elixir.',
      action: { label: 'Request a Demo', to: '/request-demo/' },
    },
  ],
};
