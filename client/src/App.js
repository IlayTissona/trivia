import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import Profile from "./components/Profile.js";
import GameOver from "./components/GameOver";
import Question from "./components/Question";
import PlayerStatsBar from "./components/PlayerStatsBar";
import { useSelector } from "react-redux";
function App(props) {
  return (
    <>
      <BrowserRouter>
        <><Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} /></>
        <Route exact path="/profile/:userId" component={Profile} />
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
