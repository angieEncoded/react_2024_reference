import Input from "./Input"
import { isNotEmpty, hasMinLength, isEmail, isEqualsToOtherValue } from '../util/validation'
import { useInput } from "../hooks/useInput";

// Seems that nothing about how I was doing this changed at all in react 18

export default function Login() {

  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError
  } = useInput('', isEmail);
  // Note that we could run multiple functions in such a hook like this
  // } = useInput('', (value) => {
  //   return isEmail(value && isNotEmpty(value))
  // });

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError
  } = useInput('', (value) => hasMinLength(value, 6));

  const handleSubmission = (event) => {
    event.preventDefault();
    if(emailHasError || passwordHasError){
      return;
    }
    console.log(emailValue, passwordValue, "sending to back end"
    )

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
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          value={emailValue}
          error={emailHasError && 'Please enter a valid email.'}
        />

        <Input
          label='password'
          id='password'
          type='password'
          name='password'
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
          value={passwordValue}
          error={passwordHasError && 'Please enter a valid password'}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
