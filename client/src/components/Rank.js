import React, { useContext, useState } from 'react';
import { GameContext, updateGameContext, TimeContext, updateTimeContext } from "./GameProvider"
import axios from "axios"
import "../styles/Rank.css"

function Rank({ nextQuestion }) {
    const [ranks, setRank] = useState([false, false, false, false, false])
    const game = useContext(GameContext)
    // const setGame = useContext(updateGameContext)
    // const setTimeControl = useContext(updateTimeContext)
    // const timeControl = useContext(TimeContext);

    const hoverHandler = (rank) => {
        console.log("in hover, and rank is: ", rank);
        const newRanks = ranks.map((v, i) => i < rank)
        setRank(newRanks)
    }

    const clickHandler = (rank) => {

        axios.post(`/rank/${game.id}`, { questionId: game.question.id, rank })
    }

    return (
        <div id="rank">



            {ranks.map((rank, i) => {


                return <div key={i} className={`star${rank ? "-picked" : ""}`} onClick={() => clickHandler(i + 1)}
                    onMouseEnter={() => { hoverHandler(i + 1) }}>
                    {/* {i + 1 <= rank ? */}
                    <i className="fas fa-star"></i>
                    {/* : <span className="empty-star"></span>} */}
                </div>
            })
            }

        </div>
    );
}

export default Rank;