// Treatment Center Solutions page content — copy reproduced exactly from the Figma "Treatment Center Solutions" frame.

import heroMedia from '../assets/treatment-center-solutions/hero-media.png';
import intakePhoto from '../assets/treatment-center-solutions/intake-photo.png';
import bedIcon from '../assets/treatment-center-solutions/icon-bed.png';
import crmIcon from '../assets/treatment-center-solutions/icon-crm.png';
import referralIcon from '../assets/treatment-center-solutions/icon-referral.png';
import engagementIcon from '../assets/treatment-center-solutions/icon-engagement.png';
import preAssessmentsIcon from '../assets/treatment-center-solutions/icon-pre-assessments.png';
import travelIcon from '../assets/treatment-center-solutions/icon-travel.png';
import censusIcon from '../assets/treatment-center-solutions/icon-census.png';
import clinicalDataIcon from '../assets/treatment-center-solutions/icon-clinical-data.png';
import formBuilderIcon from '../assets/treatment-center-solutions/icon-form-builder.png';
import noteTakingIcon from '../assets/treatment-center-solutions/icon-note-taking.png';
import utilizationReviewIcon from '../assets/treatment-center-solutions/icon-utilization-review.png';
import ehrClinician from '../assets/treatment-center-solutions/ehr-clinician.png';
import sessionNotesIcon from '../assets/treatment-center-solutions/icon-session-notes.png';
import templatesIcon from '../assets/treatment-center-solutions/icon-templates.png';
import utilizationIcon from '../assets/treatment-center-solutions/icon-utilization.png';
import carePlansIcon from '../assets/treatment-center-solutions/icon-care-plans.png';
import medicationIcon from '../assets/treatment-center-solutions/icon-medication.png';
import labIcon from '../assets/treatment-center-solutions/icon-lab.png';
import signaturesIcon from '../assets/treatment-center-solutions/icon-signatures.png';
import dischargeIcon from '../assets/treatment-center-solutions/icon-discharge.png';
import finEligibilityIcon from '../assets/treatment-center-solutions/icon-fin-eligibility.png';
import finClaimsIcon from '../assets/treatment-center-solutions/icon-fin-claims.png';
import finPaymentsIcon from '../assets/treatment-center-solutions/icon-fin-payments.png';
import insuranceEligibilityIcon from '../assets/treatment-center-solutions/icon-insurance-eligibility.png';
import costOfCareIcon from '../assets/treatment-center-solutions/icon-cost-of-care.png';
import clearingHouseIcon from '../assets/treatment-center-solutions/icon-clearing-house.png';
import claimGenerationIcon from '../assets/treatment-center-solutions/icon-claim-generation.png';
import eraHandlingIcon from '../assets/treatment-center-solutions/icon-era-handling.png';
import paymentTrackingIcon from '../assets/treatment-center-solutions/icon-payment-tracking.png';
import automatedPaymentsIcon from '../assets/treatment-center-solutions/icon-automated-payments.png';
import paymentRemindersIcon from '../assets/treatment-center-solutions/icon-payment-reminders.png';

export const tcHero = {
  // The frame's breadcrumb reads "Patient Portal"; reproduced as designed (see DESIGN-SYSTEM.md open questions).
  currentPage: 'Patient Portal',
  titleLines: ['Connected Technology.', 'Better Behavioral Health.'],
  titleAccent: 'Behavioral Health.',
  description:
    "At Elixir, we've developed an integrated platform that manages the entire patient journey, from pre-admissions to alumni follow-up. Designed by clinicians for clinicians, it prioritizes Outcome-Based Treatment.",
  primaryCta: { label: 'Request Demo', to: '/request-demo' },
  media: {
    src: heroMedia,
    alt: 'Bright treatment-center lounge with a client reading by the window',
  },
};

export const intakeManagement = {
  // Line breaks follow the frame.
  titleLines: ['Patient Flow Meets', 'Intelligent Intake', 'Management'],
  body: "Elixir's intake suite handles everything from initial contact to clinical admission. Create custom workflows that fit your facility's unique processes while maintaining a single, comprehensive view of the patient across all departments.",
  // The photo has the frosted card baked in; the card's icon and text are rendered on top.
  image: {
    src: intakePhoto,
    alt: 'Nurse using a tablet at a hospital ward desk',
  },
  highlight: {
    title: 'Bed Management Suite',
    description: 'Real-time oversight of facility capacity and patient placement optimization.',
    icon: bedIcon,
  },
};

