const mongoClient = require('../dao/db');

async function init() {
  // 1、数据库连接初始化
  await mongoClient.init();
  console.log('mongodb connectin is success');
}

module.exports = init;