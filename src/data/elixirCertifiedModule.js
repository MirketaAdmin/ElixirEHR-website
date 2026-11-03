// ONC-Certified EHR — the ONC Certification record (/onc-certification/elixir-certified-module), Compliance &
// Security. Copy is verbatim from the supplied "ONC Certification.html" (checked against the certificate
// PDF). Editorial rules from that file, keep them when editing:
// - Print the base certificate ID (no "_4" listing suffix).
// - Do not claim (g)(10), (b)(11), "Cures Act certified", "HIPAA certified" or "SOC 2 certified", and do not
//   show an ONC or HHS logo; the attribution statement replaces it and must stay word for word.
// - The RWT PDFs and the CHPL listing link are still to be supplied (download buttons stay inert until
//   `href` is set).
// The page's other published artifacts are linked where they exist on this site; the source's bracketed
// developer notes ("link ... once it is published here") are replaced by those links.
import planIcon from '../assets/elixir-certified-module/icon-rwt-plan.png';
import reportIcon from '../assets/elixir-certified-module/icon-rwt-report.png';

const icon = (src, w, h) => ({ src, size: [w, h] });

export const ecmHero = {
  currentPage: 'ONC Certification',
  pill: 'Compliance & Security · ONC Certification',
  titleLines: ['ONC-Certified EHR:', 'Elixir’s Certification Record in Full'],
  description:
    'Elixir is a certified Health IT Module under the ONC Health IT Certification Program, certified by an ONC-Authorized Certification Body against criteria adopted by the Secretary of Health and Human Services. The certificate number, the certified criteria, the cost disclosure and the real world testing documents are all published below, because certification is only worth anything if it can be checked.',
  primaryCta: { label: 'Certified criteria', href: '#criteria' },
  secondaryCta: { label: 'Published documentation', href: '#documentation' },
};

export const ecmFacts = [
  { label: 'Health IT developer', value: 'Mirketa Inc' },
  { label: 'Product and version', value: 'Elixir, Version 1' },
  { label: 'Date certified', value: '21 July 2023' },
  { label: 'Certificate number', value: '15.05.05.3165.MRKT.01.00.1.230721', code: true },
  { label: 'Certification body', value: 'SLI Compliance, an ONC-Authorized Certification Body' },
  { label: 'Relied upon software', value: 'Salesforce, NewCrop, EMR Direct' },
  { label: 'Criteria certified', value: '21 criteria under 45 CFR 170.315' },
];

export const ecmStrip = [
  {
    title: 'Certified, not self-declared',
    text: 'Tested and certified by an independent ONC-Authorized Certification Body, not asserted by the vendor.',
  },
  {
    title: 'Published criteria list',
    text: 'Every certified criterion named, with the capability it covers and the fees that apply to it.',
  },
  {
    title: 'Real world testing',
    text: 'Annual plan and results report, a Condition and Maintenance of Certification requirement.',
  },
  {
    title: 'Open API documentation',
    text: 'Business and technical API documentation published openly, with no registration, as the program requires.',
  },
];

