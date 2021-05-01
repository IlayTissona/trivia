import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { setPlayer } from "../store/actions/playerActions";

import LivesLast from "./LivesLast";
import "../styles/PlayerStatsBar.css"

function PlayerStatsBar(props) {
    const { player } = useSelector((store) => store);
    const history = useHistory();
    const dispatch = useDispatch();
    if (!player) return <Redirect to="/" />;
    const { name, score, strikes, avatarUrl } = player;
    console.log(avatarUrl);
    return (
        <div id="playerStatsBar">
            <div id="game-stats">
                <img className="avatar" src={avatarUrl} alt="AVATAR" />
                {name}
                <LivesLast strikes={strikes} />
            </div>
            <span id="score"> Score: {score}</span>
            <svg xmlns="http://www.w3.org/2000/svg" onClick={resetGame} width="32" height="32" fill="currentColor" id="return-arrow" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z" />
            </svg>

        </div>
    );

    function resetGame(e) {
        console.log("changing the state");
        player.gameEnded = true
        dispatch(setPlayer({ ...player }))
        setTimeout(() => history.push(`/profile/${player.id}`), 4000)
        return
    }
}

export default PlayerStatsBar;