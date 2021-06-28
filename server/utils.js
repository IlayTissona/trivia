const models = require("./models");
const Sequelize = require("sequelize");
const { Op, literal } = require("sequelize");

// array with all "falsy" values.
const falsyValues = [
  "N/A",
  null,
  "",
  "null",
  " ",
  "NULL",
  undefined,
  "undefined",
];

//  generates a random type question. returns a promises    V
async function generateQuestion() {
  return models.QuestionType.findOne({
    order: literal("rand()"),
  }).then(async (rawRandomQuestionTemplate) => {
    const randomQuestionTemplate = rawRandomQuestionTemplate.toJSON();
    switch (randomQuestionTemplate.type) {
      case 1:
        return await generateFirst(randomQuestionTemplate);
      case 2:
        return await generateSecond(randomQuestionTemplate);
      case 3:
        return await generateThird(randomQuestionTemplate);
      default:
        return await generateQuestion();
    }
  });
  // .catch(err => console.error(`generateQuestion error: ${err}`))
}

//  generates a question with type 1    V
async function generateFirst({
  templateStr,
  model,
  questionCol,
  answerCol,
  isFirst,
}) {
  const questionObj = { text: templateStr, type: 1 };
  const options = await models[model].findAll(
    {
      where: {
        [questionCol]: { [Op.ne]: null },
        [answerCol]: { [Op.ne]: null },
      },
      limit: 4,
      order: Sequelize.literal("rand()"),
    },
    {
      fields: [questionCol, answerCol],
    }
  );
  const finalOptions = options.sort((a, b) => b[questionCol] - a[questionCol]); // getters set on model instance.
  questionObj.answer = isFirst
    ? finalOptions[0][answerCol]
    : finalOptions[options.length - 1][answerCol];

  finalOptions.forEach((option, index) => {
    questionObj["option" + (index + 1)] = option[answerCol];
  });

  const questionSaved = models.SavedQuestion.findAll({
    where: questionObj,
  });
  if (questionSaved[0]) {
    return await generateFirst({
      templateStr,
      model,
      questionCol,
      answerCol,
      isFirst,
    });
  }
  return await models.SavedQuestion.create(questionObj);
}

//  generates a question with type 2    V
async function generateSecond({
  templateStr,
  model,
  questionCol,
  answerCol,
  isFirst,
}) {
  const options = await models[model].findAll(
    {
      where: {
        [questionCol]: { [Op.ne]: null },
        [answerCol]: { [Op.ne]: null },
      },
      limit: 4,
      order: Sequelize.literal("rand()"),
    },
    { fields: [questionCol, answerCol] }
  );
  const finalOption = options.map((option) => option.toJSON());

  const questionStr = templateStr.replace("<value>", finalOption[0][answerCol]);
  const questionObj = { text: questionStr, type: 2 };
  questionObj.answer = finalOption[0][questionCol];
  finalOption.forEach((option, index) => {
    questionObj["option" + (index + 1)] = option[questionCol];
  });
  const questionSaved = models.SavedQuestion.findAll({
    where: questionObj,
  });
  if (questionSaved[0]) {
    return await generateSecond({
      templateStr,
      model,
      questionCol,
      answerCol,
      isFirst,
    });
  }
  return await models.SavedQuestion.create(questionObj);
}

//  generates a question with type 3    V
async function generateThird({
  templateStr,
  model,
  questionCol,
  answerCol,
  isFirst,
}) {
  const options = await models[model].findAll(
    {
      where: {
        [questionCol]: { [Op.ne]: null },
        [answerCol]: { [Op.ne]: null },
      },
      limit: 2,
      order: Sequelize.literal("rand()"),
    },
    { fields: [questionCol, answerCol] }
  );

  const finalOption = options.map((option) => option.toJSON());
  const questionStr = templateStr
    .replace("<value1>", finalOption[0][answerCol])
    .replace("<value2>", finalOption[1][answerCol]);

  const questionObj = {
    text: questionStr,
    type: 3,
    option1: "Yes",
    option2: "No",
  };

  if (isFirst) {
    questionObj.answer =
      finalOption[0][questionCol] > finalOption[1][questionCol] ? "Yes" : "No";
  } else {
    questionObj.answer =
      finalOption[0][questionCol] < finalOption[1][questionCol] ? "Yes" : "No";
  }

  const questionSaved = models.SavedQuestion.findAll({
    where: questionObj,
  });
  if (questionSaved[0]) {
    return await generateThird({
      templateStr,
      model,
      questionCol,
      answerCol,
      isFirst,
    });
  }

  return await models.SavedQuestion.create(questionObj);
}

