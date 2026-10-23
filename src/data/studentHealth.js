// Student Health page (/more-specialties/student-health) — a child page of More Specialties.
// Copy is verbatim from the Figma (the "Student Care Management" frame). Links only point at routes that exist.
import heroPlaceholder from '../assets/contact-center/hero-placeholder.png';
import pillar1Icon from '../assets/student-health/icon-pillar-1.png';
import pillar2Icon from '../assets/student-health/icon-pillar-2.png';
import pillar3Icon from '../assets/student-health/icon-pillar-3.png';
import pillar4Icon from '../assets/student-health/icon-pillar-4.png';
import warningIcon from '../assets/student-health/icon-warning.png';
import intake1Icon from '../assets/student-health/icon-intake-1.png';
import intake2Icon from '../assets/student-health/icon-intake-2.png';
import intake3Icon from '../assets/student-health/icon-intake-3.png';
import intake4Icon from '../assets/student-health/icon-intake-4.png';
import intake5Icon from '../assets/student-health/icon-intake-5.png';
import intake6Icon from '../assets/student-health/icon-intake-6.png';
import noteIcon from '../assets/student-health/icon-note.png';
import level1Icon from '../assets/student-health/icon-level-1.png';
import level2Icon from '../assets/student-health/icon-level-2.png';
import level3Icon from '../assets/student-health/icon-level-3.png';
import checkIcon from '../assets/student-health/icon-check.png';
import care1Icon from '../assets/student-health/icon-care-1.png';
import care2Icon from '../assets/student-health/icon-care-2.png';
import care3Icon from '../assets/student-health/icon-care-3.png';
import care4Icon from '../assets/student-health/icon-care-4.png';
import care5Icon from '../assets/student-health/icon-care-5.png';
import care6Icon from '../assets/student-health/icon-care-6.png';
import infoIcon from '../assets/student-health/icon-info.png';
import doc1Icon from '../assets/student-health/icon-doc-1.png';
import doc2Icon from '../assets/student-health/icon-doc-2.png';
import doc3Icon from '../assets/student-health/icon-doc-3.png';
import doc4Icon from '../assets/student-health/icon-doc-4.png';
import doc5Icon from '../assets/student-health/icon-doc-5.png';
import info2Icon from '../assets/student-health/icon-info-2.png';
import calendarIcon from '../assets/student-health/icon-calendar.png';
import flagIcon from '../assets/student-health/icon-flag.png';
import shieldIcon from '../assets/student-health/icon-shield.png';

const icon = (src, w, h) => ({ src, size: [w, h] });

export const shHero = {
  currentPage: 'Student Health',
  titleLines: ['Student Care', 'Management', 'Software for Districts', 'and County Offices', 'of Education'],
  titleAccent: [],
  description:
    'A counselor finishes a session with a student. Whether that session is worth nothing or worth a reimbursable claim was decided weeks earlier — by facts nobody had in front of them at the time.',
  primaryCta: { label: 'Request a Demo', to: '/request-demo', arrow: false },
  // The frame gives no destination; it scrolls to "The Gap Between Enrolled and Actually Billing".
  secondaryCta: { label: 'Enrolled, but not billing', href: '#enrolled-gap' },
  media: { src: heroPlaceholder, alt: '' },
};

export const shPillars = [
  {
    icon: icon(pillar1Icon, 18, 16),
    title: 'Built for the three-tier structure',
    text: 'County office, district and school site as real levels, with referrals, queues, staff and reporting scoped to each.',
  },
  {
    icon: icon(pillar2Icon, 16, 18),
    title: 'Consent as a first-class record',
    text: 'Notification date and consent date held separately, with annual cycles, minor-consent pathways and withdrawal handled as events.',
  },
  {
    icon: icon(pillar3Icon, 16, 18),
    title: 'Documentation that becomes a claim',
    text: 'Service notes derive procedure codes, apply each program’s time and frequency rules, and surface exceptions before submission.',
  },
  {
    icon: icon(pillar4Icon, 14, 18),
    title: 'FERPA, not HIPAA',
    text: 'The permissions model is built for education records, which is what student health information usually is.',
  },
];

