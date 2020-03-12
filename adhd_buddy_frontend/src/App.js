import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchTasks } from './actions/tasks'

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
          <Route exact path="/" render={(props) => <Home {...props} tasks={this.props.tasks} loading={this.props.loading} />} />
          <Route exact path="/tasks" component={TasksContainer} />
          <Route exact path="/hobbies" component={HobbiesContainer} />
          <Route exact path="/habits" component={HabitsContainer} />
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

export default connect(mapStateToProps, { fetchTasks })(App);
