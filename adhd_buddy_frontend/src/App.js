import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchTasks, addTask, deleteTask } from './actions/tasks'

import NavBar from './components/NavBar'
import Home from './containers/Home'
import TasksContainer from './containers/TasksContainer'
import HobbiesContainer from './containers/HobbiesContainer'
import HabitsContainer from './containers/HabitsContainer'

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchTasks()
  }

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" render={(props) => <Home {...props} tasks={this.props.tasks} loading={this.props.loading} deleteTask={this.props.deleteTask} />} />
          <Route exact path="/tasks" render={(props) => <TasksContainer {...props} tasks={this.props.tasks} loading={this.props.loading} addTask={this.props.addTask} deleteTask={this.props.deleteTask} />} />
          <Route exact path="/hobbies" render={(props) => <HobbiesContainer {...props} hobbies={this.props.hobbies} loading={this.props.loading} />} />
          <Route exact path="/habits" render={(props) => <HabitsContainer {...props} habits={this.props.habits} loading={this.props.loading} />} />
        </div>
      </Router >
    )
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks,
    hobbies: state.hobbies,
    habits: state.habits,
    loading: state.loading
  }
}

export default connect(mapStateToProps, { fetchTasks, addTask, deleteTask })(App);
