// Patient No-Show Prediction page content — copy reproduced exactly from the Figma
// "Patient No-Show Prediction" frame. The hero image is the frame's grey placeholder (the same
// exported placeholder as the EVV, Denial Management and Patient Portal heroes).

import heroMediaPlaceholder from '../assets/denial-management/hero-media-placeholder.png';
import excludedIcon from '../assets/patient-no-show-prediction/icon-excluded.png';
import excludedMark from '../assets/patient-no-show-prediction/mark-excluded.png';
import outreachIcon from '../assets/patient-no-show-prediction/icon-outreach.png';

export const noShowHero = {
  currentPage: 'Patient No-Show Prediction',
  titleLines: ['Patient No-Show Prediction', 'That Drives Outreach, Not', 'Overbooking'],
  // The whole title is white in this frame (no accent).
  titleAccent: [],
  description:
    'Elixir scores every upcoming appointment for no-show risk inside the same Salesforce-native EHR your schedulers already work in — then turns the highest-risk visits into a reminder, a phone call, or a transport check while there is still time to keep the slot.',
  // No destination in the frame for the demo CTA: /request-demo, as on the other pages.
  primaryCta: { label: 'Request a Demo', to: '/request-demo' },
  secondaryCta: { label: 'Calculate what no-shows cost you', to: '/no-show-roi-calculator' },
  media: { src: heroMediaPlaceholder, alt: 'Image placeholder' },
};

export const noShowProblem = {
  chip: 'The problem',
  title: 'Missed Appointments Are a Scheduling Problem You Can See Coming',
  quote:
    'A no-show is rarely a surprise on the day. It is usually the predictable end of a booking made too far out, to a patient with no ride, at a time that conflicts with a shift.',
  // Figures reproduced from the frame; they are the cited study's (source below).
  stat: {
    label: 'Clinic study benchmark',
    value: '18.8%',
    caption: 'average no-show rate',
    details: [
      { label: 'Best:', value: '12.6%' },
      { label: 'Worst:', value: '25.7%' },
      { label: '2x Spread', accent: true },
    ],
  },
  paragraphs: [
    [
      'One widely cited US study of ten outpatient specialty clinics found an overall no-show rate of ',
      { text: '18.8%', emphasis: true },
      ', ranging from 12.6% in the best-performing clinic to 25.7% in the worst — a two-fold spread between specialties in the same organization. Behavioral health and addiction treatment programs commonly report rates at or above the upper end of that range, driven by the same access pressures that brought the patient into care.',
    ],
    // \n reproduces the frame's hard line breaks.
    'The number that matters, though, is yours. Rates vary enormously by program, level\nof care, lead time, and payer mix, and any vendor quoting you a single industry figure\nis quoting an average of things that are not like each other. Measure your own baseline by program before you set a target.',
  ],
  source: [
    'Source: Kheirkhah P, Feng Q, Travis LM, Tavakoli-Tabasi S, Sharafkhaneh A. “Prevalence, predictors and economic consequences of no-shows.” ',
    { text: 'BMC Health Services Research', italic: true },
    ' 2016;16:13. ',
    { text: 'doi:10.1186/s12913-015-1243-z', href: 'https://doi.org/10.1186/s12913-015-1243-z' },
  ],
};

