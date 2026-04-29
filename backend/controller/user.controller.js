

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
            id:result._id,
            role:result.role
        },
        expiresIn:"1h"}) //1h means 1 hour expire time
        console.log(token)
        sendMail({
            email:result.email,
        subject:"thanks for registration i am prajun",// we add /verify route to verify user
        // html:`<h1> hello ${result.username},</h1>
        // </br>
        // <p> thanks for registering with us </p>
        // <a href=http://localhost:8080/user/verify?token=${token}> 
        // <button> verify your email</button>
        // </a>`
        html: `
<div style="
  margin:0;
  padding:0;
  background-color:#f4f6f8;
  font-family: Arial, Helvetica, sans-serif;
">
  <table align="center" width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;">
    <tr>
      <td align="center">
        <table width="500" cellpadding="0" cellspacing="0" style="
          background:#ffffff;
          border-radius:10px;
          padding:40px;
          box-shadow:0 4px 12px rgba(0,0,0,0.08);
        ">
          
          <tr>
            <td align="center" style="padding-bottom:20px;">
              <h1 style="
                margin:0;
                font-size:24px;
                color:#333333;
              ">
                Welcome, ${result.username}! 🎉
              </h1>
            </td>
          </tr>

          <tr>
            <td align="center" style="padding-bottom:30px;">
              <p style="
                font-size:16px;
                color:#555555;
                line-height:1.6;
                margin:0;
              ">
                Thanks for registering with us.  
                Please confirm your email address to activate your account.
              </p>
            </td>
          </tr>

          <tr>
            <td align="center" style="padding-bottom:30px;">
              <a href="http://localhost:8080/user/verify?token=${token}"
                 style="
                  display:inline-block;
                  padding:14px 28px;
                  font-size:16px;
                  font-weight:bold;
                  color:#ffffff;
                  text-decoration:none;
                  border-radius:6px;
                  background: linear-gradient(135deg, #4f46e5, #7c3aed);
                 ">
                Verify Email
              </a>
            </td>
          </tr>

          <tr>
            <td align="center">
              <p style="
                font-size:13px;
                color:#999999;
                margin:0;
                line-height:1.5;
              ">
                If you didn’t create an account, you can safely ignore this email.
              </p>
            </td>
          </tr>

        </table>

        <p style="
          font-size:12px;
          color:#aaaaaa;
          margin-top:20px;
        ">
          © ${new Date().getFullYear()} Your Company. All rights reserved.
        </p>

      </td>
    </tr>
  </table>
</div>
`
    })

    //sendMail(result.email)
    //call the sendmail function after user created
        //he result.email is passed to sendmail function to send mail to the user who just created account
        // weuse result instead of data because mail is send after user creaate successfully
// agrument send value to parameter to run the function
        res.status(201).json({
            message:"sucessfully created please verify your email",
            result:result ,
            token:token  
        })


    }
    catch (error){
res.status(400).json({
    message:"problem in creating user",
    error:error.message
})
    }
}

export const verifyuserController=async(req,res)=>{  //this is send in email button link
    try{  
        let token=req.query.token //we have to write http://localhost:8080/user/verify?token=..... in the browser to verify user
      console.log(token)
        let verify=await verifyToken(token) //vefify token means
        console.log(verify)
        let id=verify.id 
        console.log(id)
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
                message:"invalid crenditials"
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
        id:email._id,
        role:email.role
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
            data:email,
            token:token,
            
        })
    }
    catch(error){
        res.status(400).json({
            message:"problem in login",
            error:error.message
        }) } }





export const  forgetpasswordController=async(req,res)=>{
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
        console.log(token)
        
        
        const result=await sendMail({
            // earlier link was http://localhost:8080/user/resetpassword?token=${token} but we change port bcs frontend ma reset password gareko ho
            // <NavLink to = {"/user/resetpassword"}> ResetPassword</NavLink> we dont put token in frontend route
            email:isvalidemail.email,
            subject:"forget password", 
           html: `
<div style="
  margin:0;
  padding:0;
  background-color:#f4f6f8;
  font-family: Arial, Helvetica, sans-serif;
">
  <table align="center" width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;">
    <tr>
      <td align="center">
        <table width="500" cellpadding="0" cellspacing="0" style="
          background:#ffffff;
          border-radius:10px;
          padding:40px;
          box-shadow:0 4px 12px rgba(0,0,0,0.08);
        ">

          <tr>
            <td align="center" style="padding-bottom:20px;">
              <h1 style="
                margin:0;
                font-size:22px;
                color:#333333;
              ">
                Reset Your Password 🔐
              </h1>
            </td>
          </tr>

          <tr>
            <td align="center" style="padding-bottom:30px;">
              <p style="
                font-size:16px;
                color:#555555;
                line-height:1.6;
                margin:0;
              ">
                We received a request to reset your password.  
                Click the button below to set a new password.
              </p>
            </td>
          </tr>

          <tr>
            <td align="center" style="padding-bottom:30px;">
              <a href="http://localhost:5173/user/resetpassword?token=${token}"
                 style="
                  display:inline-block;
                  padding:14px 28px;
                  font-size:16px;
                  font-weight:bold;
                  color:#ffffff;
                  text-decoration:none;
                  border-radius:6px;
                  background-color:#ef4444;
                 ">
                Reset Password
              </a>
            </td>
          </tr>

          <tr>
            <td align="center">
              <p style="
                font-size:13px;
                color:#999999;
                margin:0;
                line-height:1.5;
              ">
                If you didn’t request a password reset, you can safely ignore this email.  
                This link will expire for security reasons.
              </p>
            </td>
          </tr>

        </table>

        <p style="
          font-size:12px;
          color:#aaaaaa;
          margin-top:20px;
        ">
          © ${new Date().getFullYear()} Your Company. All rights reserved.
        </p>

      </td>
    </tr>
  </table>
</div>
`
        })
            res.status(200).json({
                message:"mail sent sucessfully", 
                result:result
            })
    }
    catch(error){
        res.status(400).json({
            message:"problem in forget password session",
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
export const updateUserController=async(req,res)=>{
    try{
        const data = req.body
        delete data.password; // which delete password if user wamt to update other detail except password
        const id =  req.id//req.params.id //id comes from isauthenciated
console.log(id)
        const result =await Usermodel.findByIdAndUpdate(id , data, {new:true})
        res.status(200).json({
            message:"user updated sucessfully",
            result:result
        })
    }   
    catch(error){
        res.status(400).json({
            message:"problem in updating user", 
            error:error.message
        })
    }}
    