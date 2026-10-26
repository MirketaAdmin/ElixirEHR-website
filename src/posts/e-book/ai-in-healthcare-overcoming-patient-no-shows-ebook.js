// No-show e-book (by Lalit Mohan Gupta, February 13, 2025, "E-Book"). Body copy is exactly as
// supplied; the title, section headings and call-to-action line (lost from the supplied copy) are
// the ones on the live page, elixirehr.com/ai-in-healthcare-overcoming-patient-no-shows-ebook/,
// whose slug this keeps. "Download Your Free Copy" and the listing's download button serve the
// supplied PDF. TEMPORARY IMAGES: card-temp.jpg and hero-temp.jpg are photos taken from the
// e-book itself (cover and the "Impact of Patient No-Shows" page) until the final featured and
// banner images are supplied — replace the two files (or these imports) only.
import cardImage from '../../assets/posts/e-book/ai-in-healthcare-overcoming-patient-no-shows-ebook/card-temp.jpg';
import heroImage from '../../assets/posts/e-book/ai-in-healthcare-overcoming-patient-no-shows-ebook/hero-temp.jpg';
import ebookPdf from '../../assets/posts/e-book/ai-in-healthcare-overcoming-patient-no-shows-ebook/AI-in-Healthcare.pdf';

const strong = (text) => ({ text, strong: true });

export default {
  title: 'AI in Healthcare: Overcoming Patient No-Shows – The Invisible Cost',
  excerpt:
    'Discover how cutting-edge AI solutions are revolutionizing patient scheduling and reducing costly no-shows. This e-book dives into the financial, logistical, and clinical impacts of missed appointments—and shows how data-driven insights can help healthcare providers increase efficiency, minimize revenue loss, and deliver better patient care.',
  publishDate: '2025-02-13',
  author: 'Lalit Mohan Gupta',
  pages: 18,
  file: ebookPdf,
  cardImage: { src: cardImage, alt: 'Physician reviewing patient information on a tablet' },
  heroImage: {
    src: heroImage,
    alt: 'Clinician reviewing an X-ray with a patient in a clinic waiting area',
    width: 757,
    height: 324,
  },
  content: [
    { type: 'heading', level: 2, text: 'Transform Your Appointment Scheduling Process' },
    {
      type: 'paragraph',
      text: 'Discover how cutting-edge AI solutions are revolutionizing patient scheduling and reducing costly no-shows. This e-book dives into the financial, logistical, and clinical impacts of missed appointments—and shows how data-driven insights can help healthcare providers increase efficiency, minimize revenue loss, and deliver better patient care.',
    },

    { type: 'heading', level: 2, text: 'What You Will Find Inside:' },
    {
      type: 'list',
      items: [
        [strong('Healthcare Industry Overview:'), ' Understand the big-picture challenges around missed appointments.'],
        [
          strong('Impact of Patient No-Shows:'),
          ' Learn how no-shows disrupt workflows, reduce revenue, and affect patient outcomes.',
        ],
        [
          strong('Current Solutions & Their Pros/Cons:'),
          ' Explore traditional methods like reminder systems, overbooking, and patient education.',
        ],
        [
          strong('AI-Powered Scheduling:'),
          ' See how predictive analytics identifies high-risk no-shows and personalizes outreach.',
        ],
        [
          strong('Real-World Examples & Best Practices:'),
          ' Discover proven tactics clinics and hospitals use to reduce missed visits.',
        ],
        [
          strong('FAQs & Practical Tips:'),
          ' Get actionable advice for providers and patients to boost attendance rates.',
        ],
      ],
    },

    {
      type: 'cta',
      title: 'Ready to revolutionize your scheduling strategy?',
      action: {
        label: 'Download Your Free Copy',
        href: ebookPdf,
        download: 'AI-in-Healthcare.pdf',
      },
    },
  ],
};
