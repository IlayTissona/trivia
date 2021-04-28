import axios from "axios";
import { setScore, setStrikes } from "./playerActions";

export const setQuestion = (nextQuestion) => {
  return {
    type: "SET_NEXT_QUESTION",
    question: nextQuestion,
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

export const postAnswer = (playerId, questionId, answer, totalTime, time) => {
  return (dispatch) => {
    dispatch(loadingAnswer());
    axios
      .post(`/answer/${playerId}`, {
        questionId,
        answer,
        totalTime,
        time,
      })
      .then((res) => {
        if (res.data.isCorrect) dispatch(correctAnswer(answer, res.data.score));
        else dispatch(wrongAnswer(res.data.correctAnswer, res.data.strikes));
      });
  };
};
