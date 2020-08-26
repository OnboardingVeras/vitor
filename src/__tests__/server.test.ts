import request from 'supertest';
import Server from '../modules/server';

const server = new Server();

beforeAll(async () => {
  await server.startServer();
});

afterAll(async () => {
  await server.closeServer();
});

it('test GET method in \'/hello\' endpoint', async () => {
  const response = await request((await server.getApp()).callback()).get('/hello');

  expect(response.status).toBe(200);
  expect(response.body.message).toBe('funcionando');
});

it('test GET method in \'/info\' endpoint', async () => {
  const response = await request((await server.getApp()).callback()).get('/info');

  expect(response.status).toBe(200);
});
