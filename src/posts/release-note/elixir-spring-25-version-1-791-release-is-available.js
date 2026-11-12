// Elixir Spring’25 release note (by elixirAdmin, May 1, 2025, "Release Notes"). Body copy is
// exactly as supplied (the title, repeated at the top of the supplied copy, is the page heading).
import featuredImage from '../../assets/posts/release-note/featured/elixir-spring-25-version-1-791-release-is-available.webp';

const strong = (text) => ({ text, strong: true });
// A numbered group label ("1. Dynamic Sections & UI Improvements:") over its list, as supplied.
const group = (label, items) => [
  { type: 'paragraph', text: [strong(label)] },
  { type: 'list', items },
];

export default {
  title: 'Elixir Spring’25 Version 1.791 Release is available',
  excerpt:
    'This release delivers significant improvements across EHR, Patient Portal, RCM, and License Management — all aimed at enhancing usability, compliance, and operational efficiency.',
  publishDate: '2025-05-01',
  author: 'elixirAdmin',
  version: '1.791',
  cardImage: { src: featuredImage, alt: 'Clinician reviewing a patient chart in Elixir EHR, with the Spring’25 release areas: EHR & Patient Portal, Appointments & Telehealth, Medications & Prescriptions, RCM and System & Usability Enhancements' },
  heroImage: {
    src: featuredImage,
    alt: 'Clinician reviewing a patient chart in Elixir EHR, with the Spring’25 release areas: EHR & Patient Portal, Appointments & Telehealth, Medications & Prescriptions, RCM and System & Usability Enhancements',
    width: 1672,
    height: 941,
  },
  content: [
    { type: 'paragraph', text: [strong('Release Date:'), ' May 01, 2025'] },
    { type: 'paragraph', text: 'Welcome to the Spring ’25 Release!' },
    {
      type: 'paragraph',
      text: 'This release delivers significant improvements across EHR, Patient Portal, RCM, and License Management — all aimed at enhancing usability, compliance, and operational efficiency.',
    },

    { type: 'heading', level: 2, text: 'EHR & Patient Portal' },
    { type: 'heading', level: 3, text: 'Forms & patient Chart Enhancements' },
    ...group('1. Dynamic Sections & UI Improvements:', [
      'Added support for collapsible/expandable sections.',
      'Introduced OR operator for section visibility rules.',
      'Enforced mandatory and dynamic section names.',
      'Improved section visibility and form sharing based on tab rules.',
      'Category field added in form configuration list.',
    ]),
    ...group('2. Form Expiry & Customization:', [
      'Portal forms now expire and deactivate automatically.',
      'Configurable button names for sending forms to portal.',
      'Removed image names from PDFs for cleaner UI.',
      'Alphabetical sorting for forms.',
    ]),
    ...group('3. Custom Forms in Chart:', [
      'Ability to include and manage custom forms in the patient chart.',
      'Patient-related data now available in templates.',
      'Blank medication PDF issue resolved.',
    ]),
    ...group('4. Rich Text Support:', ['Added rich text formatting for note fields.']),

    { type: 'heading', level: 3, text: 'Appointments' },
    ...group('1. Default & Mandatory Modes:', [
      'Appointment mode is now mandatory across systems.',
      'Default appointment modes configurable at project level.',
    ]),
    ...group('2. Rescheduling Enhancements:', [
      'When rescheduling, previously selected values (e.g., provider) are retained.',
    ]),
    ...group('3. Telehealth Support:', ['Virtual meeting links now included in email confirmations/reminders.']),

    { type: 'heading', level: 3, text: 'Patient Chart & Timeline' },
    ...group('1. Patient Chart Enhancements:', [
      'Admin settings added.',
      'Improved PDF rendering and alignment for patient details.',
    ]),
    ...group('2. Timeline Enhancements:', [
      'Timeline component repositioned with new filters.',
      'All data entries now shown for complete visibility.',
    ]),

    { type: 'heading', level: 3, text: 'Medications & Prescriptions' },
    ...group('1. Prescription Order List View:', [
      'Added filters, status indicators, and managed column configuration.',
      'Stopped recording medications from being added as orders.',
      'Disabled edit for completed NewCrop prescriptions.',
    ]),
    ...group('2. Prescription & Referral Templates:', [
      'Users can now attach prescription templates to outbound referrals.',
      'Improved instruction box and auto-population of location fields.',
    ]),
    ...group('3. Route Fields Fix:', ['Limited to a single usable route field in prescriptions.']),

    { type: 'heading', level: 3, text: 'Vitals & Allergies' },
    { type: 'list', items: ['UI/UX improvements for vital lists and component behavior.'] },

    { type: 'heading', level: 3, text: 'Other Enhancements' },
    ...group('1. Signature Pad Mobile Fixes:', ['Resolved responsiveness issues on mobile devices.']),
    ...group('2. Elixir Setting Renames:', [
      'Renamed system settings for consistency (e.g., “Admin Settings” → “Elixir Admin Settings”).',
    ]),
    ...group('3. Care Episode Summary PDF:', [
      'Implemented downloadable care episode summary with key clinical details.',
    ]),
    ...group('4. Diagnosis Improvements:', ['Added “Diagnosis Type” column in search screens.']),

    { type: 'heading', level: 2, text: 'Revenue Cycle Management (RCM)' },
    { type: 'heading', level: 3, text: 'Claims & Transactions' },
    ...group('1. Claim Generation & Plug Enhancements:', [
      'CMS-1500 and UB04 plugs implemented.',
      'Admins can configure max CPT codes per claim (1–25).',
      'Manual & automatic claim-splitting logic based on CPT/diagnosis limits.',
    ]),
    ...group('2. Transaction Enhancements:', [
      'Enhanced mapping for insurance payments and adjustments.',
      'Help text settings added for better user guidance.',
      'Mode of payment marked as “Adjustment” where applicable.',
      'Allocated discount checkbox warning added.',
    ]),
    ...group('3. Improved Patient Statements:', [
      'Resolved gaps in payment data display.',
      'Secondary insurance payments now shown.',
      'Removed SSN fields for compliance.',
    ]),
    ...group('4. Insurance from Care Episode:', [
      'Claims can now be created by selecting insurance from care episodes.',
    ]),
    ...group('5. ERA & VOB Enhancements:', [
      'Additional columns for ERA tracking.',
      'VOB status now reflects “Error” when verification fails.',
    ]),

    { type: 'heading', level: 3, text: 'Custom Features & Workflow' },
    { type: 'paragraph', text: [strong('Medical Coding Plug Customization:')] },
    { type: 'paragraph', text: 'Custom plug support added for coding screen workflows.' },
    { type: 'paragraph', text: [strong('Utilization Review Enhancements:')] },
    { type: 'paragraph', text: 'New fields added for better tracking and authorization usage.' },

    { type: 'heading', level: 2, text: 'Bug Fixes and Technical Improvements' },
    {
      type: 'list',
      items: [
        'Duplicate Serial Number Issue for Care Episodes resolved.',
        'Medications in Outbound Referrals handled properly.',
        'Multiple Route Field Removal in Prescriptions completed.',
        'SSN Field Removed from Contact and Guarantor records for compliance.',
        'Blank PDF Issue for Medications in Patient Chart resolved.',
        'Vital Signs Display in Notes added for better documentation.',
        'Signature Pad Issues on mobile devices fixed.',
        'Dynamic Section Visibility (OR Operator) implementation improved.',
        'Notes Tab Column Management individually configurable.',
        'Diagnosis Type Field on Search introduced.',
        'Allocate Discount Checkbox Warning added for better financial control.',
        'Contracted and Actual Charge Updates on claim line items streamlined.',
        'Enhanced Timeline with Relationship Fields for better context.',
      ],
    },
  ],
};
