import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setPlayer } from "../store/actions/playerActions";
import { setQuestion } from "../store/actions/questionActions";
import { initialQuestionState } from "../store/reducers/questionReducer";
import LeaderBoard from "./LeaderBoard";
import axios from "../store/axiosWraper";
import "../styles/Profile.css";

function Profile() {
  const dispatch = useDispatch();
  const [endGameData, setEndGameData] = useState(null)
  const { user, player } = useSelector((state) => state);
  useEffect(() => {
    player && player.strikes >= 3 && axios.get(`/game/end_session/${player.id}`).then(endGame => {
      setEndGameData(endGame);
      dispatch(setQuestion(initialQuestionState));
    })
  }, [])
  if (!user) return <Redirect to="/" />;
  console.log("PROFILEEEEEEEEEEEEEEEEEEEEEEE", user);
  if (player && !player.gameEnded) return <Redirect to="/game" />;
  console.log(user.avatarUrl);
  return (
    <>
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
