// Small Practices page (/more-specialties/small-practices) — a child page of More Specialties.
// Copy is verbatim from the Figma. Links only point at routes that exist.
import heroPlaceholder from '../assets/contact-center/hero-placeholder.png';
import pillar1Icon from '../assets/small-practices/icon-pillar-1.png';
import pillar2Icon from '../assets/small-practices/icon-pillar-2.png';
import pillar3Icon from '../assets/small-practices/icon-pillar-3.png';
import pillar4Icon from '../assets/small-practices/icon-pillar-4.png';
import criterion1Icon from '../assets/small-practices/icon-criterion-1.png';
import criterion2Icon from '../assets/small-practices/icon-criterion-2.png';
import criterion3Icon from '../assets/small-practices/icon-criterion-3.png';
import criterion4Icon from '../assets/small-practices/icon-criterion-4.png';
import criterion5Icon from '../assets/small-practices/icon-criterion-5.png';
import criterion6Icon from '../assets/small-practices/icon-criterion-6.png';
import questionIcon from '../assets/small-practices/icon-question.png';
import clinical1Icon from '../assets/small-practices/icon-clinical-1.png';
import clinical2Icon from '../assets/small-practices/icon-clinical-2.png';
import clinical3Icon from '../assets/small-practices/icon-clinical-3.png';
import clinical4Icon from '../assets/small-practices/icon-clinical-4.png';
import billing1Icon from '../assets/small-practices/icon-billing-1.png';
import billing2Icon from '../assets/small-practices/icon-billing-2.png';
import billing3Icon from '../assets/small-practices/icon-billing-3.png';
import billing4Icon from '../assets/small-practices/icon-billing-4.png';
import billing5Icon from '../assets/small-practices/icon-billing-5.png';
import billing6Icon from '../assets/small-practices/icon-billing-6.png';
import teleNowIcon from '../assets/small-practices/icon-tele-now.png';
import tele2028Icon from '../assets/small-practices/icon-tele-2028.png';
import telePermanentIcon from '../assets/small-practices/icon-tele-permanent.png';
import pe1Icon from '../assets/small-practices/icon-pe-1.png';
import pe2Icon from '../assets/small-practices/icon-pe-2.png';
import pe3Icon from '../assets/small-practices/icon-pe-3.png';
import pe4Icon from '../assets/small-practices/icon-pe-4.png';
import pe5Icon from '../assets/small-practices/icon-pe-5.png';
import pe6Icon from '../assets/small-practices/icon-pe-6.png';
import report1Icon from '../assets/small-practices/icon-report-1.png';
import report2Icon from '../assets/small-practices/icon-report-2.png';
import report3Icon from '../assets/small-practices/icon-report-3.png';
import gfeIcon from '../assets/small-practices/icon-gfe.png';
import epcsIcon from '../assets/small-practices/icon-epcs.png';
import secPlatformIcon from '../assets/small-practices/icon-sec-platform.png';
import secClinicIcon from '../assets/small-practices/icon-sec-clinic.png';
import secProposedIcon from '../assets/small-practices/icon-sec-proposed.png';

const icon = (src, w, h) => ({ src, size: [w, h] });

export const spHero = {
  currentPage: 'Small Practices',
  titleLines: ['Small Practice EHR', 'Software for Clinics', 'Without an IT', 'Department'],
  titleAccent: [],
  description:
    'All the capabilities that matter to a small healthcare provider, implemented by someone else, and changeable by your own staff afterwards — without the cost or the project that usually comes with an enterprise platform.',
  primaryCta: { label: 'Request a Demo', to: '/request-demo', arrow: false },
  // The frame gives no destination; it scrolls to "What a Small Practice Actually Needs From an EHR".
  secondaryCta: { label: 'What small practices actually need', href: '#start-here' },
  media: { src: heroPlaceholder, alt: '' },
};

