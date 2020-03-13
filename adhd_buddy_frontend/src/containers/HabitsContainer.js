import React, { Component } from 'react'
import Habit from '../components/habits/Habit'
import HabitForm from '../components/habits/HabitForm'

export default class HabitsContainer extends Component {
  render() {
    return (
      <div>
        <h1>What are you working on?</h1>
        {this.props.habits.map(habit => <Habit key={habit.id} habit={habit} />)}
        <HabitForm />
      </div>
    )
  }
}