// Value-Based Care page content — copy reproduced exactly from the Figma "Value-Based Care" frame.
// The hero image and the four pillar icons are 1× crops of the frame export.

import heroMedia from '../assets/value-based-care/hero-media.png';
import pillar1Icon from '../assets/value-based-care/icon-pillar-1.png';
import pillar2Icon from '../assets/value-based-care/icon-pillar-2.png';
import pillar3Icon from '../assets/value-based-care/icon-pillar-3.png';
import pillar4Icon from '../assets/value-based-care/icon-pillar-4.png';

export const vbHero = {
  currentPage: 'Value-Based Care',
  titleLines: ['Value-Based Care', 'Software for', 'Behavioral Health', 'and Addiction', 'Treatment'],
  titleAccent: [],
  description:
    'The measures that decide what you are paid are mostly about timing. Did a contact happen inside a window — seven days, thirty days, fourteen days, thirty-four more. Those are operational numbers, and the sector is losing them.',
  primaryCta: { label: 'Request a Demo', to: '/request-demo', arrow: false },
  // The frame gives no destination; it scrolls to the follow-up windows chart below.
  secondaryCta: { label: 'The four windows', href: '#timing' },
  media: {
    src: heroMedia,
    alt: 'Clinician reviewing a care plan on a tablet with a patient and care team beneath a follow-up timeline',
  },
};

export const vbPillars = [
  {
    title: 'Measures as workflow',
    text: 'The follow-up window is a worklist with an owner and a deadline, not a number discovered at year end.',
    icon: pillar1Icon,
  },
  {
    title: 'Scores in the record',
    text: 'Structured instruments captured at the visit, so remission and screening measures are derivable rather than reconstructed.',
    icon: pillar2Icon,
  },
  {
    title: 'Built for the bonus',
    text: 'The measures that carry CCBHC quality bonus payments tracked against your state’s threshold as the year runs.',
    icon: pillar3Icon,
  },
  {
    title: 'Reporting without a project',
    text: 'Events captured as they happen, in the form the measure needs, with the subgroup breakdowns states now require.',
    icon: pillar4Icon,
  },
];

export const vbTiming = {
  eyebrow: 'The one to get right',
  title: 'The Measures That Decide Your Payment Are Mostly About Timing',
  description:
    'Read the behavioral health quality measures closely and a pattern appears. Almost none of them ask whether the care was good. They ask whether a contact happened, and whether it happened in time.',
  chart: {
    title: 'Median state performance · Medicaid adults · services in calendar year 2024',
    subtitle: 'Reported by 52 states and territories under mandatory Medicaid quality reporting.',
    // tone: 'low' (red) or 'mid' (Deep Purple), as drawn.
    bars: [
      { label: 'Follow-up within 7 days of a mental health hospitalization', value: 33.4, tone: 'low' },
      { label: 'Follow-up within 30 days of a mental health hospitalization', value: 52.6, tone: 'mid' },
      { label: 'Follow-up within 7 days of an ED visit for substance use', value: 27.8, tone: 'low' },
      { label: 'Follow-up within 7 days of an ED visit for mental illness', value: 36.0, tone: 'low' },
      { label: 'Substance use treatment initiated within 14 days', value: 45.7, tone: 'mid' },
      { label: 'Substance use treatment engagement reached', value: 17.2, tone: 'low' },
    ],
    note: 'Read the first bar. In the median state, two out of three Medicaid adults discharged from a psychiatric hospitalization had no follow-up contact within seven days. Nearly half had none within thirty. These are not obscure measures — they are mandatory state reporting, and several of them determine quality bonus payments.',
  },
  paragraphs: [
    'Why this is good news, in a way. A measure about clinical judgment is hard to move with software. A measure about whether somebody was contacted within seven days is not. It needs a list of who was discharged, a rule about when they must be seen, an owner, and an escalation when the date approaches. That is a workflow problem, and workflow problems are solvable.',
    'The trend is upward and slow. Comparing the two most recent reporting cycles, seven-day follow-up after a mental health hospitalization moved from about 32 to about 33 per cent, and substance use engagement from about 16 to about 17 per cent. The sector is improving by roughly a point a year from a very low base. There is a great deal of room between the median state and the top quartile, and almost all of it is operational.',
    'One measure worth staring at. Depression screening with a documented follow-up plan had a median state result of 2.4 per cent. Whatever is happening in clinical practice, the thing the measure asks for is almost never making it into the data in a form that counts.',
  ],
  claim: {
    title: 'What we will not claim',
    paragraphs: [
      'That software improves outcomes for people with serious mental illness. It does not. Clinicians and care teams do that, and the measures above are proxies for access and continuity rather than for recovery.',
      'What software can do is make sure the appointment is scheduled before discharge, that somebody owns the seven-day window, and that the contact which did happen is recorded in a way the measure recognizes. That is a narrower claim, and it is the one the evidence supports.',
    ],
  },
};

