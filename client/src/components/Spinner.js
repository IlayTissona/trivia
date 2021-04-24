
import React from 'react'
import '../styles/Spinner.css'
function Spinner() {

    function hide(e) {
        e.target.hidden = false;
    }

    return (
        <div id="floatingCirclesG" onAnimationEnd={hide}>
            <div className="f_circleG" id="frotateG_01"></div>
            <div className="f_circleG" id="frotateG_02"></div>
            <div className="f_circleG" id="frotateG_03"></div>
            <div className="f_circleG" id="frotateG_04"></div>
            <div className="f_circleG" id="frotateG_05"></div>
            <div className="f_circleG" id="frotateG_06"></div>
            <div className="f_circleG" id="frotateG_07"></div>
            <div className="f_circleG" id="frotateG_08"></div>
        </div>
    )
}

export default Spinner
