import React from 'react'
import logo from '../images/investment-calculator-logo.png'

const Header = () => {
  return (
    <header className='text-white min-h-40 flex flex-col items-center gap-3 py-5'>
      <img src={logo} alt="" className='w-20'/>
      <h1 className='text-2xl font-sans font-bold tracking-wider text-center'>Investment Calculator</h1>
    </header>
  )
}

export default Header
