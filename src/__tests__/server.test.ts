import request from 'supertest';
import Server from '../modules/server';

const server = new Server();

test('test if server works', async () => {
  expect(async () => {
    await server.startServer();
    server.closeServer();
  }).not.toThrow(Error);
});

it('test GET method in \'/hello\' endpoint', async () => {
  await server.startServer();

  const response = await request((await server.getApp()).callback()).get('/hello');

  expect(response.status).toBe(200);
  expect(response.body.message).toBe('funcionando');

  server.closeServer();
});

it('test GET method in \'/info\' endpoint', async () => {
  await server.startServer();

  const response = await request((await server.getApp()).callback()).get('/info');

  expect(response.status).toBe(200);

  server.closeServer();
});
