import request from 'supertest';

import Server from '../modules/server';
import Database from '../modules/database/database';
import Users from '../modules/database/models/Users';

const database = Database.getInstance();
const server = new Server();

beforeAll(async () => {
  await server.startServer();
  await database.connect();
});

afterAll(async () => {
  await database.dropDatabase();
  await database.closeConnection();
  await server.closeServer();
});

test('create Users', async () => {
  await request((await server.getApp()).callback()).get('/info');
  const user = await Users.findOne({ name: 'Vitor F Dullens' });
  expect(user).toBeTruthy();
});
