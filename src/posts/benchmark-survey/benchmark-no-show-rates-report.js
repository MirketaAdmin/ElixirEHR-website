// No-show benchmark report (by elixirAdmin, April 15, 2025, "Benchmark Surveys"). Body copy is
// exactly as supplied; the title, subtitle and section headings (lost from the supplied copy) are
// the ones on the live page, elixirehr.com/benchmark-no-show-rates-report/, whose slug this keeps.
// Its inline links point at this site's No-Show Prediction and EHR pages. TEMPORARY IMAGES:
// card-temp.jpg and hero-temp.jpg are cropped from a Figma placeholder photo until the final
// featured and banner images are supplied — replace the two files (or these imports) only.
import cardImage from '../../assets/posts/benchmark-survey/benchmark-no-show-rates-report/card-temp.jpg';
import heroImage from '../../assets/posts/benchmark-survey/benchmark-no-show-rates-report/hero-temp.jpg';

export default {
  title: 'Benchmark Survey Report: Compare Your No-Show Rates to Industry Standards',
  excerpt:
    'Missed appointments cost the healthcare industry billions every year. This benchmark report, compiled using data from leading healthcare providers, gives you:',
  publishDate: '2025-04-15',
  author: 'elixirAdmin',
  cardImage: { src: cardImage, alt: 'Clinician at a front desk computer talking with a patient' },
  heroImage: {
    src: heroImage,
    alt: 'Clinician at a front desk computer talking with a patient',
    width: 757,
    height: 324,
  },
  seo: {
    description:
      'See how your healthcare organization stacks up. Discover what the top performers are doing to reduce no-shows',
  },
  content: [
    {
      type: 'lead',
      text: 'See how your healthcare organization stacks up. Discover what the top performers are doing to reduce no-shows',
    },

    { type: 'heading', level: 2, text: 'Why This Report Matters' },
    {
      type: 'paragraph',
      text: 'Missed appointments cost the healthcare industry billions every year. This benchmark report, compiled using data from leading healthcare providers, gives you:',
    },
    {
      type: 'list',
      items: [
        'A clear view of average no-show rates across different specialties',
        'Insights by organization type and patient demographics',
        'Best practices adopted by high-performing providers',
        'Key trends in how organizations are using AI to reduce no-shows',
      ],
    },

    { type: 'heading', level: 2, text: 'What’s Inside the Report' },
    {
      type: 'list',
      items: [
        'No-Show Rate Benchmarks: Across primary care, behavioral health, specialty clinics, and hospitals',
        'Demographic Insights: Impact of age, location, and communication preferences',
        [
          'AI Adoption Trends: How top organizations are leveraging AI for predictive ',
          { text: 'no-show', to: '/patient-no-show-prediction' },
          ' management',
        ],
        'Actionable Strategies: Proven steps to reduce no-shows and boost operational efficiency',
      ],
    },

    { type: 'heading', level: 2, text: 'Who Should Download This?' },
    {
      type: 'list',
      items: [
        'Healthcare Administrators',
        'Operations & Patient Access Leaders',
        'CIOs & Health IT Teams',
        'Scheduling and Front Desk Staff',
        'Healthcare Consultants',
      ],
    },

    { type: 'heading', level: 2, text: 'Backed by Elixir – The Intelligent EHR' },
    {
      type: 'paragraph',
      text: [
        'This report is brought to you by Elixir, the AI-powered Salesforce ',
        { text: 'EHR', to: '/electronic-health-record' },
        ' platform transforming how healthcare organizations manage patients, reduce no-shows, and drive engagement.',
      ],
    },
  ],
};
