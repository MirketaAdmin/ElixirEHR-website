// Professional and Institutional Claim Preparation page content (Figma frame of the same name).
// Copy is reproduced verbatim.

// Same Figma "missing image" hero box as the Denial Management frame (pixel-identical export).
import heroMediaPlaceholder from '../assets/denial-management/hero-media-placeholder.png';
import checkCircleIcon from '../assets/claim-preparation/icon-check-circle.png';
import badgeCheckIcon from '../assets/claim-preparation/icon-badge-check.png';
import checkCircleSmallIcon from '../assets/claim-preparation/icon-check-circle-small.png';
import translateIcon from '../assets/claim-preparation/icon-translate.png';
import editDocIcon from '../assets/claim-preparation/icon-edit-doc.png';
import refreshIcon from '../assets/claim-preparation/icon-refresh.png';
import badgeCheckSmallIcon from '../assets/claim-preparation/icon-badge-check-small.png';
import baaIcon from '../assets/claim-preparation/icon-baa.png';
import encryptionIcon from '../assets/claim-preparation/icon-encryption.png';
import accessIcon from '../assets/claim-preparation/icon-access.png';
import auditIcon from '../assets/claim-preparation/icon-audit.png';
import certifiedIcon from '../assets/claim-preparation/icon-certified.png';
import orgHospitalsIcon from '../assets/claim-preparation/icon-org-hospitals.png';
import orgPhysicianGroupsIcon from '../assets/claim-preparation/icon-org-physician-groups.png';
import orgAmbulatoryIcon from '../assets/claim-preparation/icon-org-ambulatory.png';
import orgBillingCompaniesIcon from '../assets/claim-preparation/icon-org-billing-companies.png';

export const pcHero = {
  currentPage: 'Professional and Institutional Claim Preparation',
  titleLines: ['Professional &', 'Institutional Claims', 'Software Built on', 'Salesforce'],
  // The whole title is white in this frame (no accent).
  titleAccent: [],
  description: 'Prepare, scrub, submit, and manage CMS-1500 and UB-04 claims directly in Salesforce.',
  // No destinations in the frame: the demo CTA uses /request-demo like the other pages; the
  // integrations CTA scrolls to this page's clearinghouse section.
  primaryCta: { label: 'Book a claim demo', to: '/request-demo' },
  secondaryCta: { label: 'See clearinghouse integrations', href: '#clearinghouse-connectivity' },
  media: {
    src: heroMediaPlaceholder,
    alt: 'Image placeholder',
  },
};

const checkCircle = { src: checkCircleIcon, width: 19, height: 19 };

export const pcPlatform = {
  title: 'A Salesforce-native revenue cycle management platform, not a bolt-on',
  description:
    'Most billing systems sit beside your CRM and hand data back and forth through nightly files. Elixir is built on the Salesforce platform itself, so a patient, an encounter, a charge, a claim and a payment are all standard records governed by the same sharing rules, validation rules, reports and audit history.',
  icon: checkCircle,
  points: [
    'Claims, charges, remittances and denials are native Salesforce objects your admins can extend without a vendor ticket',
    'Works alongside Salesforce Health Cloud, Service Cloud and Experience Cloud patient portals',
    'Field history, Shield encryption and event monitoring apply to protected health information automatically',
    'Flows, approvals and Agentforce automation can act on billing data the day you turn them on',
    'One login, one permission model and one reporting layer across front office, clinical and revenue cycle teams',
  ],
  frame: { width: 560, height: 469, tone: 'surface' },
};

export const pcClaimFlow = {
  title: 'How a claim moves through Elixir',
  description: 'Six stages, each one a record state your team can report on and automate against.',
  stages: [
    {
      title: 'Verify',
      tag: { label: '270 / 271', tone: 'lime' },
      text: 'Coverage confirmed and benefits stored on the encounter. Copays, deductibles, and pre-authorization status populated in real-time.',
    },
    {
      title: 'Capture',
      tag: { label: 'Encounters', tone: 'white' },
      text: 'Charges coded from the encounter with modifiers and units. Automated mapping between clinical notes and revenue items.',
    },
    {
      title: 'Scrub',
      tag: { label: 'NCCI Edits', tone: 'lime' },
      text: 'NCCI, payer and custom edits run before release. Strict checking prevents premature transmission of unbillable or conflict claims.',
    },
    {
      title: 'Submit',
      tag: { label: '837P / 837I', tone: 'lime' },
      text: 'Claim batched and transmitted to the clearinghouse directly via integrated SFTP or REST APIs without manual file drops.',
    },
    {
      title: 'Track',
      tag: { label: '999 / 277CA', tone: 'white' },
      text: 'Acknowledgements and status posted to the claim. Instant notification of payer acceptance or clearinghouse-level rejection.',
    },
    {
      title: 'Post',
      tag: { label: '835 ERA', tone: 'lime' },
      text: 'Remittance auto-posted, denials routed to worklists. Balances balance down to the line item; remaining amounts cascade to secondary.',
    },
  ],
  // Figures as shown in the frame (see DESIGN-SYSTEM.md open questions on sources).
  stats: [
    {
      value: '98%+',
      label: 'First-pass clean claim rate',
      text: 'Targeted across Elixir healthcare clients and institutional facilities.',
    },
    {
      value: 'Up to 90%',
      label: 'Avoidable payer denials',
      text: 'Considered completely preventable industry-wide with native validation rules.',
    },
    {
      value: 'Nearly 60%',
      label: 'Raw claim error rate',
      text: 'Medical claims that contain structural or modifier errors before scrubbing.',
    },
  ],
};

