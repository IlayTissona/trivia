import React, { useState } from 'react';
import axios from 'axios'

export const GameContext = React.createContext();
export const updateGameContext = React.createContext();

export const TimeContext = React.createContext();
export const updateTimeContext = React.createContext();

export const UtilsContext = React.createContext();
export const updateUtilsContext = React.createContext();

function GameProvider({ children }) {
    const [utils, setUtils] = useState({ setAnswer })
    const [timeControl, setTimeControl] = useState({
        timeForQuestion: 20, timeUntilAnswer: null
    });


    const [game, setGame] = useState({
        question: {
            id: null,
            options: null,
            text: null
        },
        id: null,
        score: null,
        src: null,
        name: null,
        strikes: 0,
        timeForQuestion: 20,
        timeUntilAnswer: null,
        timerStopped: false
    });


    return (
        <GameContext.Provider value={game}>
            <updateGameContext.Provider value={setGame}>
                <TimeContext.Provider value={timeControl}>
                    <updateTimeContext.Provider value={setTimeControl}>
                        <UtilsContext.Provider value={utils}>
                            <updateUtilsContext.Provider value={setUtils}>
                                {children}
                            </updateUtilsContext.Provider>
                        </UtilsContext.Provider>
                    </updateTimeContext.Provider>
                </TimeContext.Provider>
            </updateGameContext.Provider>
        </GameContext.Provider>

    )

    function setAnswer(answer) {
        console.log(answer);
    }


    function sendAnkjbnswer(playerId, questionId, answer, totalTime, time) {
        axios.post(`/answer/${playerId}`, {
            questionId, answer, totalTime, time
        }).then(res => {
            game.score = res.score;
            game.strikes = res.strikes;
            setGame({ ...game })
        })
    }
}
export default GameProvider