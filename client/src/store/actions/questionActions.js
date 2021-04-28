import axios from "axios";

export const setQuestion = (nextQuestion) => {
  return {
    type: "SET_NEXT_QUESTION",
    question: nextQuestion,
  };
};

export const wrongAnswer = (strikes) => {
  return {
    type: "WRONG_ANSWER",
    strikes,
  };
};

export const correctAnswer = (answer, score) => {
  return {
    type: "CORRECT_ANSWER",
    answer,
    score,
  };
};

export const loadingAnswer = () => {
  return {
    type: "LOADING_ANSWER",
  };
};

export const setAnswer = (playerId, questionId, answer, totalTime, time) => {
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
        else dispatch(wrongAnswer(res.data.strikes));
      });
  };
};

// export const answerQuestion = ({
//   playerId,
//   questionId,
//   answer,
//   totalTime,
//   time,
// }) => {
//   return (dispatch) => {
//     dispatch(loading());

//     axios
//       .post(`/answer/${playerId}`, {
//         questionId,
//         answer,
//         totalTime,
//         time,
//       })
//       .then((res) => {
//         const { score, strikes, isCorrect } = res.data;
//         if(isCorrect)
//       });

//     axios.post("/answer");
//     setTimeout(() => {
//       if (randomSuccess()) {
//         dispatch(success());
//         dispatch(ageUp(val));
//       } else {
//         dispatch(failure());
//       }
//     }, 5000);
//   };
// };

// function sendAnswer(playerId, questionId, answer, totalTime, time) {
//   return axios
//     .post(`/answer/${playerId}`, {
//       questionId,
//       answer,
//       totalTime,
//       time,
//     })
//     .then(({ data: res }) => {
//       console.log(res);
//       game.score = res.newScore;
//       game.strikes = res.strikes;
//       setGame({ ...game });
//       setTimeout(() => {
//         game.question = nextQuestion.current;
//         setCorrectAnswer(null);
//         nextQuestion.current = false;
//         setGame({ ...game });
//       }, 5000);
//       return res.isCorrect;
//     });
// }

// const loading = () => {
//   return {
//     type: "LOADING",
//   };
// };
