// Care Coordination page (/care-coordination) — an independent page with no parent.
// Copy is verbatim from the Figma. Links only point at routes that exist.
import heroMedia from '../assets/care-coordination/hero-media.png';
import teamIcon from '../assets/care-coordination/icon-pillar-team.png';
import consentIcon from '../assets/care-coordination/icon-pillar-consent.png';
import part2Icon from '../assets/care-coordination/icon-pillar-part2.png';
import referralsIcon from '../assets/care-coordination/icon-pillar-referrals.png';
import infoIcon from '../assets/care-coordination/icon-info.png';
import warningIcon from '../assets/care-coordination/icon-warning.png';
import arrowRightIcon from '../assets/care-coordination/icon-arrow-right.png';
import xCircleIcon from '../assets/care-coordination/icon-x-circle.png';
import checkCircleLimeIcon from '../assets/care-coordination/icon-check-circle-lime.png';
import checkLimeIcon from '../assets/care-coordination/icon-check-lime.png';
import team1Icon from '../assets/care-coordination/icon-team-1.png';
import team2Icon from '../assets/care-coordination/icon-team-2.png';
import team3Icon from '../assets/care-coordination/icon-team-3.png';
import team4Icon from '../assets/care-coordination/icon-team-4.png';
import team5Icon from '../assets/care-coordination/icon-team-5.png';
import team6Icon from '../assets/care-coordination/icon-team-6.png';

export const ccHero = {
  currentPage: 'Care Coordination',
  titleLines: ['Care Coordination', 'Across Teams,', 'Programs and', 'Partners'],
  titleAccent: [],
  description:
    'Coordination rarely fails because somebody forgot. It fails at a boundary \u2014 a point where what may be shared changes, and the system either overshares or stops dead.',
  primaryCta: { label: 'Request a Demo', to: '/request-demo', arrow: false },
  // The frame gives no destination; it scrolls to "The Loop That Does Not Close".
  secondaryCta: { label: 'The loop that does not close', href: '#loop' },
  media: {
    src: heroMedia,
    alt: 'Clinicians and partners connected around one shared patient record',
  },
};

export const ccPillars = [
  {
    icon: { src: teamIcon, size: [22, 23] },
    label: 'Team orchestration',
    title: 'One care plan, many hands',
    text: 'A shared plan with owners on each intervention, rather than four people keeping four versions of the same intentions.',
  },
  {
    icon: { src: consentIcon, size: [18, 23] },
    label: 'Release control',
    title: 'Consent with a scope',
    text: 'Releases hold who, to whom, what, why, until when \u2014 and that governs what actually leaves the system.',
  },
  {
    icon: { src: part2Icon, size: [20, 21] },
    label: 'Regulatory rule',
    title: 'Part 2 handled properly',
    text: 'The February 2026 rule applied as written: what it permits, what it still prohibits, and provenance kept either way.',
  },
  {
    icon: { src: referralsIcon, size: [20, 23] },
    label: 'Accountability',
    title: 'Referrals that close',
    text: 'An outbound referral is an open obligation with an owner, not a fax with a hopeful expression.',
  },
];

