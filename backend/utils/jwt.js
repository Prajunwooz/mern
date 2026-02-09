
import { SECRET_KEY } from "../config/env.js"
console.log("SECRET_KEY in jwt.js",SECRET_KEY)
//dotenv.config({path:"../.env"});
import jwt from "jsonwebtoken";
import path from "path";

// export const generateToken = async()=>{
//     let infroObject={
//         email:"puriprajun@gmail.com",
//         message:"hello"//secret is used to sign and verify token
//     }
//     const result =await jwt.sign(infroObject,SECRET_KEY,{
//         expiresIn:"2h"
//     })
// console.log(result)
// }
// generateToken();//Token store infrobject and secret key and expire time

// export const verifyToken=async()=>{
//     const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InB1cmlwcmFqdW5AZ21haWwuY29tIiwibWVzc2FnZSI6ImhlbGxvIiwiaWF0IjoxNzY1NTQyNzUzLCJleHAiOjE3NjU1NDk5NTN9.YFpciqxzBXKQgVQ3S-KZtATOJ557yLrpsX9rI--m9DQ"
//     const result=await jwt.verify(token,SECRET_KEY) //method verify means check token is valid or not
//     console.log(result)
// }
// verifyToken();
export const generateToken = async({payload,expiresIn})=>{ 

    const SECRET_KEY = "hello123"
   
    const result =await jwt.sign(payload,SECRET_KEY,{
        expiresIn:expiresIn
    })
    console.log("SECRET_KEY",SECRET_KEY)  
return result
}
// ~

 export const verifyToken=async(token)=>{
    const SECRET_KEY = "hello123"
    const result=await jwt.verify(token,SECRET_KEY)
    return result
}