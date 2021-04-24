import React from 'react';

function LivesLast() {
    const [strikes, setStrikes] = uSeState([true, true, true]);

    function createStrikeIcon() {
        return strikes.map(icon => {
            return (icon ? <i className="fas fa-heart-broken"></i> : <i className="fas fa-heart"></i>);
        });
    }
    return <>

        {createStrikeIcon()}

    </>


}

export default LivesLast;