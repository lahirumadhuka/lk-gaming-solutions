const express = require("express");
const router = express.Router();
const { getGames, createGame, updateGame, deleteGame, getSectionGames } = require("../controller/game_controller");

router.get("/", getGames);
router.get("/section", getSectionGames);
router.post("/", createGame);
router.patch("/:id", updateGame);
router.delete("/:id", deleteGame);

module.exports = router;
