// Elixir Summer’23 release note. Body copy is exactly as supplied. The slug, author and publish date
// (September 15, 2023) are the previous website's
// (https://elixirehr.com/elixir-summer-23-version-1-396-11-release-is-available/, via the Wayback
// Machine), which had no featured image; the card uses an existing site photo until one is supplied.
// Like Summer’26, the detail page has no banner image.
import cardImage from '../../assets/insights/hero-card-clinician.webp';

const strong = (text) => ({ text, strong: true });

export default {
  title: 'Elixir Summer’23 Version 1.396.11 Release is available!',
  excerpt: 'Here is a summary of the major updates in this version:',
  publishDate: '2023-09-15',
  author: 'elixirAdmin',
  version: '1.396.11',
  seo: {
    description:
      'Elixir Summer’23 Version 1.396.11 brings Reservation Management, patient portal appointment booking, Refund Management, Super Bill, Care Plan, Group Appointments and Order Management.',
  },
  cardImage: { src: cardImage, alt: 'Clinician using a tablet beside patient dashboards on two monitors in a busy clinic' },
  content: [
    { type: 'paragraph', text: [strong('New Major Release Notification')] },
    { type: 'paragraph', text: 'Here is a summary of the major updates in this version:' },

    { type: 'heading', level: 2, text: 'Reservation Management' },
    {
      type: 'list',
      items: [
        'Reservation Management is a major module that is being released with this version to enable providers to book reservations for patients during the care journey.',
        'Providers will have the capability to setup different types of locations such as buildings, suites, rooms etc. with multiple attributes as required.',
        'This module enables providers to check real-time availability of locations for creating reservations and also generate estimates.',
        'Providers can set up price books for different locations and bill patients based on the reservations booked.',
      ],
    },

    { type: 'heading', level: 2, text: 'Patient Portal' },
    {
      type: 'list',
      items: [
        'Patients now have the ability to book appointments from portal.',
        'Patients can check the real time availability of their desired providers and book the required appointments accordingly.',
        'Patients can also access visit summaries and visit notes post appointment completion which would help them track their care journey.',
      ],
    },

    { type: 'heading', level: 2, text: 'Refund Management' },
    {
      type: 'list',
      items: [
        'Refund management released with this version enables providers to manage refunds effectively.',
        'The automations in place make it convenient for providers to map refunds against payments and track status which enhances the billing experience.',
      ],
    },

    { type: 'heading', level: 2, text: 'Super Bill' },
    {
      type: 'list',
      items: [
        'With this release, providers have the capability to automatically generate superbills for patients based on the services provided.',
        'This would fast track the claims process and reduce denials and errors in billing and payments.',
      ],
    },

    { type: 'heading', level: 2, text: 'Care Plan' },
    {
      type: 'list',
      items: [
        'Providers can setup care plans for their patients to support patients during the care journey',
        'The care plan module provides capabilities to easily align desired goals, objectives and interventions corresponding to the patient problems identified',
        'Care providers can effectively track the progress of the care journey as required with the help of various automations associated with the care plans.',
      ],
    },

    { type: 'heading', level: 2, text: 'Group Appointments' },
    {
      type: 'list',
      items: [
        'With this release, providers can now set up group appointments to manage patient care.',
        'Attendance tracking is available for group appointments to track and have visibility into these sessions',
        'Additionally, care providers can take sessions notes and complete the necessary approvals.',
      ],
    },

    { type: 'heading', level: 2, text: 'Order Management' },
    {
      type: 'list',
      items: [
        'The order management module released with this version would enable providers to create and manage orders for patients.',
        'Providers can maintain an inventory of different items as required and align them for patient care by creating orders as required.',
        'Additionally, basic inventory management is included which allows for tracking deductions, status management, and replenishments.',
      ],
    },

    { type: 'heading', level: 2, text: 'Device & System Compatibility' },
    { type: 'paragraph', text: 'Elixir is compatible on Desktop, Laptop and Tablet' },
    { type: 'paragraph', text: 'For best experience use – Google Chrome, Microsoft Edge, Mozilla Firefox' },
  ],
};
