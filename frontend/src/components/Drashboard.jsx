// import React, { useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { jwtDecode } from "jwt-decode"
// import "../App.css"

// const Drashboard = () => {
//   const Navigate = useNavigate()

//   const token = localStorage.getItem("token")

//   useEffect(() => {
//     if (!token) {
//       Navigate("/login", { replace: true })
//     }
//   }, [Navigate, token])

//   // 🔹 extract role from token
//   let role = null
//   if (token) {
//     try {
//       const decoded = jwtDecode(token)
//       role = decoded.role || decoded.user?.role
//       console.log(decoded)
//       console.log(decoded.role)
//     } catch (error) {
//       console.log("Invalid token")
//     }
//   }

//   return (
//     <div className='dashboard'>

//       <img 
//         src="https://www.blendernation.com/wp-content/uploads/2020/03/image23.jpg"
//         alt="hero"
//       />

//       {/* 🔹 ADMIN ONLY (show everything) */}
//       {role === "admin" && (
//         <>
//           <button onClick={() => Navigate("/dashboard/UpdateProfile")}>
//             Update Profile
//           </button>

//           <button onClick={() => Navigate("/dashboard/ProductCreate")}>
//             Create Product
//           </button>

//           <button onClick={() => Navigate("/dashboard/UpdateProduct")}>
//             Update Product
//           </button>
//           <button onClick={() => Navigate("/dashboard/GetProduct")}>
//         Get Product
//       </button>
//         </>
//       )}

//       {/* 🔹 ALWAYS SHOW */}
//       <button onClick={() => Navigate("/dashboard/Store")}>
//         Product Store
//       </button>

//     </div>
//   )
// }

// export default Drashboard

// import React from 'react'
// import { useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
// import "../App.css"

// const Drashboard = () => {
//   const Navigate=useNavigate()
//   useEffect(()=>{
//     const token=localStorage.getItem("token")
//     if(!token){
//       Navigate("/login",{replace:true})
//     }
//   },[Navigate])//we write navigate in  array to do navigate work 1st
//   return (
//     <div className='dashboard'img src="https://www.blendernation.com/wp-content/uploads/2020/03/image23.jpg" alt="hero" >
// <button onClick={()=>{ Navigate("/dashboard/UpdateProfile")}}>Update Profile</button>
//    {/* here update profile is the chind route */}
// <button onClick={()=>{ Navigate("/dashboard/ProductCreate")}}>Create Product</button>
// {/* <button onClick={()=>{ Navigate("/dashboard/UpdateProduct")}}>Update Product</button> */}
// <button onClick={()=>{ Navigate("/dashboard/GetProduct")}}>Get Product</button>
// <button onClick={()=>{ Navigate("/dashboard/Store")}}>Product store</button>
//     </div>
//   )
// }

// export default Drashboard


import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { jwtDecode } from "jwt-decode"
import "../App.css"

const Drashboard = () => {
  const navigate = useNavigate()
  const [role, setRole] = useState(null)

  const token = localStorage.getItem("token")

  useEffect(() => {
    if (!token) {
      navigate("/login", { replace: true })
    } else {
      try {
        const decoded = jwtDecode(token)
        console.log("Decoded:", decoded)

        // ✅ clean role properly
        const extractedRole = decoded.role || decoded.user?.role
        const cleanRole = extractedRole?.trim().toLowerCase()

        console.log("Clean Role:", cleanRole)

        setRole(cleanRole)
      } catch (error) {
        console.log("Invalid token")
      }
    }
  }, [token, navigate])

  // optional loading state
  if (!role) {
    return <p>Loading...</p>
  }

  return (
    <div className='dashboard'>

      <img 
        src="https://www.blendernation.com/wp-content/uploads/2020/03/image23.jpg"
        alt="hero"
      />

      {/* 🔹 ADMIN ONLY */}
      {role === "admin" && (
        <>
          <button onClick={() => navigate("/dashboard/UpdateProfile")}>
            Update Profile
          </button>

          <button onClick={() => navigate("/dashboard/ProductCreate")}>
            Create Product
          </button>

          <button onClick={() => navigate("/dashboard/UpdateProduct")}>
            Update Product
          </button>

          <button onClick={() => navigate("/dashboard/GetProduct")}>
            Get Product
          </button>
        </>
      )}

      {/* 🔹 ALWAYS SHOW */}
      <button onClick={() => navigate("/dashboard/Store")}>
        Product Store
      </button>

    </div>
  )
}

export default Drashboard