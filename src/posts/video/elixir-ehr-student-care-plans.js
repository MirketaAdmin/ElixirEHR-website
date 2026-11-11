// Elixir EHR student care plans product demo (YouTube 9_jw8OWsHHo, Mirketa Inc, published 3 Nov 2026,
// 0:59). Title and body copy are taken from the video's YouTube title and description (emoji,
// hashtags, contact lines, social links and the channel sign-off left out). The card image is the
// video's YouTube thumbnail.
import cardImage from '../../assets/posts/video/elixir-ehr-student-care-plans/card.webp';

const youtubeId = '9_jw8OWsHHo';

export default {
  title: 'How to Build Personalized Student Care Plans with Elixir EHR',
  excerpt:
    'Discover how Elixir EHR empowers student support teams, counselors, and administrators to seamlessly create, manage, and track personalized student care plans—all in one place.',
  publishDate: '2026-11-03',
  label: 'Student Health',
  category: 'EHR Optimization',
  duration: '0:59',
  youtubeId,
  cardImage: {
    src: cardImage,
    alt: 'Elixir Student Care Plans product demo: a laptop showing the New Care Plan form in the Student Care Console',
  },
  content: [
    {
      type: 'video',
      src: `https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0`,
      title: 'How to Build Personalized Student Care Plans with Elixir EHR',
    },
    {
      type: 'lead',
      text: 'Are fragmented student records and manual tracking slowing down your school-based health and support programs?',
    },
    {
      type: 'paragraph',
      text: 'Discover how Elixir EHR empowers student support teams, counselors, and administrators to seamlessly create, manage, and track personalized student care plans—all in one place.',
    },
    {
      type: 'paragraph',
      text: 'With Elixir, your team can easily document presenting problems, set measurable goals, align interventions, and track progress over time to drive better student outcomes.',
    },
    {
      type: 'cta',
      title:
        "Ready to elevate your institution's support services with advanced healthcare and student management capabilities?",
      action: { label: 'Request a Demo', to: '/request-demo/' },
    },
  ],
};
