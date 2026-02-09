// import axios from 'axios';
// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';

// const login = () => {
//     //useNavigate is used to navigate from one component to another programmatically
//             // const[Email,SetEmail]=useState("");
//             // const[Password,SetPassword]=useState("");
//             // const navigate=useNavigate();
// const [Email,SetEmail]=useState("");
// const [Password,SetPassword]=useState("");
// const navigate=useNavigate();
//     const Handlelogin= async(e)=>{
//         e.preventDefault();
//         try {
//             const response= await axios({
//                 url:"http://localhost:8080/user/login",
//                 method:"POST",
//                 data:{
//                     email:Email, //1st email chai backend ko data ho ani 2nd email chai frontend ko data ho
//                     password:Password
//                 }
//             })
//             console.log(response.data);
//             const token = response.data.token;//we take token from response data  of network
//             console.log(token)
//             const settoken= localStorage.setItem("token",token);
//             console.log("settoken",settoken)
//             alert("Login Successful");
//             navigate('/Dashboard');
            
//         } catch (error) {
//             console.log("Error during login:", error.message);
//         }   
//   return (
//     <div>
//         <form onSubmit={Handlelogin}>
//             <input type="email" placeholder="Email" value={Email} onChange={(e)=>SetEmail(e.target.value)} />
//             <input type="password" placeholder="Password" value={Password} onChange={(e)=>SetPassword(e.target.value)} />
//             <button type="submit">Login</button>
//             <a href="/ForgetPassword">Forget Password?</a>
//         </form>
//             <h2>Login Here</h2>


//     </div>
//   )
// }
// }
// export default login
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
//install react-dropzone /* means all type of image
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async e => {
    e.preventDefault();

    try {
    //   const response = await axios.post("http://localhost:8080/user/login", {
    //     email: email,
    //     password: password,
    const response= await axios({
                url:"http://localhost:8080/user/login",
                method:"POST",
                data:{
                    email:email, //1st email chai backend ko data ho ani 2nd email chai frontend ko data ho
                    password:password
                }
      });

      console.log(response);

      const token = response.data.token;//we take token from response data  of network~`
      console.log(token);

      const isToken = localStorage.setItem("token", token);
      alert("Login successful...");
   navigate("/dashboard");
      if (isToken) {
        navigate("/dashboard");
      } else {
        Error("failed to login");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="header">
      <form onSubmit={handleLogin}>
        <input
          type="email"
          value={email}
          placeholder="enter your email"
          required
          onChange={e => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="enter your password"
          value={password}
          required
          onChange={e => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <br />
        <button type="submit">Login</button>
        <br />
        <br />
        <a href="/forget-password">Forget Password?</a>
      </form>
    </div>
  );
};

export default Login;