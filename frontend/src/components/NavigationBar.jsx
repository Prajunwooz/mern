import React from 'react'
import { NavLink } from 'react-router-dom'
import "../../src/App.css"

const NavigationBar = () => {
  return (
    <div className ="Header">
      <h1>logo</h1>
<div>
    {/* import Navlink fromm react-router-dom */}
      <NavLink to = {"/"}> Home</NavLink>   
        <NavLink to = {"/about"}> About</NavLink>
        <NavLink to = {"/contact"}> Contact</NavLink>
    </div>
    </div>
  )
}

export default NavigationBar
