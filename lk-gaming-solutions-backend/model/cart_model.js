const mongoose = require("mongoose");

const CartSchema = mongoose.Schema({
  gameId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Game",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Cart = mongoose.model("Cart", CartSchema);

module.exports = Cart;
