// Eligibility Verification page content — copy reproduced exactly from the Figma "Eligibility Verification" frame.

import heroMedia from '../assets/eligibility-verification/hero-media.png';
import frontDeskImage from '../assets/eligibility-verification/front-desk.png';
import clearinghouseChecksImage from '../assets/eligibility-verification/clearinghouse-checks.png';
import benefitsAuditImage from '../assets/eligibility-verification/benefits-audit.png';
import oneClickIcon from '../assets/eligibility-verification/icon-one-click.png';
import transactionsIcon from '../assets/eligibility-verification/icon-transactions.png';
import everyCheckIcon from '../assets/eligibility-verification/icon-every-check.png';
import oneClickVerificationIcon from '../assets/eligibility-verification/icon-one-click-verification.png';
import bulkEdiIcon from '../assets/eligibility-verification/icon-bulk-edi.png';
import batchVerificationIcon from '../assets/eligibility-verification/icon-batch-verification.png';
import benefitResultsIcon from '../assets/eligibility-verification/icon-benefit-results.png';
import vobPdfIcon from '../assets/eligibility-verification/icon-vob-pdf.png';
import errorVisibilityIcon from '../assets/eligibility-verification/icon-error-visibility.png';
import insuranceDetailsPanel from '../assets/eligibility-verification/insurance-details-panel.png';
import bulkSelectIcon from '../assets/eligibility-verification/icon-bulk-select.png';
import batchScheduleIcon from '../assets/eligibility-verification/icon-batch-schedule.png';
import behavioralHealthIcon from '../assets/eligibility-verification/icon-setting-behavioral-health.png';
import substanceUseIcon from '../assets/eligibility-verification/icon-setting-substance-use.png';
import homeHealthIcon from '../assets/eligibility-verification/icon-setting-home-health.png';
import multiSpecialtyIcon from '../assets/eligibility-verification/icon-setting-multi-specialty.png';
import physicalTherapyIcon from '../assets/eligibility-verification/icon-setting-physical-therapy.png';
import billingCompaniesIcon from '../assets/eligibility-verification/icon-setting-billing-companies.png';

export const evHero = {
  currentPage: 'Eligibility Verification',
  titleLines: ['Real-Time Insurance', 'Eligibility Verification,', 'Built on Salesforce'],
  titleAccent: 'Built on Salesforce',
  description:
    'Confirm patient coverage in one click before every visit. Elixir RCM connects directly to a healthcare clearinghouse, stores every result on the patient record, and helps your team stop eligibility denials before they happen.',
  // Destinations are not in the frame: the demo CTA matches the other pages, and "See how it
  // works" jumps to the "How Real-Time Eligibility Verification Works" section on this page.
  primaryCta: { label: 'Take A Test Drive', to: '/request-demo' },
  secondaryCta: { label: 'See how it works', href: '#how-it-works' },
  media: {
    src: heroMedia,
    alt: 'Clinician showing an older patient coverage details on a tablet',
  },
};

export const frontDesk = {
  image: { src: frontDeskImage, alt: 'Front desk staff member verifying coverage across two monitors' },
  title: 'Stop Claim Denials at the Front Desk With Automated Insurance Verification',
  paragraphs: [
    'Inactive coverage, the wrong payer on file, and missing benefit details are among the most common reasons claims get denied. Every one of them is cheaper to fix before the patient is seen than after the claim comes back.',
    [
      'Elixir brings ',
      { text: 'patient insurance eligibility verification', emphasis: true },
      ' into the same Salesforce workspace your team already uses for scheduling, clinical care and billing. Staff see coverage status on the patient page, verify in one click, and move on with confidence. No payer portals, no hold music, no re-keying data between systems.',
    ],
  ],
  points: [
    'Verify coverage before the visit and before the claim',
    'Know patient responsibility up front for cleaner collections',
    'Keep a documented, auditable record of every check',
  ],
};

export const evStats = {
  // Line break follows the frame.
  titleLines: ['Eligibility Verification Software', 'That Protects Your Revenue Cycle'],
  description:
    'Built around what billing managers and practice owners in the US ask for most: speed, accuracy and proof.',
  stats: [
    { value: '1 click', label: 'to verify coverage from the patient page', icon: oneClickIcon, iconSize: [22, 27] },
    {
      value: '270/271',
      label: 'standard X12 EDI transactions supported out of the box',
      icon: transactionsIcon,
      iconSize: [25, 23],
    },
    {
      value: 'Every check',
      label: 'saved with a detailed result and VOB response PDF',
      icon: everyCheckIcon,
      iconSize: [20, 25],
    },
  ],
};

