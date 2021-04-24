import React from 'react';

function PlayerStatus(props) {
    return (
        <div className="PlayerStatus">
            <h3>Quiz</h3>
            <span className="playerDetails">
                <img src={player.getAvatar()} />
                playerName : {player.name}
                score:  {player.score}
                <LivesLast />
            </span>
        </div>
    );
}

export default PlayerStatus;