// Salesforce Security Layer (/salesforce-data-security), Compliance & Security. Copy is verbatim from the
// supplied "Salesforce Security Layer.html"; do not reword it — the page describes a third party's
// platform and certified Elixir criteria (see the editorial notes in that file before changing any claim,
// and never add retention figures, encryption specifics or edition-specific statements).
// Links: ONC Certification goes to the Elixir Certified Module page (certification details and certified
// criteria).

const oncCertification = '/onc-certification/elixir-certified-module/';

export const sslHero = {
  currentPage: 'Salesforce Security Layer',
  pill: 'Compliance & Security · Platform',
  titleLines: ['The Salesforce Security Layer', 'Beneath Elixir'],
  lede: [
    'Elixir is a managed package running inside your own Salesforce organization. A substantial set of security controls is therefore inherited from the platform rather than built by us — and a substantial set remains yours to configure. This page sets out which is which, so a security review can be answered precisely.',
  ],
  primaryCta: { label: 'Talk to Us', to: '/request-demo/' },
  secondaryCta: { label: 'The three tiers', href: '#tiers' },
  statementsLabel: 'How Salesforce divides platform security controls',
  statements: [
    {
      who: 'Foundational',
      text: 'Protections built into the infrastructure and the platform, operating continuously. Nothing to enable, and nothing either of us configures.',
    },
    {
      who: 'Configurable',
      text: [
        'Multi-factor authentication, single sign-on, permission sets, login IP restrictions, login history and the Security Health Check. Available at no additional cost, and governed by ',
        { text: 'your', strong: true },
        ' policy.',
      ],
      highlight: true,
    },
    {
      who: 'Add-on',
      text: [
        'Shield, Security Center, Privacy Center, Data Mask and Seed, Archive, and Backup and Recover. Licensed separately by your organization from Salesforce. ',
        { text: 'Not included with Elixir.', strong: true },
      ],
    },
  ],
};

export const sslStrip = [
  {
    title: 'Inherited, not rebuilt',
    text: 'Infrastructure security, platform patching and availability come from the platform rather than from a vendor’s own data center.',
  },
  {
    title: 'Your identity, your policy',
    text: 'Single sign-on, multi-factor authentication and session policy are configured in your organization and governed by your rules.',
  },
  {
    title: 'Four layers of access',
    text: 'Organization, object, field and record. Access is granted rather than assumed, and is additive by design.',
  },
  {
    title: 'Audit you configure',
    text: 'Elixir tracks changes to the fields you choose, on the objects you choose — without depending on the platform’s field history cap or an add-on license.',
  },
];

export const sslTiers = {
  id: 'tiers',
  eyebrow: 'The model',
  title: 'What the Platform Provides, What You Configure, and What You Add',
  description:
    'Salesforce describes its own security controls in three tiers. The distinction matters in a security review, because the second and third tiers are decisions your organization makes rather than features that arrive switched on.',
  table: {
    caption: 'Platform security controls by tier, and who acts on each.',
    columns: ['Tier', 'What it covers', 'Who acts', 'Cost'],
    // `yours` marks the "Who acts" cells set in bold in the source.
    rows: [
      {
        tier: 'Foundational',
        covers:
          'Protections built into the infrastructure and platform, operating continuously in the background — physical security, platform patching, availability and the controls behind the platform’s own attestations',
        who: 'Salesforce',
        cost: 'Included',
      },
      {
        tier: 'Configurable',
        covers:
          'Multi-factor authentication, single sign-on, permission sets and least-privilege design, login IP restrictions enforced on profiles, login history reporting, and the Security Health Check dashboard',
        who: 'Your organization',
        yours: true,
        cost: 'No additional cost',
      },
      {
        tier: 'Add-on',
        covers: 'Shield, Security Center, Privacy Center, Data Mask and Seed, Archive, and Backup and Recover',
        who: 'Your organization',
        yours: true,
        cost: 'Licensed separately',
      },
    ],
  },
  paragraphs: [
    [
      { text: 'The second tier is where most real exposure sits.', strong: true },
      ' It is also the tier most often assumed to be someone else’s responsibility. Multi-factor authentication is a platform capability, but whether it is enforced is your policy decision. Permission sets are a platform feature, but who holds which one is your configuration. Login history is produced automatically; whether anyone reviews it is an operational question no vendor can answer for you.',
    ],
    [
      { text: 'The third tier is not included with Elixir.', strong: true },
      ' Shield and the other add-on products are licensed by your organization directly from Salesforce. Elixir operates on the platform’s standard security model. If your organization licenses Shield, Elixir works alongside it — but it should be planned during implementation rather than added afterwards, because encrypting a field changes how some platform features behave.',
    ],
    [
      { text: 'What Elixir is responsible for', strong: true },
      ' is the application layer between the two: our managed package, its data model, the default permission and sharing design we ship, and our own organization’s controls. The full allocation of HIPAA safeguards across platform, vendor and covered entity is set out on the ',
      { text: 'HIPAA Compliance Center', to: '/hipaa-compliant-ehr/' },
      '.',
    ],
  ],
  callouts: [
    {
      title: 'A correction worth having',
      items: [
        [
          { text: 'Encryption is not an access control.', strong: true },
          ' Shield Platform Encryption protects data at rest; it does not decide who may see a field. A user whose field-level security grants access reads the value in plaintext regardless.',
        ],
        [
          'Keeping information from a user is a job for ',
          { text: 'profiles, permission sets, field-level security and the sharing model', strong: true },
          ' — not for encryption.',
        ],
        ['Any vendor answering “is it encrypted?” as though it settled “who can see it?” has answered a different question.'],
      ],
    },
    {
      title: 'Two encryption answers that are certified',
      items: [
        [
          { text: 'In transit.', strong: true },
          ' Elixir is certified for trusted connection, which tests that transport-level security is established in accordance with the standards the certification criteria name.',
        ],
        [
          { text: 'On the device.', strong: true },
          ' Elixir is certified for end-user device encryption under the alternative that applies to products which do not write health information to the device — electronic health information is not stored locally on the end-user machine. For a security reviewer worried about a lost laptop, that is a better answer than disk encryption.',
        ],
        ['At rest on the platform, Elixir operates on the standard Salesforce security model, as set out above.'],
      ],
    },
  ],
};