export const vbEvidence = {
  eyebrow: 'Evidence',
  title: 'What Actually Moves Follow-Up After Hospitalization',
  description:
    'Two findings, both well-evidenced, both about operations rather than clinical practice. Together they describe almost the whole of what a system can contribute.',
  findings: [
    {
      stat: '43% vs 23%',
      tone: 'purple',
      title: 'Scheduling the appointment before the patient leaves roughly doubles seven-day attendance',
      paragraphs: [
        'Among people discharged from inpatient psychiatric care, those who left with an appointment already scheduled attended follow-up within seven days far more often than those who did not. The association held after adjustment, and it was larger for people with co-occurring substance use disorder.',
        'The attendance gap opens within about two days of discharge and widens through roughly day ten — which is precisely the period a discharge worklist covers.',
      ],
      source:
        'Retrospective cohort of 15,520 inpatient psychiatric discharges, New York State Medicaid, propensity-adjusted. Smith et al., Journal of Clinical Psychiatry, 2020.',
    },
    {
      stat: '12% → 42%',
      tone: 'red',
      title: 'Missed appointments rise steeply with every day of waiting',
      paragraphs: [
        'In a large community mental health sample, cancellations and no-shows rose from around one in eight for same-day appointments to more than four in ten at a wait of a week. The odds of missing rose by roughly a tenth for each additional day of delay.',
        'The decline is steepest inside the first week and flattens afterwards — which is a strong argument that the seven-day window is the one most winnable through scheduling design.',
      ],
      source:
        '5,901 consecutive patients at an academic community psychiatry service. Gallucci et al., Psychiatric Services, 2005.',
    },
  ],
  // RichText: the two related pages are linked.
  note: [
    {
      text: 'Neither finding requires prediction, scoring or artificial intelligence. They require that the appointment exists before the patient leaves, and that it is soon. Related: ',
    },
    { text: 'no-show prediction', to: '/patient-no-show-prediction' },
    { text: ' for the attendance half of the problem, and ' },
    { text: 'Contact Center', to: '/contact-center' },
    { text: ' for the outreach.' },
  ],
};

export const vbTransitions = {
  eyebrow: 'Transitions',
  title: 'Closing the Loop After a Hospitalization or an ED Visit',
  description:
    'The follow-up measures all share a shape: an event happens somewhere else, a clock starts, and you have days to make contact. Most organizations find out about the event late, and find out about the clock later still.',
  // tone: the tag colour as drawn — grey, lime, lavender or red.
  steps: [
    {
      tag: 'The event',
      tone: 'grey',
      title: 'You have to know the discharge happened',
      text: 'Admission, discharge and transfer notifications, hospital and plan feeds, and referrals from emergency departments all land as events against the patient rather than as a message in somebody’s inbox. The clock cannot start until the event is in the record.',
    },
    {
      tag: 'The clock',
      tone: 'lime',
      title: 'A window with an owner and a deadline',
      text: 'Each transition creates a tracked obligation with the applicable window, assigned to a named person. Seven-day and thirty-day targets are visible as dates, not as policy. What is approaching, what is at risk and what has lapsed is a worklist, not a monthly report.',
    },
    {
      tag: 'The appointment',
      tone: 'lime',
      title: 'Booked before discharge wherever possible',
      text: 'Because that is the single intervention with the strongest evidence behind it. Where the appointment cannot be made before the patient leaves, outreach starts immediately rather than when somebody notices.',
    },
    {
      tag: 'The contact',
      tone: 'lavender',
      title: 'Recorded in a form the measure recognizes',
      text: 'A contact that happened but was documented as a general note may not count. Service type, provider and diagnosis context are captured so the follow-up is attributable — which is where a surprising share of apparent underperformance actually comes from.',
    },
    {
      tag: 'The miss',
      tone: 'red',
      title: 'Escalation before the window closes, not after',
      text: 'A missed appointment inside a seven-day window is still recoverable on day four. It is not recoverable on day nine. The escalation is driven by the deadline rather than by the next scheduled review.',
    },
  ],
};

