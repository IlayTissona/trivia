require("dotenv").config();
const express = require("express");
const app = express();
let port = process.env.PORT || 3005;
let game = require("./routes/game");
app.use(express.json());
app.use("/api/game", game);


const lastRoute = (req, res, next) => {
  console.log(req.path);
  res.status(404).send("not found baby!")
}

const errorHandler = (error, req, res, next) => {
  console.log("internal error!");
  console.log(req.path);
  res.status(500).send("oops! something went wrong..")
}
app.use(lastRoute)
app.use(errorHandler)
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
