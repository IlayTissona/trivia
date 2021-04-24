import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css'
import Start from './components/Start'
import Quiz from './components/Quiz'

function App() {

  const [shouldStart, setShouldStart] = useState(false);

  return (
    <div className="quiz">
      { shouldStart ? <Quiz /> : <Start setShouldStart={setShouldStart} />}
    </div>
  );
}

export default App;
