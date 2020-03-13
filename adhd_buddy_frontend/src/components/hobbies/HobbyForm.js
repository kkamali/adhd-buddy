import React, { Component } from 'react'

export default class HobbyForm extends Component {
  state = {
    text: ''
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addHobby(this.state)
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
        <input type="text" onChange={this.handleChange} value={this.state.text} />
        <input type="submit" />
      </form>
    )
  }
}