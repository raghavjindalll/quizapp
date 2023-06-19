// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const RulesRegulation = () => {
//   const navigate = useNavigate();
//   const [isChecked, setIsChecked] = useState(false);

//   const changeHandler = () => {
//     setIsChecked(!isChecked);
//   };

//   const clickHandler = () => {
//     navigate('/questionFormat');
//   };

//   return (
//     <div>
//       {/* Rules And Regulation */}
//       <div className='flex flex-col justify-center items-center h-[100vh] w-[75%] mx-auto'>
//         <h1 className='text-5xl'>Rules And Regulations</h1>

//         <ul className='flex flex-col list-disc my-6 w-[50%] '>
//           <li className='my-1'>
//             Participation in the quiz is free and open to all persons above 18 years old.
//           </li>
//           <li className='my-1'>
//             The quiz will be available from the 20 June 2023 to the 20 July 2023. The participant answers 13
//             questions and validates his or her participation by clicking on the final sending button, and by
//             giving his or her personal information.
//           </li>
//           <li className='my-1'>
//             Participation in the quiz implies that the participant accept the integrality of the rules,
//             including during their intervention, amendments et potential additions.
//           </li>
//           <li className='my-1'>
//             Inaccurate or dishonest declarations, or any fraud, results in the participant’s disqualification.
//           </li>
//           <li className='my-1'>
//             To be valid, all disagreement shall be imperatively addressed by registered mail.
//           </li>
//         </ul>

//         <label>
//           <input
//             type='checkbox'
//             checked={isChecked}
//             onChange={changeHandler}
//             className='mx-2'
//           />
//           Participation in the quiz implies that participants accept the integrality of these rules.
//           Non-compliance with the rules results in the automatic cancellation of the participation in the
//           quiz and of the candidacy for the prize.
//         </label>

//         {isChecked ? (
//           <div className='flex justify-end w-[50vw]'>
//             <button onClick={clickHandler} className='mt-8 flex justify-center items-center rounded-full text-white ml-56 bg-blue-600 w-20 h-10'>Next</button>
//           </div>
//         ) : (
//           <div className='flex justify-end w-[50vw]'>
//             <button disabled={true} className='mt-8 flex justify-center items-center rounded-full text-white bg-blue-400 w-20 h-10'>Next</button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default RulesRegulation;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RulesRegulation = () => {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);

  const changeHandler = () => {
    setIsChecked(!isChecked);
  };

  const clickHandler = () => {
    navigate('/questionFormat');
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-red-500 via-slate-800 to-indigo-800 font-serif">
      <div className="bg-white rounded-lg shadow-lg p-8 w-3/4 mx-auto">
        <h1 className="text-4xl text-center text-gray-800 mb-6">Rules And Regulations</h1>

        <ul className="list-disc text-gray-700 mb-6">
          <li className="mb-2">
            Participation in the quiz is free and open to all persons above 18 years old.
          </li>
          <li className="mb-2">
            The quiz will be available from June 20, 2023, to July 20, 2023. Participants answer 13
            questions and validate their participation by clicking on the final submit button and providing
            their personal information.
          </li>
          <li className="mb-2">
            Participation in the quiz implies that participants accept the entirety of the rules, including
            any amendments or additions.
          </li>
          <li className="mb-2">
            Inaccurate or dishonest declarations, or any fraudulent activity, will result in disqualification.
          </li>
          <li className="mb-2">
            Any disputes must be addressed by registered mail to be considered valid.
          </li>
        </ul>

        <label className="flex items-center mb-4">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={changeHandler}
            className="mr-2 flex justify-center items-center"
          />
          Participation in the quiz implies that participants accept the entirety of these rules.
          Non-compliance with the rules will result in automatic disqualification and forfeiture of any prizes.
        </label>

        <div className="flex justify-end">
          <button
            onClick={clickHandler}
            disabled={!isChecked}
            className={`flex justify-center items-center rounded-full text-white bg-blue-600 w-32 h-12 ${
              isChecked ? 'hover:bg-blue-700' : 'opacity-50 cursor-not-allowed'
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default RulesRegulation;





