import React from 'react';

const SingleInput = ({ label, handleChange, userInput, inputFieldType }) => {
  return (
    <div className="text-white flex flex-col gap-1 tracking-wider w-full sm:w-auto">
      <span className="font-medium capitalize text-sm">{label}</span>
      <input
        type="number"
        className="w-[100%] sm:w-56 p-2 rounded-md focus:outline-none bg-transparent border"
        value={userInput}
        onChange={(e) => handleChange(inputFieldType, e.target.value)}
      />
    </div>
  );
};

export default SingleInput;
