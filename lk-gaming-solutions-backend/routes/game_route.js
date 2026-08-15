const express = require("express");
const router = express.Router();
const { getGames, getGame, createGame, updateGame, deleteGame, getSearch, getSectionGames } = require("../controller/game_controller");

router.get("/", getGames);
router.get("/section", getSectionGames);
router.get("/:id", getGame);
router.post("/", createGame);
router.patch("/:id", updateGame);
router.delete("/:id", deleteGame);

module.exports = router;
