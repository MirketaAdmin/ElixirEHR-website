// HIPAA Compliance Center (/hipaa-compliant-ehr), Compliance & Security. Copy is verbatim from the
// supplied "HIPAA Compliance Center.html"; do not reword it — the page is a compliance
// representation (see the editorial notes in that file before changing any claim).
// Links: the source's /compliance-security/… URLs point at pages that are not all built. ONC
// Certification goes to the Elixir Certified Module page (certification details, certified criteria
// and real world testing); Salesforce Security Layer and Interoperability are not built, so their
// names render as plain text until they are.

const oncCertification = '/onc-certification/elixir-certified-module/';

export const hipaaHero = {
  currentPage: 'HIPAA Compliance Center',
  pill: 'Compliance & Security · HIPAA',
  titleLines: ['HIPAA Compliance Center:', 'Shared Responsibility, Agreements and Safeguards'],
  lede: [
    'In a cloud-based electronic health record, HIPAA responsibility is divided between the platform, the application vendor and the covered entity. This page sets out where each boundary falls, what Elixir commits to contractually, and which obligations remain with your organization.',
  ],
  primaryCta: { label: 'Talk to Us', to: '/request-demo/' },
  secondaryCta: { label: 'Business Associate Agreements', href: '#agreements' },
  statementsLabel: 'How HIPAA responsibility is divided',
  statements: [
    {
      who: 'The platform',
      text: 'Physical and infrastructure security, platform patching, availability, and the attestations covering the underlying services.',
      note: 'Security of the platform.',
    },
    {
      who: 'Elixir',
      text: 'The application and its data model, the security capabilities delivered in the product, our workforce and subcontractors, and the Business Associate Agreement we sign with you.',
      note: 'Security of the application.',
    },
    {
      who: 'Your organization',
      text: 'Risk analysis, user provisioning, profiles and permissions, field-level and record-level access, session policy, workforce training, and review of audit records.',
      note: 'Security on the platform.',
      highlight: true,
    },
  ],
  caption:
    'The obligations in the third of these cannot be transferred to a vendor under the Security Rule, whatever a vendor undertakes to deliver.',
};

export const hipaaStrip = [
  {
    title: 'A defined boundary',
    text: 'Responsibility allocated explicitly between the platform, Elixir and your organization, and stated rather than implied.',
  },
  {
    title: 'Business Associate Agreement',
    text: 'Executed with every customer whose protected health information we access, with a defined breach notification period.',
  },
  {
    title: 'Independently verifiable',
    text: 'Our certification is published on the federal Certified Health IT Product List and can be confirmed without reference to us.',
  },
  {
    title: 'Documented, not asserted',
    text: 'Where a control is the customer’s responsibility, this page says so rather than implying coverage we do not provide.',
  },
];

export const hipaaCertification = {
  id: 'certification',
  eyebrow: 'A common misconception',
  title: 'HIPAA Certification Does Not Exist: What to Verify Instead',
  kicker:
    'Procurement teams frequently ask for evidence of HIPAA certification. No such evidence exists, and understanding why changes what is worth asking for.',
  callout: {
    title: 'Useful questions for a vendor review',
    items: [
      'Which Business Associate Agreements exist, and who is party to each?',
      'What is the vendor’s breach notification period, in days?',
      'Is a current subcontractor list available on request?',
      'Which security responsibilities remain with the customer?',
      'Where is the certification listed, and can it be verified independently?',
    ],
  },
  paragraphs: [
    [
      { text: 'No federal body certifies HIPAA compliance.', strong: true },
      ' The Department of Health and Human Services does not certify, endorse or approve any product, service or organization as HIPAA compliant. There is no accrediting authority, no registry and no government-issued certificate. The Office for Civil Rights has published guidance addressing marketing claims that suggest otherwise. Certificates issued by private companies carry no regulatory weight.',
    ],
    [
      { text: 'Compliance attaches to an organization, not to a product.', strong: true },
      ' The Security Rule places obligations on covered entities and business associates — risk analysis, workforce training, access management, incident response and contingency planning. Software can support those obligations and can be contractually bound in relation to them. It cannot hold them on a customer’s behalf.',
    ],
    [
      { text: 'What can be verified is certification under the ONC Health IT Certification Program.', strong: true },
      ' That program tests a product against published criteria through an accredited testing laboratory, and the result is listed publicly on the Certified Health IT Product List. It is narrower in scope than HIPAA and is not a substitute for it, but it is independently checkable. Elixir’s certification, the criteria it covers and our real world testing obligations are set out on the ',
      { text: 'ONC Certification', to: oncCertification },
      ' page.',
    ],
  ],
};

