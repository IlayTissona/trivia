import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import timerReducer from "./store/reducers/timerReducer";

import thunk from "redux-thunk";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

const timeStore = createStore(timerReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={timeStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
