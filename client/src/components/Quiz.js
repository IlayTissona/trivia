import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import GameOver from './GameOver';
import '../styles/Quiz.css';

const Quiz = () => {

    const quiz = useRef(false)
    const [quizReady, setQuizReady] = useState(false);
    const [playerisOut, setPlayerIsOut] = useState(false);
    const [pts, setPts] = useState(0);

    const pickAnswer = (e) => {

        let userAnswer = e.target.innerText;
        console.log(userAnswer);

        axios.post('/api/game/answer/11', { questionId: quiz.current.id, answer: userAnswer, totalTime: 20, time: 5 })
            .then(({ data: res }) => {
                console.log("the answer res: ", res);
                setQuizReady(res);
            })
            .catch(err => console.error(err))
        // if (quiz[number].answer === userAnswer) setPts(pts + 1);
        // setNumber(number + 1);
    }
    // console.log("rendered. quiz ref is: ", quiz.current, "and the state is: ", quizReady);
    useEffect(() => {

        axios.get('/api/game/question/11')
            .then(({ data: res }) => {
                quiz.current = res;
                setQuizReady(true);
            })
            .catch(err => console.error(err))

    }, []);

    return (
        <div id='quiz-window'>
            <>
                <div id="floatingCirclesG">
                    <div class="f_circleG" id="frotateG_01"></div>
                    <div class="f_circleG" id="frotateG_02"></div>
                    <div class="f_circleG" id="frotateG_03"></div>
                    <div class="f_circleG" id="frotateG_04"></div>
                    <div class="f_circleG" id="frotateG_05"></div>
                    <div class="f_circleG" id="frotateG_06"></div>
                    <div class="f_circleG" id="frotateG_07"></div>
                    <div class="f_circleG" id="frotateG_08"></div>
                </div>
                <div id="question" >{quiz.current.text}</div>

                <div id="options">
                    {quiz.current.options && quiz.current.options.map((item, index) => (
                        <div className="option" key={index} onClick={pickAnswer}>{item} </div>
                    ))}
                </div>
            </>


            {
                playerisOut && <GameOver pts={pts} />
            }
        </div>
    )
}

export default Quiz
