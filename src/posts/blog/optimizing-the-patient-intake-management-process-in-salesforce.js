// Missed in the migration from the previous website (https://elixirehr.com/optimizing-the-patient-intake-management-process-in-salesforce/): Neeta,
// 2020-12-02, "Practice Management". Body copy is exactly as supplied; headings, lists, bold runs and
// the links follow the original page (its CTA went to the old test-drive form, now Contact Us).
// Featured image, in-article screenshots, their alt text and the meta description are the
// original page's.
import featuredImage from '../../assets/posts/blog/optimizing-the-patient-intake-management-process-in-salesforce.webp';
import imgPatientIntakeManagementSolution from '../../assets/posts/blog/optimizing-the-patient-intake-management-process-in-salesforce/patient-intake-management-solution.webp';
import imgPatientIntakeManagementProcessInSalesforce from '../../assets/posts/blog/optimizing-the-patient-intake-management-process-in-salesforce/patient-intake-management-process-in-salesforce.webp';
import imgSalesforcePatientEngagement from '../../assets/posts/blog/optimizing-the-patient-intake-management-process-in-salesforce/salesforce-patient-engagement.webp';
import imgHospitalManagementAppInSalesforce from '../../assets/posts/blog/optimizing-the-patient-intake-management-process-in-salesforce/hospital-management-app-in-salesforce.webp';

const strong = (text) => ({ text, strong: true });

