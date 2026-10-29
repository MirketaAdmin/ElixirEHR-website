// Social Determinants of Health page (/social-determinants-of-health) — an independent top-level page
// (listed under Care Management in the header, on its own flat route).
// Copy is verbatim from the Figma; links only point at routes that exist.
import heroMedia from '../assets/social-determinants/hero-media.png';
import pillar1Icon from '../assets/social-determinants/icon-pillar-1.png';
import pillar2Icon from '../assets/social-determinants/icon-pillar-2.png';
import pillar3Icon from '../assets/social-determinants/icon-pillar-3.png';
import pillar4Icon from '../assets/social-determinants/icon-pillar-4.png';
import product1Icon from '../assets/social-determinants/icon-product-1.png';
import product2Icon from '../assets/social-determinants/icon-product-2.png';
import product3Icon from '../assets/social-determinants/icon-product-3.png';
import product4Icon from '../assets/social-determinants/icon-product-4.png';
import product5Icon from '../assets/social-determinants/icon-product-5.png';
import product6Icon from '../assets/social-determinants/icon-product-6.png';
import product7Icon from '../assets/social-determinants/icon-product-7.png';
import product8Icon from '../assets/social-determinants/icon-product-8.png';
import product9Icon from '../assets/social-determinants/icon-product-9.png';
import instrumentsIcon from '../assets/social-determinants/icon-instruments.png';

const icon = (src, w, h) => ({ src, size: [w, h] });

export const sdHero = {
  currentPage: 'Social Determinants of Health',
  titleLines: ['Social Determinants', 'of Health Software', 'That Turns a', 'Screening Into Work', 'Somebody Owns'],
  titleAccent: [],
  description:
    'Capturing a social need is the easy part. The hard part is that most screenings end as a completed form — filed, unexpired, and invisible to the person who could have done something about it. Elixir captures the assessment in the record and carries it into the care plan as a barrier with an owner.',
  primaryCta: { label: 'Request a Demo', to: '/request-demo', arrow: false },
  // The frame gives no destination; it scrolls to "The Eight SDOH Domains Elixir Captures".
  secondaryCta: { label: 'The eight domains', href: '#domains' },
  media: {
    src: heroMedia,
    alt: 'Care coordinator reviewing social needs on a tablet with a patient, with housing, food and transport icons',
  },
};

export const sdPillars = [
  {
    icon: icon(pillar1Icon, 18, 18),
    title: 'One click from the patient',
    text: 'The assessment opens from the patient record with the patient, date and user already filled in, and you never leave the page.',
  },
  {
    icon: icon(pillar2Icon, 18, 18),
    title: 'Effective-dated, not permanent',
    text: 'Every record carries a start, an end and a status, because a social need is a state a person is in, not a label they keep.',
  },
  {
    icon: icon(pillar3Icon, 17, 14),
    title: 'Straight into the care plan',
    text: 'A need that obstructs a goal becomes a barrier on the plan, visible to whoever is doing the work.',
  },
  {
    icon: icon(pillar4Icon, 16, 16),
    title: 'Structured, not narrative',
    text: 'Discrete values that feed Z code documentation, reporting and the standard social needs data elements.',
  },
];

