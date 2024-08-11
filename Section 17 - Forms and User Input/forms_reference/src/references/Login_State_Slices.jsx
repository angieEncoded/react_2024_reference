import { useState } from "react";

export default function Login() {

  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  const handleEmailChange = (event) => {
    setEnteredEmail(event.target.value);
  }

  const handleSubmission = (event) => {
    event.preventDefault()
    console.log(enteredEmail)
    console.log(enteredPassword)
  }


  const handlePasswordChange = (event) => {
    setEnteredPassword(event.target.value)
  }


  return (
    <form onSubmit={handleSubmission}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" value={enteredEmail} onChange={handleEmailChange}/>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" value={enteredPassword} onChange={handleEmailChange}/>
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
