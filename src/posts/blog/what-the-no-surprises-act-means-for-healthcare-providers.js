// No Surprises Act blog post (by Bhavesh Singla, May 14, 2026, "Healthcare Provider"). Body copy is
// exactly as supplied; "contact form" links to the Contact Us page. TEMPORARY IMAGES: card-temp.jpg
// and hero-temp.jpg are cropped from the Why Elixir page photo until the final featured and banner
// images are supplied — replace the two files (or these imports) only.
import cardImage from '../../assets/posts/blog/what-the-no-surprises-act-means-for-healthcare-providers/card-temp.jpg';
import heroImage from '../../assets/posts/blog/what-the-no-surprises-act-means-for-healthcare-providers/hero-temp.jpg';

const strong = (text) => ({ text, strong: true });

export default {
  title: 'What the ‘No surprises Act’ means for Healthcare Providers?',
  excerpt:
    'The ‘No Surprises Act’ was proposed in July 2020 and signed into law in December 2020. It has been designed keeping in mind patient protection against the surprise billing to patients by Emergency and non-emergency service providers.',
  publishDate: '2026-05-14',
  author: 'Bhavesh Singla',
  category: 'Healthcare Provider',
  cardImage: { src: cardImage, alt: 'Clinicians and administrators reviewing billing information on a tablet' },
  heroImage: {
    src: heroImage,
    alt: 'Clinicians and administrators reviewing billing information on a tablet',
    width: 757,
    height: 324,
  },
  content: [
    {
      type: 'paragraph',
      text: 'The ‘No Surprises Act’ was proposed in July 2020 and signed into law in December 2020. It has been designed keeping in mind patient protection against the surprise billing to patients by Emergency and non-emergency service providers. The Act focuses majorly on improving access to care and protecting consumers from the costs associated with unanticipated out-of-network medical bills by mandating fee and coverage transparency from providers and health plans. In addition to balance billing, the no Surprises Act also lays out guidelines for dispute handling between service providers and health care plan providers. The Act aims to make patients held liable only for in-network cost-sharing, which will leave providers and insurers to negotiate reimbursement.',
    },
    {
      type: 'paragraph',
      text: 'With key parts of the No Surprises Act coming into force from January 1, 2022, the out-of-network hospitals, free-standing emergency facilities, OON Air ambulance services, OON providers of inpatient and outpatient services at or for in-network acute care and critical access hospitals, and ambulatory surgery centers will be prohibited from balance billing a patient more than the patient would have been billed had he/she been in the patient’s health plan network.',
    },
    {
      type: 'paragraph',
      text: 'With a few exceptions, most facility-based services provided by OON service providers will be covered as in-network. Some OON facility-based providers will be allowed to balance bills if they prematurely notify the patient that they are OON and the fees for that will be charged prior to treatment. Those providers will also have to get the balance bill consent signed by the patients prior to the treatment.',
    },
    {
      type: 'paragraph',
      text: 'A critical element of balance billing prohibitions is how the cost of share for patients is calculated. It has been decided that the patient’s in-network co-insurance for an OON emergency or provider’s services is to be calculated based on the ‘Recognized Amount’ for the service rendered. The recognized amount is either the service amount as recognized by the State’s surprise billing law or ‘All Payer’ rate-setting model of the state. If neither of the conditions match, then the recognized amount is treated as the ‘Qualifying Amount’ which is the median of a plan’s contracted rates on January 31, 2019, that are recognized by the plan as total maximum payment for the service furnished by a provider in the same speciality or same geographic region where OON service was provided.',
    },
    {
      type: 'paragraph',
      text: 'The reimbursement amounts for OON providers by the health plans can either be reached at a consent by both the parties or the they can raise an Independent Dispute Resolution (IDR), which is conducted by a CMS-approved IDR entity by appointing arbiter to decide on the final amount the payer has to pay to the provider. The IDR being a ‘baseball-style’ arbitration method will call for both provider and payer to offer a payment amount which the independent arbitrator will choose of one or the other. Since consumers are being removed from the discussion, the providers will likely be picking up the slack, adding to the financial worry caused by the Covid-19 pandemic. Here are some suggestions on how the providers can prepare their Revenue Cycle Management for staying ahead of the game:',
    },
    {
      type: 'list',
      items: [
        [
          strong('Setup processes to end balance billing:'),
          ' The physicians should familiarize themselves with states balance billing protections and establish processes that ensure that your patients are balance billed.',
        ],
        [
          strong('Ready for estimates:'),
          ' Providers should train the staff to provide high-quality estimates. The compliance with civil monetary penalties should also be looked by the providers.',
        ],
        [
          strong('Costly Cost of Arbitration:'),
          ' The cost of arbitration won’t be free, so providers need to make plans to help them make smart choices in dispute resolution.',
        ],
        [
          strong('Keep up with the details:'),
          ' Since the Act is relatively new, so finer points of details will be emerging over time like the reduction in new in-network rates as per CBO. Hence should be considered by the providers during rule-making period.',
        ],
      ],
    },
    {
      type: 'paragraph',
      text: 'At Elixir, we understand healthcare organizations’ needs, which is why we have developed for you a one-stop solution for all your patient billing needs. As medical billing and coding become more complex, Elixir will work as a resource and support to easily walk you through these changes.',
    },
    {
      type: 'paragraph',
      text: 'Elixir Practice Management Suite is a comprehensive solution consisting of four modules that fit rightly into your healthcare business irrespective of your facility size and type. The Elixir Contact Center module helps in managing the entire facility census and the patient intake process. At the same time, the Elixir EHR solution aims at delivering an end-to-end seamless patient care experience. The third module is Elixir Billing, and it effectively fetches data from any EHR platform to process medical claims and manages the entire revenue cycle. Elixir Patient Portal is the last module, and it provides an integrated experience for the patients.',
    },
    {
      type: 'paragraph',
      text: [
        'Do fill out this ',
        { text: 'contact form', to: '/contact-us' },
        ' if you feel that Elixir will be an asset to streamline your patient billing process.',
      ],
    },
  ],
};