// gets a question - generates a new one if needed.     V
async function getQuestion(playerId) {
  const unaskedQuestions = await getUnAskedQuestions(playerId);
  const should = shouldGenerate(unaskedQuestions.length);
  if (should) {
    return await generateQuestion();
  } else {
    return await getRandomSavedQuestion(unaskedQuestions);
  }
}

// updates the given answer to question in connector table and updates the player's score.    V
async function setAnswer(playerId, questionId, isRight, totalTime, time) {
  const Dplayer = await models.Player.findByPk(playerId);
  Dplayer.addSavedQuestion(questionId, {
    through: { isPassed: isRight },
  });
  const scoreUpdate = (1 - time / totalTime) * 70 + 30;
  if (!isRight) {
    await Dplayer.increment({ strikes: 1 });
  } else {
    await Dplayer.increment({ score: scoreUpdate });
  }
  const updatedPlayer = await Dplayer.reload();

  return { strikes: updatedPlayer.strikes, newScore: updatedPlayer.score };
}

//  get question from the unasked saved questions   V
async function getRandomSavedQuestion(unaskedQuestions) {
  const rankFromRankToSelect = rankToSelect(unaskedQuestions);
  // filter questions with specific rank
  const rankQuestions = unaskedQuestions.filter((question) =>
    question.QuestionStat
      ? question.QuestionStat.finalRank === rankFromRankToSelect
      : true
  );
  return rankQuestions[Math.floor(Math.random() * rankQuestions.length - 1)];
}

//  gets all unasked saved questions for player V
async function getUnAskedQuestions(playerId) {
  const Dplayer = await models.Player.findByPk(playerId, {
    // TODO: change to one request from saved question includes player where player.id not equel playerId.
    include: models.SavedQuestion,
  });
  const askedQuestionsIds = Dplayer.SavedQuestions.map((q) => q.id);
  const unAskedQuestions = await models.SavedQuestion.findAll({
    where: {
      id: { [Op.notIn]: askedQuestionsIds },
    },
    include: models.QuestionStats,
  });
  return unAskedQuestions;
}

//  removes question's answer and unnessesary properties before sending to client, shuffles options #VakninInvestments       V
function questionToClient(question) {
  const questionText = question.text;
  const optionsArr = [
    question.option1,
    question.option2,
    question.option3,
    question.option4,
  ].filter((option) => option);
  for (let i = optionsArr.length - 1; i > 0; i--) {
    const newIndex = Math.round(Math.random() * i);
    const oldValue = optionsArr[newIndex];
    optionsArr[newIndex] = optionsArr[i];
    optionsArr[i] = oldValue;
  }
  return {
    text: questionText,
    options: optionsArr,
    id: question.id,
  };
}

// checks if the answer is right
async function isRightAnswer(questionId, answer) {
  const questionObj = await models.SavedQuestion.findOne({
    where: { id: questionId },
  });
  const isCorrect = questionObj.answer === answer;
  const correctAnswer = questionObj.answer;
  return { isCorrect, correctAnswer };
}

// updates the question statistics.         V
async function updateQuestionStats(
  questionId,
  isPassed,
  playerScore,
  playerRank
) {
  let saved = await models.QuestionStats.findOne({ where: { id: questionId } });
  if (!saved)
    saved = await models.QuestionStats.create(
      {
        id: questionId,
      },
      { returning: true }
    );
  saved = saved.toJSON();
  saved.rankTotal += playerRank * playerScore;
  saved.rankTotalScore += playerScore;
  saved.rankCount += 1;
  saved.finalRank = Math.round(saved.rankTotal / saved.rankTotalScore);

  isPassed ? saved.totalPassed++ : saved.totalFailed++;
  return await models.QuestionStats.update(
    { ...saved },
    { where: { id: questionId } }
  );
}

