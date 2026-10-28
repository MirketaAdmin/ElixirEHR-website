// Electronic Visit Verification page content (Figma frame of the same name). Copy is reproduced
// verbatim, including its British spellings ("programme", "organisation").

// Same Figma "missing image" hero box as the Denial Management frame (pixel-identical export).
import heroMedia from '../assets/electronic-visit-verification/hero-media.png';
import iconServiceType from '../assets/electronic-visit-verification/icon-element-service-type.png';
import iconRecipient from '../assets/electronic-visit-verification/icon-element-recipient.png';
import iconDate from '../assets/electronic-visit-verification/icon-element-date.png';
import iconLocation from '../assets/electronic-visit-verification/icon-element-location.png';
import iconProvider from '../assets/electronic-visit-verification/icon-element-provider.png';
import iconTime from '../assets/electronic-visit-verification/icon-element-time.png';
import iconInfo from '../assets/electronic-visit-verification/icon-info.png';
import iconApproachOneRecord from '../assets/electronic-visit-verification/icon-approach-one-record.png';
import iconApproachExceptions from '../assets/electronic-visit-verification/icon-approach-exceptions.png';
import iconApproachOriginalTimes from '../assets/electronic-visit-verification/icon-approach-original-times.png';
import iconApproachBilling from '../assets/electronic-visit-verification/icon-approach-billing.png';

// External sources cited in the frame (current Medicaid.gov locations).
const sources = {
  medicaidEvv: {
    label: 'Medicaid.gov, Electronic Visit Verification',
    href: 'https://www.medicaid.gov/medicaid/home-community-based-services/home-community-based-services-guidance-additional-resources/electronic-visit-verification',
  },
  cmsCuresAct: {
    label: 'CMS, EVV Requirements in the 21st Century Cures Act (PDF)',
    href: 'https://www.medicaid.gov/sites/default/files/2019-12/evv-requirements-intensive.pdf',
  },
};

// The two EVV topic pages the frame links to are not built; routes/aliases.js redirects these
// planned URLs to the existing EVV and Caregiver Mobile App pages.
const topicPages = {
  homeCare: { label: 'Home care and EVV', to: '/home-care-and-evv' },
  fieldCaregiver: { label: 'Field caregiver experience', to: '/field-caregiver-experience' },
};

export const evvHero = {
  currentPage: 'Electronic Visit Verification',
  titleLines: ['Electronic Visit', 'Verification for Medicaid', 'Home Care'],
  // The whole title is white in this frame (no accent).
  titleAccent: [],
  description:
    'EVV is federally required, but it is administered state by state — and the model your state chose determines whether you get to pick a vendor at all. This is what the rule actually requires, where a verified visit still fails to bill, and how Elixir keeps verification attached to the authorization and the claim.',
  // No destination in the frame for the demo CTA: /request-demo, as on the other pages. The second
  // CTA scrolls to this page's "Explore EVV in Elixir" section.
  primaryCta: { label: 'Request a Demo', to: '/request-demo' },
  secondaryCta: { label: 'Explore EVV in Elixir', href: '#explore-evv' },
  media: {
    src: heroMedia,
    alt: 'Caregiver showing an older client a visit check-in on her phone at home',
  },
};

export const evvHighlights = [
  { title: 'Six data elements', text: 'What the Cures Act requires every EVV system to verify.' },
  { title: 'Five state models', text: 'Whether you choose your vendor depends on your state.' },
  { title: 'Submitted ≠ billable', text: 'Four milestones sit between a visit and a payable claim.' },
  { title: 'Connected to the claim', text: 'Verification attached to the authorization, not a separate silo.' },
];

export { sources as evvSources, topicPages as evvTopicPages };

