import React from 'react'
import noProjectImage from "../assets/no-projects.png"
import Button from "./Button"

const NoProjectSelected = ({onStartAddProject}) => {
  return (
    <>
        <div className='my-24 text-center w-2/3'>
        <img src={noProjectImage} alt="empty task list" className='w-16 h-15 object-contain mx-auto'/>
        <h2 className='text-al font-bold text-stone-500 mt-4 my-4'>No project selected</h2>
        <p className='text-stone-400 mb-4'>Select a project or get started with a new one</p>
        <p className='mt-8'>
        <Button onClick={onStartAddProject} >Create a new project</Button>

        </p>
        </div>

    </>
  )
}

export default NoProjectSelected