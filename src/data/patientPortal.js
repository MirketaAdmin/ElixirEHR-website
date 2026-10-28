// Patient Portal page content — copy reproduced exactly from the Figma "Patient Portal" frame.
// Icons and the hero image are 1× crops of the frame export (no source files were supplied).

import heroMedia from '../assets/patient-portal/hero-media.png';
import efficiencyIcon from '../assets/patient-portal/badge-efficiency.png';
import adoptionIcon from '../assets/patient-portal/strip-adoption.png';
import oneRecordIcon from '../assets/patient-portal/strip-one-record.png';
import proxyAccessIcon from '../assets/patient-portal/strip-proxy-access.png';
import afterDischargeIcon from '../assets/patient-portal/strip-after-discharge.png';
import appointmentsIcon from '../assets/patient-portal/task-appointments.png';
import recordsIcon from '../assets/patient-portal/task-records.png';
import labResultsIcon from '../assets/patient-portal/task-lab-results.png';
import messagingIcon from '../assets/patient-portal/task-messaging.png';
import formsIcon from '../assets/patient-portal/task-forms.png';
import billingIcon from '../assets/patient-portal/task-billing.png';
import selfSchedulingIcon from '../assets/patient-portal/tag-self-scheduling.png';
import chartViewIcon from '../assets/patient-portal/tag-chart-view.png';
import pdfExportIcon from '../assets/patient-portal/tag-pdf-export.png';
import routedTeamIcon from '../assets/patient-portal/tag-routed-team.png';
import zeroDelayIcon from '../assets/patient-portal/tag-zero-delay.png';
import claimLinkIcon from '../assets/patient-portal/tag-claim-link.png';
import checkLimeIcon from '../assets/patient-portal/check-lime.png';
import shieldIcon from '../assets/patient-portal/icon-shield.png';
import checkMarkIcon from '../assets/patient-portal/check-mark.png';
import connectEhrIcon from '../assets/patient-portal/connect-ehr.png';
import connectRcmIcon from '../assets/patient-portal/connect-rcm.png';
import connectContactCenterIcon from '../assets/patient-portal/connect-contact-center.png';
import connectSchedulingIcon from '../assets/patient-portal/connect-scheduling.png';
import contactScheduleIcon from '../assets/patient-portal/alumni-contact-schedule.png';
import communityIcon from '../assets/patient-portal/alumni-community.png';
import materialsIcon from '../assets/patient-portal/alumni-materials.png';
import referralsIcon from '../assets/patient-portal/alumni-referrals.png';
import cadenceIcon from '../assets/patient-portal/alumni-tag-cadence.png';
import peerIcon from '../assets/patient-portal/alumni-tag-peer.png';
import educationIcon from '../assets/patient-portal/alumni-tag-education.png';
import handoffIcon from '../assets/patient-portal/alumni-tag-handoff.png';

export const patientPortalHero = {
  currentPage: 'Patient Portal',
  titleLines: ['A Patient Portal', 'Your Patients Will', 'Actually Use'],
  // The whole title is white in this frame (no accent).
  titleAccent: [],
  description:
    "Most portals are not short of features. They are short of people logging in. Elixir's patient portal is built around the handful of things patients genuinely come back for, their next appointment, their results, a message to someone who knows them and it is connected to the same record your clinicians work in.",
  // No destination in the frame for the demo CTA: /request-demo, as on the other pages. The second
  // CTA scrolls to this page's "What patients can do" section.
  primaryCta: { label: 'Request a Demo', to: '/request-demo' },
  secondaryCta: { label: 'See what patients can do', href: '#what-patients-can-do' },
  media: { src: heroMedia, alt: 'Smiling woman on her sofa using the Elixir patient portal on her phone' },
  // The frame's badge over the hero image; the figure is reproduced as drawn.
  badge: { label: 'Efficiency', text: 'Intake time reduced by 40%', icon: efficiencyIcon },
};

