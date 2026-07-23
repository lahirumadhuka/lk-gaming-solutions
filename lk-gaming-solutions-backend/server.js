const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
require("dotenv").config();

//middlewares
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8000;
const HOST = process.env.HOST;
const MONGOURL = process.env.MONGO_URL;

mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log("Database is connected successfully!");
    app.listen(PORT, HOST, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.get("/", (req, res) => {
  res.send("LK Gaming Solutions Server Updated");
});

app.post("/api/games", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});
