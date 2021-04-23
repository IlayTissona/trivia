const express = require("express");
const app = express();
let game = express.Router();
const { Player, SavedQuestions } = require("../models");
const { Op } = require("sequelize");
const { getQuestion, isRightAnswer, setAnswer, setPlayerRank, updatePlayerStats, questionToClient, isOut } = require('../utils');

// game.post("/new_session", async (req, res) => {
//   const userName = req.body.userName;
//   const userAvatar = req.body.avatar;
//   const player = await Player.create(
//     { name: userName, avatarId: userAvatar, score: 0 },
//     { returning: true }
//   );
//   const avatar = await player.getAvatar();
//   res.send({
//     id: player.id,
//     userName: player.name,
//     score: player.score,
//     avatarUrl: avatar.imgSrc,
//   });
// });

// game.get("/question/:playerId", async (req, res) => {
//   const askedQuestions = await Player.getSavedQuestions();
//   const unAskedQuestions = await SavedQuestions.findAll({
//     where: {
//       id: { [Op.notIn]: askedQuestions },
//     },
//   });
//   const question = await getQuestion();

// });


game.post("/new_session", async (req, res) => {
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
  const isCorrect = await isRightAnswer(questionId, answer);
  const { newScore, strikes } = await setAnswer(playerId, questionId, isCorrect, totalTime, time);
  res.json({ isCorrect, newScore, strikes })
});


// add isout to get question request
// create route for rank question
// 



// POST session / new
//     body{ username, avatar }
// return { updated: true, player }

// GET question: playerId
// return { question }

// POST answer
// body{ playerId, questionId, answer }
// return { pass: true, player }      // generated baseScore(*time)/ saves calculatedScore(*time)

// POST rank
// body{ questionId, rank }
// return { updated: true }

// GET endGame /: playerId      // updates the stats after the return
// return { leaderBoard, playerStats }

module.exports = game