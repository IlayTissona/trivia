import React from 'react';
import LivesLast from './LivesLast'
import '../styles/PlayerStatus.css'

function PlayerStatus(props) {
    const player = props.player;
    return (
        <div id="playerStatus">
            <h3>Quiz</h3>
            <span className="playerDetails">
                <img src={player.src} />
                <br />
                playerName : {player.name}
                <br />
                score:  {player.score}
                <br />
                <LivesLast numOfStrikes={player.strikes} />
            </span>
        </div>
    );
}

export default PlayerStatus;