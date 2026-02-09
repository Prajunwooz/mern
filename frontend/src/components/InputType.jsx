import React from 'react'

const InputType = () => {
  return (
    <div>
        <input type="text" placeholder='this is a text'/>
        <br/>
        <input type="password" placeholder='this is a password'/>
        <br/>
        <input type="email" placeholder='this is a email'/>
        <br/>
        <input type="number" placeholder='this is a number'/>
        <br/>
        <input type="radio" name="gender" value="male"/>
        <input type="radio" name="gender" value="female"/>
        <br/>
        <input type="checkbox" name="vehicle1" value="Bike"/> I have a bike
        <input type="checkbox" name="vehicle2" value="Car"/> I have a car
        <br/>
        <input type="button" value="Click Me"/>
        <input type="submit" value="Submit"/>
        
    </div>
  )
}

export default InputType