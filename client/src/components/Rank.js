import React, { useEffect, useState } from 'react';
import "../styles/Rank.css"
import axios from "../store/axiosWraper"

function Rank({ playerId, questionId, goToNextQuestion, nextQuestion }) {
    const [ranks, setRank] = useState([false, false, false, false, false])




    const hoverHandler = (rank) => {
        const newRanks = ranks.map((v, i) => i < rank)
        setRank(newRanks)
    }

    const clickHandler = (rank) => {
        axios.post(`/game/rank/${playerId}`, { questionId: questionId, rank }).then(() => goToNextQuestion(nextQuestion.current));
    }
    useEffect(() => {
        const timeOut = setTimeout(() => {
            goToNextQuestion(nextQuestion.current)
        }, 6000);
        return () => {
            clearTimeout(timeOut)
        }
    }, []);

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