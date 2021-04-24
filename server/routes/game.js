const express = require("express");
const app = express();
let game = express.Router();
const { Player, SavedQuestions } = require("../models");
const { Op } = require("sequelize");
const { getQuestion, isRightAnswer, setAnswer, setPlayerRank, updatePlayerStats, questionToClient, isOut } = require('../utils');


game.post("/new_session", async (req, res) => {
  console.log("in new session");
  const userName = req.body.userName;
  const userAvatar = req.body.avatar;

  console.log(userName, userAvatar);
  const player = await Player.create(
    { name: userName, avatarId: userAvatar, score: 0 },
    { returning: true }
  );
  console.log(player);
  const avatar = await player.getAvatar(
    { through: "AvatarId" }
  );
  res.send({
    id: player.id,
    userName: player.name,
    score: player.score,
    avatarUrl: avatar.imgSrc,
  });
});

game.get("/question/:playerId", async (req, res) => {
  const playerId = req.params.playerId;
  const question = await getQuestion(playerId);
  res.json(questionToClient(question));
});
game.post("/answer/:playerId", async (req, res) => {
  const playerId = req.params.playerId;
  const { questionId, answer, totalTime, time } = req.body;
  console.log(playerId, questionId, answer, totalTime, time);
  const isCorrect = await isRightAnswer(questionId, answer);
  const { newScore, strikes } = await setAnswer(playerId, questionId, isCorrect, totalTime, time);
  res.json({ isCorrect, newScore, strikes })
});


// add isout function to get question request
// create route for rank question
// 


//  UNDONE !!!!!!

// POST rank
// body{ questionId, rank }
// return { updated: true }

// GET endGame /: playerId      // updates the stats after the return
// return { leaderBoard, playerStats }





// DONE !!!!!
// POST session / new
//     body{ username, avatar }
// return { updated: true, player }

// GET question: playerId
// return { question }

// POST answer
// body{ playerId, questionId, answer }
// return { pass: true, player }      // generated baseScore(*time)/ saves calculatedScore(*time)


module.exports = game