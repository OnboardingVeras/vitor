import Server from './modules/server';
import Database from './modules/database/database';

const server = new Server();

const database = new Database();

database.connect();
database.dropDatabase();
database.createUser({
  name: 'Vitor F Dullens',
  age: 22,
  bio: 'Estudante de Ciência da Computação',
});

server.startServer();
