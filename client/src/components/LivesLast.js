import React, { useContext } from 'react';
import { GameContext } from "./GameProvider";
import { Redirect } from "react-router-dom";



function LivesLast({ strikes }) {

    function createStrikeIcon() {
        const hearts = [];
        for (let i = 0; i < 3; i++) {
            if (i < strikes) {
                hearts.unshift(<i key={i} className="fas fa-heart-broken"></i>)
            }
            else hearts.unshift(<i key={i} className="fas fa-heart"></i>)

        }

        return strikes < 3 ? hearts : <Redirect to="/game-over" />
    }

    return <>

        {createStrikeIcon()}

    </>


}

export default LivesLast;