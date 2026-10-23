// Footer content (copy reproduced exactly from the Figma Home frame).

export const footerTagline =
  'Empowering modern healthcare through intelligent automation and secure, cloud-native EHR solutions.';

export const footerColumns = [
  {
    title: 'Solutions',
    links: [
      { label: 'Electronic Health Records', to: '/electronic-health-record' },
      { label: 'Revenue Cycle Management', to: '/revenue-cycle-management' },
      { label: 'Telehealth', to: '/more-specialties/telehealth' },
      { label: 'Patient Engagement', to: '/patient-portal' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Case Studies', to: '/success-stories' },
      { label: 'Support Center', to: '/resources/support-center' },
      { label: 'Documentation', to: '/resources/documentation' },
      { label: 'Developer API', to: '/resources/developer-api' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', to: '/about-us' },
      { label: 'Careers', to: '/career' },
      { label: 'Contact', to: '/contact-us' },
      { label: 'Partners', to: '/company/partners' },
    ],
  },
];

// Profile URLs were not provided with the design — set them before launch.
export const socialLinks = [
  // No profile URLs have been supplied yet: without an href the icons render unlinked (see Footer).
  { label: 'YouTube', icon: 'youtube' },
  { label: 'LinkedIn', icon: 'linkedin' },
];

export const copyright =
  '© Copyright Elixir 2026. All Right Reserved. Designed and Developed by Mirketa';

export const legalLinks = [{ label: 'Privacy Policy', to: '/privacy-policy' }];
