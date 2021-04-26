import React, { useState } from 'react';
// import { GameContext, updateGameContext } from './GameProvider'
import Question from './Question.js'
import Spinner from './Spinner.js'
import PlayerStatsBar from './PlayerStatsBar.js'



function Game(props) {
    // const game = useContext(GameContext)
    // const setGame = useContext(updateGameContext)
    const [stopTimer, setStopTimer] = useState("b")

    return (
        <div>
            <PlayerStatsBar />
            <Question setStopTimer={setStopTimer} />
            <Spinner stopTimer={stopTimer} setStopTimer={setStopTimer} />
        </div>
    );

    // Functions
    // =========




}

export default Game;