import request from 'supertest';
import Server from '../modules/server';
import Users from '../modules/database/models/Users';

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
  const users = await Users.find();
  expect(JSON.stringify(response.body.users)).toBe(JSON.stringify(users));
  expect(response.status).toBe(200);
});
