import '../styles/GameOver.css'
import axios from 'axios'
const GameOver = ({ playerId, pts }) => {

    const refreshPage = async (playerId) => {
        window.location.reload()
        // console.log(playerId);
        // const { data: playerNewStats } = await axios.get(`api/game/retry/${playerId}`);

        // console.log(playerNewStats);
        // playerId = 
    };


    return (
        <div id="game-over">
            <h1 id="title">Game Over</h1>
            <p id="game-summary">You did {pts} out of 5!</p>
            <button className='button' onClick={() => refreshPage(playerId)}>Retry</button>
        </div>
    )
}

export default GameOver
