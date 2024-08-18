import React from 'react'
// import { counterReducer } from './counterReducer';

export function counterReducer(state, action) {
    if (action.type === "INCREMENT") {
      return {
        count: state.count++
      };
    }
    if (action.type === "DECREMENT") {
        return {
          count: state.count--
        };
    }

    if (action.type === "RESET") {
      return {
        count: 0,
      };
    }
    return state;
}


const initialState = {
    count: 0,
};


function App() {

  const [countState, dispatch] = React.useReducer(counterReducer, initialState);

  const addOne = () => {
    dispatch({
      type: "INCREMENT",
    });
  };

  const subtractOne = () => {
    dispatch({
      type: "DECREMENT",
    });
  };

  const reset = () => {
    dispatch({
      type: "RESET",
    });
  };

  return (
    <div id="app">
      <h1>The (Final?) Counter</h1>
      <p id="actions">
        <button onClick={addOne}>Increment</button>
        <button onClick={subtractOne}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </p>
      <p id="counter">{countState.count}</p>
    </div>
  );
}

export default App;
