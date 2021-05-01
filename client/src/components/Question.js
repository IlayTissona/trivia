import React, { useEffect, useRef, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import Rank from "./Rank";
import axios from "../store/axiosWraper";
import "../styles/Question.css";
import { useDispatch, useSelector } from "react-redux";
import {
  postAnswer,
  setQuestion,
  setAnswer,
} from "../store/actions/questionActions";
import { setPlayer } from "../store/actions/playerActions";
import MiniLoader from "./MiniLoader";
import Timer from "./Timer";

function Question(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { player, user, question } = useSelector((store) => store);
  const nextQuestion = useRef({});

  useEffect(() => {
    if (!player) return <Redirect to="/" />;
    getNextQuestion()
      .then((newQuestion) => {
        nextQuestion.current = newQuestion;
      })
      .catch((e) =>
        getNextQuestion().then((newQuestion) => {
          nextQuestion.current = newQuestion;
        })
      )
      .catch((e) => {
        nextQuestion.current = {
          id: "ERROR",
          text: "Network Error, can't load next question",
        };
      });
  }, [question.id]);

  useEffect(() => {
    if (!user) return <Redirect to={`/profile/${user.id}`} />;

    axios.get(`/game/question/${player.id}`).then((res) => {
      dispatch(setQuestion(res));
    });
  }, []);
  if (player && player.gameEnded) {
    return (
      <div id="game-over">
        <h1> GAME OVER ! </h1> <br /> <h3>Try Again... </h3>
      </div>
    );
  } else if (player && player.strikes >= 3) {
    player.gameEnded = true;
    dispatch(setPlayer({ ...player }));
    setTimeout(() => history.push(`/profile/${player.id}`), 4000);
  }
  function goToNextQuestion(next) {
    dispatch(setQuestion(next));
    dispatch(setAnswer(null));
  }

  async function getNextQuestion() {
    return axios
      .get(`/game/question/${player.id}`)
      .then((res) => res)
      .catch(console.log);
  }
  return (
    player && (
      <>
        <div id="question">
          <h1>{question.text}</h1>
          <div id="options">{createOptions(question.correctAnswer)}</div>
          {question.timeUp ? (
            "TIME UP"
          ) : question.correctAnswer ? (
            <Rank
              playerId={player.id}
              questionId={question.id}
              goToNextQuestion={goToNextQuestion}
              nextQuestion={nextQuestion}
            />
          ) : (
            <Timer
              goToNextQuestion={goToNextQuestion}
              nextQuestion={nextQuestion}
              timeUp={() => {
                dispatch(postAnswer(player.id, question.id, null));
              }}
            />
          )}
        </div>
      </>
    )
  );

  function createOptions(correctAnswer) {
    const { options } = question;
    const questionOptions = [];
    for (let i = 0; i < options.length; i++) {
      questionOptions.push(
        <div
          key={i}
          className={
            "option"
            // "option" + correctAnswer === options[i] ? " correct" : " incorrect"
          }
          onClick={() => {
            if (correctAnswer) return;
            if (question.timeUp) return;
            dispatch(postAnswer(player.id, question.id, options[i]));
          }}
        >
          {correctAnswer === "LOADING" ? (
            <MiniLoader />
          ) : correctAnswer === options[i] ? (
            <strong>{options[i]}</strong>
          ) : (
            options[i]
          )}
        </div>
      );
    }
    return questionOptions;
  }
}

export default Question;
