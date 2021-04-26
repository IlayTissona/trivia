import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import GameProvider from './components/GameProvider.js'
import GameOver from './components/GameOver.js'
import Start from './components/Start.js'
import Game from './components/Game.js'

function App(props) {
  return (
    <GameProvider>
      <BrowserRouter>
        <Route exact path="/" component={Start} />
        <Route exact path="/game" component={Game} />
        <Route exact path="/game-over" component={GameOver} />
      </BrowserRouter>
    </GameProvider>
  );




}
export default App;
