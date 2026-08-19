const mongoose = require("mongoose");

const CartSchema = mongoose.Schema({
  gameId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Game"
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
