import { useState } from "react";
import Input from "./Input"
import { isNotEmpty, hasMinLength, isEmail, isEqualsToOtherValue } from '../util/validation'

export default function Login() {

  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: ''
  });
  const [wasTouched, setWasTouched] = useState({
    email: false,
    password: false
  });

  const emailIsInvalid = wasTouched.email && !isEmail(enteredValues.email) && !isNotEmpty(enteredValues.email);
  const passwordIsInvalid = wasTouched.password && !hasMinLength(enteredValues.password, 6)


  const handleInputBlur = (type) => {
    setWasTouched(previousState => ({
      ...previousState,
      [type]: true
    }))
  }

  const handleValueChange = (type, value) => {
    setEnteredValues((previousValues) => ({
      ...previousValues,
      [type]: value
    }));
    setWasTouched(previousState => ({
      ...previousState,
      [type]: false
    }))
  }

  const handleSubmission = (event) => {
    event.preventDefault()

    console.log(enteredValues.email)
    console.log(enteredValues.password)
    // set all state values to '' to reset the form
    // setEnteredValues({
    //   email: '',
    //   password: ''
    // })
  }

  return (
    <form onSubmit={handleSubmission}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label='email'
          id='email'
          type='email'
          name='email'
          onChange={((event) => handleValueChange('email', event.target.value))}
          onBlur={() => handleInputBlur('email')}
          value={enteredValues.email}
          error={emailIsInvalid && 'Please enter a valid email.'}
        />

        <Input
          label='password'
          id='password'
          type='password'
          name='password'
          onChange={((event) => handleValueChange('password', event.target.value))}
          onBlur={() => handleInputBlur('password')}
          value={enteredValues.password}
          error={passwordIsInvalid && 'Please enter a valid password'}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
