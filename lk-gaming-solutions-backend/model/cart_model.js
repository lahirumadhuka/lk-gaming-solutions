const mongoose = require("mongoose");

const CartSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  platform: {
    type: String,
    required: true,
  },
  seller: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  region: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
  userId: {
    type: String,
    required: false,
  },
});

const Cart = mongoose.model("Cart", CartSchema);

module.exports = Cart;