export const ecmMeaning = {
  id: 'meaning',
  eyebrow: 'Being precise',
  title: 'What ONC Certification Means for an EHR, and What It Does Not',
  kicker:
    'Certification is a statement about tested capability against named criteria. It is not a security seal, and it is not a statement that one product is better than another.',
  tallyLabel: 'Certified criteria by group',
  tally: [
    { count: '3', label: 'Clinical capabilities', code: '170.315(a)' },
    { count: '2', label: 'Care coordination and export', code: '170.315(b)' },
    { count: '11', label: 'Privacy and security', code: '170.315(d)' },
    { count: '5', label: 'Design, process and API', code: '170.315(g)' },
  ],
  attribution: {
    label: 'Required attribution statement',
    text: 'This Health IT Module is compliant with the ONC Certification Criteria for Health IT and has been certified by an ONC-ACB in accordance with the applicable certification criteria adopted by the Secretary of Health and Human Services. This certification does not represent an endorsement by the U.S. Department of Health and Human Services.',
  },
  paragraphs: [
    [
      { text: 'Certification is granted criterion by criterion.', strong: true },
      ' The ONC Health IT Certification Program does not certify “an EHR” as a whole. It certifies a Health IT Module against specific criteria at 45 CFR 170.315, each one tested by an ONC-Authorized Certification Body against a published test procedure. A product is therefore certified to a ',
      { text: 'list', italic: true },
      ', and the honest way to present certification is to publish that list rather than a badge. Elixir’s list is ',
      { text: 'immediately below', href: '#criteria' },
      '.',
    ],
    [
      { text: 'Why it matters to a provider organization.', strong: true },
      ' Certified health IT is the basis of several federal programs. Eligible professionals and hospitals participating in the Medicare Promoting Interoperability Program and the Promoting Interoperability performance category of MIPS are required to use certified electronic health record technology, and the certification criteria a given program depends on are set by that program rather than by the vendor. If a federal or state program is part of why you are buying, confirm which criteria that program requires and check them against the list below before you sign anything.',
    ],
    [
      { text: 'What it is not.', strong: true },
      ' Certification is not an accreditation of your organization, not a HIPAA compliance certificate — there is no such thing — and not a security attestation. The security criteria in the ',
      { text: '(d)', code: true },
      ' series are real and are listed below, but they test defined capabilities rather than the operating security of a deployment. For that side of the picture, see the ',
      { text: 'HIPAA Compliance Center', to: '/hipaa-compliant-ehr/' },
      ' and the ',
      { text: 'Salesforce security layer', to: '/salesforce-data-security/' },
      ' beneath Elixir.',
    ],
    [
      { text: 'Certification also carries continuing obligations.', strong: true },
      ' A certified developer is subject to the program’s Conditions and Maintenance of Certification, which include publishing API documentation openly, submitting an annual real world testing plan and results report, attestation requirements, and the information blocking condition. Those obligations sit with the developer, which is to say with us. The documents they produce are published on this page rather than supplied on request.',
    ],
  ],
};

const INCLUDED = 'Included in the contract. No additional costs or fees.';
const criterion = (code, name, description) => ({ code, name, description, fees: INCLUDED });

