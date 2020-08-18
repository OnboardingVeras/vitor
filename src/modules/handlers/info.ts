import Koa from 'koa';
import Database from '../database/database';

const database = new Database();

async function info(ctx: Koa.Context) : Promise<void> {
  const Users = await database.getAllUsers();
  ctx.body = Users;
}

export default info;