export const sdProduct = {
  eyebrow: 'The product',
  title: 'SDOH Screening Software Built Into the Patient Record, Not Bolted Beside It',
  description:
    'Most SDOH tooling fails in one of two ways: it lives in a separate application nobody opens during a visit, or it writes to a free-text note that no report can read. Elixir treats a social determinant as a first-class record on the patient account, created in the flow of work and consumed by the care plan.',
  cards: [
    {
      icon: icon(product1Icon, 18, 18),
      title: 'Launched from the patient account',
      text: 'A Social Determinants tab on the patient record with a New button. One click, no navigation away, no separate application to log into and no second place to look for the answer.',
    },
    {
      icon: icon(product2Icon, 20, 20),
      title: 'Metadata fills itself',
      text: 'Patient, date and user are pre-populated. Nobody retypes who was assessed, when, or by whom — which is the metadata every downstream report and audit actually needs.',
    },
    {
      icon: icon(product3Icon, 18, 20),
      title: 'Effective from, effective to',
      text: 'Each record carries its own validity period and status. A housing problem resolved in March stops being true in April, and the record says so rather than following the patient forever.',
    },
    {
      icon: icon(product4Icon, 16, 20),
      title: 'Clone for the re-screen',
      text: 'Reassessment starts from the last record instead of a blank form, so the care team is confirming and updating rather than re-interviewing from scratch.',
    },
    {
      icon: icon(product5Icon, 22, 12),
      title: 'Visible to the whole care team',
      text: 'New records appear immediately in the Social Determinants list on the patient account — record, effective dates, status and when it was recorded — with no refresh and no wait.',
    },
    {
      icon: icon(product6Icon, 20, 20),
      title: 'It becomes a care plan barrier',
      text: 'Where a need obstructs a goal it carries into the care plan as a barrier at plan or goal level. This is the step most systems skip, and it is the only one that changes anybody’s day.',
    },
    {
      icon: icon(product7Icon, 16, 18),
      title: 'Patients only, by design',
      text: 'Social determinant records can be created against patient accounts and nothing else. A constraint, deliberately — social risk data attached to the wrong kind of record is a privacy problem waiting to happen.',
    },
    {
      icon: icon(product8Icon, 16, 20),
      title: 'Your instruments, your license',
      text: 'Domains, response options and scoring are configured to the instrument you are licensed to use. We do not ship other organizations’ copyrighted screening items as prebuilt content.',
    },
    {
      icon: icon(product9Icon, 19, 16),
      title: 'Native to Salesforce',
      text: 'The assessment, the care plan, the referral and the claim are the same record on one platform, so nothing has to be reconciled between systems at the end of the month.',
    },
  ],
};

export const sdDomains = {
  id: 'domains',
  eyebrow: 'Coverage',
  title: 'The Eight SDOH Domains Elixir Captures, and Why Three of Them Matter Most in Behavioral Health',
  description:
    'Five of these are the core domains federal screening is built around. The other three are classed as supplemental in that framework — and in behavioral health populations they are the ones with the highest prevalence and the steepest gradient with illness severity.',
  caption:
    'Elixir SDOH domains mapped to the federal health-related social needs framework, with prevalence among Medicare Advantage members with co-occurring serious and non-serious mental illness.',
  columns: ['Domain', 'Federal classification', 'Prevalence, SMI+', 'Why it is captured'],
  rows: [
    {
      domain: 'Housing',
      tier: 'Core',
      prevalence: '27.4%',
      why: 'Instability and quality both matter, and they behave differently — one is an emergency, the other is a chronic exposure',
    },
    {
      domain: 'Food',
      tier: 'Core',
      prevalence: '40.4%',
      why: 'The most prevalent core domain in this population, and the one where referral most often results in a real benefit being received',
    },
    {
      domain: 'Transportation',
      tier: 'Core',
      prevalence: '16.7%',
      why: 'Directly implicated in missed appointments and treatment dropout, and distinguishable from non-adherence only if you ask',
    },
    {
      domain: 'Utilities',
      tier: 'Core',
      prevalence: '13.6%',
      why: 'A shutoff notice is a dated, actionable event with a narrow window, which makes it unusually suited to a worklist',
    },
    {
      domain: 'Safety',
      tier: 'Core',
      prevalence: '—',
      why: 'Interpersonal safety. The most sensitive domain to capture and the one where access controls matter most',
    },
    {
      domain: 'Financial strain',
      tier: 'Supplemental',
      prevalence: '56.5%',
      highlight: true,
      why: 'The single most prevalent unmet need in this population — more than one in two — and not a core federal domain',
    },
    {
      domain: 'Social and emotional',
      tier: 'Supplemental',
      prevalence: '19.7%',
      why: 'Severe loneliness runs at roughly six times the rate seen in members with no mental illness. Adjusted odds: 5.13',
    },
    {
      domain: 'Education',
      tier: 'Supplemental',
      prevalence: '—',
      why: 'Literacy and educational attainment shape whether any plan you write is executable by the person it is written for',
    },
  ],
  paragraphs: [
    'The point of that table. If you build your screening around the core five domains only, you miss the single most common need in the population (financial strain, at 56.5 per cent) and the one that has the strongest link to severe psychiatric distress (loneliness, at nearly one in five). A tool designed only for the compliance minimum misses the clinical reality.',
    'Prevalence depends enormously on who you screen. In the general Medicare Advantage population, severe loneliness is about three per cent. In members with co-occurring serious and non-serious mental illness, it is nearly twenty per cent. If your SDOH tool does not let you configure which domains you screen for by program or clinic type, you are either over-screening general patients or under-screening the ones who need it.',
  ],
  callout: {
    icon: icon(instrumentsIcon, 21, 18),
    title: 'On screening instruments',
    items: [
      'Instruments such as PRAPARE®, the AAFP EveryONE Project, the Accountable Health Communities HRSN Screening Tool and others are the intellectual property of the organizations that developed them.',
      'Elixir supports configured screening items matching whichever tool you are authorized to use, but does not provide proprietary instruments without proof of proper licensing where required.',
      'PRAPARE® is a registered trademark of the National Association of Community Health Centers (NACHC). Use of PRAPARE requires compliance with NACHC’s terms and, where applicable, licensing agreements.',
    ],
  },
};

