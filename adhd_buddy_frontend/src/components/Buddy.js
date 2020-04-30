import React from 'react'
import { Container } from 'react-bootstrap'
import TaskSuggestion from './tasks/TaskSuggestion'
import HobbySuggestion from './hobbies/HobbySuggestion'
import HabitSuggestion from './habits/HabitSuggestion'

export const Buddy = props =>
  <Container>
    <h2>Need some direction?</h2>
    <TaskSuggestion tasks={props.tasks} />
    <HobbySuggestion hobbies={props.hobbies} />
    <HabitSuggestion habits={props.habits} />
  </Container>

export default Buddy