const badgeCheck = { src: badgeCheckIcon, width: 19, height: 18 };

export const pcClaimTypes = {
  title: 'Professional claims on CMS-1500 and institutional claims on UB-04, from one workspace',
  description:
    'Billing teams rarely handle only one claim type. A health system bills facility charges on UB-04 while its employed physicians bill professional charges on CMS-1500 for the same encounter. Elixir prepares both from shared demographic, insurance and authorization data, then applies the edits that belong to each form.',
  icon: badgeCheck,
  types: [
    {
      badge: 'CMS-1500 (02/12) • ANSI X12 837P',
      title: 'Professional claim preparation',
      points: [
        {
          lead: 'CPT, HCPCS and ICD-10-CM capture:',
          text: 'Built-in modifier validation (-25, -59, -78) and clinical diagnosis pointer logic (1-12 pointers).',
        },
        {
          lead: 'Provider attribution & taxonomy:',
          text: 'Place of service, rendering, billing, referring and supervising provider NPIs with taxonomy cross-checks.',
        },
        {
          lead: 'Drug administration:',
          text: 'NDC, unit and dosage reporting for specialty pharmaceuticals administered in office.',
        },
        {
          lead: 'Fee schedules & pricing:',
          text: 'Pricing by payer, contract and locality with automated allowed-amount variance flags.',
        },
        {
          lead: 'Specialty billing logic:',
          text: 'Anesthesia time units, global period tracking and automatic split-billing rules.',
        },
      ],
      frame: { width: 560, height: 369, tone: 'surface' },
    },
    {
      badge: 'UB-04 / CMS-1450 • ANSI X12 837I',
      title: 'Institutional claim preparation',
      points: [
        {
          lead: 'Revenue code pairing:',
          text: 'Type of bill, revenue code to HCPCS pairing and units reconciliation across facility lines.',
        },
        {
          lead: 'Condition & occurrence tracking:',
          text: 'Value, condition and occurrence codes with span dates validated against the stay.',
        },
        {
          lead: 'Inpatient & outpatient DRG:',
          text: 'DRG assignment, present-on-admission (POA) indicators and patient discharge status.',
        },
        {
          lead: 'Facility provider attribution:',
          text: 'Attending, operating and other operating provider reporting with taxonomy mapping.',
        },
        {
          lead: 'Claim frequency management:',
          text: 'Interim, late-charge, replacement and void claim handling with correct frequency codes.',
        },
      ],
      frame: { width: 560, height: 388, tone: 'surface' },
    },
  ],
};

export const pcScrubbing = {
  title: 'Automated claim scrubbing that stops denials before submission',
  description:
    'Prevent uncollectible write-offs and back-and-forth payer requests. Elixir executes high-performance validation logic before claims ever reach clearinghouse queues.',
  rules: [
    {
      title: 'CMS NCCI procedure-to-procedure & MUE',
      text: 'Identifies bundled service lines and excessive units of service (Medically Unlikely Edits) automatically based on CMS quarterly updates.',
    },
    {
      title: 'LCD/NCD medical necessity verification',
      text: 'Cross-checks diagnosis codes with procedure combinations to verify Local & National Coverage Determinations prior to release.',
    },
    {
      title: 'Payer-specific billing rules & dates checked',
      text: 'Applies custom timely filing limits, modifier requirements by commercial payer, and chronological service span dates.',
    },
    {
      title: 'Blocking edits vs. informational warnings',
      text: 'Hard stops prevent flawed transmission, while actionable alerts inform billers of opportunities for charge optimization.',
    },
  ],
  frame: { width: 560, height: 525, tone: 'white' },
};

