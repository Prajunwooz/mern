import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import "../App.css"

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
    <div >
      {/* <div className='logo' >
        <img src="https://www.creativefabrica.com/wp-content/uploads/2021/11/17/letter-S-logo-design-vector-template-Graphics-20313550-1.jpg" className='logo' width={"120px"} height={"100px"} display ="center" 
        padding="center"/>
      </div> */}
     
        {/* logo</h1> */}
<div className="navlinks">     
         
   {/* this is 1st div */}
    {/* import Navlink fromm react-router-dom */}
      <img src="https://www.pngall.com/wp-content/uploads/14/Nike-Swoosh-PNG-Image-File.png" className='logo' width={"120px"} height={"100px"} display ="center" 
        padding="center"/>
      <NavLink to = {"/"}> Home</NavLink>   
        <NavLink to = {"/about"}> About</NavLink>
        <NavLink to = {"/contact"}> Contact</NavLink>
        <NavLink to = {"/usestate"}> UseState</NavLink>
        <NavLink to = {"/usestateimage"}> UseStateImage</NavLink>
        <NavLink to = {"/usestatepw"}> UseStatePW</NavLink>
        <NavLink to = {"/useeffect"}> UseEffect</NavLink>
        <NavLink to = {"/InputType"}> InputType</NavLink>
        <NavLink to = {"/store"}> Store</NavLink>
        {/* <NavLink to = {"/register"}> Register</NavLink>
        <NavLink to = {"/login"}> Login</NavLink> */}
        <NavLink to = {"/forgotpassword"}> ForgetPassword</NavLink>
        <NavLink to = {"/user/resetpassword"}> ResetPassword</NavLink>
        {/* <NavLink to = {"/Dashboard"}> Dashboard</NavLink> */}
        {/* <NavLink to = {"/updateProfile"}> UpdateProfile</NavLink> */}
        {Token ?(<><NavLink to = {"/Dashboard"} className={"navlink"}> Dashboard</NavLink>
        <button className='logout buttom' onClick={HandleResponse}>Log Out</button>  </>)
        : (<><NavLink to = {"/register"}> Register</NavLink>
        <NavLink to = {"/login"}> Login</NavLink></>
      )}
    </div>
    </div>
  )
}


export default NavigationBar
