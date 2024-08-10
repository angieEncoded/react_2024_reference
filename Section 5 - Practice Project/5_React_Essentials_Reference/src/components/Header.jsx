import React from 'react'
import logo from "../assets/investment-calculator-logo.png"

const Header = () => {
  return (
    <>
        <header id="header">
            <img src={logo} alt="Logo showing a money bag"></img>
            <h1>Investment Calc</h1>
        </header>
    
    </>
  )
}

export default Header