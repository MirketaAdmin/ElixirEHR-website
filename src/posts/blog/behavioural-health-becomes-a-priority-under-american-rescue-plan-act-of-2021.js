// Missed in the migration from the previous website (https://elixirehr.com/behavioural-health-becomes-a-priority-under-american-rescue-plan-act-of-2021/): Bhavesh Singla,
// 2021-09-02, "Behavioural Health". Body copy is exactly as supplied; headings, lists, bold runs and
// the CTA link follow the original page (its CTA went to the old test-drive form, now Contact Us).
// Featured image, its alt text and the meta description are the original page's.
import featuredImage from '../../assets/posts/blog/behavioural-health-becomes-a-priority-under-american-rescue-plan-act-of-2021.webp';

const strong = (text) => ({ text, strong: true });

export default {
  title: 'Behavioural Health becomes a priority under American Rescue Plan Act of 2021',
  excerpt:
    'The world changed in 2020 as the COVID 19 pandemic affected the people and economy very badly.',
  publishDate: '2021-09-02',
  author: 'Bhavesh Singla',
  category: 'Behavioural Health',
  seo: {
    description:
      'The American Rescue Plan extends the current grant offerings by HHS and SAMHSA by providing additional funding. Listed below are some specific provisions.',
  },
  cardImage: { src: featuredImage, alt: 'Behavioral Health' },
  heroImage: {
    src: featuredImage,
    alt: 'Behavioral Health',
    width: 1379,
    height: 645,
  },
  content: [
    {
      type: 'paragraph',
      text: 'The world changed in 2020 as the COVID 19 pandemic affected the people and economy very badly. While the demand for mental health and addiction treatment services increased by 67%, still 40% of mental health and addiction treatment organizations reported less than one-year financials under the situation. It was evident that organizational viability and access to care for millions is at risk. To counter this, United States President Joe Biden signed the American Rescue Plan Act of 2021, a $1.9 Trillion Economic Stimulus package to speed up the economic recovery of the Covid-19 pandemic hit industries of United States while also looking at health effects.',
    },
    {
      type: 'paragraph',
      text: 'The Act aims to help U.S. citizens recover from the hardships of the Covid-19 pandemic. With $3.5 Billion allocated from American Rescue Plan, the Health Resources and Services Administration plans to expand access to vital behavioural health services wherein people are not incarcerated for drug use; rather, they are offered treatment. With $1.5 billion allocated to mental health block grants and substance abuse use disorder block grants each, ONDCP has prioritised evidence-based treatment and harm reduction efforts with focus on reducing the supply of illicit substances and expanding accessibility of recovery support services. Further, $200 million have been granted for educating and training healthcare personnel. The Act also provides $170 million for promoting behavioural and mental health; and preventing overdose of substances.',
    },
    {
      type: 'paragraph',
      text: 'While the Act itself is pretty broad, we have tried to summarize the pointers that are helpful for Substance abuse and mental health providers. The American Rescue Plan extends the current grant offerings by HHS and SAMHSA by providing additional funding. Listed below are some specific provisions:',
    },
    {
      type: 'paragraph',
      text: [strong('Substance Abuse and Mental Health Services Administration (SAMHSA) Block Grants:'), ' The Act added $1.5 Billion for the Substance Abuse Prevention and Treatment block grant; and $1.5 Billion for the Community Mental Health Services block grant. So a total of $3 Billion has been added for SAMHSA block grants. Some of the programs funded include:'],
    },
    {
      type: 'paragraph',
      text: [strong('HUD/USDA Recovery Housing Assistance:'), ' This program allows states to provide transitional housing to individuals recovering from a substance use disorder. The Recovery Housing Program (RHP) will enable states and the District of Columbia to provide stable, transitional housing for individuals recovering from a substance use disorder.'],
    },
    {
      type: 'paragraph',
      text: [strong('Certified Community Behavioural Health Clinics (CCBHCs):'), ' The Act added $420 million to SAMHSA to fund CCBHC Expansion Grants. It enables non-profit organizations to provide complete 24/7 access to community-based mental and substance abuse disorder services, treatment of co-occurring disorders, and physical healthcare in one location.'],
    },
    {
      type: 'paragraph',
      text: [strong('Provider Relief Funds:'), ' The Relief Fund has reached a total of $178 billion with a newly added $8.5 billion for providers in rural areas and serving rural communities. The Provider Relief Fund reimburses the healthcare providers for the lost revenue due to COVID-19 and other related expenses, including reimbursements for testing and treating uninsured individuals for COVID-19. SUD providers were specifically made eligible.'],
    },
    {
      type: 'paragraph',
      text: [strong('Other Mental Health/Substance Use Disorder Funding:'), ' More than $450 million has been added in additional funding for SAMHSA and Health Resources and Services Administration (HRSA) programming, including funding for mental health and addiction services, workforce education and training, suicide prevention, and public education campaigns. Some of the programs funded include:'],
    },
    {
      type: 'paragraph',
      text: [strong('Substance Use Disorder Workforce Loan Program:'), ' Offered under National Health Service Corps, this program offers clinicians up to $75,000 to help repay student loans in exchange for a three-year commitment to provide substance use disorder treatment services at NHSC approved sites. The program’s goal is to recruit qualified providers to this underserved healthcare area to increase patients’ access to SUD treatment.'],
    },
    {
      type: 'paragraph',
      text: [strong('TeleHealth Program Reimbursements:'), ' $200 million in funding has been appropriated by Congress as part of the Coronavirus Aid, Relief, and Economic Security (CARES) Act, to help health care providers provide connected care services to patients at their homes or mobile locations in response to the COVID-19 pandemic. The COVID-19 Telehealth Program offers immediate support to eligible health care providers responding to the COVID-19 pandemic by fully funding their telecommunications services, information services, and devices necessary to provide critical connected care services.'],
    },
    {
      type: 'paragraph',
      text: 'At Elixir, we understand the need of healthcare organizations to know the status of their reimbursements and manage their billing cycles without a hitch. Elixir helps in effectively keeping track of all the payments or reimbursements, send real-time notifications, and intelligent automation that helps fill in the right details at the right time.',
    },
    {
      type: 'paragraph',
      text: 'Apart from the aspects mentioned above, Elixir’s Telehealth solution is uniquely integrated to facilitate telehealth video calls, schedule appointments, and send reminders.',
    },
    {
      type: 'paragraph',
      text: 'Elixir Practice Management Suite is a comprehensive solution consisting of four modules that fit rightly into your healthcare business irrespective of your facility size and type. The Elixir Contact Center module helps in managing the entire facility census and the patient intake process. At the same time, the Elixir EHR solution aims at delivering an end-to-end seamless patient care experience. The third module is Elixir Billing, and it effectively fetches data from any EHR platform to process medical claims and manages the entire revenue cycle. Elixir Patient Portal is the last module, and it provides an integrated experience for the patients.',
    },
    {
      type: 'paragraph',
      text: ['Do fill out this ', { text: 'contact form', strong: true, to: '/contact-us/' }, ' if you feel that Elixir will be an asset to streamline your caregiving process.'],
    },
  ],
};
