import { createContext } from 'react';

export const GameContext = React.createContext();
export const updateGameContext = React.createContext();

function GameProvider({ children }) {
    const [game, setGame] = useState({
        question: null,
        questionId: null,
        options: null,
        strikes: null,
        id: null,
        score: null,
        src: null,
        name: null,
        strikes: null,
        timeForQuestion: null,
        timeUntilAnswer: null
    });


    return (
        <GameContext.Provider value={game}>
            <updateGameContext.Provider value={setGame}>
                {children}
            </updateGameContext.Provider>
        </GameContext.Provider>

    )

}
export default GameProvider