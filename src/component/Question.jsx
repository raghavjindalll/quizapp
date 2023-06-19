import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Result from "./Result";

const Question = () => {
  const navigate = useNavigate();
  const questions = [
    {
      id: 1,
      question: "What is the output of the following code: console.log(typeof null);",
      options: ["null", "object", "undefined", "string"],
      answer: "object",
    },
    {
      id: 2,
      question: "Which keyword is used to declare a variable in JavaScript?",
      options: ["let", "var", "const", "int"],
      answer: "var",
    },
    {
      id: 3,
      question: 'What is the result of the expression 3 + 2 + "7"?',
      options: ["327", "12", "57", "NaN"],
      answer: "57",
    },
    {
      id: 4,
      question: "Which method is used to add an element to the end of an array in JavaScript?",
      options: ["push()", "concat()", "join()", "pop()"],
      answer: "push()",
    },
    {
      id: 5,
      question: 'What is the purpose of the "use strict" directive in JavaScript?',
      options: [
        "Enforce stricter syntax rules",
        "Enable strict mode",
        "Optimize code execution",
        "Prevent memory leaks",
      ],
      answer: "Enable strict mode",
    },
    {
      id: 6,
      question: 'What is the result of the following code: console.log(2 + "2" - 1);',
      options: ["21", "NaN", "22", "3"],
      answer: "21",
    },
    {
      id: 7,
      question: "Which operator is used to concatenate strings in JavaScript?",
      options: ["+", "*", "-", "."],
      answer: "+",
    },
    {
      id: 8,
      question: 'What does the "this" keyword refer to in JavaScript?',
      options: [
        "The current function",
        "The global object",
        "The previous object",
        "The current object",
      ],
      answer: "The current object",
    },
    {
      id: 9,
      question: 'What is the output of the following code: console.log(5 == "5");',
      options: ["true", "false", "undefined", "NaN"],
      answer: "true",
    },
    {
      id: 10,
      question: "Which method is used to remove the last element from an array in JavaScript?",
      options: ["slice()", "splice()", "shift()", "pop()"],
      answer: "pop()",
    },
  ];

  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = questions[currentQuestionIndex];
  const [timeRemaining, setTimeRemaining] = useState(15);
  const videoRef = useRef(null);
  const mediaStreamRef = useRef(null);

  useEffect(() => {
    // Timer countdown logic
    if (timeRemaining === 0) {
      handleNextQuestion();
    } else {
      const timer = setTimeout(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [timeRemaining]);

  useEffect(() => {
    // Webcam access logic
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
            mediaStreamRef.current = stream;
          }
        })
        .catch((error) => {
          console.error("Error accessing webcam:", error);
        });
    } else {
      console.error("getUserMedia is not supported");
    }

    return () => {
      // Cleanup: Stop media stream tracks
      if (mediaStreamRef.current) {
        mediaStreamRef.current.getTracks().forEach((track) => {
          track.stop();
        });
      }
    };
  }, []);

  const handleOptionSelect = (event) => {
    const selectedOption = event.target.value;
    setSelectedOption(selectedOption);
    if (selectedOption === currentQuestion.answer) {
      setScore((prevScore) => prevScore + 5);
    }
  };

  const handleNextQuestion = () => {
    setSelectedOption("");
    setTimeRemaining(15);
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handleSubmit = () => {
    navigate("/result", { state: { score } });
  };

  if (currentQuestionIndex >= questions.length) {
    return <Result score={score} />;
  }

  return (
    <div className="flex justify-center items-center flex-col h-screen bg-gradient-to-r from-[#22c1c3] to-[#fdbb2d]">
      <video
        ref={videoRef}
        autoPlay
        style={{
          position: "absolute",
          top: "10px",
          zIndex: 1,
          height: "300px",
          width: "300px",
        }}
      />
      <div className="bg-white w-[50%] h-[45%] rounded-2xl mt-24">
        <p className="flex justify-end px-4 py-4">
          Time Remaining: {timeRemaining}s
        </p>
        <div className="flex flex-row w-screen">
          <h3 className="ml-28">{currentQuestion.id + "."}</h3>
          <h3 className="w-[90%]">{currentQuestion.question}</h3>
        </div>
        <ul>
          {currentQuestion.options.map((option) => (
            <li key={option}>
              <label className="mx-32 ">
                <input
                  className="mt-4"
                  type="radio"
                  name={`question_${currentQuestion.id}`}
                  value={option}
                  onChange={handleOptionSelect}
                />
                {"   " + option}
              </label>
            </li>
          ))}
        </ul>
        <div className="flex justify-end px-8 py-4">
          {currentQuestionIndex === questions.length - 1 ? (
            <button
              className=" text-white w-32 h-10 rounded-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 "
              onClick={handleSubmit}
            >
              Submit
            </button>
          ) : (
            <button
              className=" text-white w-32 h-10 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-full"
              onClick={handleNextQuestion}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Question;
