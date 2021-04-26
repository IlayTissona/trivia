import React, { useState } from 'react';

export const GameContext = React.createContext();
export const updateGameContext = React.createContext();

export const TimeContext = React.createContext();
export const updateTimeContext = React.createContext();

function GameProvider({ children }) {
    const [utils, setUtils] = useState({ setAnswer })
    const [timeControl, setTimeControl] = useState({
        timeForQuestion: 6, timeUntilAnswer: null
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
        timerStopped: false
    });


    return (
        <GameContext.Provider value={game}>
            <updateGameContext.Provider value={setGame}>
                <TimeContext.Provider value={timeControl}>
                    <updateTimeContext.Provider value={setTimeControl}>
                        {children}
                    </updateTimeContext.Provider>
                </TimeContext.Provider>
            </updateGameContext.Provider>
        </GameContext.Provider>

    )

    function setAnswer(answer) {
        console.log(answer);
    }



}
export default GameProvider