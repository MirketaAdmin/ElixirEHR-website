// Success story recovered from the previous website (Wayback Machine). The old site listed it at
// https://elixirehr.com/stories/product-management/
// (title and card image from the /client-success-stories/ listing); its body was published at
// https://www.elixirehr.com/elixir-integration/ (first published 2021-03-15).
// Copy is the version that page showed until the migration (archived July 2026), kept verbatim;
// the archived listing does not link this card to its body page directly; /elixir-integration/ is matched by content (Elixir-EHR integration story published alongside the bed-management one). The earlier 2022 version also named the client, a competitor line and its integrations, which the old site later removed, so they are not republished here.
// Image: the original listing card image (wp-content/uploads/2019/07/Patient-Management-Experience.png).
import featuredImage from '../../assets/posts/case-study/product-management.webp';

const strong = (text) => ({ text, strong: true });

export default {
  title: 'Integrated Elixir with EHR for improving the Patient Management experience',
  excerpt:
    'Complete bi-directional data flow between Elixir and EHR eliminated the need of data entry in multiple systems.',
  publishDate: '2021-03-15',
  cardImage: {
    src: featuredImage,
    alt: 'Integrated Elixir with EHR for improving the Patient Management experience',
  },
  heroImage: {
    src: featuredImage,
    alt: 'Integrated Elixir with EHR for improving the Patient Management experience',
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
        'The Admission team members were using Elixir for updating patient information, recording insurance and pre-assessment details and other patient related workflows while all the medical and clinical data of their patients was being maintained in EHR.',
        'The teams had to work separately on both Elixir and EHR to update the same information which was significantly reducing productivity.',
        'Managing patient data simultaneously in both Elixir and EHR was too tiresome, and it was frequently causing data consistency issues.',
      ],
    },

    { type: 'heading', level: 3, text: 'Solution Highlights:' },
    {
      type: 'list',
      items: [
        'The Elixir team designed a bi-directional sync between Elixir and EHR.',
        'Multiple integration were done to help in lead management.',
      ],
    },

    { type: 'heading', level: 3, text: 'Results:' },
    {
      type: 'list',
      items: [
        'Complete bi-directional data flow between Elixir and EHR eliminated the need of data entry in multiple systems.',
      ],
    },
  ],
};
