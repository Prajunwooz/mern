import React from 'react';
import{ Routes,  Route } from 'react-router-dom'
import NavigationBar from '../components/NavigationBar';
import Contact from '../components/contact';

const MainRoutes = () => {
  return (
    <div> 
      <NavigationBar></NavigationBar>
      <Routes> 

        <Route  path="/" element={ <div> Home Page from homepage </div> } ></Route>
        <Route path ="/about" element={ <div> About Page from route </div> }  > </Route>
        <Route path="/contact" element={<Contact></Contact> } > </Route>
        
      </Routes>
    </div>
  )
}

export default MainRoutes
