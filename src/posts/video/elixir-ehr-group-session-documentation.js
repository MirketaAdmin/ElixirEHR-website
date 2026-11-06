// Streamline Group Session Documentation & Patient Notes in Elixir EHR (YouTube qzog1TmMw7M, Mirketa
// Inc, published 5 Nov 2026, 1:02). Title and body copy are taken from the video's YouTube title and
// description (emoji, hashtags, contact lines, social links and the channel sign-off left out). The
// card image is the video's YouTube thumbnail.
import cardImage from '../../assets/posts/video/elixir-ehr-group-session-documentation/card.jpg';

const youtubeId = 'qzog1TmMw7M';

export default {
  title: 'Streamline Group Session Documentation & Patient Notes in Elixir EHR',
  excerpt: 'Discover how Elixir EHR revolutionizes group session documentation.',
  publishDate: '2026-11-05',
  label: 'Behavioral Health',
  category: 'EHR Optimization',
  duration: '1:02',
  youtubeId,
  cardImage: {
    src: cardImage,
    alt: 'Elixir Group Session Notes demo: document group sessions and individual progress',
  },
  content: [
    {
      type: 'video',
      src: `https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0`,
      title: 'Streamline Group Session Documentation & Patient Notes in Elixir EHR',
    },
    {
      type: 'lead',
      text: 'Are endless duplicate notes, scattered documentation, and administrative bottlenecks slowing down your group therapy and behavioral health programs?',
    },
    {
      type: 'paragraph',
      text: 'Stop wasting valuable clinical hours on repetitive paperwork.',
    },
    {
      type: 'paragraph',
      text: "Discover how Elixir EHR revolutionizes group session documentation. With Elixir, care teams can document group sessions once, capturing shared session details in a single group note while seamlessly recording individual patient progress and personal goals right from their notes button. With one-click session signing and automatic distribution to every participant's chart, Elixir eliminates administrative drag and ensures complete clinical accuracy. Empower your healthcare facility with enterprise-grade clinical automation designed for efficiency and scale.",
    },
    {
      type: 'cta',
      title: 'Book a demo to understand more on such AI capabilities of Elixir.',
      action: { label: 'Request a Demo', to: '/request-demo/' },
    },
  ],
};
