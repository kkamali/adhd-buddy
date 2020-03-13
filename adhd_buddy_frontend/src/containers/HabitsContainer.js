import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchHabits, addHabit, deleteHabit } from '../actions/habits'
import Habit from '../components/habits/Habit'
import HabitForm from '../components/habits/HabitForm'

class HabitsContainer extends Component {
  componentDidMount() {
    this.props.fetchHabits()
  }
  render() {
    return (
      <div>
        <h1>What are you working on?</h1>
        {this.props.habits.map(habit => <Habit key={habit.id} habit={habit} deleteHabit={this.deleteHabit} />)}
        <HabitForm addHabit={this.addHabit} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    habits: state.habits.list
  }
}

export default connect(mapStateToProps, { fetchHabits, addHabit, deleteHabit })(HabitsContainer)