export const ecmCriteria = {
  id: 'criteria',
  eyebrow: 'The record',
  title: 'Elixir’s Certified Criteria Under 45 CFR 170.315',
  description:
    'Twenty-one criteria, grouped as the regulation groups them. The third column is the cost and fee disclosure required of certified developers, stated per criterion. Nothing in this table is optional disclosure; it is published because the program requires it.',
  columns: ['Criterion', 'Capability certified', 'Costs and fees'],
  groups: [
    {
      title: 'Clinical capabilities',
      code: '170.315(a)',
      note: 'Recording and managing clinical information in the record.',
      caption:
        'Criteria certified in the “clinical capabilities” group, each with the capability certified and the costs and fees that apply to it.',
      rows: [
        criterion('(a)(1)', 'Computerized provider order entry — medications', 'A user can record, change and access medication orders.'),
        criterion('(a)(5)', 'Demographics', 'A user can record each of a patient’s race, ethnicity, sex and preferred language.'),
        criterion('(a)(14)', 'Implantable device list', 'Unique device identifiers can be recorded for a patient’s implantable devices.'),
      ],
    },
    {
      title: 'Care coordination and export',
      code: '170.315(b)',
      note: 'Moving a patient’s information out of the system in a standard form.',
      caption:
        'Criteria certified in the “care coordination and export” group, each with the capability certified and the costs and fees that apply to it.',
      rows: [
        criterion(
          '(b)(1)',
          'Transitions of care',
          'Generation of a Consolidated CDA Continuity of Care Document and Referral Note for the ambulatory setting.',
        ),
        criterion(
          '(b)(10)',
          'Electronic health information export',
          'Timely creation of an export file containing all of a single patient’s electronic health information stored by the certified product.',
        ),
      ],
    },
    {
      title: 'Privacy and security',
      code: '170.315(d)',
      note: 'The eleven security criteria, certified as a set.',
      caption:
        'Criteria certified in the “privacy and security” group, each with the capability certified and the costs and fees that apply to it.',
      rows: [
        criterion(
          '(d)(1)',
          'Authentication, access control, authorization',
          'Users are authenticated and permitted access is established before health information can be read or changed.',
        ),
        criterion(
          '(d)(2)',
          'Auditable events and tamper resistance',
          'Actions on electronic health information are recorded. For each permissible action the audit log records date and time, patient identification, user identification, type of action, and identification of the patient data accessed. The log also records audit log status and encryption status.',
        ),
        criterion('(d)(3)', 'Audit report(s)', 'Audit information is available to users and can be sorted by user, event time and event type.'),
        criterion(
          '(d)(4)',
          'Amendments',
          'An accepted amendment can be appended to the record, and a denied amendment request recorded along with the denial, with a link indicating the location of the amendment.',
        ),
        criterion(
          '(d)(5)',
          'Automatic access time-out',
          'An authorized user configures a defined period of inactivity after which access times out automatically.',
        ),
        criterion('(d)(6)', 'Emergency access', 'Emergency access to health information is enabled for a limited, identified set of users.'),
        criterion(
          '(d)(7)',
          'End-user device encryption',
          'Electronic health information is not stored locally on the end-user device. Certified under the alternative that applies to products which do not write health information to the device.',
        ),
        criterion(
          '(d)(8)',
          'Integrity',
          'The product can generate a hash over a message containing health information, and can validate the message digest of health information it receives.',
        ),
        criterion(
          '(d)(9)',
          'Trusted connection',
          'Transport-level security is implemented, establishing a trusted connection in accordance with the standards at §170.210(a)(2) and §170.210(c)(2).',
        ),
        criterion(
          '(d)(12)',
          'Encrypt authentication credentials',
          'The developer makes an attestation as to the method by which authentication credentials are encrypted.',
        ),
        criterion('(d)(13)', 'Multi-factor authentication', 'The developer makes an attestation as to the use of multi-factor authentication.'),
      ],
    },
    {
      title: 'Design, process and API',
      code: '170.315(g)',
      note: 'How the product is designed, tested and documented, and how applications reach it.',
      caption:
        'Criteria certified in the “design, process and api” group, each with the capability certified and the costs and fees that apply to it.',
      rows: [
        criterion(
          '(g)(3)',
          'Safety-enhanced design',
          'The NISTIR 7741 user-centered design process is applied during design and development for the capabilities to which the criterion applies.',
        ),
        criterion(
          '(g)(4)',
          'Quality management system',
          'A quality management system is identified for the development, testing, implementation and maintenance of each certified capability.',
        ),
        criterion(
          '(g)(5)',
          'Accessibility-centered design',
          'The developer identifies, for each certified capability, any accessibility-centered design standard applied.',
        ),
        criterion(
          '(g)(6)',
          'Consolidated CDA creation performance',
          'A C-CDA file can be created in accordance with the HL7 C-CDA Release 2.1 implementation guide for each document template.',
        ),
        criterion(
          '(g)(7)',
          'Application access — patient selection',
          'Published API documentation covering syntax, function names, required and optional parameters and their data types, return variables and their types and structures, exceptions, and exception-handling methods and their returns.',
        ),
      ],
    },
  ],
  disclosure: {
    title: 'Costs and limitations disclosure',
    intro:
      'Elixir is licensed as a web-based solution under a contractual agreement covering the functionality set out in the contract. The following fee types apply:',
    items: [
      'A one-time implementation fee for the functionality set out in the contract.',
      'Annual recurring fees for support and hosting.',
      'An additional one-time fee for data import or migration, where the client requires it.',
    ],
    outro:
      'Beyond those, the certified capabilities listed above are included in the contract and carry no additional costs or fees. Known material limitations: the certified capabilities depend on the relied-upon software named above — Salesforce, NewCrop and EMR Direct — and the scope of certification is the criteria listed above and no others.',
  },
};

export const ecmRwt = {
  id: 'rwt',
  eyebrow: 'Conditions of certification',
  title: 'Real World Testing: Plan and Results',
  description:
    'Real world testing is an annual Condition and Maintenance of Certification requirement for Health IT Modules certified to certain interoperability criteria. The developer submits a plan before the testing year and a results report after it, and both are public. Ours are below.',
  // The PDFs were not supplied. Set `href` to the file's URL and the button becomes a real download link;
  // until then it renders as an inert (aria-disabled) button rather than a fake link.
  downloads: [
    {
      tone: 'rose',
      icon: icon(planIcon, 18, 23),
      format: 'PDF · Plan',
      title: 'Real World Testing Plan 2025',
      text: [
        'The measures, care settings and methodology submitted for the 2025 testing year. Plan Report ID Number ',
        { text: '20241003mir', code: true },
        '.',
      ],
      label: 'Download the plan (PDF)',
      href: null,
    },
    {
      tone: 'lavender',
      icon: icon(reportIcon, 18, 23),
      format: 'PDF · Results',
      title: 'Real World Testing Results Report CY 2025',
      text: 'The outcome of the 2025 testing year against the plan: what was measured, what the measurements showed, and any non-conformities or challenges encountered.',
      label: 'Download the results (PDF)',
      href: null,
    },
  ],
  note: 'The authoritative record for any certified product is the Certified Health IT Product List, which is maintained by the certification program rather than by the developer. Elixir’s listing can be found there by searching the certificate number above.',
};

