import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Redirect from "react-router-dom";

function Start(props) {
  const [leaderBoard, setLeaderBoard] = useState();
  const [playerId, setPlayerId] = useState(false);
  const inputRef = useRef();

  const start = () => {
    const userName = inputRef.current.value;
    if (!userName) return;
    axios.post("/api/game/new_session", { userName }).then((player) => {
      setPlayerId(player.data.id);
    });
  };

  useEffect(() => {
    axios.get(`/api/game/leader_board`).then((leaderBoardRes) => {
      setLeaderBoard(leaderBoardRes.data);
    });
  }, []);

  return playerId ? (
    <>
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
            <th className="table-header">Rank</th>
            <th className="table-header">Name</th>
            <th className="table-header">Score</th>
          </thead>
          {leaderBoard.map((player, i) => {
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
        </table>
      </div>
    </>
  ) : (
    <Redirect to={`/game/${playerId}`} />
  );
}

export default Start;
