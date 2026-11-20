// Elixir Winter’26 release note. Body copy is exactly as supplied. The slug, SEO title and
// description, author and publish date (March 12, 2026) are the previous website's
// (https://elixirehr.com/ehr-and-patient-care-elixir-ai-features-winter26-release-note/, via the
// Wayback Machine). Its featured image (wp-content/uploads/2025/05/thumbnail2.jpg) was not archived,
// so the card uses the site's existing clinician photo until the original is supplied; like
// Summer’26, the detail page has no banner image.
import cardImage from '../../assets/insights/all-resources-hero.webp';

const strong = (text) => ({ text, strong: true });
// A bold feature line over its description, as supplied.
const feature = (label, text) => [
  { type: 'paragraph', text: [strong(label)] },
  { type: 'paragraph', text },
];
// "Label – description" entries, as supplied.
const entry = (label, text) => [strong(label), ` – ${text}`];

export default {
  title: 'Elixir Winter’26 Version 1.960 Release is available',
  excerpt:
    'This release delivers significant improvements across EHR, RCM and Patient Portal, all aimed at enhancing usability, compliance, and operational efficiency.',
  publishDate: '2026-03-12',
  author: 'elixirAdmin',
  version: '1.960',
  seo: {
    title: 'Elixir AI Features Winter ’26 Release Enhancing EHR & Patient Care',
    description:
      'Explore the Elixir Winter ’26 release featuring advanced AI capabilities designed to enhance EHR workflows, improve patient care, streamline clinical processes, and support smarter healthcare decision-making',
  },
  cardImage: { src: cardImage, alt: 'Clinician reviewing a tablet beside dashboards on two monitors' },
  content: [
    { type: 'paragraph', text: [strong('Release Date:'), ' January 13, 2026'] },
    { type: 'paragraph', text: 'Welcome to the Elixir Winter’26 Release!' },
    {
      type: 'paragraph',
      text: 'This release delivers significant improvements across EHR, RCM and Patient Portal, all aimed at enhancing usability, compliance, and operational efficiency.',
    },

    { type: 'heading', level: 2, text: 'AI-Powered Features' },
    ...feature(
      'Summarize patient charts and retrieve information through conversational queries',
      'Providers can generate concise summaries of longitudinal patient records and ask questions to quickly locate relevant patient related clinical information.',
    ),
    ...feature(
      'Generate structured clinical notes from recorded provider patient appointments',
      'Providers can dictate a transcript and select the note type they want to create, after which the system generates a structured clinical note based on the recorded transcript.',
    ),
    ...feature(
      'Insert dictation transcripts or summaries directly into notes fields',
      'Providers can dictate content and choose to insert either the full transcript or an AI-generated clinically relevant summary into rich text or long text documentation fields.',
    ),
    ...feature(
      'Summarize lab results and answer questions about report details',
      'System automatically generates summaries of lab reports and allows providers or patients to ask questions to better understand results and trends.',
    ),
    ...feature(
      'Assist patients and staff with appointment scheduling and management.',
      'Patients and front desk users can use AI agents for booking, rescheduling, or canceling appointments within both the patient portal and EHR.',
    ),
    ...feature(
      'Simplify insurance eligibility responses with summarized coverage insights.',
      'Converts complex eligibility responses into easy-to-review summaries and supports conversational queries to clarify benefits and coverage details.',
    ),
    ...feature(
      'Assist providers with contextual insights and workflow support.',
      'Surfaces relevant patient information and guidance within Elixir to help providers review records, document encounters, and navigate clinical workflows more efficiently.',
    ),

    { type: 'heading', level: 2, text: 'EHR and Patient Care' },

    { type: 'heading', level: 3, text: 'Lab Orders' },
    {
      type: 'list',
      items: [
        'The Lab Order screens have been redesigned with improved layout, clearer section grouping, and better field organization to enhance usability and streamline order creation and review.',
        'The Lab Order PDF has been redesigned with a cleaner format and improved presentation of tests, diagnosis codes, and order details to make printed and shared reports easier to review.',
        'Administrators can now configure header and footer content for Lab Order PDFs, allowing organizations to tailor the document layout to their needs.',
        'Providers can view lab results over time using a dynamic chart that displays trends for selected lab tests, helping identify changes in clinical values and monitor patient progress more effectively.',
        'Administrators can define default lab, facility, and user-related fields in Lab Order Settings to automatically populate key information during lab order creation, reducing manual data entry while allowing users to update values when needed.',
        'Providers can use configurable order sets that group commonly ordered lab tests and bundles together, enabling quicker selection of relevant tests based on clinical needs.',
      ],
    },

    { type: 'heading', level: 3, text: 'Prescriptions' },
    {
      type: 'list',
      items: [
        'Prescription Orders now display both Manual Rx and eRx records in one consolidated list view, with filters and an order type indicator for easier management and navigation.',
        'Additional fields such as dosage, frequency, medication type, and administration details are now available when creating manual eRx orders, improving prescription documentation accuracy.',
        'Users can now record new medications independently of prescription orders, enabling providers to document medications that were not prescribed within the system.',
        'The patient medication list now supports filtering, status updates, end date tracking, and management of active and inactive medications for better medication history visibility.',
        'Historical medications can now be entered using the Med Entry screen in the eRx workflow, with recorded medications syncing back to the patient record.',
        'Patient allergy data is now integrated with the eRx system to ensure allergy records remain consistent and accessible across prescribing workflows.',
        'Allergy records added or updated in either system are automatically synchronized, ensuring providers have an accurate and unified allergy history.',
        'Prescription orders now open in console tabs, allowing providers to create, edit, and review prescriptions for multiple patients simultaneously without losing context.',
      ],
    },

    { type: 'heading', level: 3, text: 'Template Builder' },
    {
      type: 'list',
      items: [
        'The Notes UI has been redesigned to provide a cleaner layout and improved documentation experience for providers.',
        'The Template Configuration interface has been redesigned with a cleaner layout and improved navigation',
        'Standardized templates such as HPI, ROS and Physical Exam are now available to support structured clinical documentation workflows with improved search functionality, editable text fields, and refined layout styling.',
        'Templates now support version control to ensure new forms use the latest active template while preserving older versions for existing records.',
        'Forms based on inactive template versions can no longer be cloned to ensure new forms are created from active templates only.',
        'Template Builder now supports configurable custom UI and PDF components that can be embedded within templates for extensible form functionality.',
        'Administrators can configure fields in forms and notes to control whether they are editable by users.',
        'Form fields now support auto-populating values from fields used in other forms, using the most recent value recorded for the selected field.',
        'Providers can insert previously recorded patient allergies directly into clinical notes.',
      ],
    },

    { type: 'heading', level: 3, text: 'Patient Chart' },
    {
      type: 'list',
      items: [
        'The Patient Search screen has been refreshed with an improved layout and enhanced filtering experience for faster patient lookup.',
        'The patient card UI has been standardized across EHR, RCM, and the Patient Portal with shared configuration and a consistent layout.',
        'Added a configurable Quick Action section on the patient profile that allows users to quickly access actions such as Notes, eRx, and Lab Orders.',
        'Patient search now supports filtering by Care Provider, allowing users to quickly locate patients associated with specific practitioners.',
        'Vital sign charts now support configurable date ranges, smart axis scaling, tooltips with measurement details, and customizable trendline colors for improved clinical data visualization.',
        'Vital trends also supports a table view that displays multiple vital signs across dates and times, with configurable default vitals and a default date range of the last 7 days for easier trend review.',
      ],
    },

    { type: 'heading', level: 3, text: 'Message Center' },
    {
      type: 'list',
      items: [
        'The Message Center interface has been updated to provide a cleaner and more organized messaging experience for viewing, composing, and managing patient communications.',
        'Introduced a centralized Message Console that allows users to view and manage patient messages through a standard list view with filters for Inbox, Outbox, Bookmarked, and Archived messages.',
        'Patients are now automatically notified via email and patient portal when an appointment is rescheduled, with configurable templates and delivery settings.',
      ],
    },

    { type: 'heading', level: 3, text: 'Medical Coding' },
    {
      type: 'list',
      items: [
        'Introduced a custom patient diagnosis screen with enhanced fields and search-based diagnosis code selection for improved clinical documentation.',
        'The patient procedure screen in RCM has been redesigned with improved field organization, advanced procedure details, and enhanced claim-related information.',
        'Modifiers and diagnoses selections now display using pill-style UI components for easier selection and improved readability during procedure documentation.',
        'Providers can mark and quickly select preferred diagnosis and procedure codes during clinical documentation to streamline coding and reduce repetitive searches.',
      ],
    },

    { type: 'heading', level: 3, text: 'Appointments' },
    {
      type: 'list',
      items: [
        'Appointment scheduling now supports an optional Appointment Category that filters available appointment types in both EHR and Patient Portal.',
        'Work schedule creation now enforces validation rules to prevent duplicate or overlapping schedules for the same appointment category, type, and time slot.',
        'Only active practitioners with at least one future work schedule are available for selection during appointment creation, editing, and rescheduling.',
        'The patient account now includes a dedicated Appointments list view with filters for Upcoming, Past, and All Appointments, improving appointment tracking and management.',
        'Resolved inconsistencies in Upcoming and Past Appointment date formats to ensure dates display according to the user’s locale settings.',
      ],
    },

    { type: 'heading', level: 3, text: 'Miscellaneous UI Revamp' },
    {
      type: 'list',
      items: [
        entry(
          'Outbound Referral UI',
          'The Outbound Referral interface has been updated to provide a clearer and more streamlined workflow for managing referral requests.',
        ),
        entry(
          'New/Edit Order UI',
          'The Order creation and editing screens have been redesigned to improve usability and simplify order entry workflows.',
        ),
      ],
    },

    { type: 'heading', level: 2, text: 'Revenue Cycle Management' },

    { type: 'heading', level: 3, text: 'Claims Management' },
    {
      type: 'list',
      items: [
        'Claims now require a Resubmission Code during resubmissions ensuring compliance with payer requirements and preventing claim submission errors.',
        'Users can now perform bulk synchronization of claims directly from the Claims list view, enabling faster resolution of claim errors and streamlined claim processing workflows.',
        'New fields have been added to Claim and Claim Line Item records to support enhanced billing data capture and reporting.',
      ],
    },

    { type: 'heading', level: 3, text: 'Electronic Remittance Advice' },
    {
      type: 'list',
      items: [
        'Users can now post all eligible ERAs directly from the ERA list view using a new Post All action, allowing bulk payment posting based on the current list view filters.',
        'ERA records are now locked from editing while payment posting is in progress, preventing data inconsistencies during the posting process.',
        'New financial fields including Interest Paid by Payor, Late Filing Charge, and Net Paid are now available across ERA, Claim-level ERA, and ERA Line Item screens to support improved payment reconciliation.',
        'ERA screens have been enhanced with improved field visibility, consistent display of financial data, and cleaner layouts to make payment details easier to review and manage.',
        'Reconciliation capabilities have been enhanced with existing and additional financial fields and improved data visibility across ERA and ERA line items to support more accurate payment reconciliation.',
      ],
    },
  ],
};
