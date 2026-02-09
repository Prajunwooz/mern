// import axios from 'axios';
// import { useState } from 'react';
// import { Form } from 'react-router-dom'

// const ForgetPassword = () => {
//     const [Email, SetEmail] = useState('');
//     const HandleForgetPassword = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios({
//                 url: "http://localhost:8080/user/forgotpassword",
//                 method: "POST", 
//                 data: {
//                     email: Email
//                 }
//             })
//             console.log(response.data);
//             alert("Password reset link sent to your email");
//         } catch (error) {
//             console.log("Error during password reset:", error.message);
//         }
//   return (
//     <div>
//         <form onSubmit={HandleForgetPassword}>
//             <input type="email" placeholder="Enter your email for password reset" required  value={Email} onChange={(e) => SetEmail(e.target.value)} />
//             <button type="submit">Submit</button>
//         </form>
//     </div>
//   )
// }
// }

// export default ForgetPassword;

import React, { useState } from "react";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const handleForgotPassword = async e => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/user/forgot-password",
        {
          email: email,
        },
      );

      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <form onSubmit={handleForgotPassword}>
        <input
          type="text"
          value={email}
          onChange={e => {
            setEmail(e.target.value);
          }}
          required
          placeholder="enter your email"
        />
        <button type="submit">send reset link</button>
      </form>
    </div>
  );
};

export default ForgotPassword;