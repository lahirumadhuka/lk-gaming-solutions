const CartModel = require("../model/cart_model");

const getCart = async (req, res) => {
  try {
    const { id } = req.query;
    if (id || id === "") {
      return res.status(200).json({ gamesCount: 0, response: 0 });;
    }
    const cart = await CartModel.find({ userId: id }).populate({path: "gameId", populate: {path: "seller", select: "username -_id"}});
    res.status(200).json({ gamesCount: cart.length, response: cart });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!" });
  }
};

const createCart = async (req, res) => {
  try {
    const gameExist = await CartModel.findOne({ gameId: req.body.gameId, userId: req.body.userId });
    if (gameExist) {
      return res.status(409).json({ message: "Game already exists in your cart!" });
    }
    
    await CartModel.create(req.body);
    res.status(201).json({ message: "Game added to your cart successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!" });
  }
};

const updateCart = async (req, res) => {
  try {
    const { id } = req.params;
    const cart = await CartModel.findByIdAndUpdate(id, req.body);

    if (!cart) {
      return res.status(404).json({ message: "This game is no longer in your cart." });
    }

    res.status(200).json({ message: "Game updated in your cart successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!" });
  }
};

const deleteCart = async (req, res) => {
  try {
    const { id } = req.params;
    const cart = await CartModel.findByIdAndDelete(id);

    if (!cart) {
      return res.status(404).json({ message: "This game is no longer in your cart." });
    }

    res.status(200).json({ message: "Game removed from your cart successfully!" });
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