export const shGap = {
  eyebrow: 'The one to get right',
  title: 'The Gap Between Enrolled and Actually Billing',
  description:
    'California published a multi-payer fee schedule so schools could bill behavioral health to students’ own health plans. Enrollment has been strong. Claiming has not.',
  funnel: {
    title: 'CYBHI Claiming Funnel',
    chip: 'DHCS Reported',
    stats: [
      {
        value: '700',
        text: 'Local educational agencies and public institutions of higher education enrolled in the CYBHI fee schedule program.',
      },
      {
        value: '243',
        text: 'Of those, the number that have submitted claims — including 13 school-linked providers.',
      },
    ],
    active: { label: 'Active Claiming', share: '34.7%' },
    pending: { label: 'Enrolled Not Yet Claiming', share: '65.3%' },
    note: 'Roughly two in three enrolled organizations have not billed. Those that have, collectively recovered $20.79 million across 718,601 reimbursed claims for 77,762 students, from 43 participating plans and insurers. Figures published by DHCS as of 31 August 2026. Source 15.',
  },
  paragraphs: [
    'Enrolling is an administrative act. Billing is an operational one. It requires that every service be connected to a covered student, with the right consent documented, under an eligible provider credential, within an authorized service type, coded to the right procedure code, submitted in the right format to the right payer, within the applicable filing window. If any one of those conditions is unmet, the service does not become a claim.',
    'Schools are unusually exposed here, because the pieces sit in different places. The student information system holds demographics. The special education platform holds IEPs. Paper or a separate tool holds consent. The provider’s session notes sit in a clinical file. The person responsible for submitting claims sits in a business office and cannot see into any of those systems to know whether what happened in a counseling room is billable.',
  ],
  caveat: {
    icon: icon(warningIcon, 22, 19),
    title: 'What we will not claim',
    text: 'That software makes you compliant, or guarantees reimbursement. It does neither. What software can do is ensure that when your staff do the work, the documentation matches what the payer requires, the consent is verified before the claim goes out, and nothing falls through the space between departments. We also will not tell you your problem is billing. In most programs we have looked at, it is intake, consent or documentation — and a billing module cannot fix any of those.',
  },
};

export const shIntake = {
  eyebrow: 'Intake',
  title: 'Referrals and Forms That Arrive From Outside Your Walls',
  // The frame forces a line break after "community".
  description:
    'A student referral rarely starts with staff at a desk. It starts with a parent, a teacher, a community\nprovider or the student themselves — often on a phone, often out of hours.',
  items: [
    {
      icon: icon(intake1Icon, 18, 14),
      tone: 'lavender',
      title: 'Public forms that file themselves',
      text: 'Publish intake and referral forms as standalone web links. No login required for the submitter; submitted forms route directly into the intake queue for that school site or county program.',
    },
    {
      icon: icon(intake2Icon, 12, 16),
      tone: 'lime',
      title: 'Matched to the right student',
      text: 'Incoming submissions are matched against existing student records by identifier, name and date of birth — avoiding duplicate charts while preserving the original submission as an audit artifact.',
    },
    {
      icon: icon(intake3Icon, 20, 14),
      tone: 'lavender',
      title: 'Anyone can refer',
      text: 'Different entry points for teachers, parents, community-based organizations and students themselves. Tailor the questions asked to the submitter’s relationship to the student.',
    },
    {
      icon: icon(intake4Icon, 18, 14),
      tone: 'lime',
      title: 'Forms you control',
      text: 'Build intake instruments, screener surveys and referral questionnaires using Elixir’s form builder. Update them without engineering involvement when district policy or county screening protocols change.',
    },
    {
      icon: icon(intake5Icon, 16, 16),
      tone: 'lavender',
      title: 'Outbound referrals tracked too',
      text: 'When a student needs services the district cannot provide, track the outbound referral to a community mental health provider, county behavioral health or a contracted agency. Know whether the connection was completed.',
    },
    {
      icon: icon(intake6Icon, 16, 16),
      tone: 'lime',
      title: 'Electronic signature',
      text: 'Collect parent, guardian or minor signatures directly on digital forms at intake, with timestamps, IP logging and document locking for legal and audit compliance.',
    },
  ],
};

