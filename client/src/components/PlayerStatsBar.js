import React, { useContext } from 'react';
import { GameContext } from "./GameProvider";
import LivesLast from "./LivesLast";
import "../styles/PlayerStatsBar.css"

function PlayerStatsBar(props) {

    const game = useContext(GameContext);
    return (
        <div id="playerStatsBar">
            {game.name}
            {game.score}
            <LivesLast />
        </div>
    );
}

export default PlayerStatsBar;