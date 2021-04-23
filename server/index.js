require("dotenv").config();
const express = require("express");
const app = express();
let port = process.env.PORT || 3000;
let game = require("./routes/game");
app.use(express.json());
app.use("/api/game", game);


const lastRoute = (req, res, next) => {

  console.log(req.path);
  res.status(404).send("not found baby!")
}
app.use(lastRoute)
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
