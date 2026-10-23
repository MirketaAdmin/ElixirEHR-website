// Caregiver Mobile App page content (Figma "Field Caregiver Experience with Salesforce EVV" frame).
// Copy is reproduced verbatim.

// Same Figma "missing image" hero box as the Denial Management frame (pixel-identical export).
import heroMediaPlaceholder from '../assets/denial-management/hero-media-placeholder.png';
import iconVisitInformation from '../assets/caregiver-mobile-app/icon-tour-visit-information.png';
import iconOfflinePreparation from '../assets/caregiver-mobile-app/icon-tour-offline-preparation.png';
import iconFreshness from '../assets/caregiver-mobile-app/icon-tour-freshness.png';
import iconOfflinePrepare from '../assets/caregiver-mobile-app/icon-offline-prepare.png';
import iconOfflineReconnect from '../assets/caregiver-mobile-app/icon-offline-reconnect.png';
import iconSyncSaved from '../assets/caregiver-mobile-app/icon-sync-saved.png';
import iconSyncPending from '../assets/caregiver-mobile-app/icon-sync-pending.png';
import iconSyncSynced from '../assets/caregiver-mobile-app/icon-sync-synced.png';
import iconSyncAttention from '../assets/caregiver-mobile-app/icon-sync-attention.png';
import iconInfoLime from '../assets/caregiver-mobile-app/icon-info-lime.png';

export const cmaHero = {
  currentPage: 'Caregiver Mobile App',
  titleLines: ['Field Caregiver', 'Experience with', 'Salesforce EVV'],
  // The whole title is white in this frame (no accent).
  titleAccent: [],
  description: [
    'Help caregivers move from their scheduled visit to check-out with the care plan, visit documentation and Electronic Visit Verification connected in Elixir.',
    'Know what to prepare, what to record and what happens after submission. Follow the caregiver’s visit through six practical steps.',
  ],
  // "Contact us" goes to Contact Us; the second CTA scrolls to this page's caregiver tour.
  primaryCta: { label: 'Contact us', to: '/contact-us' },
  secondaryCta: { label: 'Explore the caregiver tour', href: '#caregiver-tour' },
  media: {
    src: heroMediaPlaceholder,
    alt: 'Image placeholder',
  },
};

// Only the Step 1 panel is in the frame. Steps 2–6 carry interim panels written only from what this
// page already says (FAQ, offline and submission sections), without step durations; replace them
// when the final copy is supplied (see DESIGN-SYSTEM.md open questions).
export const cmaTour = {
  eyebrow: 'Explore the visit journey',
  title: 'A four-minute field caregiver tour',
  description:
    'Follow a home visit from preparation through review and acceptance. Select each step to explore the workflow.',
  note: 'Illustrative workflow panels. These explain the experience and are not screenshots of the application.',
  steps: [
    {
      label: 'Step 1. Schedule',
      panel: {
        kicker: 'Step 01 / 30 seconds',
        tag: 'Pre-Departure',
        title: 'Prepare before leaving',
        text: 'Review assigned visits and care tasks. Download the information needed for offline work while connected.',
        items: [
          { title: 'Visit information', text: 'Assignment, service window and care plan', icon: iconVisitInformation },
          { title: 'Offline preparation', text: 'Visit details and forms downloaded', icon: iconOfflinePreparation },
          { title: 'Freshness', text: 'Last-updated time visible', icon: iconFreshness },
        ],
      },
    },
    {
      label: 'Step 2. Arrival',
      panel: {
        kicker: 'Step 02',
        tag: 'On Arrival',
        title: 'Check in for the visit',
        text: 'Check in against the scheduled visit. Check-in works offline, using the visit details downloaded before leaving.',
        items: [
          { title: 'Check-in', text: 'Recorded against the scheduled visit', icon: iconVisitInformation },
          { title: 'Works offline', text: 'Uses the downloaded visit details', icon: iconOfflinePreparation },
          { title: 'Saved on device', text: 'Stored securely until it syncs', icon: iconFreshness },
        ],
      },
    },
    {
      label: 'Step 3. Documentation',
      panel: {
        kicker: 'Step 03',
        tag: 'During the Visit',
        title: 'Record care at the point of care',
        text: 'Complete downloaded care tasks, record notes and collect signatures or attestations on the device, connected or not.',
        items: [
          { title: 'Care tasks', text: 'From the downloaded care plan', icon: iconVisitInformation },
          { title: 'Visit notes', text: 'Recorded while the visit happens', icon: iconOfflinePreparation },
          { title: 'Signatures', text: 'Signatures or attestations collected securely', icon: iconFreshness },
        ],
      },
    },
    {
      label: 'Step 4. Escalation',
      panel: {
        kicker: 'Step 04',
        tag: 'If Something Changes',
        title: 'Flag what needs a supervisor',
        text: 'When a visit conflicts with an updated schedule, the original caregiver record and the update are both kept for supervisor review.',
        items: [
          { title: 'Needs attention', text: 'Shows whether the caregiver must act', icon: iconSyncAttention },
          { title: 'Original record kept', text: 'Preserved alongside the update', icon: iconVisitInformation },
          { title: 'Review history', text: 'Corrections retain the history', icon: iconFreshness },
        ],
      },
    },
    {
      label: 'Step 5. Departure',
      panel: {
        kicker: 'Step 05',
        tag: 'Before Leaving',
        title: 'Check out and submit',
        text: 'Check out at the end of the visit. Queued records upload automatically when a connection returns, keeping the original visit timestamps.',
        items: [
          { title: 'Check-out', text: 'Captured online or offline', icon: iconVisitInformation },
          { title: 'Pending sync', text: 'Queued until a connection returns', icon: iconOfflinePreparation },
          { title: 'Original timestamps', text: 'Preserved through the upload', icon: iconFreshness },
        ],
      },
    },
    {
      label: 'Step 6. Completion',
      panel: {
        kicker: 'Step 06',
        tag: 'After Submission',
        title: 'Follow the visit to acceptance',
        text: 'Submission, synchronization and internal verification are separate milestones. Billing follows the required verification and acceptance checks.',
        items: [
          { title: 'Synchronized', text: 'Server receipt confirmed', icon: iconOfflinePreparation },
          { title: 'Internally verified', text: 'Rules and schedules match', icon: iconVisitInformation },
          { title: 'Aggregator accepted', text: 'Where the state or payer requires it', icon: iconInfoLime },
        ],
      },
    },
  ],
};

