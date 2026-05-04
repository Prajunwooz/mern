import React from 'react';
import{ Routes,  Route, Outlet, useNavigate } from 'react-router-dom'
import NavigationBar from '../components/NavigationBar';
import Contact from '../components/contact';

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
import ForgotPassword from '../components/ForgetPassword';
import UpdateProfile from '../components/UpdateProfile';
import ProductCreate from '../components/ProductCreate';
import GetProduct from '../components/GetProduct';
import UpdateProduct from '../components/updateProduct';
import Store from '../components/store';
import Home from '../components/home.jsx';
import About from '../components/About';
import Order from '../components/order';
const MainRoutes = () => {
  const Navigate=useNavigate()
  //localstorage store data permanently but session storage store data till tab is open
  //nested routes means routes inside routes outlet is used for nested routingparent route
  return (
    <div> 
      
      <NavigationBar></NavigationBar>
      <Routes> 

        {/* <Route  path="/" element={<div>this is home page</div> } ></Route> */}
        <Route  path="/" element={<Home></Home> } ></Route>
        <Route path ="/about" element={ <About productname="laptop" price="50000"></About>}  > </Route>
        {/* we are passing props from MainRoutes to ABOUT component */}
        <Route path="/contact" element ={<Outlet></Outlet>}>
          <Route index element ={<Contact></Contact>}></Route>
          <Route path="name" element ={<InputType></InputType>}></Route>
        </Route>
        <Route path="*" element ={<DynamicRoute></DynamicRoute>}></Route>
        <Route path="/usestate" element ={<UseState></UseState>}></Route>
        <Route path="/usestateimage" element ={<UseStateImage></UseStateImage>}></Route>
        <Route path="/usestatepw" element ={<UseStatePw></UseStatePw>}></Route>
        <Route path="/useeffect/:id" element ={<UseEffect></UseEffect>}></Route>
        <Route path="/InputType" element ={<InputType></InputType>}></Route>
        <Route path="/store" element ={<Store></Store>}></Route>
        <Route path="/order/:id" element ={<Order/>}></Route>
        <Route path="/register" element ={<Register></Register>}></Route>
        <Route path="/login"  element ={<Login></Login>}></Route>
        {/* <Route path="/dashboard" element ={<Drashboard></Drashboard>}></Route>   */}
        <Route path="/forgotpassword" element ={<ForgotPassword></ForgotPassword>}></Route>
        <Route path="/user/resetpassword" element ={<ResetPassword></ResetPassword>}></Route>
                {/* qwery add garnu pardainna reset password ma link ma aako jastoo */}
        {/* <Route path="/Dashboard/UpdateProfile" element ={<UpdateProfile></UpdateProfile>}></Route> */}
                  <Route path="/dashboard" element={<Outlet />}>
            <Route index element={<Drashboard />}></Route>
            <Route path="UpdateProfile" element={<UpdateProfile />}></Route>
            <Route path="ProductCreate" element={<ProductCreate />}></Route>
            <Route path="UpdateProduct/:id" element={<UpdateProduct/>}></Route>  
            <Route path="GetProduct" element={<GetProduct />}></Route>
            <Route path="Store" element={<Store  />}></Route>
          </Route>

        
      </Routes>
    </div>
  )
}

export default MainRoutes
