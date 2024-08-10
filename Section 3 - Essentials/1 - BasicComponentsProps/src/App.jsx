import Header from "./components/Header";
import CoreConcepts from "./components/CoreConcepts";
import { CORE_CONCEPTS } from "./util/data";

function App() {
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
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
