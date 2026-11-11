// Elixir EHR & Kratu AI patient portal video (YouTube Q4zd9lfcQ_4, Mirketa Inc, published 30 Oct 2026,
// 1:21). Title and body copy are taken from the video's YouTube title and description (emoji,
// hashtags, social links and the channel sign-off left out). The card image is the video's YouTube
// thumbnail.
import cardImage from '../../assets/posts/video/elixir-ehr-kratu-ai-patient-portal/card.webp';

const youtubeId = 'Q4zd9lfcQ_4';

export default {
  title: 'Transform Your Healthcare Portal with Elixir EHR & Kratu AI Intelligence',
  excerpt:
    'Discover how Elixir EHR, powered by cutting-edge Kratu AI Intelligence, turns passive patient portals into active, automated care partners.',
  publishDate: '2026-10-30',
  label: 'Kratu AI',
  category: 'Patient Engagement',
  duration: '1:21',
  youtubeId,
  cardImage: {
    src: cardImage,
    alt: 'Elixir patient portal on a desktop beside a phone showing the Kratu AI visit prep assistant, with the Elixir and Kratu AI logos',
  },
  content: [
    {
      type: 'video',
      src: `https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0`,
      title: 'Transform Your Healthcare Portal with Elixir EHR & Kratu AI Intelligence',
    },
    {
      type: 'lead',
      text: 'Are endless patient messages, abandoned forms, and overwhelmed clinical teams slowing down your practice?',
    },
    {
      type: 'paragraph',
      text: 'Discover how Elixir EHR, powered by cutting-edge Kratu AI Intelligence, turns passive patient portals into active, automated care partners.',
    },
    {
      type: 'paragraph',
      text: "Watch how Elixir's AI co-pilot and automated Visit Prep features streamline clinical workflows, driving 30% less administrative time, 25% faster intake, and 70% higher patient engagement. It’s time to make every page of your portal work harder for your patients and your team!",
    },
    {
      type: 'cta',
      title: 'Ready to transform your healthcare practice? Schedule your Enterprise Strategy Session today.',
      action: { label: 'Request a Demo', to: '/request-demo/' },
    },
  ],
};
