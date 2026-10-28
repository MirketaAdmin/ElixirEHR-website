// "Contact Us" section content, shared by About Us, What Is Elixir and Referral Program.

import mailIcon from '../assets/icons/contact-mail.png';
import phoneIcon from '../assets/icons/contact-phone.png';
import locationIcon from '../assets/icons/contact-location.png';
import { previousClientLogos, trustedBy } from './home';

// Logos shown under "Trusted by" in the Contact section (subset of the Home logo strip, at 72% scale).
const contactLogoNames = [
  'Cannabis Card Orlando',
  'Genomic Life',
  'Granite Recovery Centers',
  'Alter Health Group',
  'caremore Medical Supply',
];

// The About Us and Referral Program Figma frames show a newer "Trusted by" row: five logos from the
// Home strip, drawn smaller (display size in px, measured from the frame) and 24px apart.
const aboutLogoSizes = [
  ['within', 61, 19],
  ['Community Wellness Ventures', 106, 31],
  ['Upward Health', 92, 15],
  ['OncoHost', 93, 17],
  ['TrueNorth Health Center', 88, 21],
];

export const updatedContactLogos = aboutLogoSizes.map(([name, width, height]) => ({
  ...trustedBy.logos.find((logo) => logo.name === name),
  display: [width, height],
}));

export const contact = {
  eyebrow: 'GET IN TOUCH',
  title: 'Contact Us',
  description:
    'We are here to help you 7 days a week and respond within 24 hours. Plus, you can find most answers to your questions right on our FAQ page.',
  // Tile sizes differ slightly per item in the Figma frame.
  channels: [
    {
      label: 'Email Us',
      value: 'info@elixirehr.com',
      href: 'mailto:info@elixirehr.com',
      icon: mailIcon,
      iconSize: [22, 18],
      tile: [52, 55],
    },
    {
      label: 'Call Us Today',
      value: '1-855-647-5382',
      href: 'tel:+18556475382',
      icon: phoneIcon,
      iconSize: [20, 20],
      tile: [50, 57],
    },
    {
      label: 'Head Office',
      value: '11501 Dublin Blvd STE 200, Dublin, CA 94568',
      icon: locationIcon,
      iconSize: [18, 21],
      tile: [48, 59],
    },
  ],
  trustedLabel: 'TRUSTED BY MORE THAN 1,200 CLINICS WORLDWIDE',
  logos: contactLogoNames.map((name) => previousClientLogos.find((logo) => logo.name === name)),
  form: {
    fields: [
      { name: 'firstName', label: 'First Name', placeholder: 'John', autoComplete: 'given-name', required: true },
      { name: 'lastName', label: 'Last Name', placeholder: 'Doe', autoComplete: 'family-name', required: true },
      { name: 'email', label: 'Work Email', placeholder: 'john@hospital.com', type: 'email', autoComplete: 'email', required: true },
      { name: 'phone', label: 'Mobile Number', placeholder: '+1 (555) 000-0000', type: 'tel', autoComplete: 'tel' },
      { name: 'company', label: 'Healthcare Facility / Company', placeholder: 'Metropolis Medical Center', autoComplete: 'organization', wide: true },
      { name: 'message', label: 'Tell Us About Your Needs', placeholder: 'How can Elixir AI help your clinical team?', multiline: true, wide: true },
    ],
    submitLabel: 'Submit Request',
    consent: { before: 'By submitting, you agree to our ', link: 'Privacy Policy', to: '/privacy-policy', after: '.' },
  },
};
