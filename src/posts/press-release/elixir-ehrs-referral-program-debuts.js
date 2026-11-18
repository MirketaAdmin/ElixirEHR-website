// Press release from the previous website (https://www.elixirehr.com/elixir-ehrs-referral-program-debuts/).
// Copy as supplied, verbatim; bold and links as on the old page (the referral URL now points to this
// site's /referral-program/). Image: the release's image on the old /press-release/ listing (it had
// no alt text; the title is used). No media contact or boilerplate on the old page, so the
// press-release defaults are switched off.
import featuredImage from '../../assets/posts/press-release/elixir-ehrs-referral-program-debuts/featured.jpg';

const strong = (text) => ({ text, strong: true });
const title = 'Elixir EHR’s Referral Program Debuts';

export default {
  title,
  excerpt:
    'Elixir Healthcare Practice Management Suite has launched a new Referral Program to partner with organizations for reaching the healthcare providers and help bring real change to in the healthcare industry.',
  publishDate: '2022-03-28',
  category: null,
  about: null,
  mediaContact: null,
  cardImage: { src: featuredImage, alt: title },
  heroImage: { src: featuredImage, alt: title, width: 693, height: 460 },
  content: [
    { type: 'paragraph', text: [strong('San Ramon, US, March 28, 2022')] },
    {
      type: 'paragraph',
      text: 'Elixir Healthcare Practice Management Suite has launched a new Referral Program to partner with organizations for reaching the healthcare providers and help bring real change to in the healthcare industry.',
    },
    {
      type: 'paragraph',
      text: 'Many healthcare providers, marketers and organizations have successfully been onboarded as Elixir’s referral partners. The new Referral Program provides a platform where organizations can directly refer healthcare providers to work with Elixir team so as to help healthcare providers implement Elixir in their healthcare practice to bring creativity, efficiency, and business intelligence in the healthcare industry, and earn revenue while doing it.',
    },
    { type: 'paragraph', text: 'Here’s more background on Elixir and the services we provide:' },
    {
      type: 'paragraph',
      text: 'Elixir Practice Management Suite is a comprehensive solution which streamlines all the phases of the patient care process and helps in increasing the overall productivity for healthcare providers. It consists of four modules that fit rightly into your healthcare business irrespective of your facility size and type. The Elixir Contact Center module helps manage the entire facility census and the patient intake process. At the same time, the Elixir EHR solution aims at delivering an end-to-end seamless patient care experience. The third module is Elixir Billing, and it effectively fetches data from any EHR platform to process medical claims and manages the entire revenue cycle. Elixir Patient Portal is the last module, and it provides an integrated experience for the patients. Elixir provides an end-to-end integrated solution for delivering a seamless patient care experience and an even better provider experience.',
    },
    {
      type: 'paragraph',
      text: 'Elixir is highly intuitive which makes it very user friendly and easy to use. It’s truly a patient centric solution as there are various workflows built which help in streamlining the entire patient journey. It helps in decreasing repetitive tasks, such as manually calling patients with appointment reminders or printing and mailing various test results. This frees up the care team’s time to focus more on the patient’s care which in turn has a direct impact on the patient satisfaction.',
    },
    {
      type: 'paragraph',
      text: '“We’ve built Elixir on top world’s #1 CRM solution, Salesforce, with the help of healthcare experts who on daily basis work and understand these platforms,” said Pranshu Goyal, Director of Product, Elixir. Before Elixir, Pranshu was a Business Analyst on the Elixir’s consultancy team, and his consultancy continues to work with Elixir and its clients today. “Given our deep knowledge of the Healthcare industry, we look forward to working closely with our referral partners to help reach the healthcare providers which are sometimes outside of Elixir’s core focus .”',
    },
    {
      type: 'paragraph',
      text: 'Rajeev Kumar, Founder and CEO of Elixir mentions, “We have always been committed to embracing the healthcare community enabling them to leverage our resources and openly refer healthcare providers to be part of this big ecosystem. Having referral partners that can bring in new healthcare providers enables the Elixir platform to become a key extension to the needs of physicians and practices. Our referral partners can now help the healthcare providers outsmart the future of healthcare and earn the revenue while doing it.”',
    },
    {
      type: 'paragraph',
      text: [
        strong('To learn more about the new Elixir’s Referral Program, please visit '),
        { text: 'https://www.elixirehr.com/referral-program/', strong: true, to: '/referral-program/' },
      ],
    },
  ],
};