export const patientPortalHighlights = [
  {
    title: 'Built for adoption',
    text: 'Designed around the few things patients return for, not a feature list.',
    icon: adoptionIcon,
  },
  {
    title: 'One record',
    text: 'What a patient sees is the same record the clinician works in.',
    icon: oneRecordIcon,
  },
  {
    title: 'Proxy access, done properly',
    text: 'Family and professional caregivers are not the same permission.',
    icon: proxyAccessIcon,
  },
  {
    // Drawn with a lime title in the frame.
    title: 'Life after discharge',
    text: 'Alumni engagement built in, not bolted on afterwards.',
    icon: afterDischargeIcon,
    accent: true,
  },
];

export const patientPortalTasks = {
  eyebrow: 'For patients',
  title: 'What patients can do in the Elixir patient portal',
  description:
    'Written as things a person does, because that is how a patient decides whether an app is worth keeping.',
  items: [
    {
      title: 'See and change their next appointment',
      text: 'Book, reschedule or cancel online, with reminders that cut down on the ones people simply forget.',
      icon: appointmentsIcon,
      tag: 'Self-scheduling sync',
      tagIcon: selfSchedulingIcon,
    },
    {
      title: 'Read their own records',
      text: 'Demographics, medical history, diagnoses, medications and immunisations, in one place rather than across three phone calls.',
      icon: recordsIcon,
      tag: 'Continuous chart view',
      tagIcon: chartViewIcon,
    },
    {
      title: 'View and download lab results',
      text: 'Results when they are released, downloadable to take to another provider.',
      icon: labResultsIcon,
      tag: 'Direct PDF export',
      tagIcon: pdfExportIcon,
    },
    {
      title: 'Message their care team securely',
      text: 'Secure messaging that reaches the people who know them, instead of a general inbox and a callback promise.',
      icon: messagingIcon,
      tag: 'Routed to assigned team',
      tagIcon: routedTeamIcon,
    },
    {
      title: 'Complete forms before arriving',
      text: 'Intake forms, questionnaires, surveys and consent documents finished at home rather than on a clipboard in the waiting room.',
      icon: formsIcon,
      tag: 'Zero clipboard delay',
      tagIcon: zeroDelayIcon,
    },
    {
      title: 'Understand and pay a bill',
      text: 'Statements they can read, with a payment they can make without ringing the billing office to ask what the charge was for.',
      icon: billingIcon,
      tag: 'Itemised claim link',
      tagIcon: claimLinkIcon,
    },
  ],
};

const whatWeDo = { text: 'What we do:', emphasis: true };

export const patientPortalAdoption = {
  eyebrow: 'Adoption',
  title: 'Why most patient portals go unused, and what we do about it',
  description:
    'Every portal demo shows a full feature list. Six months later the login numbers tell a different story. These are the four reasons people stop, and what the product does about each.',
  items: [
    {
      tag: 'Sign-up',
      title: 'The account was never activated',
      text: [
        "Registration happens at the worst possible moment — during intake, on someone else's device, while the patient is anxious. ",
        whatWeDo,
        ' activation is simple, resumable, and does not depend on a paper handout the patient will lose.',
      ],
      outcome: 'SMS-resumable onboarding links',
    },
    {
      tag: 'Password',
      title: 'They cannot get back in',
      text: [
        'The single most common reason a portal dies. Patients return months apart, by which point the password is gone. ',
        whatWeDo,
        ' recovery that does not require a phone call, and for pre-visit tasks, a secure link with no login at all.',
      ],
      outcome: 'Passwordless pre-visit authentication',
    },
    {
      tag: 'Emptiness',
      title: 'There is nothing there when they look',
      text: [
        'A portal with no new result, no message and no upcoming appointment teaches people not to check it again. ',
        whatWeDo,
        ' notify when something actually changes, rather than on a schedule.',
      ],
      outcome: 'Event-driven notifications only',
    },
    {
      tag: 'Dead end',
      title: 'Their message went nowhere',
      text: [
        'One unanswered message ends portal use permanently. ',
        whatWeDo,
        ' messages land in the same system the care team works in, so replying is part of the workflow rather than another inbox to remember.',
      ],
      outcome: 'Native in-chart inbox routing',
    },
  ],
  outcomeIcon: checkLimeIcon,
  quote: '“A portal\'s real measure is not how many features it has. It is how many patients open it twice.”',
};

