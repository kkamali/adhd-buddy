import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <Navbar bg="dark">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Nav className="mr-auto">
        <Nav.Link><NavLink to="/" exact>Home</NavLink></Nav.Link>
        <Nav.Link><NavLink to="/tasks" exact>Tasks</NavLink></Nav.Link>
        <Nav.Link><NavLink to="/hobbies" exact>Hobbies</NavLink></Nav.Link>
        <Nav.Link><NavLink to="/habits" exact>Habits</NavLink></Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default NavBar