export const sdPolicy = {
  eyebrow: 'The policy picture',
  title: 'The Federal SDOH Reporting Mandates Went Away. The Obligation Did Not.',
  description:
    'Across 2025 and 2026 federal SDOH and health equity reporting was withdrawn almost completely. Most vendor material in this category has not caught up, and is still selling you a mandate that no longer exists. Here is the honest version.',
  // The frame's list markers are missing-glyph boxes (red, lime) and an arrow; they are drawn as small
  // coloured markers here (see DESIGN-SYSTEM.md).
  cards: [
    {
      marker: 'removed',
      label: 'What was removed',
      title: 'Nearly every federal measure',
      items: [
        'The Inpatient Quality Reporting SDOH screening and positive-screen measures were removed by CMS in late 2025',
        'The Hospital Commitment to Health Equity measure was removed at the same time',
        'The Merit-based Incentive Payment System (MIPS) screening measure was removed for the 2026 performance year',
        'The Medicare Physician Fee Schedule standalone payment for administering a risk assessment (G0136) was dropped for 2026',
        'Federal health equity transformation plans across multiple CMS models were halted or made optional',
      ],
    },
    {
      marker: 'survived',
      label: 'What survived',
      title: 'Narrower, and closer to your contracts',
      items: [
        'ICD-10-CM Z codes for social circumstances (Z55–Z65) remain fully active and billable as secondary diagnoses',
        'Community Health Integration (G0019/G0022) and Principal Illness Navigation (G0023/G0024) survived into 2026',
        'State Medicaid Section 1115 demonstrations covering housing and nutrition supports continue under approved waivers',
        'Commercial and Medicaid managed care contracts with value-based incentives for social risk management are untouched',
      ],
    },
    {
      marker: 'arrow',
      label: 'What this means for you',
      title: 'Build for the contract, not the headline',
      items: [
        'Do not buy SDOH software to satisfy a CMS screening mandate. Buy it because your managed care contract requires it',
        'Or buy it because your clinicians cannot keep patients in care when housing or transport breaks down',
        'Or buy it because you bill Community Health Integration and need the barrier documentation to defend the claim',
        'Those use cases are stronger than compliance anyway, because nobody stops caring when the federal rule changes',
      ],
    },
  ],
  note: 'Policy summary reflects the CY 2026 Medicare Physician Fee Schedule Final Rule (CMS-1807-F), the FY 2026 Inpatient Prospective Payment System Final Rule (CMS-1808-F), and CMS executive guidance issued between November 2025 and January 2026 removing equity-focused reporting requirements across federal programs.',
};

