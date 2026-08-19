const CartModel = require("../model/cart_model");

const getCart = async (req, res) => {
  try {
    const cart = await CartModel.find({}).populate("gameId");
    res.status(200).json({ gamesCount: cart.length, response: cart });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!" });
  }
};

const createCart = async (req, res) => {
  try {
    const gameExist = await CartModel.findOne({ gameId: req.body.gameId });
    if (gameExist) {
      return res.status(409).json({ message: "This Game Already Exists!" });
    }
    
    await CartModel.create(req.body);
    res.status(201).json({ message: "Cart Item Added Successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!" });
  }
};

const updateCart = async (req, res) => {
  try {
    const { id } = req.params;
    const cart = await CartModel.findByIdAndUpdate(id, req.body);

    if (!cart) {
      return res.status(404).json({ message: "Cart Item Not Found!" });
    }

    res.status(200).json({ message: "Cart Item Updated Successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!" });
  }
};

const deleteCart = async (req, res) => {
  try {
    const { id } = req.params;
    const cart = await CartModel.findByIdAndDelete(id);

    if (!cart) {
      return res.status(404).json({ message: "Cart Item Not Found!" });
    }

    res.status(200).json({ message: "Cart Item Deleted Successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!" });
  }
};

module.exports = {
  getCart,
  createCart,
  updateCart,
  deleteCart
};