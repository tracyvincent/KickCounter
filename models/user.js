var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

var UserSchema = new Schema({
  username: {type: String, required: true, index: {unique: true}},
  passwors: {type: String, required: true};
});












module.exports = mongoose.model('User', UserSchema);