export const ecmDocumentation = {
  id: 'documentation',
  eyebrow: 'Published documentation',
  title: 'The Documents Certification Requires Us to Publish',
  description:
    'Certification is not only a test that was passed once. It carries continuing obligations to publish, openly and without preconditions, the documentation a customer or an integrator would otherwise have to ask for. Each of these is a separate published artifact rather than a marketing page, and each has its own permanent address.',
  cards: [
    {
      code: '170.315(g)(7)',
      title: 'API Developer Portal',
      to: '/onc-certification/api-developer-portal/',
      text: 'The complete business and technical API documentation: OAuth 2.0 authentication, fourteen FHIR-formatted resource endpoints, the C-CDA all-data request, HTTP status codes and exception handling, software requirements and terms of use.',
      meta: 'Published with no registration, no form and no agreement, because the API Condition of Certification requires any person to be able to reach it directly.',
    },
    {
      code: '170.315(b)(10)',
      title: 'Patient EHI Export',
      to: '/onc-certification/patient-ehi-export/',
      text: 'The format documentation for the electronic health information export — the file a customer can generate containing all of a single patient’s electronic health information held by the certified product.',
    },
    {
      code: '170.315(d)(13)',
      title: 'Multi-Factor Authentication',
      to: '/onc-certification/onc-mfa-use-cases/',
      text: 'The authentication use cases supported by Elixir, which the criterion requires the developer to attest to — direct login, single sign-on, API access, authenticator applications, hardware security keys, one-time passwords and source-IP restrictions.',
    },
  ],
  note: [
    'Real world testing plans and results are published ',
    { text: 'above', href: '#rwt' },
    '. Together these are the documents a security reviewer, an integration engineer or a procurement team would otherwise have to request — which is the point of publishing them.',
  ],
};

export const ecmVerify = {
  id: 'verify',
  eyebrow: 'For evaluators',
  title: 'How to Verify Any of This Independently',
  description:
    'Everything on this page is verifiable without asking us, which is the point of publishing it. If you are putting together a vendor evaluation, these are the checks worth making — of any vendor, not only this one.',
  cards: [
    {
      title: 'Check the product list, not the website',
      text: 'The Certified Health IT Product List is the authoritative record. Search the certificate number and confirm the product, version, criteria and status there rather than taking a vendor page at face value.',
    },
    {
      title: 'Match the criteria to your program',
      text: 'Ask which criteria your federal or state program actually requires, then read them off the list. A certified product can be certified to criteria that do not include the one you need.',
    },
    {
      title: 'Read the real world testing results',
      text: 'The results report says what was measured and what the measurements showed. It is the one document in the set that reports outcomes rather than intentions.',
    },
    {
      title: 'Ask about the relied-upon software',
      text: 'Where certification relies on third-party software, that dependency is part of what you are buying. Confirm what each component does and what happens if one changes.',
    },
    {
      title: 'Separate certification from security',
      text: 'Certification is not a security attestation. Ask for the security documentation and the Business Associate Agreement separately, and read them separately.',
    },
    {
      title: 'Confirm the version',
      text: 'Certification attaches to a named product and version. Confirm that the version being quoted to you is the version on the listing.',
    },
  ],
};

export const ecmCta = {
  eyebrow: 'For evaluation teams',
  title: 'Certification is the floor, not the argument',
  description:
    'A certified product tells you what was tested. Whether it fits your programs is a separate question, and a better one. We are happy to walk the certified criteria against your requirements and tell you plainly where Elixir does and does not reach.',
  cta: { label: 'Talk to Us', to: '/request-demo/' },
  secondaryCta: { label: 'Interoperability (FHIR/HL7)', to: '/healthcare-interoperability/' },
  related: [
    { label: 'HIPAA Compliance Center', to: '/hipaa-compliant-ehr/' },
    { label: 'Salesforce Security Layer', to: '/salesforce-data-security/' },
    { label: 'NAATP', to: '/naatp/' },
  ],
};