// "\n" marks the frame's hard line breaks.
export const evCapabilities = {
  titleLines: ['Insurance Eligibility Verification', 'Capabilities in Elixir RCM'],
  description:
    'Everything your front office and billing team need to confirm coverage accurately, one patient or hundreds at a time.',
  capabilities: [
    {
      title: 'One-click real-time verification',
      description:
        'Open the insurance card on the patient page, review the coverage and click Verify. The payer response comes back in seconds.',
      icon: oneClickVerificationIcon,
      iconSize: [12, 20],
    },
    {
      title: 'Bulk EDI 270/271',
      description:
        'Select insurance records and use Generate Bulk EDI 270 to send eligibility requests for many patients in one action.',
      tag: 'Standard product feature',
      icon: bulkEdiIcon,
      iconSize: [21, 18],
    },
    {
      title: 'Automated batch verification',
      description:
        'Schedule real-time checks for upcoming appointments or your active patient list, so coverage is confirmed before the day starts.',
      tag: 'Configured for your organization',
      icon: batchVerificationIcon,
      iconSize: [21, 20],
    },
    {
      title: 'Detailed benefit results',
      description:
        'Plan name, coverage dates, group and policy numbers, benefit codes, co-insurance and insurance type, stored as a result record on the insurance.',
      icon: benefitResultsIcon,
      iconSize: [20, 19],
    },
    {
      title: 'VOB response PDF on file',
      description:
        'The full verification of benefits response is attached automatically, ready for audits, appeals\nand denial follow-up.',
      icon: vobPdfIcon,
      iconSize: [21, 21],
    },
    {
      title: 'Clear error visibility',
      description:
        'Records show Verified, Not Verified or Error, and missing data such as provider NPI or service date\nis listed so staff know exactly what to fix.',
      icon: errorVisibilityIcon,
      iconSize: [21, 17],
    },
  ],
};

export const evHowItWorks = {
  titleLines: ['How Real-Time Eligibility Verification', 'Works in Elixir'],
  description: 'From "Not Verified" to a fully documented result without leaving the patient record.',
  steps: [
    {
      title: 'Open the insurance card',
      description:
        "The patient's default active insurance and its verification status are shown on the landing page.",
    },
    {
      title: 'Review or change coverage',
      description:
        'Confirm payer, provider, member ID and service date in the side panel, or switch to another insurance.',
    },
    {
      title: 'Click Verify',
      description:
        'Elixir sends the request through the clearinghouse, which checks eligibility directly with the payer.',
    },
    {
      title: 'Result saved automatically',
      description:
        'Status flips to Verified, the last-verified date is stamped, and the result and VOB PDF are attached.',
    },
  ],
};

export const salesforceEhr = {
  // Line breaks follow the frame.
  titleLines: ['Patient Insurance Verification', 'Right Inside Your Salesforce', 'EHR'],
  body: 'Eligibility status sits on the patient page next to unpaid claims, patient balance, days in A/R and denial rate. Your front desk sees at a glance which patients still need a check, and billing sees the same information when preparing claims.',
  points: [
    'Default active insurance displayed with payer and member ID',
    'Verification panel opens without navigating away',
    'Last-verified date recorded for re-check cycles',
  ],
  image: {
    src: insuranceDetailsPanel,
    alt: 'Elixir Insurance Details panel with payer, provider, member ID, service date and a Verify button',
  },
};

export const clearinghouseChecks = {
  image: { src: clearinghouseChecksImage, alt: 'Billing staff reviewing eligibility responses on a monitor with a colleague' },
  titleLines: ['Clearinghouse-Integrated', 'Insurance Eligibility Checks'],
  body: [
    'Elixir is integrated with a ',
    { text: 'healthcare clearinghouse', emphasis: true },
    ', so eligibility requests reach commercial payers, Medicare and Medicaid plans without separate logins or file uploads. The same connection supports standard X12 EDI 270 eligibility requests and 271 responses.',
  ],
  points: [
    'Real-time, payer-direct eligibility responses',
    'One integration for eligibility and the wider claims workflow',
    'No swivel-chair work between your EHR and a payer portal',
  ],
};