// The referral funnel: bar widths are the frame's percentages; the last row is the critical gap.
export const ccLoop = {
  id: 'loop',
  eyebrow: 'The one to get right',
  title: 'The Loop That Does Not Close',
  description:
    'The best study of referral completion looked at more than a hundred thousand scheduling attempts inside a single health system. Everyone involved worked for the same organization and shared the same medical record.',
  chart: {
    title: 'Primary care referrals to specialists, FY 2016',
    subtitle: '103,737 appointment scheduling attempts \u00b7 34 clinics \u00b7 20 high-volume specialties \u00b7 all in-network',
    chip: 'Single record benchmark',
    rows: [
      { label: 'Scheduling attempts', value: '103,737', share: '100%', width: 100, tone: 'dark' },
      { label: 'Reached a documented appointment date', value: '63,383', share: '61.1%', width: 61.1, tone: 'mid' },
      {
        label: 'Reached a documented completed appointment, with a report back to the referrer',
        value: '34.8%',
        chip: 'Critical gap',
        width: 34.8,
        tone: 'critical',
      },
    ],
    note: {
      icon: { src: infoIcon, size: [19, 19] },
      text: 'Read the last bar with the setting in mind. These were in-network referrals on a shared record system, and roughly two in three still did not produce a report back to the referring clinician. CMS still cites this study in the 2026 specification for the measure that scores exactly this. It is 2016 data, and the fact that it remains the best available national evidence is itself part of the problem. Sources 9\u201310.',
    },
  },
  paragraphs: [
    'The picture has not moved much. In a national survey of primary care physicians published in 2022, 65% reported knowing the specialist had seen their patient, but only 34% reported consistently receiving a consultation note back afterwards. The specialist\u2019s experience was worse: only 22% reported that their EHR received notes and patient history from outside providers regularly.',
    'The Timmins 2022 survey was national, across 2,056 primary care physicians, conducted in 2019 and published with Commonwealth Fund support. It asked specifically about coordination with providers outside their own system. If in-network performance is 34.8% on a shared EHR, out-of-network performance across disconnected systems is what that second figure implies.',
    'The gap between sending and receiving is the finding. Systems send referrals. They track that they sent them. What they do not track \u2014 what most cannot see \u2014 is whether the patient was seen, whether a note was written, and whether that note ever reached the clinician who needed to know what happened next.',
  ],
  disclaimer: {
    icon: { src: warningIcon, size: [23, 20] },
    title: 'What we will not claim',
    text: 'A vendor deck will often tell you that \u201c80% of serious medical errors involve miscommunication during handoffs.\u201d The Joint Commission wrote something like that once; it has been repeated until it sounds like a statute. When researchers try to trace the number, they find a chain of citations ending in an assertion, not a trial.',
    statement:
      'We do not use that number. We also do not claim that \u201chalf of all referrals never happen.\u201d What the peer-reviewed evidence shows is narrower, and worse: in the single best large-system dataset we have, on a unified EHR, only about a third of referrals produced a documented, completed loop. That is the number worth fixing.',
  },
};

// `titleWidth` keeps the frame's earlier title break on the handoff card.
export const ccTeam = {
  eyebrow: 'Inside four walls',
  title: 'One Record, Many Hands: Coordination Across a Team',
  description:
    'The easiest boundary, and still the one most systems get wrong \u2014 usually by giving everyone everything, and calling the result collaboration.',
  items: [
    {
      icon: { src: team1Icon, size: [20, 19] },
      title: 'A care team with defined roles',
      text: 'Prescriber, therapist, case manager, peer support, nurse, care coordinator. Each role has a scope; each scope has permissions. The peer specialist sees what is relevant to recovery support; the nurse sees the med administration log; the billing team sees the completed documentation. Not by manual curation, but by role definition in the system.',
    },
    {
      icon: { src: team2Icon, size: [19, 14] },
      title: 'One care plan, owned in pieces',
      text: 'Problems, goals, objectives and interventions in a single plan. But each intervention has a named owner, a frequency, and a review date. When a therapist updates the progress on an objective, the case manager sees it without asking for an update. The plan is the working document, not the thing printed out for the chart audit.',
    },
    {
      icon: { src: team3Icon, size: [20, 19] },
      title: 'Tasks that carry the thread',
      text: 'Work assigned between team members stays attached to the patient, to the visit, or to the order. \u201cCall pharmacy regarding prior authorization\u201d is not an email or a sticky note; it is a task with an assignee, a due date, and an audit trail that shows when it was completed and what happened.',
    },
    {
      icon: { src: team4Icon, size: [18, 11] },
      title: 'Caseload views that surface the quiet ones',
      text: 'A coordinator\u2019s view is a worklist, not a directory. It shows patients whose last contact is older than the protocol calls for; patients with open referrals that have had no update in fourteen days; patients stepping down from residential whose first outpatient visit has not been scheduled. The patients who need attention are the ones who are not calling.',
    },
    {
      icon: { src: team5Icon, size: [19, 15] },
      title: 'Structured handoff between staff',
      titleWidth: 250,
      text: 'When a case transfers \u2014 because a clinician leaves, or a caseload rebalances, or coverage is needed for leave \u2014 the handoff uses a structured summary. Active problems, current risk factors, pending orders, open referrals, and the next two scheduled touchpoints. Not an unstructured email and a promise to catch up next week. The evidence for standardized handoffs in medicine is consistent: 23% reduction in errors, 30% reduction in preventable adverse events. Source 13.',
    },
    {
      icon: { src: team6Icon, size: [18, 15] },
      title: 'Documented once',
      text: 'The note a clinician writes is the note the team reads. It is also the note the claim derives from, the note that populates the treatment plan review, and the note that feeds the quality measure. Re-entry of the same clinical encounter into three different tools is where coordination falls apart first, because the copies diverge immediately.',
    },
  ],
};

