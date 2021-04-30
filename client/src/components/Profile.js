import React, { useRef } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setPlayer } from "../store/actions/playerActions";
import LeaderBoard from "./LeaderBoard";
import axios from "../store/axiosWraper";
import "../styles/Start.css";

function Profile() {
  const avatarRef = useRef();
  const dispatch = useDispatch();
  const { user, player } = useSelector((state) => state);
  if (!user) return <Redirect to="/" />;
  console.log("PROFILEEEEEEEEEEEEEEEEEEEEEEE", user);

  // if (player) return <Redirect to="/game" />;
  console.log(user.avatarUrl);
  return (
    <>
      <div>
        {user.name}
        {user.id}
        <img src={user.avatarUrl} alt="Avater" />
        {user.highScore}
        <button onClick={startButtonHandler}>Start!</button>
      </div>
      <LeaderBoard />
    </>
  );

  async function startButtonHandler(e) {
    e.preventDefault();
    const newGame = await axios.post("game/new_session", {
      userName: user.name,
    });

    console.log("blahsiblahs", newGame);
    dispatch(setPlayer(newGame));
  }
}

export default Profile;
