

import bcrypt from "bcryptjs"
import { Usermodel } from "../schema/user.schema.js"
import { hashpassword } from "../utils/bcrypt.js"
import { generateToken, verifyToken } from "../utils/jwt.js"
import { sendMail } from "../utils/nodemailer.js"

export const userController=async(req,res)=>{
    try{
        let data=req.body
        data={...data,password:await hashpassword(data.password)}//
        //we called the function here hashpassword is imported

        const result= await Usermodel.create(data)
        const token=await generateToken({
            payload:{
            email:result.email,
            id:result._id
        },
        expiresIn:"1h"}) //1h means 1 hour expire time
        console.log(token)
        sendMail({
            email:result.email,
        subject:"thanks for registration",// we add /verify route to verify user
        html:`<h1> hello ${result.username},</h1>
        </br>
        <p> thanks for registering with us </p>
        <a href=http://localhost:8080/user/verify?token=${token}> 
        <button> verify your email</button>
        </a>`
    })

    //sendMail(result.email)
    //call the sendmail function after user created
        //he result.email is passed to sendmail function to send mail to the user who just created account
        // weuse result instead of data because mail is send after user creaate successfully
// agrument send value to parameter to run the function
        res.status(201).json({
            message:"sucessfully created"
        })


    }
    catch (error){
res.status(400).json({
    message:"problem in created",
    error:error.message
})
    }
}

export const verifyuserController=async(req,res)=>{  //this is send in email button link
    try{  
        let token=req.query.token //we have to write http://localhost:8080/user/verify?token=..... in the browser to verify user
        let verify=await verifyToken(token) //vefify token means
        console.log(verify)
        let id=verify.id 
        const result=await Usermodel.findByIdAndUpdate(id,{isVarified:true}, {new:true})    
        console.log(verify)
        res.status(200).json({
            message:"user verified"
        })
    }
    catch(error){
        res.status(400).json({
            message:"problem in verification",
            error:error.message
        })
    }
}

 export const LoginuserController=async(req,res)=>{
    try{
        const email=await Usermodel.findOne({email:req.body.email})
       /// console.log(email),this brought the whole user document
       ///console.log(email.email) this brought only email from document
        if(!email){
            return res.status(400).json({
                message:"invalid email"
            })
        }
        if(!email.isVarified){ //isVarified is from user.schema.js ,eamil brings isVarified value from database
            return res.status(400).json({
                message:"please verify your email"
            })
        }
// json use rest api data to request and response 

     const password=await bcrypt.compare(req.body.password,email.password)
     
     const token=await generateToken({//we generate token how long user id login in 1st login
        payload:{                    
        email:email.email,
        id:email._id
        },
        expiresIn:"1h"
    })
        if(!password){
             res.status(400).json({
                message:"invalid password"
            })
        }   
        res.status(200).json({
            message:"login sucessfully", 
            token:token
        })
    }
    catch(error){
        res.status(400).json({
            message:"problem in login",}) } }





export const forgetpasswordController=async(req,res)=>{
    try{
        let iemail=req.body.email 
        const isvalidemail=await Usermodel.findOne({email:iemail})//wheather email is valid or not
        if(!isvalidemail){
            return res.status(400).json({
                message:"invalid email"
            })
        }
        const token=await generateToken({
            payload:{
                id:isvalidemail._id,
            email:isvalidemail.email,
            reason:"forget password",
            },
            expiresIn:"30days" //15m means 15 minutes expire time
        }) 
        
        
        
        const result=await sendMail({
            email:isvalidemail.email,
            subject:"forget password", 
            html:`<h1> hello ,</h1>
            </br>
            <p> click on the below link to reset your password </p> 
            <a href=http://localhost:8080/user/resetpassword?token=${token}> 
            <button> reset your password</button>
            </a>`
        })
            res.status(200).json({
                message:"mail sent sucessfully", 
                result:result
            })
    }
    catch(error){
        res.status(400).json({
            message:"problem in forget password",
            error:error.message
        })
    }
}

 export  const verifyResetPassword=async(req,res)=>{
    try{
    const token=req.query.token
    let isVerify=await verifyToken(token) 
    const id=isVerify.id
    if(isVerify.reason!="forget password"){
        return res.status(400).json({
            message:"invalid token for reset password"
        })
    }
    else{ //we use else bcs if token is valid then only password will reset   
    const hashedpassword=await hashpassword(req.body.password)
    const result=await Usermodel.findByIdAndUpdate(id,{password:hashedpassword}, {new:true})
    console.log(result)
    res.status(200).json({
        message:"password reset sucessfully",
        data:result  })
    }
    }
    catch(error){
        res.status(400).json({
            message:"problem in verification",
            error:error.message
        })
    }
}
co