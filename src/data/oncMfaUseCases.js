// ONC MFA Use Cases page (/onc-certification/onc-mfa-use-cases) — a child page of ONC Certification.
// Copy is verbatim from the Figma. Links only point at routes that exist.
import heroMedia from '../assets/onc-mfa-use-cases/hero-media.png';
import case1Icon from '../assets/onc-mfa/icon-case-1.png';
import case2Icon from '../assets/onc-mfa/icon-case-2.png';
import case3Icon from '../assets/onc-mfa/icon-case-3.png';
import case4Icon from '../assets/onc-mfa/icon-case-4.png';
import case5Icon from '../assets/onc-mfa/icon-case-5.png';
import case6Icon from '../assets/onc-mfa/icon-case-6.png';
import case7Icon from '../assets/onc-mfa/icon-case-7.png';
import case8Icon from '../assets/onc-mfa/icon-case-8.png';
import case9Icon from '../assets/onc-mfa/icon-case-9.png';
import case10Icon from '../assets/onc-mfa/icon-case-10.png';
import checkIcon from '../assets/onc-mfa/icon-check.png';
import trust1Icon from '../assets/onc-mfa/icon-trust-1.png';
import trust2Icon from '../assets/onc-mfa/icon-trust-2.png';
import trust3Icon from '../assets/onc-mfa/icon-trust-3.png';
import trust4Icon from '../assets/onc-mfa/icon-trust-4.png';

const icon = (src, w, h) => ({ src, size: [w, h] });

export const mfaHero = {
  currentPage: 'ONC MFA Use Cases',
  titleLines: ['Use Cases supported', 'for Multi-Factor', 'Authentication'],
  titleAccent: [],
  description:
    'The Elixir EHR application suite supports the following factors of authentication. Since Elixir is built on the Salesforce platform, it leverages the MFA capability covering the following use cases:',
  media: {
    src: heroMedia,
    alt: 'Clinician approving a multi-factor sign-in on her phone at a desktop showing a verified shield',
  },
};

export const mfaUseCases = [
  { icon: icon(case1Icon, 21, 21), title: 'MFA for direct user logins' },
  { icon: icon(case2Icon, 19, 19), title: 'MFA for single sign-on (SSO)' },
  { icon: icon(case3Icon, 22, 19), title: 'API security access using MFA' },
  { icon: icon(case4Icon, 21, 21), title: 'Use Built-in Authenticator as a verification method' },
  { icon: icon(case5Icon, 15, 21), title: 'Use Salesforce Authenticator mobile app for MFA' },
  { icon: icon(case6Icon, 21, 21), title: 'Use a universal second factor (U2F) or WebAuthn (FIDO2) key' },
  { icon: icon(case7Icon, 21, 21), title: 'Issuing One Time Passwords (OTP)' },
  { icon: icon(case8Icon, 22, 20), title: 'SMS MFA authentication confirmation' },
  { icon: icon(case9Icon, 21, 21), title: 'Generate a temporary identity verification code' },
  { icon: icon(case10Icon, 21, 21), title: 'Source IP address limited authentication limits' },
];

export const mfaAssessment = {
  eyebrow: 'Get started',
  title: 'Get an MFA Implementation Assessment',
  // The frame forces a line break before "day."
  description:
    'Tell us about your identity provider, login patterns, and compliance requirements. A healthcare security advisor will follow up within one business\nday.',
  check: icon(checkIcon, 10, 9),
  points: [
    'A specialist follows up within one business day',
    'A no-obligation conversation about your specific goals',
    'Answers from someone who actually works in this space',
    'Your information stays confidential',
  ],
  trust: [
    { icon: icon(trust1Icon, 14, 14), label: 'Certified Partner' },
    { icon: icon(trust2Icon, 14, 14), label: 'SOC 2 Certified' },
    { icon: icon(trust3Icon, 14, 14), label: 'HIPAA Ready' },
    { icon: icon(trust4Icon, 14, 14), label: 'Enterprise Ready' },
  ],
  form: {
    title: 'Request an ONC MFA Assessment',
    // The shared contact form's fields, relabelled and reordered as drawn (the frame shows no placeholders).
    fieldNames: ['firstName', 'lastName', 'phone', 'company', 'email', 'message'],
    fieldOverrides: {
      firstName: { label: 'First Name *', placeholder: '' },
      lastName: { label: 'Last Name', placeholder: '', required: false },
      phone: { label: 'Mobile *', placeholder: '', required: true },
      company: { label: 'Company *', placeholder: '', required: true, wide: false },
      email: { label: 'Email *', placeholder: '', wide: true },
      message: { label: 'Description *', placeholder: '', required: true },
    },
    submitLabel: 'Submit',
  },
};