export const vbClocks = {
  eyebrow: 'Substance use',
  title: 'Initiation and Engagement: Two Clocks, Not One',
  description:
    'The substance use measure is the hardest one in this set, and the national numbers show it. It asks for two separate things on two separate timetables, and a provider can succeed at the first and still fail the second.',
  // tone: the label colour as drawn — lime, red or yellow.
  cards: [
    {
      label: 'Clock one',
      tone: 'lime',
      title: 'Initiation, within 14 days',
      points: [
        'Treatment must begin within fourteen days of the new episode',
        'An inpatient admission, an outpatient or intensive outpatient visit, partial hospitalization, a telehealth visit or a medication treatment event can all qualify',
        'Median state performance: under half of episodes',
      ],
    },
    {
      label: 'Clock two',
      tone: 'red',
      title: 'Engagement, within 34 days of initiation',
      points: [
        'A further period after the initiation event in which continued treatment must occur',
        'This is where the measure is lost — the drop from initiation to engagement is the largest fall anywhere in the behavioral health measure set',
        'Median state performance: under one episode in five',
      ],
    },
    {
      label: 'What a system contributes',
      tone: 'yellow',
      title: 'Making the second visit as deliberate as the first',
      points: [
        'The episode start date recorded, so both clocks are real dates',
        'The next appointment scheduled at the first, not offered at the first',
        'Early disengagement visible while the window is still open',
        'Medication treatment events captured alongside visits, since both can count',
      ],
    },
  ],
  footnote:
    'The exact qualifying events and combinations are set by the measure steward and are revised most years. Elixir holds the measure logic as configuration so a specification update is a change to data, not a release. Confirm current specifications against the steward’s published technical materials before relying on any vendor’s implementation, ours included.',
};

export const vbMeasurement = {
  eyebrow: 'Measurement',
  title: 'Measurement-Based Care: Scores in the Record, Not in a Binder',
  lead: 'Several measures cannot be satisfied at all unless a scored instrument is present in the record as structured data.',
  paragraphs: [
    'Where it is effectively required. Depression remission at six months is a required clinic-collected measure for certified community behavioral health clinics. Depression screening with a documented follow-up plan is mandatory in Medicaid state reporting. Other current measures require a scored depression instrument to be present in the record, or an elevated score followed by a later one inside a defined period. None of these can be met by a narrative note recording that mood was discussed.',
    'What Elixir does. Instruments administered in the visit or ahead of it through the portal, scored automatically, stored as discrete values with their dates, trended over time, and available to the measure logic without anyone transcribing anything. A positive screen creates the follow-up obligation rather than relying on someone to remember it.',
    'What the evidence supports, stated plainly. Randomized trials of measurement-based care in depression show patients reaching response and remission faster — in the strongest recent trial, median time to response halved. The same trial found no significant difference in response or remission rates at twenty-four weeks. A meta-analysis of measurement feedback systems across roughly fourteen thousand participants found a small overall benefit, larger for patients who were not responding to treatment. So: faster, and most useful for the people who are not getting better. That is a real benefit and we will not inflate it into something else.',
  ],
  note: 'Adoption remains low. A review in JAMA Psychiatry concluded that typically fewer than one in five behavioral health practitioners integrate measurement-based care into practice — a characterization of the literature rather than a survey finding, but a telling one.',
  trajectory: {
    title: 'PHQ-9 Longitudinal Trajectory',
    badge: 'Remission Eligible',
    points: [
      { label: 'Intake (Score: 19)', score: 19, tone: 'red' },
      { label: 'Month 3 (Score: 12)', score: 12, tone: 'yellow' },
      { label: 'Month 6 (Score: 4)', score: 4, tone: 'green' },
    ],
    threshold: 'Remission threshold (<5)',
    instrument: { label: 'Standardized Instrument:', value: 'PHQ-9 Adult' },
    result: 'HEDIS Remission Metric Met',
  },
};

