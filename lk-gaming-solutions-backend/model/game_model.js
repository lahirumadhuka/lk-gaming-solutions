import mongoose from "mongoose";

const GamesSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please enter the game title!"],
  },
  price: {
    type: Number,
    required: [true, "Please enter the game price!"],
  },
  oldPrice: {
    type: Number,
  },
  discount: {
    type: Number,
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
  },
  rating: {
    type: Number,
  },
  stock: {
    type: Number,
    required: [true, "Please enter number of stocks!"],
  },
  region: {
    type: String,
    required: [true, "Please enter region name!"],
  },
});

const Games = mongoose.model("Games", GamesSchema);

module.exports = Games;
