export async function enableMocking() {
  await require('@/_mock/msw.polyfills');
  const { server } = await require('@/_mock/server');
  server.listen({
    onUnhandledRequest: 'bypass',
  });
}
