const GameModel = require("../model/game_model");

const getGames = async (req, res) => {
  try {
    const games = await GameModel.find({});
    res.status(200).json({ response: games });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!" });
  }
};

const getGame = async (req, res) => {
  try {
    const { id } = req.params;
    const game = await GameModel.findById(id);
    res.status(200).json(game);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!" });
  }
};

const createGame = async (req, res) => {
  try {
    const game = await GameModel.create(req.body);
    res.status(201).json({ message: "Game Created Successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!" });
  }
};

const updateGame = async (req, res) => {
  try {
    const { id } = req.params;
    const game = await GameModel.findByIdAndUpdate(id, req.body);

    if (!game) {
      return res.status(404).json({ message: "Game Not Found!" });
    }

    res.status(200).json({ message: "Game Updated Successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!" });
  }
};

const deleteGame = async (req, res) => {
  try {
    const { id } = req.params;
    const game = await GameModel.findByIdAndDelete(id);

    if (!game) {
      return res.status(404).json({ message: "Game Not Found!" });
    }

    res.status(200).json({ message: "Game Deleted Successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!" });
  }
};

module.exports = {
  getGames,
  getGame,
  createGame,
  updateGame,
  deleteGame,
};
