//This will be used to perform full crud in the database.
//Make sure to import outside of module.exports, since you want it globally accessible throughout file.
const Product = require("../models/product");

module.exports = {
  //Method used to read all the products.
  readProducts(req, res) {},
};

Product.find({}).exec((err, products) => {
  //Always do a couple of console.logs just in case of errors.
  if (err) console.log("Get Product Mongoose Error------------------", err);
  //Always log the data you are returning from the database to check if you are receiving the right data.
  console.log("products-------------", products);
});