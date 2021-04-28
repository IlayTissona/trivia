import "./App.css";
import { useSelector } from 'react'
import { BrowserRouter, Route } from "react-router-dom";
// import GameProvider from "./components/GameProvider.js";
// import GameOver from "./components/GameOver.js";
import Start from "./components/Start.js";
// import Game from "./components/Game.js";
import { useContext, useEffect } from "react";
import Test from "./components/Test";
import GameOver from "./components/GameOver";
import NewSpinner from "./components/Timer";
import Rank from "./components/Rank";
import Question from "./components/Question";
import PlayerStatsBar from "./components/PlayerStatsBar";
import Timer from "./components/Timer";


function App(props) {


  return (
    <BrowserRouter>
      <Route exact path="/" component={Start} />
      <Route exact path="/game" >
        <PlayerStatsBar />
        <Question />
      </Route>
      <Route exact path="/game-over" component={GameOver} />
    </BrowserRouter>
  );
}
export default App;