export const patientPortalAccess = {
  eyebrow: 'Access and permissions',
  title: 'Family caregivers and professional caregivers are not the same permission',
  paragraphs: [
    'This is where portals quietly go wrong. A daughter helping her father manage appointments, a professional caregiver working a shift, and a patient in addiction treatment who wants their family to see some things and not others are three different access problems.',
    'Treating them as one “caregiver login” is how the wrong person sees the wrong record. Each relationship gets its own authorisation, its own consent record, and its own scope of what is visible.',
  ],
  callout: 'Who can see what, decided per relationship and recorded, not assumed.',
  // Illustrative status panel drawn in the frame (not live data).
  engine: {
    title: 'Granular scoping engine',
    icon: shieldIcon,
    rows: [
      { label: 'Consent Expiry Tracking', status: 'Active' },
      { label: 'Audit Trail Integrity', status: '100% Logged' },
    ],
  },
  table: {
    columns: ['Who', 'What that relationship needs'],
    rows: [
      ['The patient', 'Their own record, their appointments, their results and their bills.'],
      ['Family or proxy', 'Authorised access with a consent record behind it, scoped to what the patient agreed to share.'],
      ['Professional caregiver', 'Task and schedule information for the work they do, not the full clinical history.'],
      ['Alumni', 'Continued community and resource access after discharge, without ongoing clinical access.'],
    ],
    note: 'Access is configured per relationship and per organisation.',
  },
  // Reproduced verbatim from the frame; have the compliance wording reviewed before launch.
  behavioralHealth: {
    title: 'For behavioral health and addiction treatment',
    icon: checkMarkIcon,
    items: [
      'Consent for family access is recorded, scoped and revocable.',
      'Sensitive-record handling follows the controls configured for your organisation.',
      'Confirm applicable 42 CFR Part 2 requirements with your privacy reviewer for your programmes.',
    ],
  },
};

export const patientPortalLimits = {
  eyebrow: 'Honest limits',
  title: 'And for the patients who will never log in',
  paragraphs: [
    'Some people will not create an account. Not because the portal is bad, but because they are eighty-one, or between phones, or simply not going to. Pretending otherwise is how organisations end up with a portal and a call queue.',
    "So the tasks that matter most before a visit do not require an account at all. Visit Prep sends a secure text link, verifies the patient's identity, and lets them share what they want to discuss, no app, no password, nothing to remember. The agenda still reaches the provider in the chart.",
  ],
  // \n reproduces the frame's hard line break.
  note: 'The portal serves the patients who will use it.\nSomething else serves the ones who will not.',
  link: { label: 'Explore Visit Prep', to: '/kratu-ai/visit-prep' },
};

export const patientPortalConnected = {
  eyebrow: 'Connected',
  title: 'How the portal connects to the rest of Elixir',
  // \n reproduces the frame's hard line breaks. Cards link only where the product page exists.
  items: [
    {
      title: 'Electronic Health Record',
      text: 'What a patient sees is the same record the clinician documents in.',
      icon: connectEhrIcon,
      to: '/electronic-health-record',
    },
    {
      title: 'Revenue Cycle Management',
      text: 'Statements and payments tie to the claim, not\na separate ledger.',
      icon: connectRcmIcon,
      to: '/revenue-cycle-management',
    },
    {
      title: 'Contact Center',
      text: 'Portal messages reach the team already handling intake and enquiries.',
      icon: connectContactCenterIcon,
    },
    {
      title: 'Scheduling',
      text: 'Self-service booking respects the same rules\nas the front desk.',
      icon: connectSchedulingIcon,
    },
  ],
};

