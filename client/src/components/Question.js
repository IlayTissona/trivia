import { React, useState } from 'react';

const game = useContext(GameContext);
const setGame = useContext(updateGameContext);

function createOptions() {
    const questionOptions = [];
    for (let i = 0; i < options.length; i++) {
        questionOptions.push(
            <li onClick={setAnswer(game.id, game.questionId,
                options[i], game.timeForQuestion, game.timeUntilAnswer)} className="option">{options[i]}</li>)
    }
    return questionOptions;
}



function Question(props) {
    const [question, setQuestion] = useState(game.question);
    const [options, setOptions] = useState(game.options)
    return (
        <div id="question">
            <h1>{question.text}</h1>
            <ul>
                {createOptions()}
            </ul>

        </div>
    );
}

export default Question;