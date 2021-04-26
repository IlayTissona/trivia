import { React, useEffect, useContext, useState } from 'react';
import { GameContext, updateGameContext, TimeContext, updateTimeContext, UtilsContext, updateUtilsContext } from "./GameProvider";
import Loader from "./Loader"
import Rank from "./Rank"
import axios from "axios"
import "../styles/Question.css"

function Question({ time, startTime, sendAnswer, nextQuestion, getQuestion, setCorrectAnswer, correctAnswer }) {
    const setGame = useContext(updateGameContext)
    const game = useContext(GameContext);
    const setTimeControl = useContext(updateTimeContext)
    let { timeForQuestion } = useContext(TimeContext);


    const setQuestion = (question) => {
        game.question = question
        setGame({ ...game })
    }

    useEffect(() => {
        console.log(game.id)
        getQuestion(game.id).then((res) => {
            setTimeControl({ timeForQuestion, timeUntilAnswer: timeForQuestion })
            setQuestion(res);

            getQuestion(game.id)
                .then((res) => nextQuestion.current = res)
        })

    }, [])


    return game.question.text ? (
        <div id="question">
            <h1>{game.question.text}</h1>
            <ul id="options">
                {createOptions()}
            </ul>
            <Rank nextQuestion={nextQuestion} />
        </div>
    ) : <Loader />;




    function createOptions() {
        const { options } = game.question
        const questionOptions = [];
        for (let i = 0; i < options.length; i++) {
            questionOptions.push(
                <li key={i} className={correctAnswer === i ? " correct" : null} onClick={() => {
                    if (correctAnswer) return;
                    setCorrectAnswer(true);
                    sendAnswer(game.id, game.question.id, options[i], startTime.current, startTime.current - time).then(isCorrect => setCorrectAnswer(i))
                }
                } className="option" > {options[i]}</li >)
        }
        return questionOptions;
    }

}

export default Question;