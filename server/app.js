require("dotenv").config();
const express = require("express");
const app = express();
let port = process.env.PORT || 3000;
let game = require("./routes/game");

app.use("/api/game", game);

app.listen(() => {
  console.log(`listening on port ${port}`);
});
