const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const UserSchema = new Schema({
  email: { type: String, required: true , unique: true},
  name: { type: String, required: true }, 
  password: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const user= mongoose.model('UserSchema', UserSchema);
user.createIndexes();
module.exports = user;
