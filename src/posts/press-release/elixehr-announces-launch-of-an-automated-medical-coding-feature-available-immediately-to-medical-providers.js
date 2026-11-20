// Press release from the previous website (https://www.elixirehr.com/elixehr-announces-launch-of-an-automated-medical-coding-feature-available-immediately-to-medical-providers/).
// Copy as supplied, verbatim; bold, list and links as on the old page. Image: the release's image on
// the old /press-release/ listing (it had no alt text; the title is used). No media contact or
// boilerplate on the old page, so the press-release defaults are switched off.
import featuredImage from '../../assets/posts/press-release/elixehr-announces-launch-of-an-automated-medical-coding-feature-available-immediately-to-medical-providers/featured.jpg';

const strong = (text) => ({ text, strong: true });
const title = 'Elixir EHR Announces Launch of an automated Medical Coding Feature Available Immediately to Medical Providers';

export default {
  title,
  excerpt:
    'Elixir, a complete EHR & Practice Management Solution, released a new, and much needed, feature today for a medical coding, an easy to use and automated feature to ease the burden on the healthcare staff and billing in healthcare clinics across the US.',
  publishDate: '2022-04-28',
  category: null,
  about: null,
  mediaContact: null,
  cardImage: { src: featuredImage, alt: title },
  heroImage: { src: featuredImage, alt: title, width: 700, height: 467 },
  content: [
    { type: 'paragraph', text: [strong('San Ramon, US, April 28, 2022')] },
    {
      type: 'paragraph',
      text: 'Elixir, a complete EHR & Practice Management Solution, released a new, and much needed, feature today for a medical coding, an easy to use and automated feature to ease the burden on the healthcare staff and billing in healthcare clinics across the US. As the healthcare providers across US are facing an enormous number of claim rejection mainly due to claim documentation or incorrect coding, Elixir provides an easy to use automated feature with your EHR and RCM solutions that helps to efficiently record CPT, ICD, HSCPCS and Snomed CT codes and automatically relate them to different procedures performed on the patient. Elixir takes it one step further by automatically pre-populating these codes on your CMS-1500 and UB-04 claim forms to help bring efficiency and efficacy to the system.',
    },
    {
      type: 'paragraph',
      text: 'Elixir is for those thousands of healthcare providers who are fed up with the inefficiencies in the billing/ RCM system. Pranshu Goyal, Direct of Product at Elixir said, “The major problem with EHRs available today is that the documentation in the EHR is located in various places. This leads to billing team spending more time looking for the necessary documentation. There is also the potential for an increase in missing provider documentation if the coding professional is not aware of all areas of the system that contain provider documentation. Coders must have access to all documentation pieces to correctly apply diagnosis and procedure codes. This ensures appropriate reimbursement and data integrity. Lack of access to pertinent information has far-reaching consequences, such as lost revenue and inaccurate claims.” He added that ”Elixir with advance backend coding has been created in a way to instantaneously provide documentation provided that the appropriate security access has been obtained. Digital documentation also solves the legibility issues.”',
    },
    {
      type: 'paragraph',
      text: 'With Elixir, the medical coding staff may now have the opportunity to work remotely, if they meet the productivity and quality standards developed by their facility. Remote coding can also open the door to increased productivity and recruitment advantages. The ease of access and the availability of the electronic record can lead to improved coding turnaround times. The automation of the coding function will change the medical coder’s role to coder auditor to review the documentation and the applied code, hence improving the efficiency of the system.',
    },
    {
      type: 'paragraph',
      text: 'Elixir EHR Founder & CEO, Rajeev Kumar said, “For all of us at Elixir, this has been a great achievement. Our priority and goal from the very beginning was to fill a much-needed gap and contribute tremendous value to our community.”',
    },
    {
      type: 'paragraph',
      text: 'In addition to medical coding, Elixir also offers customers additional means to keep their Revenue Cycle Management efficient and error free. Those include:',
    },
    {
      type: 'list',
      items: [
        'Automated Insurance Verification',
        'Real-time Cost of Care calculation',
        'Effective Claim processing and Generation',
        'Automatic & Manual ERA/EOB Payment Posting',
        'Payment Processing',
        'Statement & Invoices for Patients',
      ],
    },
    { type: 'paragraph', text: '…and much more' },
    {
      type: 'paragraph',
      text: [
        'The Elixir team is available to help with expedited account setup and enablement of these key features. Email info@elixirehr.com or visit the Elixir website, ',
        { text: 'www.elixirehr.com', to: '/' },
        ', to connect with a Team Member via live chat. They are available to assist with a personalized demo.',
      ],
    },
  ],
};
