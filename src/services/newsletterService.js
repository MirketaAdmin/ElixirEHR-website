// Sends "The Weekly Briefing" sign-up (Insights sidebar). The design defines no backend, so the
// endpoint is configured per environment (VITE_NEWSLETTER_ENDPOINT), like the contact form's.
import { PRIVATE_PREVIEW } from '../config/preview';
const endpoint = import.meta.env.VITE_NEWSLETTER_ENDPOINT;
export const NEWSLETTER_AVAILABLE = !PRIVATE_PREVIEW && Boolean(endpoint);

export async function subscribeToNewsletter(email) {
  if (!NEWSLETTER_AVAILABLE) {
    throw new Error('Newsletter subscriptions are unavailable in this environment.');
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
    signal: AbortSignal.timeout(10000),
  });

  if (!response.ok) {
    throw new Error(`Newsletter sign-up failed with status ${response.status}.`);
  }
}
