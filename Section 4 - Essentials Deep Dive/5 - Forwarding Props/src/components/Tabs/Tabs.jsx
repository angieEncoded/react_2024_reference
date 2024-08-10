// IMPORTANT CONCEPT IN THIS FILE - LECTURE 68 IS WHERE
// THIS IS FOUND

import React from 'react'


// When we are using destructuring, we can set default values
// And this is an alternative pattern to accepting props -
// We can specify some props, and then catch the rest with ...props
// spread operator
const Tabs = ({buttonsContainer = 'menu', ...props}) => {

  // Set this here so that we can now use this as a psedo-component
  const ButtonsContainer = buttonsContainer;

  // React will look at the value stored in ButtonsContainer
  // It will either see that its a string and try to look for a built in component that can be identified by that string value
  // or if we passed in a custom component, it will see that and will display the correct component
  // In order for this to work, it MUST start with a capital character like a normal component


  return (


    <>
    <ButtonsContainer>
      {props.buttons}
    </ButtonsContainer>

      {props.children}
    </>
  )
}

export default Tabs