export const spPillars = [
  {
    icon: icon(pillar1Icon, 20, 18),
    title: 'Dedicated implementation',
    text: 'A named implementation lead configures the system, migrates your data and trains your staff. You make decisions; we do the work.',
  },
  {
    icon: icon(pillar2Icon, 18, 16),
    title: 'Changeable by your own team',
    text: 'Forms, templates and notes edited by your staff without a support ticket, so the system keeps matching how you actually work.',
  },
  {
    icon: icon(pillar3Icon, 22, 16),
    title: 'Nothing to maintain',
    text: 'Cloud-based and Salesforce-native. No servers, no backup jobs, no upgrade weekends, no IT hire.',
  },
  {
    icon: icon(pillar4Icon, 20, 12),
    title: 'Room to grow',
    textWidth: 185,
    text: 'Add a provider, a location or a service line as configuration — not as a migration to a different product.',
  },
];

export const spNeeds = {
  eyebrow: 'Start here',
  title: 'What a Small Practice Actually Needs From an EHR',
  description:
    'Enterprise EHR pages sell depth of configuration. For a practice with two to fifteen clinicians and no IT staff, depth is not the deciding factor — these six questions are, and most vendor websites answer none of them. Ours are below, and we would put the same questions to anyone else you are evaluating.',
  items: [
    {
      icon: icon(criterion1Icon, 19, 14),
      title: 'What will it cost us, specifically?',
      text: 'Not a starting-from figure. A written number for your provider count and the modules you will actually run, before you commit to anything.',
    },
    {
      icon: icon(criterion2Icon, 15, 17),
      title: 'When will we be live?',
      text: 'A date, not a range. The two variables are how much history you migrate and how many forms have to be rebuilt rather than adopted.',
    },
    {
      icon: icon(criterion3Icon, 19, 16),
      title: 'Who does the setup?',
      text: 'If the answer involves your staff doing configuration in the evenings, the project will slip. A small practice needs the vendor to do it.',
    },
    {
      icon: icon(criterion4Icon, 15, 16),
      title: 'Can we change a form ourselves next year?',
      text: 'If every change is a ticket or a change order, you will stop making them, and within two years the system will no longer match how you work.',
    },
    {
      icon: icon(criterion5Icon, 15, 16),
      title: 'What happens to our existing data?',
      text: 'What comes across depends on what your current vendor will export. Ask them for an export specification early — it is usually the longest lead item.',
    },
    {
      icon: icon(criterion6Icon, 17, 16),
      title: 'What happens when we grow?',
      text: 'Adding a provider, a location or a service line should be configuration on the same platform, not a second migration in three years.',
    },
  ],
};

export const spImplementation = {
  eyebrow: 'Implementation',
  title: 'Dedicated Implementation: Who Sets It Up, and How Long',
  description:
    'This is the section most small-practice EHR pages leave out, and it is the one that decides whether the purchase works. A small practice has no implementation team, no project manager and no spare evenings — so the vendor has to bring all three.',
  steps: [
    {
      when: 'Week 1-2',
      title: 'Scope and plan',
      text: 'Your provider count, service mix, payers and forms reviewed against a standard configuration, so you know up front what is adopted as-is and what has to be built.',
    },
    {
      when: 'Week 3-6',
      title: 'Configure and migrate',
      text: 'We build the configuration and migrate your data. The pace of this step is set by what your current vendor will export, which is why we ask for that specification first.',
    },
    {
      when: 'Week 7-8',
      title: 'Train your team',
      text: 'Role-based training for providers, front desk and billing on the configuration you will actually use — not a generic product tour.',
    },
    {
      when: 'Live & beyond',
      title: 'Go live and settle',
      text: 'A named implementation lead stays with you through go-live and the first billing cycle, which is when the real questions appear.',
    },
  ],
  questions: {
    icon: icon(questionIcon, 18, 19),
    title: 'Questions worth asking any vendor about implementation',
    items: [
      'Is the implementation lead a named person dedicated to our project, or a pooled queue?',
      'What specific data fields migrate, and what stays in PDF or read-only archive?',
      'Who builds the first set of clinical note templates — your team or ours?',
      'Does training happen before or after our data is in the test environment?',
      'Does the implementation lead stay with us through the first clearinghouse remittance, or hand off at go-live day?',
    ],
  },
};

