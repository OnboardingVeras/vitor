import Koa from 'koa';
import Users from '../database/models/Users';

async function createUsers() {
  await Users.create({
    name: 'Vitor F Dullens',
    age: 22,
    bio: 'Estudante de Ciência da Computação',
  });
}

async function info(ctx: Koa.Context) : Promise<void> {
  await createUsers();
  ctx.body = {
    users: await Users.find(),
  };
}

export default info;
