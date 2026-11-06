// Streamline Appointment Scheduling & Patient Workflows in Elixir EHR (YouTube xvjCbo0mHaU, Mirketa
// Inc, published 5 Nov 2026, 0:51). Title and body copy are taken from the video's YouTube title and
// description (emoji, hashtags, contact lines, social links and the channel sign-off left out). The
// card image is the video's YouTube thumbnail.
import cardImage from '../../assets/posts/video/elixir-ehr-appointment-scheduling-patient-workflows/card.jpg';

const youtubeId = 'xvjCbo0mHaU';

export default {
  title: 'Streamline Appointment Scheduling & Patient Workflows in Elixir EHR',
  excerpt: 'Discover how Elixir EHR revolutionizes appointment management right from the patient chart.',
  publishDate: '2026-11-05',
  label: 'Scheduling',
  category: 'Patient Engagement',
  duration: '0:51',
  youtubeId,
  cardImage: {
    src: cardImage,
    alt: 'Elixir Appointment Management demo: schedule, manage, and track patient appointments',
  },
  content: [
    {
      type: 'video',
      src: `https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0`,
      title: 'Streamline Appointment Scheduling & Patient Workflows in Elixir EHR',
    },
    {
      type: 'lead',
      text: 'Are fragmented scheduling tools, double-bookings, and front-desk communication bottlenecks slowing down your practice operations?',
    },
    {
      type: 'paragraph',
      text: 'Stop letting outdated scheduling workflows hurt your patient experience and operational efficiency.',
    },
    {
      type: 'paragraph',
      text: 'Discover how Elixir EHR revolutionizes appointment management right from the patient chart. With Elixir, care teams can instantly search practitioner availability, filter by specialty or location, and schedule both in-person and virtual visits in seconds. From automated confirmations to real-time status tracking, Elixir eliminates administrative friction and optimizes facility utilization. Equip your healthcare organization with enterprise-grade clinical automation designed for efficiency and scale.',
    },
    {
      type: 'cta',
      title: 'Book a demo to understand more on such AI capabilities of Elixir.',
      action: { label: 'Request a Demo', to: '/request-demo/' },
    },
  ],
};
