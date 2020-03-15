import React from 'react'
import { Container } from 'react-bootstrap'
import TaskSuggestion from '../components/tasks/TaskSuggestion'
import HobbySuggestion from '../components/hobbies/HobbySuggestion'
import HabitSuggestion from '../components/habits/HabitSuggestion'

export const BuddyContainer = props =>
  <Container>
    <h2>Need some direction?</h2>
    <TaskSuggestion tasks={props.tasks} />
    <HobbySuggestion hobbies={props.hobbies} />
    <HabitSuggestion habits={props.habits} />
  </Container>

export default BuddyContainer