// Row chips: lime, red, yellow or grey; a red row also turns its title red.
export const ccPrograms = {
  eyebrow: 'Across programs',
  title: 'When the Level of Care Changes, the Record Should Not Restart',
  description:
    'Inside one organization, a patient moves between programs: residential to intensive outpatient, mental health to addiction treatment, an adult service to a youth one. The clinical continuity is the point. The consent continuity is the risk.',
  items: [
    {
      chip: 'Continuity',
      tone: 'lime',
      title: 'The history travels; the assessment does not restart',
      text: 'When a patient steps down from residential to intensive outpatient, the IOP clinician should not be asking the intake questions the residential intake clinician asked six weeks ago. Diagnoses, allergies, medications, social history, trauma history, and baseline assessments persist. The IOP intake builds on the residential discharge, not on a blank form.',
    },
    {
      chip: 'Episodes',
      tone: 'lime',
      title: 'Each program keeps its own episode',
      text: 'The billing rules, the authorization, the utilization review schedule, and the program-specific documentation requirements are distinct. Residential has its own episode with its own bed-tracking and daily census; IOP has its own schedule of attendance and group units. The shared record does not mean the programs are mushed together; it means they sit on one foundation.',
    },
    {
      chip: 'Part 2',
      tone: 'red',
      title: 'A specialty program can change the rules mid-record',
      text: 'This is the one that trips organizations up. A patient is receiving outpatient mental health services \u2014 standard HIPAA rules. They enroll in the organization\u2019s substance use disorder program. That program is a Part 2 program. What happens to the record? In Elixir, Part 2 protections apply at the program level: the SUD episode carries the provenance, the consent requirement, and the redisclosure restriction. The outpatient mental health clinician does not automatically lose access, but the record knows what originated in a Part 2 program and treats it accordingly.',
    },
    {
      chip: 'Handoff',
      tone: 'yellow',
      title: 'A transition is an event with an owner',
      text: 'A discharge from residential to outpatient is not complete when the discharge summary is signed. It is complete when the receiving program has accepted the patient, the first appointment is scheduled, and the patient has arrived. The transition sits on the care coordinator\u2019s worklist until the loop closes.',
    },
  ],
  explore: {
    label: 'Explore dedicated clinical capabilities:',
    icon: { src: arrowRightIcon, size: [11, 11] },
    links: [
      { label: 'Substance Use Disorder EHR', to: '/behavioral-health/substance-use-disorder' },
      { label: 'Mental Health EHR', to: '/behavioral-health/mental-health' },
    ],
  },
};

