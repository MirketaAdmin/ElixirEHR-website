// Elixir Summer ’26 release note. Body copy is exactly as supplied; the title, version and date come
// from the release document (Version 1.1083, released Sept 07, 2026). No banner image on the detail
// page (as requested) — `cardImage` is the supplied featured image used on cards and listings.
import cardImage from '../../assets/posts/release-note/elixir-summer-26-release-notes/card.webp';
import releaseNotesPdf from '../../assets/posts/release-note/elixir-summer-26-release-notes/Elixir-Summer-26-Release-Notes-Sep.pdf';

const strong = (text) => ({ text, strong: true });

export default {
  title: 'Elixir Summer’26 Version 1.1083 Release',
  excerpt:
    'Elixir Summer ’26 adds AI capabilities, streamlined clinical processes, and flexible revenue cycle automation. These changes are meant to ensure that healthcare providers and billing teams have full control of the entire process without manual hassles, claim denials, and more patient time.',
  publishDate: '2026-09-07',
  version: '1.1083',
  cardImage: {
    src: cardImage,
    alt: 'Clinician reviewing patient information on a tablet, with EHR screens floating beside her',
  },
  content: [
    { type: 'lead', text: 'Driving Smarter Care Delivery, Seamless Documentation and Automated Revenue Workflows.' },
    {
      type: 'paragraph',
      text: 'Elixir Summer ’26 adds AI capabilities, streamlined clinical processes, and flexible revenue cycle automation. These changes are meant to ensure that healthcare providers and billing teams have full control of the entire process without manual hassles, claim denials, and more patient time.',
    },
    { type: 'heading', level: 2, text: 'Key Release Highlights' },

    { type: 'heading', level: 3, text: '1. Embedded AI Solutions (Kratu AI)' },
    { type: 'paragraph', text: 'Human-in-the-loop governance with AI directly integrated into your existing workflows.' },
    {
      type: 'list',
      items: [
        [
          strong('Clinical Co-Pilot:'),
          ' Real-time ambient medical scribe that transcribes visits, formats SOAP notes and recommends diagnosis and lab orders during the visit',
        ],
        [
          strong('RCM AR Agent:'),
          ' Automatically scores accounts for financial risk, predicts days to payment, and provides step-by-step guidance for claim denials.',
        ],
        [
          strong('Payer Policy Recommendation:'),
          ' Evaluates claims against payer rules before submission to catch coding errors early.',
        ],
        [
          strong('Visit Prep Assistant:'),
          ' An SMS-based, no-app tool allowing patients to confirm appointments and share visit agendas in advance.',
        ],
      ],
    },

    { type: 'heading', level: 3, text: '2. Enhanced EHR & Patient Care' },
    { type: 'paragraph', text: 'Streamlined clinical documentation, prescribing, and care management.' },
    {
      type: 'list',
      items: [
        [
          strong('Optimized Lab Orders:'),
          ' Easily map diagnoses to specific tests, manage radiology in separate tabs, and retry failed order transmissions with one click.',
        ],
        [
          strong('Outcome-Driven Care Plans:'),
          ' Automatically updates care plan progress based on real recorded patient outcomes.',
        ],
        [
          strong('Seamless ePrescribing:'),
          ' Fast bi-directional allergy synchronization and automated pre-transmission safety checks.',
        ],
        [
          strong('Flexible Approval Workflows:'),
          ' Bring multi-level sign-offs and digital signature capture to any standard or custom screen.',
        ],
      ],
    },

    { type: 'heading', level: 3, text: '3. Automated Revenue Cycle Management (RCM)' },
    { type: 'paragraph', text: 'Faster insurance verification, claim submission, and payment posting.' },
    {
      type: 'list',
      items: [
        [
          strong('Bulk Eligibility Verification:'),
          ' Process batch insurance verification requests instantly with clear visibility into active coverage and errors.',
        ],
        [
          strong('Claim Attachments & Accuracy:'),
          ' Merge and send supporting PDF documents directly with electronic claims.',
        ],
        [
          strong('High-Volume Remittance Processing:'),
          ' Rebuilt intake system to handle large payment files (EDI 835) smoothly without system slowdowns.',
        ],
      ],
    },

    {
      type: 'cta',
      title: 'Want the complete breakdown?',
      text: 'Read detailed feature specifications, platform requirements, and step-by-step guides in the full release document.',
      action: {
        label: 'Download Full Release Notes',
        href: releaseNotesPdf,
        download: 'Elixir-Summer-26-Release-Notes-Sep.pdf',
      },
    },
  ],
};
