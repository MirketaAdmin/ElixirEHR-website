// How to Track Patient Lab Result Trends & Biomarkers in Elixir EHR (YouTube sr-HeOxSoCM, Mirketa Inc,
// published 5 Nov 2026, 2:28). Title and body copy are taken from the video's YouTube title and
// description (emoji, hashtags, contact lines, social links and the channel sign-off left out). The
// card image is the video's YouTube thumbnail.
import cardImage from '../../assets/posts/video/elixir-ehr-lab-result-trends-biomarkers/card.jpg';

const youtubeId = 'sr-HeOxSoCM';

export default {
  title: 'How to Track Patient Lab Result Trends & Biomarkers in Elixir EHR',
  excerpt: 'Discover how Elixir EHR revolutionizes lab result tracking directly from the patient’s chart.',
  publishDate: '2026-11-05',
  label: 'Lab Results',
  category: 'EHR Optimization',
  duration: '2:28',
  youtubeId,
  cardImage: {
    src: cardImage,
    alt: 'Elixir Lab Result Trends demo: track how a patient’s lab results change over time',
  },
  content: [
    {
      type: 'video',
      src: `https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0`,
      title: 'How to Track Patient Lab Result Trends & Biomarkers in Elixir EHR',
    },
    {
      type: 'lead',
      text: 'Are fragmented lab histories and buried diagnostic data making it difficult for your care teams to spot critical patient trends over time?',
    },
    {
      type: 'paragraph',
      text: 'Stop letting diagnostic blind spots compromise clinical decision-making.',
    },
    {
      type: 'paragraph',
      text: "Discover how Elixir EHR revolutionizes lab result tracking directly from the patient’s chart. With Elixir's advanced Lab Result Trends module, care teams can instantly view historical lab results by biomarker or organized test panels, instantly spot abnormal values highlighted in red, and track trajectory shifts using intuitive trend arrows. From custom date filtering to detailed hovering for reference ranges and ordering providers, Elixir eliminates clinical guesswork and accelerates patient insights. Equip your healthcare organization with enterprise-grade clinical automation designed for efficiency and scale.",
    },
    {
      type: 'cta',
      title: 'Book a demo to understand more on such AI capabilities of Elixir.',
      action: { label: 'Request a Demo', to: '/request-demo/' },
    },
  ],
};
