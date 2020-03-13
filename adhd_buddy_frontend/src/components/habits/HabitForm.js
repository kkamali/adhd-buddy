import React, { Component } from 'react'
import { Container, Button, Form } from 'react-bootstrap'

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
      <Container>
        <Form>
          <Form.Group>
            <Form.Label>Habit:</Form.Label>
            <Form.Control type="text" placeholder="ex: brush teeth, practice French, go running" onChange={this.handleChange} value={this.state.text} name="text" />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={this.handleSubmit}>Add</Button>
        </Form>
      </Container>
    )
  }
}