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
    player && player.strikes >= 3 && axios.get(`/game/end_session/${player.id}`).then(endGame => {
      user.highScore = endGame.updatedUser.highScore;
      user.gamesPlayed = endGame.updatedUser.gamesPlayed;
      user.totalScore = endGame.updatedUser.totalScore;
      setEndGameData({ ...endGame });
      dispatch(setQuestion(initialQuestionState));
      dispatch(setUser(user));

    })
      .catch(console.log)
  }, [])
  if (logout) return < Redirect to={`/`} />
  if (!user) return <Redirect to="/" />;
  if (player && !player.gameEnded) return <Redirect to="/game" />;
  return (
    <>
      <button className="redirect-button" onClick={() => {
        axios.post('/user/logout')
        dispatch(setUser(false))
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
    const newGame = await axios.post("/game/new_session", {
      userName: user.name,
    });
    newGame.gameEnded = false;
    dispatch(setPlayer({ ...newGame }));
  }
  function lastGameStats() {
    if (player && !player.gameEnded) return null;
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
