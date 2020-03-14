import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import Task from '../components/tasks/Task'
import TaskForm from '../components/tasks/TaskForm'

export default class Home extends Component {
  welcomeMessage() {
    const now = new Date()
    if (now.getHours() >= 17 && now.getHours() < 20) {
      return <h1>Good Evening!</h1>
    } else if (now.getHours() >= 20 || now.getHours() < 5) {
      return <h1>Time to sleep ?</h1 >
    } else if (now.getHours() >= 12 && now.getHours() < 17) {
      return <h1>Hey there!</h1>
    } else {
      return <h1>Mornin'</h1>
    }
  }

  renderTasks() {
    const tasks = this.props.tasks
    if (tasks.length > 0) {
      return (
        <div>
          <h2>Some things that might need your attention....</h2>
          {this.props.tasks.map(task => <Task key={task.id} task={task} deleteTask={this.props.deleteTask} />)}
        </div>
      )
    } else {
      return (
        <div>
          <h2>Hey, what would you like to get done today?</h2>
          <TaskForm addTask={this.props.addTask} />
        </div>
      )
    }
  }

  render() {
    return (
      <Container>
        {this.welcomeMessage()}
        {this.renderTasks()}
      </Container>
    )
  }
}