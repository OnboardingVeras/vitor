import request from 'supertest';
import Server from '../modules/server';

const server = new Server();

afterAll(async () => {
  server.closeServer();
  server.closeServer();
  server.closeServer();
});

test('test if server works', async () => {
  expect(async () => {
    await server.startServer();
  }).not.toThrow(Error);
});

it('test GET method in \'/hello\' endpoint', async () => {
  await server.startServer();

  const response = await request((await server.getApp()).callback()).get('/hello');

  expect(response.status).toBe(200);
  expect(response.body.message).toBe('funcionando');
});

it('test GET method in \'/info\' endpoint', async () => {
  await server.startServer();

  const response = await request((await server.getApp()).callback()).get('/info');

  expect(response.status).toBe(200);
});