export const evvRequirement = {
  eyebrow: 'The requirement',
  title: 'What Electronic Visit Verification is, and why Medicaid requires it',
  paragraphs: [
    'Electronic Visit Verification is a system that electronically confirms a home visit actually happened as billed. It was made a federal requirement by section 12006 of the 21st Century Cures Act, which directed states to require EVV for Medicaid personal care services and home health care services delivered in the home.',
    [
      'The deadlines have passed. States had to require EVV for personal care services by ',
      { text: '1 January 2020', strong: true },
      ' and for home health care services by ',
      { text: '1 January 2023', strong: true },
      '. A state that made a good-faith effort and hit unavoidable delays could apply for an extension; otherwise, non-compliance carries incremental reductions to federal medical assistance percentage funding of up to one percent.',
    ],
    'Those penalties land on the state, not on you. But they are the reason your state passes the requirement down as a condition of payment — and why a visit that cannot be billed is, in practice, a visit that cannot be billed.',
  ],
  source: sources.medicaidEvv,
  aside: {
    title: 'What EVV is not',
    items: [
      'It is not a GPS tracking product. Location is one of six required elements, not the point of the system.',
      'It is not a national standard. The federal rule sets the floor; every state builds its own programme on top.',
      'It is not proof of payment. Acceptance by an aggregator confirms the visit record was received, not that the claim will be paid.',
      'It is not only a compliance obligation. The same visit data determines whether the work you delivered turns into revenue.',
    ],
  },
};

// Element icons are 32×32 Figma crops that keep the glyph's offset inside the card corner.
export const evvElements = {
  eyebrow: 'The rule',
  title: 'The six EVV data elements every Medicaid visit must capture',
  description:
    'The Cures Act names exactly six things an EVV system has to verify. Everything else a vendor offers sits on top of these. If a system cannot produce all six for a given visit, that visit is not verified.',
  items: [
    {
      title: 'Type of service performed',
      text: 'Which service was delivered, matched to the service type on the authorization.',
      icon: iconServiceType,
    },
    {
      title: 'Individual receiving the service',
      text: "The client or patient the visit was for, tied to the person's record.",
      icon: iconRecipient,
    },
    { title: 'Date of the service', text: 'The calendar date the visit took place.', icon: iconDate },
    {
      title: 'Location of service delivery',
      text: 'Where the service was delivered. This is the element most people mean when they say "EVV", and it is one of six.',
      icon: iconLocation,
    },
    {
      title: 'Individual providing the service',
      text: 'The caregiver who delivered the care, authenticated rather than typed in.',
      icon: iconProvider,
    },
    {
      title: 'Time the service begins and ends',
      text: 'Check-in and check-out, which together establish the duration billed.',
      icon: iconTime,
    },
  ],
  source: sources.cmsCuresAct,
};

export const evvModels = {
  eyebrow: 'State variation',
  title: 'EVV models: how your state decides which system you use',
  description:
    'This is the question to settle before you evaluate any EVV vendor, because in two of these models the decision is not yours to make. CMS describes five implementation models, and states choose independently — so a multi-state provider can be operating under several at once.',
  items: [
    {
      title: 'Provider Choice',
      text: 'Providers select and fund their own EVV system, usually from a state-approved list.',
      ask: 'what are the approval and interface requirements?',
    },
    {
      title: 'Open Vendor',
      text: "The state offers a default system, and providers or plans may use an alternative that meets the state's interface standards.",
      ask: 'what does the alternative system have to send, and how often?',
    },
    {
      title: 'Managed Care Plan Choice',
      text: 'The managed care organisation selects and funds the EVV vendor rather than the state.',
      ask: 'do your plans differ from one another?',
    },
    {
      title: 'State Mandated External Vendor',
      text: 'One contracted vendor is required for every provider in the state.',
      // Line breaks as set in the frame ("own" sits on a line of its own there).
      ask: 'how does your\nown\nsystem feed it?',
    },
    {
      title: 'State Mandated In-House',
      text: 'The state builds and runs its own EVV platform, which providers must use.',
      ask: 'what are the submission windows and correction rules?',
    },
  ],
  callout: {
    icon: iconInfo,
    text: 'In a mandated model you do not choose the EVV system. You choose what feeds it — and whether your own record stays intact when it does.',
  },
  source: sources.cmsCuresAct,
  sourceNote: 'Model names follow CMS terminology; individual states use their own labels.',
};

