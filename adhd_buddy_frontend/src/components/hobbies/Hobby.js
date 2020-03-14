import React from 'react'
import { Button, Card } from 'react-bootstrap'

export const Hobby = ({ hobby, deleteHobby }) =>
  <Card style={{ width: '25%' }}>
    <Card.Body>
      <Card.Title>{hobby.name}</Card.Title>
      <Card.Subtitle className='mb-2 text-muted'>{hobby.effort}</Card.Subtitle>
      <Button onClick={() => deleteHobby(hobby.id)}>Delete</Button>
    </Card.Body>
  </Card>

export default Hobby