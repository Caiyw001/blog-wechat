const mongoose = require('mongoose');
const configDB = require('config').mongodb;

/**
 * 初始化数据库连接
 */
async function init() {
  await mongoose.connect(configDB.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 2 * 1000,
    auth: {
      user: configDB.user,
      password: configDB.password
    }
  });

  const conn = mongoose.connection;
  conn.on('error', (error) => {
    console.error(error)
  });
}

module.exports = {
  mongoose,
  init
};