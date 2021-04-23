const express = require("express");
const app = express();
let game = express.Router();
const { Player } = require("../models");
const { SavedQuestions } = require("../models");
const { Op } = require("sequelize");

game.post("/new_session", async (req, res) => {
  const userName = req.body.userName;
  const userAvatar = req.body.avatar;
  const player = await Player.create(
    { name: userName, avatarId: userAvatar, score: 0 },
    { returning: true }
  );
  const avatar = await player.getAvatar();
  res.send({
    id: player.id,
    userName: player.name,
    score: player.score,
    avatarUrl: avatar.imgSrc,
  });
});

game.get("/question/:playerId", async (req, res) => {
  const askedQuestions = await Player.getSavedQuestions();
  const unAskedQuestions = await SavedQuestions.findAll({
    where: {
      id: { [Op.notIn]: askedQuestions },
    },
  });
  const question = await getQuestion();
  //   res.json({question:})

  // DONE!!!!
  // shouldGenerate --return what question to return generated/saved
  //questionToClient
  //shuffleOptions
  //generateQuestion ---returns new random Question
  // updatePlayerStats(playerId)
  // updateQuestionStats

  // UNDONE!!!!
  //   getQuestion(unAskedQuestions) ---- returns a questionObject{text,type,(options 1,2,3,4), answer}
  //---subFunctions :
  //randomQuestionFromSaved(unAskedQuestions) ---returns random Question from unAskedQuestions

});

module.exports = game;

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
