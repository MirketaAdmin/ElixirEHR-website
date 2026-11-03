// Interoperability (FHIR/HL7) (/healthcare-interoperability), Compliance & Security. Copy is verbatim from
// the supplied "Interoperability.html"; do not reword it — this is the fastest-moving page in the section
// (see the editorial notes in that file: no version numbers, no deadlines, no unconfirmed IG, TEFCA or
// partner claims, and Elixir is certified to application access, not the standardized API criterion).
// Links: ONC Certification goes to the Elixir Certified Module page (certified criteria); the API
// Developer Portal is its own page under ONC Certification.

const oncCertification = '/onc-certification/elixir-certified-module/';

export const interopHero = {
  currentPage: 'Interoperability',
  pill: 'Compliance & Security · Interoperability',
  titleLines: ['Interoperability at Elixir:', 'FHIR APIs and HL7 Exchange'],
  lede: [
    'FHIR and HL7 v2 are routinely named together and do almost entirely different jobs. One is how applications and payers read your data through an API. The other is how your lab results and admission notifications have arrived every day for twenty years. A behavioral health organization needs both, and should expect a vendor to be clear about which is which.',
  ],
  primaryCta: { label: 'Talk to Us', to: '/request-demo/' },
  secondaryCta: { label: 'Information blocking', href: '#blocking' },
  statementsLabel: 'The three layers of interoperability',
  statements: [
    {
      who: 'HL7 v2',
      text: 'Message-based exchange with the systems around you. Lab orders and results, admission, discharge and transfer notifications, immunization and registry reporting. Unglamorous, and the layer most clinical days actually depend on.',
    },
    {
      who: 'FHIR',
      text: 'API-based access to discrete data. Elixir publishes FHIR-formatted resource endpoints and a C-CDA all-data request under the application access criterion it is certified to, with the documentation open to read before anyone signs anything.',
      highlight: true,
    },
    {
      who: 'The obligation',
      text: 'As a certified health IT developer, Elixir is bound by the information blocking Condition of Certification. That is a legal duty on us, not a feature we enable.',
    },
  ],
};

export const interopStrip = [
  {
    title: 'Both layers, not one',
    text: 'FHIR-formatted resource endpoints and C-CDA document exchange, alongside HL7 v2 interfaces for the systems that have always worked that way.',
  },
  {
    title: 'Certified, not asserted',
    text: 'Elixir’s certified criteria are listed publicly, criterion by criterion, so you can read what was tested rather than take a claim on trust.',
  },
  {
    title: 'Part 2 handled, not avoided',
    text: 'Substance use disorder records carry consent obligations that general interoperability guidance does not address. They are addressed here.',
  },
  {
    title: 'A duty we carry',
    text: 'Information blocking binds certified developers directly, with civil money penalties and public posting for those found in breach.',
  },
];

