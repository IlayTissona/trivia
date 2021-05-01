import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { setPlayer } from "../store/actions/playerActions";

import LivesLast from "./LivesLast";
import "../styles/PlayerStatsBar.css"

function PlayerStatsBar(props) {
    // const [backToProfile, setBackToProfile] = useState(false)
    const { player } = useSelector((store) => store);
    const history = useHistory();
    const dispatch = useDispatch();
    if (!player) return <Redirect to="/" />;
    const { name, score, strikes, avatarUrl } = player;
    console.log(avatarUrl);
    return (
        <div id="playerStatsBar">

            <img className="avatar" src={avatarUrl} alt="AVATAR" />
            {name}
            {score}
            <LivesLast strikes={strikes} />
            <button className="redirect-button" onClick={(e) => {
                e.preventDefault();
                console.log("changing the state");
                player.gameEnded = true
                dispatch(setPlayer({ ...player }))
                setTimeout(() => history.push(`/profile/${player.id}`), 4000)
                return
            }} >Back to profile</button>
        </div>
    );
}

export default PlayerStatsBar;