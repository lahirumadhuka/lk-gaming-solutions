const CartModel = require("../model/cart_model");

const getCart = async (req, res) => {
  try {
    const cart = await CartModel.find({});
    res.status(200).json({ gamesCount: cart.length, response: cart });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!" });
  }
};

const createCart = async (req, res) => {
  try {
    const cart = await CartModel.create(req.body);
    res.status(201).json({ message: "Cart Created Successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!" });
  }
};

module.exports = {
  getCart,
  createCart
};