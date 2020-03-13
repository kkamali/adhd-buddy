import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchHobbies, addHobby, deleteHobby } from '../actions/hobbies'
import Hobby from '../components/hobbies/Hobby'
import HobbyForm from '../components/hobbies/HobbyForm'

class HobbiesContainer extends Component {
  componentDidMount() {
    this.props.fetchHobbies()
  }

  render() {
    return (
      <div>
        <h1>Things that you like to do</h1>
        {this.props.hobbies.map(hobby => <Hobby key={hobby.id} hobby={hobby} deleteHobby={this.props.deleteHobby} />)}
        <HobbyForm addHobby={this.props.addHobby} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    hobbies: state.hobbies.list
  }
}

export default connect(mapStateToProps, { fetchHobbies, addHobby, deleteHobby })(HobbiesContainer)