export const sdMoney = {
  eyebrow: 'The money',
  title: 'You Can Still Be Paid to Address a Social Need. Not to Screen for One.',
  lead: 'This asymmetry is new, it is widely misreported, and it should shape how you scope a screening program.',
  paragraphs: [
    {
      lead: 'The screening code is gone.',
      text: 'In 2024 CMS introduced HCPCS code G0136 for administering a standardized SDOH risk assessment, paying roughly eighteen to nineteen dollars. For 2026, CMS removed standalone payment for G0136, folding social risk assessment back into the evaluation-and-management visit structure rather than paying for it separately.',
    },
    {
      lead: 'The codes for acting survived.',
      text: 'What CMS did not remove are the codes for actually doing something about what you find. Community Health Integration (HCPCS G0019 for the first 30 minutes, G0022 for each additional 30 minutes) and Principal Illness Navigation (G0023 and G0024) remain active in the 2026 Physician Fee Schedule. These codes pay for certified community health workers, navigators and peer support specialists addressing unmet social needs that interfere with medical care.',
    },
    {
      lead: 'Which gives you a clean design rule.',
      text: 'If your screening stops at the assessment, you have done work nobody pays you for and that changes nothing for the patient. If your screening identifies a barrier that initiates Community Health Integration work by a navigator, you have initiated covered, billable care that has an evidentiary trail back to the assessment. That is the workflow Elixir is built around.',
    },
  ],
  note: 'HCPCS G0019, G0022, G0023, G0024 status verified in CMS CY 2026 PFS Final Rule. Billing requires an initiating E/M visit, an individualized care plan identifying the social barrier, and delivery by qualified personnel under general supervision.',
};

export const sdGap = {
  eyebrow: 'The gap that matters',
  title: 'Closed-Loop Referral Is Not the Same as Help Received',
  description:
    'If you measure one thing in a social needs program, do not let it be the closed-loop rate. A health system with referrals wired directly into a statewide network published both numbers side by side, before and after the state funding for the services ran out.',
  scenarios: [
    {
      tone: 'funded',
      label: 'Scenario A',
      title: 'While services were funded',
      bars: [
        { label: 'Referral loop closed', value: 99 },
        { label: 'Patient actually received a benefit', value: 65 },
      ],
    },
    {
      tone: 'withdrawn',
      label: 'Scenario B',
      title: 'After the funding was withdrawn',
      bars: [
        { label: 'Referral loop closed', value: 93 },
        { label: 'Patient actually received a benefit', value: 38 },
      ],
    },
  ],
  paragraphs: [
    'Read the second pair. When services were no longer funded, the loop closure rate barely moved: 93 per cent of referrals still closed cleanly. But the share of patients who actually got help fell from nearly two-thirds to barely more than a third. The software showed green checkboxes across the board while the patients got nothing.',
    'The same pattern shows up federally. In the largest evaluation of social needs navigation CMS ever funded — the Accountable Health Communities model, covering more than 600,000 navigation cases across five years — only 30.6 per cent of deep-need cases ever had a resolved need documented, despite extensive electronic referral infrastructure.',
    'So Elixir reports receipt, not routing. A closed loop means a community partner answered the phone or updated a status. A resolved barrier means the patient has food in the refrigerator or heat back on in the apartment. Your care plan tracks the second one.',
  ],
  panel: {
    title: 'Three more things we will not claim',
    items: [
      {
        title: 'That screening improves health outcomes',
        text: 'Every systematic review of social risk screening reaches the same finding: screening without dedicated funding and navigation capacity produces no measurable improvement in health, utilization or cost. We build the tool to run the navigation, not to pretend the screening was the intervention.',
      },
      {
        title: 'That “social factors drive 80 per cent of health outcomes.”',
        text: 'This figure is repeated in almost every vendor deck in our market. It has no empirical basis. The best population health literature attributes roughly 40 per cent of modifiable health determinants to social and economic factors, 30 per cent to behaviors, 20 per cent to clinical care and 10 per cent to physical environment. Forty is plenty to justify the work.',
      },
      {
        title: 'That our screening instrument is validated',
        text: 'Software is not an instrument. PRAPARE® is validated. The AHC HRSN tool is validated. Elixir is the record system that runs whatever instrument you have chosen and licensed, configured to its questions and its scoring logic.',
      },
    ],
  },
};

