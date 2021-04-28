import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { tick } from "../store/actions/timerActions";

function Test() {
    const dispatch = useDispatch();
    const timer = useSelector((store) => store.timer);
    useEffect(() => {
        const interval = setInterval(() => dispatch(tick()), 500);
        return () => clearInterval(interval);
    });


    return (
        <div>
            {timer.totalTime - timer.timePassed}
        </div>
    )
}

export default Test
