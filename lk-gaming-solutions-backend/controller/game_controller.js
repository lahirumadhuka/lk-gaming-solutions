const GameModel = require("../model/game_model");

const getGames = async (req, res) => {
  try {
    const { price, stock, region, genre, platform, search, sort, category } = req.query;
    const queryObject = {};

    // Filter by category
    if (category === "PlayStation") {
      queryObject.platform = { $regex: "ps", $options: "i" };
    }

    if (category === "Xbox") {
      queryObject.platform = { $regex: "xbox", $options: "i" };
    }

    if (category === "PC") {
      queryObject.platform = {
        $not: {
          $regex: "xbox|ps",
          $options: "i",
        }
      };
    }

    // Filter by price
    if (price && price !== "All") {
      const priceRange = price.split(",");

      queryObject.price = {
        $gte: Number(priceRange[0]),
        $lte: Number(priceRange[1]),
      };
    }

    if (price && price !== "All" && price >= 30000) {
      queryObject.price = { $gte: Number(price) };
    }

    // Filter by stock
    if (stock && stock !== "All" && stock === "true") {
      queryObject.stock = { $gt: 0 };
    }

    if (stock && stock !== "All" && stock === "false") {
      queryObject.stock = { $eq: 0 };
    }

    // Filter by region
    if (region && region !== "All") {
      queryObject.region = { $regex: region };
    }

    // Filter by genre
    if (genre && genre !== "All") {
      queryObject.genre = { $regex: genre };
    }

    // Filter by platform
    if (platform && platform !== "All") {
      queryObject.platform = { $regex: `^${platform}$` };
    }

    // Search using keywords
    if (search) {
      queryObject.$or = [
        { title: { $regex: search, $options: "i" } },
        { genre: { $regex: search, $options: "i" } },
        { platform: { $regex: search, $options: "i" } },
      ];
    }

    let results = GameModel.find(queryObject);

    // Sort
    if (sort) {
      results.sort(sort.split(",").join(" "));
    }

    const games = await results;

    res.status(200).json({ gamesCount: games.length, response: games });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!" });
  }
};

const getSectionGames = async (req, res) => {
  try {
    const { stock, sort, category } = req.query;
    const queryObject = {};

    // Filter by category
    if (category === "PlayStation") {
      queryObject.platform = { $regex: "ps", $options: "i" };
    }

    if (category === "Xbox") {
      queryObject.platform = { $regex: "xbox", $options: "i" };
    }

    if (category === "PC") {
      queryObject.platform = {
        $not: {
          $regex: "xbox|ps",
          $options: "i",
        }
      };
    }

    // Filter by stock
    if (stock && stock !== "All" && stock === "true") {
      queryObject.stock = { $gt: 0 };
    }

    if (stock && stock !== "All" && stock === "false") {
      queryObject.stock = { $eq: 0 };
    }

    let results = GameModel.find(queryObject);

    // Sort
    if (sort) {
      results.sort(sort.split(",").join(" "));
    }

    const games = await results;

    res.status(200).json({ gamesCount: games.length, response: games });
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
