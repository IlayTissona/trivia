import React from 'react'
import '../styles/Start.css'
import axios from 'axios';


// import { useForm } from 'react-hook-form';

const Start = ({ setShouldStart }) => {

    // const generateGame = async (playerName) => {

    // }

    const startQuiz = async (e) => {
        e.preventDefault();
        const playerName = e.target[0].value;
        // generateGame(playerName)
        try {
            const { data: playerStats } = await axios.post('/api/game/new_session', { userName: playerName, avatar: 1 })
            console.log(playerStats);
            setShouldStart(true)
        }
        catch (err) { console.log(err) }
    }

    return (
        <div id="intro">
            <h1>Take the quiz.</h1>
            <h4>Whenever, you want.</h4>
            <form onSubmit={startQuiz}>

                <input type="text" placeholder="Name" required />
                <input type="submit" className="button" value="Begin" />
            </form>
        </div>
    )
}

export default Start
