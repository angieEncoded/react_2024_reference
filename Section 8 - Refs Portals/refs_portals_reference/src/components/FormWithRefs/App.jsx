import Form from './Form';
import React from 'react'

// Don't change the name of the 'App' 
// function and keep it a named export

export function App() {
    
    const formReference = React.useRef();
    
  function handleRestart() {
      formReference.current.clear();
  }



  return (
    <div id="app">
      <button onClick={handleRestart}>Restart</button>
      <Form ref={formReference}/>
    </div>
  );
}

