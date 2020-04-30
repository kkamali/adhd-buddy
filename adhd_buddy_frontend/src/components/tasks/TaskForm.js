import React, { Component } from 'react'
import { Button, Form, Container } from "react-bootstrap"

export default class TaskForm extends Component {
  state = {
    text: '',
    timeSensitive: false
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log('a')
    this.props.addTask(this.state)
    console.log('f')
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
      <Container>
        <Form>
          <Form.Group>
            <Form.Label>Task:</Form.Label>
            <Form.Control type="text" placeholder="ex: taking dog to groomer, finish assignment" onChange={this.handleChange} value={this.state.text} name="text" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Is this time sensitive?</Form.Label>
            <Form.Check name="timeSensitive" checked={this.state.timeSensitive} onChange={this.handleChange} />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={this.handleSubmit}>Add</Button>
        </Form>
      </Container>
    )
  }
}