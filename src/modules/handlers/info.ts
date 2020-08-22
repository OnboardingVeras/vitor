import Koa from 'koa';
import Database from '../database/database';
import Users from '../database/models/Users';

const database = Database.getInstance();
database.connect();

async function createUsers() {
  await Users.create({
    name: 'Vitor F Dullens',
    age: 22,
    bio: 'Estudante de Ciência da Computação',
  });
}

async function getAllUsers() {
  return Users.find();
}

createUsers();

async function info(ctx: Koa.Context) : Promise<void> {
  ctx.body = await getAllUsers();
}

export default info;