export const noShowScope = {
  chip: 'Scope',
  title: 'What Patient No-Show Prediction Software Actually Predicts',
  description:
    'Being precise about this is the difference between a tool your schedulers trust and one they quietly ignore. The model answers one narrow question and nothing else.',
  // tone: 'does' (lime cards) | 'doesNot' (grey cards), as drawn.
  items: [
    {
      tone: 'does',
      tag: 'It predicts',
      title: 'The chance this specific appointment is missed',
      text: 'One score, one scheduled visit, refreshed as the date approaches and as signals change — a reminder goes unanswered, a phone number bounces, the visit is rescheduled.',
    },
    {
      tone: 'does',
      tag: 'It produces',
      title: 'A ranked worklist, not a verdict',
      text: 'Outreach capacity is finite. The score exists so that the forty calls your team can make today go to the forty appointments most likely to be lost, instead of down the alphabet.',
    },
    {
      tone: 'doesNot',
      tag: 'It does not predict',
      title: 'Engagement, adherence, or outcome',
      text: 'A missed appointment is an access event, not a clinical judgment. The score says nothing about whether a patient is motivated, compliant, or likely to recover, and it must never be read that way.',
    },
    {
      tone: 'doesNot',
      tag: 'It does not decide',
      title: 'Who gets an appointment',
      text: 'The score is never an input to whether a patient is offered a slot, kept on a panel, or moved to a lower level of care. It is only ever an input to who gets extra help keeping the slot they already have.',
    },
    {
      tone: 'doesNot',
      tag: 'It does not replace',
      title: 'Your reminder system',
      text: 'Reminders still go to everyone. Prediction decides who additionally gets a human call, a transport check, or an earlier slot — the interventions that cost real staff time.',
    },
    {
      tone: 'doesNot',
      tag: 'It does not learn',
      title: "From other organizations' patients",
      text: 'Your model is trained on your appointment history, inside your Salesforce org. Nothing leaves it to improve a shared model somewhere else.',
    },
  ],
};

export const noShowSignals = {
  chip: 'Under the hood',
  title: 'How the No-Show Risk Score Is Built',
  description:
    'The score combines signals already present in your EHR. Every group below is visible to your team — if a clinic lead asks why an appointment is flagged, the answer is available rather than hidden behind a model.',
  columns: ['Signal group', 'What it contributes'],
  rows: [
    {
      group: 'Appointment attributes',
      text: 'Lead time between booking and visit, day of week, time of day, visit type and duration, first visit versus follow-up, telehealth versus in-person, and whether the slot came from a reschedule.',
    },
    {
      group: 'Attendance history',
      text: 'Prior kept, missed, late-cancelled and rescheduled visits, weighted toward recent behaviour, and the length of the current treatment episode.',
    },
    {
      group: 'Access and logistics',
      text: 'Travel distance to the site, a recorded transport need, interpreter requirement, and whether the appointment falls inside typical working hours.',
    },
    {
      group: 'Engagement signals',
      text: 'Portal activity, reminder delivery and response, valid contact methods on file, and recent inbound contact with the practice.',
    },
    {
      group: 'Program context',
      text: 'Level of care, program attendance requirements, time since intake, and whether the visit is part of a recurring series such as an IOP cohort or a dosing schedule.',
    },
  ],
  excluded: {
    title: 'Deliberately excluded from the model',
    icon: excludedIcon,
    mark: excludedMark,
    // Two columns, as drawn.
    columns: [
      [
        'Race and ethnicity.',
        'Payer class and insurance type, which act as a proxy for income.',
        'Diagnosis, including substance use diagnoses.',
      ],
      [
        ['Primary language — the interpreter ', { text: 'requirement', italic: true }, ' is an operational fact the team must act on; language as an identity attribute is not a risk factor.'],
        'ZIP code or neighbourhood as a standalone factor. Travel distance to the site is used; the neighbourhood a patient lives in is not.',
      ],
    ],
  },
  note: {
    text: 'These exclusions are a design decision, not a configuration option, and they are documented in the model record your compliance team can review. See ',
    link: { label: 'Responsible AI at Elixir', to: '/responsible-ai' },
  },
};

