import React from 'react'
import { Button, Card } from 'react-bootstrap'

export const Task = ({ task, deleteTask }) =>
  <Card style={{ width: '25%' }}>
    <Card.Body>
      <Card.Title>{task.name}</Card.Title>
      <Button onClick={() => deleteTask(task.id)}>Delete</Button>
    </Card.Body>
  </Card>
export default Task