import React, { useContext, useState } from 'react';
import { GameContext } from "./GameProvider"
import axios from "axios"
import "../styles/Rank.css"

function Rank() {
    const [ranks, setRank] = useState([false, false, false, false, false])
    const game = useContext(GameContext)


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

                    {rank ? <i className="fas fa-star"></i> : <i className="far fa-star"></i>}

                </div>
            })
            }

        </div>
    );
}

export default Rank;