// Elixir EHR patient portal self check-in product demo (YouTube FvK7f8BzxIo, Mirketa Inc, published
// 3 Nov 2026, 0:41). Title and body copy are taken from the video's YouTube title and description
// (emoji, hashtags, contact lines, social links and the channel sign-off left out; "Self Check-In.With"
// is run together in the source and is split into two paragraphs here). The card image is the video's
// YouTube thumbnail.
import cardImage from '../../assets/posts/video/elixir-ehr-patient-self-check-in/card.jpg';

const youtubeId = 'FvK7f8BzxIo';

export default {
  title: 'Simplify Patient Check-In & Enhance the Patient Experience with Elixir EHR',
  excerpt: 'Discover how Elixir EHR modernizes the intake process with seamless Patient Portal Self Check-In.',
  publishDate: '2026-11-03',
  label: 'Patient Portal',
  category: 'Patient Engagement',
  duration: '0:41',
  youtubeId,
  cardImage: {
    src: cardImage,
    alt: 'Elixir Patient Portal Self Check-In product demo: a laptop showing a completed self check-in for an appointment',
  },
  content: [
    {
      type: 'video',
      src: `https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0`,
      title: 'Simplify Patient Check-In & Enhance the Patient Experience with Elixir EHR',
    },
    {
      type: 'lead',
      text: 'Are long waiting room queues, endless paperwork, and front-desk bottlenecks slowing down your practice operations?',
    },
    {
      type: 'paragraph',
      text: 'Discover how Elixir EHR modernizes the intake process with seamless Patient Portal Self Check-In.',
    },
    {
      type: 'paragraph',
      text: 'With Elixir, patients can easily review their personal information, verify insurance details, complete required forms or waivers, and check guidelines right from their portal before stepping foot in your clinic.',
    },
    {
      type: 'paragraph',
      text: 'No phone calls, no front-desk bottlenecks, and instant status updates straight into the system.',
    },
    {
      type: 'cta',
      title: 'Book a demo to understand more on such AI capabilities of Elixir.',
      action: { label: 'Request a Demo', to: '/request-demo/' },
    },
  ],
};
