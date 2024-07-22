import React, { useContext, useRef } from 'react'
import { todoContext } from '../context'

const addInputRef = useRef(null)

function Task() {

    const generateId = () => {
        return Date.now().toString(32)
    }

    const Task = {
        task : addInputRef.current.value,
        id : generateId(),
    }
    const {tasks, setTasks} = useContext(todoContext)

const handleAddTask = () => {
    setTasks(Task)
}

  return (
    <div className='addTask'>
        <div>
            <input type="text" id='input-task' ref={addInputRef} />
            <button id='input-btn' onClick={handleAddTask}>Add task...</button>
        </div>
    </div>
  )
}

export default Task