// NAATP (/naatp), Compliance & Security. Copy is verbatim from the supplied "NAATP.html"; do not
// reword it — see the editorial notes in that file (NAATP membership is not a credential) before
// changing any claim. The two Affiliate Directory links open in a new tab; remove them if the
// listing ever moves or lapses rather than leaving them to 404.
// Links: ONC Certification goes to the Elixir Certified Module page (certification details,
// certified criteria and real world testing); the other /compliance-security/… and /solutions/…
// URLs of the source map to the site's existing routes.

const directoryUrl = 'https://www.naatp.org/resources/addiction-industry-affiliates-directory/49603/elixir-ehr';

export const naatpHero = {
  currentPage: 'NAATP',
  pill: 'Compliance & Security · NAATP',
  titleLines: ['NAATP and Elixir:', 'Built for Addiction Treatment Providers'],
  lede: [
    'Elixir is an Affiliate member of the National Association of Addiction Treatment Providers, listed in its ',
    { text: 'Affiliate Directory', external: directoryUrl },
    ' as a vendor serving the association’s provider membership. This page sets out what that signifies, what it does not, and where the field’s quality agenda meets the record.',
  ],
  primaryCta: { label: 'Talk to Us', to: '/request-demo/' },
  secondaryCta: { label: 'The quality agenda', href: '#quality' },
  statementsLabel: 'What NAATP participation does and does not mean',
  statements: [
    {
      who: 'What it is',
      text: 'Affiliate membership: a vendor listed in the association’s Affiliate Directory as offering services to its provider membership, under the EHR/EMR, billing, software and technology categories.',
    },
    {
      who: 'What it is not',
      text: 'An accreditation, a certification or an endorsement. NAATP is a trade association. It does not accredit treatment organizations, and it does not assess or certify vendor software.',
    },
    {
      who: 'Where it connects',
      text: 'The association’s quality assurance and outcomes work depends on data that only a system of record can produce reliably. That is where a platform is genuinely relevant.',
      highlight: true,
    },
  ],
};

export const naatpStrip = [
  {
    title: 'Purpose-built for the field',
    text: 'Designed for addiction treatment, substance use disorder and residential care rather than adapted from a general ambulatory record.',
  },
  {
    title: 'One system of record',
    text: 'Clinical, administrative and financial work on one platform, rather than point solutions stitched together.',
  },
  {
    title: 'Ethics your team can evidence',
    text: 'Admissions and referral provenance recorded as data, so marketing conduct is auditable rather than asserted.',
  },
  {
    title: 'Outcomes as a by-product',
    text: 'Instruments scheduled, scores captured as discrete values, follow-up owned — so measurement is not a separate project.',
  },
];

export const naatpMeaning = {
  id: 'meaning',
  eyebrow: 'Being precise',
  title: 'What NAATP Membership Means, and What It Does Not',
  kicker:
    'Trade association membership is routinely displayed as though it were a credential. It is not one, and a procurement team will know the difference.',
  callout: {
    title: 'What to ask for instead',
    items: [
      'The ONC certification listing, which is public and independently verifiable.',
      'The security documentation behind it, including the Business Associate Agreement.',
      'Evidence of the capabilities your programs actually need — level-of-care documentation, Part 2 consent, census, outcomes capture.',
    ],
  },
  paragraphs: [
    [
      { text: 'NAATP is a trade association, not an accrediting body.', strong: true },
      ' It does not accredit treatment organizations and it does not certify software. Accreditation in this field comes from bodies such as CARF or The Joint Commission. Certification for health IT comes from the ONC Health IT Certification Program, which is covered on our ',
      { text: 'ONC Certification', to: '/onc-certification/elixir-certified-module/' },
      ' page.',
    ],
    [
      { text: 'The Code of Ethics binds the association’s members — which is to say, our customers.', strong: true },
      ' NAATP requires members to adhere to its Membership Terms and Conditions, including its Code of Ethics, attested at application and at each renewal. The Code sets conduct standards across management, facilities, marketing and treatment, and the association may deny membership, require corrective action or revoke membership where it determines a member has not adhered to it. That obligation sits with the treatment organization, not with its software supplier — but whether the organization can ',
      { text: 'evidence', italic: true },
      ' its conduct depends a great deal on what its system of record captures.',
    ],
    [
      { text: 'So the honest summary is this.', strong: true },
      ' Affiliate listing tells you Elixir is built for this field and is visible to the organizations in it. It does not tell you the software has been assessed against a standard by anyone. For that, ask for the ONC certification listing, which is public and verifiable, and the ',
      { text: 'security and compliance documentation', to: '/hipaa-compliant-ehr/' },
      ' behind it.',
    ],
  ],
};

