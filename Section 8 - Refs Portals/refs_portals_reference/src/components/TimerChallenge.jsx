import React, { useState, useRef } from 'react'
import ResultModal from './ResultModal';

const TimerChallenge = ({title, targetTime}) => {
  

    const timer = useRef(); // each component will get its own reference
    const dialog = useRef();

    // Get the time in milliseconds
    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

    // These state values were tied to the original setTimeout
    // const [timerStarted, setTimerStarted] = useState(false);
    // const [timerExpired, setTimerExpired] = useState(false);
    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    // Now we can check if the timer has expired
    if (timeRemaining <= 0){
        clearInterval(timer.current);
        dialog.current.open();

        // setting state here can be dangerous because it can cause an infinite loop
        // but in this case we are inside an if check that will not be met unless
        // we are at the time remaining
    }

    const handleReset = () => {
        setTimeRemaining(targetTime * 1000);
    }

    const handleStart = () => {

        timer.current = setInterval(() => {
            setTimeRemaining(previousTime => previousTime - 10);
        }, 10);


        // first iteration was Timeout, but we cannot keep track of running time this way
        /*
        timer.current = setTimeout(() => {
            setTimerExpired(true); // if we hit here, player has lost
            // dialog.current.showModal(); // dialog modal has this built in method
            dialog.current.open(); // now we use this reference from the other component
            setTimerStarted(false);
        }, targetTime * 1000)
        */
    }

    const handleStop = () => {

        clearInterval(timer.current)
        dialog.current.open();

        // Now that we are using intervals, these will no longer work
        // we must always use current to get a ref value
        // clearTimeout(timer.current);
        // setTimerStarted(false)
    }

  return (
    <>
    <ResultModal onReset={handleReset} ref={dialog} targetTime={targetTime} remainingTime={timeRemaining}/>
    <section className={'challenge'}>
        <h2>{title}</h2>
        <p className="challenge-time">
            {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <p>
            <button onClick={timerIsActive ? handleStop : handleStart}>
                {timerIsActive ? 'Stop Challenge' : 'Start Challenge'}
            </button>
        </p>
        <p className={timerIsActive ? 'active' : ''}>
            {timerIsActive ? 'Timer is running...' : "Timer Inactive"}
        </p>
    </section>
    </>

    
  )



}




export default TimerChallenge