export const hipaaAgreements = {
  id: 'agreements',
  eyebrow: 'Agreements',
  title: 'Business Associate Agreements: Understanding the Two Contracts',
  description:
    'On a cloud platform, two Business Associate Agreements apply and they cover different parties and different services. The distinction is frequently misunderstood in vendor security questionnaires.',
  columns: [
    {
      label: 'Agreement one',
      title: 'Your organization and the platform provider',
      items: [
        'Your organization holds the platform subscription and executes a Business Associate Agreement directly with the platform provider',
        'It covers the named platform services your environment uses, and only those services',
        'Certain services fall outside that coverage, including several analytics and artificial intelligence features',
        [{ text: 'Elixir is not a party to this agreement', strong: true }],
      ],
    },
    {
      label: 'Agreement two',
      title: 'Your organization and Elixir',
      items: [
        'Covers our access to protected health information during implementation, support and any managed services',
        'Establishes our breach notification obligation to you and the applicable period',
        'Commits us to agreements with any subcontractor handling your information on our behalf',
      ],
    },
    {
      label: 'For your review file',
      title: 'What we provide on request',
      items: [
        'An executed Business Associate Agreement',
        'A current subcontractor list',
        'Confirmation of the platform services the product operates within',
        'Our certification details for independent verification',
      ],
    },
  ],
  caption:
    'Service coverage lists maintained by cloud platform providers are revised periodically. We review our position against the published list, and we recommend confirming the current coverage applicable to your own environment directly with the platform provider.',
};

export const hipaaRegulatory = {
  eyebrow: 'Regulatory position',
  title: 'What Is Currently in Force',
  description: 'Three points are commonly reported inaccurately in this area. The position as at October 2026 is set out below.',
  cards: [
    {
      title: 'The proposed Security Rule revision is not in effect',
      paragraphs: [
        'In January 2025 the Department of Health and Human Services proposed a comprehensive revision of the HIPAA Security Rule. The proposal would remove the distinction between required and addressable implementation specifications and introduce explicit requirements for multi-factor authentication, encryption at rest and in transit, asset inventories and network mapping, network segmentation, periodic vulnerability scanning and penetration testing, and procedures to restore critical systems within seventy-two hours. For business associates it would add an annual written verification to each covered entity that required technical safeguards are deployed.',
        [
          { text: 'The proposal has not been finalized.', strong: true },
          ' As at October 2026 it remains at proposed stage and the federal regulatory agenda lists it as a long-term action with final action projected for mid-2027. The existing Security Rule continues to apply. We regard the proposal as a reasonable indication of the direction of the baseline and are developing toward it, but it does not currently impose obligations.',
        ],
      ],
    },
    {
      title: 'Two requirements that did take effect',
      paragraphs: [
        [
          { text: '42 CFR Part 2 became subject to civil enforcement on 16 February 2026.', strong: true },
          ' The confidentiality rule governing substance use disorder records now permits a single patient consent covering treatment, payment and health care operations; the HIPAA Breach Notification Rule applies to Part 2 records, with a separate federal reporting route; and civil enforcement mechanisms apply for the first time. Civil penalty amounts for Part 2 are set separately from those under HIPAA and are lower.',
        ],
        [
          { text: 'Texas requires records to be maintained within the United States.', strong: true },
          ' Legislation effective September 2025 requires electronic health records containing patient information to be physically maintained in the United States or a United States territory, expressly extending to third parties, subcontracted computing facilities and cloud providers, and applying to data stored from January 2026 irrespective of when the record was created. For any cloud-hosted product this is an architectural requirement: environments, backup regions and subprocessors must be US-resident and capable of being evidenced.',
        ],
      ],
    },
  ],
  caption: [
    { text: 'Two further points relevant to a vendor review.', strong: true },
    ' Federal enforcement has operated a dedicated risk analysis initiative since late 2024, and each numbered action under it cites the same deficiency: the organization had not conducted an accurate and thorough analysis of risks to electronic protected health information. That obligation rests with the covered entity. Separately, several states operate breach notification periods shorter than the federal sixty days — Colorado, Washington and Texas each require notice within thirty — and the shorter period governs. A vendor notification commitment written to sixty days may leave a customer unable to meet a thirty-day state requirement, since the customer’s period begins when the vendor’s ends.',
  ],
};

