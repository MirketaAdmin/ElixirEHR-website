// Populate only after the product owner approves an entry. Do not auto-import marketing copy.
export const approvedKnowledge = [];

export function retrieveKnowledge(messages, entries = approvedKnowledge, { review = false } = {}) {
  const text = messages.slice(-5).map((message) => message.content).join(' ').toLowerCase();
  const terms = [...new Set(text.match(/[a-z0-9]{3,}/g) ?? [])].slice(0, 100);
  return entries.filter((entry) => (entry.status === 'approved' || (review && entry.status === 'draft')) && entry.owner && /^\d{4}-\d{2}-\d{2}$/.test(entry.reviewedAt ?? '') && typeof entry.content === 'string' && entry.content.length <= 3000 && /^https:\/\//.test(entry.url ?? '') && typeof entry.id === 'string')
    .map((entry) => ({ entry, score: terms.reduce((sum, term) => sum + (`${entry.title} ${entry.content}`.toLowerCase().includes(term) ? 1 : 0), 0) }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score).slice(0, 4).map(({ entry }) => entry);
}