export default {
  title: 'Optimizing the Patient Intake Management Process in Salesforce',
  excerpt:
    'When we talk about the patient intake process with respect to the healthcare industry, we basically refer to the sequence of events that take place until a person has been admitted as a patient in any facility.',
  publishDate: '2020-12-02',
  author: 'Neeta',
  category: 'Practice Management',
  seo: {
    description:
      'When we talk about the patient intake process with respect to the healthcare industry, we basically refer to the sequence of events that take place until a person has been admitted as a patient in any facility.',
  },
  cardImage: { src: featuredImage, alt: 'patient intake management process' },
  heroImage: {
    src: featuredImage,
    alt: 'patient intake management process',
    width: 1280,
    height: 758,
  },
  content: [
    { type: 'heading', level: 2, text: 'What is patient intake process?' },
    {
      type: 'paragraph',
      text: 'When we talk about the patient intake process with respect to the healthcare industry, we basically refer to the sequence of events that take place until a person has been admitted as a patient in any facility. Now, the actual intake process might be different in every healthcare facility – but the core essence of the process remains the same throughout.',
    },
    {
      type: 'paragraph',
      text: 'The basic Pre-Intake process in most healthcare organizations includes several tasks – it starts off with capturing the basic details of the patient, collecting and verifying insurance information, collecting copays and balances at the time of service, conducting pre-admission reviews and lastly collecting any other piece of information that might seem essential. The patient intake process further offers opportunities to engage with potential patients at a multitude of touch points in their care journey and also helps in providing a high-quality experience.',
    },
    { type: 'heading', level: 3, text: 'Components of the Patient Intake Process' },
    {
      type: 'paragraph',
      text: [strong('1. Basic Information:'), ' The first step in the patient intake process is the collection of basic demographic information of the potential patient. The information collected inherently depends on the kind of healthcare facility and may include several different collection parameters. Basic information generally includes the patient name, age, address, email, phone, and emergency contact information. As can be seen, this step is the definitely the most important in the intake process.'],
    },
    {
      type: 'paragraph',
      text: [strong('2. Verification of Benefits:'), ' The healthcare facilities next need to contact the insurance companies in order to confirm that a potential patient’s healthcare benefits cover the requested treatment.'],
    },
    {
      type: 'paragraph',
      text: 'Verifying the insurance coverage for a potential patient in advance allows the healthcare facilities in estimating the total patient responsibility for payment. When patients are informed of their estimated payment amount prior to appointments, they are far more likely to come to the appointment prepared to pay or make payment plans. When done right, the insurance verification process helps the healthcare facilities in avoiding claim rejections, denials, and bad debt.',
    },
    {
      type: 'paragraph',
      text: [strong('3. Payment Information Management:'), ' The payment information management involves collecting the required payment details for a patient. It involves cost of care calculation for patient bill estimation, maintaining payment schedules of a patient, ascertaining the options available for making payments and keeping a track of all the payments made by a patient.'],
    },
    {
      type: 'paragraph',
      text: [strong('4. Travel Management:'), ' Travel management takes care of travel booking related information made for incoming and outgoing patients. Hence, it helps the healthcare facilities in keeping a track of all the admits and discharges on a regular basis.'],
    },
    {
      type: 'paragraph',
      text: [strong('5. Patient Pre-assessment:'), ' The pre-admission assessment is the process of assessing a patient before any kind of treatment ensues. This process involves collection of information related to the treatment and medication history of an incoming patient. It also covers the substance and drug use history in many cases.'],
    },
    {
      type: 'paragraph',
      text: 'The information collected is then verified by all the relevant stakeholders at a healthcare facility and the treatment only starts once the details are verified and treatment is approved.',
    },
    {
      type: 'paragraph',
      text: [strong('6. Bed Allocation Management:'), ' Once all the required processes before admitting a patient are complete, a patient is then allocated an appropriate bed based on the type of treatment required.'],
    },
    { type: 'heading', level: 3, text: 'Repercussions of a flawed intake process' },
    {
      type: 'paragraph',
      text: 'The patient intake process plays a critical role in the operational, financial, and clinical success of healthcare facilities. The intake process in most healthcare facilities is inherently manual in nature and is plagued by several manual errors and redundant processes. These errors can pose significant threat to the efficient functioning of the facility and lead to significant problems in the overall care and treatment meted out to the patients.',
    },
    {
      type: 'paragraph',
      text: 'Collecting accurate demographic information of each and every incoming patient is very important. The basic information is generally considered as the source of truth when dealing with the patient and any error can cause significant problems later on. Insurance verification plays a major role in a hospital’s claims denial management program. Inadequate verification of eligibility and plan-specific benefits puts healthcare organizations at risk for claim rejections, denials, and bad debt. Lastly, errors in pre-admission assessment can lead to erroneous procedures and can severely impact the overall treatment meted out to the patients.',
    },
    { type: 'heading', level: 3, text: 'Elixir – The Ideal Patient Intake Management Solution' },
    {
      type: 'paragraph',
      text: 'Elixir is the one stop solution for optimizing the entire pre-intake process in your healthcare facility. Built on Salesforce, Elixir provides several capabilities that can optimize the patient intake process, hence ensuring profitability and significantly increasing the staff productivity.',
    },
    {
      type: 'paragraph',
      text: [strong('Elixir helps in optimizing the patient intake process in the following ways:')],
    },
    {
      type: 'paragraph',
      text: [strong('1. Basic Information:'), ' It is really very easy to collect and maintain the demographic information of a patient with Elixir. Since Elixir is built on Salesforce, the basic entities of Salesforce such as leads and opportunities can be used for maintaining patient information at different levels.'],
    },
    { type: 'image', src: imgPatientIntakeManagementSolution, alt: 'patient intake management', width: 900, height: 403 },
    {
      type: 'paragraph',
      text: 'The data related to all the qualified patients can be very easily captured at the opportunity level and the same information is available for every person across the entire organization without the need for maintaining multiple records of a single patient. Since there is a singular view of the patient for everyone at the facility, there are less chances of errors. The user can also track the changes made to the patient record and can rectify any erroneous information.',
    },
    {
      type: 'paragraph',
      text: [strong('2. Insurance Verification:'), ' Elixir helps in capturing the insurance details of the potential patients very efficiently. Once the insurance details are captured, Elixir can then be integrated with insurance companies for the verification of benefits. This advance verification of insurance details results in fewer claims being denied.'],
    },
    { type: 'image', src: imgPatientIntakeManagementProcessInSalesforce, alt: 'patient intake management', width: 966, height: 219 },
    {
      type: 'paragraph',
      text: ['Elixir has several inbuilt processes which help in keeping a track of the insurance details in various stages. These inbuilt processes help in automating the entire insurance verification process right from the stage of collection of insurance details up to the final step of approval of verification of benefits. There are several other ways in which Elixir helps with the Insurance Verification process and the same has been outlined in the blog: ', { text: 'Manage the Insurance Verification process and Reduce Claim Denials with Elixir.', strong: true, to: '/blog/manage-the-insurance-verification-process-and-reduce-claim-denials-with-elixir/' }],
    },
    {
      type: 'paragraph',
      text: [strong('3. Financial Census:'), ' Elixir effectively manages the basic inhouse patient billing process. The inbuilt Cost of Care calculator provides an estimate of the insurance and patient responsibilities. Elixir further enables in keeping a track of the payment information and helps in generating automated payment schedules.'],
    },
    {
      type: 'paragraph',
      text: 'With payment instalments designated for each patient, you can easily record every payment made and also send out missed payment alerts when needed. There are other inbuilt processes which provide advanced payment tracking capabilities as well.',
    },
    {
      type: 'paragraph',
      text: [strong('4. Travel Management:'), ' With Elixir, you can capture the travel details of all your incoming and outgoing patients. Be it flight, uber, train, or bus, Elixir can easily capture and maintain all the travel related information.'],
    },
    { type: 'image', src: imgSalesforcePatientEngagement, alt: 'patient intake management', width: 1084, height: 244 },
    {
      type: 'paragraph',
      text: 'The inbuilt alerts promptly notify the required people in case of travel arrangement confirmation for any patient or any missed bookings instances. You can also create tasks for relevant teams so that nothing goes amiss.',
    },
    {
      type: 'paragraph',
      text: [strong('5. Patient Pre-assessment:'), ' Elixir helps in effectively capturing the pre assessment details in terms of medication and treatment history. The user can also capture the substance and drug use details as required. The inbuilt flows ensure that all the relevant stakeholder are involved in the pre assessment verification process and the treatment only starts once the details are verified and the treatment is approved.'],
    },
    {
      type: 'paragraph',
      text: [strong('6. Census Management:'), ' Elixir helps in allocating appropriate beds to all the incoming patients based on the care level required and provides a detailed view of the entire facility census on a single screen. Elixir helps in keeping a track of the patient arrivals and discharges on a daily basis. Elixir also keeps a track of all the rooms and beds which cannot be assigned to patients due to certain maintenance reasons and sends real time alerts to the housekeeping teams regarding the maintenance requirements of the entire facility. There are several other ways in which Elixir makes bed management very easy and the same has been outlined in the blog: ', { text: 'Bed Management in Healthcare Industry.', strong: true, to: '/blog/bed-management-in-the-healthcare-industry/' }],
    },
    { type: 'image', src: imgHospitalManagementAppInSalesforce, alt: 'patient intake management', width: 1087, height: 492 },
    {
      type: 'paragraph',
      text: ['Elixir definitely has all the capabilities required in an ideal patient intake management system. Want to see how Elixir is the right fit for your organization? We can help you ', { text: 'take a test drive today!', strong: true, to: '/contact-us/' }],
    },
  ],
};
