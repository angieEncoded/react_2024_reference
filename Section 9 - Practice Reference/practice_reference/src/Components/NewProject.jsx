import React, {useRef} from 'react'
import Input from "./Input"
import Modal from "./Modal"

const NewProject = ({onAddProject, onCancelProject}) => {

  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();
  const modal = useRef();

  const handleSave = () => {
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDueDate = dueDateRef.current.value;

    // some (very) basic validation
    if(enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === ''){
      modal.current.open();
      return;
    }

    onAddProject({
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      dueDate: dueDateRef.current.value
    })
  }


  return (

    <>
    <Modal ref={modal} buttonCaption={'Okay'}>
      <h2 className='text-al font-bold text-stone-900 mt-4 my-4'>Invalid input</h2>
      <p className='text-stone-800 mb-4'>Ooops, looks like you forgot to enter a value.</p>
      <p className='text-stone-800 mb-4'>Please make sure you enter a value for all fields</p>
    </Modal>

    <div className='w-[35rem] mt-16'>
        <menu className='flex items-center justify-end gap-4 my-4'>
            <li><button onClick={onCancelProject} className='text-stone-800 hover:text-stone-950'>Cancel</button></li>
            <li><button onClick={handleSave} className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950 '>Save</button></li>
        </menu>
        <div>
            <Input type="text" ref={titleRef} label={"Title"} />
            <Input ref={descriptionRef} label={"Description"} isTextarea={true} />
            <Input type="date" ref={dueDateRef} label={"Due Date"} />
        </div>
    </div>
    </>
  )
}

export default NewProject