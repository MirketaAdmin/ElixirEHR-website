// Aesthetic Practices page (/more-specialties/aesthetic-practices) — a child page of More Specialties.
// Copy is verbatim from the Figma. Links only point at routes that exist.
import heroMedia from '../assets/aesthetic-practices/hero-media.png';
import pillar1Icon from '../assets/aesthetic-practices/icon-pillar-1.png';
import pillar2Icon from '../assets/aesthetic-practices/icon-pillar-2.png';
import pillar3Icon from '../assets/aesthetic-practices/icon-pillar-3.png';
import pillar4Icon from '../assets/aesthetic-practices/icon-pillar-4.png';
import sched1Icon from '../assets/aesthetic-practices/icon-sched-1.png';
import sched2Icon from '../assets/aesthetic-practices/icon-sched-2.png';
import sched3Icon from '../assets/aesthetic-practices/icon-sched-3.png';
import sched4Icon from '../assets/aesthetic-practices/icon-sched-4.png';
import sched5Icon from '../assets/aesthetic-practices/icon-sched-5.png';
import sched6Icon from '../assets/aesthetic-practices/icon-sched-6.png';
import ehr1Icon from '../assets/aesthetic-practices/icon-ehr-1.png';
import ehr2Icon from '../assets/aesthetic-practices/icon-ehr-2.png';
import ehr3Icon from '../assets/aesthetic-practices/icon-ehr-3.png';
import ehr4Icon from '../assets/aesthetic-practices/icon-ehr-4.png';
import ehr5Icon from '../assets/aesthetic-practices/icon-ehr-5.png';
import ehr6Icon from '../assets/aesthetic-practices/icon-ehr-6.png';
import infoIcon from '../assets/aesthetic-practices/icon-info.png';
import rev1Icon from '../assets/aesthetic-practices/icon-rev-1.png';
import rev2Icon from '../assets/aesthetic-practices/icon-rev-2.png';
import rev3Icon from '../assets/aesthetic-practices/icon-rev-3.png';
import rev4Icon from '../assets/aesthetic-practices/icon-rev-4.png';
import rev5Icon from '../assets/aesthetic-practices/icon-rev-5.png';
import rev6Icon from '../assets/aesthetic-practices/icon-rev-6.png';
import timerIcon from '../assets/aesthetic-practices/icon-timer.png';
import grow1Icon from '../assets/aesthetic-practices/icon-grow-1.png';
import grow2Icon from '../assets/aesthetic-practices/icon-grow-2.png';
import grow3Icon from '../assets/aesthetic-practices/icon-grow-3.png';
import grow4Icon from '../assets/aesthetic-practices/icon-grow-4.png';
import grow5Icon from '../assets/aesthetic-practices/icon-grow-5.png';
import questionIcon from '../assets/aesthetic-practices/icon-question.png';
import gavelIcon from '../assets/aesthetic-practices/icon-gavel.png';
import portal1Icon from '../assets/aesthetic-practices/icon-portal-1.png';
import portal2Icon from '../assets/aesthetic-practices/icon-portal-2.png';
import portal3Icon from '../assets/aesthetic-practices/icon-portal-3.png';
import portal4Icon from '../assets/aesthetic-practices/icon-portal-4.png';
import portal5Icon from '../assets/aesthetic-practices/icon-portal-5.png';
import portal6Icon from '../assets/aesthetic-practices/icon-portal-6.png';

const icon = (src, w, h) => ({ src, size: [w, h] });

