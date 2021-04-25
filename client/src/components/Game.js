import React from 'react';
import { GameContext, updateGameContext } from './components/GameProvider'

function Game(props) {
    const game = useContext(GameContext)
    const setGame = useContext(updateGameContext)
    const nextQuestion = useRef(false)


    return (
        <div>
            <PlayerStatsBar />
            <Question />

        </div>
    );

    // Functions
    // =========

    function getQuestion(playerId) {
        axios.get(`/api/game/question/${playerId}`).then(newQuestion => {
            nextQuestion.current = newQuestion;
        })
    }

    function setAnswer(playerId, questionId, answer, totalTime, time) {
        axios.post(`/api/game/answer/${playerId}`, {
            questionId, answer, totalTime, time
        }).then(res => {
            game.score = res.score;
            game.strikes = res.strikes;
            setGame({ ...game })
        })
    }

}

export default Game;