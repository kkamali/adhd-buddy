import React, { Component } from 'react'
import Task from '../components/Task'

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1>Welcome!</h1>
        <h2>Some things that might need your attention....</h2>
        {this.props.tasks.map(task => <Task key={task.id} task={task} />)}
      </div>
    )
  }
}