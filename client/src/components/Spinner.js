import { React, useContext, useState, useEffect, useRef } from 'react';
import { GameContext, updateTimeContext, TimeContext } from './GameProvider'


function Spinner({ stopTimer, setStopTimer }) {
    const game = useContext(GameContext);
    // const setGame = useContext(updateGameContext);
    const setTimeControl = useContext(updateTimeContext)
    let { timeUntilAnswer, timeForQuestion } = useContext(TimeContext);
    const startTime = useRef(20)
    const [time, setTime] = useState(timeForQuestion);
    // const setTimeoutIsOff = useRef(true)
    const timeUpSwitch = useRef(false)
    useEffect(() => {
        if (!time) {
            setTimeout(() => {
                startTime.current = startTime.current - 0.5;
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