export const spClinical = {
  eyebrow: 'Clinical',
  title: 'A Customizable EHR You Can Change Without a Consultant',
  description:
    'A fully customizable EHR that can be scaled as your practice grows — with the important part being who is allowed to do the customizing.',
  // Two independent columns, as drawn: cards 1 and 3 on the left, 2 and 4 on the right.
  items: [
    {
      icon: icon(clinical1Icon, 18, 19),
      title: 'Note-taking and custom templates',
      text: "Every practice documents slightly differently. A pediatrics practice does not chart like a pain clinic, and a solo practitioner charts differently from a four-doctor partnership. Elixir's note templates and forms are designed to be edited by your practice administrator or lead clinician. When you want to add a field, change a review-of-systems checklist or adjust a procedure template, you do it directly. No ticket, no consulting engagement, no two-week wait for an updated picklist.",
    },
    {
      icon: icon(clinical2Icon, 16, 20),
      title: 'Security for sensitive patient data',
      text: 'Customization should never weaken security. Field-level permissions, audit logs and role-based access controls apply to customized forms the same way they apply to standard fields. If a behavioral health provider joins a family medicine practice, their clinical notes can be restricted to their role without creating a separate database or a parallel system.',
    },
    {
      icon: icon(clinical3Icon, 16, 19),
      title: 'Scales as the practice grows',
      textWidth: 440,
      text: 'Customization that works for two providers often breaks when you hire the fourth. Because Elixir is built on an enterprise architecture, the configuration layers do not become fragile as you add users, roles or specialty-specific notes. You can maintain a shared core template while giving individual providers their own preferred macro sets and documentation shortcuts.',
    },
    {
      icon: icon(clinical4Icon, 20, 16),
      title: 'Built on Salesforce',
      text: "Underneath, Elixir runs on the Salesforce platform. That means the tools you use to adjust a form or build a report are the same declarative, click-not-code builders that millions of organizations use globally. It also means you are not dependent on a boutique EHR vendor's proprietary scripting language or their release schedule to get small changes made.",
    },
  ],
};

export const spBilling = {
  eyebrow: 'Billing',
  title: 'Integrated Billing and Payment Workflows for Small Practices',
  description:
    'In a small practice one person usually owns billing, and often it is the practice manager doing it alongside everything else. The system has to make that job smaller, not give it a second application to log into.',
  items: [
    {
      icon: icon(billing1Icon, 18, 19),
      title: 'Payment schedules tracked',
      text: 'Maintain and track patient payment schedules to avoid balances quietly ageing into bad debt.',
    },
    {
      icon: icon(billing2Icon, 20, 20),
      title: 'Intuitive billing workflows',
      text: 'An automated billing path from documented visit to submitted claim, without re-entering what the chart already knows.',
    },
    {
      icon: icon(billing3Icon, 20, 20),
      title: 'Eligibility before the visit',
      text: 'Coverage verified ahead of the appointment, so the front desk collects the right copay rather than guessing.',
    },
    {
      icon: icon(billing4Icon, 16, 16),
      title: 'Remittances posted automatically',
      text: 'ERA posting with exceptions routed to a worklist — the part a one-person billing team cannot afford to do by hand.',
    },
    {
      icon: icon(billing5Icon, 20, 20),
      title: 'Online patient payment',
      text: 'Patients pay from the portal or a texted link, which collects more and faster than a mailed statement.',
    },
    {
      icon: icon(billing6Icon, 20, 16),
      title: 'Denials grouped by cause',
      text: 'So a recurring coding or documentation problem gets fixed once instead of appealed every month.',
    },
  ],
};

