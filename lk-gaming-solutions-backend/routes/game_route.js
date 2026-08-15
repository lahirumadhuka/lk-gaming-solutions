const express = require("express");
const router = express.Router();
const { getGames, getGame, createGame, updateGame, deleteGame, getSearch } = require("../controller/game_controller");

router.get("/", getGames);
router.get("/:id", getGame);
router.post("/", createGame);
router.patch("/:id", updateGame);
router.delete("/:id", deleteGame);

module.exports = router;
