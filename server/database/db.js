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
  description: String,
  amount: Number,
  owner: String,
  date: Date
})

const workSchema = new mongoose.Schema({
  work: String,
  description: String,
  payment: Number,
  requestor: String,
  requestorID: String,
  Contact: String,
  worker: String,
  date: Date
})

var Users = mongoose.model('Users', userSchema);
var Entries = mongoose.model('Entries', entrySchema);
var Work = mongoose.model('Work', workSchema);

module.exports = { Users, Entries, Work }