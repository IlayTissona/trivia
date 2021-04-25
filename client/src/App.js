import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import GameProvider from './components/GameProvider.js'
import GameOver from './components/GameOver.js'
// , Game, Start
// const game = useContext(GameContext);
// const setGame = useContext(updateGameContext);

function App() {
  return (
    <GameProvider>
      <BrowserRouter>
        {/* <Route path="/start" component={Start} />
        <Route path="/game" component={Game} /> */}
        <Route path="/" component={GameOver} /> {/* game-over*/}
      </BrowserRouter>
    </GameProvider>
  );




}
export default App;
