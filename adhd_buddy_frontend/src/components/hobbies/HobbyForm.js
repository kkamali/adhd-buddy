import React, { Component } from 'react'

export default class HobbyForm extends Component {
  state = {
    text: '',
    effort: 1
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addHobby(this.state)
    this.setState({
      text: '',
      effort: 1
    })
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange} value={this.state.text} placeholder="Enter a hobby!" name="text" />
        <label>Effort (from 1-10)</label>
        <input type="text" onChange={this.handleChange} value={this.state.effort} placeholder="1" name="effort" />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}