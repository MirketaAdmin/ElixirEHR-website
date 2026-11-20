import { createServer } from 'node:http';
import { createChatHandler } from '../api/lib/chat-handler.mjs';

const handler = createChatHandler();
const server = createServer(async (req, res) => {
  const send = (status, body, headers = {}) => { res.writeHead(status, { 'Content-Type': 'application/json', 'Cache-Control': 'no-store', ...headers }); res.end(JSON.stringify(body)); };
  if (req.method !== 'POST' || req.url !== '/api/chat') return send(404, { error: 'Not found' });
  const chunks = []; let bytes = 0;
  try {
    for await (const chunk of req) {
      bytes += chunk.length;
      if (bytes > 32000) { send(413, { error: 'Please shorten your message.' }); return; }
      chunks.push(chunk);
    }
    const forwarded = typeof req.headers['x-forwarded-for'] === 'string' ? req.headers['x-forwarded-for'] : req.socket.remoteAddress ?? '';
    const result = await handler(JSON.parse(Buffer.concat(chunks).toString()), { headers: { 'x-forwarded-for': forwarded } });
    send(result.status, result.body, result.headers);
  } catch { send(400, { error: 'Invalid request.' }); }
});
server.listen(Number(process.env.ASSISTANT_API_PORT ?? 7071), '127.0.0.1', () => {
  console.log('Elixir assistant API listening on loopback. Request contents are not logged.');
});
