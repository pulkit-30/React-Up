import { CircularProgress } from "@material-ui/core";
import React, { useEffect } from "react";
import { useState } from "react";
import Question from "../../components/Questions/Question";
import "./Quiz.css";
function Quiz({ questions, score, setQuestions, setScore }) {
  const name = localStorage.getItem("name");
  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);
  // const [loader, updateLoader] = useState(false);
  useEffect(() => {
    setOptions(
      questions &&
        handleShuffle([
          questions[currQues]?.correct_answer,
          ...questions[currQues]?.incorrect_answers,
        ])
    );
  }, [questions, currQues]);
  const handleShuffle = (opt) => {
    return opt.sort(() => Math.random() - 0.5);
  };
  return (
    <div className="quiz">
      <span className="subtitle"> welcome, {name}</span>
      {questions ? (
        <>
          <div className="quizInfo">
            <span>{questions[currQues].category}</span>
            <span>Score : {score}</span>
          </div>
          <Question
            currQues={currQues}
            setCurrQues={setCurrQues}
            questions={questions}
            options={options}
            correct={questions[currQues]?.correct_answer}
            score={score}
            setScore={setScore}
          />
        </>
      ) : (
        <CircularProgress
          style={{ margin: 100 }}
          color="inherit"
          size={100}
          thickness={1}
        />
      )}
      <div className="bottom-div">
        <h5>"&#039" type words is an API mistake. Please ignore them! </h5>
      </div>
      <h6>*Don't Refresh the page</h6>
    </div>
  );
}

export default Quiz;
