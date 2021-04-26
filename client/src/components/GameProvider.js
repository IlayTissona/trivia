import React, { useState } from 'react';

export const GameContext = React.createContext();
export const updateGameContext = React.createContext();

export const TimeContext = React.createContext();
export const updateTimeContext = React.createContext();

function GameProvider({ children }) {

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
                        {children}
                    </updateTimeContext.Provider>
                </TimeContext.Provider>
            </updateGameContext.Provider>
        </GameContext.Provider>

    )

    // function changeTimeControl() {

    //     setTimeControl({})
    // }
}
export default GameProvider