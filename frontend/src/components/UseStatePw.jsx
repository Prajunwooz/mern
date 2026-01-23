import React, { useState } from 'react'

const UseStatePw = () => {
    // input type in html are text,password,email,number,button,submit,radio,checkbox etc

    const [value,SetPassword] = useState('password');
  return (
    <div>
        <input type={value}/>
        <button onClick={()=>{SetPassword('text')}}>show</button>
        <button onClick={()=>{SetPassword('password')}}>hide</button>
    </div>
  )
}

export default UseStatePw