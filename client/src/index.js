import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import timerReducer from "./store/reducers/timerReducer";
import playerReducer from "./store/reducers/playerReducer"
import questionReducer from "./store/reducers/questionReducer"
import userReducer from "./store/reducers/userReducer"

import thunk from "redux-thunk";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
const reducers = combineReducers({
  timer: timerReducer,
  player: playerReducer,
  question: questionReducer,
  user: userReducer
})
const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
