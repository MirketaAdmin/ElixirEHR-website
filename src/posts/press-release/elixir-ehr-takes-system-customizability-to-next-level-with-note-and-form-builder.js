// Press release from the previous website (https://www.elixirehr.com/elixir-ehr-takes-system-customizability-to-next-level-with-note-and-form-builder/).
// Copy as supplied, verbatim; bold and links as on the old page ("Contact us" linked to the old Take
// a Test Drive page, now /contact-us/). Image: the release's image on the old /press-release/
// listing, full-size original (it had no alt text; the title is used). The release carries its own
// "About Elixir", so the press-release defaults are switched off.
import featuredImage from '../../assets/posts/press-release/elixir-ehr-takes-system-customizability-to-next-level-with-note-and-form-builder/featured.jpg';

const strong = (text) => ({ text, strong: true });
const title = 'Elixir EHR takes system customizability to next level with Note and Form Builder';

export default {
  title,
  excerpt:
    'San-Ramon-based Elixir, makers of the first Practice Management Suite built on World’s #1 CRM and cloud solution, salesforce; widely used by facilities treating mental health, behavioural health, outpatient, residential and more, announced the release of their most awaited Note and form builder.',
  publishDate: '2021-10-12',
  category: null,
  about: null,
  mediaContact: null,
  cardImage: { src: featuredImage, alt: title },
  heroImage: { src: featuredImage, alt: title, width: 1200, height: 806 },
  content: [
    { type: 'paragraph', text: [strong('San Ramon, US, October 12, 2021')] },
    {
      type: 'paragraph',
      text: 'San-Ramon-based Elixir, makers of the first Practice Management Suite built on World’s #1 CRM and cloud solution, salesforce; widely used by facilities treating mental health, behavioural health, outpatient, residential and more, announced the release of their most awaited Note and form builder. This exclusive technology allows providers an easy and intuitive way to digitally create or recreate any and every note and form template and customize it according to their own needs. Elixir combines this unique ability with out of the box powerful Salesforce reporting abilities to deliver deep and real-time analytics across all the data being recorded on these notes and forms.',
    },
    {
      type: 'paragraph',
      text: 'One of the care team’s biggest challenges is the lengthy and time-consuming way of digitally registering patient notes. This problem is even worsened when the care team note taking procedure is interrupted or changed due to their practice management suite requirements. So the need of the day is to give the power of customizability in the hands of the healthcare providers so that they are not dependent on Software providers for their needs. This customizability has been strengthened by intuitive auto-text generation ability, which reduces the time taken for note-taking. Elixir takes it one step further by providing the care team the ability to upload and mark images and documents, enhancing internal communication and providing collaborative care.',
    },
    {
      type: 'paragraph',
      text: 'Previously, it was difficult to identify and aggregate metrics from this troll of data It required a skilled business analyst to extract data from multiple notes and forms and then create charts and graphs to communicate and analyze the information. With Elixir note and form builder, that time-consuming task is eliminated and replaced with powerful salesforce capabilities to series of actionable reports with a click of a button. With just a few easy clicks, relevant, timely information regarding data trends, vitals, treatment effectiveness, outcome measurement, and much more can be displayed and exported quickly to PDF for immediate evaluation or remedial action.',
    },
    {
      type: 'paragraph',
      text: '“The note-taking process of the care team is very crucial and time taking. It captures and stores a huge amount of critical information. We wanted to create an easier – and faster – means of aggregating, organizing, and making that data available and understandable — so staff at all levels can make better decisions, clinically and financially,’ said Pranshu Goyal, Elixir’s Product Head. “Working closely with our client-partners, we came to understand the scope and scale of their note-taking needs. Our development roadmap was based on these specialized requirements, and we’re very excited that we have been able to meet those needs, with particular emphasis on ease of use, speed, and customizability.',
    },
    {
      type: 'paragraph',
      text: 'We will continue to improve the Note builder feature to enhance this groundbreaking technology, enabling facilities to move forward in today’s challenging, ever-changing environment.”',
    },
    {
      type: 'paragraph',
      text: 'Rajeev Kumar, CEO of Elixir said: “We are launching this feature keeping in mind the growing demand for better note-taking functionalities. We as a company not only focus on innovation but also believe that it should be easy to use by our clients.”',
    },
    { type: 'paragraph', text: [strong('About Elixir:')] },
    {
      type: 'paragraph',
      text: 'Elixir is a California based leading enterprise software provider founded in 2016. They are headquartered in San Ramon, CA, and the Global Delivery Centre is located in Noida, India.',
    },
    {
      type: 'paragraph',
      text: 'Over the last five years, Elixir has managed to provide solution engagements to a wide array of healthcare providers, helping them transform their business and care giving process through better cloud CRM solutions, billing processes, better analytics capabilities and patient management solutions. Elixir’s customer base is companies of all sizes and types, including small and large practice providers, outpatient and inpatient facilities etc.',
    },
    {
      type: 'paragraph',
      text: 'Elixir Practice Management Suite is a comprehensive solution, built on Salesforce, consisting of four modules that fit rightly into your healthcare business irrespective of your facility size and type. The Elixir Contact Center module helps in managing the entire facility census and the patient intake process. At the same time, the Elixir EHR solution aims at delivering an end-to-end seamless patient care experience. The third module is Elixir Billing, and it effectively fetches data from any EHR platform to process medical claims and manages the entire revenue cycle. Elixir Patient Portal is the last module, and it provides an integrated experience for the patients.',
    },
    {
      type: 'paragraph',
      text: [{ text: 'Contact us', strong: true, to: '/contact-us/' }, ' to book a demo now!'],
    },
  ],
};