export const sdZCodes = {
  eyebrow: 'Documentation',
  title: 'SDOH Z Codes: In the Code Set, and Almost Never Used',
  description:
    'The diagnosis codes for social circumstances have existed for years, survived every policy change above, and remain close to unused. That is an operational gap rather than a policy one, which means it is addressable.',
  rows: [
    {
      title: 'The share of Medicare fee-for-service beneficiaries with any social circumstance code',
      text: 'Across all Medicare FFS claims, Z55 through Z65 appeared on claims for 1.59 per cent of beneficiaries in 2019, rising to just under 3 per cent by 2022. More than 97 per cent of beneficiaries have no SDOH code recorded anywhere in their claims history.',
      badge: '1.59%',
      tone: 'red',
    },
    {
      title: 'Outside housing, almost no category is used at all',
      text: 'Z59 (homelessness and housing instability) accounts for more than sixty per cent of every Z code billed in Medicare. Food insecurity (Z59.4), transport problems (Z75.3) and extreme poverty (Z59.5) are barely present on claims despite double-digit prevalence in the clinical literature.',
      badge: 'Housing only',
      tone: 'yellow',
    },
    {
      title: 'Coding can rely on documentation from staff who are not the treating provider',
      text: 'Official ICD-10-CM coding guidance explicitly permits Z codes to be assigned from documentation by non-physician staff — case managers, social workers, community health workers and nurses — without requiring the physician to re-document the finding.',
      badge: 'The opening',
      tone: 'lime',
    },
    {
      title: 'Structured capture makes the code derivable rather than remembered',
      text: 'A clinician who has to remember that food insecurity is Z59.41 and then add it to an encounter diagnostic list will do so rarely. A system that records food insecurity as a structured assessment item and flags the corresponding candidate code on the next encounter gives coders what they need without adding clicks to the visit.',
      badge: 'What Elixir does',
      tone: 'lime',
    },
  ],
  note: 'Coding guidance: AHA Coding Clinic for ICD-10-CM and ICD-10-PCS, multiple quarters from 2018 forward; CMS MLN Matters MM11422; ICD-10-CM Official Guidelines for Coding and Reporting FY 2025. Coding must reflect clinical judgment and the documentation of the specific encounter.',
};

// Shared FAQ (RCM accordion). The frame supplies an answer for the first question only, so the others
// render as static rows. The shared section fills its left column first, so the frame's left column
// (questions 1, 3, 5) comes first here, then its right column (2, 4, 6).
export const sdFaq = {
  eyebrow: 'Questions',
  title: 'Social Determinants of Health Software: Frequently Asked Questions',
  description: 'What clinical, compliance and operations leaders ask us first.',
  items: [
    {
      question: 'What is SDOH software, and what does it actually have to do?',
      answer:
        'SDOH software captures health-related social needs (housing, food, transport, financial strain, utilities, safety, social isolation and education), records them as structured data on the patient record, links them to care plan barriers, and facilitates referrals to community-based organizations. The operational distinction that matters is between software that only files a completed questionnaire and software that carries an identified need into the care plan with an owner, effective dates, and a path to resolution.',
    },
    { question: 'Can we bill for SDOH screening?' },
    { question: 'How do you handle screening instruments like PRAPARE®?' },
    { question: 'Didn’t CMS drop the SDOH screening measures?' },
    { question: 'Does screening for social needs improve outcomes?' },
    { question: 'Where does the data go once it is captured?' },
  ],
};

export const sdCtaBand = {
  eyebrow: 'Start with one question',
  title: 'What happened to the last hundred positive screens?',
  description:
    'Not how many you captured — what happened next. If that answer lives in a spreadsheet, or nowhere, that is the finding. Bring us one program and one month and we will show you where the screening stopped being work.',
  cta: { label: 'Request a Demo', to: '/request-demo' },
  secondaryCta: { label: 'Care Management', to: '/care-management' },
};
