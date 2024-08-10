import { useState, useRef } from "react";

// REMEMBER - state value changes cause the component to be re-rendered
// refs will NOT cause a re-render, so we can't use them by themselves to
// show updated contents


export default function Player() {

  const playerName = useRef();
  // We no longer need two slices of state for this
  // const [submitted, setSubmitted] = useState(false);
  const [enteredPlayerName, setEnteredPlayerName] = useState('');

  // We no longer need this
  // const handleChange = (event) => {
  //   setSubmitted(false); // set this back to false if we started typing again
  //   setEnteredPlayerName(event.target.value);
  // }

  const handleClick = () => {
    // setSubmitted(true);
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = '';
  }
  return (
    <section id="player">
      {/* Javascript shortcut to ternary, two ?? says output original value if truthy, next if falsy */}
      <h2>Welcome {enteredPlayerName ?? "Unknown Entity"}</h2>
      <p>                                   {/* We no longer need these two props on input either, ref is enough */}
                                            {/*onChange={handleChange} value={enteredPlayerName} */}
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}




