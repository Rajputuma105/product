const mongoose = require("mongoose");

const Product = mongoose.model(
  "Product",
  new mongoose.Schema({
    date: { type: String, required: true },
    product_name: { type: String },
    quantity: { type: Number },
    unit_price: { type: Number },
    total_amount: { type: Number },
    status: { type: String }
  })
);

module.exports = Product;
