/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import '../App.css';
import Q from '../constants/Icon/Q';
import Answers from '../constants/Icon/Answers';
import { TourContext } from '../context/Tour';
import Tour from '../components/Tour';
import FinalPage from '../pages/FinalPage';

function Questions() {
    const [tour, setTour] = useState(0);
    const [questionNumber, setQuestionNumber] = useState(0);
    const [trueAnswer, setTrueAnswer] = useState(0);
    const [question, setQuestion] = useState({});
    const [a, setA] = useState(0);
    const [point, setPoint] = useState(0);
    const questionStore = localStorage.setItem("question num", questionNumber);
    localStorage.setItem("point", point);
    // const trueAnswerStore = localStorage("true answer", trueAnswer);
    const tourStore = localStorage.setItem("tour number", tour);




    useEffect(() => {
        const newQuestion = createQuestion();
        console.log(newQuestion);
        setQuestion(newQuestion);
        if(newQuestion === 11) {
            Navigate("./finalPage");
            setTour(x => x+1)
        }
    }, [questionNumber]);

    function handleClick(){
        setQuestionNumber((prevNumber) => (prevNumber + 1 !== 11 ? prevNumber + 1: 0));
        
        if(questionNumber === 10){
            setTour(x=>x+1);
        }

        // if(document.getElementById("answer") === question.correctAnswer) {
        //     document.getElementById("answer").style.color = "green";
        //     setTrueAnswer(x => x+1);
        // }
    }

    const handledClick = (e) => {
        if(e.target.innerText === question.correctAnswer){
            setTrueAnswer(e=>e+1);
        }
    }

    function createQuestion(){
        
        const numberOne = Math.floor(Math.random() * (10 - 1 + 1) + 1);
        const numberTwo = Math.floor(Math.random() * (10 - 1 + 1) + 1);
        const correctAnswer = numberOne * numberTwo;

        
        let trueAnswer = 0;
        // let falseAnswer = 0;
        const score = Math.sqrt(correctAnswer)
        Number.isInteger(score) ? score : Math.ceil(score);

        setPoint((puan) => puan === question.correctAnswer ? puan + score : 0);
        
        let answers = [];
        let numArray = [];

        for(let i = 0; i < 2; i++){
            let index = Math.floor(Math.random() * numArray.length); 
            numArray.push(index);
        }

        const firstInCorrectAnswer = numArray[0] === 0 ? (numberOne - 1) * numberTwo : (numberTwo - 1) * numberOne;
        const secondInCorrectAnswer = numArray[1] === 0 ? (numberOne + 1) * numberTwo : (numberTwo + 1) * numberOne;

        answers = [correctAnswer, firstInCorrectAnswer, secondInCorrectAnswer];
        const questionAnswers = shuffleArray(answers);

        // document.getElementById("answer").innerHTML === question.correctAnswer ? (trueAnswer +1) : falseAnswer + 1;

        


        

        return {
            numberOne: numberOne,
            numberTwo: numberTwo,
            correctAnswer: correctAnswer,
            answers: questionAnswers,
            score:score
        };
    }



    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

   


    const data = {
        tour,
        setTour
    };

    return (
        <div className='question-general'>

            <div className='up-bar'>

                <p id="correct">Score: {point}</p>
                <TourContext.Provider value={data}>
                    <Tour />
                </TourContext.Provider>
                <p>Questions: {trueAnswer}/{questionNumber}</p>
            </div>
            <div className='questions'>
                <Q num1 ={question.numberOne} num2 ={question.numberTwo}/>
            </div>
            <div>
                <Answers handleClick={handleClick} answers={question.answers} 
                handledClick = {handledClick} />
            </div>

           

        </div>
    );
}

export default Questions;
