const Koa = require('koa');
const config = require('config');
const init = require('./init/index');
const { resTime } = require('./middlewares/visitlog');
const app = new Koa();

main();

async function main() {
  await init();

  app.use(resTime);
  app.use(async (ctx, next) => {
    ctx.body = { name: 'caiyw', age: 28, sex: 'man' };
  })

  app.on('error', (error, ctx) => {
    console.log(error);
    ctx.throw(500, { code: -1, message: error.message });
  })

  app.listen(process.env.port || config.port, () => {
    console.log('koa is runing');
  })
}

