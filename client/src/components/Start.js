import React from 'react'
import '../styles/Start.css'

const Start = ({ props }) => {

    const startQuiz = () => props(true)

    return (
        <div id="intro">
            <h1>Take the quiz.</h1>
            <h4>Whenever, you want.</h4>
            <button className="button" onClick={startQuiz}>Begin</button>
        </div>
    )
}

export default Start
