import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap'

export default class HabitSuggestion extends Component {
  state = {
    show: false,
    text: '',
    disabled: true
  }

  handleClick = () =>
    this.setState({
      ...this.state,
      show: true,
      text: this.props.habits[Math.floor(Math.random() * this.props.habits.length)].name
    })

  handleClose = () =>
    this.setState({
      ...this.state,
      show: false
    })


  render() {
    return (
      <div>
        <Button variant="danger" onClick={this.handleClick} disabled={this.disabled}>I'm not feeling well</Button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            Maybe you should try this?
          </Modal.Header>
          <Modal.Body>{this.state.text}</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.handleClose}>I'll try it</Button>
            <Button variant="secondary" onClick={this.handleClose}>Not feeling this</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}