// Elixir Summer’24 release note (by elixirAdmin, September 2, 2024, "Release Notes"). Body copy is
// exactly as supplied (the title, repeated at the top of the supplied copy, is the page heading).
import featuredImage from '../../assets/posts/release-note/featured/elixir-summer-24-version-1-637-release.webp';

const strong = (text) => ({ text, strong: true });

export default {
  title: 'Elixir Summer’24 Version 1.637 Release',
  excerpt: 'Elixir Summer’24 release comes with several improvements in the new version',
  publishDate: '2024-09-02',
  author: 'elixirAdmin',
  version: '1.637',
  cardImage: { src: featuredImage, alt: 'Clinician working in Elixir EHR, with the Summer’24 release highlights: Forms & Notes, Lab Orders, Claims & ERA Management, Payment Collection and Patient Portal' },
  heroImage: {
    src: featuredImage,
    alt: 'Clinician working in Elixir EHR, with the Summer’24 release highlights: Forms & Notes, Lab Orders, Claims & ERA Management, Payment Collection and Patient Portal',
    width: 1672,
    height: 941,
  },
  content: [
    { type: 'paragraph', text: [strong('Release Date:'), ' September 02, 2024'] },
    { type: 'paragraph', text: 'Here is a summary of the major updates in this version:' },

    { type: 'heading', level: 2, text: 'Forms & Notes' },
    {
      type: 'list',
      items: [
        'Usability enhancements in the ability to record patient problems and adding existing problems on patient Notes.',
        'Care team members will be able to record patient diagnoses and add existing diagnoses on patient Notes. They will also be able to relate diagnoses with the relevant problem.',
        'With this version, care team members will be able to record patient’s allergy details on Notes.',
        'Usability enhancements in the ability to record vital signs on patient Notes.',
        'Care team members will be able to record patient’s medication details on patient Notes.',
      ],
    },

    { type: 'heading', level: 2, text: 'Lab Orders' },
    {
      type: 'list',
      items: [
        'Care providers will now have an enhanced experience pertaining to creating Lab Orders which will be especially beneficial for managing in-house lab orders or simply for keeping a record of lab orders.',
        'Care providers will be able to print lab order PDFs with this version.',
      ],
    },

    { type: 'heading', level: 2, text: 'Claims and ERA Management' },
    {
      type: 'list',
      items: [
        'Billing users will be able to make use of better claim processing workflows and field level mappings which will reduce their manual intervention.',
        'The new version comes with enhanced error management mechanism using improved claim validations that will help billing teams in claim scrubbing and resubmissions.',
        'This version comes with capabilities for managing additional status codes pertaining to ERA.',
      ],
    },

    { type: 'heading', level: 2, text: 'Payment Collection' },
    {
      type: 'list',
      items: [
        'Providers can now easily integrate any payment gateway with Elixir and collect payments seamlessly.',
        'This version comes with several improvements pertaining to EDI 835 and 837 for better reimbursements.',
        'Billing users will be able to set up payment plans for patients with this version.',
        'The new payment plan module comes with support for subscription billing and automated payment collection capabilities.',
      ],
    },

    { type: 'heading', level: 2, text: 'Patient Portal' },
    {
      type: 'list',
      items: [
        'Patients will now be able to view their pending and overdue payments on Elixir Patient Portal.',
        'Patients will have the ability to view their transaction history with their healthcare provider on portal.',
        'Patients will now have the ability to make payments directly from their portal.',
        'Patients can download and print statements.',
      ],
    },

    { type: 'heading', level: 2, text: 'Miscellaneous' },
    {
      type: 'list',
      items: [
        'Improved descriptions for Elixir fields and objects.',
        'Capability to use subscriber org record types for patient accounts and practitioner contacts.',
      ],
    },

    { type: 'paragraph', text: 'Elixir Summer’24 release comes with several improvements in the new version' },
    {
      type: 'list',
      items: [
        'Several UI-UX Improvements across Elixir.',
        'Improvements and bug fixes for performance enhancement in the Appointment Management module.',
        'Improvements and bug fixes in the Lab Order management module.',
        'Bug Fixes in the Prescription management module.',
        'Improvements and bug fixes in the Claim Processing flows.',
        'Improvements and bug fixes in the ERA Payment Posting flows.',
      ],
    },

    { type: 'heading', level: 2, text: 'Device & System Compatibility' },
    { type: 'paragraph', text: 'Elixir is compatible with Salesforce on Desktop, Laptop and Tablet' },
    { type: 'paragraph', text: 'For best experience use – Google Chrome, Microsoft Edge, Mozilla Firefox' },
  ],
};
