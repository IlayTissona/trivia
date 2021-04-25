import { React, useState } from 'react';

const game = useContext(GameContext);
const setGame = useContext(updateGameContext);

function Spinner(props) {
    const [time, setTime] = useState(game.timeForQuestion);

    setTimeout(setTime(time - 0.5), 500);

    return (
        <div id="spinner">
            {time}
        </div>
    );
}

export default Spinner;