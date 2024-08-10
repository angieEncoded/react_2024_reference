import Header from "./components/Header"
import UserInput from "./components/UserInput"
import { useState } from "react";
import Results from "./components/Results";


function App() {


  // Moving state here from another component is called "Lifting state up"
  const [investmentValues, setInvestmentValues] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  const inputIsValid = investmentValues.duration >= 1;

  // We also move the function into here
  const handleChange = (inputId, newValue) => {
    setInvestmentValues((previousState) => {
      return {
        ...previousState,
        [inputId]: +newValue // javascript syntax to dynamically set this property
        // + will force a conversion from a string value to a number value
      }
    })
  }



  return (
    <>
      <Header />
      {/* Passing it back down through to the component we lifted it out of */}
      <UserInput onChangeInput={handleChange} investmentValues={investmentValues} />
      {inputIsValid &&
        <Results input={investmentValues} />
      }
      {!inputIsValid && <p className="center">Please enter a duration greater than 0.</p>}
    </>
  )
}

export default App