export const aeHero = {
  currentPage: 'Aesthetic Practices',
  titleLines: ['Aesthetic Practice', 'Management', 'Software for Medical', 'Spas and Cash-Pay', 'Clinics'],
  titleAccent: [],
  // The frame repeats the Telehealth hero's description here, word for word. Reproduced as drawn;
  // see DESIGN-SYSTEM.md (open questions).
  description:
    'Adopting telehealth should not mean adopting a second system. In Elixir the virtual visit is scheduled on the same calendar, documented in the same chart and billed from the same record as everything else you do.',
  primaryCta: { label: 'Request a Demo', to: '/request-demo', arrow: false },
  // The frame gives no destination; it scrolls to "Before-and-After Photos Are Marketing Assets…".
  secondaryCta: { label: 'The before-and-after problem', href: '#before-and-after' },
  media: {
    src: heroMedia,
    alt: 'Aesthetic clinician reviewing a treatment plan on a tablet with a client in a med spa',
  },
};

export const aePillars = [
  {
    icon: icon(pillar1Icon, 22, 16),
    title: 'Built for cash-pay',
    text: 'Consults, packages, memberships and retail — not claims and eligibility. Revenue from what patients paid, not what a payer adjudicated.',
  },
  {
    icon: icon(pillar2Icon, 20, 18),
    title: 'Photos handled properly',
    text: 'Authorization stored against the image, with scope and expiry, so staff can see what is cleared to publish.',
  },
  {
    icon: icon(pillar3Icon, 19, 21),
    title: 'Lot and expiry at the needle',
    text: 'Captured at administration against patient and treatment area — answerable in minutes, not by stock reconciliation.',
  },
  {
    icon: icon(pillar4Icon, 22, 16),
    title: 'A real CRM underneath',
    text: 'Built on Salesforce, so the lead-to-consult-to-rebook funnel is the genuine article rather than a bolt-on.',
  },
];

export const aeScheduling = {
  eyebrow: 'Scheduling',
  title: 'Smart Scheduling for Providers, Rooms and Devices',
  description:
    'An aesthetic clinic schedules three scarce things at once: a qualified injector, a treatment room, and a device that may be shared across the floor. Most practice management tools only really schedule the first.',
  items: [
    {
      icon: icon(sched1Icon, 18, 19),
      title: 'Provider, room and device together',
      text: 'A laser booking that does not reserve the laser is not a booking. Resources are scheduled as first-class objects.',
    },
    {
      icon: icon(sched2Icon, 20, 21),
      title: 'Treatment-specific durations',
      text: 'A consult, a tox appointment and a full-face filler session are different lengths with different prep and recovery time. Configured per treatment, not averaged.',
    },
    {
      icon: icon(sched3Icon, 18, 21),
      title: 'Online self-booking',
      text: 'Patients book from your site or a link, at the hours they actually decide to book, without a phone call.',
    },
    {
      icon: icon(sched4Icon, 20, 17),
      title: 'Series and treatment plans',
      text: 'Multi-session courses scheduled as a series, so the second and third appointments exist before the patient leaves.',
    },
    {
      icon: icon(sched5Icon, 16, 21),
      title: 'Deposits and cancellation terms',
      text: 'Deposits taken at booking with your cancellation policy attached — the single most effective control on no-shows in elective care.',
    },
    {
      icon: icon(sched6Icon, 16, 21),
      title: 'Waitlist and short-notice fill',
      text: 'A canceled Friday slot offered automatically rather than lost.',
    },
  ],
};

