import React from 'react'

export const Task = ({ task, deleteTask }) =>
  <div>
    {task.name}
    <button onClick={() => deleteTask(task.id)}>Finish</button>
  </div>

export default Task