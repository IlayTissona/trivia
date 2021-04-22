// Which country is most populous ?
//Which country is least populous ?
//Which country is the largest by total area ?
//Which country is the smallest by total area ?
//Which country is the most densely populated ?
// Which country is the least densely populated ?
//Which country has the most cell phones per person ?

//What is the capital of X ?
//How many people live in X ?
//In what continent is X ?

// Are there more people in X than in Y ?
//Is X larger than Y ?
//Does X have a higher population density than Y ?
//Is the quality of life in X higher than the quality of life in Y ?
//Is the crime rate of X higher than the crime rate in Y ?
// Are restaurants in X more expensive than restaurants in Y



// templateStr: DataTypes.STRING,
// model: DataTypes.STRING,
// questionCol: DataTypes.STRING,
// answerCol: DataTypes.STRING,
// isFirst: DataTypes.BOOLEAN,
// type: DataTypes.INTEGER

[{
    "template_str": "Which country is most populous?",
    "model": "PopulationDensity",
    "question_col": "country",
    "answer_col": "population",
    "is_first": true,
    "type": 1
}]

const questionTemplate = {};

switch (questionTemplate.type) {

    case 1:
        return generateFirst(questionTemplate);
    case 2:
        return generateSecond(questionTemplate);
    case 3:
        return generateThird(questionTemplate);
    default:
        return
}

function generateFirst({ template_str, model, question_col, answer_col, is_first }) {
    const questionObj = { text: template_str };
    models[model].findall({
        limit: 4,
        order: Sequelize.literal("rand()")
    }, { fields: [question_col, answer_col])
        .then(results =>
            results.findAll({ order: population }).then(finalResult => {

                questionObj.answer = is_first ? results[0][answer_col] : results[-1][answer_col];
                questionObj.options = results.map(option => option.answer_col)  // only the string
                models.savedquestion.findAll({
                    where: {
                        text: questionObj.text,
                        option1: questionObj.options[0]
                    option2: questionObj.options[1]
                    option3: questionObj.options[2]
                    option4: questionObj.options[3]
                    }
                }).then(res => {
                    if (res[0]) {
                        return generateFirst({ template_str, model, question_col, answer_col, is_first })
                    }
                    models.savedquestion.create(questionObj).
                    return questionObj
                })

                    ;
            })

        )


}


[{
    "template_str": "What is the capital of <questionCol>?",
    "model": "Capitals",
    "question_col": "country",
    "answer_col": "capital",
    "is_first": null,
    "type": 2
}]

[{
        "template_str": "Are there more people in <value1> than in <value2>?",
        "model": "PopulationDensity",
        "question_col": "country",
        "answer_col": "population",
        "is_first": true,
        "type": 3
    }]




//  !!!!!!!!!!!DESC!!!!!!!!!!!!!!!




POST session / new
    body{ username, avatar }
return { updated: true, player }

GET question: playerId
return { question }

POST answer
body{ playerId, questionId, answer }
return { pass: true, player }      // generated baseScore(*time)/ saves calculatedScore(*time)

POST rank
body{ questionId, rank }
return { updated: true }

GET endGame /: playerId      // updates the stats after the return 
return { leaderBoard, playerStats }


    //  add gameId column to Questions_asked_per_player
//      create a method toClient() which returns an object 


    //in user should be highscore column.


     // getQuestion request in useRef if question state changed.
    //  when showing a question sends http request to get another question in ref, only when clicks the answer(and rank //      scene ends) sets question state to the new question which is saved in ref.