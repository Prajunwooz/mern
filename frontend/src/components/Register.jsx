import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Register = () => {
    const [Username, SetUsername] = useState(''); //username ko value kei chainna('') ani form fill garda value aune setusername ma bascha
    const [Email, SetEmail] = useState('');
    const [Password, SetPassword] = useState('');
    const navigate=useNavigate();
    

     const HandleSubmit = async (e) => {
        e.preventDefault(); //it stops refreshing of page on submit
        try {
    const Response = await axios({ //install and import axios first
        url:"http://localhost:8080/user/create",
        method:"POST",
        data:{
            username: Username,
            email: Email,
            password: Password
        }
    })
    console.log(Response.data);
    SetUsername('');    
SetEmail('');    
SetPassword('');
 //after registration navigate to login page
 navigate('/login');

} catch (error) {
    console.log("Error during registration:", error.message);
}  
// SetUsername('');    
// SetEmail('');    
// SetPassword('');
//  //after registration navigate to login page
//  navigate('/login');

        }
  return (
    <div>
        <form onSubmit={HandleSubmit}>
            <h2>Register Here</h2>
            <label>Name:</label>
            <input type="text" onChange={(event) => SetUsername(event.target.value)} name="name" required />
            <br />
            <label>Email:</label>
            <input type="email" onChange={(event) => SetEmail(event.target.value)} name="email" required />
            <br />
            <label>Password:</label>
            <input type="password" onChange={(event) => SetPassword(event.target.value)} name="password" required />
            <br />
            <button type="submit" >Register</button>
        </form>
    </div>
  )
}

export default Register