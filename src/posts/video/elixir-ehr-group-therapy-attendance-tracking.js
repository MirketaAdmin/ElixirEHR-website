// Streamline Group Therapy & Attendance Tracking with Elixir EHR (YouTube d218tINkgIU, Mirketa Inc,
// published 4 Nov 2026, 0:58). Title and body copy are taken from the video's YouTube title and
// description (emoji, hashtags, contact lines, social links and the channel sign-off left out). The
// card image is the video's YouTube thumbnail.
import cardImage from '../../assets/posts/video/elixir-ehr-group-therapy-attendance-tracking/card.jpg';

const youtubeId = 'd218tINkgIU';

export default {
  title: 'Streamline Group Therapy & Attendance Tracking with Elixir EHR',
  excerpt: 'Discover how Elixir EHR automates group session management.',
  publishDate: '2026-11-04',
  label: 'Behavioral Health',
  category: 'EHR Optimization',
  duration: '0:58',
  youtubeId,
  cardImage: {
    src: cardImage,
    alt: 'Elixir Group Session Attendance demo: track attendance for group events',
  },
  content: [
    {
      type: 'video',
      src: `https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0`,
      title: 'Streamline Group Therapy & Attendance Tracking with Elixir EHR',
    },
    {
      type: 'lead',
      text: 'Are manual headcounts, scattered spreadsheets, and administrative guesswork slowing down your group therapy and behavioral health programs?',
    },
    {
      type: 'paragraph',
      text: 'Stop wasting valuable clinical hours on cumbersome paperwork.',
    },
    {
      type: 'paragraph',
      text: 'Discover how Elixir EHR automates group session management. With Elixir, care teams can track attendance directly from group events, instantly monitor attended versus missed counts, and keep patient records completely up-to-date with a single click. Empower your facility with enterprise-grade clinical automation designed to eliminate administrative drag and maximize patient care time.',
    },
    {
      type: 'cta',
      title: 'Book a demo to understand more on such AI capabilities of Elixir.',
      action: { label: 'Request a Demo', to: '/request-demo/' },
    },
  ],
};
