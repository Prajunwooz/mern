import React from 'react';
import{ Routes,  Route } from 'react-router-dom'
import NavigationBar from '../components/NavigationBar';
import Contact from '../components/contact';
import About from '../components/ABOUT';
import Store from '../compenents/store';
import UseState from '../components/UseState';
import UseStateImage from '../components/UseStateImage';
import UseStatePw from '../components/UseStatePw';
import UseEffect from '../components/UseEffect';

const MainRoutes = () => {
  return (
    <div> 
      
      <NavigationBar></NavigationBar>
      <Routes> 

        <Route  path="/" element={ <div> Home Page from homepage </div> } ></Route>
        <Route path ="/about" element={ <About productname="laptop" price="50000"></About>}  > </Route>
        {/* we are passing props from MainRoutes to ABOUT component */}
        <Route path="/contact" element={<Contact></Contact> } > </Route>
        <Route path="/store" element ={<Store></Store>}></Route>
        <Route path="/usestate" element ={<UseState></UseState>}></Route>
        <Route path="/usestateimage" element ={<UseStateImage></UseStateImage>}></Route>
        <Route path="/usestatepw" element ={<UseStatePw></UseStatePw>}></Route>
        <Route path="/useeffect" element ={<UseEffect></UseEffect>}></Route>

      </Routes>
    </div>
  )
}

export default MainRoutes
