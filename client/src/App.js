import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Start from "./components/Start.js";
import GameOver from "./components/GameOver";
import Question from "./components/Question";
import PlayerStatsBar from "./components/PlayerStatsBar";

function App(props) {
  return (
    <>
      <BrowserRouter>
        <Route exact path="/" component={Start} />
        <Route exact path="/game">
          <PlayerStatsBar />
          <Question />
        </Route>
        <Route exact path="/game-over" component={GameOver} />
      </BrowserRouter>
    </>
  );
}
export default App;
