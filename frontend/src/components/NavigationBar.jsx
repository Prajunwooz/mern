import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import "../../src/App.css"
import Store from '../compenents/store'

const NavigationBar = () => {
  const [LogOut,SetLogOUt]=useState(false)
  const Token=localStorage.getItem("token")
  const Navigate=useNavigate();

  const HandleResponse=()=>{
    
    localStorage.removeItem("token");
    SetLogOUt(true);
    alert("you have been logout")
    Navigate("/login")
    }
   
  
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
        <NavLink to = {"/InputType"}> InputType</NavLink>
        {/* <NavLink to = {"/register"}> Register</NavLink>
        <NavLink to = {"/login"}> Login</NavLink> */}
        <NavLink to = {"/forgotpassword"}> ForgetPassword</NavLink>
        <NavLink to = {"/user/resetpassword"}> ResetPassword</NavLink>
        {/* <NavLink to = {"/Dashboard"}> Dashboard</NavLink> */}
        {/* <NavLink to = {"/updateProfile"}> UpdateProfile</NavLink> */}
        {Token ?(<><NavLink to = {"/Dashboard"}> Dashboard</NavLink>
        <button onClick={HandleResponse}></button>  </>)
        : (<><NavLink to = {"/register"}> Register</NavLink>
        <NavLink to = {"/login"}> Login</NavLink></>
      )}
    </div>
    </div>
  )
}


export default NavigationBar
