import axios from "axios";
import { setScore, setStrikes } from "./playerActions";
import timerReducer from "../reducers/timerReducer"
import { start } from "../actions/timerActions"


export const setQuestion = (nQuestion) => {
  return {
    type: "SET_NEXT_QUESTION",
    question: nQuestion,
  };
};

export const loadingAnswer = () => {
  return {
    type: "LOADING_ANSWER",
  };
};

export const setAnswer = (answer) => {
  return {
    type: "SET_ANSWER",
    answer,
  };
};

export const wrongAnswer = (answer, strikes) => {
  return (dispatch) => {
    dispatch(setStrikes(strikes));
    dispatch(setAnswer(answer));
  };
};

export const correctAnswer = (answer, score) => {
  return (dispatch) => {
    dispatch(setScore(score));
    dispatch(setAnswer(answer));
  };
};

export const postAnswer = (playerId, questionId, answer) => {
  return (dispatch, getState) => {
    const { totalTime, timePassed } = getState().timer
    console.log(playerId,
      questionId,
      answer,
      totalTime,
      timePassed,
    )
    dispatch(loadingAnswer());
    dispatch(start())
    axios
      .post(`/answer/${playerId}`, {
        questionId,
        answer,
        totalTime,
        timePassed,
      })
      .then((res) => {
        if (res.data.isCorrect) {
          dispatch(setScore(res.data.newScore));
          dispatch(setAnswer(answer));
        }
        else {
          dispatch(setStrikes(res.data.strikes));
          dispatch(setAnswer(answer));
        }
      }).catch(e => {
        console.log(e)
      })
  };
};
