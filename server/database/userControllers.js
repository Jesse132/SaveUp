/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { Users } = require('./db.js');

exports.getUsers = (req, res) => {
  return Users.find({}).exec()
    .then(data => res.status(200).send(data))
    .catch(err => res.status(500).send(err))
}

exports.createUser = (req, res) => {
  return Users.create(req.body)
    .then(() => { res.status(201); console.log('User created') })
    .catch(err => res.status(500).send(err))
}

exports.verifyLogin = (req, res) => {
  return Users.findOne({ name: req.query.name }).exec()
    .then(data => data.password === req.query.password ? res.status(200).send(data) : res.send(false))
    .catch(err => res.status(500).send(err))
}

exports.addFunds = (req, res) => {
  const { _id, amount } = req.body;
  return Users.findByIdAndUpdate(_id, { $inc: {balance: amount }}, {new : true}).exec()
  .then((data) => res.status(200).send(data))
  .catch(err => res.status(500).send(err))
}