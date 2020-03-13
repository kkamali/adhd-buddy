import React from 'react'

export const Hobby = ({ hobby, deleteHobby }) =>
  <div>
    {hobby.name}
    <button onClick={() => deleteHobby(hobby.id)}>Delete</button>
  </div>

export default Hobby