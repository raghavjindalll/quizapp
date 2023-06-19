// // import React from 'react'
// // import { useNavigate } from 'react-router-dom';

// // const QuestionFormat = () => {

// //     const navigate = useNavigate();  

// //     const clickHandler = () => {
// //       navigate('/hardwareCheck');
// //     };
  
// //     return (
// //       <div>
// //         {/* Rules And Regulation */}
// //         <div className='flex flex-col justify-center items-center h-[100vh] w-[75%] mx-auto font-serif  '>
// //           <h1 className='text-5xl'>Questions Format</h1>
  
// //           <ul className='flex flex-col list-disc my-6 w-[50%] '>
// //             <li className='my-1'>
// //             Each question contains 5 marks.
// //             </li>
// //             <li className='my-1'>
// //               All Questions are compulsory.
// //             </li>
// //             <li className='my-1'>
// //               You can not go back to previous question.
// //             </li>
// //             <li className='my-1'>
// //             Each question has time duration of 10 seconds.
// //             </li>
// //             <li className='my-1'>
// //             Total time limit for the quiz is 10 minutes.
// //             </li>
// //           </ul>
  
          
// //             <div className='flex justify-end w-[50vw]'>
// //               <button onClick={clickHandler} className='mt-8 flex justify-center items-center rounded-full text-white ml-56 bg-blue-600 w-20 h-10'>Next</button>
// //             </div>
// //         </div>
// //       </div>
// //     );
// // };

// // export default QuestionFormat


// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const QuestionFormat = () => {
//   const navigate = useNavigate();

//   const clickHandler = () => {
//     navigate('/hardwareCheck');
//   };

//   return (
//     <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-indigo-500 via-slate-700 to-purple-950">
//       <div className="bg-white rounded-lg shadow-lg p-8 w-[40%] mx-auto">
//         <h1 className="text-4xl text-center text-gray-800 mb-6 font-serif">Questions Format</h1>

//         <ul className="list-disc text-gray-700 mb-6 ">
//           <li className="mb-2">
//             Each question carries 5 marks.
//           </li>
//           <li className="mb-2">
//             All questions are compulsory.
//           </li>
//           <li className="mb-2">
//             You cannot go back to previous questions.
//           </li>
//           <li className="mb-2">
//             Each question has a time duration of 10 seconds.
//           </li>
//           <li className="mb-2">
//             The total time limit for the quiz is 10 minutes.
//           </li>
//         </ul>

//         <div className="flex justify-end">
//           <button
//             onClick={clickHandler}
//             className="mt-8 flex justify-center items-center rounded-full text-white bg-blue-600 w-32 h-12 hover:bg-blue-700"
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QuestionFormat;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const QuestionFormat = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(30); // Initial time left in seconds

  useEffect(() => {
    // Timer countdown logic
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    // Cleanup the timer
    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      // Redirect to hardware check page or handle time-up logic
      navigate('/hardwareCheck');
    }
  }, [timeLeft, navigate]);

  const clickHandler = () => {
    navigate('/hardwareCheck');
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-indigo-500 via-slate-700 to-purple-950">
      <div className="bg-white rounded-lg shadow-lg p-8 w-[40%] mx-auto">
        <h1 className="text-4xl text-center text-gray-800 mb-6 font-serif">Questions Format</h1>

        <ul className="list-disc text-gray-700 mb-6 ">
          <li className="mb-2">
            Each question carries 5 marks.
          </li>
          <li className="mb-2">
            All questions are compulsory.
          </li>
          <li className="mb-2">
            You cannot go back to previous questions.
          </li>
          <li className="mb-2">
            Each question has a time duration of 10 seconds.
          </li>
          <li className="mb-2">
            The total time limit for the quiz is 10 minutes.
          </li>
        </ul>

        <div className="flex justify-end">
          <button
            onClick={clickHandler}
            className="mt-8 flex justify-center items-center rounded-full text-white bg-blue-600 w-32 h-12 hover:bg-blue-700"
          >
            Next
          </button>
        </div>
      </div>

      <div className="absolute top-0 right-0 m-4 text-white text-lg mr-8">
        Time Left: {timeLeft} seconds
      </div>
    </div>
  );
};

export default QuestionFormat;