export const shConsent = {
  eyebrow: 'The one nobody models properly',
  title: 'Consent Is Not One Thing, and Getting It Wrong Stops the Claim',
  description:
    'Most student care systems hold a consent flag. Actual practice needs at least three different instruments, on different clocks, held by different people, with different consequences when they are withdrawn.',
  obligations: [
    {
      tone: 'purple',
      cite: 'IDEA / 34 CFR §300.154',
      title: 'Consent to access public benefits — once',
      text: 'Under IDEA regulations, parental consent to disclose personally identifiable information to Medicaid is required once — before the LEA first accesses benefits to pay for services. It does not expire annually unless the scope of services changes. Source 4.',
    },
    {
      tone: 'lime',
      cite: '34 CFR §300.154(d)(2)',
      title: 'Written notification — and then every year',
      text: 'Written notification to parents must be provided before accessing benefits and annually thereafter. It must include four specific statements: that consent is voluntary, may be withdrawn at any time, that refusal does not relieve the LEA of its FAPE obligation, and what records will be shared. Source 4.',
    },
    {
      tone: 'yellow',
      cite: 'Cal. Fam. Code §6924',
      title: 'Consent to treat — and who holds it',
      text: 'Consent to receive services is distinct from consent to bill. In California, a minor aged 12 or older may consent to outpatient mental health treatment if the professional believes they are mature enough to participate intelligently. When a minor consents under this statute, the minor — not the parent — holds the confidentiality right over those records. Source 19.',
    },
  ],
  paragraphs: [
    'What this means in a system: Elixir tracks the one-time IDEA billing consent, the annual written notification cycle, and the clinical consent-to-treat as separate instruments, each with its own grant date, renewal date, granting party, instrument type and status. A service cannot be marked ready for billing if the applicable consent has lapsed or was never obtained.',
    'The confidentiality consequence is the part most often missed: when a minor consents to care under California Family Code §6924, that care cannot be billed to a parent’s insurance plan without the minor’s authorization — because an explanation of benefits sent home would disclose services the minor had the legal right to receive confidentially. Elixir models this boundary explicitly.',
  ],
  note: {
    icon: icon(noteIcon, 15, 14),
    title: 'One distinction worth checking in your current process',
    text: '“We collect parental consent for Medicaid billing every year.” The consent is one-time, before first access. The notification is what recurs annually. If you are re-soliciting consent every year, you are creating an unnecessary point of failure for claims when a parent simply fails to return a form.',
    aside:
      'For non-IEP/IFSP services under California’s School-Based Medi-Cal Services program, parental consent is not required under federal Medicaid statute or the state plan, per CMS guidance issued in 2018 (Source 20). Individual LEAs may still require it as a matter of local policy.',
  },
};

export const shRouting = {
  eyebrow: 'Routing',
  title: 'School, District, County — and the Meeting in the Middle',
  // The frame forces a line break after "who is".
  description:
    'A county office of education is not one organization with one queue. It is a structure, and a referral moves through it. Software that models a single flat provider list cannot represent who is\nresponsible for what.',
  levels: [
    {
      icon: icon(level1Icon, 20, 18),
      title: '1. School site',
      text: 'Site queue: school counselor, school psychologist, social worker. The first resolvers. Most referrals should resolve here.',
    },
    {
      icon: icon(level2Icon, 18, 18),
      title: '2. District',
      text: 'Escalated queue: district behavioral health coordinator, student services director. Multi-site resources, contracted CBO allocation, district-wide programs.',
    },
    {
      icon: icon(level3Icon, 20, 20),
      title: '3. County programs',
      text: 'Specialist programs, regional day classes, direct county-operated services, community school hubs. Direct queues and oversight of LEA-level activity.',
    },
  ],
  paragraphs: [
    'The owner is a person, not a queue. At each level, an incoming referral must be assignable to an individual responsible for intake, with due-date tracking, escalation when a referral sits untouched, and automatic status updates back to the submitter where appropriate.',
    'COST is where triage actually happens. In California schools, the Coordination of Services Team — or its equivalent student study team, MTSS tier 2/3 committee or care team — is the mechanism by which multidisciplinary staff review referred students, evaluate screening data, assign interventions and review progress. Elixir supports COST directly: agenda building from the open-referral queue, in-meeting recording of team decisions, direct conversion of meeting outcomes into assigned cases or care plan goals, and meeting notes attached to the student record without leaving the platform. Source 22.',
  ],
  outcomes: {
    label: 'From referral to record',
    title: 'What a referral can become',
    icon: icon(checkIcon, 11, 8),
    items: [
      'An agenda item for the next COST meeting',
      'A clinical or psychoeducational assessment',
      'A multidisciplinary case with assigned goals',
      'A note on an existing record, with no new case opened',
      'An outbound referral to a community partner, with closed-loop tracking',
    ],
  },
};

