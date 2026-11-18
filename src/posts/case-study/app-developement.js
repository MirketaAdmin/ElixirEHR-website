// Success story recovered from the previous website (Wayback Machine). The old site listed it at
// https://elixirehr.com/stories/app-developement/
// (title and card image from the /client-success-stories/ listing); its body was published at
// https://www.elixirehr.com/elixir-implementation/ (first published 2019-07-02).
// Copy is the version that page showed until the migration (archived July 2026), kept verbatim;
// the old site itself 301-redirected /stories/app-developement/ to this body page (archived May 2023). The earlier version also listed a competitor line, which the old site later removed, so it is not republished here.
// Image: the original listing card image (wp-content/uploads/2019/07/Patient-Intake-Management-1.png).
import featuredImage from '../../assets/posts/case-study/app-developement.webp';

const strong = (text) => ({ text, strong: true });

export default {
  title: 'Elixir’s CRM capabilities significantly enhanced the Patient Intake Process',
  excerpt:
    'Elixir was successful in providing a superior Patient Intake experience because of out of the box Salesforce capabilities customized according to the need of the treatment center.',
  publishDate: '2019-07-02',
  cardImage: {
    src: featuredImage,
    alt: 'Elixir’s CRM capabilities significantly enhanced the Patient Intake Process',
  },
  heroImage: {
    src: featuredImage,
    alt: 'Elixir’s CRM capabilities significantly enhanced the Patient Intake Process',
    width: 360,
    height: 240,
  },
  content: [
    { type: 'heading', level: 2, text: 'Company Profile:' },
    { type: 'paragraph', text: [strong('INDUSTRY:'), ' Healthcare- Addiction Treatment'] },
    { type: 'paragraph', text: [strong('SOLUTION(S):'), ' Contact Center'] },
    { type: 'paragraph', text: [strong('LOCATION:'), ' Mississippi, USA'] },
    { type: 'paragraph', text: [strong('EMPLOYEES:'), ' 20+'] },

    { type: 'heading', level: 3, text: 'Challenges:' },
    {
      type: 'list',
      items: [
        'The Admissions team members were finding it very difficult to manage their Patient Intake process without a CRM solution.',
        'It was a challenge to maintain data of all incoming leads from multiple sources. Tracking and performing further processes that result to conversion of lead were difficult as well.',
        'There was hardly any systematic approach for maintaining leads and patients and having a unified view of data across all the staff members.',
        'Accurate verification of benefits was often a challenge and it caused problems during claim verification.',
        'A lot of rework was involved for pre-admission assessment as it had to be manually documented multiple times during the initial intake processes as well as later on during the clinical procedures.',
      ],
    },

    { type: 'heading', level: 3, text: 'Solution Highlights:' },
    {
      type: 'list',
      items: [
        'The team delivered Elixir as the custom CRMsolution to optimize the Patient Intake processes.',
        'Multiple integration were done to help in lead management.',
        'The team built processes to help in automating the entire insurance verification process right from the stage of collection of insurance details up to the final step of approval of verification of benefits.',
      ],
    },

    { type: 'heading', level: 3, text: 'Results:' },
    {
      type: 'list',
      items: [
        'Elixir was successful in providing a superior Patient Intake experience because of out of the box Salesforce capabilities customized according to the need of the treatment center.',
      ],
    },
  ],
};
