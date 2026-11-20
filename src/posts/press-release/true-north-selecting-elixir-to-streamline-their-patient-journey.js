// Press release from the previous website (https://www.elixirehr.com/true-north-selecting-elixir-to-streamline-their-patient-journey/).
// Copy as supplied, verbatim; bold and links as on the old page. Image: the release's image on the
// old /press-release/ listing. The old page had no company boilerplate or media contact of its own
// beyond what is in the copy, so the press-release defaults are switched off.
import featuredImage from '../../assets/posts/press-release/true-north-selecting-elixir-to-streamline-their-patient-journey/featured.png';

const strong = (text) => ({ text, strong: true });
const br = { br: true };

export default {
  title: 'True North Selecting Elixir to streamline their Patient Journey',
  excerpt:
    'TrueNorth, one of the leaders in alternative medicine, treats patients with chronic illness through water fasting. They have recently partnered with Elixir to manage patient intake automation, room and bed reservations, management of patient care episode, patient meals management, billing and payments and self-service portal. Innovation, ease of use, and value were key factors in making the decision.',
  publishDate: '2023-06-14',
  category: null,
  about: null,
  mediaContact: null,
  cardImage: { src: featuredImage, alt: 'True North Selecting Elixir to streamline their Patient Journey' },
  heroImage: {
    src: featuredImage,
    alt: 'True North Selecting Elixir to streamline their Patient Journey',
    width: 700,
    height: 467,
  },
  content: [
    {
      type: 'paragraph',
      text: [
        strong('CONTACT'),
        ':',
        br,
        'Rajeev Kumar',
        br,
        '11501 Dublin Blvd STE 200, Dublin, CA 94568, USA',
        br,
        'Email: ',
        { text: 'info@elixirehr.com', strong: true, href: 'mailto:info@elixirehr.com' },
        br,
        'Website: ',
        { text: 'www.elixirehr.com', strong: true, to: '/' },
      ],
    },
    {
      type: 'paragraph',
      text: [
        strong('San Ramon, US, June, 14, 2023'),
        ' – Today TrueNorth has selected ElixirEHR to manage their patient intake automation, patient meals management, billing and payments  and plans to go LIVE with Elixir in Dec 2023.',
      ],
    },
    {
      type: 'paragraph',
      text: 'TrueNorth, one of the leaders in alternative medicine, treats patients with chronic illness through water fasting. They have recently partnered with Elixir to manage patient intake automation, room and bed reservations, management of patient care episode, patient meals management, billing and payments and self-service portal. Innovation, ease of use, and value were key factors in making the decision.',
    },
    {
      type: 'paragraph',
      text: 'According to TrueNorth, Elixir will be truly instrumental in streamlining the entire patient care journey at their facility. “We really wanted a system that can enhance our productivity by improving the overall efficiency of the patient care management process while keeping them engaged”, stated the CEO.',
    },
    {
      type: 'paragraph',
      text: '“We needed a platform that would help us in managing the end-to-end patient care journey while taking care of the care provider’s needs as well. Additionally, having a system that was customizable as per our evolving needs while serving as the springboard to advance care in all our settings was very important for us. The opportunities with Elixir are limitless, and we look forward to the improved outcomes and productivity metrics that it will support.” said the CEO of TrueNorth.',
    },
    {
      type: 'paragraph',
      text: 'To maximize the system usage in the organization, Elixir will complement the implementation team with additional staff training and post-LIVE support tailored around the organization’s unique needs.',
    },
    {
      type: 'paragraph',
      text: '“We’ve built Elixir on top world’s #1 CRM solution, Salesforce, with the help of healthcare experts who on a daily basis work and understand these platforms,” said Pranshu Goyal, Director of Product, Elixir. “Elixir is highly intuitive, making it very user-friendly and easy to use. It’s truly a user-centric solution as various workflows are built-in that help streamline the entire patient journey. It helps decrease repetitive tasks, such as manually calling patients with appointment reminders or checking VOB results, etc. This brings efficiency to the system, which tremendously helps our customers.”',
    },
    {
      type: 'paragraph',
      text: '“We are thrilled that after careful evaluation, TrueNorth has selected Elixir as the platform best suited to help support their mission of helping their patients recover from chronic ailments, grow, and build a better life by utilizing the medication assisted and evidence-based treatment” said Rajeev Kumar, Founder, and CEO, Elixir. “We are committed to continuing our development of technologies that empower our customers and help them to lead the industry with innovation and exemplary care.”',
    },
    { type: 'paragraph', text: [strong('About Elixir:')] },
    {
      type: 'paragraph',
      text: [
        'Elixir was founded in 2019 by ',
        strong('Rajeev Kumar'),
        ', laser-focused innovator who first-hand experienced the frustrations of the healthcare providers when they attempted to streamline processes with legacy EHR systems. As a result, he became determined to remove the administrative burdens that were draining time, energy, and enthusiasm from the way providers work today, creating a world where every provider and patient can thrive.',
      ],
    },
    {
      type: 'paragraph',
      text: [
        'The Elixir team is available to help with expedited account setup and enablement of these key features. Email ',
        { text: 'info@elixirehr.com', strong: true, href: 'mailto:info@elixirehr.com' },
        ' or visit the Elixir website, ',
        { text: 'www.elixirehr.com', strong: true, to: '/' },
        ' to connect with a Team Member via live chat. They are available to assist with a personalized demo.',
      ],
    },
  ],
};
