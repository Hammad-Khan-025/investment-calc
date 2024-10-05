import { useState } from 'react';
import './App.css'
import Header from './Components/Header'
import InputFields from './Components/InputFields'
import Result from './Components/Result';

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 0
  });

  if(userInput.duration > 100){
    userInput.duration = 100;
  }

  const inputIsValid = userInput.duration > 0;

  const handleChange = (inputFieldType, newValue) => {
    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      [inputFieldType]: Number(newValue)
    }));
  }; 
    
  return (
    <section className='min-h-screen bg-gradient-to-r from-slate-950 via-slate-800 to-slate-950 flex flex-col items-center px-2'>
      <Header/>
      <div className='w-full sm:w-[600px] md:w-[650px]'>
      <InputFields handleChange={handleChange} userInput={userInput} />
      {!inputIsValid && <p className='text-center text-white text-sm sm:text-lg tracking-wider'>Please enter year between 0 and 100</p>}
      {inputIsValid && <Result userInput={userInput} />}
      </div>
    </section>
  )
}

export default App
