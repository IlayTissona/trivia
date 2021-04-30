import { BrowserRouter, Route } from "react-router-dom";
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import Profile from "./components/Profile.js";
import GameOver from "./components/GameOver";
import Question from "./components/Question";
import PlayerStatsBar from "./components/PlayerStatsBar";
// import "./App.css";
import "../src/styles/AppN.css";
function App(props) {
  return (
    // <div id="App">
    <div className="wrapper">
      <div className="container">
        <h1 id="landing-page-title">Welcome To Trivia Game</h1>
        <BrowserRouter>
          <>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
          </>
          <Route exact path="/profile/:userId" component={Profile} />
          <Route exact path="/game">
            <PlayerStatsBar />
            <Question />
          </Route>
          <Route exact path="/game-over" component={GameOver} />
        </BrowserRouter>
      </div>

      <ul className="bg-bubbles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    // </div>
  );
}
export default App;
