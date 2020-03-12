import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/" exact>Home</NavLink>
      <NavLink to="/tasks" exact>Tasks</NavLink>
      <NavLink to="/hobbies" exact>Hobbies</NavLink>
      <NavLink to="/habits" exact>Habits</NavLink>
    </div>
  )
}

export default NavBar