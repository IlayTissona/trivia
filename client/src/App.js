import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css'
import Start from './components/Start'
import Quiz from './components/Quiz'
// import { createStore } from 'redux';
// import { Provider } from 'react-redux'

// const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


function App() {

  // set as false to begin with start page
  const [shouldStart, setShouldStart] = useState(true);

  return (

    // <Provider store={store}>

    <div className="quiz">
      {shouldStart ? <Quiz /> : <Start setShouldStart={setShouldStart} />}

    </div>
    // </Provider>
  );
}

export default App;
