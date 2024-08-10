import React from 'react'
import { forwardRef, useImperativeHandle, useRef } from 'react'
import { createPortal } from 'react-dom'

// we will receive another argument after props - the ref parameter - because we wrapped this with forwardRef
const ResultModal = forwardRef(({ remainingTime, targetTime, onReset }, ref) => {

  // Now we need a separate ref for reaching out to the dialog
  // We want to detach the dialog element from any other outer components
  const dialog = useRef();


  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  // define properties and methods that should be accessible from outside this component
  // First argument is the forwarded ref
  // Second is a functiont hat returns an object that groups all the properties
  // and methods that should be exposed by this component to other components
  useImperativeHandle(ref, () => {
    return {
      open()  {
        dialog.current.showModal(); // now we want to use the show modal here.
      }
    }

  });

  // The whole purpose of putting the above imperative handle is to make it clear
  // that if we change the below from the html built in dialog to something like
  // a div, now we know that we have to change the method above that will show it
  // and the other component doesn't ever have to know something changed under the hood


  // To teleport to the place in the dom we have for the modal wrap into createPortal
  // and as a second argument, get the id of the place we want to teleport to
  return createPortal(
    <>

        {/* built in element, by default its invisible until you add open to it*/}
        {/* Make sure to pass the onReset to the onClose because hitting the esc key will otherwise not trigger the form reset */}
        <dialog ref={dialog} className="result-modal" onClose={onReset}>
            {userLost && <h2>You Lost</h2>}
            {!userLost && <h2>Your score: {score}</h2>}
            <p>The target time was <strong>{targetTime}</strong> seconds</p>
            <p>You stopped the timer with <strong>{formattedRemainingTime}</strong> seconds left</p>
            {/* If you add a form with the method dialog inside a dialog tag, a button that submits that form will just close the dialog */}
            <form method="dialog" onSubmit={onReset}>
                <button>Done</button>
            </form>
        </dialog>

    </> , document.getElementById('modal')
  )

})

export default ResultModal