export const naatpQuality = {
  id: 'quality',
  eyebrow: 'Where it connects',
  title: 'The Field’s Quality Agenda Depends on Data Somebody Has to Capture',
  description:
    'NAATP has invested substantially in quality assurance and outcomes measurement for addiction treatment, publishing guidance and toolkits for the field. Every initiative of that kind runs into the same operational wall: the measures only exist if the record produces them.',
  cards: [
    {
      title: 'Outcomes measurement',
      paragraphs: [
        'An outcomes program asks for standardized instruments administered on a schedule, scored consistently, and followed up after discharge — the point at which most addiction treatment data collection stops.',
        'In Elixir, instruments are scheduled and prompted rather than remembered. Scores are captured as discrete values with their dates, not as narrative. Post-discharge follow-up is a tracked obligation with an owner and a due date. And the resulting dataset aggregates without anyone rekeying it into a spreadsheet at quarter end.',
      ],
    },
    {
      title: 'Ethical admissions and marketing conduct',
      paragraphs: [
        'Marketing conduct is among the areas the Code of Ethics addresses, and it is the area where this field has faced the most scrutiny. It is also the one where a system of record has a direct part to play rather than a rhetorical one.',
        'Where admissions, referral source, lead provenance and the contact history all live in the same record as the clinical chart, the question of how a patient arrived has a documented answer. That is a very different position from reconstructing it later from a separate marketing system.',
      ],
    },
  ],
  capabilities: [
    {
      title: 'Level-of-care documentation',
      text: 'Multi-dimensional assessment and placement documentation with the clinician’s rationale attached, so a placement decision can be explained rather than just recorded.',
    },
    {
      title: '42 CFR Part 2 consent',
      text: [
        'Granular consent and disclosure tracking for substance use disorder records, with the trail that survives an audit. Covered on the ',
        { text: 'HIPAA Compliance Center', to: '/hipaa-compliant-ehr/' },
        '.',
      ],
    },
    {
      title: 'Census and bed management',
      text: 'Residential census, room assignment, observation rounds and discharge planning in the same record as the clinical work and the claim.',
    },
  ],
  caption: [
    'Our Affiliate listing is public and can be checked directly: ',
    { text: 'Elixir EHR in the NAATP Affiliate Directory', external: directoryUrl },
    '. Full capability detail sits on our ',
    { text: 'substance use disorder EHR', to: '/addiction-treatment-emr/' },
    ' and ',
    { text: 'behavioral health', to: '/behavioral-health-ehr/' },
    ' pages.',
  ],
};

export const naatpCta = {
  eyebrow: 'For addiction treatment organizations',
  title: 'Built for this field, not adapted to it',
  description:
    'If you are evaluating an EHR for a treatment organization, we can walk through level-of-care documentation, Part 2 consent, census management and outcomes capture against your own programs.',
  cta: { label: 'Talk to Us', to: '/request-demo/' },
  secondaryCta: { label: 'Substance Use Disorder EHR', to: '/addiction-treatment-emr/' },
  related: [
    { label: 'ONC Certification', to: '/onc-certification/elixir-certified-module/' },
    { label: 'HIPAA Compliance Center', to: '/hipaa-compliant-ehr/' },
    { label: 'Behavioral Health', to: '/behavioral-health-ehr/' },
  ],
};