export const aeClinical = {
  eyebrow: 'Clinical',
  title: 'A Complete EHR for Aesthetic Procedures',
  description:
    'Aesthetic charting is unlike general medical charting: it is procedure-centric, highly repetitive, and tied to product used and area treated rather than to a diagnosis.',
  items: [
    {
      icon: icon(ehr1Icon, 19, 19),
      title: 'Creation, tracking and marking with inventory traceability',
      text: 'Each procedure records what was used, where, how much, and from which lot — with the inventory decrementing as it happens rather than at a weekly count.',
    },
    {
      icon: icon(ehr2Icon, 17, 19),
      title: 'Consents and questionnaires, fully customizable',
      text: 'All forms and notes including consents and intake questionnaires are configurable by your own staff and completed electronically.',
    },
    {
      icon: icon(ehr3Icon, 17, 15),
      title: 'Pre-populated and editable',
      text: 'Notes populate automatically from the procedure and the previous visit, then are edited to add what is specific to this patient — which is where the clinical value actually sits.',
    },
    {
      icon: icon(ehr4Icon, 19, 21),
      title: 'Electronic prescriptions to the pharmacy',
      text: 'Created and sent directly, with the prescription recorded on the chart.',
    },
    {
      icon: icon(ehr5Icon, 18, 17),
      title: 'Draw tools for injection sites and treatment areas',
      text: 'Mark units and placement on a facial or body map, as a record of what was done and a guide for complex procedures repeated over time.',
    },
    {
      icon: icon(ehr6Icon, 17, 21),
      title: 'Before and after images on the patient chart',
      text: 'Stored, compared and contrasted directly on the record. What you may then do with those images is the subject of the next section, and it is the part most practices get wrong.',
    },
  ],
};

export const aePhotos = {
  eyebrow: 'The one to get right',
  title: 'Before-and-After Photos Are Marketing Assets and Protected Health Information',
  description:
    'Your before-and-afters are probably the most persuasive marketing you own. They are also, in the eyes of the Privacy Rule, a patient’s health information — and publishing one is a disclosure that requires that patient’s specific written permission.',
  enforcement: {
    label: 'Enforcement, September 2025',
    figure: '$182,000',
    title: 'A provider posted patient “success stories” without written authorizations',
    text: 'In September 2025 the HHS Office for Civil Rights settled with Cadia Healthcare Facilities over patient success stories published to the organization’s public website and social media — including patients’ names, photographs and details of their conditions, treatment and recovery — without valid written HIPAA authorizations. 150 patients were affected. The findings covered failure to obtain authorization, inadequate safeguards, and failure to notify.',
    kicker: 'That is not an exotic scenario for an aesthetic practice. It is Tuesday. Source 1.',
  },
  points: [
    {
      title: 'Why a treatment consent is not enough',
      text: 'The Privacy Rule prohibits using or disclosing protected health information except as it permits. Publishing a patient’s photo to Instagram is not treatment, payment or health care operations, so the only route is an authorization meeting the requirements of 45 CFR 164.508. Marketing authorizations also cannot be conditioned on the patient receiving treatment, and cannot simply be bundled into a consent packet — doing so can make the authorization defective. Sources 2–3.',
    },
    {
      title: 'Why cropping is not a fix',
      text: 'The de-identification safe harbor lists full-face and comparable images as identifiers, sweeps in any other unique identifying characteristic, and requires that you have no actual knowledge the person could still be identified. HHS has published nothing defining where a “comparable image” ends. A cropped photo usually travels with a date, a procedure name, a caption or a distinguishing mark. Get the authorization. Source 4.',
    },
    {
      title: 'What Elixir does about it',
      text: 'The authorization is stored against the image, not in a filing cabinet — with its scope, its expiry and whether it has been revoked. Images cleared for publication are visibly distinct from images that are clinical record only. When a patient revokes, the images drop out of the publishable set immediately.',
    },
  ],
  checklist: {
    label: 'Statutory checklist',
    title: 'The nine things a valid authorization must contain, from 45 CFR 164.508(c). Source 3.',
    items: [
      'A specific, meaningful description of the information to be used or disclosed',
      'Who is authorized to make the disclosure',
      'Who it may be disclosed to',
      'A description of each purpose',
      'An expiration date or expiration event',
      'The patient’s signature and the date',
      'The right to revoke in writing, its exceptions, and how to do it',
      'That treatment cannot be conditioned on signing',
      'That the recipient may re-disclose it, after which it is no longer protected',
    ],
    note: 'It must also be in plain language, and the patient must be given a copy.',
  },
  note: {
    icon: icon(infoIcon, 20, 21),
    text: 'One honest limit worth saying out loud: revocation stops future use, but it cannot un-publish what someone else has already reshared. That is exactly why element 9 exists, and why the conversation is better had before the post than after it.',
  },
};

