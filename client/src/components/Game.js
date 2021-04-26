import React, { useState, useContext, useRef } from 'react';
import { GameContext, updateGameContext } from './GameProvider'
import Question from './Question.js'
import Spinner from './Spinner.js'
import PlayerStatsBar from './PlayerStatsBar.js'
import axios from 'axios'


function Game(props) {
    const game = useContext(GameContext)
    const setGame = useContext(updateGameContext)
    const totalSeconds = 20;
    const startTime = useRef(totalSeconds)
    const [time, setTime] = useState(totalSeconds);
    const [correctAnswer, setCorrectAnswer] = useState(null)
    const nextQuestion = useRef(false)
    if (!nextQuestion.current) {
        getQuestion(game.id).then(nq => nextQuestion.current = nq)
    }
    return (
        <div>
            <PlayerStatsBar />
            <Question correctAnswer={correctAnswer} setCorrectAnswer={setCorrectAnswer} getQuestion={getQuestion} startTime={startTime} sendAnswer={sendAnswer} time={time} setTime={setTime} nextQuestion={nextQuestion} getQuestion={getQuestion} />
            <Spinner startTime={startTime} sendAnswer={sendAnswer} time={time} setTime={setTime} />
        </div>
    );

    // Functions =========
    function sendAnswer(playerId, questionId, answer, totalTime, time) {
        return axios.post(`/answer/${playerId}`, {
            questionId, answer, totalTime, time
        }).then(({ data: res }) => {
            console.log(res);
            game.score = res.newScore;
            game.strikes = res.strikes;
            setGame({ ...game })
            setTimeout(() => {
                game.question = nextQuestion.current
                setCorrectAnswer(null)
                nextQuestion.current = false
                setGame({ ...game })
            }, 5000);
            return res.isCorrect
        })
    }

    function getQuestion(playerId) {
        return axios.get(`/question/${playerId}`)
            .then(newQuestion => newQuestion.data)
    }

}

export default Game;