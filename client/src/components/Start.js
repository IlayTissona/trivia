import React, { useState, useEffect, useRef, useContext } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { GameContext, updateGameContext } from './GameProvider';
import '../styles/Start.css';

function Start(props) {
  const [leaderBoard, setLeaderBoard] = useState();
  const setGame = useContext(updateGameContext)
  const game = useContext(GameContext)
  const inputRef = useRef();


  const start = (e) => {
    e.preventDefault();
    const userName = inputRef.current.value;
    if (!userName) return;
    axios.post("/new_session", { userName, avatar: 1 }).then((player) => {
      for (const prop in player.data) {
        game[prop] = player.data[prop]
      }
      setGame({ ...game })
    });
  };

  useEffect(() => {
    axios.get(`/leader_board`).then((leaderBoardRes) => {
      setLeaderBoard(leaderBoardRes.data);
    });
  }, []);

  return !game.id ? (
    <div className="start">
      <h1 id="landing-page-title">Welcome To Trivia Game</h1>
      <form id="start-form">
        <label htmlFor="name">
          {" "}
          Name:
          <input type="text" name="name" ref={inputRef} placeholder="Name..." />
        </label>
        <button onClick={start}> Start </button>
      </form>
      <div id="leader-board">
        <table id="leader-board">
          <thead id="table-headers">
            <tr>
              <th className="table-header">Rank</th>
              <th className="table-header">Name</th>
              <th className="table-header">Score</th>
            </tr>
          </thead>
          <tbody>
            {leaderBoard?.map((player, i) => {
              return (
                <tr key={i} className="lb-player">
                  <td className="lb-player-rank">{player.rank}</td>
                  <td>
                    <img
                      className="lb-player-avatar"
                      src={player.avatarUrl}
                      alt="avatar"
                    />
                  </td>
                  <td className="lb-player-name">{player.name}</td>
                  <td className="lb-player-score">{player.score}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>

  ) : (
    <Redirect to={`/game`} />
  );
}

export default Start;
