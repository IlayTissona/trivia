import '../styles/GameOver.css'

const GameOver = ({ pts }) => {

    const refreshPage = () => window.location.reload();

    return (
        <>
            <h1 id="title">Game Over</h1>
            <p id="game-summary">You did {pts} out of 5!</p>
            <button className='button' onClick={refreshPage}>Retry</button>
        </>
    )
}

export default GameOver
