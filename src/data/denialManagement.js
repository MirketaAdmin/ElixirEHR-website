// Denial Management page content (Figma "Denial Management" frame). Copy is reproduced verbatim.

import heroMedia from '../assets/denial-management/hero-media.png';
import predictionScreen from '../assets/denial-management/feature-prediction.png';
import scrubbingScreen from '../assets/denial-management/feature-scrubbing.png';
import rootCauseScreen from '../assets/denial-management/feature-root-cause.png';
import patientInsightsScreen from '../assets/denial-management/feature-patient-insights.png';
import calendarIcon from '../assets/denial-management/icon-calendar.png';
import warningIcon from '../assets/denial-management/icon-warning.png';
import reworkCostIcon from '../assets/denial-management/icon-rework-cost.png';
import claimPredictionIcon from '../assets/denial-management/icon-claim-prediction.png';
import claimScrubbingIcon from '../assets/denial-management/icon-claim-scrubbing.png';
import rootCauseIcon from '../assets/denial-management/icon-root-cause.png';
import patientInsightsIcon from '../assets/denial-management/icon-patient-insights.png';
import outboundIcon from '../assets/denial-management/icon-outbound.png';
import telemetryIcon from '../assets/denial-management/icon-telemetry.png';
import trackingIcon from '../assets/denial-management/icon-tracking.png';
import autoPostingIcon from '../assets/denial-management/icon-auto-posting.png';
import verificationIcon from '../assets/denial-management/icon-verification.png';
import oneSourceIcon from '../assets/denial-management/icon-one-source.png';
import dashboardsIcon from '../assets/denial-management/icon-dashboards.png';
import workQueuesIcon from '../assets/denial-management/icon-work-queues.png';
import appealsIcon from '../assets/denial-management/icon-appeals.png';
import securityIcon from '../assets/denial-management/icon-security.png';
import scalesIcon from '../assets/denial-management/icon-scales.png';
import pillIndependentIcon from '../assets/denial-management/icon-pill-independent.png';
import pillBehavioralIcon from '../assets/denial-management/icon-pill-behavioral.png';
import pillMultiSpecialtyIcon from '../assets/denial-management/icon-pill-multi-specialty.png';
import pillFqhcIcon from '../assets/denial-management/icon-pill-fqhc.png';
import pillUrgentCareIcon from '../assets/denial-management/icon-pill-urgent-care.png';
import pillAddictionIcon from '../assets/denial-management/icon-pill-addiction.png';
import pillPhysicalTherapyIcon from '../assets/denial-management/icon-pill-physical-therapy.png';
import pillInHouseBillingIcon from '../assets/denial-management/icon-pill-in-house-billing.png';

export const dmHero = {
  currentPage: 'Denial Management',
  titleLines: ['AI Denial Management', 'Software, Native to', 'Salesforce'],
  // The whole title is white in this frame (no accent).
  titleAccent: [],
  description:
    'Predict denials before claims leave your office, see the root cause of every denial, and work appeals from one queue connected to your clearinghouse. Built for US clinics and providers.',
  // No destination in the frame; the site's demo CTAs use /request-demo.
  primaryCta: { label: 'Schedule a Demo', to: '/request-demo', icon: { src: calendarIcon, width: 14, height: 16 } },
  // The frame shows Figma's grey "missing image" box on the tilted backdrop: the hero photo has
  // not been supplied. Exported as shown (511×507, backdrop included) until it is.
  media: {
    src: heroMedia,
    alt: 'Billing specialist reviewing an Elixir denial management dashboard on a monitor',
  },
};

export const dmChallenge = {
  badge: { label: 'The Challenge', icon: warningIcon },
  title: 'Claim denials are quietly draining US practice revenue',
  paragraph:
    'Most denials start with small, preventable errors: an invalid NPI, a taxonomy code in the wrong format, missing credentials, eligibility that was never re-verified, or a duplicate submission. Billing teams find out weeks later, then piece the story together across the EHR, the clearinghouse portal and a spreadsheet.',
  // Set as an italic pull quote in the frame.
  quote:
    'Elixir brings that work into one place. Because it runs natively on Salesforce and connects directly to your clearinghouse, it checks every claim before submission and explains every denial the moment the remittance arrives.',
  // No destination in the frame; Revenue Cycle Management is the parent page for claims and denials.
  cta: { label: 'Learn More', to: '/revenue-cycle-management' },
  // Figures and footnote as in the frame; the footnote itself asks for cited sources (see
  // DESIGN-SYSTEM.md open questions).
  stats: [
    {
      label: 'Unrecovered loss',
      value: '65%',
      tone: 'error',
      icon: 'close',
      text: 'of denied claims are never resubmitted by providers.¹',
    },
    {
      label: 'Front-end opportunity',
      value: '90%',
      tone: 'success',
      icon: 'check',
      text: 'of denials are considered preventable with the right front-end checks.¹',
    },
  ],
  cost: {
    label: 'Rework Cost per Occurrence',
    value: '$25–$118',
    text: 'is the average cost to rework a single denied claim.¹',
    icon: reworkCostIcon,
  },
  footnote: '¹ Industry estimates. Replace with your preferred cited sources before publishing.',
};

