import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import GameOver from './GameOver';
import '../styles/Quiz.css';

const Quiz = () => {

    const nextQuestion = useRef(false)
    const spinner = useRef(false)
    const [quizView, setQuizView] = useState(false);
    const [playerisOut, setPlayerIsOut] = useState(false);
    const [pts, setPts] = useState(0);


    const pickAnswer = (e) => {

        let userAnswer = e.target.innerText;
        console.log(userAnswer);

        axios.post('/api/game/answer/11', { questionId: quizView.id, answer: userAnswer, totalTime: 20, time: 5 })
            .then(({ data: res }) => {
                console.log("the answer res: ", res);
                setQuizView(nextQuestion.current);
            })
            .catch(err => console.error(err))
    }
    // console.log("rendered. quiz ref is: ", nextQuestion.current, "and the state is: ", quizView);
    useEffect(() => {

        getNewQuestion(11).then(res => setQuizView(nextQuestion.current)).catch(err => console.error(err))

    }, []);
    useEffect(() => {
        if (!quizView) {
            return
        }
        console.log(spinner.current);
        getNewQuestion(11)
            .catch(err => console.error(err))
    }, [quizView]);

    const spinnerGenerator = (showSpinner) => {
        return (
            <div id="floatingCirclesG">
                <div className="f_circleG" id="frotateG_01"></div>
                <div className="f_circleG" id="frotateG_02"></div>
                <div className="f_circleG" id="frotateG_03"></div>
                <div className="f_circleG" id="frotateG_04"></div>
                <div className="f_circleG" id="frotateG_05"></div>
                <div className="f_circleG" id="frotateG_06"></div>
                <div className="f_circleG" id="frotateG_07"></div>
                <div className="f_circleG" id="frotateG_08"></div>
            </div>)
    }

    return (
        <div id='quiz-window'>
            <>
                <div id="floatingCirclesG" >
                    <div className="f_circleG" id="frotateG_01"></div>
                    <div className="f_circleG" id="frotateG_02"></div>
                    <div className="f_circleG" id="frotateG_03"></div>
                    <div className="f_circleG" id="frotateG_04"></div>
                    <div className="f_circleG" id="frotateG_05"></div>
                    <div className="f_circleG" id="frotateG_06"></div>
                    <div className="f_circleG" id="frotateG_07"></div>
                    <div className="f_circleG" id="frotateG_08"></div>
                </div>
                <div id="question" >{nextQuestion.current.text}</div>

                <div id="options">
                    {nextQuestion.current.options && nextQuestion.current.options.map((item, index) => (
                        <div className="option" key={index} onClick={pickAnswer}>{item} </div>
                    ))}
                </div>
            </>


            {
                playerisOut && <GameOver pts={pts} />
            }
        </div>
    )

    // Functions
    // ==========

    // gets a new question and set the question ref with it.
    async function getNewQuestion(playerId) {
        axios.get(`/api/game/question/${playerId}`)
            .then(({ data: res }) => {
                nextQuestion.current = res;
            })
            .catch(err => console.error(err))
    }
    async function questionCheck(playerId) {


    }

}
export default Quiz