export const sslAccess = {
  eyebrow: 'Access',
  title: 'How Access Is Controlled: Four Layers, Granted Rather Than Assumed',
  description:
    'The platform enforces access through four distinct layers. The model is grant-based, which means access is additive: a user has what has been granted and nothing else, and each layer narrows what the one above it permits.',
  layers: [
    {
      label: 'Layer 1 · Organization',
      title: 'Who may log in at all',
      text: 'User provisioning and deactivation, password policy, session settings, multi-factor authentication, and login IP restrictions. The outermost boundary, and the one that fails when a leaver keeps access.',
    },
    {
      label: 'Layer 2 · Object',
      title: 'Which kinds of record a user may work with',
      text: 'Profiles and permission sets determine whether a user can read, create, edit or delete a given type of record at all — a care plan, a claim, a consent.',
    },
    {
      label: 'Layer 3 · Field',
      title: 'Which fields within those records',
      text: 'Field-level security controls visibility down to the individual field. This is the layer that keeps a sensitive value out of view for a user who legitimately needs the rest of the record.',
    },
    {
      label: 'Layer 4 · Record',
      title: 'Which specific records',
      text: 'The sharing model decides which individual records a user can reach — their own patients, their team’s, their site’s or their program’s. For behavioral health this is the layer that carries the most weight.',
    },
  ],
  caption: [
    'Elixir ships a default model across these four layers. Your administrators adapt it, and that adaptation is a clinical and governance decision as much as a technical one — which is why we would rather walk through it during implementation than hand over a default and call it configured. Three capabilities within this model are certified and tested rather than configured by you: authentication and access control, automatic access time-out after a period of inactivity you define, and emergency access for a limited, identified set of users. They are listed on the ',
    { text: 'ONC Certification', to: oncCertification },
    ' page with the rest.',
  ],
};

