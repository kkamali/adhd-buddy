import React from 'react'
import { Button, Card } from 'react-bootstrap'

export const Task = ({ task, deleteTask }) =>
  <Card style={{ width: '10rem' }}>
    <Card.Body>
      <Card.Title>{task.name}</Card.Title>
      <Button onClick={() => deleteTask(task.id)}>Delete</Button>
    </Card.Body>
  </Card>
export default Task