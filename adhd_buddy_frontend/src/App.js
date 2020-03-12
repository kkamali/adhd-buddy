import React from 'react';
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

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/tasks" component={TasksContainer} />
        <Route exact path="/hobbies" component={HobbiesContainer} />
        <Route exact path="/habits" component={HabitsContainer} />
      </div>
    </Router>
  );
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks,
    hobbies: state.hobbies,
    loading: state.loading
  }
}

export default connect(mapStateToProps, { fetchTasks })(App);
