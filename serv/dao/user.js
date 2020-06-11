const UserSchema = require('../schema/user');
const Base = require('./base');

class User extends Base {
  constructor() {
    super(UserSchema);
  }
}

module.exports = User;