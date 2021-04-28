import { React, useEffect, useContext, useState, useRef } from "react";
import { Redirect } from "react-router-dom"
import Timer from "./Timer";
import Rank from "./Rank";
import axios from "axios";
import "../styles/Question.css";
import { useDispatch, useSelector } from "react-redux";
import { postAnswer, setQuestion } from "../store/actions/questionActions";
import MiniLoader from "./MiniLoader";

function Question() {
    const dispatch = useDispatch();
    const question = useSelector((store) => store.question);
    const player = useSelector((store) => store.player);
    const timer = useSelector((store) => store.timer);

    const nextQuestion = useRef({});

    useEffect(() => {
        const getNextQuestion = async () => {
            axios.get(`/question/${player.id}`).then((res) => res.data).catch(e => {
                console.log(`/question/${player.id}`)
            })
        };

        getNextQuestion()
            .then((newQuestion) => {
                nextQuestion.current = newQuestion;
            })
            .catch((e) => getNextQuestion());
    }, [question.id]);

    useEffect(() => {
        axios.get(`/question/${player.id}`).then((res) => {
            dispatch(setQuestion(res.data))
        })
    }, [])

    const goToNextQuestion = () => {
        console.log(nextQuestion.current)
        dispatch(setQuestion(nextQuestion.current));
    };

    if (!player.id) return <Redirect to="/" />

    return (
        <>
            <div id="question">
                <h1>{question.text}</h1>
                <ul id="options">{createOptions(question.correctAnswer)}</ul>
            </div>
            {question.correctAnswer ? (
                <Rank
                    playerId={player.id}
                    questionId={question.id}
                    goToNextQuestion={goToNextQuestion}
                />
            ) : (
                <Timer playerId={player.id} questionId={question.id} />
            )}
        </>
    );

    function createOptions(correctAnswer) {
        const { options } = question;
        const questionOptions = [];
        for (let i = 0; i < options.length; i++) {
            questionOptions.push(
                <li
                    key={i}
                    className={
                        "option" + correctAnswer === options[i] ? " correct" : " incorrect"
                    }
                    onClick={() => {
                        if (correctAnswer) return;
                        dispatch(
                            postAnswer(
                                player.id,
                                question.id,
                                options[i],
                                timer.totalTime,
                                timer.timePassed
                            )
                        );
                    }}
                >
                    {correctAnswer === "LOADING" ? <MiniLoader /> : options[i]}
                </li>
            );
        }
        return questionOptions;
    }
}

export default Question;