export const shCare = {
  eyebrow: 'Care',
  title: 'Assessments, Cases and Care Plans',
  description:
    'The clinical middle of the work: establishing what a student needs, planning it, assigning it, and recording what was actually delivered.',
  items: [
    {
      icon: icon(care1Icon, 18, 14),
      tone: 'lavender',
      title: 'Standardized instruments',
      text: 'Administer screeners and assessments — PHQ-9, GAD-7, PSC-35, CRAFFT, Columbia C-SSRS — digitally, scored automatically, with historical trending across administrations.',
    },
    {
      icon: icon(care2Icon, 18, 18),
      tone: 'lime',
      title: 'Assessments that populate the plan',
      text: 'Screener findings flow directly into care plan goals. If a student scores in the moderate range on PHQ-A, the relevant intervention pathways and goal templates are suggested automatically.',
    },
    {
      icon: icon(care3Icon, 16, 12),
      tone: 'lavender',
      title: 'Care plans with structure',
      text: 'Goals, objectives, interventions and target dates organized by tier. Distinct from an IEP — designed for clinical and behavioral health workflows that may or may not be tied to special education.',
    },
    {
      icon: icon(care4Icon, 18, 18),
      tone: 'lime',
      title: 'Cases and interventions',
      text: 'Group related services into an open case with an assigned lead provider, defined review dates and measurable progress tracking across providers working with the same student.',
    },
    {
      icon: icon(care5Icon, 14, 18),
      tone: 'red',
      title: 'Safety and crisis planning',
      text: 'Structured safety plans built from evidence-based models (Stanley-Brown), accessible immediately to authorized staff with role-appropriate visibility, and locked from general view.',
    },
    {
      icon: icon(care6Icon, 16, 18),
      tone: 'lime',
      title: 'Scheduling on the same record',
      text: 'Schedule sessions against the student record. Appointments convert directly into service documentation entries when completed — eliminating the need to re-enter student details at documentation time.',
    },
  ],
  note: {
    icon: icon(infoIcon, 20, 20),
    text: 'California law requires local educational agencies serving grades 7 to 12 to have adopted a policy on pupil suicide prevention (Education Code §215).\nElixir’s safety planning and crisis documentation instruments are aligned with this requirement and CDE model policy guidance. Source 21.',
  },
};

export const shDocumentation = {
  eyebrow: 'Documentation',
  title: 'Service Documentation That Becomes a Claim',
  description:
    'The provider records the service. The system does the coding. That division is the whole point — a counselor should not need to know a program’s time rules to be paid for the session they just delivered.',
  items: [
    {
      tag: 'Coding',
      tone: 'lime',
      icon: icon(doc1Icon, 20, 20),
      title: 'The procedure code is derived, not chosen',
      text: 'The provider enters the service type, duration, modality and credential. Elixir determines whether that combination resolves to 90832, 90834, 90837, H0004 or another code, under the rules of the specific program being billed.',
    },
    {
      tag: 'Time',
      tone: 'lime',
      icon: icon(doc2Icon, 20, 20),
      title: 'Duration rules differ by program for the same service',
      text: 'A 35-minute psychotherapy session is billed under CPT time midpoint rules under commercial plans (90834 requires at least 38 minutes, so 35 minutes becomes 90832). LEA BOP has its own unit and duration structure. Elixir applies the correct rule set based on the program the service was routed to.',
    },
    {
      tag: 'Limits',
      tone: 'lavender',
      icon: icon(doc3Icon, 18, 18),
      title: 'Frequency caps, applied before the claim',
      text: 'If a program limits a service type to one unit per student per day, or a set number of sessions per year without prior authorization, Elixir flags the limit at documentation time — not weeks later when a clearinghouse rejects the claim.',
    },
    {
      tag: 'Modifiers',
      tone: 'lavender',
      icon: icon(doc4Icon, 18, 18),
      title: 'Modifiers follow the program and the credential',
      text: 'CYBHI fee schedule claims require specific practitioner modifiers (e.g. licensing-level modifiers, telehealth modality modifiers). Elixir appends the correct modifiers automatically from the provider’s stored credentials and the session modality.',
    },
    {
      tag: 'Exceptions',
      tone: 'red',
      icon: icon(doc5Icon, 20, 20),
      title: 'What cannot be coded cleanly is surfaced, not guessed',
      copyWidth: 810,
      text: 'When documentation does not support a billable code — insufficient duration, credential mismatch, missing diagnosis, lapsed consent — the service note is saved as a clinical record but held in an exception queue for billing review. It is not silently dropped, and it is not submitted as an invalid claim.',
    },
  ],
};