export const vbCcbhc = {
  eyebrow: 'The commercial edge',
  title: 'If You Are a CCBHC, These Measures Are Your Bonus Payment',
  lead: 'For certified community behavioral health clinics the link between these measures and money is not indirect. It is written into the payment methodology.',
  paragraphs: [
    'Quality bonus payments are required under the monthly prospective payment methodologies and optional under the daily ones. Where a state operates them, a clinic must meet or exceed a state-defined threshold on a measure — payments cannot be made for reporting alone.',
    'And the required measure set is the one this page is about. States using quality bonus payments must include a defined group of comparative measures. Follow-up after hospitalization for mental illness, for both adults and children, and initiation and engagement of substance use disorder treatment are in that required group. Follow-up after an emergency department visit for substance use sits among the measures a state may add at its option.',
    'What that means practically. If you are in a monthly PPS state, the seven-day follow-up number on this page is a line in your revenue. Elixir tracks performance against your state’s threshold as the measurement year runs, by site and by team, so the conversation happens in month four rather than in the settlement.',
  ],
  note: 'One wrinkle worth knowing: a measure can be retired by its steward and still be required of you. At least one measure that national specifications dropped recently remains a required state-collected measure for CCBHCs. Check your state’s current list rather than a national one.',
  table: {
    caption: 'Where quality bonus payments apply, by prospective payment methodology.',
    head: ['Methodology', 'Unit', 'Quality bonus payments'],
    rows: [
      ['Daily rate', 'Per day', 'Optional'],
      ['Monthly rate', 'Per month', 'Required'],
      ['Daily, with crisis rates', 'Per day', 'Optional'],
      ['Monthly, with crisis rates', 'Per month', 'Required'],
    ],
    footnote:
      'The demonstration has expanded in rounds, most recently with ten further states selected in 2026. Methodology, thresholds and measure selection are set by your state, not nationally.',
  },
};

export const vbModels = {
  eyebrow: 'The landscape',
  title: 'The Value-Based Models You Might Already Be In',
  description:
    'Federal model announcements get the attention. For most behavioral health and community providers, the money actually moves through state Medicaid arrangements.',
  // The last card is the highlighted (lime) one in the frame.
  cards: [
    {
      title: 'Innovation in Behavioral Health',
      text: 'The federal model built for this sector: specialty behavioral health practices as the accountable entity, leading an interprofessional team with closed-loop referrals to physical health. State-led, with Medicaid participation required and Medicare optional. First cohort of Michigan, New York and South Carolina runs to 2032, with a second cohort in selection.',
    },
    {
      title: 'State Medicaid arrangements',
      text: 'Directed payments, quality withholds, enhanced rates and managed care contract terms. Less visible than federal models, far more likely to be what you are actually paid under, and different in every state.',
    },
    {
      title: 'CCBHC prospective payment',
      text: 'A cost-based clinic-specific rate with quality bonus payments attached under the monthly methodologies, plus a permanent Medicaid state plan option created in 2024 alongside the demonstration.',
    },
    {
      title: 'Medicare accountable care',
      text: 'Shared savings arrangements where behavioral health providers are usually a referral partner rather than the accountable entity — but where follow-up and readmission performance affects somebody’s results, and increasingly their willingness to refer.',
    },
    {
      title: 'Home health value-based purchasing',
      text: 'For organizations with a Medicare-certified home health agency, a payment adjustment of up to five per cent in either direction, based on performance two years earlier. Covered on our home and community-based care page.',
    },
    {
      title: 'What we would watch instead',
      text: 'Your own contracts. The measure set, the thresholds and the withhold in next year’s managed care agreement will shape your revenue more than any model announcement, and they are negotiable in a way federal models are not.',
      highlight: true,
    },
  ],
};