export const aeRevenue = {
  eyebrow: 'Revenue',
  title: 'Manage Revenue: Invoices, Packages and Memberships',
  description:
    'Cash-pay revenue behaves nothing like claims revenue. There is no adjudication and no A/R aging against a payer — but there is deferred revenue sitting in unredeemed packages, and most practices cannot say how much.',
  items: [
    {
      icon: icon(rev1Icon, 24, 24),
      title: 'Invoice and charge from the chart',
      text: 'Create invoices and take payment directly from the patient record, at the point of treatment.',
    },
    {
      icon: icon(rev2Icon, 24, 20),
      title: 'Any payment processor',
      textWidth: 240,
      text: 'Integrates with your payment platform for a complete billing experience rather than a separate terminal and a reconciliation problem.',
    },
    {
      icon: icon(rev3Icon, 24, 24),
      title: 'Payment reminders out of the box',
      text: 'Custom notifications for outstanding balances, on the same consent rules as every other outbound message.',
    },
    {
      icon: icon(rev4Icon, 19, 25),
      title: 'Secure sharing with patients',
      text: 'Medical records, billing information and invoices shared securely rather than emailed as attachments.',
    },
    {
      icon: icon(rev5Icon, 24, 24),
      title: 'Packages and memberships',
      textWidth: 250,
      text: 'Pre-paid courses and recurring memberships tracked as balances, so you know what has been sold, what has been redeemed and what is still owed in treatment.',
    },
    {
      icon: icon(rev6Icon, 24, 22),
      title: 'Retail alongside treatment',
      text: 'Skincare and product sales on the same ticket as the procedure, with inventory moving accordingly.',
    },
  ],
};

export const aeEstimates = {
  eyebrow: 'Price transparency',
  title: 'Good Faith Estimates: Why a Price Question Starts a Clock',
  lead: 'Almost every aesthetic patient is self-pay, which puts almost every aesthetic practice squarely inside a rule many believe does not apply to them.',
  paragraphs: [
    'Since 2022, uninsured and self-pay patients have had a right to a written estimate before care. There is no cosmetic or elective carve-out — the obligation follows the licensed clinician, not the insurance status of the procedure. It also covers patients who have coverage but choose not to use it, which is most of yours.',
    'Elixir generates the estimate from the planned treatment and your price list, with the required content, and tracks delivery against the deadline that applies. Patient-provider dispute resolution becomes available where billed charges exceed the estimate by $400 or more, which is another reason the estimate should reflect the treatment plan rather than a starting price. Source 5.',
  ],
  callout: {
    icon: icon(timerIcon, 18, 22),
    text: 'The trigger is the part that catches people. The rule directs providers to treat any discussion or inquiry regarding potential costs as a request for a Good Faith Estimate. In a consultation-driven practice, that means the moment price comes up in a consult, a clock starts — three business days when the patient simply asks, one business day if the treatment is then booked at least three business days out.',
  },
};

