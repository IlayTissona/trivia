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
  // 2. highscores display in endgame - with player's rank and score.
  // 3. button to show highscores before game starts.
  // 4. create time functionality.
  // 5. create rank functionality.
  // 6. change to routes.
  // 7. add 4 question templates.
  // 8. fix spinner and add number countdown.
  // Bonuses:
  //  1. after player's answer, display values differ by the question template.
  //  2. getting questions smarter.(only for 1 and 3)
  //  3. lifeline - drops two options, and if answered right gives only 30 points.





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