export const dmWorkflow = {
  badge: 'Unified Lifecycle',
  title: 'End-to-End Denial Management Workflow on Salesforce',
  description: 'Elixir covers the full claim denial lifecycle, from the first scrub to the final payment.',
  // Card 1 keeps the frame's hard line break after "reasons".
  steps: [
    {
      title: 'Predict',
      text: 'Every claim is scored for denial risk before it goes to the clearinghouse, with the reasons\nbehind the score.',
    },
    {
      title: 'Prevent',
      text: 'AI claim scrubbing flags NPI, taxonomy, credential, coding and payer-rule issues and tells staff exactly how to fix them.',
    },
    {
      title: 'Resolve',
      text: 'When a denial arrives on the 835, Elixir classifies the root cause from CARC and RARC codes and recommends next steps.',
    },
    {
      title: 'Recover',
      text: 'Prioritized work queues, auto-generated appeal letters and timely-filing alerts move money back into your account.',
    },
  ],
};

export const dmFeatures = {
  badge: 'Features',
  title: 'AI Claim Denial Prevention and Recovery Features',
  description: 'Purpose-built for billing teams at US clinics, physician groups and specialty practices.',
  // Rows alternate text / image; the last item is the full-width feature.
  items: [
    {
      icon: { src: claimPredictionIcon, width: 20, height: 20 },
      title: 'Claim denial prediction before submission',
      image: { src: predictionScreen, alt: 'Claims list in Elixir with a High, Medium or Low denial risk score on each claim', width: 556, height: 440 },
      description:
        'See which claims are likely to be denied while there is still time to fix them. Elixir gives each claim a High, Medium or Low denial risk score right in your Salesforce list view, so your team works the riskiest claims first.',
      points: [
        'Risk scores based on payer history, coding and claim data',
        'Color-coded claim lists and filters by risk band',
        'Hold high-risk claims automatically before submission',
      ],
    },
    {
      icon: { src: claimScrubbingIcon, width: 21, height: 21 },
      title: 'AI claim scrubbing with rejection probability',
      image: { src: scrubbingScreen, alt: 'AI Claim Recommendation panel showing rejection probability, issues identified and recommendations', width: 499, height: 671 },
      description:
        'Elixir reviews the full claim and every line item, then shows the rejection probability, the specific issues it found and how to fix each one. Staff see a clear list of corrections instead of a cryptic clearinghouse rejection.',
      points: [
        'Validates NPI, NUCC taxonomy, credentials and diagnosis pointers',
        'Checks modifiers, thresholds and payer billing rules by CPT',
        'Line-item rejection reasons with step-by-step fixes',
      ],
    },
    {
      icon: { src: rootCauseIcon, width: 20, height: 19 },
      title: 'CARC and RARC root cause analysis',
      image: { src: rootCauseScreen, alt: 'Denial Management panel classifying a CARC code as a coding error with ranked next steps', width: 556, height: 614 },
      description:
        'Stop guessing why a claim was denied. Elixir reads the CARC and RARC codes on each remittance, classifies the root cause, such as coding error, eligibility, authorization or duplicate, and gives a confidence score with prioritized next steps.',
      points: [
        'Root cause categories your team and leadership can report on',
        'Next steps ranked as urgent, important or informational',
        'Each step explains why, what to do and the expected outcome',
      ],
    },
    {
      icon: { src: patientInsightsIcon, width: 18, height: 22 },
      title: 'Patient-level insights and next best actions',
      image: { src: patientInsightsScreen, alt: 'AI Patient Insights panel with a patient summary and ranked next best actions', width: 1152, height: 518 },
      description:
        "Denials rarely happen one at a time. Elixir looks across a patient's entire account to spot payer-level patterns, aging balances and eligibility gaps, then recommends the next best actions with the expected dollar outcome of each.",
    },
  ],
};

