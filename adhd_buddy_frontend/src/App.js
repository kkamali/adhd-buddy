import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchTasks, addTask, deleteTask } from './actions/tasks'
import { fetchHobbies } from './actions/hobbies'
import { fetchHabits } from './actions/habits'
import Home from './containers/Home'
import Navbar from './components/Navbar'
import TasksContainer from './containers/TasksContainer'
import HobbiesContainer from './containers/HobbiesContainer'
import HabitsContainer from './containers/HabitsContainer'
import BuddyContainer from './containers/BuddyContainer'

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchTasks()
    this.props.fetchHobbies()
    this.props.fetchHabits()
  }

  renderBuddy() {
    if (this.props.tasks.length > 0) {
      return <BuddyContainer tasks={this.props.tasks} habits={this.props.habits} hobbies={this.props.hobbies} />
    }
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" render={(props) => <Home {...props} tasks={this.props.tasks} deleteTask={this.props.deleteTask} addTask={this.props.addTask} />} />
          <Route exact path="/tasks" render={(props) => <TasksContainer {...props} tasks={this.props.tasks} addTask={this.props.addTask} deleteTask={this.props.deleteTask} />} />
          <Route exact path="/hobbies" component={HobbiesContainer} />
          <Route exact path="/habits" component={HabitsContainer} />
        </div>
        {this.renderBuddy()}
      </Router >
    )
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks.list,
    hobbies: state.hobbies.list,
    habits: state.habits.list
  }
}

export default connect(mapStateToProps, { fetchTasks, addTask, deleteTask, fetchHobbies, fetchHabits })(App);