export const sslAudit = {
  eyebrow: 'Audit and retention',
  title: 'What the Standard Platform Retains, and Where the Limits Are',
  description:
    'Audit retention is the question security reviewers ask that vendors most often answer imprecisely. There are three separate layers here — what the platform retains, what Elixir adds on top of it, and what an add-on license extends — and they are worth keeping apart.',
  // `ours` marks Elixir's own column (highlighted in the source).
  columns: [
    {
      title: 'On the standard platform',
      paragraphs: [
        'Setup Audit Trail records administrative and configuration changes and is retained for a defined period measured in months rather than years.',
        'Field history tracking is available on a limited number of fields per object, with its own retention period. That cap is the constraint most organizations run into first.',
      ],
    },
    {
      title: 'In Elixir, independently of the platform',
      ours: true,
      paragraphs: [
        [
          { text: 'Elixir provides its own configurable field-level change tracking.', strong: true },
          ' You choose which fields on which objects are tracked, and changes are recorded with the action taken — created, updated or deleted.',
        ],
        'This matters because it does not depend on the standard field history cap, and it does not require an add-on license. Where a field needs to be auditable for a clinical, consent or billing reason, it can be tracked because you decided it should be.',
        [
          'Alongside this, Elixir is certified for auditable events and tamper resistance, and for audit reports. For each permissible action the audit log records ',
          { text: 'date and time, patient identification, user identification, type of action, and identification of the patient data accessed', strong: true },
          ', together with the audit log status and the encryption status. Audit information is available to users and sortable by user, event time and event type. Those are tested at certification rather than described in a datasheet — see ',
          { text: 'ONC Certification', to: oncCertification },
          '.',
        ],
      ],
    },
    {
      title: 'With add-on licensing',
      paragraphs: [
        'Shield extends the platform layer materially. Event Monitoring provides event-level visibility with longer retention, and Field Audit Trail extends field history retention well beyond the standard period. Both require your organization to license them from Salesforce.',
        'We would not quote you a retention figure for either. The published figures vary by component and by license, and a vendor repeating a number from a marketing page is not a reliable basis for a retention policy. Confirm the position for your own subscription.',
      ],
    },
  ],
  callout: {
    title: 'Questions worth putting to Salesforce rather than to us',
    items: [
      [
        { text: 'Which services are covered by your Business Associate Agreement', strong: true },
        ', and does your intended use fall inside that list? Some services, including several analytics and artificial intelligence features, sit outside it.',
      ],
      [
        { text: 'What are the data residency commitments for your organization', strong: true },
        ', and do they cover processing and support access as well as storage at rest?',
      ],
      [
        { text: 'Which attestations and certifications apply to your specific services and infrastructure?', strong: true },
        ' Scope varies, and a certification held for one deployment model does not automatically apply to another.',
      ],
      [
        { text: 'What encryption is applied by default', strong: true },
        ', and what does your agreement require of you? The obligation and the default are not always the same thing.',
      ],
    ],
  },
};

export const sslAttribution = {
  eyebrow: 'Attribution',
  title: 'Platform Attestations Belong to the Platform',
  kicker: 'A distinction that matters more in procurement than it appears to in marketing.',
  paragraphs: [
    [
      { text: 'Salesforce maintains a broad set of attestations and certifications', strong: true },
      ' covering the platform, including SOC reports, ISO standards and others. Scope varies by service and by infrastructure, and the reports are obtained by you from Salesforce under your own agreement with them. They are the platform’s, not ours, and we will not present them as evidence about Elixir.',
    ],
    [
      { text: 'What is ours.', strong: true },
      ' Elixir is certified under the ONC Health IT Certification Program, certified by an ONC-Authorized Certification Body on 21 July 2023 under certificate number 15.05.05.3165.MRKT.01.00.1.230721. That record is public and independently verifiable, and the eleven privacy and security criteria it covers are ',
      { text: 'listed in full', to: oncCertification },
      '. Mirketa, which develops and operates Elixir, maintains a SOC 2 Type II report, available to customers and prospects under a non-disclosure agreement. Elixir is distributed through the Salesforce AppExchange and has passed its Security Review.',
    ],
    [
      { text: 'What the Security Review is, and is not.', strong: true },
      ' It is an assessment by Salesforce of a partner application, covering code scanning and testing before distribution. It is a point-in-time review of the application. It is not an assessment of HIPAA compliance, it is not a certification of our organization, and Salesforce does not guarantee the security of partner applications. We mention it because it is real, and we describe its limits because a security reviewer will ask about them.',
    ],
  ],
};

export const sslCta = {
  eyebrow: 'For your security review',
  title: 'Reviewing the platform beneath the application',
  description:
    'We can walk your security team through the access model, the default permission design we ship, and the division of responsibility between the platform, Elixir and your organization.',
  cta: { label: 'Talk to Us', to: '/request-demo/' },
  secondaryCta: { label: 'HIPAA Compliance Center', to: '/hipaa-compliant-ehr/' },
  related: [
    { label: 'ONC Certification', to: oncCertification },
    { label: 'Interoperability', to: '/healthcare-interoperability/' },
    { label: 'Responsible AI', to: '/responsible-ai-in-healthcare/' },
  ],
};