export const noShowOperations = {
  chip: 'Operations',
  title: 'What Your Team Does With a High-Risk Appointment',
  description:
    'A risk score with no attached play is a dashboard nobody opens. Each band maps to an action your staff can complete in the time they actually have.',
  // tone sets the card edge and pill colours: 'lime' | 'yellow' | 'red'.
  bands: [
    {
      band: 'Low',
      tone: 'lime',
      title: 'Standard reminder cadence, no staff time',
      text: [
        'Automated reminders through the ',
        { text: 'Patient Portal', to: '/patient-portal' },
        ' and SMS. No one on your team touches these appointments — which is the point, because it frees the hours for the ones below.',
      ],
    },
    {
      band: 'Medium',
      tone: 'yellow',
      title: 'Earlier reminder, confirmation required, easy reschedule',
      text: 'Reminders start sooner and ask for an explicit confirmation. An unanswered confirmation 48 hours out promotes the appointment into the call list, with a one-tap reschedule link rather than a phone tree.',
    },
    {
      band: 'High',
      tone: 'red',
      title: 'Live outreach with something to offer',
      text: [
        'A person calls — and calls with an option: an earlier slot, a telehealth conversion, a transport arrangement, or a time outside working hours. ',
        { text: 'A call that only reminds the patient of a barrier they already know about does not change the outcome.', strong: true },
      ],
    },
    {
      band: 'High & clinical',
      tone: 'red',
      title: 'Route to the care team, not just the front desk',
      text: 'For appointments where a miss carries clinical weight — a medication management visit, a dosing appointment, a first visit after a hospital discharge — the flag goes to the care team alongside the scheduler, so the follow-up is clinical rather than administrative.',
    },
    {
      band: 'Released',
      tone: 'lime',
      title: 'Offer the slot to the waitlist — only after a person confirms',
      text: 'When a patient confirms they cannot attend, the freed slot is offered to waitlisted patients through the portal. The release is always the result of a confirmed cancellation, never of a risk score.',
    },
  ],
  note: {
    icon: outreachIcon,
    before: 'Outreach runs through ',
    link: { label: 'Elixir Contact Center', to: '/contact-center' },
    after: ', so calls, texts, and portal messages are logged against the appointment and the next scheduler sees what was already tried.',
  },
};


export const noShowPosition = {
  chip: 'A position we hold',
  title: 'Why We Don’t Recommend Overbooking to Cover No-Shows',
  description:
    'Most no-show prediction products are sold as an overbooking engine: predict the misses, double-book the slots, fill the day. We build the score, and we recommend against using it that way.',
  arguments: [
    {
      title: 'The Equity Argument',
      text: 'Historical no-show data encodes transport, childcare, hourly-wage inflexibility, and housing instability. Overbooking the highest-risk slots means that the patients whose lives are hardest are systematically the ones double-booked — so on the days they do make it in, they wait longest or get the shortest visit. The intervention lands hardest on exactly the people the prediction identified as most fragile.',
    },
    {
      title: 'The Operational Reality',
      text: 'Overbooking prices in a miss that may not happen. When both patients arrive, the cost shows up as clinician overtime, a crowded waiting room, and a visit that runs short — which in behavioral health is not a neutral trade. A rushed or delayed session is a clinical cost, not just a satisfaction score.',
    },
  ],
  statement:
    'The alternative is duller and works better: shorten lead times, make rescheduling trivially easy, remove the barrier the patient actually has, and keep a live waitlist that can take a confirmed cancellation the same day. That recovers capacity without spending anyone’s goodwill.',
};

