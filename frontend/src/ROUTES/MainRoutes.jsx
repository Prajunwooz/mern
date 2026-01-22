import React from 'react';
import{ Routes,  Route } from 'react-router-dom'
import NavigationBar from '../components/NavigationBar';
import Contact from '../components/contact';
import About from '../components/ABOUT';
import Store from '../compenents/store';

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
        
      </Routes>
    </div>
  )
}

export default MainRoutes