export const benefitsAudit = {
  image: { src: benefitsAuditImage, alt: 'Staff member reviewing a benefits document beside a verification dashboard' },
  titleLines: ['Verification of Benefits', 'Results With a Complete', 'Audit Trail'],
  paragraphs: [
    "Every verification creates an eligibility result record on the insurance, capturing demographic details, plan and coverage dates, benefit plan information and co-insurance. The payer's full VOB response is attached as a PDF.",
    'When a claim is questioned months later, your team can show exactly what the payer confirmed and when.',
  ],
};

// Copy reproduced exactly as in the frame (both descriptions start lower-case).
export const bulkVerification = {
  titleLines: ['Bulk EDI 270/271 and Batch Eligibility Verification for High-', 'Volume Practices'],
  description:
    'Checking patients one at a time does not scale for busy clinics, billing companies or multi-location groups. Elixir gives you two ways to verify many patients at once.',
  options: [
    {
      title: 'Bulk EDI 270/271',
      tag: 'Out of the box',
      tone: 'standard',
      description:
        'run Generate Bulk EDI 270 from the insurance list view. Statuses update in place, and any issues appear in the EDI 270 Error Dump column. Available out of the box.',
      example: 'Action: List View > Select All (142) > [Generate Bulk EDI 270]',
      icon: bulkSelectIcon,
      iconSize: [18, 19],
    },
    {
      title: 'Automated batch real-time verification',
      tag: 'Custom configured',
      tone: 'custom',
      description:
        "scheduled checks for tomorrow's appointments, new admissions or your full active list, so staff only handle the exceptions. Configured to fit your organization's workflow.",
      example: 'Schedule: Nightly at 02:00 AM • Next Day Appt Queue (Auto-Sync)',
      icon: batchScheduleIcon,
      iconSize: [22, 23],
    },
  ],
};

// "\n" marks the frame's line break.
export const buyerChecklist = {
  titleLines: ['What to Look for in Insurance Eligibility', 'Verification Software'],
  description:
    'The questions US providers and billing teams ask when comparing RCM and EHR solutions, and how Elixir answers them.',
  criteria: [
    {
      title: 'Real-time, not overnight',
      description: 'Payer-direct responses in seconds while the patient is still at the desk.',
    },
    {
      title: 'Inside the EHR',
      description: 'Verification lives on the patient record in Salesforce, not in a separate tool.',
    },
    {
      title: 'Clearinghouse connected',
      description: 'Integrated with a clearinghouse for eligibility and standard EDI transactions.',
    },
    {
      title: 'Scales with volume',
      description: 'Bulk EDI 270/271 as standard, with automated batch runs when you need them.',
    },
    {
      title: 'Documented for audits',
      description: 'Result records and VOB PDFs kept on every verified insurance.',
    },
    {
      title: 'Secure platform',
      description: 'Built on Salesforce with role-based access to protected health information.',
    },
    {
      title: 'Reporting you can act on',
      description: 'Use Salesforce reports and dashboards to track verification status across\npatients.',
    },
    {
      title: 'AI assistance',
      description:
        'Insurance eligibility result summarization and Q&A help staff read complex\npayer responses quickly.',
    },
  ],
};

export const careSettings = {
  title: 'Eligibility Verification for Every US Care Setting',
  description: 'Elixir supports front office, intake and billing teams across outpatient and specialty care.',
  settings: [
    { label: 'Behavioral and mental health', icon: behavioralHealthIcon, iconSize: [15, 16] },
    { label: 'Substance use treatment', icon: substanceUseIcon, iconSize: [15, 16] },
    { label: 'Home health and hospice', icon: homeHealthIcon, iconSize: [12, 14] },
    { label: 'Multi-specialty clinics', icon: multiSpecialtyIcon, iconSize: [16, 14] },
    { label: 'Physical therapy and rehab', icon: physicalTherapyIcon, iconSize: [14, 16] },
    { label: 'Medical billing companies', icon: billingCompaniesIcon, iconSize: [15, 16] },
  ],
};

export const evCtaBand = {
  title: 'Verify Every Patient Before Every Visit',
  description: 'See real-time eligibility verification in Elixir RCM with your own workflow in mind.',
  // Destinations are not in the frame; these match the CTAs on the other pages.
  cta: { label: 'Take A Test Drive', to: '/request-demo' },
  secondaryCta: { label: 'Contact Sales', to: '/company/contact' },
};
