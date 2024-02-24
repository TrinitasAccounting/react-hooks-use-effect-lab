import React, { useEffect, useState } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  // add useEffect code


  // useEffect(() => {
  //   //   setInterval(() => {
  //   //     return setTimeRemaining(timeRemaining - 1)
  //   //   }, 1000)
  //   // }, [])
  //   setTimeout(() => {
  //     setTimeRemaining(timeRemaining - 1)
  //   }, 1000)
  // }, [])


  useEffect(() => {

    if (timeRemaining > 0) {
      const intervalTest = setInterval(() => {
        setTimeRemaining(timeRemaining - 1);
      }, 1000);
    }
    else if (timeRemaining === 0) {
      clearInterval(intervalTest);
      setTimeRemaining(10)
    }






    // const intervalTest = setInterval(() => {
    //   setTimeRemaining(timeRemaining - 1);
    // }, 1000);

    // return () => clearInterval(intervalTest);
  }, [timeRemaining])






  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }

  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;
