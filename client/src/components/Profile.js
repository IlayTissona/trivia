import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setPlayer } from "../store/actions/playerActions";
import { setQuestion } from "../store/actions/questionActions";
import { setUser } from "../store/actions/userActions";
import { initialQuestionState } from "../store/reducers/questionReducer";
import LeaderBoard from "./LeaderBoard";
import axios from "../store/axiosWraper";
import "../styles/Profile.css";

function Profile() {
  const dispatch = useDispatch();
  const [logout, setLogout] = useState(false);
  const [endGameData, setEndGameData] = useState(null)
  const { user, player } = useSelector((state) => state);
  useEffect(() => {
    console.log("in the useEffect", player && player.strikes);
    player && player.strikes >= 3 && axios.get(`/game/end_session/${player.id}`).then(endGame => {
      console.log(user);
      user.highScore = endGame.updatedUser.highScore;
      user.gamesPlayed = endGame.updatedUser.gamesPlayed;
      user.totalScore = endGame.updatedUser.totalScore;
      console.log(endGame.updatedUser);
      setEndGameData({ ...endGame });
      dispatch(setQuestion(initialQuestionState));
      dispatch(setUser(user));

    })
      .catch(console.log)
  }, [])
  if (logout) {
    axios.post('/user/logout').then(console.log);
    return < Redirect to={`/`} />

  }
  if (!user) return <Redirect to="/" />;
  console.log("PROFILEEEEEEEEEEEEEEEEEEEEEEE", user);
  if (player && !player.gameEnded) return <Redirect to="/game" />;
  console.log(user.avatarUrl);
  return (
    <>
      <button className="redirect-button" onClick={() => {
        setLogout(true)
      }
      }>Logout</button>
      <div id='profile-div' >
        <div id='profile-details' >
          Best Score:  {user.highScore}
          <br />
        Total Games: {user.gamesPlayed}
          <br />
        Total Score: {user.totalScore}
          {lastGameStats()}
        </div>
        <img className="profile-avatar" src={user.avatarUrl} alt="Avatar" />
        <h1 id="profile-page-title">{user.name}</h1>
      </div>
      <button id="ButtonStart" onClick={startButtonHandler}>{player && player.gameEnded ? "Go Again!" : "Start!"}</button>
      <LeaderBoard />
    </>
  );

  async function startButtonHandler(e) {
    e.preventDefault();
    console.log("in here?");
    const newGame = await axios.post("/game/new_session", {
      userName: user.name,
    });

    console.log("blahsiblahs", newGame);
    newGame.gameEnded = false;
    dispatch(setPlayer({ ...newGame }));

    // return <Redirect to="/game" />
  }
  function lastGameStats() {
    // console.log(player, player.gameEnded);
    if (player && !player.gameEnded) return null;
    console.log(endGameData);
    return endGameData && (
      <>
        <br />
        {`Correct Answers: ${endGameData.playerStats.passed}`}
        < br />

        {`Score: ${endGameData.playerStats.score}`}
      </>
    )
  }
}

export default Profile;