export const hipaaRelated = {
  eyebrow: 'Elsewhere in this section',
  title: 'Compliance and Security at Elixir',
  description: 'This page addresses HIPAA specifically. The related areas below are covered in their own detail.',
  cards: [
    {
      title: 'ONC Certification',
      to: oncCertification,
      text: 'The criteria Elixir is certified to under the ONC Health IT Certification Program, our Certified Health IT Product List entry, and our real world testing obligations.',
    },
    {
      title: 'Salesforce Security Layer',
      text: 'The platform controls beneath Elixir: infrastructure security, the access control model, available encryption and audit capabilities, and the attestations covering the underlying services.',
    },
    {
      title: 'NAATP',
      to: '/naatp/',
      text: 'Our position in relation to the National Association of Addiction Treatment Providers and the standards relevant to addiction treatment organizations.',
    },
    {
      title: 'Interoperability',
      text: 'FHIR and HL7 exchange, the application programming interfaces Elixir supports, and the information blocking requirements applicable to certified health IT developers.',
    },
    {
      title: 'Responsible AI',
      to: '/responsible-ai-in-healthcare/',
      text: 'How artificial intelligence capabilities are governed within Elixir, including the limits we place on their use in clinical contexts.',
    },
    {
      title: 'Patient Portal',
      to: '/patient-portal-software/',
      text: 'Patient-facing access, including the authentication and disclosure controls applicable to information released to patients and authorized representatives.',
    },
  ],
};

export const hipaaFaq = {
  eyebrow: 'Questions',
  title: 'HIPAA Compliance: Frequently Asked Questions',
  description: 'Questions raised most often by compliance officers, privacy officers and security reviewers.',
  items: [
    {
      question: 'Is Elixir HIPAA compliant?',
      answer:
        'No software product can be. HIPAA compliance is a property of an organization — its risk analysis, workforce training, access reviews, policies and incident response — rather than of a system it licenses. What a vendor can offer is technical controls that support those obligations, a Business Associate Agreement that creates contractual commitments, and clear documentation of where the vendor’s responsibility ends and the customer’s begins. This page sets out all three.',
    },
    {
      question: 'Is there a HIPAA certification for software?',
      answer: [
        'There is not. The Department of Health and Human Services does not certify, endorse or approve any product, service or organization as HIPAA compliant, and the Office for Civil Rights has published guidance on marketing claims that imply otherwise. There is no accrediting body and no registry. The certification that does exist in health IT is the ONC Health IT Certification Program, which tests a product against published criteria through an accredited laboratory and lists the result publicly. Elixir’s certification is covered on our ',
        { text: 'ONC Certification', to: oncCertification },
        ' page.',
      ],
    },
    {
      question: 'Who signs the Business Associate Agreement?',
      answer:
        'Two separate agreements apply. Your organization holds the Salesforce subscription and signs a Business Associate Agreement directly with Salesforce covering the platform services your environment runs on; Elixir is not a party to that agreement. Separately, your organization signs a Business Associate Agreement with Elixir covering our access to protected health information during implementation, support and any managed services. We recommend confirming which agreements exist, and who is party to each, with any vendor operating on a cloud platform.',
    },
    {
      question: 'What are our responsibilities, and what are yours?',
      answer:
        'In summary: Elixir is responsible for the application, its data model, the security capabilities delivered in the product, our own workforce and subcontractors, and our contractual commitments to you. Your organization is responsible for the security risk analysis, user provisioning and deprovisioning, profiles and permissions, field-level and record-level access, multi-factor authentication and session policy, workforce training, and review of the audit records the system produces. The panel at the top of this page summarizes the division, and we are happy to go through it in detail for a specific deployment. None of those obligations can be transferred to a vendor under the Security Rule.',
    },
  ],
};

export const hipaaCta = {
  eyebrow: 'Compliance and security',
  title: 'Discuss your compliance requirements',
  description:
    'Contact us for our Business Associate Agreement, certification details, or to discuss how HIPAA responsibility is allocated in an Elixir deployment.',
  cta: { label: 'Talk to Us', to: '/request-demo/' },
  secondaryCta: { label: 'ONC Certification', to: oncCertification },
  related: [
    { label: 'Salesforce Security Layer' },
    { label: 'Interoperability' },
    { label: 'Behavioral Health', to: '/behavioral-health-ehr/' },
  ],
};
