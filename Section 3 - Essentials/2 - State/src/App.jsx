import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts";
import { CORE_CONCEPTS } from "./util/data";
import TabButton from "./components/TabButton";
import {useState} from 'react' // react hook to deal with changing state

function App() {
  // State slices are always called in here
  const [text, setText] = useState('Please click a button'); // we can use const because it will be 're-read' every time the state is updated. Brand new const.

    // only callable inside this function
    function handleSelect(selectedButton) {
      setText(selectedButton); // set the text here to the selected button
      console.log(selectedButton)
    }


  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* Passing in props to the component we are calling */}
            <CoreConcepts title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description}  image={CORE_CONCEPTS[0].image} />

            {/* Alternative concept using the spread operator to grab the data, only works if the keys match */}
            <CoreConcepts {...CORE_CONCEPTS[1]}/> 
            <CoreConcepts {...CORE_CONCEPTS[2]}/> 
            <CoreConcepts {...CORE_CONCEPTS[3]}/> 
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {/* We use an anonymous arrow function to execute that, and then execute the handle select inside which allows us to send in parameters */}
            <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {text}
        </section>




        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
