import React, { useRef } from 'react'
import { createPortal } from 'react-dom'
import { forwardRef, useImperativeHandle } from 'react'
import Button from './Button';

const Modal = forwardRef(({children, buttonCaption}, ref) => {

    const dialog = useRef();
    // to expose a function to the caller
    useImperativeHandle(ref, () => {
        return {
            open(){
                dialog.current.showModal();
            },
            close() {

            }
        }
    });

  return createPortal(
    <dialog ref={dialog} className='backdrop:bg-stone-900/90 p-4 rounded shadow-md'>
        {children}
        <form className='mt-4 text-right' method="dialog">
            <Button>{buttonCaption}</Button>
        </form>
    </dialog>, document.getElementById('modal-root')
  )
})

export default Modal