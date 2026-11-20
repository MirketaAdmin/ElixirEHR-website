// Elixir Summer’25 release note. Body copy is exactly as supplied. The slug, author and publish date
// (September 16, 2025) are the previous website's (https://elixirehr.com/elixir-summer25-release-v1-880/,
// via the Wayback Machine). Its featured image (wp-content/uploads/2025/09/thumbnail-23.jpg) was not
// archived, so the card uses an existing site photo until the original is supplied; like Summer’26,
// the detail page has no banner image.
import cardImage from '../../assets/contact-us/hero-card.webp';

const strong = (text) => ({ text, strong: true });
// "Label: text" lines, with the label in bold, as supplied.
const labeled = (label, text) => [strong(label), ` ${text}`];
// A numbered or named item: its bold title, an optional intro line, then its points.
const group = (label, intro, items) => [
  { type: 'paragraph', text: [strong(label)] },
  ...(intro ? [{ type: 'paragraph', text: intro }] : []),
  ...(items ? [{ type: 'list', items }] : []),
];

export default {
  title: 'Elixir Summer’25 Version 1.880 Release is available',
  excerpt:
    'This release delivers significant improvements across EHR, Patient Portal and — all aimed at enhancing usability, compliance, and operational efficiency.',
  publishDate: '2025-09-16',
  author: 'elixirAdmin',
  version: '1.880',
  cardImage: { src: cardImage, alt: 'Clinician reviewing a tablet in a bright hospital corridor' },
  content: [
    { type: 'paragraph', text: [strong('Release Date:'), ' September 10, 2025'] },
    { type: 'paragraph', text: 'Welcome to the Elixir Summer’25 Release!' },
    {
      type: 'paragraph',
      text: 'This release delivers significant improvements across EHR, Patient Portal and — all aimed at enhancing usability, compliance, and operational efficiency.',
    },

    { type: 'heading', level: 2, text: 'EHR' },

    { type: 'heading', level: 3, text: 'Patient Account' },
    ...group(
      '1. Default Patient Chart Landing Page',
      'We have introduced a new default landing page that brings together key clinical components in a single, configurable view for faster patient insights.',
      [
        labeled('Column 1:', 'Pinned section featuring Active Allergies and Quick Action buttons.'),
        labeled('Column 2:', 'Patient Summary tab with Patient Details and Activity tabs; additional tabs can be enabled at implementation level.'),
        labeled('Column 3:', 'Active Alerts and Timeline (timeline configuration is not part of this release).'),
        'The tab structure continues to display in the existing header position',
      ],
    ),
    ...group(
      '2. Patient Summary – Consolidated Clinical View',
      'The new Patient Summary delivers a comprehensive, at-a-glance view of a patient’s latest clinical information to support real-time decision making.',
      [
        labeled('Included Components:', 'Recent Vitals, Vital Signs Trend, Latest Notes, Active Conditions, Current Diagnosis, Lab Orders, Current Medications, and Recent Procedures.'),
      ],
    ),
    ...group('Administrative Controls:', null, [
      'Profile-based settings to select visible components and columns (maximum of three columns per component).',
      'Default configuration displays all components and columns for system administrators.',
      'Fully responsive design supports both desktop and tablet layouts.',
    ]),
    ...group('3. Patient Card Enhancements', 'Enhancements have been made to improve usability and readability of the Patient Card.', [
      labeled('Refined UI:', 'Reduced card height and evenly spaced fields (as per attached reference screenshot).'),
      'The Patient Card now opens by default, ensuring critical patient details are immediately visible.',
    ]),
    ...group(
      '4. Unified “Orders” Tab',
      'A new top-level “Orders” tab has been added to simplify order management within the EHR patient account navigation',
      [
        labeled('Sub-tabs:', 'Lab Orders, Prescription Orders, and Inventory Orders—each presenting relevant order details and maintaining consistent table layouts and filters.'),
        'The previous “Medical Orders” items have been refactored and reorganized, eliminating duplicate tabs and ensuring clear separation of order types.',
        'Users can seamlessly switch between sub-tabs without losing context.',
      ],
    ),

    { type: 'heading', level: 3, text: 'Care Plan' },
    ...group(
      'Care Plan Patient Demographic Section – Customization Capabilities',
      'This release introduces enhanced configurability for the Patient Demographic section within the Care Plan module, enabling implementation administrators to tailor the form to client- or implementation-specific requirements.',
      null,
    ),
    ...group('Key Highlights', null, [
      labeled('Relabel Fields:', 'Administrators can rename default field labels to match implementation needs. Example: Change “Patient Name” to “Student Name”.'),
      labeled('Remove or Reorder Fields:', 'Ability to hide or remove default fields (e.g., Primary Therapist, Clinical Supervisor) and rearrange the order of both default and custom fields.'),
      labeled(
        'Add Custom Fields:',
        'Administrators can create new fields—supporting text, picklist, date, lookup, formula, date/time, email, number, phone, time, and checkbox types— and position them alongside existing fields. Limit: Maximum of 10 fields allowed in the Care Plan header',
      ),
      labeled('Field Visibility Rules:', 'Field configurations can be defined per implementation or account, allowing different clients to maintain unique demographic forms.'),
    ]),

    { type: 'heading', level: 3, text: 'Lab Order' },
    ...group('1. Lab Order User Experience on Portal', null, [
      labeled('Enhanced List View:', 'Added configurable columns—implementation teams can choose and order up to 7 columns (including custom fields) for the patient-facing lab order table on patient portal.'),
      labeled('Multi-Panel Handling:', 'Multi-panel lab orders now display as “Multi-Panel” by default, with the label configurable via custom labels.'),
      labeled('Expandable Test Details:', 'Patients can expand/collapse a lab order row to view associated panels and their tests with key details; the list defaults to collapsed on refresh.'),
      labeled('Result PDF Access:', 'Lab result PDFs are viewable at the order level only, not at the test level.'),
      labeled(
        'Settings Management:',
        'New “Lab Order Settings” section in Patient Portal Settings allows configuration of column visibility and order status filters; changes persist across sessions. Providers will now have more control on which details are visible to patient along with which status orders are being seen.',
      ),
    ]),
    ...group('2. Lab Order User Experience in EHR', null, [
      labeled('Comprehensive List View:', 'Clinical users see key fields - Lab Order ID, Test Name, Lab, Status, Type, Created/Modified timestamps, and Result.'),
      labeled('Multi-Panel Expansion:', 'Expand/collapse icons show associated panels and tests beneath each order; list defaults to collapsed on refresh.'),
      labeled('Bulk Electronic Transmission:', 'Multi-select checkboxes allow transmitting multiple orders at once through existing transmission workflows; ineligible orders have disabled checkboxes.'),
      labeled('Result PDF Access:', 'Result PDFs are viewable at the order level only (list and record level), with no edit option at the test level.'),
      labeled('Order Status Logic:', 'Status reflects combined test states (Saved, Transmitted, Results Received/Partial, Cancelled) per defined business rules.'),
    ]),
    ...group('3. Ability to Save a Lab Order Before Transmission', null, [
      labeled('Controlled Transmission:', 'E-lab orders are sent to CHC only when the user clicks Transmit.'),
      labeled('Status Handling:', 'New or manual orders default to Saved; status updates to Transmitted upon sending.'),
      labeled('Pre-Transmit Editing:', 'Users can edit lab orders before transmission.'),
      labeled('Portal Record Creation:', 'Lab order records are not created in CHC until the status is Transmitted.'),
      labeled('Manual Order Flexibility:', 'For manual orders, status remains Saved until manually changed by the user.'),
    ]),
    ...group('4. Lab Order Bundles for e-Labs', null, [
      labeled('Bundle Creation:', 'Users can select multiple lab tests and group them into a single bundle.'),
      labeled('Single Submission:', 'Entire bundle can be submitted to e-Labs as a part of an order in one request, streamlining multi-test ordering.'),
      labeled('Confirmation & Tracking:', 'Users receive confirmation upon submission and can track bundle status (e.g., pending, completed).'),
      labeled('Editable Before Submission:', 'Users can add or remove tests in a bundle before sending without impacting already placed orders.'),
      labeled('Integration Support:', 'Bundled tests are automatically split and passed to integration partners.'),
    ]),
    ...group('5. Default Values for Lab Order Fields', null, [
      labeled('Auto-Population:', '“Ordering Physician,” “Entered By,” and “Verified By” fields auto-populate with the logged-in user’s details.'),
      labeled('Admin Configuration:', 'Admins can define default values for these fields in Admin Settings with contextual help text.'),
      labeled('User Overrides:', 'Users can manually override auto-populated or admin-set defaults when creating or editing lab orders.'),
      labeled('Persistent Changes:', 'Updates to these fields are saved with the lab order and persist in the record.'),
    ]),

    { type: 'heading', level: 3, text: 'Prescription Order Management' },
    {
      type: 'list',
      items: [labeled('Compound Prescription Visibility:', 'Prescriptions created using compound formulations now correctly appear in the Prescription List View.')],
    },

    { type: 'heading', level: 3, text: 'Messaging' },
    ...group('Automated System Messages to Patients – Canceled Appointments', null, [
      labeled('Automatic Notifications:', 'When an appointment is marked Canceled, Elixir automatically sends a cancellation message to the patient, keeping them informed and reassured.'),
      labeled('Admin Configurable Setting:', 'A new “Notification for cancelled appointments” toggle in Admin Settings → Automated Message Settings allows administrators to enable or disable these notifications.'),
      labeled(
        'Flexible Delivery Channels:',
        'Notifications are sent to the patient’s personal email and to the Patient Portal message center (if enabled). If the portal is not enabled, the email is still delivered while no portal message is generated.',
      ),
      labeled(
        'Customizable Message Template:',
        'Providers can personalize the cancellation message template—subject and body—within their org settings. Messages are sent via a provider-configurable default email address and include a link to the Patient Portal.',
      ),
      labeled('Packaged Default Template:', 'Elixir includes a ready-to-use template. Includes placeholders for Patient Name, Practitioner Name, Date & Time, and provider contact details.'),
    ]),
    ...group('Automated System Messages to Patients – Rescheduled Appointments', null, [
      labeled(
        'Automatic Notifications:',
        'When an appointment is marked Rescheduled, Elixir automatically sends a message to the patient with the updated date and time, ensuring a seamless and professional experience.',
      ),
      labeled('Admin Configurable Setting:', 'A new “Notification for rescheduled appointments” toggle in Admin Settings → Automated Message Settings lets administrators enable or disable these notifications.'),
      labeled(
        'Flexible Delivery Channels:',
        'The notification is delivered via the patient’s personal email and the Patient Portal message center (if enabled). If the portal is not enabled, the email is sent and no portal message is generated.',
      ),
      labeled(
        'Customizable Message Template:',
        'Providers can personalize the rescheduling email/portal template—subject and body—at the org level. Messages are sent from a default provider-configurable email address and include a link to the Patient Portal.',
      ),
      labeled(
        'Packaged Default Template:',
        'Elixir ships with a ready-to-use template. Includes placeholders for Patient Name, Practitioner Name, New Appointment Date and Time, and a link to log in to the Patient Portal.',
      ),
    ]),
    ...group('Automated Emails for Message Center – Configurable Setting', null, [
      labeled('Renamed Settings Section:', 'The Bulk Messages Settings section is now titled “Automated Message Settings” for clarity.'),
      labeled(
        'New Toggle Control:',
        'An “Send automated Message Center emails” checkbox allows admins to enable or disable automated emails generated from Message Center triggers such as appointment confirmations and reminders.',
      ),
      labeled('Default Behavior:', 'The option is enabled by default to preserve existing notification workflows, but can be turned off by an admin at any time.'),
    ]),

    { type: 'heading', level: 3, text: 'Template Management' },
    ...group('1. Streamlined Edit & Delete Experience for Notes Components', 'Enhances consistency and control for Allergies, Vital Signs, Problems, Diagnosis, and Procedures.', [
      'All edits update the Patient Database to keep records consistent across the system.',
      'Edits can be performed only after a form/note is saved.',
      'Deletion of records on Notes is restricted in all modes to protect clinical data integrity.',
      'Disclaimers alert users that edits will modify patient database records.',
      'Data added from other Notes remains visible and unaffected.',
      'Uniform edit/delete behavior across all covered components reduces learning curve.',
    ]),
    ...group('2. Clinical Efficiency: “Is Preferred” for Frequently Used Entries', 'Improves charting speed by surfacing commonly used codes.', [
      'New “Is Preferred” checkbox on master data objects (Diagnosis, Procedure codes, Referral Organizations, Modifiers).',
      'Popup screens show preferred codes by default with guidance message: “By default, only the preferred diagnosis codes are shown. Please search to add more codes.”',
      'Users can still search full code sets beyond preferred entries.',
      'Reduces time spent searching for common codes.',
      'Improves accuracy in selecting frequently used clinical data.',
    ]),
    ...group('3. Custom Header and Footer Fields in EHR Forms', 'Gives flexibility to include contextual information in forms and exported PDFs.', [
      'Configurable header and footer sections in the Form Layout Editor.',
      'Supported field types: text, lookup, date, time, date/time, number, formula, phone, email, Salesforce formulae (e.g., today’s date, this year).',
      'Fields appear as confiured in both on-screen form preview and exported PDFs.',
      'Updates to header/footer automatically propagate without affecting stored patient data.',
    ]),
    ...group('4. Dedicated Nursing Tab', 'Centralizes nursing-related information for efficient access.', [
      'New “Nursing” tab accessible from the patient account.',
      'Sections include Nursing Notes, Allergies, Vitals, Current Medications, and Immunizations.',
      'Each section pulls data from its original module and remains in sync.',
    ]),
    ...group('5. Form Toasts for Patient Mode', 'Improves feedback when patients interact with forms.', [
      'Real-time toast notifications confirm key actions in patient mode.',
      'Provides immediate visual confirmation without page reloads.',
      'Enhances user confidence that actions have been saved or submitted.',
    ]),
    ...group('6. Enhanced Signature Experience in EHR & Patient Portal', 'Delivers a smoother and more reliable signing process.', [
      'System displays error message “Please register signature to proceed with Sign & Approve” if user has no registered signature; signature pad remains closed.',
      'Added an exception log to Elixir Exception Log object for any permission issues, while retaining aura-handled exceptions.',
      'Clear button now instantly clears the signature without confirmation prompt.',
      'Popup after saving a signature is removed; a toast message confirms success instead.',
      'Save button is disabled with a spinner after click to indicate processing.',
      'Optimized error message for Submit To Provider without signature, making it mobile-friendly.',
      'Ensures reliability and reduces user confusion.',
      'Improves signing performance for both clinicians and patients.',
    ]),
    ...group('7. Category Filter for Forms/Notes List View', 'Enables quick filtering of documents by category.', [
      'Multi-select category dropdown added to Forms/Notes list view.',
      'Selecting one or more categories filters the list to matching forms/notes.',
      'Improves searchability in large document sets.',
      'Enhances user productivity in managing clinical documentation.',
      'Provides a more organized and focused list view.',
    ]),

    { type: 'heading', level: 3, text: 'Medical Coding' },
    { type: 'paragraph', text: 'Simplified patient procedures screen to enhance clinical efficiency and reduce operations load' },

    { type: 'heading', level: 3, text: 'Immunization' },
    ...group(
      'CDC Recommended Vaccines Setup',
      'Elixir now provides an automated immunization schedule with proactive alerts to help practitioners monitor patient vaccination compliance.',
      null,
    ),
    ...group('Missed & Upcoming Doses:', null, [
      'Displays missed and upcoming vaccine doses based on patient age and vaccine history.',
      'Missed doses flagged with red alert and due date; upcoming doses (next 30 days) marked with a warning icon.',
    ]),
    ...group('Automated Schedule Generation:', null, [
      'Auto-generates the recommended vaccine schedule using patient age, vaccine history, and dose series.',
      'Tracks doses as Completed, Missed, Due next, or Too early, with catch-up and exception handling.',
    ]),
    ...group('Practitioner Notifications & Tasks:', null, [
      'Creates a Salesforce task for each missed dose to prompt follow-up.',
      'Logs notification history and allows practitioners to complete follow-up tasks.',
    ]),
    ...group('Patient Communication:', null, ['Option to send reminder notifications to patients via email or patient portal message.']),

    { type: 'heading', level: 3, text: 'Utilization Management' },
    { type: 'paragraph', text: 'Elixir now comes with standardized key fields to manage service approvals and compliance across UR records.' },
    ...group('Description:', null, [
      'Common fields include Review Type, Service Type, Review Status, Requesting Provider, Dates, Coverage Outcome, Authorization Number, Linked Care Episode, and Notes.',
      'Dynamic fields by service type (e.g., Inpatient Stay: Admit/Discharge Dates, Facility, Program, Total Days; CPT: CPT Code, Description, Approved/Completed/Available Units).',
    ]),

    { type: 'heading', level: 2, text: 'Patient Portal' },
    ...group(
      '1. Trigger Patient to Complete Assigned Tasks on Portal',
      'Trigger patient notifications to complete assigned tasks on the Elixir Patient Portal to ensure care plan adherence, intake processes, and clinical workflows remain on track.',
      [
        labeled('Task Visibility:', 'Tasks assigned to patients display with due dates and statuses in the portal.'),
        labeled(
          'Configurable Notifications:',
          'Providers can enable/disable bulk messaging for task assignment and reminders via Bulk Message Settings. Automatic reminders can be scheduled based on due dates or inactivity intervals.',
        ),
        labeled(
          'Automated & Trackable Reminders:',
          'Reminders are sent to the patient’s personal email and portal inbox, with configurable templates. Completion status updates in both the portal and Elixir.',
        ),
      ],
    ),
    ...group(
      '2. Trigger Collection of Vitals from Patient Portal',
      'Automatically request patients to submit their vital signs in the portal based on predefined criteria to monitor health remotely and intervene when necessary.',
      [
        labeled('Trigger Criteria:', 'Admins configure trigger conditions on the implementation end.'),
        labeled('Patient Notifications:', 'Patients receive notifications in the Recent Updates section and are redirected to enter vitals.'),
        labeled(
          'Provider Monitoring & Escalation:',
          'Submitted vitals are flagged on the provider dashboard; non-submission triggers reminders and escalation alerts. Differentiation between patient-entered and provider-entered data is tracked in the EHR.',
        ),
      ],
    ),
    ...group('3. Filtering Forms Based on Category on Portal', 'Allow patients to filter forms in the portal based on category for easier navigation and task completion.', [
      labeled('Category Filter:', 'Users can filter forms by category in the portal.'),
      labeled('Default View:', 'Shows all forms if no category is selected.'),
      labeled('Responsive:', 'Filtering works seamlessly on both desktop and mobile devices.'),
    ]),

    { type: 'heading', level: 2, text: 'RCM' },

    { type: 'heading', level: 3, text: 'Insurance' },
    ...group(
      'Ability to Select Provider for Eligibility Verification',
      'Allow users to select a provider when performing eligibility verification to ensure the correct provider associated with the patient’s insurance is verified.',
      [
        labeled(
          'Provider Selection:',
          'A search field labeled Provider Name appears below the Payer field. It is dependent on the selected payer and defaults to the patient’s insurance-associated provider. Users can search, select, and change the provider, and the selection persists for the session while updating verification requests accordingly.',
        ),
      ],
    ),

    { type: 'heading', level: 3, text: 'Claims Management' },
    ...group('1. Secondary Claim Creation Restriction', 'Prevents creation of secondary claims when active secondary insurance is absent.', [
      'Secondary claims will not be created if the patient does not have active secondary insurance.',
      'Includes all claim creation scenarios.',
      'Applies even when ClaimMD returns status codes 2 or 19.',
      'Covers responses like “Processed as Secondary,” “Processed as Primary,” or “Transferred to Secondary.”',
    ]),
    ...group('2. CMS-1500 Claim Line Item Fields', 'Supports comprehensive capture of all CMS-1500 line item details.', [
      'Includes Dates of Service, POS, EMG, Procedure Codes, Modifiers, Diagnosis Pointers, Charges, and Units.',
      'Additional details: NDC Code, NDC Dosage, NDC Unit of Measure, Prior Auth / CLIA Number, EPSDT, Family Plan.',
      'Ordering, Rendering, and Supervising Provider sections included with full contact and identifier details.',
      'Facility and Purchased Service information fully supported.',
      'All fields sent to ClaimMD for accurate claim submission.',
    ]),
    ...group('3. Standard Claim Line Item Page Updates', 'Enhances usability and alignment with CMS-1500 requirements.', [
      'Improved field arrangement and labeling for clarity.',
      'Ensures all necessary fields are visible and accessible.',
      'Supports accurate claim creation and submission workflow.',
    ]),
    ...group('4. Claim Status Automation for Posting', 'Introduces standardized workflow for automatic claim status updates.', [
      'Claim statuses include Draft, Ready to Submit, Submitted to Clearinghouse/Payer, Accepted/Rejected, ERA Received, Denied, Partially Paid, Paid and Overpaid',
      'Defined formulas and logic for status transitions.',
      'Reduces manual intervention and enhances claim lifecycle visibility.',
    ]),
    ...group('5. Secondary Claim Transfer Prompt', 'Notifies users when a secondary claim already exists.', [
      'Prevents duplicate secondary claim creation.',
      'Ensures accurate patient and insurance financial tracking.',
    ]),
    ...group('6. Multiple Secondary Claims for Multiple ERAs', 'Correctly creates secondary claims for multiple ERAs.', [
      'Generates one secondary claim per ERA when “Transfer to Secondary” is selected for each.',
      'Prevents incorrect consolidation into a single secondary claim.',
      'Supports accurate tracking of partial payments and patient responsibility.',
    ]),
    ...group('7. Partial Payments via Multiple ERAs – Autoposting', 'Enables automatic posting of partial payments across multiple ERAs.', [
      'Tracks payments, adjustments, patient responsibility, and allowed amounts at CPT and claim levels.',
      'Ensures accurate balance calculation for cumulative partial payments.',
    ]),
    ...group('8. Partial Payments via Multiple ERAs – Manual Posting', 'Supports cumulative payment posting for claims with multiple ERAs.', [
      'Users can post, reverse, or reallocate payments manually.',
      'ERA allocation supported at line-item level.',
      'Reversals required when updated ERA files are received.',
    ]),
    ...group('9. Manual ERA Payment Posting Unrestricted', 'Removed calculation validations for manual ERA posting.', [
      'Manual posting allowed for all primary and secondary claims.',
      'Validations no longer block posting in Parent or Claim ERA screens.',
      'Supports new and edit modes for all claims.',
    ]),
    ...group('10. Overpayment Handling During ERA Posting', 'Enables correct processing of overpaid claims.', [
      'User can post payments where Paid > Billed Amount.',
      'Claim status automatically updated to Overpaid.',
      'PR considered 0 by default; adjustments recalculated if PR is entered.',
    ]),
    ...group('11. CMS-1500 Form: Payer Section Updates', 'Enhances capture of payer-specific details.', [
      'Added fields: Payer Name, Payer ID, Payor Order, Show Payer Address checkbox, and Payer Address.',
      'Insurance Type and Medicare Type Code fields added below Section 1.',
      'Fields updated on New, Edit, View screens, and PDF output.',
      'All fields sent to ClaimMD.',
    ]),
    ...group('12. Patient Procedure Search for Claim Creation', 'Simplifies selection of unclaimed procedures when creating claims.', [
      'Supports searching by Date Range or manually.',
      'Automatically populates procedure details (CPT, Modifiers, Diagnosis Pointer, Charge, Units, Provider info).',
      'Prevents addition of duplicate procedures.',
      'Works for New Claim screen, Care Episode related list, and Claim List View.',
    ]),
    ...group('13. Accept Assignment Checkbox for CMS-1500 Claims', 'Ensures correct payer assignment handling.', [
      'Checkbox indicates if provider accepts payer’s allowed amount as full payment.',
      'Checked by default for all claims.',
      'Impacts ERA autoposting: claims marked ‘No’ cannot autopost or manually post ERA.',
      'Ensures compliance with insurance assignment rules and reduces posting errors.',
    ]),

    { type: 'heading', level: 3, text: 'Electronic Remittance Advice' },
    ...group(
      '1. "Include Posted Payments" Checkbox on Parent ERA Payment Posting Screen',
      'Enhances ERA visibility and performance by allowing users to optionally include posted Child ERAs.',
      [
        'Checkbox labeled Include Posted Payments added to the right of the Payment Posting button.',
        'When unchecked: show only unposted Child ERAs; if none exist, display “No pending ERAs for posting”.',
        'When checked: show all Child ERAs; if none exist, display “No payment records found”.',
        'Improves system performance by not loading posted records by default.',
      ],
    ),
    ...group('2. Display Pagination Info', 'Improves user clarity by showing current and total pages in paginated ERA lists.', [
      'Pagination displayed as Page X of Y next to navigation buttons.',
      'Works for both Parent and Child ERA list views.',
      'Helps users know their position within large datasets.',
    ]),
    ...group('3. Correct Pagination Button Behavior on First and Last Pages', 'Fixes navigation button behavior for paginated views.', [
      'Previous button disabled or hidden on the first page.',
      'Next button disabled or hidden on the last page.',
      'Prevents users from clicking non-functional buttons.',
    ]),
    ...group('4. ERA Payment Posting Screen – Parent ERA Tab Creation & Redirection', 'Streamlines landing page workflow for Parent ERA records.', [
      'Clicking a Parent ERA navigates directly to ERA Payment Posting screen.',
      'One-column layout ensures focus on main content.',
    ]),
    ...group('5. ERA Payment Posting Screen – Claim ERA Tab Creation & Redirection', 'Streamlines landing page workflow for Claim ERA records.', [
      'Clicking a Claim ERA navigates directly to Claim ERA Payment Posting screen.',
      'One-column layout ensures focused workflow.',
    ]),
    ...group('6. Lazy Loading & Pagination for Attach ERA and ERA Payment Posting Screens', 'Supports high-volume ERA datasets efficiently.', [
      'Screens handle up to 50,000 records using pagination and lazy loading.',
      'Maximum of 100 records per page.',
      'Payment posting occurs only for selected page records.',
      'Subtotals calculated only for records visible on the current page.',
    ]),
    ...group('7. Cheque/EFT Amount Auto-Population on Parent ERAs', 'Improves data entry efficiency by auto-filling key payment details.', [
      'Check/EFT Date and Cheque/EFT Amount auto-populated for Parent ERAs.',
      'Supports both automatic and manual ERA payment posting.',
      'Logic placed on top of package for flexibility and customization.',
    ]),
    ...group('8. ERA Autoposting Supports Partial Payments & Overpayments', 'Enhances flexibility in manual ERA payment posting.', [
      'Allows partial payments to be posted correctly.',
      'Supports overpayments with adjustment allocation.',
      'Ensures accurate financial reconciliation for all posted ERAs.',
    ]),
    ...group('9. Unique Parent ERA Enforcement', 'Prevents duplicate Parent ERA creation in Elixir.', [
      'Duplicate check based on Payment Trace Number.',
      'Applies to Parent ERAs created via ClaimMD callout or EDI 835 upload/parsing.',
      'Maintains data integrity and prevents duplicate payments.',
    ]),
    ...group('10. ERA Reversal Option on Payment Posting Screen', 'Provides controlled ERA reversal for posted payments.', [
      'Reverse button added in Action column of Attached ERAs table.',
      'Enabled only if selected ERA is already posted.',
    ]),
    ...group('11. Warning for Multiple ERA Payment Posting on Same Claim', 'Prevents duplicate payment posting across ERAs.', [
      'Autoposting blocked and user conformation required if payment already posted for any line item.',
      'Applies across same or different Parent ERAs.',
    ]),
    ...group('12. Bulk Payment Posting Optimization', 'Improves system performance for high-volume payment processing.', [
      'Supports optimized posting for multiple payments at once.',
      'Maintains search results during first-time clicks.',
      'Fixes existing search bugs.',
    ]),
    ...group('13. ERA Payment Posting Date Tracking', 'Tracks posting date for all ERA payments.', [
      'Payment Posting Date recorded for each ERA.',
      'Updated automatically for automatic, manual, reversal, and reposting scenarios.',
      'Included in field history tracking.',
    ]),
    ...group('14. Restrict Deletion of Posted ERAs', 'Protects financial data integrity by preventing deletion of posted ERAs.', [
      'Error message displayed: “Payment Posting has already been done using this ERA. You cannot delete this ERA.”',
      'Payment Reversal required before deletion is allowed.',
    ]),
    ...group('15. Start and End Balance Implementation for Claims', 'Introduces precise tracking of claim balances at every stage.', [
      labeled('Start Balance:', 'original owed amount before payments/adjustments.'),
      labeled('End Balance:', 'remaining unpaid amount after all payments/adjustments.'),
      'Supports Primary and Secondary claim calculations.',
      'Non-editable fields ensure accurate tracking.',
    ]),
    ...group('16. Custom Settings for ERA Creation & Payment Posting', 'Provides administrative control over ERA automation.', [
      labeled('ERA Creation Setting:', 'Auto receive ERAs (default: true).'),
      labeled('ERA Payment Posting Setting:', 'Enable auto payment posting (default: true).'),
      'Configurable via Elixir custom settings.',
    ]),
    ...group('17. Subtotals for ERA Columns', 'Enhances visibility of financial totals in ERA screens.', [
      'Subtotals displayed for: Total Billed, Total Allowed, Total Paid, Net Paid.',
      'Shown at bottom of each ERA table.',
    ]),
    ...group('18. Secondary Claim Manual ERA Payment Posting', 'Supports correct posting from secondary insurance.', [
      'Accepts Secondary ERA/EOB and matches to claim.',
      'Recalculates patient responsibility after secondary processing.',
      'Decimal support for all fields; validations prevent incorrect amounts.',
    ]),
    ...group('19. Matched and Unmatched Amount Auto-Calculation', 'Ensures accurate payment allocation and tracking.', [
      labeled('Matched Amount:', 'total applied to ERAs, auto-calculated, read-only.'),
      labeled('Unmatched Amount:', 'remaining portion of Cheque/EFT, auto-calculated, read-only.'),
      'Unmatched amounts auto-create Unallocated Payment Records for future allocation, refunds, or credit balances.',
    ]),
    {
      type: 'paragraph',
      text: 'Columns displayed in order: Insurance Payer, Provider, Payment Method, Payment Trace #, Cheque/EFT Date, Cheque/EFT Amount, Matched Amount, Unmatched Amount, ERA/EOB ID.',
    },
    ...group('20. Over-Application Scenario – Cheque Amount Handling', 'Handles situations where payment exceeds matched amount.', [
      'Overapplied amount allocated to Provider Adjustment.',
      'Unmatched Amount set to 0; never negative.',
      'Example: Cheque $1000, Matched $1200 → Provider Adjustment: -$200.',
    ]),
    ...group(
      '21. Post All Action for ERA List View',
      'Enables users to post all ERAs matching the current filters in a single action, improving efficiency and reducing manual selection.',
      [
        'Post All button added to the ERA list view, positioned to the left of the existing Post Selected button.',
        'Applicable only to ERAs eligible for posting.',
      ],
    ),
    ...group('Posting eligibility:', null, [
      'ERAs with pending posting are processed.',
      'ERAs with In Progress or Posted status are skipped automatically, with a message after completion.',
    ]),
    ...group('Asynchronous posting:', null, [
      'Posting handled in background to prevent timeouts.',
      'Users see toast notification: “Payment Posting for all eligible ERAs has been initiated. We will send you a notification when this process is complete.”',
      'Users can continue working in Elixir while posting runs in the background.',
    ]),
    {
      type: 'paragraph',
      text: labeled('Batch processing:', 'Updates each ERA’s Posting Status to In Progress during posting, and to Posted or Failed upon completion.'),
    },

    { type: 'heading', level: 3, text: 'Payments Management' },
    ...group(
      'Ability to See Refunds on Payment History',
      'Enhances visibility of all financial activity by displaying refund transactions in the Payment History list view.',
      [
        'Refunds now appear in the Payment History list view on the patient account.',
        'Refunds display using the same columns and format as other transactions and are clearly distinguishable as debit transactions.',
        'Refunds are included in sorting, filtering, and export options just like other payment transactions.',
        'Ensures users have a complete view of all financial activity without altering refund creation workflow.',
      ],
    ),
    ...group('Reference Number Mandatory for Refunds', 'Enforces audit compliance by requiring a Reference Number for all EFT and Gift refunds.', [
      'Reference Number field is mandatory for all refund transactions using EFT or Gift payment modes.',
      'Users attempting to post a refund without a Reference Number receive an error message',
      'All transactions are logged with the Reference Number to support auditability and reporting.',
    ]),

    { type: 'heading', level: 2, text: 'Technical Debt' },
    ...group('1. Patient Card UI Fixes', 'Enhances patient card usability and standardizes photo upload behavior.', [
      'Hardcoded patient name has been removed. Project teams can configure patient name via admin settings.',
      'Uploading a photo can now be done by clicking on the existing patient photo; separate upload icon removed.',
      'Feature implemented for both Patient Portal and EHR, RCM user screens.',
    ]),
    ...group('2. Patient Procedure Screen Performance Fix', 'Improves responsiveness when handling large volumes of template procedure codes.', [
      'Displays only the top 50 matching procedure codes in alphabetical order to maintain screen responsiveness.',
      'Screen now loads promptly regardless of the number of templates present.',
      'Prevents unresponsiveness or long load times affecting workflow.',
    ]),
    ...group('3. Asynchronous Bulk ERA Payment Posting', 'Enables efficient payment posting for multiple child ERAs without blocking the UI.', [
      'Users can select multiple unposted child ERA records (up to 100 per page) for posting.',
      'Posting is handled asynchronously; users see a toast message confirming initiation and can continue working.',
      'Notification and posting summary displayed upon completion; list view refreshes automatically to reflect updated statuses.',
    ]),
    ...group('4. Child ERAs Filter on ERA Payment Posting Screen', 'Enhances usability by allowing filtering of ERA records by multiple criteria.', null),
    ...group('Filters Added:', null, [
      'Patient Name (partial/full, case-insensitive)',
      'Total Billed Amount (Min, Max, or range)',
      'Filters work alongside existing Claim# filter and are compatible with pagination.',
    ]),
    ...group('5. Reverse Reconciliation Updates Amount Paid Field', 'Ensures accurate claim balances after reversals.', [
      'When multiple ERAs are posted, Amount Paid field is updated accordingly.',
      'When an ERA payment is reversed, Amount Paid field is updated to reflect reversal.',
    ]),
    ...group('6. Exclude Inactive Work Schedules from Appointment Availability', 'Prevents booking appointments for unavailable practitioners.', [
      'Only practitioners with active/future work schedule slots are visible.',
      'Practitioners without active schedules or all past slots are excluded from the booking list.',
    ]),
    ...group('7. ERA Payment Posting Error Handling', 'Improves visibility and tracking of payment posting failures.', [
      'Failed postings are flagged with an error icon and details logged in a Payment Posting Error field on child ERA.',
    ]),
    ...group('8. Get Payer Status Batch Heap Size Error Fix', 'Resolved heap size issues in payer status batch processing.', [
      'Claim batch now handles large response files efficiently.',
      'Fix prevents heap size errors caused by callouts returning thousands of claims',
      'Ensures DML operations for claim status updates and response file insertion execute successfully.',
    ]),
    ...group('9. Get ERA Batch Too Many SOQL Queries Error Fix', 'Optimized batch to prevent SOQL governor limit errors.', [
      'Get ERA batch has been refactored to reduce SOQL queries in loops.',
      'Supports large-scale ERA processing without hitting Salesforce governor limits.',
    ]),
    ...group('10. Claim Submission Batch Optimization', 'Improves batch processing for claim submissions.', [
      'Batch optimized for handling high-volume claim submissions.',
      'Reduces risk of timeouts and improves overall performance.',
      'Ensures reliable processing of claims in large production environments.',
    ]),
    ...group('11. Patient Lookup Screen Optimization', 'Supports bulk patient data up to 10 million records.', [
      'Optimized query and pagination logic to improve search performance.',
      'Ensures smooth user experience when searching and selecting patient records.',
    ]),
  ],
};
