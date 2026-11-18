// Success story recovered from the previous website (Wayback Machine). The old site listed it at
// https://elixirehr.com/stories/it-provider/
// (title and card image from the /client-success-stories/ listing); its body was published at
// https://www.elixirehr.com/elixir-bed-management-implementation/ (first published 2021-03-15).
// Copy is the version that page showed until the migration (archived July 2026), kept verbatim;
// the earlier 2022 version also named the client and a competitor line, which the old site later removed, so they are not republished here.
// Image: the original listing card image (wp-content/uploads/2019/07/Untitled-design.png).
import featuredImage from '../../assets/posts/case-study/it-provider.webp';

const strong = (text) => ({ text, strong: true });

export default {
  title: 'Elixir completely eliminated the use of spreadsheets for Bed Management',
  excerpt:
    'Elixir eliminated the use of spreadsheets for any kind of Bed Management related activity..',
  publishDate: '2021-03-15',
  cardImage: {
    src: featuredImage,
    alt: 'Elixir completely eliminated the use of spreadsheets for Bed Management',
  },
  heroImage: {
    src: featuredImage,
    alt: 'Elixir completely eliminated the use of spreadsheets for Bed Management',
    width: 360,
    height: 240,
  },
  content: [
    { type: 'heading', level: 2, text: 'Company Profile:' },
    { type: 'paragraph', text: [strong('INDUSTRY:'), ' Healthcare- Addiction Treatment'] },
    { type: 'paragraph', text: [strong('SOLUTION(S):'), ' Contact Center'] },
    { type: 'paragraph', text: [strong('LOCATION:'), ' Edwards, Colorado, USA'] },
    { type: 'paragraph', text: [strong('EMPLOYEES:'), ' 100+'] },

    { type: 'heading', level: 3, text: 'Challenges:' },
    {
      type: 'list',
      items: [
        'Tracking room availability efficiently was a daily challenge.',
        'The Admissions team members were using multiple spreadsheets for Bed Management.',
        'The room availability status had to be manually tracked and changed in order to have an overview of the availability percentage on each day.',
        'Each time a new patient was admitted, or an existing patient was discharged – there were many manual steps that had to be completed to ensure accuracy and consistency of data.',
        'There were multiple challenges in managing and keeping a track of Out of Order/ Out Of Service rooms and beds.',
        'The Bed Management spreadsheets could not be used for any kind of reporting purposes.',
      ],
    },

    { type: 'heading', level: 3, text: 'Solution Highlights:' },
    {
      type: 'list',
      items: [
        'The Elixir team designed and delivered a custom and end to end Bed Management module for their Salesforce org.',
        'The team also designed a custom Heatmap to overview the percentage availability of their treatment facility on a daily basis.',
      ],
    },

    { type: 'heading', level: 3, text: 'Results:' },
    {
      type: 'list',
      items: [
        'Elixir eliminated the use of spreadsheets for any kind of Bed Management related activity..',
      ],
    },
  ],
};
