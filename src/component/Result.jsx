import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {BiTimer, BiCalendar} from 'react-icons/bi'
const Result = () => {
  const location = useLocation();
  const score = location.state && location.state.score;
  const [time, setTime] = useState(getCurrentTime());
  const scorePercentage = (score / 50) * 100;

  function getCurrentTime() {
    const currentDate = new Date();
    const hours = currentDate.getHours().toString().padStart(2, '0');
    const minutes = currentDate.getMinutes().toString().padStart(2, '0');
    const seconds = currentDate.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }

  const getCurrentDate = () => {
    const currentDate = new Date();
    const day = currentDate.getDate().toString().padStart(2, '0');
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const year = currentDate.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const currentDate = getCurrentDate();

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="overflow-hidden  flex flex-col justify-center items-center h-screen bg-gradient-to-br from-red-500 via-slate-800 to-indigo-800 font-serif">
      <div className="bg-white rounded-lg shadow-lg p-8 w-3/4 mx-auto">
        <div className="flex justify-around my-12">
          <h2 className="flex text-2xl gap-3 items-center"><BiTimer className='text-4xl'/> {time}</h2>
          <h2 className="flex gap-3 items-center text-2xl"><BiCalendar className='text-3xl'/> {currentDate}</h2>
        </div>

        <div className="flex justify-center items-center flex-col h-[90vh]">
          <div className="circle-container">
            <div
              className="circle-fill"
              style={{ height: `${scorePercentage}%` }}
            ></div>
            <h2 className="text-4xl text-center text-gray-800 mb-6">
              Your Score: {score} / 50
            </h2>
          </div>
          <p className="text-xl text-center text-gray-700">
            Thank you for taking the quiz!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Result;
