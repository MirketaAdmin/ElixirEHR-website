// Provider funnel content: the predefined, zero-model-cost flows behind the Home page's
// "What kind of provider are you?" section. Every sentence is drawn from copy that already ships
// on the site; `source` on each item names the page it comes from, and `to` is the real route a
// visitor lands on to read more. Nothing here calls a model: the only generative step is the
// optional hand-off to the site assistant, which the visitor starts deliberately (funnelLogic.mjs).

/** The four presentation steps, in order. */
export const FUNNEL_STEPS = [
  { id: 'world', label: 'Your world' },
  { id: 'needs', label: 'What you need' },
  { id: 'why', label: 'Why Elixir' },
  { id: 'next', label: 'Next step' },
];

/** Where "Book a discovery call" goes (one definition, in the shared assistant contract). */
export { DISCOVERY_URL as DISCOVERY_CALL_URL } from '../../../api/shared/contract.mjs';

/** The event any code dispatches to open the site assistant (defined by the sales assistant). */
export { OPEN_ASSISTANT_EVENT } from '../sales-assistant/openAssistant.mjs';

/** The fewest and most capability points the "Why Elixir" step shows. */
export const MIN_POINTS = 3;
export const MAX_POINTS = 5;

export const providerTypes = [
  {
    id: 'online-behavioral-health',
    visitorIntro: 'I run an online behavioral health practice.',
    audience: 'online behavioral health providers',
    label: 'Online behavioral health',
    teaser: 'Therapy, psychiatry and group programs delivered by video.',
    world: {
      headline: 'Telehealth should not mean a second system',
      intro:
        'In Elixir the virtual visit is scheduled on the same calendar, documented in the same chart and billed from the same record as everything else you do.',
      challenges: [
        'Exporting a visit list from a video tool and matching it to the EHR by hand.',
        'Place of service and modifiers inferred by a biller a week after the visit.',
        'Outcome measures such as PHQ-9 and GAD-7 left to memory instead of collected on schedule.',
        'Telehealth policy with separate cliff dates that someone has to keep track of.',
      ],
      sources: ['/telehealth-ehr/', '/behavioral-health-ehr/'],
    },
    needs: [
      {
        id: 'replace-ehr',
        label: 'Replace my EHR or video tool',
        phrase: 'replacing our EHR or video tool',
        point: {
          title: 'One record, not two systems',
          text: 'Schedule, chart and claim in the same place, with virtual and in-person visits on one chart so a patient alternating between them has one history.',
          to: '/telehealth-ehr/',
          linkLabel: 'Telehealth EHR',
        },
      },
      {
        id: 'billing-rcm',
        label: 'Telehealth billing that gets paid',
        phrase: 'telehealth billing',
        point: {
          title: 'Billing set from the visit',
          text: 'Place of service and modifier derived from how the visit actually happened, rather than inferred by a biller a week later.',
          to: '/telehealth-ehr/',
          linkLabel: 'Telehealth billing',
        },
      },
      {
        id: 'outcomes',
        label: 'Measurement-based care',
        phrase: 'measurement-based care',
        point: {
          title: 'Measures that change decisions',
          text: 'Measures are sent before the session, scored and in the chart before the client sits down, trended inside the progress note, and non-response is flagged for clinical discussion.',
          to: '/mental-health-ehr/',
          linkLabel: 'Mental health EHR',
        },
      },
      {
        id: 'patient-engagement',
        label: 'Patient engagement and fewer no-shows',
        phrase: 'patient engagement and no-shows',
        point: {
          title: 'Join without installing anything',
          text: 'A link on the device the patient already has, with reminders and follow-up driven from the record, and No-Show Prediction flagging appointments with a high cancellation probability for proactive outreach.',
          to: '/patient-no-show-software/',
          linkLabel: 'No-show prediction',
        },
      },
      {
        id: 'documentation',
        label: 'Less time on documentation',
        phrase: 'documentation time',
        point: {
          title: 'Kratu Co-Pilot',
          text: 'Ambient draft documentation from the session audio, structured to your note format and ready for clinician review and signature.',
          to: '/ai-clinical-documentation/',
          linkLabel: 'AI clinical documentation',
        },
      },
    ],
    corePoints: [
      {
        id: 'telehealth-consent',
        title: 'Consent captured properly',
        text: 'Telehealth consent, recording consent where you record, and the state the patient was physically located in, recorded at the visit.',
        to: '/telehealth-ehr/',
        linkLabel: 'Telehealth EHR',
      },
      {
        id: 'bh-compliant',
        title: 'Compliant by construction',
        text: '42 CFR Part 2 and HIPAA controls in the record itself, with consent and disclosure trails that survive an audit.',
        to: '/behavioral-health-ehr/',
        linkLabel: 'Behavioral health EHR',
      },
      {
        id: 'bh-configurable',
        title: 'Configurable on Salesforce',
        text: 'A new state, program, payer or level of care is configuration rather than custom code.',
        to: '/behavioral-health-ehr/',
        linkLabel: 'Behavioral health EHR',
      },
    ],
  },
  {
    id: 'treatment-center',
    visitorIntro: 'I work at a treatment center.',
    audience: 'treatment centers',
    label: 'Treatment center',
    teaser: 'Residential, PHP, IOP and outpatient addiction and mental health treatment.',
    world: {
      headline: 'From pre-admissions to alumni follow-up',
      intro:
        'Elixir manages the entire patient journey on one integrated platform, designed by clinicians for clinicians and built around outcome-based treatment.',
      challenges: [
        'A mental health record and a substance use record that do not speak to each other.',
        'Charts re-keyed every time a patient steps down from residential to IOP.',
        '42 CFR Part 2 consent, counseling-note separation and disclosure accounting.',
        'Authorizations that expire before the bed day is billed.',
      ],
      sources: ['/treatment-center-software/', '/addiction-treatment-emr/', '/behavioral-health-ehr/'],
    },
    needs: [
      {
        id: 'intake',
        label: 'Admissions, intake and census',
        phrase: 'admissions and census',
        point: {
          title: 'Intelligent intake management',
          text: 'An intake suite that handles everything from initial contact to clinical admission, with referral management, integrated pre-assessments and real-time census and bed management.',
          to: '/treatment-center-software/',
          linkLabel: 'Treatment center software',
        },
      },
      {
        id: 'replace-ehr',
        label: 'Replace my current EHR',
        phrase: 'replacing our current EHR',
        point: {
          title: 'One record, every level',
          text: 'A patient stepping down from residential to IOP keeps one chart, one episode and one medication history. Nothing is re-keyed at transfer.',
          to: '/addiction-treatment-emr/',
          linkLabel: 'Addiction treatment EMR',
        },
      },
      {
        id: 'compliance',
        label: '42 CFR Part 2 compliance',
        phrase: '42 CFR Part 2 compliance',
        point: {
          title: 'Part 2 in the record',
          text: 'Consent, counseling-note separation, disclosure accounting and legal-proceeding controls built into the chart, not layered on top.',
          to: '/addiction-treatment-emr/',
          linkLabel: 'Part 2 compliance',
        },
      },
      {
        id: 'utilization-review',
        label: 'ASAM placement and utilization review',
        phrase: 'ASAM placement and utilization review',
        point: {
          title: 'Placement that feeds the authorization',
          text: 'ASAM dimensions scored through configurable templates, assessment data flowing into the authorization request packet, and reassessment prompts scheduled against each level’s review intervals.',
          to: '/addiction-treatment-emr/',
          linkLabel: 'ASAM and utilization review',
        },
      },
      {
        id: 'billing-rcm',
        label: 'Billing and revenue cycle',
        phrase: 'billing and revenue cycle',
        point: {
          title: 'Financial performance for recovery centers',
          text: 'Real-time eligibility verification, cost of care calculation, clearinghouse integration, claim generation and ERA and EOB processing.',
          to: '/treatment-center-software/',
          linkLabel: 'Treatment center billing',
        },
      },
    ],
    corePoints: [
      {
        id: 'asam-editions',
        title: 'Both ASAM editions',
        text: 'Assess and document against the Third or Fourth Edition per state and per payer contract, in the same instance, during the transition.',
        to: '/addiction-treatment-emr/',
        linkLabel: 'Addiction treatment EMR',
      },
      {
        id: 'clinical-excellence',
        title: 'EHR built for clinical excellence',
        text: 'Track treatment progress with dynamic care plans, session notes, medication management, a discharge planner and a built-in utilization review team.',
        to: '/treatment-center-software/',
        linkLabel: 'Treatment center software',
      },
      {
        id: 'one-record-bh',
        title: 'One record, not two systems',
        text: 'Mental health and substance use treatment on one Salesforce-native platform, so the clinician treating one can see the other.',
        to: '/behavioral-health-ehr/',
        linkLabel: 'Behavioral health EHR',
      },
    ],
  },
  {
    id: 'cybhi',
    visitorIntro: 'I work on a California school-linked behavioral health program billing under CYBHI.',
    audience: 'CYBHI programs',
    label: 'CYBHI',
    teaser: 'California school districts and county offices billing the CYBHI fee schedule.',
    world: {
      headline: 'Enrolled is not the same as billing',
      intro:
        'California published a multi-payer fee schedule so schools could bill behavioral health to students’ own health plans. Enrollment has been strong. Claiming has not.',
      challenges: [
        'Roughly two in three organizations enrolled in the CYBHI fee schedule have not billed, per the DHCS figures cited on our Student Health page.',
        'Consent held on paper or in a separate tool, on different clocks, held by different people.',
        'A business office that cannot see whether what happened in a counseling room is billable.',
        'Deciding whether a service belongs to LEA BOP or the CYBHI fee schedule.',
      ],
      note: 'What we will not claim: that software makes you compliant or guarantees reimbursement. It does neither. It makes sure the documentation matches what the payer requires and that consent is verified before a claim goes out.',
      sources: ['/student-health-records-software/'],
    },
    needs: [
      {
        id: 'billing-rcm',
        label: 'Turn services into CYBHI claims',
        phrase: 'turning services into CYBHI claims',
        point: {
          title: 'Documentation that becomes a claim',
          text: 'Service notes derive procedure codes, apply each program’s time and frequency rules, append CYBHI practitioner modifiers from stored credentials, and surface exceptions before submission.',
          to: '/student-health-records-software/',
          linkLabel: 'Student health records',
        },
      },
      {
        id: 'compliance',
        label: 'Consent tracking',
        phrase: 'consent tracking',
        point: {
          title: 'Consent as a first-class record',
          text: 'The one-time IDEA billing consent, the annual written notification and the clinical consent-to-treat tracked as separate instruments. A service cannot be marked ready for billing if the applicable consent has lapsed.',
          to: '/student-health-records-software/',
          linkLabel: 'Consent tracking',
        },
      },
      {
        id: 'program-routing',
        label: 'LEA BOP and CYBHI routing',
        phrase: 'LEA BOP and CYBHI program routing',
        point: {
          title: 'Which program pays',
          text: 'IEP/IFSP status, provider credentials, service type and duration, payer coverage and active consents are evaluated when the note is completed: IEP services route to LEA BOP, eligible general education services to the CYBHI fee schedule.',
          to: '/student-health-records-software/',
          linkLabel: 'Program routing',
        },
      },
      {
        id: 'intake',
        label: 'Referrals and intake',
        phrase: 'referrals and intake',
        point: {
          title: 'Referrals from outside your walls',
          text: 'Public intake and referral forms that route directly into the queue for that school site or county program, with COST meetings supported from the open-referral queue.',
          to: '/student-health-records-software/',
          linkLabel: 'Intake and COST',
        },
      },
      {
        id: 'records-privacy',
        label: 'FERPA-native student records',
        phrase: 'FERPA-native student records',
        point: {
          title: 'FERPA, not HIPAA',
          text: 'A permissions model built for education records, which is what student health information usually is.',
          to: '/student-health-records-software/',
          linkLabel: 'Student health records',
        },
      },
    ],
    corePoints: [
      {
        id: 'three-tier',
        title: 'Built for the three-tier structure',
        text: 'County office, district and school site as real levels, with referrals, queues, staff and reporting scoped to each.',
        to: '/student-health-records-software/',
        linkLabel: 'Student health records',
      },
      {
        id: 'claims-remittance',
        title: 'Claims, clearinghouses and remittance',
        text: 'EDI 837P files generated from completed service documentation, validated before they leave, with 835 remittance posted back against each service.',
        to: '/student-health-records-software/',
        linkLabel: 'Student health records',
      },
      {
        id: 'filing-window',
        title: 'Filing windows tracked by date of service',
        text: 'Elixir tracks which CYBHI claim submission window governs each service, as the window moved from 180 to 365 days for dates of service from 1 January 2026.',
        to: '/student-health-records-software/',
        linkLabel: 'Student health records',
      },
    ],
  },
  {
    id: 'homecare',
    visitorIntro: 'I work at a home care agency.',
    audience: 'home care agencies',
    label: 'Homecare',
    teaser: 'Medicaid personal care and home health agencies with field caregivers.',
    world: {
      headline: 'Where a verified visit still fails to bill',
      intro:
        'EVV is federally required, but it is administered state by state. Elixir keeps verification attached to the authorization and the claim, so the visit and the bill are the same record.',
      challenges: [
        'Visits documented where there was no signal, with original times at risk on upload.',
        'Units that had already run out before the visit was verified.',
        'Manual entries and geofence flags that never reach a supervisor before the billing window closes.',
        'Aggregator rejections treated as if submission were completion.',
      ],
      sources: ['/evv-software/', '/caregiver-mobile-app/', '/salesforce-evv/'],
    },
    needs: [
      {
        id: 'evv',
        label: 'EVV compliance',
        phrase: 'EVV compliance',
        point: {
          title: 'EVV with GPS, geofencing and offline capture',
          text: 'Mobile check-in and check-out, configurable geofencing that flags out-of-geofence visits for review, and the EVV data elements every Medicaid visit must capture.',
          to: '/salesforce-evv/',
          linkLabel: 'Salesforce EVV',
        },
      },
      {
        id: 'caregiver-app',
        label: 'A mobile app for field caregivers',
        phrase: 'a mobile app for field caregivers',
        point: {
          title: 'Prepare online, record care offline',
          text: 'Caregivers download assigned visits and care plans, document offline, and queued records upload automatically when a connection returns, keeping the original visit timestamps.',
          to: '/caregiver-mobile-app/',
          linkLabel: 'Caregiver mobile app',
        },
      },
      {
        id: 'supervisor-review',
        label: 'Supervisor exception review',
        phrase: 'supervisor exception review',
        point: {
          title: 'Exceptions routed, not edited',
          text: 'Missed check-ins, manual entries and geofence flags go to a supervisor with a reason code, and the correction keeps its review history.',
          to: '/evv-software/',
          linkLabel: 'EVV software',
        },
      },
      {
        id: 'billing-rcm',
        label: 'Billing and authorizations',
        phrase: 'billing and authorizations',
        point: {
          title: 'Verification feeds billing',
          text: 'Verification status, authorization and documentation checks are all part of claim readiness, rather than something discovered after a denial.',
          to: '/evv-software/',
          linkLabel: 'EVV software',
        },
      },
      {
        id: 'salesforce',
        label: 'Keep working in Salesforce',
        phrase: 'staying in Salesforce',
        point: {
          title: 'Field Service manages the workforce. Elixir adds the healthcare visit.',
          text: 'Keep Salesforce scheduling and field operations while Elixir adds electronic visit verification and healthcare-specific controls around each visit.',
          to: '/salesforce-evv/',
          linkLabel: 'Salesforce EVV',
        },
      },
    ],
    corePoints: [
      {
        id: 'evv-one-record',
        title: 'One record, not two systems',
        text: 'The visit, the client, the care plan, the authorization and the claim are the same record. Nothing is exported to be reconciled later.',
        to: '/evv-software/',
        linkLabel: 'EVV software',
      },
      {
        id: 'aggregator-status',
        title: 'Submission tracked to acceptance',
        text: 'Submission, synchronization and verification are separate milestones, and an aggregator rejection returns the visit for correction without erasing the original record.',
        to: '/caregiver-mobile-app/',
        linkLabel: 'Caregiver mobile app',
      },
      {
        id: 'audit-history',
        title: 'Audit and compliance history',
        text: 'Traceable timestamps, location information, edits, reason codes, approvals and exception resolution on every visit.',
        to: '/salesforce-evv/',
        linkLabel: 'Salesforce EVV',
      },
    ],
  },
  {
    id: 'specialty-clinic',
    visitorIntro: 'I work at a specialty clinic.',
    audience: 'specialty clinics',
    label: 'Specialty clinic',
    teaser: 'Outpatient, multi-specialty, small and cash-pay aesthetic practices.',
    world: {
      headline: 'One patient record across every service line',
      intro:
        'An outpatient clinic is rarely just one thing. Elixir gives each service line the templates, scheduling rules and billing workflows it needs, while the patient keeps one chart and one bill.',
      challenges: [
        'Separate systems per service line, so the therapist does not see the medication the physician started.',
        'Front desk staff running two scheduling screens, doubling check-in time and booking errors.',
        'Intake forms arriving as PDFs that staff have to retype.',
        'Form and template changes that need a support ticket, so the system stops matching how you work.',
      ],
      sources: ['/ambulatory-ehr/', '/small-practice-ehr/', '/aesthetic-practice-ehr/'],
    },
    needs: [
      {
        id: 'replace-ehr',
        label: 'Replace my current EHR',
        phrase: 'replacing our current EHR',
        point: {
          title: 'Dedicated implementation',
          text: 'A named implementation lead configures the system, migrates your data and trains your staff, and stays with you through go-live and the first billing cycle.',
          to: '/small-practice-ehr/',
          linkLabel: 'Small practice EHR',
        },
      },
      {
        id: 'intake',
        label: 'Patient intake and forms',
        phrase: 'patient intake and forms',
        point: {
          title: 'Intake that writes to the chart',
          text: 'Digital forms that match the appointment type, completed on the patient’s phone or a clinic tablet, with the data landing in structured chart fields.',
          to: '/ambulatory-ehr/',
          linkLabel: 'Outpatient clinic EHR',
        },
      },
      {
        id: 'billing-rcm',
        label: 'Eligibility and billing',
        phrase: 'eligibility and billing',
        point: {
          title: 'Eligibility before the visit',
          text: 'Service-specific eligibility checks, automated batch verification ahead of the schedule, and copay, coinsurance and deductible shown at check-in.',
          to: '/ambulatory-ehr/',
          linkLabel: 'Outpatient clinic EHR',
        },
      },
      {
        id: 'scheduling',
        label: 'Scheduling providers, rooms and equipment',
        phrase: 'scheduling providers with rooms and equipment',
        point: {
          title: 'Multi-specialty, multi-resource scheduling',
          text: 'Appointment types, provider templates and resource scheduling, so rooms, procedure suites and equipment are never double-booked.',
          to: '/ambulatory-ehr/',
          linkLabel: 'Outpatient clinic EHR',
        },
      },
      {
        id: 'cash-pay',
        label: 'Cash-pay and aesthetic services',
        phrase: 'cash-pay and aesthetic services',
        point: {
          title: 'Built for cash-pay',
          text: 'Consults, packages, memberships and retail, with before-and-after photo authorizations stored against the image.',
          to: '/aesthetic-practice-ehr/',
          linkLabel: 'Aesthetic practice EHR',
        },
      },
    ],
    corePoints: [
      {
        id: 'service-lines',
        title: 'Multiple service lines, one chart',
        text: 'Support distinct clinical disciplines concurrently without cross-specialty data pollution.',
        to: '/ambulatory-ehr/',
        linkLabel: 'Outpatient clinic EHR',
      },
      {
        id: 'changeable',
        title: 'Changeable by your own team',
        text: 'Forms, templates and notes edited by your staff without a support ticket, so the system keeps matching how you actually work.',
        to: '/small-practice-ehr/',
        linkLabel: 'Small practice EHR',
      },
      {
        id: 'nothing-to-maintain',
        title: 'Nothing to maintain',
        text: 'Cloud-based and Salesforce-native. No servers, no backup jobs, no upgrade weekends, no IT hire.',
        to: '/small-practice-ehr/',
        linkLabel: 'Small practice EHR',
      },
    ],
  },
];
