// Elixir Spring’26 release note (by Neeta, May 21, 2026, "Release Notes"). Body copy is exactly as
// supplied. TEMPORARY IMAGES: card-temp.jpg and hero-temp.jpg are cropped from the home page EHR
// dashboard photo until the final featured and banner images are supplied — replace the two files
// (or these imports) only.
import cardImage from '../../assets/posts/release-note/elixir-spring-26-version-1-1020-release-is-available/card-temp.jpg';
import heroImage from '../../assets/posts/release-note/elixir-spring-26-version-1-1020-release-is-available/hero-temp.jpg';

const strong = (text) => ({ text, strong: true });
// "Label – description" entries, as supplied.
const entry = (label, text) => [strong(label), ` – ${text}`];

export default {
  title: 'Elixir Spring’26 Version 1.1020 Release is available',
  excerpt:
    'This release delivers significant improvements across EHR, RCM and Patient Portal, all aimed at enhancing usability, compliance, and operational efficiency.',
  publishDate: '2026-05-21',
  author: 'Neeta',
  version: '1.1020',
  cardImage: { src: cardImage, alt: 'Elixir EHR dashboard open on a laptop in a clinic office' },
  heroImage: {
    src: heroImage,
    alt: 'Elixir EHR dashboard open on a laptop in a clinic office',
    width: 757,
    height: 324,
  },
  content: [
    { type: 'paragraph', text: [strong('Release Date:'), ' May 01, 2026'] },
    { type: 'paragraph', text: 'Welcome to the Elixir Spring’26 Release!' },
    {
      type: 'paragraph',
      text: 'This release delivers significant improvements across EHR, RCM and Patient Portal, all aimed at enhancing usability, compliance, and operational efficiency.',
    },

    { type: 'heading', level: 2, text: 'EHR and Patient Care' },
    { type: 'heading', level: 3, text: 'Overview' },
    {
      type: 'paragraph',
      text: 'The Elixir Spring’26 Release Version 1.1020 introduces a comprehensive set of enhancements designed to improve clinical efficiency, patient engagement, revenue cycle accuracy, and operational scalability across the healthcare ecosystem. This release focuses heavily on advancing EHR workflows, modernizing Patient Portal experiences, strengthening Care Plan outcome tracking, and optimizing RCM operations through smarter automation and enhanced governance controls.',
    },
    {
      type: 'paragraph',
      text: 'With major upgrades in lab order management, biomarker trend visualization, self check-in workflows, claims processing, ERA reconciliation, and pricing validation, Spring’26 helps healthcare organizations streamline day-to-day operations while improving both provider and patient experiences. The release also introduces more configurable workflows, enhanced compliance capabilities, and deeper visibility into clinical and financial processes.',
    },
    {
      type: 'paragraph',
      text: 'In addition to current platform improvements, Elixir continues to invest in the future of intelligent healthcare technology with upcoming innovations such as the Elixir Clinical Co-Pilot, AI-powered payer policy claim review, and the Visit Prep Assistant. Together, these advancements reinforce Elixir’s commitment to delivering a smarter, more connected, and AI-driven healthcare platform for modern care delivery.',
    },

    { type: 'heading', level: 3, text: 'Lab Orders' },
    {
      type: 'paragraph',
      text: 'Spring’26 delivers major enhancements across lab order creation, result management, specimen workflows, practitioner result review, and integration reliability. These updates improve operational efficiency, strengthen result visibility, and provide a more scalable and clinically focused lab experience across both EHR and Patient Portal workflows.',
    },
    {
      type: 'list',
      items: [
        entry(
          'Practitioner Lab Result Trend and Indicator Experience',
          'The practitioner lab results experience has been significantly enhanced with standardized ordering logic, expandable panel-based result views, abnormal result highlighting, and trend indicators to improve clinical review efficiency and longitudinal analysis.',
        ),
        entry(
          'Practitioner Lab Result Selection and Filtering Enhancements',
          'Practitioners now have expanded control over lab result review workflows with enhanced biomarker and test panel selection capabilities, configurable date-range filtering, and streamlined result visibility controls.',
        ),
        entry(
          'Reverse Chronological Result Display Across EHR and Portal',
          'Lab result displays now consistently prioritize the most recent results first across both EHR and Patient Portal workflows. Historical results automatically display in reverse chronological order to improve longitudinal review and clinical interpretation.',
        ),
        entry(
          'Add-On Eligibility Visibility for LabCorp Orders',
          'Users can now identify LabCorp orders eligible for add-on testing directly within lab order workflows, improving operational awareness and reducing unnecessary order recreation.',
        ),
        entry(
          'Enhanced Result Download Handling for Parent and Add-On Tests',
          'Lab result download workflows have been enhanced to clearly differentiate between parent order tests and add-on tests across both the EHR and Patient Portal. Parent orders now retain a centralized result download action for original ordered tests, while add-on tests maintain their own independent result download capability and result statuses. This enhancement improves result clarity and prevents confusion around add-on result inclusion.',
        ),
        entry(
          'Specimen Label Support for Lab Integrations',
          'Spring’26 introduces specimen label download support for CHC and Vital lab integrations with dynamic integration-aware behavior. The system now validates transmission status, requisition generation, and integration availability before allowing specimen label retrieval. Enhanced error handling workflows provide users with clear visibility into unavailable or delayed specimen label scenarios.',
        ),
        entry(
          'Enhanced Lab Order Error Identification',
          'Lab order validation workflows now provide improved visibility into diagnosis and test-level errors to help staff quickly identify and resolve order submission issues.',
        ),
        entry(
          'HL7 Message Parsing and Storage Improvements',
          'HL7 processing workflows have been optimized to improve result finalization reliability and scalability. Enhancements include controlled parsing sequences after final result receipt as well as improved storage handling for large HL7 payloads to reduce performance and storage limitations.',
        ),
      ],
    },

    { type: 'heading', level: 3, text: 'Patient Portal Lab Results Experience Enhancements' },
    {
      type: 'paragraph',
      text: 'Spring’26 introduces a significantly enhanced Patient Portal lab results experience focused on improving biomarker visibility, longitudinal trend analysis, abnormal result awareness, and overall patient usability.',
    },
    {
      type: 'paragraph',
      text: entry(
        'New Test Panel Experience in Patient Portal',
        'The Patient Portal now includes an enhanced Test Results experience with dedicated Test Panel and Biomarker views. Patients can seamlessly switch between grouped panel-based views and individual biomarker views for improved result navigation and interpretation.',
      ),
    },
    {
      type: 'paragraph',
      text: entry(
        'Enhanced Biomarker Visibility and Navigation',
        'Patients can now access all biomarkers in a unified experience regardless of panel grouping. Biomarker displays have been enhanced with:',
      ),
    },
    {
      type: 'list',
      items: [
        'Alphabetical biomarker sorting',
        'Improved result visibility',
        'Consistent standalone and panel-based views',
        'Direct access to reports and ordering provider details',
        'Improved abnormal result identification',
      ],
    },
    {
      type: 'paragraph',
      text: entry(
        'Biomarker Trend Visualization in Modal View',
        'Spring’26 introduces longitudinal biomarker trend visualization directly within the Patient Portal. Patients can now review historical biomarker trends through interactive modal-based trend views with configurable time ranges including:',
      ),
    },
    { type: 'list', items: ['All Time', 'Month', 'Year', 'Custom Date Range'] },
    {
      type: 'paragraph',
      text: 'The enhanced trend experience improves patient understanding of result progression over time while maintaining a simplified user experience.',
    },
    { type: 'paragraph', text: [strong('Improved Abnormal Result Awareness')] },
    { type: 'paragraph', text: 'The Patient Portal now provides enhanced abnormal result visibility through:' },
    {
      type: 'list',
      items: [
        'Panel-level abnormal summaries',
        'Biomarker-level abnormal indicators',
        'Highlighted abnormal trend values',
        'Attention indicators for abnormal biomarkers within panels',
      ],
    },
    {
      type: 'paragraph',
      text: 'These enhancements help patients more easily identify results that may require provider follow-up.',
    },
    { type: 'paragraph', text: [strong('Enhanced Awaiting Result Handling')] },
    {
      type: 'paragraph',
      text: 'Biomarker workflows have been enhanced to better support pending and awaiting-result scenarios. Biomarkers without available results now display standardized “Awaiting” indicators while preserving access to historical trends when prior data exists.',
    },
    { type: 'paragraph', text: [strong('Improved Biomarker Unit Display and Formatting')] },
    {
      type: 'paragraph',
      text: 'The biomarker presentation experience has been modernized with improved unit handling and result formatting. Units are now displayed directly beneath biomarker names for cleaner result presentation and improved readability across both standalone and panel-based views.',
    },
    { type: 'paragraph', text: [strong('Enhanced Trend and Historical Result Experience')] },
    { type: 'paragraph', text: 'Trend handling workflows have been improved to better support:' },
    {
      type: 'list',
      items: [
        'Historical result visibility',
        'Reverse chronological result presentation',
        'Consistent longitudinal result review',
        'Improved trend accessibility across biomarker workflows',
      ],
    },
    {
      type: 'paragraph',
      text: 'These updates deliver a more intuitive and clinically meaningful patient-facing lab result experience within',
    },

    { type: 'heading', level: 3, text: 'Care Plan Outcome Tracking Enhancements' },
    {
      type: 'paragraph',
      text: 'Spring’26 introduces major enhancements to Care Plan workflows focused on structured outcome tracking, longitudinal patient progress monitoring, and measurable goal-based care management. These enhancements improve visibility into patient improvement trends while enabling organizations to standardize clinical outcome tracking across care coordination workflows.',
    },
    {
      type: 'list',
      items: [
        entry(
          'Outcome Definition Framework',
          'Organizations can now define care plan outcomes using standardized master outcome libraries or custom outcome definitions, enabling providers to consistently track measurable clinical indicators such as Blood Pressure, HbA1c, PHQ-9 Score, Weight, and other patient health metrics.',
        ),
        entry(
          'Baseline and Target Value Management',
          'Providers can now configure baseline values, target values, and associated timelines directly within care plan goals to support measurable and outcome-driven care planning workflows.',
        ),
        entry(
          'Longitudinal Outcome Tracking',
          'Spring’26 introduces structured progress measurement workflows, allowing providers to record ongoing patient outcome values, monitor historical progress trends, and maintain detailed measurement history with source tracking and clinical context.',
        ),
        entry(
          'Enhanced Goal and Intervention Visibility',
          'Outcome tracking workflows are now more tightly integrated with care plan goals and interventions, improving visibility into patient progress, intervention effectiveness, and overall care plan performance.',
        ),
        entry(
          'Outcome Governance and Validation Enhancements',
          'Additional validation and governance controls improve consistency across outcome management workflows while supporting standardized clinical measurement tracking across orga',
        ),
      ],
    },

    { type: 'heading', level: 3, text: 'Template Builder' },
    {
      type: 'paragraph',
      text: 'Spring’26 introduces enhancements to Form Builder workflows focused on clinical documentation governance, approval lifecycle management, controlled editability, and document rendering flexibility. These updates provide organizations with stronger compliance controls while supporting configurable operational workflows for different practice requirements.',
    },
    {
      type: 'list',
      items: [
        entry(
          'Automatic Form Locking After Final Approval',
          'Forms and clinical notes can now be automatically locked once all approval levels are completed, preventing unauthorized post-signoff modifications. The enhancement introduces structured governance controls for finalized documentation while preserving cloning workflows for continued documentation needs.',
        ),
        entry(
          'Request Edit Workflow for Approved Forms',
          'Spring’26 introduces a structured “Request Edit” workflow for approved and locked forms. Users can now request modification access from the final approver, triggering controlled re-approval workflows while maintaining complete signature history and audit visibility. Updated signatures and approval actions are preserved historically to support compliance and traceability requirements.',
        ),
        entry(
          'Configurable Approval-Based Form Locking',
          'Organizations can now configure whether approved forms remain locked after approval completion. This enhancement allows practices with more flexible operational workflows to continue editing approved forms without requiring unlock workflows, while still preserving Care Episode-based governance controls.',
        ),
        entry(
          'Enhanced Care Episode and Form Lock Interaction',
          'Form locking behavior has been enhanced to support clearer hierarchy handling between approval completion and Care Episode closure. The system now consistently enforces episode-level governance while supporting configurable edit workflows where appropriate.',
        ),
        entry(
          'Improved Lock Visibility Indicators',
          'The user interface now provides clearer lock indicators for approved and restricted forms, improving visibility into document state and edit restrictions.',
        ),
        entry(
          'Landscape PDF Generation Support',
          'Form Builder now supports configurable landscape PDF generation at the template level for workflows containing wide clinical tables and structured datasets. This enhancement improves rendering quality for diagnoses, medications, vitals, procedures, and other table-heavy clinical documentation.',
        ),
        entry(
          'Enhanced Lookup Filtering Capabilities',
          'Lookup components within forms now support additional filtering capabilities, improving data selection accuracy and reducing user navigation overhead during documentation workflows.',
        ),
      ],
    },

    { type: 'heading', level: 3, text: 'Patient Self Check-In and Appointment Workflow Enhancements' },
    {
      type: 'paragraph',
      text: 'Spring’26 introduces major enhancements to patient self check-in and appointment workflows focused on configurable intake experiences, appointment-type driven workflows, operational automation, and improved patient engagement. These enhancements provide organizations with greater flexibility in designing digital intake processes while improving workflow visibility and operational efficiency across both the Patient Portal and EHR.',
    },
    {
      type: 'list',
      items: [
        entry(
          'Configurable Self Check-In Framework',
          'Organizations can now configure self check-in workflows based on appointment type, enabling implementation teams to define customized intake experiences for workflows such as annual wellness visits, lab appointments, specialty consultations, and follow-up visits.',
        ),
        entry(
          'Appointment-Specific Intake Workflow Configuration',
          'The enhanced framework supports configurable intake step sequencing, allowing organizations to control the order and visibility of workflows such as demographics, insurance verification, questionnaires, consents, medical history, co-pay collection, medications, and custom intake screens.',
        ),
        entry(
          'Enhanced Form Bundle Management',
          'Spring’26 introduces appointment-specific form bundle configuration, enabling organizations to dynamically assign intake forms and workflow sequences based on appointment type and operational requirements.',
        ),
        entry(
          'Enhanced Patient Check-In Experience',
          'The updated self check-in workflow now supports guided step-by-step navigation, save-and-resume functionality, auto-save capabilities, validation handling, and progress tracking to improve patient usability and workflow continuity.',
        ),
        entry(
          'Real-Time Appointment Status Automation',
          'Upon successful completion of self check-in workflows, appointment statuses are automatically updated within the EHR to improve operational visibility for front-desk teams and providers.',
        ),
        entry(
          'Expanded Self Check-In Availability Across Portal and EHR',
          'Spring’26 extends the patient self check-in experience across both the Patient Portal and EHR, enabling organizations to support digital intake workflows across multiple operational and front-desk scenarios.',
        ),
        entry(
          'Configurable Session Note Editing Restrictions',
          'Organizations can now configure appointment statuses that automatically transition Session Notes into read-only mode once appointments reach completed or finalized workflow states, improving documentation governance and reducing unauthorized post-completion edits.',
        ),
      ],
    },

    { type: 'heading', level: 2, text: 'Revenue Cycle Management' },
    { type: 'heading', level: 3, text: 'Medical Coding' },
    {
      type: 'paragraph',
      text: 'Spring’26 introduces improved NDC management and validation workflows within RCM pricing configuration to strengthen pricing accuracy and prevent invalid procedure-to-drug mappings.',
    },
    {
      type: 'paragraph',
      text: 'The enhanced workflow now restricts NDC selection based on the associated procedure configuration, ensuring only NDC codes mapped to the selected procedure are available during Actual Price and Contracted Price setup workflows. Additionally, payer plan selection is now dynamically filtered based on the selected payer to improve pricing configuration accuracy and reduce administrative errors.',
    },
    { type: 'paragraph', text: 'Additional enhancements include:' },
    {
      type: 'list',
      items: [
        'Improved validation for procedure-to-NDC mapping relationships',
        'Controlled payer plan visibility based on payer selection',
        'Reduced pricing configuration inconsistencies',
        'Stronger data integrity across contracted and actual pricing workflows',
        'Enhanced support for drug-related procedure pricing scenarios',
      ],
    },
    {
      type: 'paragraph',
      text: 'Spring’26 also expands support for NDC to capture workflows associated with drug-related procedure codes, improving downstream billing accuracy and claim submission consistency for medication-related services.',
    },

    { type: 'heading', level: 3, text: 'Pricebook' },
    {
      type: 'paragraph',
      text: entry(
        'Dynamic Payer Plan Filtering',
        'Payer Plan selection workflows now dynamically filter available plans based on the selected payer, reducing administrative errors and improving pricing setup consistency.',
      ),
    },
    {
      type: 'paragraph',
      text: entry(
        'Improved Coding and Pricing Validation Rules',
        'Additional validation controls have been introduced to strengthen coding governance, including:',
      ),
    },
    {
      type: 'list',
      items: [
        'Mandatory procedure association for NDC records',
        'Prevention of invalid payer-plan relationships',
        'Improved validation during pricing configuration workflows',
      ],
    },
    {
      type: 'paragraph',
      text: entry(
        'Advanced Multi-Level Pricing Configuration',
        'The enhanced Pricebook framework now supports pricing configurations based on combinations of:',
      ),
    },
    { type: 'list', items: ['Procedure codes', 'NDC codes', 'Payers', 'Payer Plans'] },
    {
      type: 'paragraph',
      text: 'This allows organizations to manage highly specific pricing rules for contracted and self-pay billing scenarios.',
    },
    {
      type: 'paragraph',
      text: entry(
        'Hierarchical Pricing Resolution Logic',
        'The pricing engine now supports structured priority-based pricing resolution that automatically determines the most specific applicable pricing rule. The system evaluates pricing combinations using hierarchical matching logic to improve reimbursement accuracy and reduce manual pricing intervention.',
      ),
    },
    {
      type: 'paragraph',
      text: entry(
        'Duplicate and Overlapping Pricing Prevention',
        'Additional governance controls have been introduced to prevent:',
      ),
    },
    {
      type: 'list',
      items: ['Duplicate pricing rule combinations', 'Overlapping effective date ranges', 'Ambiguous pricing scenarios'],
    },
    {
      type: 'paragraph',
      text: 'These validations improve long-term pricing consistency and operational maintainability.',
    },
    {
      type: 'paragraph',
      text: entry('Improved Pricing Governance and Rule Integrity', 'The updated pricing framework ensures:'),
    },
    {
      type: 'list',
      items: [
        'Controlled pricing fallback behavior',
        'Single-rule pricing resolution',
        'Improved pricing accuracy',
        'Reduced billing inconsistencies',
        'Stronger operational governance for RCM pricing management',
      ],
    },

    { type: 'heading', level: 3, text: 'RCM Landing Page' },
    {
      type: 'paragraph',
      text: 'Spring’26 introduces a redesigned RCM Patient Landing Page experience with configurable financial summary cards and enhanced operational visibility. The new dashboard framework enables organizations to tailor patient financial KPI visibility based on operational priorities while preserving existing RCM workflows and functionality.',
    },
    {
      type: 'paragraph',
      text: 'The enhanced landing page includes a modernized user interface with configurable summary metrics such as:',
    },
    { type: 'list', items: ['Unpaid Claims', 'Patient Balance', 'Average Days in A/R', 'Denial Rate'] },
    { type: 'paragraph', text: 'Organizations can now:' },
    {
      type: 'list',
      items: [
        'Enable or disable dashboard metric cards',
        'Reorder KPI cards based on operational preference',
        'Configure dashboard visibility at the organizational level',
        'Select from predefined financial metric libraries',
      ],
    },
    {
      type: 'paragraph',
      text: 'The UI revamp modernizes the RCM patient financial experience while maintaining compatibility with existing workflows and operational processes.',
    },

    { type: 'heading', level: 3, text: 'Claims Management' },
    {
      type: 'paragraph',
      text: 'Spring’26 introduces enhancements to claim status management, EDI claim tracking, institutional billing workflows, and claim validation processes. These updates improve operational visibility, strengthen billing governance, and provide more intelligent handling of payer communication workflows across the claim lifecycle.',
    },
    {
      type: 'list',
      items: [
        entry(
          'Enhanced Claim Status Management',
          'Claim workflows now support expanded status standardization and automated status updates across manual posting, automatic posting, clearinghouse responses, payer acknowledgements, denials, partial payments, overpayments, and secondary insurance workflows.',
        ),
        entry(
          'Improved Claim Validation and Error Visibility',
          'Claim workflows now provide enhanced visibility into clearinghouse rejection details and validation failures, including improved identification of missing NDC-related billing information and claim submission errors.',
        ),
        entry(
          'UB04 Type of Bill Configuration Enhancements',
          'Spring’26 introduces configurable UB04 Type of Bill management with support for default institutional billing configurations, administrative maintenance controls, validation enforcement, and automated claim-frequency handling for replacement and void workflows.',
        ),
        entry(
          'Claim Batch Optimization Enhancements',
          'Additional billing workflow optimizations improve claim batch processing performance, scalability, and operational efficiency across high-volume billing operations.',
        ),
      ],
    },

    { type: 'heading', level: 3, text: 'Electronic Remittance Advice' },
    {
      type: 'paragraph',
      text: 'Spring’26 introduces major enhancements to ERA posting, reconciliation, denial handling, adjustment processing, and financial visibility workflows. These updates improve reconciliation accuracy, strengthen auditability, and provide more intelligent handling of complex multi-ERA payment scenarios across both automatic and manual posting workflows.',
    },
    {
      type: 'list',
      items: [
        entry(
          'Advanced Status Code based ERA Reconciliation',
          'ERA reconciliation workflows now support enhanced ICN and CLP02-driven financial handling logic for replacement ERAs, reversals, denials, and additive payment scenarios. The updated framework improves claim-level reconciliation accuracy while preserving complete ERA audit history across both automatic and manual posting workflows.',
        ),
        entry(
          'Enhanced Reversal and Negative Payment Handling',
          'Spring’26 improves handling for reversal ERAs and negative payment transactions, ensuring reversal payments and negative adjustments are preserved accurately at both claim and line-item levels.',
        ),
        entry(
          'Improved Denial Handling Workflows',
          'ERA workflows now support enhanced denial handling for CLP02=4 denial scenarios, improving claim status management, reconciliation visibility, and manual review workflows while preventing inappropriate automatic posting behavior for denial ERAs.',
        ),
        entry(
          'Expanded ERA Financial Visibility',
          'Parent ERA, Claim ERA, and ERA Line Item workflows now support improved visibility into Interest Paid by Payor, Late Filing Charges, Net Paid values, adjustment details, modifiers, and reconciliation information across both standard and custom screens.',
        ),
        entry(
          'Dynamic Adjustment Code and Reason Code Management',
          'Adjustment Type values and reason code descriptions are now dynamically managed through centralized configuration frameworks, improving operational flexibility, ERA usability, and consistency across adjustment processing workflows.',
        ),
        entry(
          'Expanded ERA Auditability and Governance',
          'Additional governance enhancements improve storage and visibility for reason code descriptions, adjustment metadata, ERA status tracking, and historical reconciliation activity to support operational auditability and downstream reporting workflows',
        ),
      ],
    },

    { type: 'heading', level: 2, text: 'What’s Coming Next with Elixir' },
    {
      type: 'paragraph',
      text: 'As healthcare workflows continue evolving, we’re investing heavily in AI-powered clinical intelligence, workflow automation, patient engagement, and operational optimization designed to make the EHR experience smarter, faster, and more proactive for providers, staff, and patients alike.',
    },
    {
      type: 'paragraph',
      text: 'Here’s a preview of some exciting innovations that will be arriving soon across the Elixir platform.',
    },
    { type: 'heading', level: 3, text: 'Elixir Clinical Co-Pilot' },
    { type: 'paragraph', text: 'A next-generation, workflow-aware AI assistant built directly into the EHR experience.' },
    {
      type: 'paragraph',
      text: 'Elixir Clinical Co-Pilot is being designed to proactively surface patient insights, recommend next-best actions, assist with documentation and orders, identify preventive care gaps, support clinical decision-making, and help providers move from insight to execution with minimal friction. Unlike traditional chatbot-style AI tools, the Co-Pilot is being built around real-time workflow awareness, contextual intelligence, provider control, transparency, and seamless integration into day-to-day clinical operations.',
    },
    { type: 'heading', level: 3, text: 'AI-Powered Payer Policy Claim Review' },
    {
      type: 'paragraph',
      text: 'An intelligent pre-submission claim review engine designed to proactively reduce denials and improve billing accuracy.',
    },
    {
      type: 'paragraph',
      text: 'This upcoming capability will analyze claims against payer-specific billing and reimbursement rules in real time, including coding combinations, modifier requirements, medical necessity rules, documentation dependencies, and frequency limitations. By embedding AI-driven payer policy validation directly into revenue cycle workflows, Elixir aims to help organizations improve first-pass claim acceptance and reduce downstream rework and denials.',
    },
    { type: 'heading', level: 3, text: 'Visit Prep Assistant' },
    {
      type: 'paragraph',
      text: 'An AI-powered patient engagement experience designed to help providers start visits with better context before the appointment even begins.',
    },
    {
      type: 'paragraph',
      text: 'The Visit Prep Assistant uses a lightweight SMS-based conversational workflow that allows patients to review recent health updates, share concerns, discuss medication-related issues, and create a structured visit agenda ahead of their appointment. The completed agenda flows directly into the provider workflow within the EHR, helping reduce visit setup time, improve patient preparedness, and surface clinically relevant information before the encounter starts.',
    },
    {
      type: 'paragraph',
      text: 'Built as a mobile-first, EHR-agnostic, and FHIR-first solution, the Visit Prep Assistant is designed to support scalable integration across healthcare organizations and partner ecosystems.',
    },

    { type: 'heading', level: 2, text: 'Conclusion' },
    {
      type: 'paragraph',
      text: 'The Elixir Winter’26 Release continues our commitment to delivering smarter, more efficient healthcare technology. With new AI-powered capabilities, enhanced clinical workflows, and improved revenue cycle management features, this release helps providers streamline operations, reduce administrative burden, and focus more on delivering quality patient care. This brings powerful new AI capabilities, improved clinical workflows, and enhanced revenue cycle features to help healthcare organizations work more efficiently and deliver better patient outcomes.',
    },
  ],
};
