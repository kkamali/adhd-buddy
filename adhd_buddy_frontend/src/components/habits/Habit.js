import React from 'react'

export const Habit = ({ habit, deleteHabit }) =>
  <div>
    {habit.name}
    <button onClick={() => deleteHabit(habit.id)}>Delete</button>
  </div>

export default Habit