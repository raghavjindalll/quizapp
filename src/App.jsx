import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RulesRegulation from './component/RulesRegulation'; 
import QuestionFormat from './component/QuestionFormat';
import HardwareCheck from './component/HardwareCheck'
import Question from './component/Question';
import Result from './component/Result';
const App = () => {
  return (
    <div className='overflow-x-hidden select-none'>
    <Routes>
      <Route path="/" element={<RulesRegulation />} />
      <Route path="/questionFormat" element={<QuestionFormat />} />
      <Route path="/hardwareCheck" element={<HardwareCheck/>} />
      <Route path="/question" element={<Question/>} />
      <Route path="/result" element={<Result/>} />
    </Routes>
    </div>
  );
};

export default App;
