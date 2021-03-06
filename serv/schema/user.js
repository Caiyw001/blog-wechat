const { mongoose } = require('../dao/db');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  Name: String,
  Age: Number,
  Sex: Number,
  Nick: String,
  Phone: String,
  Fans: [String]
}, {
  versionKey: false
});

const User = mongoose.model('user', UserSchema, 'user');

module.exports = User;