import React, { useState, useEffect } from 'react'
import Loader from './Loader';
import axios from "axios";

function LeaderBoard() {
    const [leaderBoard, setLeaderBoard] = useState("")


    useEffect(() => {
        axios.get(`/leader_board`).then((leaderBoardRes) => {
            setLeaderBoard(leaderBoardRes.data);
        });
    }, []);


    return leaderBoard ? (
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
                </tbody>
            </table>
        </div>
    ) : <Loader />
}

export default LeaderBoard
