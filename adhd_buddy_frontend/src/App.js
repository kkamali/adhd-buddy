import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchTasks, addTask, deleteTask } from './actions/tasks'
import Home from './containers/Home'
import Navbar from './components/Navbar'
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
          <Navbar />
          <Route exact path="/" render={(props) => <Home {...props} tasks={this.props.tasks} loading={this.props.loading} deleteTask={this.props.deleteTask} />} />
          <Route exact path="/tasks" render={(props) => <TasksContainer {...props} tasks={this.props.tasks} loading={this.props.loading} addTask={this.props.addTask} deleteTask={this.props.deleteTask} />} />
          <Route exact path="/hobbies" component={HobbiesContainer} />
          <Route exact path="/habits" component={HabitsContainer} />
        </div>
      </Router >
    )
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks.list
  }
}

export default connect(mapStateToProps, { fetchTasks, addTask, deleteTask })(App);