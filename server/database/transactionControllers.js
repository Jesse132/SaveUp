/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { Users, Products } = require('./db.js');

//find product from list
//find buyer
//add product to buyer collections
//subtract price from buyer
//find seller
//add price to seller
//remove product from seller collections

//user sells object from their collection
//put in
{/* <b>{item.product} </b>
<label>{item.description} </label>
<label>Purchased for: ${item.price} </label> */}

exports.listProduct = (req, res) => {
  const { userID, price, date } = req.body
  return Users.findByIdAndUpdate(userID, { userCollection: '' })
    .then(() => {
      return Products.create({ product: userID.product, description: userID.description, price: price, date: date }).exec()
        .then((data) => res.status(201).send(data))
    })
    .catch(err => console.log(err))
};

exports.buyProduct = (req, res) => {
  const { productID, buyerID, sellerID } = req.body;
  if (buyerID === sellerID) {
    res.send(false)
  } else {
    return Products.findById(productID).exec()
      .then(data => {
        let product = data;
        console.log(product)
        return Users.findByIdAndUpdate(buyerID,
          {
            $inc: { balance: -product.price },
            $push: { userCollection: { product: product.product, description: product.description, price: product.price, selling: false } }
          },
          { new: true }).exec()
          .then((data) => {
            let updatedUser = data;
            return Users.findByIdAndUpdate(sellerID, { $inc: { balance: product.price }, $pull: { userCollection: { _id: productID } } }).exec()
              .then(() => {
                return Products.findByIdAndDelete(productID)
                  .then((results) => {
                    res.status(200).send({ results, updatedUser })
                  })
              })
          }
          )
      })
      .catch(err => console.log(err))
  }
};