//returns true to generate and false for saved
function shouldGenerate(unAskedLength) {
  let chanceForSaved = 0;
  const random = Math.random() * 100;

  if (!unAskedLength) return true;
  if (unAskedLength > 100) chanceForSaved = 70;
  else chanceForSaved = 10 + (60 * unAskedLength) / 100;

  return random > chanceForSaved;
}

// updates questions statistics depends on player's answers in the end of the game. V
async function updateQuestionsRank(playerId) {
  const player = await models.Player.findByPk(playerId);
  const playerQuestions = (
    await player.getSavedQuestions({ through: models.QuestionAskedPerPlayer })
  ).map((question) => question.toJSON());

  const playerScore = player.score;
  for (let i = 0; i < playerQuestions.length; i++) {
    if (playerQuestions[i].QuestionAskedPerPlayer.isPassed) {
      updateQuestionStats(
        playerQuestions[i].id,
        true,
        playerScore,
        playerQuestions[i].QuestionAskedPerPlayer.rank
      );
    } else {
      updateQuestionStats(playerQuestions[i].id, false, 0, 0);
    }
  }
  questionsToDelete = playerQuestions.filter(
    (q) => !q.QuestionAskedPerPlayer.rank
  );
  playerQuestionsIds = questionsToDelete.map((q) => q.id);

  models.SavedQuestion.destroy({
    where: { id: { [Op.or]: playerQuestionsIds } },
  });
}

// updates question rank    V
async function setPlayerRank(PlayerId, SavedQuestionId, rank) {
  return (
    await models.QuestionAskedPerPlayer.update(
      { rank },
      { where: { SavedQuestionId, PlayerId } }
    )
  )[0];
}

//  calculates and randomize which rank should be the next saved question.  V
function rankToSelect(unAsked) {
  const ranks = [, 0, 0, 0, 0, 0];
  const probability = [];
  let ranksSum = 0;

  unAsked.forEach((q) => {
    if (!q.QuestionStat) return;
    ranksSum += q.QuestionStat.finalRank;
    ranks[q.QuestionStat.finalRank] += q.QuestionStat.finalRank;
  });

  for (let i = 1; i <= 5 && i <= ranksSum; i++) {
    const iProbability = Math.round((ranks[i] / ranksSum) * 100);
    for (let j = 0; j < iProbability; j++) {
      probability.push(i);
    }
  }

  const randNum = Math.floor(Math.random() * probability.length);
  return probability[randNum];
}

async function isOut(playerId) {
  const player = await models.Player.findByPk(playerId);
  return player.strikes >= 3;
}

async function getendGameStats(playerId) {
  const player = await models.Player.findOne({
    where: { id: playerId },
  });
  const playerQuestions = await player.getSavedQuestions({
    through: {
      where: { isPassed: true },
    },
  });
  const { score, name, id } = player;
  return { id, name, score, passed: playerQuestions.length };
}

// gets the leaderBoard
async function getLeaderBoard(playerId) {
  const topTwenty = await models.Player.findAll({
    order: models.Player.score,
    limit: 20,
    attributes: [
      "id",
      "score",
      "name",
      [Sequelize.literal("RANK() over (order by score DESC)"), "rank"],
    ],
  });

  const isPlayerTopTwenty = topTwenty.some((player) => player.id === playerId);

  if (isPlayerTopTwenty) return topTwenty;

  const Dplayer = await models.Player.findByPk(playerId);

  const playersAboveDplayer = await models.Player.findAll({
    where: { score: { [Op.gte]: Dplayer.score } },
    attributes: [
      "id",
      "score",
      "name",
      [Sequelize.literal("RANK() OVER (order by score DESC)"), "rank"],
    ],
  });

  const DplayerWithRank = playersAboveDplayer.find(
    (player) => player.id === Dplayer.id
  );
  topTwenty.pop();
  topTwenty.push(DplayerWithRank);

  return topTwenty;
}

module.exports = {
  getQuestion,
  isRightAnswer,
  setAnswer,
  setPlayerRank,
  updateQuestionsRank,
  questionToClient,
  isOut,
  getLeaderBoard,
  getendGameStats,
  generateQuestion,
  generateFirst,
};