// The FAQ uses the site's one FAQ design (the RCM accordion), so it differs from this frame's open
// cards. Items are ordered so each question stays in its frame column (left column first).
export const patientPortalFaq = {
  title: 'Frequently asked questions about the Elixir patient portal',
  description: 'The questions provider organisations ask most often.',
  items: [
    {
      question: 'Can patients see their lab results in the portal?',
      answer: 'Yes. Results can be viewed and downloaded once released, and the release rules follow the configuration your organisation sets.',
    },
    {
      question: "Can a family member access a patient's record?",
      answer: 'Only through authorised proxy access with a consent record behind it, scoped to what the patient agreed to share. Family access and professional caregiver access are configured separately.',
    },
    {
      question: 'Can patients complete intake forms before they arrive?',
      answer: 'Yes. Intake forms, questionnaires, surveys and consent documents can be completed ahead of the appointment, with reminders for anything outstanding.',
    },
    {
      question: 'Does the portal support alumni after discharge?',
      answer: 'Yes. Alumni engagement includes a planned contact schedule, community groups, shared resources and the ability for alumni to refer someone through the portal.',
    },
    {
      question: 'Is portal messaging secure?',
      answer: 'Messaging is secure and HIPAA-compliant, and messages reach the care team inside the same system they already work in rather than a separate inbox.',
    },
    {
      question: 'What if a patient will not use a portal at all?',
      answer: 'Pre-visit tasks do not require an account. Visit Prep sends a secure text link with identity verification, so a patient can share what they want to discuss without an app or a password.',
    },
    {
      question: 'Can patients pay a bill through the portal?',
      answer: 'Yes. Patients can view statements and make a payment, with the transaction tied back to the billing record rather than held separately.',
    },
    {
      question: 'Does the portal use the same record as the EHR?',
      answer: 'Yes. The portal is part of Elixir rather than a connected third-party product, so what a patient sees is the record the clinical team works in.',
    },
  ],
};

export const patientPortalAlumni = {
  eyebrow: 'After discharge',
  title: 'Alumni engagement: staying connected after treatment ends',
  description:
    'In addiction treatment and behavioral health, the weeks after discharge matter as much as the weeks before it. Most portals stop at the discharge date. This one does not — and for the organisations Elixir is built for, it is the capability that most often has no equivalent elsewhere.',
  items: [
    {
      title: 'A planned contact schedule',
      text: 'Define the post-treatment touch points and see attempts and responses at a glance, rather than reconstructing who was called from memory.',
      icon: contactScheduleIcon,
      tag: 'Automated cadence',
      tagIcon: cadenceIcon,
    },
    {
      title: 'Community, not just content',
      text: 'Create groups former patients can join, so the environment after recovery has somewhere to belong.',
      icon: communityIcon,
      tag: 'Peer recovery spaces',
      tagIcon: peerIcon,
    },
    {
      title: 'Materials that still arrive',
      text: 'Share relevant resources with alumni who have left active treatment but have not left your care.',
      icon: materialsIcon,
      tag: 'Targeted education',
      tagIcon: educationIcon,
    },
    {
      // \n reproduces the frame's hard line break.
      title: 'Referrals from people who\ntrust you',
      text: 'Let alumni refer someone directly through the portal, which is how most behavioral health referrals actually happen.',
      icon: referralsIcon,
      tag: 'Direct intake handoff',
      tagIcon: handoffIcon,
    },
  ],
};

export const patientPortalCtaBand = {
  eyebrow: 'See the patient portal in Elixir',
  title: 'See it the way your patients would',
  description:
    'Walk through registration, a first appointment, a message, a result and a bill — on your own appointment types and consent rules.',
  // No destination in the frame: /request-demo, as on the other pages.
  cta: { label: 'Request a Demo', to: '/request-demo' },
};