export const spTelehealth = {
  eyebrow: 'Telehealth',
  title: 'Telehealth for Small Practices — and the 2028 Medicare Change',
  description:
    'Telehealth lets you reach patients without worrying about physical barriers, meet requests quickly, and let patients schedule on-demand virtual visits in minutes. For Medicare patients there is a date attached to that, and a small practice has less slack to absorb a surprise.',
  cards: [
    {
      tone: 'lime',
      chip: 'Now',
      icon: icon(teleNowIcon, 19, 19),
      title: 'Through 31 December 2027 the flexibilities hold',
      text: "No geographic restriction, the patient's home counts as an originating site, and audio-only is permitted for non-behavioral services.",
    },
    {
      tone: 'red',
      chip: '1 Jan 2028',
      icon: icon(tele2028Icon, 21, 18),
      title: 'Pre-pandemic limits return for non-behavioral services',
      text: 'The patient generally has to be in a qualifying rural or shortage area at an authorized site rather than at home, and audio-only stops qualifying. If telehealth is a meaningful share of your Medicare volume, model that now rather than in 2027.',
    },
    {
      tone: 'lime',
      chip: 'Permanent',
      icon: icon(telePermanentIcon, 15, 19),
      title: 'Behavioral health keeps the flexibilities',
      text: 'Home as originating site, no geographic restriction and audio-only are permanent for behavioral and mental health services only. See Behavioral Health.',
    },
  ],
  source: 'Source 1.',
};

export const spExperience = {
  eyebrow: 'Patient experience',
  title: 'A Personalized Patient Experience at Every Touchpoint',
  description:
    'The advantage a small practice has over a large group is that patients are known rather than processed. The system should make that easier to sustain as volume grows, not harder.',
  items: [
    {
      icon: icon(pe1Icon, 19, 17),
      title: 'Nurtured at every touchpoint',
      text: 'From the first phone call or website visit through post-treatment follow-up, communications reflect the relationship you actually have with the patient.',
    },
    {
      icon: icon(pe2Icon, 17, 17),
      title: 'Preferences tracked and acted on',
      text: 'Communication channel, preferred appointment times, preferred pharmacy, accessibility needs — captured once and visible to whoever answers the phone.',
    },
    {
      icon: icon(pe3Icon, 17, 17),
      title: 'Custom workflows per patient journey',
      text: 'A new patient intake is not the same journey as a chronic disease check-in. Workflows trigger the right intake forms, reminders and follow-up tasks automatically.',
    },
    {
      icon: icon(pe4Icon, 19, 15),
      title: 'Self-service through the portal',
      text: 'Scheduling, intake completion, balance payment and records requests handled by the patient without calling the front desk.',
    },
    {
      icon: icon(pe5Icon, 19, 19),
      title: 'Fewer missed appointments',
      textWidth: 274,
      text: 'Automated SMS and email reminders with one-tap confirmation reduce no-shows — the single largest source of wasted provider time in small practices.',
    },
    {
      icon: icon(pe6Icon, 22, 22),
      title: 'One record behind all of it',
      text: 'Portal messages, appointment history, forms, clinical notes and billing balances sit on the same patient record, so whoever is talking to the patient has full context.',
    },
  ],
};

export const spReporting = {
  eyebrow: 'Reporting',
  title: 'Advanced Reporting Without a Data Analyst',
  description:
    'A small practice does not have someone whose job is reports. It has a practice manager with an hour on a Friday.',
  items: [
    {
      icon: icon(report1Icon, 20, 19),
      title: 'Declarative reporting engine',
      textWidth: 254,
      text: 'Because Elixir is built on Salesforce, reporting uses standard drag-and-drop report builders with no SQL required. Any field you can see on a screen can be filtered, grouped and charted. Standard dashboard packs cover the essential operating metrics: provider productivity, schedule utilization, accounts receivable ageing, payer mix and denial rates.',
    },
    {
      icon: icon(report2Icon, 21, 15),
      title: 'Specific high-value metrics',
      text: 'For a small practice, the questions that matter most are usually specific: Which payer has the highest denial rate on our main procedure codes? Which providers have unsigned charts older than 48 hours? What share of our Medicare volume was delivered via telehealth this quarter? These are standard reports in Elixir, not custom development requests.',
    },
    {
      icon: icon(report3Icon, 15, 19),
      title: 'Freshness over complexity',
      text: 'Reports run against live transactional data — there is no overnight data warehouse sync to wait for. When a claim status updates or a note is signed, the change is reflected in the dashboard immediately.',
    },
  ],
};

