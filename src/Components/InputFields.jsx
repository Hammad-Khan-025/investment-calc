import React, { useState } from 'react';
import SingleInput from './SingleInput';

const InputFields = ({handleChange, userInput}) => {  

  return (
    <section className='bg-green-700 w-full grid grid-cols-1 sm:grid-cols-2 place-items-center gap-5 px-8 sm:px-5 py-10 rounded-md my-5'>
      <SingleInput 
        label='initial investment' 
        handleChange={handleChange} 
        userInput={userInput.initialInvestment} 
        inputFieldType='initialInvestment' 
      />
      <SingleInput 
        label='annual investment' 
        handleChange={handleChange} 
        userInput={userInput.annualInvestment} 
        inputFieldType='annualInvestment' 
      />
      <SingleInput 
        label='expected return' 
        handleChange={handleChange} 
        userInput={userInput.expectedReturn} 
        inputFieldType='expectedReturn' 
      />
      <SingleInput 
        label='year' 
        handleChange={handleChange} 
        userInput={userInput.duration} 
        inputFieldType='duration'
        
      />
    </section>
  );
};

export default InputFields;