// Card icons are 32×32 crops (centred in the 48px tile); sync icons are 24×24 (centred in 40px circles).
export const cmaOffline = {
  title: 'Offline caregiver documentation with clear sync status',
  cards: [
    {
      title: 'Prepare online. Record care offline.',
      text: 'Download assigned visits, permitted client details, care plans and forms before going offline. Capture check-in and check-out, complete downloaded tasks, record notes and collect signatures or attestations securely on the device. Offline authorization checks use downloaded information. Current authorization and schedule details are revalidated when the visit synchronizes.',
      icon: iconOfflinePrepare,
    },
    {
      title: 'Reconnect with confidence',
      text: 'Connectivity is needed to download updates, send records to the server and receive current review or aggregator responses. Queued records upload automatically when a connection returns, preserving original visit timestamps. Temporary failures retry without creating duplicate visits. Conflicts retain the original information for supervisor review, and unsynced records remain stored until receipt is confirmed.',
      icon: iconOfflineReconnect,
    },
  ],
  pipeline: {
    title: 'Visual sync status pipeline',
    items: [
      { title: 'Saved on device', text: 'Stored encrypted', icon: iconSyncSaved, tone: 'primary' },
      { title: 'Pending sync', text: 'Queued for network', icon: iconSyncPending, tone: 'primary' },
      { title: 'Synced', text: 'Confirmed on server', icon: iconSyncSynced, tone: 'success' },
      { title: 'Needs attention, if flagged', text: 'Triage queue', icon: iconSyncAttention, tone: 'error' },
    ],
  },
};

// Rendered exactly as the RCM FAQ (the site's one FAQ design); only the content is this page's.
export const cmaFaq = {
  title: 'Field caregiver and Salesforce EVV questions',
  items: [
    {
      question: 'What should I download before leaving for visits?',
      answer:
        'While connected, download assigned visits, permitted client details, care plans, required forms and authorization information. Check the last-updated indicator before heading out.',
    },
    {
      question: 'How do I know my visit uploaded?',
      answer:
        'Saved on device means the record is stored locally. Pending sync means it is awaiting upload. Synced confirms server receipt. Internal verification and aggregator acceptance are separate statuses.',
    },
    {
      question: 'What happens if an upload fails?',
      answer:
        'Temporary upload failures retry automatically without creating duplicate visits. Records remain on the device until receipt is confirmed. Issues requiring intervention are routed for review.',
    },
    {
      question: 'What happens if I lose connectivity during a visit?',
      answer:
        'Continue check-in and check-out, downloaded care tasks, notes, signatures and attestations offline. Records save securely on the device and remain pending synchronization until connectivity returns.',
    },
    {
      question: 'What happens if my visit conflicts with an updated schedule?',
      answer:
        'The original caregiver record and the updated information are preserved for supervisor review. The visit shows that attention is needed, including whether the caregiver must take action. Corrections retain the review history.',
    },
    {
      question: 'Does submitting a visit mean it is ready for billing?',
      answer:
        'No. Submission, synchronization and internal verification are separate steps. Required aggregator acceptance, authorization and documentation checks must also be completed before billing.',
    },
  ],
};

export const cmaSubmission = {
  title: 'Visit submission, EVV acceptance and billing readiness',
  description:
    'See where the visit stands without confusing submission with acceptance. Caregiver submission, server receipt and internal verification are separate milestones. Aggregator acceptance is tracked where applicable, and billing follows the required verification, authorization and documentation checks.',
  // Step 4's title is set in near-black in the frame (the others are Deep Purple); kept as drawn.
  steps: [
    { title: 'Caregiver submitted', text: 'Point-of-care upload initiated' },
    { title: 'Synchronized', text: 'Server receipt confirmed' },
    { title: 'Internally verified', text: 'Rules and schedules match' },
    { title: 'Aggregator accepted, where required', text: 'State/payer EVV approved', dark: true },
    { title: 'Eligible for billing after checks', text: 'Clean claim generation' },
  ],
  note: {
    icon: iconInfoLime,
    text: 'An aggregator rejection returns the visit for correction. It does not erase the original visit record or mean that payment has been approved.',
  },
};

// Destinations not in the frame: the demo CTA uses /request-demo and Contact Sales uses Contact Us,
// as on the other product pages.
export const cmaCtaBand = {
  title: 'Connect your field caregivers with the rest of your care team',
  description:
    'Talk to Elixir about your Salesforce setup, caregiver workflows and state or payer EVV requirements.',
  cta: { label: 'Take A Test Drive', to: '/request-demo' },
  secondaryCta: { label: 'Contact Sales', to: '/contact-us' },
};
