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
  console.log(playerId, questionId, answer, totalTime, time);
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

game.get("/retry/:playerId", async (req, res) => {
  console.log("kbnsdfknlkandsfklsdnf");
  const { playerId } = req.params;
  const Dplayer = await Player.findByPk(playerId);
  const { name, avatarId } = Dplayer;
  const newPlayer = await Player.create(
    { name, avatarId, score: 0 },
    { returning: true }
  );

  const avatar = await newPlayer.getAvatar({ through: "AvatarId" });

  res.json({
    id: newPlayer.id,
    userName: newPlayer.name,
    score: newPlayer.score,
    avatarUrl: avatar.imgSrc,
  });
});




module.exports = game