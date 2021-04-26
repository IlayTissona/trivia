import React, { useContext, useState, useEffect } from "react";
import { GameContext } from "./GameProvider";
import axios from "axios"
import "../styles/GameOver.css"
import Loader from './Loader'

function GameOver() {
    const gameContext = useContext(GameContext);
    const [endGameData, setEndGameData] = useState(null)

    useEffect(() => {
        axios.get(`/end_session/${gameContext.id}`).then(endGame => {
            setEndGameData(endGame.data)
        })
    }, [])

    return !endGameData ? <Loader /> :
        <div id="game-over">

            <div id="player-stats" >
                {endGameData.playerStats.name}
                {endGameData.playerStats.avatarUrl}
               Score: {endGameData.playerStats.score}
               Passed: {endGameData.playerStats.passed}
            </div>
            <table id="leader-board">
                <thead id="table-headers">
                    <tr>
                        <th className="table-header">Name</th>
                        <th className="table-header">Avatar</th>
                        <th className="table-header">Name</th>
                        <th className="table-header">Score</th>
                    </tr>
                </thead>
                <tbody>

                    {endGameData.leaderBoard.map((player, i) => {
                        return (<tr key={i} className="lb-player" >
                            <td className="lb-player-rank">{player.rank}</td>
                            <td><img className="lb-player-avatar" alt="Avatar" src={player.avatarUrl} /></td>
                            <td className="lb-player-name">{player.name}</td>
                            <td className="lb-player-score">{player.score}</td>
                        </tr>)
                    })
                    }
                </tbody>
            </table>
        </div>
}

export default GameOver;