export const dmClearinghouse = {
  badge: 'Integration',
  title: 'Denial Management Integrated With Your Clearinghouse',
  // Two parts: the frame breaks the last line before "team" (kept on desktop only).
  description: [
    'Elixir connects to your clearinghouse through standard X12 EDI transactions. Claims go out from Salesforce, and acknowledgments, rejections and remittances come straight back in. Denials land in the right work queue within minutes, already classified and ready to work, so your',
    'team never logs in to a separate portal.',
  ],
  // The 837 card keeps the frame's hard line break before "claims".
  transactions: [
    {
      code: '837',
      title: 'Claim submission',
      description: 'Professional and institutional\nclaims sent from Salesforce.',
      tag: { label: 'Outbound X12', icon: outboundIcon, size: [13, 10] },
    },
    {
      code: '999',
      title: 'Acknowledgment',
      description: 'Front-end rejections surfaced instantly with fix guidance.',
      tag: { label: 'Instant Telemetry', icon: telemetryIcon, size: [13, 10] },
    },
    {
      code: '277CA',
      title: 'Claim status',
      description: 'Payer acceptance and rejection tracked on every claim.',
      tag: { label: 'Real-Time Tracking', icon: trackingIcon, size: [12, 12] },
    },
    {
      code: '835',
      title: 'ERA remittance',
      description: 'Auto-posting, CARC and RARC capture, and denial routing.',
      tag: { label: 'Auto-Posting', icon: autoPostingIcon, size: [12, 12] },
    },
    {
      code: '270/271',
      title: 'Eligibility',
      description: 'Real-time eligibility and COB checks before the visit.',
      tag: { label: 'Verification', icon: verificationIcon, size: [12, 10] },
    },
  ],
  // No destination in the frame; Revenue Cycle Management covers the clearinghouse workflow.
  cta: { label: 'Learn More', to: '/revenue-cycle-management' },
};

export const dmSalesforceNative = {
  title: 'Why a Salesforce Native Denial Management Solution',
  description: 'Your denials, patients, payers and providers share one data model, so nothing gets lost between systems.',
  items: [
    {
      icon: { src: oneSourceIcon, width: 18, height: 18 },
      title: 'One source of truth',
      text: 'Clinical notes, charges, claims and denials live in the same Salesforce org as your EHR, patient portal and contact center.',
    },
    {
      icon: { src: dashboardsIcon, width: 18, height: 18 },
      title: 'Dashboards you already know',
      text: 'Track denial rate, first-pass yield, days in AR and appeal success with standard Salesforce reports and dashboards.',
    },
    {
      icon: { src: workQueuesIcon, width: 18, height: 20 },
      title: 'Work queues and automation',
      text: 'Route denials by payer, root cause, dollar value or specialist using Salesforce flows, assignment rules and SLAs.',
    },
    {
      icon: { src: appealsIcon, width: 22, height: 18 },
      title: 'Automated appeals',
      text: 'Generate payer-ready appeal letters with the right documentation attached, and track every appeal to resolution.',
    },
    {
      icon: { src: securityIcon, width: 16, height: 20 },
      title: 'Enterprise-grade security',
      text: 'HIPAA compliant, with role-based access, field-level security, encryption and full audit history.',
    },
    {
      icon: { src: scalesIcon, width: 22, height: 20 },
      title: 'Scales with your practice',
      text: 'Start with one clinic and grow to multi-location groups without adding another billing system.',
    },
  ],
};

export const dmCareSettings = {
  title: 'Denial Management Software for US Clinics and Providers',
  description:
    'Elixir supports the payer mix, specialties and workflows of healthcare organizations across the United States, including Medicare, Medicaid and commercial payers.',
  // The last pill is highlighted (lime) in the frame.
  settings: [
    { label: 'Independent medical practices', icon: { src: pillIndependentIcon, width: 13, height: 12 } },
    { label: 'Behavioral health & mental health practices', icon: { src: pillBehavioralIcon, width: 14, height: 14 } },
    { label: 'Multi-specialty physician groups', icon: { src: pillMultiSpecialtyIcon, width: 16, height: 12 } },
    { label: 'FQHCs & community health centers', icon: { src: pillFqhcIcon, width: 14, height: 12 } },
    { label: 'Urgent care centers', icon: { src: pillUrgentCareIcon, width: 12, height: 12 } },
    { label: 'Addiction recovery centers', icon: { src: pillAddictionIcon, width: 14, height: 14 } },
    { label: 'Physical therapy clinics', icon: { src: pillPhysicalTherapyIcon, width: 15, height: 14 } },
    { label: 'In-house billing & RCM teams', icon: { src: pillInHouseBillingIcon, width: 13, height: 12 }, highlighted: true },
  ],
};
