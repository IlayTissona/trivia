import { React, useEffect, useContext, useRef } from 'react';
import { GameContext, updateGameContext, TimeContext, updateTimeContext } from "./GameProvider";
import Loader from "./Loader"
import Rank from "./Rank"
import axios from "axios"

function Question({ setStopTimer }) {
    const setGame = useContext(updateGameContext)
    const game = useContext(GameContext);
    const setTimeControl = useContext(updateTimeContext)
    let { timeForQuestion } = useContext(TimeContext);
    const nextQuestion = useRef(false)
    const setQuestion = (question) => {
        game.question = question
        setGame({ ...game })
    }

    useEffect(() => {
        console.log(game.id)
        getQuestion(game.id).then((res) => {
            console.log(res)
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



    function setAnswer(playerId, questionId, answer, totalTime, time) {
        setStopTimer(true);
        axios.post(`/answer/${playerId}`, {
            questionId, answer, totalTime, time
        }).then(res => {
            game.score = res.score;
            game.strikes = res.strikes;
            setGame({ ...game })
        })
    }
    function createOptions() {
        const { options } = game.question
        const questionOptions = [];
        for (let i = 0; i < options.length; i++) {
            questionOptions.push(
                <li key={i} onClick={() => setAnswer(game.id, game.question.id,
                    options[i], game.timeForQuestion, game.timeUntilAnswer)} className="option">{options[i]}</li>)
        }
        return questionOptions;
    }
    function getQuestion(playerId) {
        console.log(playerId);
        return axios.get(`/question/${playerId}`)
            .then(newQuestion => newQuestion.data)
    }
}

export default Question;