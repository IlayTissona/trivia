import React, { useContext, useState } from "react";
import { GameContext } from "./GameProvider";
import axios from "axios"
import "../styles/GameOver.css"
import Loader from './Loader'

function GameOver() {
    const gameContext = useContext(GameContext);
    const { playerId } = gameContext;
    const [endGameData, setEndGameData] = useState(null)

    axios.get(`/end_session/${playerId}`).then(endGame => {
        setEndGameData(endGame.data)
    })
    return !endGameData ? <Loader /> :
        <Loader>

            <div id="player-stats" >
                {endGameData.playerStats.name}
                {endGameData.playerStats.avatarUrl}
                {endGameData.playerStats.score}
                {endGameData.playerStats.passed}
                {endGameData.playerStats.passed}
            </div>
            <table id="leader-board">
                <thead id="table-headers">
                    <th className="table-header">Rank</th>
                    <th className="table-header">Name</th>
                    <th className="table-header">Score</th>
                </thead>
                {endGameData.leaderBoard.map(player, i => {
                    return (<tr key={i} className="lb-player" >
                        <td className="lb-player-rank">{player.rank}</td>
                        <td><img className="lb-player-avatar" src={player.avatarUrl} /></td>
                        <td className="lb-player-name">{player.name}</td>
                        <td className="lb-player-score">{player.score}</td>
                    </tr>)
                })
                }
            </table>
        </Loader>
}

export default GameOver;
