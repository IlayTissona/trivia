import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import GameProvider from "./components/GameProvider.js";
import GameOver from "./components/GameOver.js";
import Start from "./components/Start.js";
import Game from "./components/Game.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { tick } from "./store/actions/timerActions";

function App(props) {
  const dispatch = useDispatch();
  const timer = useSelector((store) => store);
  useEffect(() => {
    const interval = setInterval(() => dispatch(tick()), 500);
    return () => clearInterval(interval);
  });
  console.log(timer);
  return (
    <GameProvider>
      <div>{timer.timePassed}</div>
      <BrowserRouter>
        <Route exact path="/" component={Start} />
        <Route exact path="/game" component={Game} />
        <Route exact path="/game-over" component={GameOver} />
      </BrowserRouter>
    </GameProvider>
  );
}
export default App;
