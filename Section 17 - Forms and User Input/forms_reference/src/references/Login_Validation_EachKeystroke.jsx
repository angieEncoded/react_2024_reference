import { useState } from "react";

export default function Login() {

  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: ''
  });
  const [wasTouched, setWasTouched] = useState({
    email: false,
    password: false
  });

  const emailIsInvalid =
    wasTouched.email && !enteredValues.email.includes('@');

  const handleInputBlur = (type) => {
    setWasTouched(previousState => ({
      ...previousState,
      [type]: true
    }))
  }

  const handleValueChange = (type, event) => {
    setEnteredValues((previousValues) => ({
        ...previousValues,
        [type]: event.target.value
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
    setEnteredValues({
          email: '',
    password: ''
    })
  }

  return (
    <form onSubmit={handleSubmission}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input onBlur={() => handleInputBlur('email')} id="email" type="email" name="email" value={enteredValues.email} onChange={((event) => handleValueChange('email', event))}/>
          <div className='control-error'>{emailIsInvalid && <p>Please enter a valid email</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" value={enteredValues.password} onChange={((event) => handleValueChange('password', event))}/>
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