export const shPrograms = {
  eyebrow: 'The differentiator',
  title: 'Which Program Pays: The Routing Decision Behind Every Service',
  description:
    'In a school running more than one reimbursement program, the hardest question is not how to submit a claim. It is which program this particular service belongs to — and the answer depends on facts about the student that the person delivering the service may not know.',
  paragraphs: [
    'California has drawn the line explicitly: services delivered under an Individualized Education Program (IEP) or Individualized Family Service Plan (IFSP) are covered under the LEA Medi-Cal Billing Option Program (LEA BOP). They may not be billed under the CYBHI fee schedule. Services delivered to general education students, or outside an IEP/IFSP, may be billed under the CYBHI fee schedule — if the student is covered by a participating plan. Source 5.',
    'So the bright line is educational status, not payer. A student with full-scope Medi-Cal who receives individual counseling under an IEP must be claimed through LEA BOP. An identical session delivered to a general education student with the same Medi-Cal coverage can be billed under the CYBHI fee schedule. If the provider does not know the IEP status, they cannot know where the claim belongs.',
    'What Elixir does with it: when a service note is completed, the routing engine checks the student’s IEP/IFSP status, insurance coverage details, consent records and provider credential against the program eligibility matrix. The service is assigned to the correct claiming pipeline automatically. The provider documents care; Elixir routes the claim.',
  ],
  table: {
    caption: 'Which program pays for what',
    columns: ['Program', 'Pays for', 'Paid by'],
    rows: [
      ['LEA BOP', 'IEP / IFSP-mandated health and behavioral health services', 'Medi-Cal (DHCS)'],
      ['CYBHI fee schedule', 'General education behavioral health; designated non-IEP services', 'Commercial plans & Medi-Cal managed care plans'],
      ['SMAA', 'Administrative outreach, enrollment, coordination', 'Federal Medicaid match via DHCS'],
      ['Direct contracts', 'Services under bilateral agreements with specific health plans', 'Individual contracted plan'],
    ],
  },
  note: {
    icon: icon(info2Icon, 20, 20),
    text: 'Payer of first resort: Under California Welfare and Institutions Code §14115.8 and federal Medicaid policy, Medicaid is the payer of last resort — except for IDEA-mandated services in an IEP/IFSP, where Medi-Cal LEA BOP is the primary reimbursement mechanism for eligible students. Section 504 plans occupy a distinct position depending on program rules. Source 5.',
  },
};

export const shClaims = {
  eyebrow: 'Revenue',
  title: 'Claims, Clearinghouses and Remittance',
  description:
    'Different programs want different claim formats, submitted through different routes, on different clocks. The record should absorb that difference rather than passing it to a billing clerk.',
  steps: [
    {
      title: 'Generate: Claims built from the service',
      text: 'EDI 837P files generated directly from completed service documentation. No double entry from clinical notes into a separate billing tool.',
    },
    {
      title: 'Scrub: Validated before it leaves',
      text: 'Rules engines validate diagnosis pointers, credential modifiers, time rules, frequency caps and consent status before submission.',
    },
    {
      title: 'Reconcile: Remittance back onto the record',
      // The frame breaks this title before "back".
      titleWidth: 230,
      text: '835 electronic remittance advice files ingested automatically. Payments, adjustments and denials posted back against the individual service entry.',
    },
  ],
  note: {
    icon: icon(calendarIcon, 18, 20),
    title: 'One deadline that changed in your favor',
    text: 'For CYBHI fee schedule services with dates of service on or after 1 January 2026, the claim submission window moved from 180 days to 365 days from the date of service. For services delivered between 1 January 2024 and 31 December 2025, the 180-day window still applies. Elixir tracks which submission window governs each service by date of service. Source 18.',
  },
};