export const spMips = {
  eyebrow: 'Quality reporting',
  title: 'MIPS for Small Practices: Are You Even In It?',
  description:
    'The most common mistake small practices make with MIPS is assuming they are in it. Many are not. The low-volume threshold is a three-part test, and falling at or below any one of the three excludes you entirely.',
  table: {
    caption: '2026 MIPS Low-Volume Threshold Criteria',
    chip: 'CMS 42 CFR § 414.1310',
    columns: ['Criterion', 'Threshold (must exceed ALL three)', 'Impact if ≤ threshold'],
    rows: [
      ['Medicare Part B allowed charges', '> $90,000', 'Excluded from MIPS'],
      ['Medicare Part B patients', '> 200', 'Excluded from MIPS'],
      ['Covered professional services', '> 200', 'Excluded from MIPS'],
    ],
    source: 'Source 2. Check your status at',
    // The URL is printed in the frame.
    link: { label: 'qpp.cms.gov/participation-lookup', href: 'https://qpp.cms.gov/participation-lookup' },
  },
  relief: {
    title: 'If you are a small practice and you are in MIPS',
    lead: 'A small practice is defined as 15 or fewer clinicians under the TIN. The rules give you specific relief:',
    items: [
      {
        term: 'Promoting Interoperability reweighted to 0%:',
        text: 'Automatic for small practices; the weight redistributes across Quality and Improvement Activities.',
      },
      { term: '6 bonus points:', text: 'Automatically added to the Quality performance category numerator.' },
      {
        term: '1 improvement activity:',
        text: 'Instead of two high-weighted or four medium-weighted activities, a small practice achieves 100% of this category with one.',
      },
      {
        term: '75 points performance threshold:',
        text: 'To avoid a negative payment adjustment in 2028 (based on 2026 performance), you need a final score of at least 75 points.',
      },
    ],
  },
  myths: {
    title: 'Three things vendors get wrong about this',
    items: [
      {
        claim: '"Earn up to +9%"',
        text: 'MIPS is budget-neutral. Positive adjustments are funded by negative ones, and small-practice upside has historically been under 2% — not 9%. Selling MIPS on the bonus is misleading.',
      },
      {
        claim: '"Small practices get easier data completeness"',
        text: 'The 75% data completeness threshold applies to small practices identically. The relief is in scoring and reweighting, not in data collection.',
      },
      {
        claim: '"You can try Promoting Interoperability risk-free"',
        text: 'If a small practice submits any PI measure data, CMS scores the category instead of reweighting it to zero. A low PI score then pulls the total down.',
      },
    ],
  },
  source: 'Sources 2–4.',
};

