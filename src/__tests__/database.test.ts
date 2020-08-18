import Database from '../modules/database/database';

const database = new Database();

test('test if db connection works', async () => {
  expect(async () => {
    await database.connect();
    await database.closeConnection();
  }).not.toThrow(Error);
});
