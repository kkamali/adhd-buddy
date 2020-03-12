import React from 'react';
import { connect } from 'react-redux'
import { fetchTasks } from './actions/tasks'
import './App.css';

function App() {
  return (
    <div>
      HEY
    </div>
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
