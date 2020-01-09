const User = require('../schema/user');
const Base = require('./base');

class User extends Base {
  constructor() {
    super(User);
  }
}

module.exports = User;