const Router = require('koa-router');
const User = require('../dao/user');
const router = new Router();

async function routerInit() {
  router.get('/user', async (ctx, next) => {

  });

  router.post('/user', async (ctx, next) => {
    const { name, age } = ctx.request.body;
    const user = new User();
    await user.create({ Name: name, Age: age });
    ctx.body = { code: 0, msg: 'create user is successful !' };
  })
}

module.exports = { router, routerInit };