export const evvScope = {
  eyebrow: 'Scope',
  title: 'Which services require EVV: personal care and home health',
  description:
    'The federal requirement covers Medicaid-funded personal care services and home health care services that are delivered in the home and require an in-home visit by a provider. Beyond that floor, states extend scope in their own ways — which is why "do we need EVV for this programme?" is a state question rather than a federal one.',
  columns: ['Service area', 'Federal position', 'What to confirm for your state'],
  rows: [
    {
      area: 'Personal care services',
      federal: 'EVV required since 1 January 2020.',
      confirm: 'Which waiver and state plan programmes are in scope, and the applicable aggregator arrangement.',
    },
    {
      area: 'Home health care services',
      federal: 'EVV required since 1 January 2023.',
      confirm: 'Whether skilled visits follow the same submission rules as personal care.',
    },
    {
      area: 'Home and community-based waiver services',
      federal: 'In scope where the service meets the personal care or home health definition.',
      confirm: 'Programme-by-programme scope, since waiver service definitions vary widely.',
    },
    {
      area: 'Self-directed and family caregiver models',
      federal: 'Not exempt from EVV by virtue of being self-directed.',
      confirm: 'How your state expects verification to work when the caregiver is a family member.',
    },
    {
      area: 'Services delivered outside the home',
      federal: 'The federal requirement centres on in-home visits.',
      confirm: 'Whether your state requires verification for community-based delivery too.',
    },
  ],
  note: 'Scope varies by state and programme. Elixir confirms supported states, programmes and aggregator arrangements per implementation rather than claiming blanket coverage.',
};

export const evvBreakpoints = {
  eyebrow: 'The operational reality',
  title: 'Where EVV actually breaks: the visit that cannot be billed',
  paragraphs: [
    'Almost nobody fails EVV because a caregiver did not show up. Visits fail because something between the front door and the claim did not line up — and because most EVV systems are a separate application that knows nothing about the authorization.',
    'These are the five that recur.',
  ],
  items: [
    {
      tag: 'Connectivity',
      title: 'The visit happened where there was no signal',
      text: 'The care was delivered and documented, but the record sat on the device. Whether it survives depends on whether the original check-in and check-out times are preserved on upload, or quietly replaced by the sync time.',
    },
    {
      tag: 'Authorization',
      title: 'The units had already run out',
      text: 'The visit verifies perfectly and still cannot be billed, because the authorization was exhausted or expired before the date of service. An EVV system that cannot see the authorization cannot warn anyone.',
    },
    {
      tag: 'Exception',
      title: 'A manual entry never got approved',
      text: 'Missed check-ins and corrections are normal in home care. What matters is whether each one routes to a supervisor with a reason code and an audit trail, or gets edited quietly in a spreadsheet.',
    },
    {
      tag: 'Location',
      title: 'The visit fell outside the geofence',
      text: 'A client was at a day programme, or the address on file is wrong, or GPS accuracy was poor. A flagged visit is a review item, not a fraud finding — but it has to reach someone before the billing window closes.',
    },
    {
      tag: 'Aggregator',
      title: 'The aggregator rejected the record',
      text: 'A rejection returns the visit for correction. It does not erase the original visit and it does not mean payment was denied. Teams lose money here by treating submission as completion.',
    },
  ],
  milestones: {
    title: 'Submission is not acceptance, and acceptance is not payment',
    points: [
      'Saved on the device is not the same as synchronized to the server.',
      'Synchronized is not the same as internally verified.',
      'Internally verified is not the same as accepted by the aggregator.',
      'Accepted is not the same as eligible for billing, which still depends on authorization and documentation checks.',
    ],
    steps: ['Caregiver submitted', 'Synchronized', 'Internally verified', 'Aggregator accepted', 'Eligible for billing'],
  },
};

export const evvApproach = {
  eyebrow: 'The Elixir approach',
  title: 'EVV connected to the care record, not parked beside it',
  description:
    'Most home care organisations run EVV in one system and care, authorizations and billing in another, then spend the month reconciling the two. Elixir treats the verified visit as part of the same record as the authorization it draws down and the claim it produces.',
  items: [
    {
      title: 'One record, not two systems',
      text: 'The visit, the client, the care plan, the authorization and the claim are the same record. Nothing is exported to be reconciled later.',
      icon: iconApproachOneRecord,
    },
    {
      title: 'Exceptions routed, not edited',
      text: 'Missed check-ins, manual entries and geofence flags go to a supervisor with a reason code, and the correction keeps its review history.',
      icon: iconApproachExceptions,
    },
    {
      title: 'Original times preserved',
      text: 'Records captured offline keep their original check-in and check-out times when they upload, and retries do not create duplicate visits.',
      icon: iconApproachOriginalTimes,
    },
    {
      title: 'Verification feeds billing',
      text: 'Verification status, authorization and documentation checks are all part of claim readiness, rather than something discovered after a denial.',
      icon: iconApproachBilling,
    },
  ],
};

