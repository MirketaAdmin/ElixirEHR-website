// Elixir Certified Module page (/onc-certification/elixir-certified-module) — a child page of ONC Certification.
// Copy is verbatim from the Figma (certificate details, criteria table, disclaimer). Nothing here is
// added beyond the frame; links only point at routes that exist.
import heroMedia from '../assets/elixir-certified-module/hero-media.png';
import certificateImage from '../assets/elixir-certified-module/certificate.png';
import verifiedIcon from '../assets/elixir-certified-module/icon-verified.png';
import planIcon from '../assets/elixir-certified-module/icon-rwt-plan.png';
import reportIcon from '../assets/elixir-certified-module/icon-rwt-report.png';
import checkIcon from '../assets/elixir-certified-module/icon-check.png';
import shieldIcon from '../assets/elixir-certified-module/icon-shield.png';

const icon = (src, w, h) => ({ src, size: [w, h] });

export const ecmHero = {
  currentPage: 'Elixir Certified Module',
  titleLines: ['Elixir Certified', 'Module'],
  titleAccent: [],
  description:
    "Elixir is the world's first EHR completely built on Salesforce. A completely modular EHR solution integrated with highly efficient CRM and RCM capabilities that can be tailored to your needs. Elixir has end-to-end patient intake management and offers dynamic patient 360 degree for greater outreach and an integrated patient care experience. Elixir comes with Next-Gen Revenue Cycle Management solution with intuitive medical billing and automated claim management and payment processing.",
  media: {
    src: heroMedia,
    alt: 'Clinician working at an Elixir dashboard beneath a verified security shield and cloud connections',
  },
};

export const ecmDetails = {
  eyebrow: 'Regulatory Compliance & Transparency',
  title: 'Certification Details',
  certificate: {
    // Cropped from the Figma frame at 1x — a higher-resolution original is still needed (see DESIGN-SYSTEM.md).
    image: icon(certificateImage, 396, 297),
    alt: 'SLI Compliance ONC Certified Health IT certificate for Elixir, Version 1, by Mirketa Inc',
    caption: 'Verified Health IT Module Certification',
    captionIcon: icon(verifiedIcon, 14, 14),
  },
  facts: [
    { label: 'HIT Vendor', value: 'Mirketa Inc' },
    { label: 'Date Certified', value: '21-July-2023' },
    { label: 'Product and Version', value: 'Elixir Version 1' },
    { label: 'Certificate Number', value: '15.05.05.3165.MMKT.01.00.1.230721', code: true },
    { label: 'Relied Upon Software', chips: ['Salesforce', 'NewCrop', 'EMR Direct'] },
  ],
  disclaimer:
    'ONC Disclaimer: This Health IT Module is compliant with the ONC Certification Criteria for Health IT and has been certified by an ONC-ACB in accordance with the applicable certification criteria adopted by the Secretary of Health and Human Services. This certification does not represent an endorsement by the U.S. Department of Health and Human Services.',
  // The PDFs were not supplied. Set `href` to the file's URL and the button becomes a real download link;
  // until then it renders as an inert (aria-disabled) button rather than a fake link.
  downloads: [
    {
      tone: 'rose',
      icon: icon(planIcon, 18, 23),
      title: 'RWT Plan 2025',
      meta: 'Plan Report ID Number: ',
      code: '20241003mir',
      href: null,
    },
    {
      tone: 'lavender',
      icon: icon(reportIcon, 18, 23),
      title: 'Real World Testing Results Report CY 2025',
      meta: 'Annual compliance and live performance audit',
      href: null,
    },
  ],
  downloadLabel: 'Download PDF',
};

const INCLUDED = ['Included in the contract. No additional costs or fees.'];

