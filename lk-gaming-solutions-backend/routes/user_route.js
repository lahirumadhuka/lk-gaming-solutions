const express = require("express");
const { getUsers, createUser, updateUser, deleteUser, getUser } = require("../controller/user_controller");
const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/", createUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;