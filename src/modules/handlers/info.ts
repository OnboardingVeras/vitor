import Koa from 'koa';
import Users from '../database/models/Users';

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
