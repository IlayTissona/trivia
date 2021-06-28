import axios from "../axiosWraper";
import { setScore, setStrikes } from "./playerActions";
import { start, totalTimeDecrease } from "../actions/timerActions";

export const setQuestion = (nQuestion) => {
  return {
    type: "SET_NEXT_QUESTION",
    question: nQuestion,
  };
};

export const setTimeUp = () => {
  return {
    type: "TIME_UP",
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
export const setAnswered = (answer) => {
  return {
    type: "SET_ANSWERED",
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
    const { totalTime, timePassed } = getState().timer;
    dispatch(loadingAnswer());
    dispatch(start());
    axios
      .post(`/game/answer/${playerId}`, {
        questionId,
        answer,
        totalTime,
        timePassed,
      })
      .then((res) => {
        if (res.isCorrect) {
          dispatch(totalTimeDecrease());
          dispatch(setScore(res.newScore));
        } else {
          dispatch(setStrikes(res.strikes));
        }
        dispatch(setAnswer(res.correctAnswer));
        dispatch(setAnswered(res.answer));
      })
      .catch(console.log);
  };
};
