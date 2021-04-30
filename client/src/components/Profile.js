import React, { useRef, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setPlayer } from "../store/actions/playerActions";
import LeaderBoard from './LeaderBoard';
import MiniLoader from "./MiniLoader"
import axios from "../store/axiosWraper";
import Register from './Register'
import Login from './Login'
import '../styles/Start.css';

function Profile() {
  const avatarRef = useRef()
  const dispatch = useDispatch();
  const user = useSelector(state => state.user)
  const player = useSelector(state => state.player)
  if (!user) return <Redirect to="/" />
  console.log("PROFILEEEEEEEEEEEEEEEEEEEEEEE", user)

  if (player) return <Redirect to='/game' />

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
    </>)
  // <div className="start">
  //   <h1 id="landing-page-title">Welcome To Trivia Game</h1>

  async function startButtonHandler(e) {
    e.preventDefault();
    const newGame = await axios.post("game/new_session", { userName: user.name })

    console.log("blahsiblahs", newGame);
    dispatch(setPlayer(newGame))
  }

};



export default Profile;
