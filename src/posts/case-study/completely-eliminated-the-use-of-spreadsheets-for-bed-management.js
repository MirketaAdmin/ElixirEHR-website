// Success story recovered from the previous website (Wayback Machine). The old site listed it at
// https://elixirehr.com/stories/completely-eliminated-the-use-of-spreadsheets-for-bed-management/
// (title and card image from the /client-success-stories/ listing); its body was published at
// https://www.elixirehr.com/elixir-contact-center-implementation-and-ehr-integration/ (first published 2021-10-22).
// Copy is the version that page showed until the migration (archived July 2026), kept verbatim;
// the old site published this story under this slug even though the slug reads like the bed-management story (that one is /stories/it-provider/). The earlier 2022 version also listed a competitor line and its integrations, which the old site later removed, so they are not republished here.
// Image: the original listing card image (wp-content/uploads/2021/10/Elixir-Contact-Center-Implementation-and-EHR-Integration.png).
import featuredImage from '../../assets/posts/case-study/completely-eliminated-the-use-of-spreadsheets-for-bed-management.webp';

const strong = (text) => ({ text, strong: true });

export default {
  title: 'Marketing, Admission, Alumni Process Automation and EHR Integration for a Treatment Center',
  excerpt:
    'Elixir was successful in providing a superior CRM experience and the CRM-EHR Integration boosted productivity and reduced the possibility of data errors.',
  publishDate: '2021-10-22',
  cardImage: {
    src: featuredImage,
    alt: 'Marketing, Admission, Alumni Process Automation and EHR Integration for a Treatment Center',
  },
  heroImage: {
    src: featuredImage,
    alt: 'Marketing, Admission, Alumni Process Automation and EHR Integration for a Treatment Center',
    width: 360,
    height: 240,
  },
  content: [
    { type: 'heading', level: 2, text: 'Company Profile:' },
    { type: 'paragraph', text: [strong('INDUSTRY:'), ' Behavioral Healthcare Provider'] },
    { type: 'paragraph', text: [strong('SOLUTION(S):'), ' Contact Center'] },
    { type: 'paragraph', text: [strong('LOCATION:'), ' IN, USA'] },
    { type: 'paragraph', text: [strong('EMPLOYEES:'), ' 50+'] },

    { type: 'heading', level: 3, text: 'Challenges:' },
    {
      type: 'list',
      items: [
        'The client wanted to streamline their Patient Pre-Intake process by automating the Lead Management, Pre-assessment, Insurance Eligibility check, Calculating the Cost of Care, Travel Arrangements, Bed Management and Alumni workflow.',
        'There was a need to integrate all platforms for the purpose of managing leads in the system',
        'The client wanted to integrate the existing EHR system with Salesforce and have both the CRM and the EHR systems in sync.',
        'The client wanted to effectively manage Pre-Assessment and VOB processes before shifting the patient to the EHR.',
        'There was a need for automating the insurance verification process by integration with a clearing house.',
        'Lastly, there was an incumbent need to automate all tasks and processes to ensure end to end pre-intake flow.',
      ],
    },

    { type: 'heading', level: 3, text: 'Solution Highlights:' },
    {
      type: 'list',
      items: [
        'Elixir was implemented to help maintain patient information and multiple automations were setup to optimize the end-to-end patient management process.',
        'Bi-directional sync was configured between Elixir and the external EHR system used by the client to automate patient data sync.',
      ],
    },

    { type: 'heading', level: 3, text: 'Results:' },
    {
      type: 'list',
      items: [
        'Elixir was successful in providing a superior CRM experience and the CRM-EHR Integration boosted productivity and reduced the possibility of data errors.',
      ],
    },
  ],
};
