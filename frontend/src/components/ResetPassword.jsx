// import axios from 'axios';
// import React from 'react'
// import { useSearchParams } from 'react-router-dom';

// const ResetPassword = () => {
//     const [newPassword, setNewPassword] = React.useState('');
//     const [confirmPassword, setConfirmPassword] = React.useState('');
//     const Navigate=useSearchParams();
//     const SearchParams= useSearchParams();
//     const Token=SearchParams.get("token"); //token lai backend ma pathaune it taken chai url ma aako ho tya bata liney

    

//     const HandleResetPassword = async () => {
//       try {
//         const response = await axios({
//           url: `http://localhost:8080/user/resetpassword?token=${Token}`,
//           method: 'POST',
//           data: {
            
//             newPassword: newPassword,
//             confirmPassword: confirmPassword
//           }
//         });
//         console.log('Password reset successful:', response.data);
//         alert("Password has been reset successfully");
//         Navigate("/login");

//       } catch (error) {
//         console.error("Error resetting password:", error);
//       }
//   return (
//     <div>
//         <form onSubmit={HandleResetPassword}>
//         <input type="password" placeholder='New Password' value={newPassword} onChange={(e) => setNewPassword(e.target.value)}/>
//         <br/>
//         <input type="password" placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
//         <br/>
//         <button type="submit">Reset Password</button>
//         </form>     
//     </div>
//   )
// }
// }

// export default ResetPassword

import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const ResetPassword = () => {
  const [password, setPassword] = useState("");

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const token = searchParams.get("token");
  console.log("this is our token", token);
  const handleResetPassword = async e => {
    e.preventDefault();

    try {
      const response = await axios.patch(`http://localhost:8080/user/resetpassword?token=${token}` ,
        {
          password: password,
        },
      );

      console.log(response);
      alert("Password reset succesfully.");
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <form onSubmit={handleResetPassword}>
        <input
          type="password"
          value={password}
          required
          placeholder="New password"
          onChange={e => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPassword;