const GameModel = require("../model/game_model");

const getGames = async (req, res) => {
  try {
    const { price, discount, stock, region, genre, platform, search, sort, category } = req.query;
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
        },
      };
    }

    // Filter by price
    // Discounted price
    const discountedPrice = {
      $subtract: [
        "$price",
        {
          $multiply: ["$price", { $divide: ["$discount", 100] }],
        },
      ],
    };

    if (price && price !== "All") {
      const priceRange = price.split(",");

      queryObject.$expr = {
        $and: [
          { $gte: [discountedPrice, Number(priceRange[0])] },
          { $lte: [discountedPrice, Number(priceRange[1])] },
        ],
      };
    }

    if (price && price !== "All" && price === "30000") {
      queryObject.$expr = {
        $gte: [discountedPrice, Number(price)],
      };
    }

    // Filter by discount
    if (discount && discount !== "All") {
      const discountRange = discount.split(",");

      queryObject.discount = {
        $gte: Number(discountRange[0]),
        $lte: Number(discountRange[1]),
      };
    }

    if (discount && discount !== "All" && discount === "70") {
      queryObject.discount = { $gte: Number(discount) };
    }

    // Filter by stock
    if (stock && stock !== "All") {
      queryObject.stock = stock === "true" ? { $gt: 0 } : { $eq: 0 };
    }

    // Filter by region
    if (region && region !== "All") {
      queryObject.region = { $regex: `^${region}$` };
    }

    // Filter by genre
    if (genre && genre !== "All") {
      queryObject.genre = { $regex: `^${genre}$` };
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

    // Sort by discounted price
    if (sort === "price") {
      games.sort(
        (a, b) =>
          a.price * (1 - a.discount / 100) - b.price * (1 - b.discount / 100),
      );
    }

    if (sort === "-price") {
      games.sort(
        (a, b) =>
          b.price * (1 - b.discount / 100) - a.price * (1 - a.discount / 100),
      );
    }

    res.status(200).json({ gamesCount: games.length, response: games });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!" });
  }
};

const getSectionGames = async (req, res) => {
  try {
    const { sort } = req.query;
    const queryObject = {};

    let results = GameModel.find(queryObject);

    // Sort
    if (sort) {
      results.sort(sort.split(",").join(" "));
    }

    const sections = await results;
    let games = {};

    games.featuredGames = sections
      .filter((g) => g.stock > 0)
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 8);
    games.hotDeals = sections
      .filter((g) => g.stock > 0)
      .sort((a, b) => b.discount - a.discount)
      .slice(0, 8);
    games.psGames = sections
      .filter((g) => g.stock > 0 && g.platform.toLowerCase().includes("ps"))
      .slice(0, 8);
    games.xboxGames = sections
      .filter((g) => g.stock > 0 && g.platform.toLowerCase().includes("xbox"))
      .slice(0, 8);
    games.pcGames = sections
      .filter(
        (g) =>
          g.stock > 0 &&
          !g.platform.toLowerCase().includes("ps") &&
          !g.platform.toLowerCase().includes("xbox"),
      )
      .slice(0, 8);

    res.status(200).json({ gamesCount: sections.length, response: games });
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
  getSectionGames,
  getGame,
  createGame,
  updateGame,
  deleteGame,
};
