let handler;
module.exports = async function (context, req) {
  handler ??= import('../lib/chat-handler.mjs').then(({ createChatHandler }) => createChatHandler());
  // Headers identify the client address for the per-client limit; nothing from the request is logged.
  const result = await (await handler)(req.body, { headers: req.headers ?? {} });
  context.res = { status: result.status, headers: result.headers, body: result.body };
};
