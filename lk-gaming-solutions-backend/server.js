const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const gameRoutes = require("./routes/game_route");
const cartRoutes = require("./routes/cart_route");
const userRoutes = require("./routes/user_route");

const app = express();
require("dotenv").config();

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 8000;
const HOST = process.env.HOST;
const MONGOURL = process.env.MONGO_URL;

//Database Connection
mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log("Database is connected successfully!");
    app.listen(PORT, HOST, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Error while connecting to database: " + error);
  });

// Routes
app.get("/", (req, res) => {
  res.send("LK Gaming Solutions Server Updated");
});

app.use("/api/v1/games", gameRoutes);
app.use("/api/v1/cart", cartRoutes);
app.use("/api/v1/user", userRoutes);
