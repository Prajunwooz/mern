import React from 'react';
import{ Routes,  Route, Outlet, useNavigate } from 'react-router-dom'
import NavigationBar from '../components/NavigationBar';
import Contact from '../components/contact';
import About from '../components/ABOUT';
import Store from '../compenents/store';
import UseState from '../components/UseState';
import UseStateImage from '../components/UseStateImage';
import UseStatePw from '../components/UseStatePw';
import UseEffect from '../components/UseEffect';
import DynamicRoute from '../components/DynamicRoute';
import InputType from '../components/InputType';
import Register from '../components/Register';
import Login from '../components/login'
import Drashboard from '../components/Drashboard';  

import ResetPassword from '../components/ResetPassword';
import ForgetPassword from '../components/ForgetPassword';
import UpadeProfiile from '../components/UpadeProfiile';
import ForgotPassword from '../components/ForgetPassword';
const MainRoutes = () => {
  const Navigate=useNavigate()
  //localstorage store data permanently but session storage store data till tab is open
  //nested routes means routes inside routes outlet is used for nested routingparent route
  return (
    <div> 
      
      <NavigationBar></NavigationBar>
      <Routes> 

        <Route  path="/" element={ <div> Home Page from homepage </div> } ></Route>
        <Route path ="/about" element={ <About productname="laptop" price="50000"></About>}  > </Route>
        {/* we are passing props from MainRoutes to ABOUT component */}
        <Route path="/contact" element ={<Outlet></Outlet>}>
          <Route index element ={<Contact></Contact>}></Route>
          <Route path="name" element ={<InputType></InputType>}></Route>
        </Route>
        <Route path="/store" element ={<Store></Store>}></Route>
        <Route path="/usestate" element ={<UseState></UseState>}></Route>
        <Route path="/usestateimage" element ={<UseStateImage></UseStateImage>}></Route>
        <Route path="/usestatepw" element ={<UseStatePw></UseStatePw>}></Route>
        <Route path="/useeffect/:id" element ={<UseEffect></UseEffect>}></Route>
        <Route path="/InputType" element ={<InputType></InputType>}></Route>
        <Route path="/register" element ={<Register></Register>}></Route>
        <Route path="/login"  element ={<Login></Login>}></Route>
        <Route path="/dashboard" element ={<Drashboard></Drashboard>}></Route>  
        <Route path="/forgotpassword" element ={<ForgotPassword></ForgotPassword>}></Route>
        <Route path="/user/resetpassword" element ={<ResetPassword></ResetPassword>}></Route>
        <Route path="/Dashboard/UpdateProfile" element ={<UpadeProfiile></UpadeProfiile>}></Route>
        {/* qwery add garnu pardainna reset password ma link ma aako jastoo */}
        <Route path="/Dashboard" element={<Outlet></Outlet>}> 
        <Route index element ={<Drashboard></Drashboard>}></Route>
        <Route path="updateProfile" element ={<UpadeProfiile></UpadeProfiile>}></Route>
        <Route path ="*" element ={<DynamicRoute></DynamicRoute>}></Route>
        
         </Route>
      </Routes>
    </div>
  )
}

export default MainRoutes
