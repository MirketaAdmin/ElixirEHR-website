// Success story recovered from the previous website (Wayback Machine). The old site listed it at
// https://elixirehr.com/stories/marketing-admission-and-alumni-process-automation-for-an-eating-disorder-treatment-center/
// (title and card image from the /client-success-stories/ listing); its body was published at
// https://www.elixirehr.com/elixir-contact-center-implementation-for-eating-disorder-clinic/ (first published 2021-10-22).
// Copy is the version that page showed until the migration (archived July 2026), kept verbatim;
// the earlier 2022 version also named the client, a competitor line and its integrations, which the old site later removed, so they are not republished here.
// Image: the original listing card image (wp-content/uploads/2021/10/Elixir-Contact-Center-Implementation-1.png).
import featuredImage from '../../assets/posts/case-study/marketing-admission-and-alumni-process-automation-for-an-eating-disorder-treatment-center.webp';

const strong = (text) => ({ text, strong: true });

export default {
  title: 'Marketing, Admission and Alumni Process Automation for an Eating Disorder Treatment Center',
  excerpt:
    'Elixir was successful in providing a superior CRM experience by increasing productivity, reducing system interactions and tremendously boosting the lead conversion rate.',
  publishDate: '2021-10-22',
  cardImage: {
    src: featuredImage,
    alt: 'Marketing, Admission and Alumni Process Automation for an Eating Disorder Treatment Center',
  },
  heroImage: {
    src: featuredImage,
    alt: 'Marketing, Admission and Alumni Process Automation for an Eating Disorder Treatment Center',
    width: 360,
    height: 240,
  },
  content: [
    { type: 'heading', level: 2, text: 'Company Profile:' },
    { type: 'paragraph', text: [strong('INDUSTRY:'), ' Behavioral Healthcare Provider'] },
    { type: 'paragraph', text: [strong('SOLUTION(S):'), ' Contact Center'] },
    { type: 'paragraph', text: [strong('LOCATION:'), ' FL, CA, USA'] },
    { type: 'paragraph', text: [strong('EMPLOYEES:'), ' 50+'] },

    { type: 'heading', level: 3, text: 'Challenges:' },
    {
      type: 'list',
      items: [
        'The client wanted to streamline their Patient Pre-Intake process by automating the Lead Management, Pre-assessment, Insurance Eligibility check, Calculating the Cost of Care, Travel Arrangements, Bed Management and Alumni workflow.',
        'The client wanted to integrate all the existing lead sources with Salesforce with various integrations such as Call Rail, Web forms, Facebook, Instagram.',
        'The client wanted to effectively manage Pre-Assessment and VOB processes before shifting the patient to the HER.',
        'There was a need for automating the insurance verification process by integration with a clearing house.',
        'Lastly, there was an incumbent need to automate all tasks and processes to ensure end to end pre-intake flow.',
      ],
    },

    { type: 'heading', level: 3, text: 'Solution Highlights:' },
    {
      type: 'list',
      items: [
        'Elixir was implemented to help maintain patient information without the need for maintaining multiple records of a single patient.',
        'Multiple integrations and automations were setup to facilitate lead management, insurance verification and pre-assessment processes.',
      ],
    },

    { type: 'heading', level: 3, text: 'Results:' },
    {
      type: 'list',
      items: [
        'Elixir was successful in providing a superior CRM experience by increasing productivity, reducing system interactions and tremendously boosting the lead conversion rate.',
      ],
    },

    // The same story's video case study on the Mirketa YouTube channel (dtsbGxDkAfc, Aug 2026).
    {
      type: 'video',
      src: 'https://www.youtube-nocookie.com/embed/dtsbGxDkAfc?rel=0',
      title: 'Scaling Behavioral Health Admissions - Lead Conversion & Less Documentation Within Health Case Study',
    },
  ],
};
