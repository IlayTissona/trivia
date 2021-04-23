const models = require('./models');
const Sequelize = require('sequelize');
const { Op, literal } = require('sequelize');

//  generates a random type question. returns a promises    V
function generateQuestion() {

    return models.QuestionType.findOne({
        order: literal('rand()')
        // where: { type: 2 }
    }).then(rawRandomQuestionTemplate => {

        const randomQuestionTemplate = rawRandomQuestionTemplate.toJSON()
        switch (randomQuestionTemplate.type) {

            case 1:
                return generateFirst(randomQuestionTemplate);
            case 2:
                return generateSecond(randomQuestionTemplate);
            case 3:
                return generateThird(randomQuestionTemplate);
            // default:
            //     return generate()
        }
    })
        .catch(err => console.log("generateQuestion error: ", err))
}


//  generates a question with type 1    V
async function generateFirst({ templateStr, model, questionCol, answerCol, isFirst }) {
    const questionObj = { text: templateStr, type: 1 };
    const results = await models[model].findAll({
        limit: 4,
        order: Sequelize.literal("rand()")
    }, { fields: [questionCol, answerCol] });
    const finalResult = results.map(answer => answer.toJSON()).sort((a, b) => { return b[questionCol] - a[questionCol] })
    questionObj.answer = isFirst ? finalResult[0][answerCol] : finalResult[finalResult.length - 1][answerCol];
    finalResult.forEach((option, index) => {
        questionObj["option" + (index + 1)] = option[answerCol]
    })  // only the string
    const questionSaved = models.SavedQuestion.findAll({
        where: questionObj
    });
    if (questionSaved[0]) {
        return await generateFirst({ templateStr, model, questionCol, answerCol, isFirst })
    }
    return await models.SavedQuestion.create(questionObj)
}

//  generates a question with type 2    V
async function generateSecond({ templateStr, model, questionCol, answerCol, isFirst }) {
    const results = await models[model].findAll({
        where: {
            [questionCol]: { [Op.and]: [{ [Op.notLike]: "N/A" }, { [Op.ne]: null }] },
        },
        limit: 4,
        order: Sequelize.literal("rand()")
    }, { fields: [questionCol, answerCol] });
    const finalResult = results.map(answer => answer.toJSON())

    const questionStr = templateStr.replace("<value>", finalResult[0][answerCol])
    const questionObj = { text: questionStr, type: 2 };
    questionObj.answer = finalResult[0][questionCol]
    finalResult.forEach((option, index) => {
        questionObj["option" + (index + 1)] = option[questionCol]
    })
    const questionSaved = models.SavedQuestion.findAll({
        where: questionObj
    });
    if (questionSaved[0]) {
        return await generateFirst({ templateStr, model, questionCol, answerCol, isFirst })
    }
    return await models.SavedQuestion.create(questionObj)
}

//  generates a question with type 3    V
async function generateThird({ templateStr, model, questionCol, answerCol, isFirst }) {

    const results = await models[model].findAll({
        limit: 2,
        order: Sequelize.literal("rand()")
    }, { fields: [questionCol, answerCol] });

    const finalResult = results.map(answer => answer.toJSON())
    const questionStr = templateStr.replace("<value1>", finalResult[0][answerCol]).replace("<value2>", finalResult[1][answerCol])

    const questionObj = { text: questionStr, type: 3, option1: "Yes", option2: "No" };

    if (isFirst) {

        questionObj.answer = finalResult[0][questionCol] > finalResult[1][questionCol] ? "Yes" : "No";
    }
    else {
        questionObj.answer = finalResult[0][questionCol] < finalResult[1][questionCol] ? "Yes" : "No";
    }

    const questionSaved = models.SavedQuestion.findAll({
        where: questionObj
    });
    if (questionSaved[0]) {
        return await generateThird({ templateStr, model, questionCol, answerCol, isFirst })
    }

    return await models.SavedQuestion.create(questionObj)
}


// gets a question - generates a new one if needed.     V
async function getQuestion(playerId) {
    const unaskedQuestions = await getUnAskedQuestions(playerId);
    const shold = shouldGenerate(unaskedQuestions.length);
    if (shold) {
        return await generateQuestion();
    }
    else {
        return await getRandomSavedQuestion(unaskedQuestions)
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
        await Dplayer.increment({ strikes: 1 }, { returning: true });
    }
    else {
        await Dplayer.increment({ score: scoreUpdate })
    }
    const updatedPlayer = await Dplayer.reload();

    return { strikes: updatedPlayer.strikes, newScore: updatedPlayer.score }
}

