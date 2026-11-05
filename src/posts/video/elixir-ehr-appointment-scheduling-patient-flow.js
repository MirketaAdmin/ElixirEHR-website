// Streamline Appointment Scheduling & Patient Flow with Elixir EHR (YouTube GLiOAOvaLMw, Mirketa Inc,
// published 4 Nov 2026, 3:00). Title and body copy are taken from the video's YouTube title and
// description (emoji, hashtags, contact lines, social links and the channel sign-off left out). The
// card image is the video's YouTube thumbnail.
import cardImage from '../../assets/posts/video/elixir-ehr-appointment-scheduling-patient-flow/card.jpg';

const youtubeId = 'GLiOAOvaLMw';

export default {
  title: 'Streamline Appointment Scheduling & Patient Flow with Elixir EHR',
  excerpt: 'Discover how Elixir EHR revolutionizes appointment management.',
  publishDate: '2026-11-04',
  label: 'Scheduling',
  category: 'Patient Engagement',
  duration: '3:00',
  youtubeId,
  cardImage: {
    src: cardImage,
    alt: 'Elixir Appointment Management demo: schedule, manage, and track patient appointments',
  },
  content: [
    {
      type: 'video',
      src: `https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0`,
      title: 'Streamline Appointment Scheduling & Patient Flow with Elixir EHR',
    },
    {
      type: 'lead',
      text: 'Are fragmented scheduling tools, double-bookings, and front-desk communication bottlenecks slowing down your practice operations?',
    },
    {
      type: 'paragraph',
      text: 'Stop letting outdated scheduling workflows hurt your patient experience.',
    },
    {
      type: 'paragraph',
      text: 'Discover how Elixir EHR revolutionizes appointment management. With Elixir, care teams can easily search practitioner availability, filter by specialty or location, and schedule both in-person and virtual visits in seconds. From automated SMS/email reminders to seamless check-ins and real-time status tracking right from the patient chart, Elixir eliminates administrative friction and optimizes facility utilization. Equip your healthcare organization with enterprise-grade clinical automation designed for efficiency and scale.',
    },
    {
      type: 'cta',
      title: 'Book a demo to understand more on such AI capabilities of Elixir.',
      action: { label: 'Request a Demo', to: '/request-demo/' },
    },
  ],
};