export const evvExplore = {
  eyebrow: 'Go deeper',
  title: 'Explore EVV in Elixir',
  description: 'Two views of the same workflow — the platform side and the caregiver side.',
  items: [
    {
      label: 'Platform',
      title: 'Home care and EVV',
      text: 'How verification, geofencing, exception management and aggregator connectivity sit alongside the EHR, care plans, authorizations and revenue cycle.',
      points: [
        'Mobile check-in and check-out with configurable geofencing',
        'Supervisor exception workflows and audit history',
        'Aggregator submission status, including rejections returned for correction',
        'Verification status as part of claim readiness',
      ],
      link: topicPages.homeCare,
      accent: 'lime',
    },
    {
      label: 'The field',
      title: 'Field caregiver experience',
      text: "The same visit from the caregiver's phone: preparation, arrival, documentation, escalation, departure and what happens after submission.",
      points: [
        'A six-step tour of a real home visit',
        'Offline documentation with visible sync status',
        'What happens when a visit conflicts with an updated schedule',
        'How a caregiver knows a record was actually received',
      ],
      link: topicPages.fieldCaregiver,
      accent: 'purple',
    },
  ],
};

// Rendered with the shared accordion FaqSection (the RCM FAQ template); only the content is EVV's.
export const evvFaq = {
  title: 'Frequently asked questions about Medicaid EVV',
  description: 'The questions home care operators ask most often when reviewing EVV.',
  items: [
    {
      question: 'What is Electronic Visit Verification?',
      answer:
        'A system that electronically verifies a home visit took place as billed, by capturing six required data elements: the service performed, the individual receiving it, the date, the location, the individual providing it, and the start and end times.',
    },
    {
      question: 'Is EVV required by federal law?',
      answer:
        'Yes. Section 12006 of the 21st Century Cures Act directed states to require EVV for Medicaid personal care services by 1 January 2020 and for home health care services by 1 January 2023.',
    },
    {
      question: 'What happens if a state does not comply?',
      answer:
        'A non-compliant state faces incremental reductions to its federal medical assistance percentage of up to one percent. States that made a good-faith effort and encountered unavoidable delays could apply for an extension.',
    },
    {
      question: 'Can we choose our own EVV vendor?',
      answer:
        'It depends on the model your state adopted. Under Provider Choice and Open Vendor you generally can, subject to interface requirements. Under a State Mandated model you cannot — you choose what feeds the mandated system instead.',
    },
    {
      question: 'Does EVV apply to family caregivers?',
      answer:
        'Self-directed and family caregiver arrangements are not exempt simply for being self-directed. How verification works in those cases is set by your state, so confirm it programme by programme.',
    },
    {
      question: 'What does an aggregator rejection mean?',
      answer:
        'The visit record was returned for correction. It does not erase the original visit, and it does not mean a claim was denied — the claim may not have been submitted yet.',
    },
    {
      question: 'Does a verified visit mean we can bill it?',
      answer:
        'Not on its own. Submission, synchronization, internal verification and aggregator acceptance are separate milestones, and billing still depends on authorization and documentation checks.',
    },
    {
      question: 'How does EVV work without mobile signal?',
      answer:
        'Visits are captured offline and queued on the device. What matters is whether the original check-in and check-out times survive the upload, and whether retries can create duplicate visits.',
    },
  ],
};

// Destinations not in the frame: the demo CTA uses /request-demo and Contact Sales uses Contact Us,
// as on the other product pages.
export const evvCtaBand = {
  eyebrow: 'See EVV in Elixir',
  title: 'Bring your states, programmes and aggregators to the conversation',
  description:
    "We will walk the visit from the caregiver's phone through verification, exception review and billing readiness — against the states and programmes you actually operate in.",
  cta: { label: 'Request a Demo', to: '/request-demo' },
  secondaryCta: { label: 'Contact Sales', to: '/contact-us' },
  links: [topicPages.homeCare, topicPages.fieldCaregiver],
};