export const noShowMeasurement = {
  chip: 'Honest measurement',
  title: 'How to Measure No-Show Prediction Accuracy — and Why “90% Accurate” Means Nothing',
  description:
    'If roughly one appointment in five is missed, a model that simply predicts “everyone will show up” is about 80% accurate and completely worthless. Raw accuracy is the easiest number to quote and the least useful one to buy on. Here is what to ask any vendor for instead — including us.',
  tag: 'Ask for',
  items: [
    {
      title: 'Precision in the top-risk group',
      text: 'Of the appointments the model ranks highest, what share were actually missed? This is the number that tells your schedulers whether their calls are landing on the right visits.',
    },
    {
      title: 'Lift over calling at random',
      text: 'How much better is the model’s top group than the same number of appointments picked without it? If the answer is “a little”, the score is not worth the workflow change.',
    },
    {
      title: 'Calibration',
      text: 'When the model says 40%, do roughly 40 out of 100 of those appointments get missed? An uncalibrated score cannot be used to set thresholds, and thresholds are how staff time gets allocated.',
    },
    {
      title: 'Performance by program and by group',
      text: 'A model can look strong overall and fail on your evening clinic or your Spanish-speaking cohort. Aggregate figures hide exactly the failures that matter.',
    },
    {
      title: 'Results on your data, after go-live',
      text: 'Any figure produced on another organization’s population is marketing. We report measurement on your own scheduling history during implementation, and again once the model is live.',
    },
    {
      title: 'A holdout, so you can prove the outreach worked',
      text: 'Model quality and programme effect are different questions. Holding a random slice of flagged appointments out of the outreach workflow is the only way to know the calls — not the season — moved your rate.',
    },
  ],
  notPublished: {
    title: 'What we will not publish',
    items: [
      'A single headline accuracy percentage detached from a base rate and a measurement method.',
      'A promise that no-shows will be eliminated. They will not be. Some share of missed appointments reflects circumstances no reminder can reach.',
      'A reduction figure from one customer presented as what your practice should expect.',
    ],
  },
};

export const noShowSpecialty = {
  chip: 'Specialty fit',
  title: 'No-Show Prediction for Behavioral Health and Addiction Treatment',
  description:
    'Attendance in behavioral health is not the same operational object as attendance in a surgical clinic. Elixir models the distinctions that change what a missed visit means.',
  // \n reproduces the frame's hard line breaks.
  items: [
    {
      title: 'Group and IOP attendance',
      text: 'Scored per attendee against the group’s minimum census, so a facilitator knows the evening before whether a session is at risk of being too thin to run\n— not ten minutes after it was due to start.',
    },
    {
      title: 'Medication management and dosing',
      text: 'A missed dosing or medication management appointment is a clinical escalation in your protocol,\nnot a billing event. These route to the care team with\nthe clinical context attached.',
    },
    {
      title: 'Level-of-care requirements',
      text: 'PHP and IOP programs carry attendance thresholds\ntied to authorization and to the level of care itself. The score surfaces patients drifting toward a threshold while there is still time to intervene.',
    },
    {
      title: 'Mandated and supervised attendance',
      text: 'Court-ordered, probation-linked, and employer-mandated attendance has consequences outside your clinic. A missed visit needs a same-day response, and it is flagged as such.',
    },
    {
      title: 'Post-discharge and transitions',
      text: 'The first appointment after an inpatient or detox discharge is both the highest-risk and the highest-stakes visit in the episode. It is treated as its own category rather than as one follow-up among many.',
    },
    {
      title: 'Telehealth conversion',
      text: 'For many patients the barrier is the journey, not the\nvisit. Where your program and state rules permit it,\nconverting a high-risk in-person visit to telehealth is\nthe intervention with the highest yield per minute of\nstaff time.',
    },
  ],
};

export const noShowPlatform = {
  chip: 'Platform',
  title: 'Where No-Show Prediction Sits in the Elixir Platform',
  description:
    'Prediction is only useful where the schedule, the outreach, and the record are already in one place. Elixir is Salesforce-native, so the score is a field on the appointment rather than an export.',
  // Cards link only where the page exists.
  items: [
    {
      title: 'Scheduling & EHR',
      text: 'Risk bands are native to the appointment record, so schedulers filter, sort, and build worklists with the tools they already use.',
      to: '/electronic-health-record',
    },
    {
      title: 'Contact Center',
      text: 'Calls, SMS, and portal messages triggered by a flag are logged against the appointment, with the outcome visible to the next person who picks it up.',
      to: '/contact-center',
    },
    {
      title: 'Patient Portal',
      text: 'Confirmation, self-reschedule, and waitlist offers — the routes that let a patient fix the problem without waiting on hold.',
      to: '/patient-portal',
    },
    {
      title: 'KratuAI',
      text: 'The same AI engine behind Visit Prep, Kratu Co-Pilot, and Payor Policy Intelligence, under one governance model.',
      to: '/kratu-ai',
    },
    {
      title: 'Responsible AI',
      text: 'Documented exclusions, human-in-the-loop by design, and a model record your compliance team can actually read.',
      to: '/responsible-ai',
    },
    {
      title: 'No-Show ROI Calculator',
      text: 'Put your own numbers in before you talk to us, and see the arithmetic rather than a claim.',
      to: '/no-show-roi-calculator',
    },
  ],
};

