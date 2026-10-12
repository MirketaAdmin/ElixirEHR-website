// DEMO CONTENT (dev only) — reproduces a placeholder card from the Figma Insights frames so the
// listing can be checked against the design. Replace with real posts in src/posts/webinars/<slug>.js.
import cardImage from '../../../assets/posts/webinars/_demo/demo-webinar-upcoming/card.png';
import speakerImage from '../../../assets/posts/webinars/_demo/demo-webinar-upcoming/speaker.png';

export default {
  title: "Mastering Diagnostic AI in Primary Care",
  excerpt: "Join Dr. Sarah Jenkins as she explores practical frameworks for integrating predictive diagnostic models into daily clinical workflows without disrupting patient\ncare.",
  publishDate: "2026-10-01",
  category: "Clinical AI",
  event: {"startDate": "2026-10-24T14:00:00-04:00", "timeLabel": "2:00 PM EST", "attendanceMode": "online"},
  speaker: { name: "Dr. Sarah Jenkins", role: "Chief Medical Information Officer", avatar: speakerImage },
  cardImage: { src: cardImage, alt: "Smiling clinicians gathered around a laptop" },
  content: [{"type": "lead", "text": "Join Dr. Sarah Jenkins as she explores practical frameworks for integrating predictive diagnostic models into daily clinical workflows without disrupting patient care."}],
};