export const ccPart2 = {
  eyebrow: 'The rule most guidance has not caught up with',
  title: '42 CFR Part 2 Changed, and the Compliance Date Has Passed',
  description:
    'The final rule aligning Part 2 more closely with HIPAA was published in February 2024. Its compliance date was 16 February 2026. A great deal of published material still describes the regime it replaced.',
  myths: {
    icon: { src: xCircleIcon, size: [17, 17] },
    title: 'What a lot of guidance still says',
    items: [
      'Part 2 requires a separate, specific consent for every disclosure \u2014 even for treatment within an integrated delivery network.',
      'Once Part 2 data enters your EHR, the entire record is contaminated and must be segregated from other clinical systems.',
      'A single consent covering treatment, payment and health care operations is never permitted for Part 2 records.',
      'The redisclosure notice must accompany every transmission, and any recipient is permanently bound by Part 2 rules on that data.',
      'Breach of Part 2 records is handled separately under Title 42 criminal penalties, not under HIPAA breach notification rules.',
    ],
  },
  facts: {
    icon: { src: checkCircleLimeIcon, size: [17, 17] },
    itemIcon: { src: checkLimeIcon, size: [12, 10] },
    title: 'What the regulation now provides',
    items: [
      'A single consent for all future treatment, payment, and health care operations (TPO) is explicitly permitted. \u00a7 2.31(a)(4)(iii)(A).',
      'Once disclosed to a covered entity or business associate under a general TPO consent, the data may be redisclosed in accordance with HIPAA \u2014 without further Part 2 consent. \u00a7 2.32(a)(1).',
      'HHS explicitly declined to require data segmentation in electronic systems. Covered entities are not required to segregate Part 2 data. 89 FR at 12433.',
      'The redisclosure notice was rewritten to reflect this alignment, replacing the 1987 prohibition language. \u00a7 2.32.',
      'HIPAA Breach Notification Rule applies directly to Part 2 records. Penalties are aligned with HIPAA Civil Monetary Penalties under HITECH. \u00a7 2.3, \u00a7 2.4.',
    ],
  },
  distinction: {
    title: 'The distinction that matters most',
    paragraphs: [
      'HHS did not remove the segregation mandate because it stopped caring about Part 2. It removed it because it concluded that mandatory segmentation in modern EHRs was technically fraught, rarely implemented properly, and frequently resulted in providers simply refusing to accept Part 2 records at all.',
      'Instead, the rule relies on the provenance requirement in \u00a7 2.12(d)(1): Part 2 records received by a covered entity do not become non-Part-2 records just because they entered a general EHR. What changes is how they may be shared: under a valid TPO consent, HIPAA rules govern. Without that consent, or for proceedings against the patient, the full force of Part 2 still applies.',
    ],
  },
  permission: {
    title: 'Permission is not obligation',
    text: 'A single TPO consent permits broad sharing under HIPAA. It does not require it. A patient may still choose to consent only to disclosures for treatment, and not for payment or operations. A program may still choose to hold Part 2 data more tightly than the floor requires. The software needs to enforce what the consent actually says \u2014 not what the regulation permits at its maximum.',
  },
  checklist: {
    eyebrow: 'Worth checking this quarter',
    title: 'Three things the compliance date brought with it',
    items: [
      {
        title: '1. Notices of Privacy Practices',
        text: 'Covered entities that receive or maintain Part 2 records must have updated their NPP to reflect Part 2 requirements by 16 February 2026. Most did not. If yours has not been revised since 2023, it is out of date.',
      },
      {
        title: '2. Breach notification procedures',
        text: 'Part 2 breaches are now reported through the HIPAA breach notification process \u2014 to affected individuals, to HHS, and (for breaches of 500+ individuals) to media. The old Part 2 regime had no standalone administrative breach reporting framework.',
      },
      {
        title: '3. Complaints go to OCR',
        text: 'Enforcement of Part 2 has been unified under HHS Office for Civil Rights, using the same complaint and investigation apparatus as HIPAA privacy. Previously, Part 2 violations were criminal matters referred to the U.S. Attorney \u2014 which meant they were almost never pursued. OCR investigates complaints as a matter of routine.',
      },
    ],
    note: 'As of September 2026, OCR has not yet announced its first major enforcement action under the aligned Part 2 rule. That is not a reason to wait. It is the window in which to fix the paperwork before the first enforcement action defines what OCR considers adequate.',
  },
};