export const spObligations = {
  eyebrow: 'Two easily missed rules',
  title: 'Good Faith Estimates and e-Prescribing Thresholds',
  description:
    'Two federal obligations that land squarely on small practices, one because it is easy to overlook and one because a small practice may be exempt from it without knowing.',
  cards: [
    {
      icon: icon(gfeIcon, 18, 23),
      title: 'Good Faith Estimates — you almost certainly owe these',
      lead: 'Under the No Surprises Act, if you treat self-pay or uninsured patients, you must provide a written Good Faith Estimate before scheduled services.',
      items: [
        { term: 'Applies to all licensed providers and facilities:', text: 'There is no small-practice exemption.' },
        {
          term: 'Timing:',
          text: 'If scheduled at least 3 business days in advance, due within 1 business day. If scheduled at least 10 business days in advance, due within 3 business days.',
        },
        {
          term: 'Itemized:',
          text: 'Expected charges for the primary item or service plus any reasonably expected adjunct services.',
        },
        {
          term: 'Dispute resolution:',
          text: 'If the final bill exceeds the GFE by $400 or more, the patient can trigger federal dispute resolution.',
        },
        {
          term: "Elixir's approach:",
          text: 'GFE generation is integrated with appointment booking and fee schedule configuration, so estimates are produced automatically when a self-pay appointment is scheduled rather than assembled by hand.',
        },
      ],
      source: 'Source 5.',
    },
    {
      icon: icon(epcsIcon, 16, 21),
      title: 'EPCS — you may be automatically excepted',
      lead: 'Medicare Part D requires electronic prescribing of controlled substances (EPCS), with a 70% threshold. But small practices frequently qualify for an automatic exception they do not know about.',
      items: [
        {
          term: 'The 100-prescription rule:',
          text: 'Prescribers who write 100 or fewer qualifying Medicare Part D controlled substance prescriptions in a measurement year receive an automatic exception. No application is required.',
        },
        {
          term: 'Measurement year:',
          text: 'The 2026 compliance year looks at prescriptions written from 1 January to 31 December 2026.',
        },
        {
          term: 'State laws still apply:',
          text: 'Federal EPCS exceptions do not override state-level mandates. If your state requires EPCS for all schedules regardless of volume, you must still comply with state law.',
        },
        {
          term: 'PDMP access:',
          text: 'Most states now mandate checking the Prescription Drug Monitoring Program before prescribing Schedule II–IV substances. Elixir supports integrated PDMP queries directly from the e-prescribing screen.',
        },
      ],
      source: 'Source 6.',
    },
  ],
};

export const spSecurity = {
  eyebrow: 'Security',
  title: 'Security and HIPAA in a Practice With No IT Staff',
  description:
    'The HIPAA Security Rule is written to scale — it expressly allows you to consider the size, complexity and capabilities of your organization. That is the provision that makes it workable for a three-clinician practice.',
  cards: [
    {
      label: 'Platform level',
      icon: icon(secPlatformIcon, 15, 19),
      title: 'What the platform supplies',
      text: 'Encryption at rest (AES-256) and in transit (TLS 1.3), automated backups with multi-region replication, physical data center security, penetration testing, business associate agreements (BAAs) covering all platform components, and role-based access control with granular permission sets. None of this requires configuration or ongoing administration by your staff.',
    },
    {
      label: 'Clinic practice',
      icon: icon(secClinicIcon, 19, 17),
      title: 'What stays with your practice',
      text: 'HIPAA compliance is not something a vendor can sell you complete in a box. Your practice is still responsible for workstation physical security, password and MFA hygiene among your staff, prompt de-provisioning when an employee leaves, staff training, and documenting your security policies. Elixir provides policy templates and an administrative checklist designed for practices without IT staff.',
    },
    {
      label: 'Proposed standards',
      labelTone: 'yellow',
      icon: icon(secProposedIcon, 17, 18),
      title: 'What is proposed but not law',
      text: "In January 2025, HHS proposed updates to the HIPAA Security Rule that would add explicit requirements around MFA, asset inventory, vulnerability scanning and written incident response plans. These are proposed rules, not final regulations. A vendor telling you these are active requirements is ahead of the law; a vendor ignoring them is not planning ahead. Elixir's platform architecture already satisfies the proposed technical requirements.",
    },
  ],
  source: 'Sources 7–8.',
};

export const spGrowth = {
  eyebrow: 'Growth',
  title: 'What Happens When Your Practice Grows',
  description:
    'The most expensive thing a small practice can buy is an EHR it will outgrow in three years, because the second migration costs more than the first and lands when the practice is busier.',
  items: [
    {
      title: 'Add a provider',
      text: 'Provisioned in hours, assigned an existing template set, credentialed to payers and seeing patients the same week.',
    },
    {
      title: 'Add a location',
      text: 'New facility, new NPI if applicable, same database, same patient records, location-filtered reporting.',
    },
    {
      title: 'Add a service line',
      text: 'New note templates, fee schedules and billing rules configured alongside existing workflows — not in a separate module.',
    },
    {
      title: 'Add behavioral health',
      text: 'Sensitive notes restricted by role, DSM-5 coding, behavioral billing rules — without splitting the chart.',
    },
    {
      title: 'Add a patient portal or contact center',
      text: 'Native to the Salesforce platform; turn them on when you need them without third-party integration projects.',
    },
    {
      title: 'Keep your data',
      text: 'Every clinical note, claim, payment and communication history stays intact. Growth is configuration, not migration.',
    },
  ],
};

