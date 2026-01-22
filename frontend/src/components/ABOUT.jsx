import React from 'react'
// we use props to pass data from one component to another component
const About = ( props) => { 
  console.log("ABOUT component rendered");
  return (
    <div>
      {props.productname} is sold for Rs {props.price} in our store.
      
    </div>
  )
}

export default About