// `titleWidth` keeps the frame's earlier title break on the expiry card.
export const ccConsent = {
  eyebrow: 'Consent',
  title: 'Consent as Infrastructure, Not Paperwork',
  description:
    'Every boundary on this page is crossed on the authority of a consent. Systems that model consent as a checkbox cannot tell you what they are allowed to send, so they fall back on sending nothing or sending everything.',
  items: [
    {
      title: 'A release has six facts',
      text: 'Who is consenting. To whom the disclosure may be made. What specific information may be shared. For what purpose. Until what date or event. And whether it has been revoked. If a system records "consent: yes," it cannot answer whether a specific disclosure is legal.',
    },
    {
      title: 'Scope is enforced, not advisory',
      text: 'When an outbound record is compiled \u2014 for a referral, for a transition of care summary, for a release-of-information request \u2014 the consent engine filters the export against the release\'s scope. If the release says "medication list and discharge summary only," the progress notes do not leave the system.',
    },
    {
      title: 'Expiry and revocation are events',
      titleWidth: 240,
      text: 'A consent that expires on 31 March stops authorizing disclosures at 23:59:59 on 31 March. It does not wait for someone to notice. A revocation takes effect immediately upon recording, and any automated exchange linked to that release is paused.',
    },
    {
      title: 'Per-partner, not per-patient',
      text: 'A patient may agree to share everything with their primary care provider, medication records only with their housing case manager, and nothing with a family member who has called asking for updates. A flat "patient consent" flag cannot express that.',
    },
    {
      title: 'Minimum necessary, applied',
      text: 'HIPAA\'s minimum necessary standard is not an aspiration; it is an affirmative requirement. For treatment disclosures, the standard is relaxed, but for payment, operations, and third-party coordination, it applies in full. The system builds the minimum necessary payload by default.',
    },
    {
      title: 'An audit trail worth having',
      text: 'Every disclosure is logged with the release that authorized it, the recipient, the timestamp, and the specific payload that was sent. Under the revised Part 2 rule (\u00a7 2.24), patients have a right to an accounting of disclosures. A system that cannot produce that log is out of compliance.',
    },
  ],
};

export const ccPartners = {
  eyebrow: 'Across partners',
  title: 'Sending, Receiving, and Knowing It Arrived',
  description:
    'A referral is not a document. It is an obligation that stays open until somebody closes it, and the closing is the part that is almost never instrumented.',
  items: [
    {
      chip: 'Outbound',
      tone: 'lime',
      title: 'An open obligation with an owner and a clock',
      text: 'When a clinician refers a patient to a community mental health center, an addiction medicine specialist, or a supportive housing program, the referral enters an active state. It has an assigned coordinator, a target date for contact, and a target date for completion. If nothing happens in seven days, it escalates. If nothing happens in fourteen, it flags the referring clinician.',
    },
    {
      chip: 'Inbound',
      tone: 'lime',
      title: 'Referrals arrive from anywhere and land in one place',
      text: 'Via Direct secure messaging, e-fax, web portal, or FHIR-based API. Regardless of how it arrived, it enters the same intake queue. Patient identity is matched (or a new chart created), insurance is queued for verification, and the referral document is parsed into structured data \u2014 not filed as an unsearchable PDF attachment.',
    },
    {
      chip: 'The gap',
      tone: 'red',
      title: 'The list nobody has',
      text: 'Ask almost any behavioral health organization: "How many referrals did you send last month?" They have that number. Ask: "How many of those patients were seen, and on how many did you receive a note back?" They almost never have that number. That second question is where the patients fall out, and it is the report Elixir generates by default.',
    },
    {
      chip: 'Partners',
      tone: 'grey',
      title: 'Give partners a way in that is not email',
      text: "Community partners without an EHR connection can use a lightweight, authenticated partner portal. A housing case manager or parole officer can confirm attendance, upload a document, or send a secure message directly into the patient's record without phone tag, without insecure email, and without seeing anything outside their release.",
    },
    {
      chip: 'Measure',
      tone: 'grey',
      title: 'Score it the way CMS scores it',
      text: "MIPS Measure 374 (Closing the Referral Loop) requires that the specialist's report is received and documented by the referring clinician. In CMS's published benchmark data, median performance on this measure across all reporting clinicians is around 43%, and the bottom deciles fall below 16%. Elixir calculates this measure automatically, so you know where you stand before the performance period ends.",
    },
  ],
};

