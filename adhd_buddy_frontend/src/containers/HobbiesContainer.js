import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchHobbies, addHobby, deleteHobby } from '../actions/hobbies'
import Hobby from '../components/hobbies/Hobby'
import HobbyForm from '../components/hobbies/HobbyForm'
import { Dropdown, DropdownButton } from 'react-bootstrap'

class HobbiesContainer extends Component {
  state = {
    sort: "alpha"
  }
  componentDidMount() {
    this.props.fetchHobbies()
  }

  handleSelect = event => {
    console.log(event.target.innerText)
    if (event.target.innerText === "Alphabetical") {
      this.setState({ sort: 'alpha' })
    } else if (event.target.innerText === "Effort Level") {
      this.setState({ sort: 'effort' })
    }
  }



  renderHobbies = (hobbies) => {
    let hobbiesCopy = [...hobbies]
    if (this.state.sort === "alpha") {
      hobbiesCopy.sort(function (a, b) {
        let nameA = a.name.toUpperCase()
        let nameB = b.name.toUpperCase()
        if (nameA < nameB) {
          return -1
        } else if (nameA > nameB) {
          return 1
        } else {
          return 0
        }
      })
    } else {
      hobbiesCopy.sort((a, b) => b.effort - a.effort)
    }
    return hobbiesCopy.map(hobby => <Hobby key={hobby.id} hobby={hobby} deleteHobby={this.props.deleteHobby} />)
  }


  render() {
    return (
      <div>
        <h1>Things that you like to do</h1>
        <DropdownButton>
          <Dropdown.Item onClick={this.handleSelect} value="alpha">Alphabetical</Dropdown.Item>
          <Dropdown.Item onClick={this.handleSelect} value="effort">Effort Level</Dropdown.Item>
        </DropdownButton>
        {this.renderHobbies(this.props.hobbies)}
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