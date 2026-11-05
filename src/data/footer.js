// Footer content (copy reproduced exactly from the Figma Home frame).
import naatpBadge from '../assets/footer/naatp-affiliate-member.png';
import hipaaBadge from '../assets/footer/hipaa.png';

export const footerTagline =
  'Empowering modern healthcare through intelligent automation and secure, cloud-native EHR solutions.';

export const footerColumns = [
  {
    title: 'Solutions',
    links: [
      { label: 'Electronic Health Records', to: '/ehr-software/' },
      { label: 'Revenue Cycle Management', to: '/rcm-software/' },
      { label: 'Telehealth', to: '/telehealth-ehr/' },
      { label: 'Patient Engagement', to: '/patient-portal-software/' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Case Studies', to: '/case-studies/' },
      { label: 'Support Center', to: '/contact-us/' },
      { label: 'Documentation', to: '/release-notes/' },
      { label: 'Developer API', to: '/onc-certification/api-developer-portal/' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', to: '/about-us/' },
      { label: 'Careers', to: '/careers/' },
      { label: 'Contact', to: '/contact-us/' },
      { label: 'Partners', to: '/referral-program/' },
    ],
  },
];

export const socialLinks = [
  { label: 'YouTube', icon: 'youtube', href: 'https://www.youtube.com/playlist?list=PLBJTbCYrDSQ0' },
  { label: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/showcase/elixir-emr-ehr-system/' },
];

// The two badges beside the social icons (supplied footer frame), cut from that frame at their drawn
// size; each links to its Compliance & Security page.
export const footerBadges = [
  { label: 'NAATP Affiliate Member', src: naatpBadge, width: 139, height: 50, to: '/naatp/' },
  { label: 'HIPAA Compliant', src: hipaaBadge, width: 72, height: 38, to: '/hipaa-compliant-ehr/' },
];

export const copyright =
  '© Copyright Elixir 2026. All Rights Reserved. Designed and Developed by Mirketa';

export const legalLinks = [{ label: 'Privacy Policy', to: '/privacy-policy/' }];

// Reopens the cookie preferences; named as in the Privacy Policy ("Cookie settings" link in the footer).
export const cookieSettingsLabel = 'Cookie settings';