export const ccBlocking = {
  eyebrow: 'Obligations',
  title: 'Information Blocking: You May Be an Actor Without Calling Yourself One',
  callout:
    'Under 45 CFR Part 171, an "actor" is not just an EHR developer. It includes health care providers, health information networks (HINs), and health information exchanges (HIEs).',
  paragraphs: [
    'The definition of a Health Information Network under the rule is functional: if an organization enables the exchange of electronic health information between two or more unaffiliated entities for treatment, payment, or health care operations, it may be classified as an HIN.',
    'An organization that facilitates data exchange among unaffiliated clinics, housing partners, and behavioral health providers can find itself classified as an HIN under this definition.',
    'The stakes are very different. Health care providers face disincentives \u2014 CMS payment adjustments under MIPS or Medicare promoting interoperability. Developers and HIN/HIE actors face civil monetary penalties of up to $1 million per violation, investigated and assessed by the HHS Office of Inspector General (OIG).',
    'The final enforcement rule took effect in September 2023 for developers and HINs, and the provider disincentives final rule took effect in July 2024. OIG and ONC have issued joint enforcement alerts confirming that active investigations are underway.',
    'Behavioral health organizations often assume information blocking does not apply to them because Part 2 records have special privacy protections. This is partially true and dangerously incomplete: Part 2 does not exempt an organization from information blocking; it provides an exception (the Privacy Exception, 45 CFR \u00a7 171.202) when federal or state law prohibits disclosure without consent and that consent has not been obtained.',
    "If a valid consent exists, or if the request is for data not subject to Part 2, refusing to share electronic health information can be information blocking. There are ten defined exceptions under Part 171; each has specific conditions that must be met. Elixir's exchange architecture is built around these exceptions so that when data is shared, it is legal, and when it is withheld, the reason maps to an established exception.",
  ],
};

export const ccStandards = {
  eyebrow: 'Plumbing',
  title: 'Standards and Networks: What Actually Moves the Data',
  description:
    'Two national tracks are running at once, and a certification requirement that is four versions behind the published standard. Worth knowing which is which before anyone quotes a version number at you.',
  table: {
    caption: 'Interoperability blueprint (September 2026)',
    sources: 'Sources 17\u201322',
    columns: ['What', 'Where it stands', 'Why it matters for coordination'],
    rows: [
      [
        'TEFCA',
        'Operational under Common Agreement v2. Qualified Health Information Networks (QHINs) routing production traffic. Seven designated QHINs as of early 2026, with FHIR-based exchange accelerating.',
        'The long-term infrastructure for query-based exchange across organizational boundaries. If your care coordination touches hospitals, health systems, or public health agencies, TEFCA is where that exchange is converging.',
      ],
      [
        'CMS Interoperability Framework',
        'CMS-0057-F final rule published January 2024. Most operational requirements have a compliance date of 1 January 2027. Covers Patient Access API, Provider Access API, Payer-to-Payer API, and Prior Authorization API.',
        'These rules apply primarily to payers (Medicare Advantage, Medicaid, CHIP, QHP). But behavioral health providers will interact directly with the prior authorization and provider access APIs that payers must stand up by 2027.',
      ],
      [
        'USCDI',
        'USCDI v3 is the current certified EHR baseline (required by HTI-1 by end of 2025). USCDI v4 added substance use data elements. USCDI v5 was published in July 2024. USCDI v6 was published in July 2025.',
        'The data classes define what MUST be exchangeable. When an outside provider sends a C-CDA or FHIR payload, what you receive depends on which USCDI version their system supports. Elixir supports USCDI v3 through v5 elements.',
      ],
      [
        'FHIR APIs',
        'SMART on FHIR and US Core implementation guides. HTI-1 established US Core 6.1.0 as the baseline for certified technology, moving from US Core 3.1.1.',
        'Real-time, resource-level data exchange \u2014 not batch document sending. A partner system can query for active medications or care plan goals without receiving a full encounter summary.',
      ],
      [
        'Certification criteria',
        'HTI-1 compliance dates phased through 2025. HTI-2 proposed rule published July 2024. HTI-5 proposed rule under review.',
        'Certification determines what software must do out of the box. Behavioral health EHRs that are not certified under ONC criteria often lack the APIs and exchange capabilities that general medicine EHRs take for granted.',
      ],
    ],
  },
  note: 'A quick note on names: in July 2024, HHS reorganized ONC into the Assistant Secretary for Technology Policy (ASTP/ONC). In April 2026, the administration reverted the name to the Office of the National Coordinator (ONC). Both names appear across current regulations and documentation; they refer to the same agency.',
};

