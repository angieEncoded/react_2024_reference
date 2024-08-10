// Some notes that I couldn't comment out in AuthInputs.jsx
import React from 'react'

const Notes = () => {
  return (
    <div>

        <p className='paragraph'>
        {/* using string interpolation */}
        <Label $invalid={emailNotValid}>Email</Label>
        <Input
        type="email"
        // style={{
        //   backgroundColor: emailNotValid ? '#fed2d2' : "#d1d5db"
        // }}
        // className={emailNotValid ? 'invalid' : undefined}
        // it is a convention to prefix these with a dollar sign to avoid clashing with html built-in properties
        $invalid={emailNotValid}
        onChange={(event) => handleInputChange('email', event.target.value)}
        />
        </p>


        <p>
        <Label  $invalid={passwordNotValid}>Password</Label>
        <Input
        type="password"
        $invalid={passwordNotValid}
        // className={passwordNotValid ? 'invalid' : undefined}
        onChange={(event) =>
            handleInputChange('password', event.target.value)
        }
        />
        </p>

    </div>
  )
}

export default Notes

