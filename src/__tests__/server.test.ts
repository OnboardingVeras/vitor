import request from 'supertest';
import Server from '../modules/server';

const server = new Server();

afterAll((done) => {
  server.close();
  done();
});

it('test GET method in \'/hello\' endpoint', async () => {
  server.startServer();

  const response = await request((await server.getApp()).callback()).get('/hello');

  expect(response.status).toBe(200);
  expect(response.body.message).toBe('funcionando');
});
