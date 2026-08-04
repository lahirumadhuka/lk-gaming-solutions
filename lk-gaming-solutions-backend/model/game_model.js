const mongoose = require("mongoose");

const GameSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please enter the game title!"],
  },
  price: {
    type: Number,
    required: [true, "Please enter the game price!"],
  },
  discount: {
    type: Number,
    required: true,
    default: 0,
  },
  genre: {
    type: String,
    required: [true, "Please select the game genre type!"],
  },
  platform: {
    type: String,
    required: [true, "Please select the game platform type!"],
  },
  seller: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    default: 0,
  },
  stock: {
    type: Number,
    required: [true, "Please enter number of stocks!"],
  },
  region: {
    type: String,
    required: [true, "Please enter region name!"],
  },
  imgUrl: {
    type: String,
    required: [true, "Please upload an image!"],
  },
});

const Game = mongoose.model("Game", GameSchema);

module.exports = Game;
