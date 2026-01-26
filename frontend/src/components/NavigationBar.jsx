import React from 'react'
import { NavLink } from 'react-router-dom'
import "../../src/App.css"
import Store from '../compenents/store'

const NavigationBar = () => {
  return (
    <div className ="Header">
      <h1 >
        <img src="https://graphicsfamily.com/wp-content/uploads/edd/2021/08/Free-Creative-Abstract-Logo-Design-Template-scaled.jpg" className='logo' width={"120px"} height={"100px"} />
        </h1>
        {/* logo</h1> */}
<div className="navlinks">     
         
   {/* this is 1st div */}
    {/* import Navlink fromm react-router-dom */}
      <NavLink to = {"/"}> Home</NavLink>   
        <NavLink to = {"/about"}> About</NavLink>
        <NavLink to = {"/contact"}> Contact</NavLink>
        <NavLink to = {"/store"}> Store</NavLink>
        <NavLink to = {"/usestate"}> UseState</NavLink>
        <NavLink to = {"/usestateimage"}> UseStateImage</NavLink>
        <NavLink to = {"/usestatepw"}> UseStatePW</NavLink>
        <NavLink to = {"/useeffect"}> UseEffect</NavLink>
    </div>
    </div>
  )
}

export default NavigationBar
