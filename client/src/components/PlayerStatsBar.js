import React from 'react';
import LivesLast from "./LivesLast";
import "../styles/PlayerStatsBar.css"
import { useSelector } from "react-redux";

function PlayerStatsBar(props) {

    const player = useSelector((store) => store.player);
    const { name, score, strikes, avatarUrl } = player;
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