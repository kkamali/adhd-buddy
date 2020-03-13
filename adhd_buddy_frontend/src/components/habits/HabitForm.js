import React, { Component } from 'react'

export default class HabitForm extends Component {
  state = {
    text: ''
  }

  handleSubmit = event => {
    event.preventDefault()
    if (this.state.text.length > 0) {
      this.props.addHabit(this.state)
    }
    this.setState({
      text: ''
    })
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange} value={this.state.text} placeholder="Enter a habit!" name="text" />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}