export const pcRejectionPrediction = {
  title: 'AI claim rejection prediction that scores the claim before you send it',
  description:
    'Move from reactive denial management to preventative intelligence. Elixir AI analyzes millions of adjudicated claims to score rejection likelihood before claims reach the clearinghouse.',
  icon: { src: checkCircleSmallIcon, width: 17, height: 17 },
  points: [
    {
      lead: 'Rejection probability scoring:',
      text: 'Machine learning models evaluate every line item against historical payer remittance behaviors.',
    },
    {
      lead: 'Root-cause issue identification:',
      text: 'Uncovers subtle mismatches that static rule engines miss, such as payer-specific policy idiosyncrasies.',
    },
    {
      lead: 'Prescriptive recommendations:',
      text: 'Actionable recommendations written as plain instructions that any biller or coder can execute immediately.',
    },
    {
      lead: 'Granular line-item diagnostics:',
      text: 'Flags the exact field, diagnosis pointer, or missing modifier causing the elevated risk score.',
    },
    {
      lead: 'Re-scored on demand:',
      text: 'Corrected claims re-evaluate instantly within Salesforce so staff have confidence before final batching.',
    },
  ],
  frame: { width: 560, height: 423, tone: 'surface' },
};

export const pcEdiResolution = {
  title: 'Claim rejection and EDI error resolution on the claim record itself',
  // The EDI segment is drawn as an inline code chip.
  description: {
    before:
      "When a clearinghouse or payer rejects an EDI transaction, your team shouldn't have to decode cryptic ANSI X12 segments like ",
    code: 'STC*A3:23:40',
    after: '. Elixir translates clearinghouse responses directly into human-readable Salesforce fields.',
  },
  items: [
    {
      icon: { src: translateIcon, width: 21, height: 19 },
      text: '277CA & 999 translation: Raw clearinghouse EDI response segments translated into clear English explanations directly in the claim view.',
    },
    {
      icon: { src: editDocIcon, width: 18, height: 19 },
      text: 'In-line field correction: Fix subscriber IDs, NPI numbers, or diagnosis codes right on the record without jumping between disparate systems.',
    },
    {
      icon: { src: refreshIcon, width: 17, height: 20 },
      text: 'One-click claim resubmission: Automatically generates clean replacement 837 transactions and queues them for the next transmission cycle.',
    },
  ],
  frame: { width: 560, height: 516, tone: 'surface' },
};

export const pcEraPosting = {
  title: 'ERA payment posting that reconciles the 835 to the penny',
  description:
    'Manual remittance entry slows down cash flow and introduces human error. Elixir ingests 835 Electronic Remittance Advice files, automatically posting contractual adjustments, copays, coinsurance, and deductibles down to specific service line items.',
  frame: { width: 543, height: 369, tone: 'white' },
};

export const pcClearinghouse = {
  title: 'Integrated clearinghouse connectivity for electronic claims submission',
  description:
    'Connect seamlessly to national clearinghouses without managing local SFTP folders or brittle third-party sync utilities. Claims flow directly between Salesforce and payers with end-to-end encryption.',
  transactions: {
    label: 'Full spectrum ANSI X12 transactions supported:',
    items: [
      '270 / 271 Eligibility',
      '276 / 277 Claim Status',
      '277CA Acknowledgement',
      '999 / TA1 Functional Ack',
      '837P Professional',
      '837I Institutional',
      '835 Remittance Advice',
      '275 Additional Info / Attachments',
    ],
  },
  dayToDay: {
    title: 'What that means day to day:',
    icon: checkCircle,
    points: [
      'Automated batch scheduling sends claims at peak submission windows without staff intervention.',
      'Real-time clearinghouse status updates post back to Salesforce records within seconds of receipt.',
      'Clearinghouse portal logins become obsolete as all error resolution occurs within standard views.',
    ],
  },
  cards: [
    {
      title: 'Claim.MD',
      badge: { label: 'Live Out of the Box', tone: 'dark', dot: true },
      description:
        'Direct pre-configured API integration. Transmit claims, pull acknowledgements, and retrieve electronic remittances with zero custom middleware or SFTP maintenance.',
      icon: { src: badgeCheckSmallIcon, width: 17, height: 16 },
      points: [
        'Sub-second 270/271 real-time eligibility checks',
        'Immediate 277CA status posting to Salesforce claim object',
        'Automated continuous 835 ERA delivery and reconciliation',
      ],
      footer: { label: 'Ready for immediate deployment', tone: 'lime' },
    },
    {
      title: 'Every other clearinghouse',
      badge: { label: 'Fully Supported', tone: 'light' },
      description:
        'Connect to your existing clearinghouse contracts or internal EDI gateway using standard secure SFTP or REST protocols.',
      tags: [
        { label: 'Change Healthcare' },
        { label: 'Availity' },
        { label: 'Waystar' },
        { label: 'Office Ally' },
        { label: 'TriZetto' },
        { label: 'Inovalon' },
        { label: 'Experian Health' },
        { label: 'Your own EDI gateway', highlighted: true },
      ],
      footer: { label: 'Flexible integration architecture', tone: 'muted' },
    },
  ],
};