// The frame numbers its questions ("1. How is Elixir priced…"); the shared FAQ accordion has its own
// two-column layout, so the numbers are left off.
export const spFaq = {
  title: 'Small Practice EHR: Frequently Asked Questions',
  description:
    'The questions small practice owners and practice managers ask us first — answered directly, including the ones about money.',
  items: [
    {
      question: 'How is Elixir priced for a small practice?',
      answer:
        'Elixir is priced per credentialed provider per month, with implementation as a separate, fixed-scope fee agreed before work begins. We do not charge per non-clinical user (front desk and billing staff are included), and there are no surprise fees for standard updates or platform maintenance. We give you a specific, written quote for your provider count and module selection before you make any commitment.',
    },
    {
      question: 'How long does it take to go live?',
      answer:
        'For a small practice adopting a standard configuration, typical go-live is 6 to 10 weeks from project kick-off. The primary variables are how quickly your current vendor provides data exports and the number of custom forms your practice requires. We agree on a target date during scoping and track against it weekly.',
    },
    {
      question: 'Who actually does the setup — us or you?',
      answer:
        'We do. A named implementation lead configures your system, builds your initial templates, migrates your historical data and conducts role-based training with your staff. You provide your current forms, fee schedules and decisions about how you want workflows to behave. You make decisions; we do the configuration.',
    },
    {
      question: 'Can we change forms and templates ourselves afterwards?',
      answer:
        'Yes. Clinical note templates, intake forms, fee schedules and picklists can all be edited by designated users in your practice without contacting support or paying for professional services. We train your practice administrator on how to make these changes before go-live.',
    },
    {
      question: 'What happens to the data in our current EHR?',
      answer:
        'Demographics, problem lists, medication history, allergies and active appointments migrate into Elixir as discrete data fields. Historical notes and documents are typically brought across as attached records or PDF archives, depending on what your current system can export. We evaluate your export options during scoping so you know what will migrate before you sign.',
    },
    {
      question: 'Do we need IT staff to run it?',
      answer:
        'No. Elixir is 100% cloud-based and runs in a standard modern web browser. There are no on-premises servers, no local backups to manage and no software updates to install manually. All platform maintenance, security patching and data backups are handled automatically.',
    },
    {
      question: 'Is Elixir too big for a practice our size?',
      answer:
        'Elixir is built on Salesforce, which is enterprise-grade infrastructure. But what your staff sees is configured specifically for your practice size and specialty. You get the stability, security and longevity of a major platform without the interface complexity of an enterprise hospital system. And when you grow, you do not have to migrate.',
    },
    {
      question: 'Are we required to report MIPS?',
      answer:
        "Many small practices are exempt under the low-volume threshold (Medicare Part B charges ≤ $90,000, patients ≤ 200, or services ≤ 200). If you exceed all three, you are in MIPS — but small practices receive significant relief, including automatic reweighting of Promoting Interoperability to 0% and 6 bonus points on Quality. Check your NPI on CMS's participation lookup tool first.",
    },
  ],
};

export const spCtaBand = {
  eyebrow: 'Built for your size',
  title: 'Get a written number and a go-live date',
  description:
    'Bring your provider count, your payer mix and your current system. We will come back with a configuration, a price for it, and a realistic date — which is more than most evaluations produce in a month.',
  cta: { label: 'Request a Demo', to: '/request-demo' },
  // The frame's second button is the sibling More Specialties page.
  secondaryCta: { label: 'Outpatient clinics', to: '/more-specialties/outpatient-clinics' },
};
