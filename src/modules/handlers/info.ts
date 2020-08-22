import Koa from 'koa';
import Database from '../database/database';
import UsersSchema from '../database/shcemas/Users';

const database = Database.getInstance();
database.connect();

const db = database.db();

const Users = db.model('Users', UsersSchema);

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
