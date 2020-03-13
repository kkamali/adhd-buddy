import React, { Component } from 'react'
import { Form, Button, Container } from 'react-bootstrap'

export default class HobbyForm extends Component {
  state = {
    text: '',
    effort: 1
  }

  handleSubmit = event => {
    event.preventDefault()
    if (this.state.text.length > 0) {
      this.props.addHobby(this.state)
    }
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
      <Container>
        <Form>
          <Form.Group>
            <Form.Label>Hobby:</Form.Label>
            <Form.Control type="text" placeholder="ex: painting, playing video games, herding llamas" onChange={this.handleChange} value={this.state.text} name="text" />
          </Form.Group>
          <Form.Group>
            <Form.Label>How much effort does it take? From 1 to 10:</Form.Label>
            <Form.Control type="text" onChange={this.handleChange} value={this.state.effort} placeholder="1" name="effort" />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={this.handleSubmit}>Add</Button>
        </Form>
      </Container>
    )
  }
}