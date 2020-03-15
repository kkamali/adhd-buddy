import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap'

export default class HobbySuggestion extends Component {
  state = {
    show: false,
    text: '',
    disabled: true
  }

  handleClick = () =>
    this.setState({
      ...this.state,
      show: true,
      text: this.props.hobbies[Math.floor(Math.random() * this.props.hobbies.length)].name
    })

  handleClose = () =>
    this.setState({
      ...this.state,
      show: false
    })


  render() {
    return (
      <div>
        <Button variant="warning" onClick={this.handleClick} disabled={this.disabled}>I want to do something fun</Button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            How does this sound?
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