const Koa = require('koa');
const config = require('config');
const app = new Koa();

app.use(async (ctx, next) => {
  ctx.body = { name: 'caiyw', age: 28, sex: 'man' };
})

app.listen(process.env.port || config.port, () => {
  console.log('koa is runing');
})