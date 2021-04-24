import React from 'react';

function PlayerStatus(props) {
    const [strikes, setStrikes] = useState(0);
    function setLivesLast() {
        for (let i = 0; i < 3 - strikes; i++) {
            return <div>
                <
            </div>
        }
    }
    return (
        <div className="PlayerStatus">
                    <h3>Quiz</h3>
                    <span className="playerDetails">
                        <img src={player.getAvatar()} />
                playerName : {player.name}
                score:  {player.score}
                strikes : { }
                    </span>
                </div>
    );
}

export default PlayerStatus;