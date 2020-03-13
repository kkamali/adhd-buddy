import React from 'react'
import { Card, Button } from 'react-bootstrap'

export const Habit = ({ habit, deleteHabit }) =>
  <Card style={{ width: '10rem' }}>
    <Card.Body>
      <Card.Title>{habit.name}</Card.Title>
      <Button onClick={() => deleteHabit(habit.id)}>Delete</Button>
    </Card.Body>
  </Card>

export default Habit