export const shCalifornia = {
  eyebrow: 'California',
  title: 'LEA BOP, SMAA and CYBHI: Three Programs, One Time Study',
  description:
    'Two of California’s three school-based claiming programs are fed by the same quarterly instrument. Understanding that link is the difference between treating the time survey as an administrative chore and treating it as revenue infrastructure.',
  paragraphs: [
    'The Random Moment Time Survey feeds both LEA BOP cost settlement and SMAA claiming. Participating staff are sampled randomly across the quarter. How their sampled moments are coded directly determines the district’s direct-service cost pool and administrative claiming percentages. A low response rate does not just hurt administrative revenue — it threatens the validity of the entire quarter’s sample.',
    'The compliance threshold has teeth: LEAs must achieve an 85% moment-response rate across all participating staff each quarter. Fall below that threshold, and the state applies an adjustment factor that reduces federal reimbursement across every claimed dollar for that quarter. Staff roster maintenance — keeping the list of eligible practitioners accurate, certified and updated before each quarter begins — is the single most common reason districts fall short. Sources 10, 13.',
    'Record retention differs between the programs: LEA BOP documentation — including service logs, IEP authorizations, parental consent records and provider credentials — must be retained for a minimum of five years from the end of the state fiscal year of service. SMAA audit files, time study results and quarterly claim packages must be retained for five years under California’s SMAA manual. If federal funding is involved, federal record retention rules may impose additional requirements. Source 10.',
  ],
  log: {
    title: 'Service Log Documentation: What Must Be in the Record',
    lead: 'Under DHCS LEA BOP rules, each service log must contain these six elements to support a valid claim:',
    items: [
      'Date of service',
      'Student’s name and Medicaid ID number',
      'Name of the local educational agency providing the service',
      'Name and credential of the person providing the service',
      'Place of service (school site, clinic, telehealth)',
      'Nature, extent and units of the service, including specific procedure codes',
    ],
  },
  change: {
    icon: icon(flagIcon, 12, 14),
    title: 'A change that took effect this summer',
    text: 'Until recently, participating in the CYBHI fee schedule required an LEA to be enrolled in LEA BOP. As of 1 July 2026, DHCS decoupled the two: LEAs may now enroll directly in the CYBHI fee schedule program without maintaining an active LEA BOP enrollment. For districts that do not offer IEP-mandated services or that found the cost-settlement requirements of LEA BOP prohibitive, this eliminates a major structural barrier to billing general education behavioral health. Sources 11, 12.',
  },
};

export const shPrivacy = {
  eyebrow: 'Privacy',
  title: 'FERPA, Not HIPAA: Why Student Health Records Are Different',
  lead: 'The most consequential assumption a health IT vendor can bring into a school is the wrong privacy statute.',
  paragraphs: [
    'In most cases the HIPAA Privacy Rule does not apply to a K-12 school. Under federal law, health records maintained by an educational agency that receives federal funding are education records governed by FERPA — not protected health information governed by HIPAA. The HIPAA Privacy Rule explicitly excludes education records covered by FERPA from the definition of protected health information. Source 6.',
    'Contracting an outside provider does not change it. When a district contracts with a third-party behavioral health organization or community clinic to deliver services on campus, the records created in that engagement are education records if they are maintained by the school, or treatment records under FERPA if maintained by the provider on behalf of the school. Bringing outside clinical staff on campus does not automatically shift the governing framework to HIPAA. Source 7.',
    'Why it matters practically: FERPA gives parents the absolute right to inspect and review their child’s education records. HIPAA has narrower inspection rights and different exception structures. A software system that assumes HIPAA permissions will expose schools to FERPA violations by improperly restricting parental access — or will expose student health data to staff who have an educational need-to-know under FERPA but not a treatment relationship. Elixir’s role-based access control was architected around FERPA from the beginning.',
  ],
  aside: {
    icon: icon(shieldIcon, 12, 16),
    title: 'The Treatment-Records Exception',
    text: 'Under FERPA (34 CFR §99.3), records on a student who is 18 or older, or attending a postsecondary institution, that are made or kept by a physician, psychiatrist, psychologist or other recognized professional, and disclosed only to individuals providing treatment, are “treatment records” and excluded from the definition of education records. In K-12 schools, this exception rarely applies to minors, meaning nearly all health documentation in a K-12 setting is an education record subject to full FERPA parental inspection rights. Source 6.',
  },
};

