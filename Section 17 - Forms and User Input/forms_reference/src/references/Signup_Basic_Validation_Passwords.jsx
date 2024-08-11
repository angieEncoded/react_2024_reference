import { useState } from "react";

export default function Signup() {

  const [passwordAreNotEqual, setPasswordsAreNotEqual] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        // Browser now helps us with getting hold of forms but we MUST use the name prop on each input
        const formData = new FormData(event.target);
        const groupData = formData.getAll('acquisition'); // get values from all SELECTED in a group of checkboxes
        const data = Object.fromEntries(formData.entries());
        data.acquisition = groupData; // merge that data into here

        if (data.password !== data['confirm-password']){
          setPasswordsAreNotEqual(true)
          return;
        }


        console.log(data)

    }


    return (

      // Note : you can use the built in browser 'required' to use that validation
      <form onSubmit={handleSubmit}>
        <h2>Welcome on board!</h2>
        <p>We just need a little bit of data from you to get you started 🚀</p>
  
        <div className="control">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" />
        </div>
  
        <div className="control-row">
          <div className="control">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" name="password"  minLength={15} maxLength={20} />
          </div>
  
          <div className="control">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              id="confirm-password"
              type="password"
              name="confirm-password"
            />
            <div className="error-control">{passwordAreNotEqual && <p>Passwords must match</p>}</div>
          </div>
        </div>
  
        <hr />
  
        <div className="control-row">
          <div className="control">
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" name="first-name" />
          </div>
  
          <div className="control">
            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" name="last-name" />
          </div>
        </div>
  
        <div className="control">
          <label htmlFor="phone">What best describes your role?</label>
          <select id="role" name="role">
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="employee">Employee</option>
            <option value="founder">Founder</option>
            <option value="other">Other</option>
          </select>
        </div>
  
        <fieldset>
          <legend>How did you find us?</legend>
          <div className="control">
            <input
              type="checkbox"
              id="google"
              name="acquisition"
              value="google"
            />
            <label htmlFor="google">Google</label>
          </div>
  
          <div className="control">
            <input
              type="checkbox"
              id="friend"
              name="acquisition"
              value="friend"
            />
            <label htmlFor="friend">Referred by friend</label>
          </div>
  
          <div className="control">
            <input type="checkbox" id="other" name="acquisition" value="other" />
            <label htmlFor="other">Other</label>
          </div>
        </fieldset>
  
        <div className="control">
          <label htmlFor="terms-and-conditions">
            <input type="checkbox" id="terms-and-conditions" name="terms" />I
            agree to the terms and conditions
          </label>
        </div>
  
        <p className="form-actions">
            {/* This button is using the built in reset which will clear the form easily */}
          <button type="reset" className="button button-flat">
            Reset
          </button>
          <button type="submit" className="button">
            Sign up
          </button>
        </p>
      </form>
    );
  }