// How to Streamline Patient Search & Directory Management in Elixir EHR (YouTube y_eouJCGElA, Mirketa
// Inc, published 6 Nov 2026, 0:11). Title and body copy are taken from the video's YouTube title and
// description (emoji, hashtags, contact lines, social links and the channel sign-off left out). The
// card image is the video's YouTube thumbnail.
import cardImage from '../../assets/posts/video/elixir-ehr-patient-search-directory/card.jpg';

const youtubeId = 'y_eouJCGElA';

export default {
  title: 'How to Streamline Patient Search & Directory Management in Elixir EHR',
  excerpt: 'Discover how Elixir EHR revolutionizes patient directory management.',
  publishDate: '2026-11-06',
  label: 'Patient Directory',
  category: 'EHR Optimization',
  duration: '0:11',
  youtubeId,
  cardImage: {
    src: cardImage,
    alt: 'Elixir Patient Directory demo: search, filter and sort the patient list',
  },
  content: [
    {
      type: 'video',
      src: `https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0`,
      title: 'How to Streamline Patient Search & Directory Management in Elixir EHR',
    },
    {
      type: 'lead',
      text: "Are fragmented patient lists, slow search tools, and messy record navigation wasting your care teams' valuable time?",
    },
    {
      type: 'paragraph',
      text: 'Stop letting administrative friction slow down patient care delivery.',
    },
    {
      type: 'paragraph',
      text: 'Discover how Elixir EHR revolutionizes patient directory management. With Elixir, care teams can instantly find the right patient using smart search, configurable multi-parameter filters (like eligibility status, birth sex, and date ranges), and custom sorting options. Whether narrowing down active admissions or opening comprehensive patient charts in a single click, Elixir eliminates administrative bottlenecks. Equip your healthcare facility with enterprise-grade clinical automation designed for efficiency and scale.',
    },
    {
      type: 'cta',
      title: 'Book a demo to understand more on such AI capabilities of Elixir.',
      action: { label: 'Request a Demo', to: '/request-demo/' },
    },
  ],
};
