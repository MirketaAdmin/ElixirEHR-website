// Success story recovered from the previous website (Wayback Machine). The old site listed it at
// https://elixirehr.com/stories/process-automation-and-complete-system-setup-for-a-sleep-apnea-treatment-center/
// (title and card image from the /client-success-stories/ listing, July 2026); its body was
// published at https://www.elixirehr.com/complete-elixir-implementation-for-sleep-apnea-clinic/
// (first published 2021-10-22). Copy is the version that page showed from 2024 until the
// migration; the earlier 2022 version also named the client, a competitor line and its
// integrations, which the old site later removed, so they are not republished here.
// Image: the original listing card image.
import featuredImage from '../../assets/posts/case-study/process-automation-and-complete-system-setup-for-a-sleep-apnea-treatment-center.webp';

const strong = (text) => ({ text, strong: true });

export default {
  title: 'Process automation, and Complete System Setup for a Sleep Apnea Treatment Center',
  excerpt:
    'Elixir was successful in increasing productivity and significantly reduced the overall time spent on the system.',
  publishDate: '2021-10-22',
  cardImage: {
    src: featuredImage,
    alt: 'Process automation, and Complete System Setup for a Sleep Apnea Treatment Center',
  },
  heroImage: {
    src: featuredImage,
    alt: 'Process automation, and Complete System Setup for a Sleep Apnea Treatment Center',
    width: 360,
    height: 240,
  },
  content: [
    { type: 'heading', level: 2, text: 'Company Profile:' },
    { type: 'paragraph', text: [strong('INDUSTRY:'), ' Sleep Disorder Treatment Clinic'] },
    { type: 'paragraph', text: [strong('SOLUTION(S):'), ' Contact Center, EHR, Billing'] },
    { type: 'paragraph', text: [strong('LOCATION:'), ' California, USA'] },
    { type: 'paragraph', text: [strong('EMPLOYEES:'), ' 50+'] },

    { type: 'heading', level: 3, text: 'Challenges:' },
    {
      type: 'list',
      items: [
        'The client wanted implementation of the entire Elixir solution in order to streamline the CRM, EHR and Billing processes.',
        'The goal was to enhance patient experience and expedite staff productivity via system automation and process optimization to cater to the end-to-end business flow.',
        'Customize the user experience to ensure minimum screen time.',
        'Simplify the process of EHR Forms setup and usage in the system and enable reporting.',
        'Simplify the billing process to support business flow.',
        'Optimize the payment flow in Salesforce.',
        'End-to-end system integration to minimize interaction with multiple disjoined platforms.',
      ],
    },

    { type: 'heading', level: 3, text: 'Solution Highlights:' },
    {
      type: 'list',
      items: [
        'The team implemented Elixir to replace the current disjointed system interactions.',
        'The end-to-end business flow was optimized on top of Salesforce to support users and their respective requirements.',
      ],
    },

    { type: 'heading', level: 3, text: 'Results:' },
    {
      type: 'list',
      items: [
        'Elixir was successful in increasing productivity and significantly reduced the overall time spent on the system.',
      ],
    },
  ],
};
