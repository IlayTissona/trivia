import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Redirect } from 'react-router-dom'
import Loader from './Loader'
import LeaderBoard from "./LeaderBoard";
import axios from "../store/axiosWraper"
import "../styles/GameOver.css"

function GameOver() {
    const [endGameData, setEndGameData] = useState(null)
    const player = useSelector(state => state.player)
    useEffect(() => {
        player && axios.get(`/game/end_session/${player.id}`).then(endGame => {
            setEndGameData(endGame)
        })
    }, [])
    if (!player) return <Redirect to="/" />;
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
