import Users from '../modules/database/models/Users';
import Database from '../modules/database/database';

beforeAll(async () => {
  await Database.setConnection();
});

afterAll(async () => {
  await Database.closeConnection();
});

test('create Users', async () => {
  async function createUsers() {
    await Users.create({
      name: 'Vitor F Dullens',
      age: 22,
      bio: 'Estudante de Ciência da Computação',
    });
  }
  await createUsers();
  const user = await Users.findOne({ name: 'Vitor F Dullens' });
  expect(user).toBeTruthy();
});
