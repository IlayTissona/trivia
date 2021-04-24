import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import GameOver from './GameOver';
import '../styles/Quiz.css';
import Spinner from './Spinner'

const Quiz = () => {

    const nextQuestion = useRef(false)
    const playerId = useRef(11)

    // const spinner = useRef(false)
    const [spinner, setSpinner] = useState(true);
    const [questionView, setQuestionView] = useState(false);
    const [playerisOut, setPlayerIsOut] = useState(false);
    const [pts, setPts] = useState(0);


    useEffect(() => {
        // console.log("in the DidMount", nextQuestion.current);
        getNewQuestion(11).then(res => {
            setQuestionView({ ...nextQuestion.current, spinner: <Spinner /> });
            // console.log("after the ", nextQuestion.current);
            // setSpinner(generateSpinner());
        }).catch(err => console.error(err))
    }, []);

    // setSpinner(false)
    useEffect(() => {
        // console.log("in the DidUpdate");
        if (!questionView) {
            return
        }
        // if (!spinner) {
        //     return
        // }
        // console.log(spinner);
        // spinner.hidden = false

        getNewQuestion(11)
            .catch(err => console.error(err))
    }, [questionView]);

    function refreshSpinner(state, setState) {

        state ? setState(false) : setState(true)
    }


    // {questionView && <Spinner />}
    return (
        <>

            <div id='quiz-window'>
                {spinner && <Spinner spinner={spinner} setSpinner={setSpinner} />}
                <div id="question" >{questionView.text}</div>

                <div id="options">
                    {questionView.options && questionView.options.map((item, index) => (
                        <div className="option" key={index} onClick={(e) => answerCheck(e, playerId)}>{item} </div>
                    ))}
                </div>


                {
                    // playerisOut && <GameOver pts={pts} />
                }
            </div>
        </>
    )

    // Functions
    // ==========

    // gets a new question and set the question ref with it.
    async function getNewQuestion(playerId) {
        const { data: res } = await axios.get(`/api/game/question/${playerId}`);
        if (res.isOut) setPlayerIsOut(true)
        nextQuestion.current = res;
    }


    function answerCheck(e, playerId) {

        let userAnswer = e.target.innerText;
        console.log(userAnswer);

        axios.post('/api/game/answer/11', { questionId: questionView.id, answer: userAnswer, totalTime: 20, time: 5 })
            .then(({ data: res }) => {
                console.log("the answer res: ", res);
                // setSpinner((<>{spinner}</>))
                setQuestionView({ ...nextQuestion.current, spinner: <><Spinner /></> });


                // setSpinner([...generateSpinner()]);

            })
            .catch(err => console.error(err))
    }

    function generateSpinner(showSpinner) {
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
}
export default Quiz
