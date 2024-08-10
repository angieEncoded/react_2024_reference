import React from 'react'

const Form = React.forwardRef((props, ref) => {
    
    const formReference = React.useRef();
    
    React.useImperativeHandle(ref, () => {
        return {
            clear() {
                formReference.current.reset();
            }
        }
    })
    
    

    return (
    <form ref={formReference}>
      <p>
        <label>Name</label>
        <input type="text" />
      </p>

      <p>
        <label>Email</label>
        <input type="email" />
      </p>
      <p id="actions">
        <button>Save</button>
      </p>
    </form>
  );
})

export default Form