/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { Products } = require('./db.js');

exports.getProducts = (req, res) => {
  return Products.find({}).exec()
    .then(data => res.status(200).send(data))
    .catch(err => res.status(500).send(err))
}

exports.createProduct = (req, res) => {
  return Products.create(req.body)
    .then(() => res.status(201))
    .catch(err => res.status(500).send(err))
}