import React from 'react';
import { useSelector } from "react-redux";
import LivesLast from "./LivesLast";
import "../styles/PlayerStatsBar.css"

function PlayerStatsBar(props) {

    const player = useSelector((store) => store.player);
    const { name, score, strikes, avatarUrl } = player;
    console.log(avatarUrl);
    return (
        <div id="playerStatsBar">
            <img className="avatar" src={avatarUrl} alt="AVATAR" />
            {name}
            {score}
            <LivesLast strikes={strikes} />
        </div>
    );
}

export default PlayerStatsBar;