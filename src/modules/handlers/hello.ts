/* eslint-disable no-console */
async function hello(ctx) {
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
