// How to Manage Patient Care Episodes Effortlessly in Elixir EHR (YouTube 1PbHRjCZnTw, Mirketa Inc,
// published 4 Nov 2026, 1:42). Title and body copy are taken from the video's YouTube title and
// description (emoji, hashtags, contact lines, social links and the channel sign-off left out). The
// card image is the video's YouTube thumbnail.
import cardImage from '../../assets/posts/video/elixir-ehr-care-episode-management/card.jpg';

const youtubeId = '1PbHRjCZnTw';

export default {
  title: 'How to Manage Patient Care Episodes Effortlessly in Elixir EHR',
  excerpt: 'Discover how Elixir EHR simplifies Care Episode Creation & Management.',
  publishDate: '2026-11-04',
  label: 'Care Episodes',
  category: 'EHR Optimization',
  duration: '1:42',
  youtubeId,
  cardImage: {
    src: cardImage,
    alt: 'Elixir Care Episodes demo: create and manage care episodes from the patient chart',
  },
  content: [
    {
      type: 'video',
      src: `https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0`,
      title: 'How to Manage Patient Care Episodes Effortlessly in Elixir EHR',
    },
    {
      type: 'lead',
      text: 'Are fragmented treatment histories, manual tracking errors, and complex episode management slowing down your care coordination?',
    },
    {
      type: 'paragraph',
      text: 'Stop letting administrative friction compromise patient care continuity.',
    },
    {
      type: 'paragraph',
      text: 'Discover how Elixir EHR simplifies Care Episode Creation & Management. With Elixir, care teams can organize a patient’s journey into defined, trackable periods right from the patient’s chart. Prepopulated fields, automatic date calculations, and centralized provider tracking (rendering, billing, and referring) mean care episodes are created in seconds—ensuring complete visibility from start to finish.',
    },
    {
      type: 'cta',
      title: 'Book a demo to understand more on such AI capabilities of Elixir.',
      action: { label: 'Request a Demo', to: '/request-demo/' },
    },
  ],
};
