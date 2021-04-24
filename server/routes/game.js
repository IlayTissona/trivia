const express = require("express");
const app = express();
let game = express.Router();
const { Player, SavedQuestions } = require("../models");
const { Op } = require("sequelize");
const { getQuestion, isRightAnswer, setAnswer, setPlayerRank, updateQuestionsRank, questionToClient, isOut, getLeaderBoard, getPlayerStats } = require('../utils');

// IMORTANT!!!
// generate first throws the error:
//     "TypeError: Cannot read property 'findAll' of undefined"

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
  return res.send({
    id: player.id,
    userName: player.name,
    score: player.score,
    avatarUrl: avatar.imgSrc,
  });
});

game.get("/question/:playerId", async (req, res) => {
  const playerId = Number(req.params.playerId);

  const isPlayerOut = await isOut(playerId);
  if (isPlayerOut) return res.json({ isOut: true })
  const question = await getQuestion(playerId);

  return res.json(questionToClient(question));
});
game.post("/answer/:playerId", async (req, res) => {
  const playerId = Number(req.params.playerId);
  const { questionId, answer, totalTime, time } = req.body;
  const isCorrect = await isRightAnswer(questionId, answer);
  const { newScore, strikes } = await setAnswer(playerId, questionId, isCorrect, totalTime, time);
  return res.json({ isCorrect, newScore, strikes })
});

game.post("/rank/:playerId", async (req, res) => {
  const playerId = Number(req.params.playerId);
  const { questionId, rank } = req.body;

  const didUpdate = await setPlayerRank(playerId, questionId, rank);
  console.log(didUpdate);
  return res.json({ updated: Boolean(didUpdate) });
});

game.get("/end_session/:playerId", async (req, res) => {
  const playerId = Number(req.params.playerId);
  console.log(playerId, typeof (playerId));
  const leaderBoard = await getLeaderBoard(playerId);
  const playerStats = await getPlayerStats(playerId);
  res.json({ leaderBoard, playerStats })
  updateQuestionsRank(playerId);
  return
});
// GET endGame /: playerId      // updates the stats after the return
// return { leaderBoard, playerStats }

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


module.exports = game