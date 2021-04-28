import { postAnswer } from '../actions/questionActions'

const initialState = {
  totalTime: 20,
  timePassed: 0,
};

const timerReducer = (state = initialState, action) => {
  let newState = { ...state };

  switch (action.type) {
    case "TICK":
      newState.timePassed += 0.5;
      break;
    case "TOTAL_TIME_DECREASE":
      newState.totalTime -= newState.totalTime > 5 ? 0.5 : 0;
      break;
    case "START":
      newState.timePassed = 0;
      break;
    default:
      newState = state;
      break;
  }
  return newState;
};

export default timerReducer;
