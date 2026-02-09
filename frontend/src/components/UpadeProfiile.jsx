import axios from 'axios'
import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

const UpadeProfiile = () => {
    const[Email,SetEmail]=useState("")
    const[UserName,SetUserName]=useState("")
    const Navigate=useNavigate()
    const HandleUpdate= async(e)=>{
        e.preventDefault();
        const token=localStorage.getItem("token")
        try {
            const response= await axios({
                url:"http://localhost:8080/user/update",
                method:"PATCH",
                headers:{
                    Authorization:`Bearer ${token}` //we send token in header to verify userweather the user is logged in or not to update the profile
                },
                data:{ 
                    name:UserName,
                    email:Email
                   
                }
            });
            console.log(response)
            alert("Profile Updated Successfully")
            Navigate("/dashboard")
        }
        catch (error) {
            console.log(error.message)
        }
  return (
    <div>
        <form onSubmit={HandleUpdate}>
        <input type="text" placeholder='Enter Name' value={UserName} onChange={(e)=>SetUserName(e.target.value)} />
        <br/>

        <input type="email" placeholder='Enter Email' value={Email} onChange={(e)=>SetEmail(e.target.value)} />
        <br/>
        <button type='submit'>Update Profile</button>
        </form>

    </div>
  )
}


}

export default UpadeProfiile