export const intakeFeatures = {
  // The highlighted phrase is yellow in the frame.
  title: ['Features that Optimize the ', { text: 'Patient Intake Process', emphasis: true }],
  items: [
    { label: "World's #1 CRM Capabilities", icon: crmIcon, iconSize: [45, 40] },
    { label: 'Referral Management', icon: referralIcon, iconSize: [48, 24] },
    { label: 'Superior Digital Engagement', icon: engagementIcon, iconSize: [41, 32] },
    { label: 'Integrated Pre-Assessments', icon: preAssessmentsIcon, iconSize: [41, 36] },
    { label: 'Travel Management', icon: travelIcon, iconSize: [42, 37] },
    { label: 'Real-time Census Management', icon: censusIcon, iconSize: [37, 36] },
  ],
};

export const clinicalExcellence = {
  titleLines: ['EHR Built for Clinical', 'Excellence'],
  body: 'A comprehensive EHR designed to manage all clinical data throughout the care process. Track treatment progress with dynamic care plans and a built-in utilization review team.',
  features: [
    { label: 'Comprehensive Clinical Data Management', icon: clinicalDataIcon, iconSize: [23, 23] },
    { label: 'Custom Form Builder', icon: formBuilderIcon, iconSize: [24, 25] },
    { label: 'Dynamic Note-Taking', icon: noteTakingIcon, iconSize: [23, 25] },
    { label: 'Utilization Review Tracking', icon: utilizationReviewIcon, iconSize: [23, 23] },
  ],
  image: {
    src: ehrClinician,
    alt: 'Nurse reviewing clinical charts on two tablets at a nursing station',
  },
};

export const outcomesFeatures = {
  // The highlighted phrase is yellow in the frame.
  title: ['Integrated EHR Features for ', { text: 'Better Outcomes', emphasis: true }],
  items: [
    { label: 'Session Notes & Easy Tracking', icon: sessionNotesIcon, iconSize: [36, 32] },
    { label: 'Customizable Templates', icon: templatesIcon, iconSize: [48, 34] },
    { label: 'Smart Utilization Review', icon: utilizationIcon, iconSize: [40, 40] },
    { label: 'Custom Care Plans', icon: carePlansIcon, iconSize: [32, 40] },
    { label: 'Medication Management', icon: medicationIcon, iconSize: [28, 36] },
    { label: 'Seamless Lab Integrations', icon: labIcon, iconSize: [28, 38] },
    { label: 'Digital Signatures', icon: signaturesIcon, iconSize: [38, 36] },
    { label: 'Discharge Planner', icon: dischargeIcon, iconSize: [36, 36] },
  ],
};

export const financialPerformance = {
  titleLines: ['Financial Performance for', 'Recovery Centers'],
  description:
    'Maximize reimbursements and reduce bad debt with real-time eligibility verification and automated claim generation.',
  cards: [
    { label: 'Real-time Eligibility Verification', icon: finEligibilityIcon, iconSize: [21, 26] },
    { label: 'Electronic Claim Submission', icon: finClaimsIcon, iconSize: [24, 26] },
    { label: 'Seamless Payment Integration', icon: finPaymentsIcon, iconSize: [25, 24] },
  ],
};

export const financialFeatures = {
  // The highlighted phrase is purple in the frame.
  title: ['Endless Features that drive ', { text: 'Financial Performance', emphasis: true }],
  items: [
    { label: 'Insurance Eligibility Verification', icon: insuranceEligibilityIcon, iconSize: [40, 40] },
    { label: 'Cost of Care Calculation', icon: costOfCareIcon, iconSize: [36, 36] },
    { label: 'Integration with Clearing House', icon: clearingHouseIcon, iconSize: [40, 36] },
    { label: 'Claim Generation & Processing', icon: claimGenerationIcon, iconSize: [32, 40] },
    { label: 'ERA Handling & EOB Processing', icon: eraHandlingIcon, iconSize: [40, 40] },
    { label: 'Advanced Payment Tracking', icon: paymentTrackingIcon, iconSize: [38, 36] },
    { label: 'Automated Payment Processing', icon: automatedPaymentsIcon, iconSize: [40, 40] },
    { label: 'Workflows for Payment Reminders', icon: paymentRemindersIcon, iconSize: [40, 32] },
  ],
};

// Same band as About Us. There is no contact form on this page, so the button goes to the
// contact route used by the EHR page's "Contact Us Now".
export const tcCtaBand = {
  title: 'Take The next Step',
  description: 'Ready To Change How You Handle Your Patients? Click Here To Be Future Ready With Elixir',
  cta: { label: 'Contact Us Now', to: '/company/contact' },
};
