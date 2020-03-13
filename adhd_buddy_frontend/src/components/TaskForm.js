import React, { Component } from 'react'

export default class TaskForm extends Component {
  state = {
    text: '',
    timeSensitive: false
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addTask(this.state)
    this.setState({
      text: '',
      timeSensitive: false
    })
  }

  handleChange = event => {
    const value = event.target.name === 'timeSensitive' ? event.target.checked : event.target.value

    this.setState({
      [event.target.name]: value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label for="task">Enter task:</label>
        <input type="text" value={this.state.text} onChange={this.handleChange} name="text" />
        <input type="checkbox" name="timeSensitive" checked={this.state.timeSensitive} onChange={this.handleChange} />
        <label for="time_sensitive">Is this time sensitive?</label>
        <input type="submit" />
      </form>
    )
  }
}