import React from 'react'
import classes from "./hiddeninput.module.css"

// The task was to add a click listener on the button that would
// call the built in click function on the hidden input

function HiddenInput() {
    
    const selectedImage = React.useRef();
    
    const handleFile = () => {
        selectedImage.current.click();
    }
    
    
    
  return (
    <div id="app">
      <p>Please select an image</p>
      <p>
        <input data-testid="file-picker" type="file" accept="image/*" ref={selectedImage}/>
        <button onClick={handleFile}>Pick Image</button>
      </p>
    </div>
  );
}

export default HiddenInput;