// The FAQ uses the site's one FAQ design (the RCM accordion), so it differs from this frame's open
// cards. Items are ordered so each question stays in its frame column (left column first).
export const noShowFaq = {
  title: 'Patient No-Show Prediction: Frequently Asked Questions',
  description: 'The questions clinical operations leaders and compliance teams ask us first.',
  items: [
    {
      question: 'How accurate is patient no-show prediction?',
      answer:
        'There is no single accuracy number that means anything. Because most appointments are kept, a model that predicted “everyone will show” would score around 80% accurate and be completely useless. We report the measures that actually matter for scheduling work: how many of the appointments in the top-risk group are genuinely missed, how much better that is than calling patients at random, and whether a 40% risk score really means 40 misses in 100. We report those on your data after go-live, not from a brochure.',
    },
    {
      question: 'Will Elixir automatically overbook or cancel appointments?',
      answer:
        'No. The score ranks a worklist. Your staff decide who to call, what to offer, and whether to release a slot. Nothing is double-booked, moved, or cancelled by the system without a person doing it.',
    },
    {
      question: 'Does no-show prediction work for telehealth and group sessions?',
      answer:
        'Yes. Modality is one of the strongest signals in the score rather than something the score ignores — telehealth and in-person visits fail for different reasons. Group sessions are scored per attendee so the facilitator can see who is likely to be short, which matters when a group needs a minimum census to run.',
    },
    {
      question: 'Does the risk score use race, ethnicity, or insurance type?',
      answer:
        'No. Race, ethnicity, primary language, payer class, and ZIP code as a standalone factor are excluded from the model. Historical no-show data reflects who has reliable transport, childcare, and a flexible employer — so a model built without constraints will quietly rank the most disadvantaged patients as the least worth scheduling. The score is used to decide who gets extra help, never who gets less access.',
    },
    {
      question: 'How much appointment history do we need before the model is useful?',
      answer:
        'As a rule of thumb, about 12 months of scheduling history across the programs you want scored, so the model sees a full cycle of seasonality and enough kept-and-missed examples per visit type. Smaller programs can start on a shared baseline and shift to their own pattern as history accumulates.',
    },
    {
      question: 'Is our patient data used to train a model that other organizations use?',
      answer:
        'No. Your data trains your model and stays inside your Salesforce org, under your existing security model. Nothing leaves it to improve a shared model for other customers.',
    },
  ],
};

export const noShowCtaBand = {
  eyebrow: 'See it on your schedule',
  title: ['Find out what your no-show rate', 'is really costing you'],
  description:
    'Run your own numbers in the calculator, then let us show you the risk score running against a real behavioral health schedule — including how we would measure whether it worked.',
  // No destination in the frame: /request-demo, as on the other pages.
  cta: { label: 'Request a Demo', to: '/request-demo' },
  secondaryCta: { label: 'Open the No-Show ROI Calculator', to: '/no-show-roi-calculator' },
  related: [
    { label: 'Patient Portal', to: '/patient-portal' },
    { label: 'Contact Center', to: '/contact-center' },
    { label: 'Responsible AI', to: '/responsible-ai' },
  ],
};
