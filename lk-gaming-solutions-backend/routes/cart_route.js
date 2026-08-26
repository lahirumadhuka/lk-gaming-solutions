const express = require("express");
const router = express.Router();
const { getCart, createCart, updateCart, deleteCart } = require("../controller/cart_controller");

router.get("/", getCart);
router.post("/", createCart);
router.patch("/:id", updateCart);
router.delete("/:id", deleteCart);

module.exports = router;