import React from 'react'
import { calculateInvestmentResults, formatter } from './investment'

const Result = ({userInput}) => {
    const resultsData = calculateInvestmentResults(userInput)

    const initialInvestment = resultsData[0].valueEndOfYear - resultsData[0].interest - resultsData[0].annualInvestment;
    
  return (
    <table className='text-white w-full text-center my-10 tracking-wider break-all text-sm sm:text-base'>
      <thead>
        <tr className='text-green-700'>
            <th className='border border-gray-700 py-2 break-keep'>Year</th>
            <th className='border border-gray-700 py-2'>Investment Value</th>
            <th className='border border-gray-700 py-2'>Interest (Year)</th>
            <th className='border border-gray-700 py-2'>Total Interest</th>
            <th className='border border-gray-700 py-2'>Investment Capital</th>
        </tr>
      </thead>

      <tbody>
        {resultsData.map((item)=>{

            const totalInterest = item.valueEndOfYear - item.annualInvestment * item.year - initialInvestment;

            const totalAmountInvested = item.valueEndOfYear - totalInterest;

            return (<tr key={item.year}>
                <td className='py-2'>{item.year}</td>
                <td className='py-2'>{formatter.format(item.valueEndOfYear)}</td>
                <td className='py-2'>{formatter.format(item.interest)}</td>
                <td className='py-2'>{formatter.format(totalInterest)}</td>
                <td className='py-2'>{formatter.format(totalAmountInvested)}</td>
            </tr>)
        })}
      </tbody>
    </table>
  )
}

export default Result
