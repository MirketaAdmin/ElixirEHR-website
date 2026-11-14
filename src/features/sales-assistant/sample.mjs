import { QUALIFICATION_FIELDS, validateChatRequest } from '../../../api/shared/contract.mjs';
import { nextQualificationField } from './conversation.mjs';

export function sampleReply(input) {
  const request = validateChatRequest(input);
  const text = request.messages.at(-1).content;
  let intent = 'explore';
  if (/\b(demo|book|sales|contact me)\b/i.test(text)) intent = 'demo';
  if (/\b(support|existing account|login|password)\b/i.test(text)) intent = 'support';
  if (/\b(no contact|don.?t contact|no thanks|not interested)\b/i.test(text)) intent = 'decline';
  const nextField = nextQualificationField(request.qualification, request.skipped);
  let answer = 'This is a sample reply. The live assistant will use reviewed Elixir information to discuss your needs and link to relevant product details.';
  if (intent === 'demo') answer = 'This is a sample demo handoff. You can review and edit your details below; this preview will not send a request or reserve a meeting.';
  else if (intent === 'support') answer = 'This is a sample support handoff. For an existing account, please use your organization’s established support contact. This preview cannot access accounts or patient information.';
  else if (intent === 'decline') answer = 'Of course. This sample conversation can continue without contact details.';
  else if (nextField) answer += ` ${QUALIFICATION_FIELDS[nextField]}`;
  return { answer, citations: [], qualification: {}, nextField, intent };
}
