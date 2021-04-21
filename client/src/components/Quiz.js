import React, { useState, useEffect } from 'react'
import axios from 'axios'
import GameOver from './GameOver';
import '../styles/Quiz.css';

const Quiz = () => {

    const [quiz, setQuiz] = useState([]);
    const [number, setNumber] = useState(0);
    const [pts, setPts] = useState(0);

    const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);

    const pickAnswer = (e) => {

        let userAnswer = e.target.innerText;
        console.log(userAnswer, quiz[number].answer);

        if (quiz[number].answer === userAnswer) setPts(pts + 1);
        setNumber(number + 1);
    }

    useEffect(() => {

        axios.get('https://opentdb.com/api.php?amount=5&category=15&difficulty=easy&type=multiple')
            .then(res => {
                setQuiz(res.data.results.map(item => (

                    {
                        question: item.question,
                        options: shuffle([...item.incorrect_answers, item.correct_answer]),
                        answer: item.correct_answer
                    }

                )));
            })
            .catch(err => console.error(err))

    }, []);


    return (
        <div id='quiz-window'>

            { quiz[number] &&

                <>
                    <div id="question" >{quiz[number].question}</div>

                    <div id="options">
                        {quiz[number].options.map((item, index) => (
                            <div className="option" key={index} onClick={pickAnswer}>{item} </div>
                        ))}
                    </div>
                </>

            }
            {
                number === 5 && <GameOver pts={pts} />
            }
        </div>
    )
}

export default Quiz
