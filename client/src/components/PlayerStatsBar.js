import React from 'react';
import LivesLast from "./LivesLast";

const game = useContext(GameContext);
const setGame = useContext(updateGameContext);

function PlayerStatsBar(props) {
    return (
        <div id="playerStatsBar">
            {game.name}
            {game.score}
            <LivesLast />
        </div>
    );
}

export default PlayerStatsBar;