// The shared FAQ accordion fills its left column first; the items are ordered so each question
// sits in the column it is drawn in (the frame reads its two columns row by row).
export const shFaq = {
  title: 'Student Care Management: Frequently Asked Questions',
  description: 'What program directors, business officials and county office teams ask us first.',
  items: [
    {
      question: 'Is this an EHR or a billing system?',
      answer:
        'Neither alone, and both together. Elixir is a care management platform built for the operational reality of education agencies. It includes clinical charting, assessments, case management and care planning — but every clinical action is connected to the billing rules of the programs you run, so documentation produces claims without a handoff between separate systems.',
    },
    {
      question: 'How does Elixir decide which program to bill?',
      answer:
        'The routing engine evaluates the student’s IEP/IFSP status, the provider’s credentials, the service type and duration, the student’s payer coverage, and active consent instruments at the time the note is completed. In California, for example, services delivered under an IEP are routed to LEA BOP; eligible services for general education students are routed to the CYBHI fee schedule; and services falling outside both are held or routed to commercial plans as configured.',
    },
    {
      question: 'What about parental consent for billing Medicaid?',
      answer:
        'Under IDEA regulations, parental consent to disclose records for Medicaid claiming is required once, before first access. Annual written notification is required every year thereafter. Elixir tracks both: the one-time consent date and instrument, and the annual notification delivery date. For non-IEP services under the CYBHI fee schedule, CMS guidance from 2018 eliminated the federal requirement for parental consent to bill Medicaid for school-based services, though local policy may vary.',
    },
    {
      question: 'Can providers document on the same record that produces the claim?',
      answer:
        'Yes — that is how the platform is designed. When a counselor or psychologist completes a session note, they record the clinical narrative and the operational facts of the session. Elixir derives the CPT or HCPCS code, validates duration and frequency rules, checks consent status, and builds the claim record automatically. The provider documents clinical care; the system produces compliant claims.',
    },
    {
      question: 'We are not in California. Is this only for California programs?',
      answer:
        'No. The core architecture — multi-tier routing across school, district and county levels; FERPA-native permissions; consent tracking across multiple clocks; intake from web forms; clinical documentation that derives procedure codes — applies to education agencies everywhere. Our program rule engines currently support California (LEA BOP, CYBHI, SMAA) with additional state rule sets in development. Contact us for your state’s status.',
    },
    {
      question: 'Can a student consent for themselves?',
      answer:
        'Yes, where state law permits it. In California, under Family Code §6924, a minor aged 12 or older may consent to outpatient mental health treatment. Elixir records the minor consent pathway explicitly, sets the appropriate confidentiality boundary (preventing disclosure to parents without the minor’s authorization), and alerts the billing coordinator that commercial claims may require minor sign-off to avoid disclosure via explanation of benefits.',
    },
    {
      question: 'Do school health records fall under HIPAA?',
      answer:
        'Almost never in a K-12 setting. The HIPAA Privacy Rule explicitly excludes education records subject to FERPA from the definition of protected health information. Health records created and maintained by a public school — including records of services billed to Medicaid — are education records under FERPA. Elixir’s permissions, audit logs and parent-access workflows are built around FERPA requirements, not HIPAA assumptions.',
    },
    {
      question: 'We are enrolled in a program but have never successfully billed. Can you help with that?',
      answer:
        'Yes. This is the most common situation we encounter, particularly with the CYBHI fee schedule. We start by auditing why services are not becoming claims — usually missing consent documentation, unmapped provider credentials, missing diagnosis codes, or a lack of visibility between clinical staff and the billing office — and configure Elixir to resolve those specific failure points.',
    },
  ],
};

export const shCtaBand = {
  eyebrow: 'From referral to remittance, on one record',
  title: 'Bring us a service you cannot currently bill',
  description:
    'Pick one real example — a session that happened and produced nothing. We will walk it from the referral that started it through consent, documentation, program routing and the claim, and show you where it actually stopped.',
  cta: { label: 'Request a Demo', to: '/request-demo' },
  secondaryCta: { label: 'Mental Health', to: '/behavioral-health/mental-health' },
};
