// Missed in the migration from the previous website (https://elixirehr.com/introduction-to-salesforce-health-cloud/): Rahul Gupta,
// 2020-05-15, "Salesforce Health Cloud". Body copy is exactly as supplied; headings, lists, bold runs and
// links follow the original page (its old test-drive CTA form is now Contact Us).
// Featured image, in-article screenshots, their alt text and the meta description are the
// original page's.
import featuredImage from '../../assets/posts/blog/introduction-to-salesforce-health-cloud.webp';
import imgAddictionManagementSolutionsWithoutTextMin11024x5361 from '../../assets/posts/blog/introduction-to-salesforce-health-cloud/Addiction-Management-Solutions-without-text-min-1-1024x536-1.webp';

const strong = (text) => ({ text, strong: true });

export default {
  title: 'Introduction to Salesforce Health Cloud',
  excerpt:
    'Salesforce Health Cloud is a cloud-based patient relationship management solution.',
  publishDate: '2020-05-15',
  author: 'Rahul Gupta',
  category: 'Salesforce Health Cloud',
  seo: {
    description:
      'Salesforce Healthcloud acts as a bridge that keeps all the information about the patient and connects various healthcare providers, doctors, and caregivers.',
  },
  cardImage: { src: featuredImage, alt: 'Salesforce Health Cloud' },
  heroImage: {
    src: featuredImage,
    alt: 'Salesforce Health Cloud',
    width: 1200,
    height: 628,
  },
  content: [
    {
      type: 'paragraph',
      text: 'Salesforce Health Cloud is a cloud-based patient relationship management solution. It enables patient’s medical history, diagnoses, treatment plans, immunization dates, allergies, and test results from admins to patients to specialists to get the information they need at any time and on any device. The primary objective of the Salesforce Health Cloud is to keep the complete view of the patient in one place and help in care coordination. In today’s time, health systems need to make the shift beyond revenue cycle management and electronic health records to organizations focused on patient relationships. Salesforce health cloud enables healthcare providers to get a 360-degree view of patient demographics, lifestyle, and health records to better serve.',
    },
    { type: 'heading', level: 2, text: 'Salesforce Health Cloud Core Capabilities:' },
    {
      type: 'paragraph',
      text: '1. Help treatment center staff to deliver the right care to the right patient at the right time.',
    },
    {
      type: 'paragraph',
      text: '2. Complete view of the patient. With the complete view of the patient healthcare providers have access to the right information about the patient including current information, appointments, and communication preferences.',
    },
    {
      type: 'paragraph',
      text: '3. Empower healthcare providers to go beyond health records and build a strong relationship with patients.',
    },
    {
      type: 'paragraph',
      text: '4. Make healthcare information more accessible, improving workflows and care outcomes.',
    },
    {
      type: 'paragraph',
      text: '5. Securely sharing information with patients and healthcare providers.',
    },
    {
      type: 'paragraph',
      text: '6. Improve patient and addiction treatment center interaction and communication.',
    },
    {
      type: 'paragraph',
      text: '7. Give healthcare professionals the tools they need to collaborate more efficiently.',
    },
    {
      type: 'paragraph',
      text: '8. Connect to patients with a single engagement platform that helps them access the right services faster and drives higher satisfaction.',
    },
    {
      type: 'paragraph',
      text: '9. Reduce operational costs and duplication of testing.',
    },
    {
      type: 'paragraph',
      text: '10. Enable healthcare providers to improve efficiency and meet their business goals.',
    },
    { type: 'heading', level: 3, text: 'Benefits of Health Cloud with IoT' },
    {
      type: 'paragraph',
      text: 'Let consider an example, a patient visits the nearby healthcare center. The on-duty doctor attends the patient and doesn’t know the patient visited the health center one week ago for the same ailment. It would be very helpful for the healthcare staff if the patient’s record is stored in one place which leads to better diagnosis and treatment. Salesforce Health Cloud collects the data from multiple sources, electronic devices, and stored at one place for smarter patient management.',
    },
    { type: 'heading', level: 3, text: 'Why Salesforce Health Cloud?' },
    {
      type: 'paragraph',
      text: 'Salesforce health cloud acts as a bridge that keeps all the information about the patient and connects various healthcare providers, doctors, nurses, and caregivers.',
    },
    { type: 'image', src: imgAddictionManagementSolutionsWithoutTextMin11024x5361, alt: 'Salesforce Health Cloud', width: 1024, height: 536 },
    { type: 'heading', level: 3, text: 'Salesforce provides the next level healthcare solution' },
    {
      type: 'paragraph',
      text: 'According to a survey, more than 65% of professionals say that care coordination is the biggest challenge in healthcare management, and it becomes too complex to manage the larger population with the common affliction while understanding that each case can often be unique. Salesforce has introduced some new features to take the healthcare solution next level. Some of them are as follows:',
    },
    {
      type: 'paragraph',
      text: [strong('Provider Search:'), ' This is a new search tool that allows patients to find out the best care solution for the patient and enables the searcher to enter relevant search criteria so that the best match is located.'],
    },
    {
      type: 'paragraph',
      text: [strong('Einstein for Healthcare:'), ' This newly released analytics solution for Healthcare Cloud includes prebuilt dashboards that measure industry KPIs such as length of referral time. The solution leverages tableau visual analytics platform. Unlike previous iterations of Einstein Analytics, such as Wave, this new solution does new required configuration or customization to deliver value.'],
    },
    {
      type: 'paragraph',
      text: [strong('Keynotes:')],
    },
    {
      type: 'paragraph',
      text: 'Salesforce Health Cloud offers a variety of features for the healthcare industry. This solution allows the treatment center staffs with end to end Patient Management Capabilities and optimizes the processes required for patient care. It offers a 360-degree view of the patient, from the first contact to the treatment process, all the information in one place. We understand the care journey from contact to treatment, wellness, and beyond. Therefore, the Salesforce Health Cloud is a next level healthcare solution in medical innovation.',
    },
  ],
};
