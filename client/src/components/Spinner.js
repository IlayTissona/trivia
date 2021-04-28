// import { React, useContext, useEffect, useRef } from 'react';
// import { GameContext } from './GameProvider'
// import { useDispatch, useSelector } from "react-redux";
// import { tick } from "../store/actions/timerActions";

// function Spinner({ time, startTime, setTime, sendAnswer }) {
//     const dispatch = useDispatch();
//     const timer = useSelector((store) => store.timer);
//     useEffect(() => {
//         const interval = setInterval(() => dispatch(tick()), 500);
//         return () => clearInterval(interval);
//     });

//     const timeUpSwitch = useRef(false)
//     // useEffect(() => {
//     //     if (!time) {
//     //         sendAnswer(game.id, game.question.id, "false answer", startTime.current, time)
//     //         setTimeout(() => {
//     //             if (startTime.current > 5) startTime.current = startTime.current - 0.5;
//     //             setTime(startTime.current)
//     //         }, 5000
//     //         )
//     //         timeUpSwitch.current = false;
//     //     }

//     // }, [time])
//     // if (time > 0) {
//     //     console.log(" in 0.5 decrementor");
//     //     setTimeout(() =>
//     //         setTime(time - 0.5), 500)
//     // }
//     return (
//         <div id="spinner">
//             {timer ? timer : "TimeUp!"}
//         </div>
//     );


// }

// export default Spinner;