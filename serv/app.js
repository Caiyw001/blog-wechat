const Koa = require('koa');
const KoaBody = require('koa-body');
const { router, routerInit } = require('./router');
const config = require('config');
const init = require('./init/index');
const { resTime } = require('./middlewares/visitlog');
const app = new Koa();

main();

async function main() {
  await init();
  routerInit();

  app.use(KoaBody());
  app.use(resTime);
  app.use(router.routes());

  app.on('error', (error, ctx) => {
    console.log(error);
    ctx.throw(500, { code: -1, message: error.message });
  })

  app.listen(process.env.port || config.port, () => {
    console.log('koa is runing');
  })
}

