import React from 'react'

// gettting timer, description and time
export default function Workout({ title, description, time, onComplete }) {
    
    const timer = React.useRef(); // each component will get its own reference

    const [timerStarted, setTimerStarted] = React.useState(false);
    const [timerExpired, setTimerExpired] = React.useState(false);

    
  function handleStartWorkout(time, title) {
    // Todo: Start timer
    timer.current = setTimeout(() => {
        setTimerExpired(true);
        setTimerStarted(false);
        clearTimeout(timer.current);
        onComplete(title);
    }, time * 1000)

  }

  function handleStopWorkout(title) {
    // Todo: Stop timer
    clearTimeout(timer.current);
    setTimerStarted(false)
    onComplete(title);
  }

  return (
    <article className="workout">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{time}</p>
      <p>
        <button onClick={() => handleStartWorkout(time, title)}>Start</button>
        <button onClick={() => handleStopWorkout(title)}>Stop</button>
      </p>
    </article>
  );
}