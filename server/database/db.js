/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/SaveUp')

const userSchema = new mongoose.Schema({
  name: String,
  password: String,
  email: String,
  balance: Number,
  goal: Number,
});

const entrySchema = new mongoose.Schema({
  item: String,
  description: String,
  amount: Number,
  owner: String,
  date: Date
})

var Users = mongoose.model('Users', userSchema);
var Entries = mongoose.model('Entries', entrySchema);

module.exports = { Users, Entries }