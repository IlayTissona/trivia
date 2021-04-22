const models = require('./models');
const Sequelize = require('sequelize');
const { Op } = require('sequelize');

const questionTemplate1 =
{
    "template_str": "Which country is most populous?",
    "model": "PopulationDensity",
    "question_col": "population",
    "answer_col": "country",
    "is_first": true,
    "type": 1
};
const questionTemplate = {
    "template_str": "What is the capital of <value>?",
    "model": "Capitals",
    "question_col": "capital",
    "answer_col": "country",
    "is_first": null,
    "type": 2
}

const questionTemplate2 = {
    "template_str": "Are there more people in <value1> than in <value2>?",
    "model": "PopulationDensity",
    "question_col": "population",
    "answer_col": "country",
    "is_first": true,
    "type": 3
}
switch (questionTemplate.type) {

    case 1:
        return generateFirst(questionTemplate);
    case 2:
        return generateSecond(questionTemplate);
    case 3:
        return generateThird(questionTemplate);
    // default:
    //     return generate()
}
// console.log(models);
async function generateFirst({ template_str, model, question_col, answer_col, is_first }) {
    const questionObj = { text: template_str, type: 1 };
    const results = await models[model].findAll({
        limit: 4,
        order: Sequelize.literal("rand()")
    }, { fields: [question_col, answer_col] });
    const finalResult = results.map(answer => answer.toJSON()).sort((a, b) => { return b[question_col] - a[question_col] })
    questionObj.answer = is_first ? finalResult[0][answer_col] : finalResult[finalResult.length - 1][answer_col];
    finalResult.forEach((option, index) => {
        questionObj["option" + (index + 1)] = option[answer_col]
    })  // only the string
    const questionSaved = models.SavedQuestion.findAll({
        where: questionObj
    });
    if (questionSaved[0]) {
        return await generateFirst({ template_str, model, question_col, answer_col, is_first })
    }
    models.SavedQuestion.create(questionObj)
    return questionObj
}

async function generateSecond({ template_str, model, question_col, answer_col, is_first }) {
    const results = await models[model].findAll({
        where: {
            [question_col]: { [Op.and]: [{ [Op.notLike]: "N/A" }, { [Op.ne]: null }] },
        },
        limit: 4,
        order: Sequelize.literal("rand()")
    }, { fields: [question_col, answer_col] });
    const finalResult = results.map(answer => answer.toJSON())

    const questionStr = template_str.replace("<value>", finalResult[0][answer_col])
    const questionObj = { text: questionStr, type: 2 };
    questionObj.answer = finalResult[0][question_col]
    finalResult.forEach((option, index) => {
        questionObj["option" + (index + 1)] = option[question_col]
    })
    const questionSaved = models.SavedQuestion.findAll({
        where: questionObj
    });
    if (questionSaved[0]) {
        return await generateFirst({ template_str, model, question_col, answer_col, is_first })
    }
    models.SavedQuestion.create(questionObj)
    return questionObj
}

async function generateThird({ template_str, model, question_col, answer_col, is_first }) {

    const results = await models[model].findAll({
        limit: 2,
        order: Sequelize.literal("rand()")
    }, { fields: [question_col, answer_col] });

    const finalResult = results.map(answer => answer.toJSON())
    console.log(finalResult);
    const questionStr = template_str.replace("<value1>", finalResult[0][answer_col]).replace("<value2>", finalResult[1][answer_col])

    const questionObj = { text: questionStr, type: 3, option1: "Yes", option2: "No" };

    if (is_first) {

        questionObj.answer = finalResult[0][question_col] > finalResult[1][question_col] ? "Yes" : "No";
    }
    else {
        questionObj.answer = finalResult[0][question_col] < finalResult[1][question_col] ? "Yes" : "No";
    }

    const questionSaved = models.SavedQuestion.findAll({
        where: questionObj
    });
    if (questionSaved[0]) {
        return await generateThird({ template_str, model, question_col, answer_col, is_first })
    }
    models.SavedQuestion.create(questionObj)
    return questionObj
}



















// rankToSelect = (unAsked) => {
//     const ranksArr = [];
//     const ranksCount = unAsked.reduce((prev, q) => (prev += q.rank), 0);
//     for (let i = 1; i <= 5; i++) {
//         const iPropabilty = Math.round((i / ranksCount) * 100);
//         for (let j = 0; j < iPropabilty; j++) {
//             ranksArr.push(i);
//         }
//     }
//     const randNum = Math.floor(Math.random() * 100);
//     return ranksArr[randNum];
// };