export const pcHipaa = {
  title: 'HIPAA compliant medical billing software for US healthcare providers',
  description:
    "Built on Salesforce's enterprise-grade infrastructure, Elixir protects Protected Health Information (PHI) and meets the stringent compliance mandates expected by hospital compliance officers and chief information security officers.",
  // Compliance statements reproduced verbatim from the frame (see DESIGN-SYSTEM.md open questions).
  items: [
    {
      icon: { src: baaIcon, width: 15, height: 19 },
      lead: 'BAA covered:',
      text: 'Comprehensive Business Associate Agreements executed across all Salesforce and clearinghouse infrastructure.',
    },
    {
      icon: { src: encryptionIcon, width: 15, height: 20 },
      lead: 'Salesforce Shield encryption:',
      text: 'PHI encrypted at rest and in transit using customer-managed keys (AES-256).',
    },
    {
      icon: { src: accessIcon, width: 15, height: 19 },
      lead: 'Role-based access control:',
      text: 'Fine-grained field-level security, record sharing rules, and permission sets.',
    },
    {
      icon: { src: auditIcon, width: 18, height: 15 },
      lead: 'Immutable audit trails:',
      text: 'Comprehensive Field History Tracking logs all changes to clinical and billing data.',
    },
    {
      icon: { src: certifiedIcon, width: 15, height: 19 },
      lead: 'HIPAA, SOC 1 Type II, SOC 2 Type II:',
      text: 'Hosted on HIPAA-compliant, HITRUST CSF certified Salesforce cloud infrastructure.',
    },
  ],
  frame: { width: 560, height: 401, tone: 'white' },
};

export const pcOrganizations = {
  badge: 'Industry Tailored',
  title: 'Built for the organizations that bill both facility and provider charges',
  // The card links have no destinations in the frame; they point at Revenue Cycle Management.
  cards: [
    {
      icon: { src: orgHospitalsIcon, width: 18, height: 18 },
      title: 'Hospitals and health systems',
      text: 'Coordinate UB-04 institutional charges for acute and outpatient stays alongside CMS-1500 claims for affiliated physician networks from a single Salesforce console.',
      link: { label: 'Split-Billing Optimized', to: '/revenue-cycle-management' },
    },
    {
      icon: { src: orgPhysicianGroupsIcon, width: 24, height: 12 },
      title: 'Physician groups and specialty practices',
      text: 'Manage high-volume CMS-1500 claims with automatic fee schedule lookups, complex surgical modifiers, and instant eligibility verification at front-desk check-in.',
      link: { label: 'High-Volume Automation', to: '/revenue-cycle-management' },
    },
    {
      icon: { src: orgAmbulatoryIcon, width: 20, height: 20 },
      title: 'Ambulatory surgery and behavioral health centers',
      text: 'Seamlessly handle ASC facility fees, per-diem behavioral health charges, and professional surgeon invoices generated during multi-specialty encounters.',
      link: { label: 'ASC & RTC Ready', to: '/revenue-cycle-management' },
    },
    {
      icon: { src: orgBillingCompaniesIcon, width: 20, height: 18 },
      title: 'Billing companies and RCM outsourcers',
      text: 'Multi-client tenancy in a single Salesforce environment. Segregate payer rules, custom scrubs, and reporting dashboards across all contracted provider clients.',
      link: { label: 'Multi-Client Scaling', to: '/revenue-cycle-management' },
    },
  ],
};

export const pcCtaBand = {
  title: 'See your own claims prepared in Salesforce',
  description:
    'Bring a sample professional and institutional claim to a working session and we will walk it through scrubbing, submission and remittance on your payer mix.',
  // Destinations are not in the frame: demo CTAs use /request-demo; Contact Sales uses Contact Us.
  cta: { label: 'Take A Test Drive', to: '/request-demo' },
  secondaryCta: { label: 'Contact Sales', to: '/contact-us' },
};
