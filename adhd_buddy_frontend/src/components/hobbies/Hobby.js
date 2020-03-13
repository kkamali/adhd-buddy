import React from 'react'

export const Hobby = ({ hobby, deleteHobby }) =>
  <div>
    {hobby.name}
    <br />
    {hobby.effort}
    <button onClick={() => deleteHobby(hobby.id)}>Delete</button>
  </div>

export default Hobby