export const aeGrowth = {
  eyebrow: 'Growth',
  title: 'Marketing, Reviews and Text Campaigns Without the Legal Exposure',
  description:
    'Aesthetic practices grow on social proof and direct outreach. Both are regulated, and the rules changed recently enough that a lot of practices are running on out-of-date assumptions.',
  items: [
    {
      tag: 'Texting',
      tone: 'red',
      icon: icon(grow1Icon, 27, 27),
      title: 'Promotional texts are not covered by the healthcare exemption',
      text: 'The federal exemption that lets providers message patients covers a closed list of clinical purposes — appointment reminders, pre-operative instructions, results, post-discharge follow-up — and expressly excludes advertising and solicitation. A promotion is marketing, which generally requires prior express written consent. Source 6.',
    },
    {
      tag: 'Reviews',
      tone: 'red',
      icon: icon(grow2Icon, 24, 27),
      title: 'The FTC rule on reviews and testimonials is in force',
      text: 'Since October 2024 it has been prohibited to buy fake reviews, to condition an incentive on a review expressing a particular sentiment, to publish insider testimonials without disclosing the relationship, or to suppress negative reviews with groundless legal threats. Knowing violations can carry civil penalties. If you offer a discount for a review, the offer cannot depend on the review being positive. Source 7.',
    },
    {
      tag: 'Consent',
      tone: 'purple',
      icon: icon(grow3Icon, 27, 23),
      title: 'Three different permissions, three different records',
      text: 'Treatment consent, marketing consent and photo authorization are separate instruments with different requirements. A single combined “marketing consent” form usually satisfies none of them cleanly. Elixir holds each one separately against the patient, with its own scope and expiry.',
    },
    {
      tag: 'Attribution',
      tone: 'lime',
      icon: icon(grow4Icon, 24, 25),
      title: 'Which campaigns produce patients, not clicks',
      text: 'Leads, consults, treatments and lifetime value tracked to source, so spend is judged on treatments booked rather than engagement.',
    },
    {
      tag: 'Recall',
      tone: 'lime',
      icon: icon(grow5Icon, 28, 31),
      title: 'Rebooking as a system, not a good intention',
      text: 'Tox wears off on a predictable schedule. Recall campaigns driven from what was actually administered and when, rather than from a list exported last quarter.',
    },
  ],
};

export const aeSafety = {
  eyebrow: 'Product safety',
  // The frame breaks the title after "Expiry".
  title: 'Product, Lot and Expiry\nTracking for Injectables',
  description: 'In 2024 this stopped being an inventory question and became a patient safety question.',
  paragraphs: [
    'In April 2024 the FDA documented counterfeit Botox in multiple states. Patients were hospitalized with symptoms consistent with the spread of botulinum toxin — blurred or double vision, difficulty swallowing, dry mouth, weakness, shortness of breath. The counterfeit product carried a specific lot number, was labeled “Botulinum Toxin Type A” rather than the correct active ingredient name, and appeared in unit presentations the genuine product does not come in. Source 8.',
    'Elixir captures product, lot and expiry at the point of administration, against the patient and the treatment area, alongside units used. Expiry is visible before the vial is drawn rather than after. Adverse events are recorded with the product and lot attached — and worth knowing: reporting to FDA through MedWatch is voluntary for a practice operating as a physician office, since physician offices are expressly excluded from the mandatory device user facility definition. Voluntary reporting is still only possible if the chart captured what was used. Source 9.',
  ],
  callout: {
    icon: icon(questionIcon, 20, 21),
    text: 'The operational question that episode raises is simple and uncomfortable: if a lot were recalled tomorrow, how long would it take you to list every patient who received it? If the answer involves paper logs or a stock reconciliation, that is the gap.',
  },
};

