/* eslint-disable no-console */
import Koa from 'koa';

async function hello(ctx: Koa.Context) : Promise<void> {
  ctx.body = {
    status: 'sucess',
    message: 'funcionando',
  };
}

export default hello;
