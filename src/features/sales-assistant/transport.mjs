import { normalizeChatReply, validateChatRequest } from '../../../api/shared/contract.mjs';
import { sampleReply } from './sample.mjs';

export function resolveAssistantMode({ requested, dev = false, preview = false, hostedPreview = false, hostname = '' } = {}) {
  if (requested === 'off') return 'off';
  if (preview && requested === 'hosted' && hostedPreview === true && hostname === 'thankful-mud-07aadb71e-latest.westus2.3.azurestaticapps.net') return 'hosted';
  if (preview) return dev || ['sample', 'hosted'].includes(requested) ? 'sample' : 'off';
  if (requested === 'hosted') return 'hosted';
  return dev && (!requested || requested === 'sample') ? 'sample' : 'off';
}

export async function requestReply(body, { mode, signal, fetchImpl = fetch } = {}) {
  signal?.throwIfAborted();
  const request = validateChatRequest(body);
  if (mode === 'sample') return sampleReply(request);
  if (mode !== 'hosted') throw new Error('The assistant is not available here.');
  let response;
  try {
    response = await fetchImpl('/api/chat', { method: 'POST', credentials: 'same-origin', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(request), signal });
  } catch (error) {
    if (error.name === 'AbortError') throw error;
    throw new Error('I couldn’t get a reply. Please try again or use Contact Us.');
  }
  if (response.status === 429) {
    // The API's own sanitized message: the per-visitor limit points to the discovery call.
    const limit = await response.json().catch(() => null);
    throw new Error(limit?.code === 'PLEASE_WAIT' && typeof limit.error === 'string' && limit.error.trim() && limit.error.length <= 300 ? limit.error : 'The assistant is busy. Please wait a moment and try again.');
  }
  if (!response.ok) throw new Error('The assistant is temporarily unavailable. Please try again or use Contact Us.');
  const value = await response.json();
  const citations = Array.isArray(value.citations) ? value.citations.filter((source) => source && typeof source.id === 'string' && typeof source.url === 'string') : [];
  return normalizeChatReply({ ...value, citationIds: citations.map((source) => source.id) }, citations);
}