export const aeStructure = {
  eyebrow: 'Structure',
  title: 'Ownership, Supervision and Who May Treat',
  description:
    'There is no federal rule on who may inject or operate a laser — federal law expressly declines to interfere with a practitioner’s authority to administer a legally marketed device. All of it is state law, and it varies more than almost any other area we deal with.',
  items: [
    {
      label: 'The shape',
      title: 'Injectables and medical lasers are the practice of medicine',
      text: 'They originate with a physician, or in many states an NP or PA with the relevant authority, and reach the patient by delegation. A patient-specific evaluation generally has to come first.',
    },
    {
      label: 'The line',
      title: 'Estheticians and cosmetologists are on the other side of it',
      textWidth: 256,
      text: 'California states that cosmetologists may never inject the skin, use lasers, or perform medical-level dermabrasion or peels. Texas draws the same boundary. Superficial peels and microdermabrasion sit on the non-medical side. Sources 10–11.',
    },
    {
      label: 'Supervision',
      title: 'Rarely means physically present',
      text: 'California requires the supervising physician to be immediately reachable rather than on site. Other states require presence, a written protocol, chart co-signature, or a set physician-to-delegate ratio. Source 10.',
    },
    {
      label: 'Ownership',
      title: 'Corporate practice of medicine',
      text: 'Most states apply some version of the doctrine restricting non-physician ownership and control of clinical decisions, usually handled through a physician-owned entity with a management services organization alongside. Strength and enforcement vary widely and there is no authoritative national count, so treat any vendor quoting you a number with caution.',
    },
    {
      label: 'Jurisdiction',
      title: 'Several boards, one clinic',
      text: 'In Texas, cosmetology and laser hair removal sit with one agency, medical procedures with the medical board, and tanning and permanent makeup with a third. A single med spa can answer to all three. Source 11.',
    },
    {
      label: 'Accreditation',
      title: 'No mandatory national standard',
      text: 'There is no required national accreditation for medical spas. AmSpa is a trade association offering education and resources, not an accreditor or a regulator, and a voluntary non-surgical accreditation program only launched in March 2026.',
    },
  ],
  note: {
    icon: icon(gavelIcon, 18, 20),
    text: 'Elixir configures provider types, delegation relationships, supervision requirements and which treatments each role may perform — per state and per location. To be plain about the division of labor: the software enforces what you configure. It does not determine what your state requires, and we will not pretend otherwise. Your medical director and your counsel set the rules; we make them operate consistently.',
  },
};

export const aePlatform = {
  eyebrow: 'The platform',
  title: 'Built on Salesforce: The CRM Half of an Aesthetic Practice',
  lead: 'Most aesthetic software is a clinical system with a marketing module attached. The economics of the business are the other way round.',
  paragraphs: [
    'An aesthetic practice converts inquiries into consultations, consultations into treatments, and treatments into repeat visits and memberships. That is a sales funnel with a chart attached to it, and the half that determines whether the practice grows is the funnel.',
    'Elixir is built natively on Salesforce — which means the customer relationship half is not a lightweight add-on written by a clinical software company. Lead capture, campaign attribution, pipeline, follow-up sequences, segmentation and reporting are the platform’s own, mature capabilities, sitting against the same patient record the clinician documents in.',
    'The practical consequence: the consultation that did not convert is a record you can act on, not a gap in a calendar. The patient who has not rebooked in nine months is a segment, not a hunch. And your marketing team and your clinical team are looking at the same person.',
  ],
  // As drawn, the "Related" line is laid out as a row of narrow columns.
  related: [
    { text: 'Contact Center', to: '/contact-center' },
    { text: 'for inquiry handling,' },
    { text: 'Patient Portal', to: '/patient-portal' },
    { text: 'for self-service, and' },
    { text: 'no-show prediction', to: '/patient-no-show-prediction' },
    { text: 'where missed appointments are material.' },
  ],
};

export const aePortal = {
  eyebrow: 'Patient experience',
  title: 'Patient Portal and Secure Communication',
  description:
    'Patients handle the routine themselves, and the messages that matter stay inside a channel you control.',
  items: [
    {
      icon: icon(portal1Icon, 23, 22),
      title: 'View and manage payments',
      text: 'Balances, invoices, package credits and payment methods available to the patient without a phone call.',
    },
    {
      icon: icon(portal2Icon, 24, 24),
      title: 'Secure messaging with the care team',
      text: 'HIPAA-compliant communication about treatment and progress, rather than clinical questions arriving as Instagram direct messages.',
    },
    {
      icon: icon(portal3Icon, 24, 20),
      title: 'Forms before arrival',
      text: 'Intake, consent and health history completed ahead of the appointment, landing in the chart as structured data.',
    },
    {
      icon: icon(portal4Icon, 24, 24),
      title: 'Aftercare on the record',
      text: 'Post-treatment instructions delivered and logged, so what the patient was told is documented.',
    },
    {
      icon: icon(portal5Icon, 19, 24),
      title: 'Photo review and authorization',
      text: 'Patients can see the images on their record, and give or withdraw publication permission explicitly.',
    },
    {
      icon: icon(portal6Icon, 21, 24),
      title: 'Self-scheduling and rebooking',
      text: 'The next appointment booked by the patient, at the moment they decide to book it.',
    },
  ],
};

