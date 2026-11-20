// Success story recovered from the previous website (Wayback Machine). The old site listed it at
// https://elixirehr.com/stories/elixir-contact-center-implementation-with-multi-party-integrations-for-an-addiction-recovery-center/
// (title and card image from the /client-success-stories/ listing, July 2026); its body was
// published at https://www.elixirehr.com/elixir-contact-center-implementation-with-multiparty-integrations/
// (first published 2021-12-07). Copy is the version that page showed from April 2025 until the
// migration; the earlier 2022 version also named the client and listed its integrations, which the
// old site later removed, so they are not republished here. Image: the original listing card image.
import featuredImage from '../../assets/posts/case-study/elixir-contact-center-implementation-with-multi-party-integrations-for-an-addiction-recovery-center.webp';

const strong = (text) => ({ text, strong: true });

export default {
  title: 'Elixir Contact Center Implementation with Multi-Party Integrations for an Addiction Recovery Center',
  excerpt:
    'Elixir was successful in providing a superior CRM experience and the multiple integrations significantly boosted productivity and reduced the possibility of data errors.',
  publishDate: '2021-12-07',
  cardImage: {
    src: featuredImage,
    alt: 'Elixir Contact Center Implementation with Multi-Party Integrations for an Addiction Recovery Center',
  },
  heroImage: {
    src: featuredImage,
    alt: 'Elixir Contact Center Implementation with Multi-Party Integrations for an Addiction Recovery Center',
    width: 360,
    height: 240,
  },
  content: [
    { type: 'heading', level: 2, text: 'Company Profile:' },
    { type: 'paragraph', text: [strong('INDUSTRY:'), ' Behavioral Healthcare Provider'] },
    { type: 'paragraph', text: [strong('SOLUTION(S):'), ' Contact Center'] },
    { type: 'paragraph', text: [strong('LOCATION:'), ' MA, USA'] },
    { type: 'paragraph', text: [strong('EMPLOYEES:'), ' 50+'] },

    { type: 'heading', level: 3, text: 'Business Needs:' },
    {
      type: 'list',
      items: [
        'The client wanted to streamline their Patient Pre-Intake process by automating the Lead Management, Pre-assessment, VOB Process Automation, Cost of Care estimation, Travel Management, Bed Management and Alumni workflow.',
        'The client wanted to integrate the existing EHR system with Salesforce and have both the CRM and the EHR systems in sync.',
        'There was a need for automated Eligibility Verification as a part of VOB Process Automation.',
        'Lastly, there was an incumbent need to automate all tasks and processes to ensure end to end pre-intake flow.',
      ],
    },

    { type: 'heading', level: 3, text: 'Solution Highlights:' },
    {
      type: 'list',
      items: [
        'Elixir was implemented to help maintain patient information and multiple automations were setup to optimize the end-to-end patient management process.',
        'Multiple integrations were implemented to automate patient data sync with various platforms.',
      ],
    },

    { type: 'heading', level: 3, text: 'Results:' },
    {
      type: 'list',
      items: [
        'Elixir was successful in providing a superior CRM experience and the multiple integrations significantly boosted productivity and reduced the possibility of data errors.',
      ],
    },
  ],
};
