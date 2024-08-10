import React from 'react'
import Toast from './Toast';



function App() {
    
  const [showToast, setShowToast] = React.useState(false);

 
  function handleEnrol() {
    // TODO show toast
    setShowToast(true);

    setTimeout(() => {
    // TODO hide toast
      setShowToast(false);
    }, 3000);
  }

  return (
    <div id="app">
    
      {/* Todo: Render <Toast /> component (conditionally) here */}
      {showToast && <Toast message={'Successfully Enrolled'}/>}
      
      <article>
        <h2>React Course</h2>
        <p>
          A course that teaches you React from the ground up and in great depth!
        </p>
        <button onClick={handleEnrol}>Enrol</button>
      </article>
    </div>
  );
}

export default App;