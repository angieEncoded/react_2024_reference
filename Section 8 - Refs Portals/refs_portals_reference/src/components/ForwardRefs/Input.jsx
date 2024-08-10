import React from 'react'
const Input = React.forwardRef(({label, type, ...props}, ref) => {
    
      // Todo: Accept forwarded ref and "connect" it to the <input> element
      
      
  return (
    <p className="control">
      <label id={label}>{label}</label>
      {/* Todo: "Forward" remaining props to <input> element */}
      <input ref={ref} type={type} {...props}/>
    </p>
  );
    
    
})

export default Input