//  get question from the unasked saved questions   V
async function getRandomSavedQuestion(unaskedQuestions) {
    const rankFromRankToSelect = rankToSelect(unaskedQuestions);
    // filter questions with specific rank
    const rankQuestions = unaskedQuestions.filter(question => question.QuestionStat ? question.QuestionStat.finalRank == rankFromRankToSelect : true)   // used '==' because we compare only simple numbers, and we needed 'null' to equal 'undefined'.
    return rankQuestions[
        Math.floor(Math.random() * rankQuestions.length - 1)
    ];
}

//  gets all unasked saved questions for player V
async function getUnAskedQuestions(playerId) {
    const Dplayer = await models.Player.findByPk(playerId, {
        include: models.SavedQuestion,
    });
    const askedQuestionsIds = await Dplayer.SavedQuestions.map((q) => q.id);
    const unAskedQuestions = await models.SavedQuestion.findAll({
        where: {
            id: { [Op.notIn]: askedQuestionsIds }
        },
        include: models.QuestionStats
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
    ].filter(option => option);
    for (let i = optionsArr.length - 1; i > 0; i--) {
        const newIndex = Math.floor(Math.random() * (i + 1));
        const oldValue = optionsArr[newIndex];
        optionsArr[newIndex] = optionsArr[i];
        optionsArr[i] = oldValue;
    }
    return {
        text: questionText,
        options: optionsArr,
        id: question.id
    };
}

// checks if the answer is right
async function isRightAnswer(questionId, answer) {
    const questionObj = await models.SavedQuestion.findOne({
        where: { id: questionId },
    });
    return questionObj.answer === answer;
};

// updates the question statistics.         V
async function updateQuestionStats(questionId, isPassed, playerScore, playerRank) {
    let saved = await models.QuestionStats.findOne({ where: { id: questionId } });
    if (!saved)
        saved = await models.QuestionStats.create(
            {
                id: questionId
            },
            { returning: true }
        );
    saved = saved.toJSON();
    saved.rankTotal += playerRank * playerScore;
    saved.rankTotalScore += playerScore;
    saved.rankCount += 1;
    saved.finalRank = Math.round(saved.rankTotal / saved.rankTotalScore);

    isPassed ? saved.totalPassed++ : saved.totalFailed++;
    return await models.QuestionStats.update({ ...saved }, { where: { id: questionId } });
};

//returns true to generate and false for saved
function shouldGenerate(unAskedLength) {
    let chanceForSaved = 0;
    const random = Math.random() * 100;

    if (!unAskedLength) return true;
    if (unAskedLength > 100) chanceForSaved = 70;
    else chanceForSaved = 10 + (60 * unAskedLength) / 100;

    return random > chanceForSaved;
};

// updates question statistics depends on player's answers. V
async function updatePlayerStats(playerId) {
    const player = await models.Player.findByPk(playerId);
    const playerQuestions = (await player
        .getSavedQuestions({ through: models.QuestionAskedPerPlayer }))
        .map((question) => question.toJSON());

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
    questionsToDelete = playerQuestions.filter(q => !q.QuestionAskedPerPlayer.rank)
    playerQuestionsIds = questionsToDelete.map(q => q.id);
    models.SavedQuestion.destroy(
        { where: { id: { [Op.or]: playerQuestionsIds } } });
}

// updates question rank    V
async function setPlayerRank(PlayerId, SavedQuestionId, rank) {
    return await models.QuestionAskedPerPlayer.update(
        { rank },
        { where: { SavedQuestionId, PlayerId } }
    );
}

//  calculates and randomize which rank should be the next saved question.  V
function rankToSelect(unAsked) {
    const ranksArr = [];
    const ranksCount = unAsked.reduce((prev, q) => {
        return prev += q.QuestionStat ? q.QuestionStat.finalRank : 0
    }, 0
    );

    for (let i = 1; i <= 5 && i <= ranksCount; i++) {
        const iPropabilty = Math.round((i / ranksCount) * 100);
        for (let j = 0; j < iPropabilty; j++) {
            ranksArr.push(i);
        }
    }
    const randNum = Math.floor(Math.random() * ranksArr.length);
    return ranksArr[randNum];
};

async function isOut(playerId) {
    const player = await models.Player.findByPk(playerId);
    return player.strikes >= 3;
}

module.exports = { getQuestion, isRightAnswer, setAnswer, setPlayerRank, updatePlayerStats, questionToClient, isOut }