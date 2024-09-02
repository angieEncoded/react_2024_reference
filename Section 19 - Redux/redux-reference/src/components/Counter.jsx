import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/CounterSlice';

const Counter = () => {

  // useSelector allows us to pick and choose what we want returned. Send in the state, and tell it what to pull out
  // useSelector will also automatically set up the subscription for us and the component will update when needed
  // It will also automatically remove the subscription upon unmount
  const counter = useSelector(state => state.counterReducer.counter);
  const show    = useSelector(state => state.counterReducer.showCounter)

  // to dispatch actions we use the useDispatch hook, but it gives us back a function we use to dispatch actions
  const dispatch = useDispatch();
  const increment             = () => {dispatch(counterActions.increment())}
  const decrement             = () => {dispatch(counterActions.decrement())}
  const increase              = () => {dispatch(counterActions.increase({amount: 5}))} // redux toolkit sends this in like this : {type: SOME_IDENTIFIER, payload: YOUR_DATA}
  const toggleCounterHandler  = () => {dispatch(counterActions.toggleCounter())}


  // Now that we are using redux toolkit, these are no longer needed
  // const increment =             () => { dispatch({ type: "ADDONE"               })};
  // const decrement =             () => { dispatch({ type: "SUBTRACTONE"          })};
  // const increase  =             () => { dispatch({ type: "increase",  amount: 5 })};
  // const toggleCounterHandler =  () => { dispatch({ type: "toggle"               })};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{ counter }</div>}

      <div>
        <button onClick={decrement}>Decrement</button>
        <button onClick={increment}>Increment</button>
        <button onClick={increase}>Increase by 5</button>

      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;