// Missed in the migration from the previous website (https://elixirehr.com/proactive-measures-for-addiction-recovery-ceos-during-coronavirus-pandemic/): Sivaprasad,
// 2020-05-04, "Addiction Recovery". Body copy is exactly as supplied; headings, lists, bold runs and
// links follow the original page (its old test-drive CTA form is now Contact Us).
// Featured image, in-article screenshots, their alt text and the meta description are the
// original page's.
import featuredImage from '../../assets/posts/blog/proactive-measures-for-addiction-recovery-ceos-during-coronavirus-pandemic.webp';

const strong = (text) => ({ text, strong: true });

export default {
  title: 'Proactive measures for Addiction recovery CEOs during Coronavirus pandemic',
  excerpt:
    'Coronavirus pandemic is one of the worst things that the world has seen in the past 100 years. Several measures are being taken to curb the effect of this pandemic by countries, regions, and even on an individual level.',
  publishDate: '2020-05-04',
  author: 'Sivaprasad',
  category: 'Addiction Recovery',
  seo: {
    description:
      'There are broadly 5 stages of addiction recovery and the final stage is maintenance. The present situation of self-isolation is more prone for people to relapse',
  },
  cardImage: { src: featuredImage, alt: 'addiction recovery' },
  heroImage: {
    src: featuredImage,
    alt: 'addiction recovery',
    width: 1272,
    height: 848,
  },
  content: [
    {
      type: 'paragraph',
      text: 'Coronavirus pandemic is one of the worst things that the world has seen in the past 100 years. Several measures are being taken to curb the effect of this pandemic by countries, regions, and even on an individual level. One of the basic measures that everyone in the world right now is taking is self-isolation and social distancing. This might seem normal for a lot of them, but for those of them in addiction recovery, this is nothing less than a ticking time bomb.',
    },
    {
      type: 'paragraph',
      text: 'There are broadly 5 stages of addiction recovery and the final stage is maintenance. The present situation of self-isolation is more prone for people to relapse. According to a research “How economic recessions and unemployment affect illegal drug use: A systematic realist literature review” which was published in the Internal Journal of drug policy, the results show a clear positive correlation between unemployment, social exclusion, and increase in drug use. The evidence suggests that there is an increase in times of recession and another economic austerity too.',
    },
    {
      type: 'paragraph',
      text: 'As there is a current recession going on with the markets crashing and the US hit all-time unemployment of around 22million, eventually, this might lead to serious societal problems like drug addiction and people to relapse. So eventually, addiction treatment centers in the US must be equipped with targeting and providing the right interventions.',
    },
    { type: 'heading', level: 2, text: 'Proactive measures the Addiction treatment center CEOs are taking in the US during COVID-19 pandemic:' },
    {
      type: 'paragraph',
      text: [strong('1. Training:'), ' Providing staff with the necessary information on prevention measures. Leverage the use of technology to manage the treatment center with very fewer interactions among staff.'],
    },
    {
      type: 'paragraph',
      text: 'A transition from in-person communication to paperless digital communication among stakeholders, which enables very little interaction between staff and patients. This even acts as a long-term substitute as this enhances efficiency and productivity inside the treatment center. This acts as the best solution for social distancing during the corona pandemic.',
    },
    {
      type: 'paragraph',
      text: [strong('2. Alumni Management:'), ' Including the alumni in the care-plan for anti-relapse programs to increase the satisfaction of your clients and the credibility of the treatment centers during the social distancing. This is in accordance with the risk of relapse being very high due to self-isolation for people who have been in control for a long period of time.'],
    },
    {
      type: 'paragraph',
      text: [strong('3. Equip:'), ' Giving the fundamental defensive gear to staff and presenting conventions for lessening the dangers of transmission to both staff and patients, including the utilization of physical hindrances to secure staff who interface with patients with obscure infection statuses.'],
    },
    {
      type: 'paragraph',
      text: [strong('4. Telehealth:'), ' Adapting telehealth practices to effectively manage your patients remotely and save from the risk of relapsing. To have the telehealth in place the treatment center should have an integrated scheduling mechanism to effectively use the resources.'],
    },
  ],
};
