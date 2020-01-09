/**
 *  记录访问时间
 * @param {*} ctx 
 * @param {*} next 
 */
async function resTime(ctx, next) {
  const startTime = Date.now();
  await next();
  let endTime = Date.now();
  const resTime = endTime - startTime;
  let log = visitlog(ctx);
  console.log(`${log}\tresTime: ${resTime}ms`);
}

/**
 *  记录访问日志
 * @param {*} ctx 
 * @param {*} next 
 */
function visitlog(ctx) {
  // 日志格式 url:clientIp:resTime
  let cilentIp = ctx.ip;
  let host = ctx.host;
  let protocal = ctx.protocal;
  let origin = ctx.origin;
  let href = ctx.href;
  let originalUrl = ctx.originalUrl;
  let log = `url: ${href}\tip: ${cilentIp}`;
  return log;
}

module.exports = {
  resTime
}