// The frame lays the questions out in two columns read row by row; the shared accordion fills the
// left column first, so the items are ordered to put each question in the column it is drawn in.
export const aeFaq = {
  eyebrow: 'Questions',
  title: 'Aesthetic Practice Software: Frequently Asked Questions',
  description: 'What practice owners, medical directors and marketing leads ask us first.',
  items: [
    {
      question: 'Is Elixir built for cash-pay aesthetic practices?',
      answer:
        'Yes. The revenue model is built around consults, packages, memberships, deposits and point-of-sale retail rather than insurance claims and EDI clearinghouses. If you also bill medical claims for dermatology or reconstructive procedures, Elixir supports that too — but cash-pay is a first-class workflow, not an afterthought.',
    },
    {
      question: 'Does cropping out the face solve it?',
      answer:
        'Rarely. The de-identification safe harbor requires removing all comparable images and having no actual knowledge the person could still be identified. Tattoos, jewelry, context and procedure descriptions frequently identify patients even in cropped photos. The safe and compliant route is always a valid authorization.',
    },
    {
      question: 'Can we text patients about promotions?',
      answer:
        'Only with prior express written consent for marketing. The healthcare exemption from TCPA rules covers only appointment reminders, pre-op instructions and clinical follow-up. It specifically excludes advertising. Elixir tracks marketing consent separately from treatment consent.',
    },
    {
      question: 'Can Elixir handle multiple locations and provider types?',
      answer:
        'Yes. Multi-location practices can configure different provider types (MD, DO, NP, PA, RN, esthetician), delegation rules, supervision requirements and treatment permissions per state and per facility.',
    },
    {
      question: 'Can we use before-and-after photos in our marketing?',
      answer:
        'Yes, provided you have a valid HIPAA marketing authorization meeting 45 CFR 164.508. Treatment consent is not enough. Elixir captures and stores the authorization against the image, tracks expiry and channels, and removes images immediately if the patient revokes.',
    },
    {
      question: 'Do Good Faith Estimates apply to us if we never bill insurance?',
      answer:
        'Yes. The federal requirement applies to all licensed providers treating uninsured or self-pay patients, with no cosmetic or elective exception. A price discussion in a consult starts a timeline to deliver the written estimate. Elixir generates and tracks these automatically.',
    },
    {
      question: 'Do you track lot numbers and expiry for injectables?',
      answer:
        'Yes. Product, lot number, expiration date, units and treatment area are recorded at the point of administration. If a lot is recalled or queried, you can run a report showing every patient who received it in seconds.',
    },
    {
      question: 'Will treatments become HSA or FSA eligible?',
      answer:
        'Under current IRS rules (Publication 502), cosmetic procedures are generally not deductible medical expenses and therefore cannot be paid with HSA or FSA funds unless directed at a congenital abnormality, injury or disease. Legislative proposals have been introduced to expand eligibility, but no change has been enacted. We track regulatory developments and update the platform accordingly.',
    },
  ],
};

export const aeCtaBand = {
  eyebrow: 'Both halves, one system',
  title: 'See the clinic and the funnel on one record',
  description:
    'Bring your treatment menu, your locations and your marketing stack. We will show you a patient from first inquiry through consult, treatment, photo authorization and rebooking — without leaving the record once.',
  cta: { label: 'Request a Demo', to: '/request-demo' },
  // The frame's second button is the sibling More Specialties page.
  secondaryCta: { label: 'Small practice', to: '/more-specialties/small-practices' },
};