export const vbReporting = {
  eyebrow: 'Reporting',
  title: 'Reporting You Should Not Have to Run a Project For',
  lead: 'Behavioral health measures in the Medicaid Core Sets became mandatory for states from federal fiscal year 2024, and several now require results broken out by subgroup.',
  paragraphs: [
    'The submission is not the hard part. The hard part is discovering, late in the year, that a measure cannot be produced — because encounters were not attributable, or follow-up contacts were recorded in a way the measure does not recognize, or the instrument score lives in a PDF. By then the measurement year is spent.',
    'What Elixir does differently. The events the measures depend on are captured as structured data at the moment they occur, with the attributes the measure needs. Performance is visible during the year, by site, team and measure, against whatever threshold applies to you. Subgroup breakdowns are a dimension of the same data rather than a separate exercise.',
    'And where the number is bad, it is bad early. That is the entire point. A seven-day follow-up rate you see in month three is a problem you can still fix. The same rate in month thirteen is a report.',
  ],
  note: 'Measure specifications are the intellectual property of their stewards and are revised most years. We implement to current published specifications and update them as they change; your own compliance remains yours, and we would encourage you to verify our implementation against the source rather than take it on trust.',
  // tone: the value colour as drawn — lime, white or yellow.
  dashboard: {
    title: 'Quarterly Quality Pulse',
    badge: 'Live Dashboard',
    rows: [
      { label: 'FUH-7 (Mental Health Hospitalization)', value: '68.2% (Target: 55%)', tone: 'lime' },
      { label: 'IET Initiation (Substance Use)', value: '59.4% (Target: 50%)', tone: 'white' },
      { label: 'IET Engagement (34-Day Window)', value: '34.1% (Median: 17.2%)', tone: 'lime' },
      { label: 'Depression Remission at 6 Months', value: '14.8% (Target: 12%)', tone: 'yellow' },
    ],
  },
};

// The frame shows answers for four of the questions (drawn open); the other four are drawn closed
// with no answer supplied, so they render as static rows until the copy arrives.
export const vbFaq = {
  eyebrow: 'Questions',
  title: 'Value-Based Care in Behavioral Health: Frequently Asked Questions',
  description: 'What clinical leaders, quality managers and finance directors ask us first.',
  columns: [
    [
      {
        question: 'What does value-based care actually mean for a behavioral health provider?',
        answer:
          'In physical health it usually means total cost of care risk. In behavioral health it almost always means quality withholds, performance-linked rate enhancements, or quality bonus payments under CCBHC prospective payment. The payer holds back a portion of the payment or offers an additional payment, and you earn it by meeting performance thresholds on a defined measure set. Almost all of those measures are about timely follow-up, screening, or remission.',
      },
      {
        question: 'How badly is the sector actually doing on these?',
        answer:
          'The national medians are sobering. For Medicaid adults, about one in three has a documented follow-up within seven days of a mental health hospitalization, and only about one in six reaches the engagement threshold for substance use disorder treatment. These are not bad clinicians; they are fragmented care transitions without operational workflows to catch people as they move between settings.',
      },
      { question: 'Is there evidence that software-shaped interventions move these measures?' },
      { question: 'We are a CCBHC. Does this matter more for us?' },
    ],
    [
      {
        question: 'Do you support measurement-based care?',
        answer:
          'Yes. Standardized instruments (PHQ-9, GAD-7, BAM, Columbia-Suicide Severity, and others) are integrated into clinical workflows and client portal check-in. Scores are stored as structured data with dates, graphed longitudinally, and automatically fed into quality measure calculations such as depression remission at six months.',
      },
      {
        question: 'What value-based models should we actually be watching?',
        answer:
          'The CMS Innovation in Behavioral Health (IBH) model is the major federal initiative specifically designed for this sector. But the more immediate impact is usually in your existing state Medicaid managed care contracts — specifically directed payments and quality withholds — and in CCBHC demonstration expansion.',
      },
      { question: 'Can you produce the reports our state asks for?' },
      { question: 'Does value-based care mean taking financial risk?' },
    ],
  ],
};

export const vbCtaBand = {
  eyebrow: 'Start with one window',
  title: 'What is your seven-day follow-up rate right now?',
  description:
    'If producing that number takes a week and a spreadsheet, that is the finding. Bring us one measure and one month, and we will show you where the events are being lost between the discharge and the claim.',
  cta: { label: 'Request a Demo', to: '/request-demo' },
  secondaryCta: { label: 'Behavioral Health', to: '/behavioral-health' },
};
