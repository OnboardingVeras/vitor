import Server from './modules/server';
import Database from './modules/database/database';

const server = new Server();

const database = Database.getInstance();

database.connect();
database.dropDatabase();

server.startServer();
