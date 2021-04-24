import React, { useState, useRef } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css'
import Start from './components/Start'
import Quiz from './components/Quiz'
import GameOver from './components/GameOver';

// import { createStore } from 'redux';
// import { Provider } from 'react-redux'

// const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


function App() {

  // set as false to begin with start page
  const [shouldStart, setShouldStart] = useState(false);
  const [playerisOut, setPlayerIsOut] = useState(false);
  const [player, setPlayer] = useState(false);


  // To-Do-List
  // =========

  // 1. end-session http request.
  // 2. create time functionality.
  // 3. create rank functionality.
  // 4. change to routes.
  // 5. fix spinner and add number countdown.





  function setNewPlayer(newPlayer) {
    setPlayer(newPlayer)
    setShouldStart(true)

  }
  return (
    <div className="quiz">
      {shouldStart ? <Quiz player={player} setPlayer={setPlayer} playerisOut={playerisOut} setPlayerIsOut={setPlayerIsOut} /> : <Start setNewPlayer={setNewPlayer} />}
      {playerisOut && <GameOver playerId={player || player.current.id} />}
    </div>
  );




}

export default App;
