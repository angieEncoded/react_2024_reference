import React from 'react'
import NewTask from './NewTask'

const Tasks = ({drillAddAgain, onDelete, drillTasksAgain}) => {
  return (
    <>
        <section>
            <h2 className='text-2xl font-bold text-stone700 mb-4'>Tasks</h2>
            <NewTask onAdd={drillAddAgain}/>
            {drillTasksAgain.length === 0 && <p className='text-stone-800 my-4'> This project does not have any tasks yet.</p>}
            {drillTasksAgain.length > 0 && <ul className='p-4 mt-8 rounded-md bg-stone-100'>
              {drillTasksAgain.map(item => <li className='flex justify-between my-4' key={item.id}><span>{item.text}</span>
              <button onClick={() => onDelete(item.id)} className='text-stone-700 hover:text-red-500'>Clear</button></li>)}
            </ul>}
        </section>
    </>

  )
}

export default Tasks