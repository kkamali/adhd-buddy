import React, { Component } from 'react'
import Task from '../components/Task'
import TaskForm from '../components/TaskForm'

export default class TasksContainer extends Component {
  render() {
    return (
      <div>
        <h1>Things you want to get done:</h1>
        {this.props.tasks.map(task => <Task key={task.id} task={task} />)}
        <h2>Add another?</h2>
        <TaskForm addTask={this.props.addTask} />
      </div>
    )
  }
}