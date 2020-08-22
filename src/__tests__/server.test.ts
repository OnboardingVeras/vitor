import request from 'supertest';
import Server from '../modules/server';
import Database from '../modules/database/database';

const server = new Server();
const database = Database.getInstance();

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
  await database.connect({ useNewUrlParser: true, useUnifiedTopology: false });

  const response = await request((await server.getApp()).callback()).get('/info');

  expect(response.status).toBe(200);
  await database.closeConnection();
  server.closeServer();
});
