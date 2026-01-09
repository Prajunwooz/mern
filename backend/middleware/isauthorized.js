// import { verifyToken } from "../utils/jwt";

import { Usermodel } from "../schema/user.schema.js"

// export const isauthorized = async (req,res,next) => {
//     try {
//         const token=req.token; // we get token from isauthenticated middleware
//         const verifytoken=await verifyToken(token);
//         if(verifytoken.role !== "admin"){
//              res.status(403).json({
//                 message:"you are not authorized to access this resource"
//             })
//         }
//         next();
//     }
//         catch (error) {
//         res.status(400).json({
//             message: "problem in authorization"})}
//         }

// export const isauthorized = async (req,res,next) => {
//     return async(req,res,next)=>{
//     try {
//       const id=req.id; // we get id from isauthenticated middleware
//       const user = await Usermodel.findById(req.id); // req.id is set in isauthenticated
//         if(user.role !== "admin"){
//             return res.status(403).json({
//                 message:"you are not authorized to access this resource"
//             })
//         }}
//         catch (error) {
//         return res.status(400).json({
//             message: "problem in authorization",
//             error: error.message
//         })}}}

// export const isauthorized=(role)=>{
//     return async(req,res,next)=>{
//     try {
//       const id=req.id; // we get id from isauthenticated middleware
//       const user = await Usermodel.findById(req.id); // 
//         if(!role.includes(user.role)){
//             return res.status(403).json({
//                 message:"you are not authorized to access this resource"
//             })
//         }
//         next();
//         }
//         catch (error) {
//         return res.status(400).json({
//             message: "problem in authorization",
//             error: error.message
//         })}}}
export const isauthorized=async(req,res,next)=>{
    try {
      const id=req.id; // we get id from isauthenticated middleware
      const user = await Usermodel.findById(id); // 
        if(user.role !== "admin"){ ///===check value and datatype
            return res.status(403).json({
                message:"you are not authorized to access this resource"
            })
        }
        else{
        next();
        }
        }
        catch (error) {
        return res.status(400).json({
            message: "problem in authorization",
            error: error.message
        })}}

        //RBAC-role based access control

        export const isauthorizedRBAC=(roles)=>{
            return async(req,res,next)=>{
            try {
              const id=req.id; // we get id from isauthenticated middleware
              const user = await Usermodel.findById(id); // 
                if(!roles.includes(user.role)){ //user.role is what is stored in database
                    return res.status(403).json({   
                        message:"you are not authorized to access this resource"
                    })
                }
                else{
                    next();
                }
                }
                catch (error) {
                return res.status(400).json({
                    message: "problem in authorization",
                    error: error.message
                })}}}