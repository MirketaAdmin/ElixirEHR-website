// Elixir Spring’23 release note, recovered from the previous website
// (https://elixirehr.com/elixir-spring-23-version-1-344-1-release-is-available/, archived July 2026,
// by elixirAdmin, May 10, 2023). Copy is verbatim; two list items that held a line break keep it.
// The old page had no featured image, so the card uses an existing site photo until one is supplied;
// like Summer’26, the detail page has no banner image.
import cardImage from '../../assets/contact-us/demo-laptop-team.webp';

const strong = (text) => ({ text, strong: true });

export default {
  title: 'Elixir Spring’23 Version 1.344.1 Release is available!',
  excerpt: 'Here is a summary of the major updates in this version:',
  publishDate: '2023-05-10',
  author: 'elixirAdmin',
  version: '1.344.1',
  seo: {
    description:
      'Elixir Spring’23 Version 1.344.1 brings the Patient Portal, Message Center and Appointment Management modules, plus form, approval, care episode and EDI 837/835 improvements.',
  },
  cardImage: { src: cardImage, alt: 'Laptop showing an Elixir patient dashboard, with clinicians reviewing a tablet in the background' },
  content: [
    { type: 'paragraph', text: [strong('Release Date:'), ' May 10, 2023'] },
    { type: 'paragraph', text: [strong('What’s New?')] },
    { type: 'paragraph', text: 'Here is a summary of the major updates in this version:' },

    { type: 'heading', level: 2, text: 'Patient Portal' },
    {
      type: 'list',
      items: [
        'Patient Portal module is being released with this version to enable patients to manage and track their care journey',
        'Using Elixir Patient Portal, patients would be able to complete intake and consent forms shared by providers and submit the forms – all in real time',
        'The end users would be able to view their lab results, prescriptions and also request for prescription refills',
        'Patients will have the capability to update their insurance details on portal',
        'Elixir Patient Portal comes with the capability of seamless communication between patient and care team members.',
      ],
    },

    { type: 'heading', level: 2, text: 'Message Center' },
    {
      type: 'list',
      items: [
        [
          'Messaging Module is being released to enable seamless communication between care team members and patients',
          { br: true },
          'Using the Message Center capabilities, care team members are able to communicate with the patient via their channel of choice.',
        ],
      ],
    },

    { type: 'heading', level: 2, text: 'Appointment Management' },
    {
      type: 'list',
      items: [
        'Appointment Scheduling capabilities will enable care team members to schedule appointments required for managing patient care.',
        'The Appointment Management Module provides capabilities to search for the right practitioners with the help of intuitive filters, provides an overview of available slots and also helps in managing different appointment types.',
        'Work Schedule management for practitioners so as to enable practitioners to set their availabilities via work schedules.',
      ],
    },

    { type: 'heading', level: 2, text: 'Miscellaneous' },
    {
      type: 'list',
      items: [
        'Easy cloning of form templates for efficient template management.',
        'Approval process management and e-Signing capabilities for lab orders and prescription orders.',
        'Multiple care episode management for effective management of patient’s care journey.',
        'EDI 837/835 conversion for claim data transmission.',
      ],
    },

    { type: 'paragraph', text: [strong('Elixir Spring’23 comes with several improvements in the new version')] },
    {
      type: 'list',
      items: [
        ['Improvements and bug fixes for medical coding module', { br: true }, 'UI enhancements for EHR forms and notes'],
        'Multiple bug fixes for the Note Builder module',
        'Fixed issues in the Price Book flows',
        'Various security issues are addressed, including FLS/CRUD mappings, inline CSS and Dynamic SOQL',
      ],
    },

    { type: 'heading', level: 2, text: 'Release Schedule' },
    {
      type: 'list',
      items: ['This is 1.344.1 release.', 'The next release is expected to be around September 2023.'],
    },
  ],
};
