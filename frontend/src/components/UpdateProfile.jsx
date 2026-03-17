// import axios from 'axios'
// import { useState } from 'react'

// import { useNavigate } from 'react-router-dom'

// const UpadeProfiile = () => {
//     const[Email,SetEmail]=useState("")
//     const[UserName,SetUserName]=useState("")
//     const Navigate=useNavigate()
//     const HandleUpdate= async(e)=>{
//         e.preventDefault();
//         const token=localStorage.getItem("token")
//         try {
//             const response= await axios({
//                 url:"http://localhost:8080/user/update",
//                 method:"PATCH",
//                 headers:{
//                     Authorization:`Bearer ${token}` //we send token in header to verify userweather the user is logged in or not to update the profile
//                 },
//                 data:{ 
//                     name:UserName,
//                     email:Email
                   
//                 }
//             });
//             console.log(response)
//             alert("Profile Updated Successfully")
//             Navigate("/dashboard")
//         }
//         catch (error) {
//             console.log(error.message)
//         }
//   return (
//     <div>
//         <form onSubmit={HandleUpdate}>
//         <input type="text" placeholder='Enter Name' value={UserName} onChange={(e)=>SetUserName(e.target.value)} />
//         <br/>

//         <input type="email" placeholder='Enter Email' value={Email} onChange={(e)=>SetEmail(e.target.value)} />
//         <br/>
//         <button type='submit'>Update Profile</button>
//         </form>

//     </div>
//   )
// }


// }

// export default UpadeProfiile

import axios from "axios";
import React, { useState } from "react";
import "../App.css";

const UpdateProfile = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");

  const [Error, setError] = useState("");

  const handleUpdateProfile = async e => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    console.log(token);

    try {
      const response = await axios.patch(
        "http://localhost:8080/user/update",
        {
          email: email,
          username: userName,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setEmail("");
      setUserName("");
      setError(response.data.message);

      console.log(response.data);
      alert(response.data.message);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="update-profile">
      <h1>Update Profile </h1>
      <form onSubmit={handleUpdateProfile}>
        <input
          type="text"
          value={userName}
          onChange={e => {
            setUserName(e.target.value);
          }}
          placeholder="Enter your username"
        />

        <input
          type="email"
          value={email}
          onChange={e => {
            setEmail(e.target.value);
          }}
          placeholder="Enter your email"
        />

        <button type="submit">Update Profile</button>
      </form>

      <p>
        Your new username is{" "}
        <span style={{ fontWeight: "bold" }}> {userName}</span> and your updated
        email is <span style={{ fontWeight: "bold" }}>{email}</span>
      </p>
    </div>
  );
};

export default UpdateProfile;