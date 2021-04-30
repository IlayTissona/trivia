import React, { useRef } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setPlayer } from "../store/actions/playerActions";
import LeaderBoard from "./LeaderBoard";
import axios from "../store/axiosWraper";
import "../styles/Profile.css";

function Profile() {
  const avatarRef = useRef();
  const dispatch = useDispatch();
  const { user, player } = useSelector((state) => state);
  if (!user) return <Redirect to="/" />;
  console.log("PROFILEEEEEEEEEEEEEEEEEEEEEEE", user);

  if (player) return <Redirect to="/game" />;
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

        </div>
        <img className="profile-avatar" src={user.avatarUrl} alt="Avatar" />
        <h1 id="profile-page-title">{user.name}</h1>
      </div>
      <button id="ButtonStart" onClick={startButtonHandler}>Start!</button>
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
    dispatch(setPlayer({ ...newGame }));
  }
}

export default Profile;
