import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Drashboard = () => {
  const Navigate=useNavigate()
  useEffect(()=>{
    const token=localStorage.getItem("token")
    if(!token){
      Navigate("/login",{replace:true})
    }
  },[Navigate])//we write navigate in  array to do navigate work 1st
  return (
    <div>
<button onClick={()=>{ Navigate("/dashboard/UpdateProfile")}}>Update Profile</button>
   {/* here update profile is the chind route */}
<button onClick={()=>{ Navigate("/dashboard/ProductCreate")}}>Create Product</button>
<button onClick={()=>{ Navigate("/dashboard/UpdateProduct")}}>Update Product</button>
<button onClick={()=>{ Navigate("/dashboard/GetProduct")}}>Get Product</button>
    </div>
  )
}

export default Drashboard