import React, { forwardRef } from 'react'

const Input = forwardRef(({ isTextarea, label, ...props }, ref) => {

  const inputClasses = 'w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600';

  // flex-col makes flexbox align along the vertical axis
  return (
    <>
      <p className='flex flex-col gap-1 my-4'>
        <label className='text-sm font-bold uppercase text-stone-500'>{label}</label>
        {isTextarea ?
          (
            <textarea ref={ref} className={inputClasses} {...props} />
          ) :
          (
            <input ref={ref} className={inputClasses} {...props}></input>
          )
        }
      </p>
    </>
  )
})

export default Input