// Shared FaqSection: the first half of `items` fills the left column, so the order keeps each
// question in its frame column.
export const ccFaq = {
  eyebrow: 'Questions',
  title: 'Care Coordination: Frequently Asked Questions',
  description: 'What clinical leaders, compliance officers and IT teams ask us first.',
  items: [
    {
      question: 'What does Elixir mean by care coordination?',
      answer:
        'We mean the operational machinery that moves information and responsibility across three specific boundaries: between members of a care team within one organization; between levels of care and programs within that organization; and between that organization and external partners \u2014 other clinics, hospitals, housing agencies, and social services. It includes shared care planning, consent management, task routing, referral tracking, closed-loop reporting, and standards-based health information exchange.',
    },
    {
      question: 'So Part 2 records are the same as any other record now?',
      answer:
        'No. That is the opposite error. While TPO disclosures are substantially aligned with HIPAA, Part 2 retains critical protections: records cannot be used in civil, criminal, administrative, or legislative proceedings against the patient without a specific court order meeting stringent standards; redisclosure by non-covered entities is still restricted; patients may request restrictions on disclosures; and separate consents are still required for certain non-TPO purposes. The data still carries its Part 2 identity (\u00a7 2.12(d)(1)), even inside an integrated system.',
    },
    {
      question: 'How do you handle consent across partner organizations?',
      answer:
        'Elixir models consent as a structured entity with six components: granter, recipient, scope (what information), purpose, expiration, and revocation status. Releases can be per-partner, per-episode, or broad (such as a general TPO consent under the revised Part 2 rules). Outbound exchanges \u2014 whether via Direct, FHIR, or partner portal \u2014 automatically evaluate the active consents for that patient and recipient before sending. Expired and revoked consents take effect immediately.',
    },
    {
      question: 'Are we an information blocking actor?',
      answer:
        'If you are a health care provider (which includes nearly all behavioral health organizations), yes \u2014 you are subject to the provider disincentives rule under 45 CFR Part 171. If your organization also facilitates health information exchange among unaffiliated entities (for example, operating a shared network for community partners), you may also meet the functional definition of a Health Information Network (HIN), which carries potential civil monetary penalties of up to $1 million per violation under OIG enforcement.',
    },
    {
      question: 'Did 42 CFR Part 2 really change?',
      answer:
        'Yes. The final rule was published in the Federal Register on 16 February 2024 (89 FR 12433), implementing the CARES Act statutory amendments. The compliance date was 16 February 2026. The key changes: a single consent for all future treatment, payment, and operations (TPO) is now permitted; Part 2 records disclosed under a TPO consent may be redisclosed in accordance with HIPAA; breach notification rules now apply; and HHS explicitly declined to require data segmentation in electronic systems. A substantial amount of published guidance has not been updated to reflect these changes.',
    },
    {
      question: 'Do we still have to segment Part 2 data?',
      answer:
        'Federal regulation does not require data segmentation. HHS explicitly considered and rejected a mandatory segmentation requirement in the final rule, concluding that technical limitations made it impractical and that it led to discrimination against Part 2 patients. However, organizations still need to track data provenance \u2014 knowing which records originated in a Part 2 program \u2014 because restrictions on legal proceedings and non-TPO uses still apply to that data. Elixir tracks provenance at the encounter and document level without requiring artificial data silos.',
    },
    {
      question: 'What does "closing the loop" actually mean here?',
      answer:
        "It means tracking a referral from the moment of order through appointment scheduling, encounter completion, and receipt of the consulting provider's note by the referring clinician. A referral is not closed when the document is transmitted; it is closed when the return information has been received and reviewed. This corresponds to CMS Quality Measure 374 (Closing the Referral Loop), which Elixir calculates and monitors automatically.",
    },
    {
      question: 'Do you connect to TEFCA, and is that enough?',
      answer:
        'Elixir supports exchange through TEFCA-compliant pathways as well as Direct secure messaging, FHIR APIs, and established health information exchanges. But TEFCA is a network of networks \u2014 it moves data when an exchange pathway exists and consent allows. TEFCA alone does not solve closed-loop tracking, internal care team tasking, program transition management, or consent enforcement. It is the transit system, not the care coordination system.',
    },
  ],
};

export const ccCtaBand = {
  eyebrow: 'Bring us a boundary',
  title: 'Show us the handoff that keeps failing',
  description:
    'Between your clinicians, between your programs, or between your agency and the hospital down the road. We will show you how Elixir tracks it, what the consent engine does with it, and what happens when the loop actually closes.',
  cta: { label: 'Request a Demo', to: '/request-demo' },
  secondaryCta: { label: 'Behavioral Health', to: '/behavioral-health' },
};
