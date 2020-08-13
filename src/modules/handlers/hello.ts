/* eslint-disable no-console */
import Koa from 'koa';

async function hello(ctx: Koa.Context) : Promise<void> {
  try {
    ctx.body = {
      status: 'sucess',
      message: 'funcionando',
    };
  } catch (error) {
    console.error(error);
  }
}

export default hello;
