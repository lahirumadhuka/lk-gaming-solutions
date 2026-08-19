const express = require("express");
const router = express.Router();
const { getCart, createCart } = require("../controller/cart_controller");

router.get("/", getCart);
router.post("/", createCart);

module.exports = router;