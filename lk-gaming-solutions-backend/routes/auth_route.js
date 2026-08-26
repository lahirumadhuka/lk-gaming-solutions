const express = require("express");
const { getUser } = require("../controller/auth_controller");
const router = express.Router();

router.get("/", getUser);

module.exports = router;