import React, { useContext } from 'react';
import { GameContext } from "./GameProvider"


function LivesLast({ }) {

    const game = useContext(GameContext)
    // const setGame = useContext(updateGameContext)
    const { strikes } = game;

    // function updateStrikes() {
    //     const newStrikes = [true, true, true];
    //     for (let i = 0; i < numOfStrikes; i++) {
    //         newStrikes[i] = !newStrikes[i];
    //     }
    //     setStrikes(newStrikes);
    // }

    function createStrikeIcon() {
        const hearts = [];
        for (let i = 0; i < 3; i++) {
            if (i < strikes) {
                hearts.unshift(<i key={i} className="fas fa-heart-broken"></i>)
            }
            else hearts.unshift(<i key={i} className="fas fa-heart"></i>)

        }
        // return strikes.map(icon => {
        //     return (icon ? <i className="fas fa-heart"></i> : <i className="fas fa-heart-broken"></i>);
        // });
        return hearts
    }

    return <>

        {createStrikeIcon()}

    </>


}

export default LivesLast;