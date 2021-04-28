import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { tick } from "../store/actions/timerActions";

// const timeUpAnswer =mashu

export default function Timer({ timeUp }) {
  const dispatch = useDispatch();
  const timer = useSelector((store) => store.timer);
  useEffect(() => {
    const interval = setInterval(() => dispatch(tick()), 500);
    return () => clearInterval(interval);
  }, []);

  if (timer.totalTime - timer.timePassed) timeUp();

  return (
    <>
      <div id="timer">
        {timer.totalTime - timer.timePassed > 0
          ? timer.totalTime - timer.timePassed
          : "Time Up!"}
      </div>
    </>
  );
}
