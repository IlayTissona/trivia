const express = require("express");
const avatar = require('./avatars')
const { tokenValidate } = require('./userController')

let game = express.Router();

const { Player, Avatar, User } = require("../models");
const Sequelize = require("sequelize");
const { Op } = require("sequelize");
const {
  getQuestion,
  isRightAnswer,
  setAnswer,
  setPlayerRank,
  updateQuestionsRank,
  questionToClient,
  isOut,
  getLeaderBoard,
  getPlayerStats,
} = require("../utils");

// game.use('/avatar', avatar)
// IMORTANT!!!
// generate first throws the error:
//     "TypeError: Cannot read property 'findAll' of undefined"


game.post("/new_session", tokenValidate, async (req, res) => {
  console.log(req.decoded)
  const { name, id } = req.decoded;
  const user = await User.findByPk(id)

  console.log(user, name, id)

  // creates a new session!!!! (not a new player)
  const player = await Player.create(
    { name, avatarId: user.avatarId, score: 0, strikes: 0, userId: id },
    { returning: true }
  );
  const avatar = await player.getAvatar({ through: "AvatarId" });
  return res.json({
    id: player.id,
    name: player.name,
    strikes: player.strikes,
    score: player.score,
    avatarUrl: avatar.imgSrc,
  });
});

game.get("/question/:playerId", tokenValidate, async (req, res) => {
  const playerId = Number(req.params.playerId);
  const isPlayerOut = await isOut(playerId);
  if (isPlayerOut) return res.json({ isOut: true });
  const question = await getQuestion(playerId);
  return res.json(questionToClient(question));
});
game.post("/answer/:playerId", tokenValidate, async (req, res) => {
  const playerId = Number(req.params.playerId);
  const { questionId, answer, totalTime, timePassed } = req.body;
  console.log(playerId, typeof (playerId), answer, typeof (answer), totalTime, typeof (totalTime), timePassed, typeof (timePassed));
  const { isCorrect, correctAnswer } = await isRightAnswer(questionId, answer);
  const { newScore, strikes } = await setAnswer(
    playerId,
    questionId,
    isCorrect,
    totalTime,
    timePassed
  );
  return res.json({ isCorrect, newScore, strikes, correctAnswer });
});

game.post("/rank/:playerId", tokenValidate, async (req, res) => {
  const playerId = Number(req.params.playerId);
  const { questionId, rank } = req.body;

  const didUpdate = await setPlayerRank(playerId, questionId, rank);
  console.log(didUpdate);
  return res.json({ updated: Boolean(didUpdate) });
});

game.get("/end_session/:playerId", tokenValidate, async (req, res) => {
  const userId = req.decoded.id;
  const playerId = Number(req.params.playerId);
  const leaderBoard = await getLeaderBoard(playerId);
  const playerStats = await getPlayerStats(playerId);
  const user = (await User.findByPk(userId)).toJSON()

  const incrementOptions = {
    total_score: playerStats.score,
    games_played: 1,
  }

  await User.increment(incrementOptions, { where: { id: userId } })
  if (playerStats.score > user.highScore) await User.update({ highScore: playerStats.score }, { where: { id: userId } })
  res.json({ leaderBoard, playerStats });
  updateQuestionsRank(playerId);
  return;
});

game.get("/leader_board", async (req, res) => {
  console.log("in the leaderBoard");
  const leaderBoard = await (await Player.findAll({
    order: [Sequelize.literal('highscore DESC')],
    where: { name: { [Op.not]: null } },
    limit: 20,
    group: ["name"],
    // include: { model: Avatar },
    attributes: [
      "name",
      [Sequelize.fn('max', Sequelize.col("score")), "highscore"]
      // [Sequelize.literal("RANK() over (order by score DESC)"), "rank"],
    ],
  }))

    // const leaderBoard = (await Player.findAll({
    //   order: Player.score,
    //   limit: 20,
    //   include: { model: Avatar },
    //   attributes: [
    //     "id",
    //     "score",
    //     "name",
    //     [Sequelize.literal("RANK() over (order by score DESC)"), "rank"],
    //   ],
    // }))
    .map((player, i) => {
      const { name, highscore, ...rest } = player.toJSON()
      console.log({ name, rank: i + 1, highscore });
      return { name, rank: i + 1, score: highscore }
    })
  for (player of leaderBoard) {
    player.avatarUrl = (await Player.findOne({
      where: { name: player.name },
      include: { model: Avatar }
    })).toJSON().Avatar.imgSrc
  }

  console.log(leaderBoard);
  return res.json(leaderBoard);
});

game.get("/retry/:playerId", tokenValidate, async (req, res) => {
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

module.exports = game;
