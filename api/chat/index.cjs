let handler;
module.exports = async function (context, req) {
  handler ??= import('../lib/chat-handler.mjs').then(({ createChatHandler }) => createChatHandler());
  const result = await (await handler)(req.body);
  context.res = { status: result.status, headers: result.headers, body: result.body };
};
