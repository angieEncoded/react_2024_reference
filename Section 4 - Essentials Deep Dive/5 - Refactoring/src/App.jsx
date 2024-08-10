import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts";
import Examples from "./components/Examples/Examples";
import { useState } from 'react' // react hook to deal with changing state



function App() {

  return (
    <>
      <Header />
      <main>

        <CoreConcepts />
        <Examples/>

        <h2>Time to get started!</h2>
      </main>


    </>

  );
}

export default App;
