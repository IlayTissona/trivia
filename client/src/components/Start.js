import React, { useRef } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setPlayer } from "../store/actions/playerActions";
import LeaderBoard from './LeaderBoard';
import axios from "axios";
import '../styles/Start.css';


function Start() {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const player = useSelector(state => state.player)
  const start = (e) => {
    e.preventDefault();
    const userName = inputRef.current.value;
    if (!userName) return;
    axios.post("/new_session", { userName, avatar: 4 }).then(({ data: player }) => {
      dispatch(setPlayer({ ...player }));
    })
      .catch((err) => console.log("error in new_session in Start Component: ", err));
  };


  return (
    (player.id === null) ? (
      <div className="start">
        <h1 id="landing-page-title">Welcome To Trivia Game</h1>
        <form id="start-form">
          <label htmlFor="name" className="label">
            Name :
          <input type="text" name="name" ref={inputRef} placeholder="Name" />
          </label>
          <label htmlFor="password" className="label">
            Password :
          <input
              type="password"
              name="password"
              ref={inputRef}
              placeholder="password"
            />
          </label>
          <button onClick={start}> Start </button>
        </form>
        <LeaderBoard />
      </div>

    ) : (
      <Redirect to={`/game`} />
    )
  );
}

export default Start;
