// DEMO CONTENT — loads only in development (or with VITE_SHOW_DEMO_POSTS=true) to exercise the
// post template. Not production content: replace with real posts in src/posts/case-study/<slug>.js.
export default {
  title: 'Demo Case Study',
  excerpt: 'Demo content used to test the shared post template. Replace with a real case study.',
  publishDate: '2026-02-10',
  details: ['Client: Demo Client', 'Industry: Demo Industry'],
  tags: ['Demo'],
  content: [
    { type: 'heading', level: 2, text: 'Challenge' },
    { type: 'paragraph', text: 'Demo challenge description.' },
    { type: 'heading', level: 2, text: 'Solution' },
    { type: 'paragraph', text: 'Demo solution description.' },
    { type: 'heading', level: 2, text: 'Results' },
    {
      type: 'table',
      caption: 'Demo results table',
      head: ['Measure', 'Before', 'After'],
      rows: [['Demo measure', '—', '—']],
    },
    {
      type: 'cta',
      title: 'Demo call to action',
      text: 'Demo CTA copy.',
      action: { label: 'Contact Us', to: '/contact-us' },
    },
  ],
};