export const interopLayers = {
  id: 'layers',
  eyebrow: 'The distinction',
  title: 'FHIR and HL7 v2 Do Different Jobs. Both Still Matter.',
  description:
    'Vendor material tends to treat FHIR as the modern replacement for HL7 v2. In practice the two coexist, they solve different problems, and an organization that buys on FHIR alone will discover the gap during implementation.',
  cards: [
    {
      title: 'HL7 v2: the exchange that already runs your day',
      paragraphs: [
        'Message-based, point-to-point, and in production almost everywhere. Lab orders going out and results coming back. Admission, discharge and transfer notifications arriving from a hospital. Registry and immunization reporting going to a state.',
        'For a behavioral health or addiction treatment organization this is where the operational value sits. A toxicology result that lands in the chart as discrete data rather than a faxed PDF changes a clinical workflow. A discharge notification that arrives as an event rather than a phone call starts a transitional care clock. Neither requires FHIR.',
      ],
    },
    {
      title: 'FHIR: the API layer, and what to check',
      paragraphs: [
        'Resource-based and request-driven. An application asks for specific data and receives it as structured resources, rather than an interface being built for each counterparty.',
        [
          { text: 'Where Elixir sits.', strong: true },
          ' Elixir is certified for application access — patient selection, which is the criterion that governs published API documentation, and it publishes FHIR-formatted resource endpoints and a C-CDA all-data request on top of it. It is ',
          { text: 'not', italic: true },
          ' certified to the standardized API criterion, which is a separate criterion with its own US Core and SMART App Launch requirements. We say so plainly because the two are routinely conflated, and because the full criteria list is ',
          { text: 'published on our ONC Certification page', to: oncCertification },
          ' where anyone can check. If a federal program you participate in requires the standardized API criterion, raise it with us early rather than late.',
        ],
        [
          'The endpoints, authentication, error handling and terms are documented in full in the ',
          { text: 'API Developer Portal', to: '/onc-certification/api-developer-portal/' },
          ' — open to read, with no registration.',
        ],
      ],
    },
  ],
  topics: [
    {
      title: 'The data standard is USCDI v3',
      text: 'USCDI version 3 is the current baseline for certification criteria that reference it. Version 1 expired for Certification Program purposes at the start of 2026. Later versions exist and are available for voluntary adoption, but are not the required baseline.',
    },
    {
      title: 'Documents still travel as documents',
      text: 'Consolidated CDA remains how a summary of care actually moves at a transition, and Elixir is certified for transitions of care, C-CDA creation performance against the HL7 C-CDA Release 2.1 guide, and electronic health information export. API access and document exchange are complementary rather than alternatives.',
    },
    {
      title: 'Clinical content, not just transport',
      text: 'Moving a record is the easy half. Whether the receiving clinician can act on it depends on coded problems, medications, allergies and results — which is a data quality question, not a protocol one.',
    },
  ],
};

export const interopBlocking = {
  id: 'blocking',
  eyebrow: 'The obligation',
  title: 'Information Blocking Binds Us Directly, Not Only Our Customers',
  description:
    'Most coverage of information blocking addresses providers. The rules reach certified health IT developers separately, and the consequences differ materially.',
  // tone: 'alert' (red edge), 'note' (yellow edge) or 'good' (lime edge), as in the source.
  rows: [
    {
      tag: 'For developers',
      tone: 'alert',
      title: 'Civil money penalties of up to $1 million per violation',
      text: 'Developers of certified health IT, health information exchanges and health information networks are subject to civil money penalties enforced through the Office of Inspector General. That is a direct financial exposure on the vendor, assessed per violation.',
    },
    {
      tag: 'For providers',
      tone: 'note',
      title: 'Disincentives rather than penalties',
      text: 'Health care providers found to have committed information blocking face payment consequences instead — a reduced market basket update under the Medicare Promoting Interoperability Program, a zero score in the Promoting Interoperability performance category for clinicians, or ineligibility to participate in the Medicare Shared Savings Program for at least a year.',
    },
    {
      tag: 'Either way',
      tone: 'alert',
      title: 'Public posting',
      text: 'Actors found to have committed information blocking — providers, certified developers and networks alike — are posted publicly. For most organizations that is the consequence that matters more than the money.',
    },
    {
      tag: 'The conditions',
      tone: 'good',
      title: 'Information blocking is one of several Conditions of Certification',
      text: 'Alongside it sit assurances, communications, application programming interfaces, real world testing, attestations and the Insights condition. A certified developer must maintain all of them continuously, not demonstrate them once. Real world testing in particular runs on an annual cycle of published plans and published results.',
    },
  ],
  caption:
    'One provision worth knowing as a customer: the communications condition means we may not contractually restrict you from discussing our product’s usability, security, user experience, interoperability or costs. If a vendor asks you to sign something that does, that is itself a problem.',
};

