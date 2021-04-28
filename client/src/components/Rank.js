import React, { useState } from 'react';
import axios from "axios"
import "../styles/Rank.css"

function Rank({ playerId, questionId, goToNextQuestion }) {
    const [ranks, setRank] = useState([false, false, false, false, false])
    const timeOut = setTimeout(goToNextQuestion, 3000);


    const hoverHandler = (rank) => {
        console.log("in hover, and rank is: ", rank);
        const newRanks = ranks.map((v, i) => i < rank)
        setRank(newRanks)
    }

    const clickHandler = (rank) => {
        console.log(rank);
        axios.post(`/rank/${playerId}`, { questionId: questionId, rank }).then(goToNextQuestion);
        clearTimeout(timeOut)
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