export const ecmCriteria = {
  eyebrow: 'Audited Standards',
  title: 'Certified Criteria',
  description:
    'Explore the complete breakdown of 170.315 certification capabilities, standards, and transparent fee disclosures.',
  columns: {
    capability: 'Capability',
    description: 'Description of Capability',
    fees: 'Costs or Fees',
    feesNote:
      'Types of costs or fees that a user may be required to pay to purchase, license, implement, maintain, or support certification functionality.',
  },
  // Each group's button jumps to its first row in the table (the frame shows every row with the first
  // group selected).
  groups: [
    { id: 'a', label: '170.315 (a) (1, 5, 14)' },
    { id: 'b', label: '170.315 (b) (1, 10)' },
    { id: 'd', label: '170.315 (d) (1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13)' },
    { id: 'g', label: '170.315 (g) (3, 4, 5, 6, 7)' },
  ],
  rows: [
    {
      capability: 'Web-based solution Contract Elixir',
      description: 'A contractual agreement for the use of the Elixir with functionalities outlined in the contract.',
      fees: [
        'One-time implementation fee applies for functionalities outlined in the contract',
        'Yearly recurrent fees for support and hosting',
        'An additional onetime fee will apply for data import/migration procedures if client needs so.',
      ],
    },
    {
      group: 'a',
      capability: '170.315(a)(1) : Computerized provider order entry (CPOE) – medications',
      description: 'Allow a user to record, change, and access medication orders',
    },
    {
      group: 'a',
      capability: '170.315(a)(5) : Demographics',
      description: "A user can record each one of a patient's Race, Ethnicity, Sex and Preferred Language.",
    },
    {
      group: 'a',
      capability: '170.315(a)(14) : Implantable Device List',
      description: "Health IT is able to record UDIs for a patient's implantable devices.",
    },
    {
      group: 'b',
      capability: '170.315(b)(1) : Transitions of care',
      description:
        'Generation of Consolidated CDA (C-CDA) Continuity of Care Document (CCD), Referral Note (Ambulatory Setting).',
    },
    {
      group: 'b',
      capability: '170.315(b)(10) : Electronic Health Information export',
      description:
        "Timely creation of an export file(s) with all of a single patient's electronic health information stored at the time of certification by the product, of which the Health IT Module is a part.",
    },
    {
      group: 'd',
      capability: '170.315 (d)(1): Authentication, Access Control, Authorization',
      description: 'Authenticate user and establish permitted user access',
    },
    {
      group: 'd',
      capability: '170.315 (d)(2): Auditable Events and Tamper Resistance',
      description:
        'Record actions related to electronic health information. Audit log records the audit log status and/or the encryption status. For all permissible actions, the audit log function records the following data: Date and Time, Patient Identification, User Identification, Type of Action, and identification of patient data accessed',
    },
    {
      group: 'd',
      capability: '170.315 (d)(3): Audit Reports',
      description: 'Audit information available to users and can sort by the user, event time, and event type.',
    },
    {
      group: 'd',
      capability: '170.315 (d)(4): Amendments',
      description:
        'Ability to append an accepted amendment and a denied amendment request, along with denial, and add a link indicating location of amendment(s).',
    },
    {
      group: 'd',
      capability: '170.315 (d)(5): Automatic Access Time-out',
      description: 'Authorized user configures a defined period of inactivity for automatic access time-out',
    },
    {
      group: 'd',
      capability: '170.315 (d)(6): Emergency Access',
      description:
        'Enable emergency access for identified user that can access health information during an emergency. Emergency access authorizations are limited to a set of identified users',
    },
    {
      group: 'd',
      capability: '170.315 (d)(7): End-User Device Encryption',
      description: 'Electronic health information is NOT locally stored on end-user device',
    },
    {
      group: 'd',
      capability: '170.315 (d)(8): Integrity',
      description:
        'Health IT product can generate a hash over a message containing health information. Health IT product can receive electronically exchanged health information and validate message digest',
    },
    {
      group: 'd',
      capability: '170.315 (d)(9): Trusted Connection',
      description:
        'Health IT product implements Transport-Level security: Establishing a trusted connection in accordance with the standards specified at §170.210(a)(2) and §170.210(c)(2)',
    },
    {
      group: 'd',
      capability: '170.315 (d)(12): Encrypt Authentication Credentials',
      description: 'Health IT developers must make an attestation on the method of encryption of credentials.',
    },
    {
      group: 'd',
      capability: '170.315 (d)(13): Multi-Factor Authentication',
      description:
        'Health IT developers must make one of the following attestations as to the use or not of Multi-Factor Authentication.',
    },
    {
      group: 'g',
      capability: '170.315(g)(3) : Safety-enhanced design',
      description: 'NISTIR 7741 UCD process is applied during the design and development.',
    },
    {
      group: 'g',
      capability: '170.315 (g)(4): Quality Management System',
      description:
        'The use of a Quality Management System (QMS) must be identified in the development, testing, implementation, and maintenance for each capability',
    },
    {
      group: 'g',
      capability: '170.315 (g)(5): Accessibility-Centered Design',
      description: 'Identify accessibility-centered design is deferred for each capability of the product',
    },
    {
      group: 'g',
      capability: '170.315(g)(6) : Consolidated CDA creation performance',
      description:
        'Health IT is able to create a C-CDA file in accordance with the HL7® C-CDA Release 2.1 10 for each document template.',
    },
    {
      group: 'g',
      capability: '170.315(g)(7) : Application access — patient selection',
      description:
        'The API include API syntax, function names, required and optional parameters and their data types, return variables and their types/structures, exceptions, and exception handling methods and their returns.',
    },
  ].map((row) => ({ fees: INCLUDED, ...row })),
};

export const ecmAssessment = {
  eyebrow: 'Get started',
  title: 'Get an Elixir Certified Module Configuration Assessment',
  // The frame breaks the copy after "needs." and before "day."
  description:
    'Tell us about your care model, departments, and reporting needs.\nAn Elixir implementation advisor will follow up within one business\nday.',
  check: icon(checkIcon, 24, 25),
  points: [
    'A specialist follows up within one business day',
    'A no-obligation conversation about your specific goals',
    'Answers from someone who actually works in this space',
    'Your information stays confidential',
  ],
  badgeIcon: icon(shieldIcon, 14, 14),
  badges: ['Certified Partner', 'SOC 2 Certified', 'HIPAA Ready', 'Enterprise Ready'],
  form: {
    title: 'Request a Module Configuration Assessment',
    // The shared contact form's fields, relabelled and reordered as drawn, with the frame's placeholders.
    fieldNames: ['firstName', 'lastName', 'phone', 'company', 'email', 'message'],
    fieldOverrides: {
      firstName: { label: 'First Name *', placeholder: 'Jane' },
      lastName: { label: 'Last Name *', placeholder: 'Doe', required: true },
      phone: { label: 'Mobile *', placeholder: '+1 (555) 000-0000', required: true },
      company: { label: 'Company *', placeholder: 'Healthcare System Inc.', required: true, wide: false },
      email: { label: 'Email *', placeholder: 'jane.doe@healthsystem.com', wide: true },
      message: {
        label: 'Description *',
        placeholder: 'Briefly describe your patient care requirements, current system integration, and projected timeline...',
        required: true,
      },
    },
    submitLabel: 'Submit',
  },
};
