/* eslint-disable no-unreachable */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const { Users, Entries } = require('./db.js');

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
    .then(data => {
      if (data && data.password === req.query.password) {
        res.status(200).send(data);
      } else {
        res.send(false)
      }
    })
    .catch(err => res.status(500).send(err))
}

exports.addFunds = (req, res) => {
  const { _id, amount } = req.body;
  return Users.findByIdAndUpdate(_id, { $inc: { balance: amount } }, { new: true }).exec()
    .then((data) => res.status(200).send(data))
    .catch(err => res.status(500).send(err))
}

exports.addGoal = (req, res) => {
  const { _id, goal } = req.body;
  return Users.findByIdAndUpdate(_id, { goal: goal }, { new: true }).exec()
    .then((data) => res.status(200).send(data))
    .catch(err => res.status(500).send(err))
}

exports.getEntries = (req, res) => {
  return Entries.find({ owner: req.query.owner }).exec()
    .then(data => res.status(200).send(data))
    .catch(err => res.status(500).send(err))
}

exports.createEntry = (req, res) => {
  return Entries.create(req.body)
    .then(() => {
      return Users.findByIdAndUpdate(req.body.owner, { $inc: { balance: req.body.amount } }, { new: true }).exec()
        .then(data => res.status(200).send(data))
    })
    .catch(err => res.status(500).send(err))
}

