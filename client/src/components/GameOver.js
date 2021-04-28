import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from './Loader'
import LeaderBoard from "./LeaderBoard";
import axios from "axios"
import "../styles/GameOver.css"

function GameOver() {
    const [endGameData, setEndGameData] = useState(null)
    const player = useSelector(state => state.player)
    useEffect(() => {
        axios.get(`/end_session/${player.id}`).then(endGame => {
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
            <LeaderBoard />
        </div>
}

export default GameOver;
