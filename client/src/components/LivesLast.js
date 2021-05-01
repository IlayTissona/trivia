import React from 'react';
// import { Redirect } from "react-router-dom";



function LivesLast({ strikes }) {

    function createStrikeIcon() {
        const hearts = [];
        for (let i = 0; i < 3; i++) {
            if (i < strikes) {
                hearts.unshift(<i key={i} className="fas fa-heart-broken"></i>)
            }
            else hearts.unshift(<i key={i} className="fas fa-heart"></i>)

        }

        // setTimeout(() => <Redirect to="/game-over" />, 5000)
        // return strikes < 3 ? hearts : <Redirect to="/game-over" />
        return hearts;
    }

    return <div id="lives">

        {createStrikeIcon()}

    </div>


}

export default LivesLast;