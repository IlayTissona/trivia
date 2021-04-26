import { React, useContext, useEffect, useRef } from 'react';
import { GameContext } from './GameProvider'


function Spinner({ time, startTime, setTime, sendAnswer }) {
    const game = useContext(GameContext);


    const timeUpSwitch = useRef(false)
    useEffect(() => {
        if (!time) {
            sendAnswer(game.id, game.question.id, "false answer", startTime.current, time)
            setTimeout(() => {
                if (startTime.current > 5) startTime.current = startTime.current - 0.5;
                setTime(startTime.current)
            }, 5000
            )
            timeUpSwitch.current = false;
        }

    }, [time])
    if (time > 0) {
        console.log(" in 0.5 decrementor");
        setTimeout(() =>
            setTime(time - 0.5), 500)
    }
    return (
        <div id="spinner">
            {time ? time : "TimeUp!"}
        </div>
    );


}

export default Spinner;