export const interopPart2 = {
  id: 'part-2',
  eyebrow: 'Behavioral health',
  title: 'The Exceptions That Matter When Part 2 Records Are Involved',
  kicker: 'General interoperability guidance is written for a world where consent is not the central question. In addiction treatment it is.',
  callout: {
    title: 'The practical risk runs both ways',
    items: [
      [
        { text: 'Over-disclosing', strong: true },
        ' substance use disorder records without the consent the rules require is a confidentiality breach, now civilly enforceable.',
      ],
      [
        { text: 'Over-withholding', strong: true },
        ' — treating Part 2 as a reason to refuse exchange generally — risks being information blocking.',
      ],
      'The answer to both is the same: consent captured as data, so what may be released is a system determination rather than a judgment call made under time pressure.',
    ],
  },
  paragraphs: [
    [
      { text: 'The regulations anticipate this.', strong: true },
      ' Information blocking carries a defined set of exceptions, grouped into those covering a decision not to fulfill a request and those covering the manner in which a request is fulfilled. Among the first group are exceptions addressing privacy, security, preventing harm, infeasibility and health IT performance.',
    ],
    [
      { text: 'The privacy exception is the relevant one here.', strong: true },
      ' Where another law requires a consent or authorization that has not been obtained, declining to release is not automatically information blocking. That is the mechanism by which substance use disorder confidentiality and the information blocking rules coexist — but it is conditional, and relying on it requires that the condition genuinely applies and can be evidenced.',
    ],
    [
      { text: 'Which makes this an engineering question rather than a policy one.', strong: true },
      ' If consent status, scope, expiry and revocation live in the record as structured data, then whether a given disclosure is permitted can be determined consistently and shown afterwards. If consent lives in a scanned form, every request becomes an individual judgment, and neither answer — release or refuse — is defensible later.',
    ],
  ],
  caption: [
    'Part 2 became subject to civil enforcement in February 2026. The consent model, redisclosure rules and breach notification position are covered on the ',
    { text: 'HIPAA Compliance Center', to: '/hipaa-compliant-ehr/' },
    ', and the clinical workflow on our ',
    { text: 'substance use disorder EHR', to: '/addiction-treatment-emr/' },
    ' page.',
  ],
};

export const interopMovingParts = {
  id: 'moving-parts',
  eyebrow: 'The moving parts',
  title: 'What Is in Force, and What Is Still Proposed',
  description:
    'Interoperability regulation moves faster than almost anything else in health IT, and vendor material frequently reports proposals as though they were requirements. The position as at November 2026 is below.',
  columns: [
    {
      label: 'In force',
      title: 'Current obligations',
      items: [
        'USCDI version 3 as the certification baseline; version 1 expired at the start of 2026',
        'Standardized API support for the current US Core implementation guide and SMART App Launch specification',
        'Service base URLs published in a standardized format, at no charge',
        'Information blocking, with ten defined exceptions across three groups',
        'Updated payer data exchange standards, effective from October 2026',
      ],
    },
    {
      label: 'Running now',
      title: 'The Insights condition',
      items: [
        'The first data collection period for the Insights Condition of Certification runs across calendar year 2026',
        'First submission falls due in 2027',
        'It is a reporting obligation on certified developers rather than on customers',
        'Several enforcement discretion notices are currently active across certification criteria dates, attestations, real world testing and other requirements — so published deadlines should be checked against the current notices rather than assumed',
      ],
    },
    {
      label: 'Proposed only',
      title: 'Drug prior authorization',
      items: [
        'A proposed rule published in April 2026 would extend prior authorization interoperability requirements to drugs, with comments closed in June 2026',
        [
          { text: 'It has not been finalized.', strong: true },
          ' Anything described as a drug prior authorization requirement is not yet law',
        ],
        [
          'The ',
          { text: 'standards', italic: true },
          ' proposed alongside it were finalized separately through a payment rule and took effect in October 2026 — which is a distinction worth holding, because the two are routinely conflated',
        ],
      ],
    },
  ],
  caption:
    'Dates, standard versions and enforcement positions in this area change several times a year. We would encourage you to confirm anything load-bearing against the current rules rather than against any vendor’s summary, ours included.',
};

export const interopCta = {
  eyebrow: 'Integration planning',
  title: 'Which interfaces do you actually need?',
  description:
    'Most integration scope is settled by three questions: which labs you use, which hospitals discharge to you, and which payers you contract with. We would rather work through those than send you a standards list.',
  cta: { label: 'Talk to Us', to: '/request-demo/' },
  secondaryCta: { label: 'ONC Certification', to: oncCertification },
  related: [
    { label: 'HIPAA Compliance Center', to: '/hipaa-compliant-ehr/' },
    { label: 'Salesforce Security Layer', to: '/salesforce-data-security/' },
    { label: 'Care Coordination', to: '/care-coordination-software/' },
  ],
};
