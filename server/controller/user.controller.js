import { userrouter } from "../router/user.route.js"
import { User } from "../schema/user.schema.js"
import bcrypt from   "bcryptjs"
import jwt from "jsonwebtoken"



// export const createUserController = async(req, res) => {
// try {

//     let data=req.body                //data from postman 
//     const result= await User.create(data) //create is controllermethod

//     res.status(201).json({       //responsing to client 2000 means ok 201 means created
//         message:"User created successfully",
//         data:result   //data can be declared again
//     })


// }
// catch (error){
//     res.status(500).json({       //500 means server error
//         message:"Error in creating user",
//         error:error.message
//     })
// }
//     //4000 means server error
//     //401 unauthorized
//     //403 forbidden
//     //404 not found

// }

export const getAllUsercontoller=async(req,res)=>{
    try{ 
        const result= await User.find()//find method is used for finding all data on database
res.status(200).json({
massage:"user fatched sucessfully",
data:result

})
    }   
    catch(error){ 
        res.status(500).json({
            massage:"error fatching users",
            error:error.message
        })

    }

}


//  export const loginUsercontroller= async(req,res)=>{
//     try{
//         let {email,password}=req.body
//     const isValidPassword= await User.findOne({email:email,password:password})

//     //we use uniquse email which is saved in database and we are doing login
//     //1st user from database 2nd from user
   
//     if(!isValidPassword){
//         res.status(404).json({
//             massage:"invalid credential"
//         })
//     }
//      res.status(200).json({
//         message:"login completed",
//          data:isValidPassword      //this is true case
//     })
// }
//     catch(error){ res.status(500).json({
//             massage:"error fatching users",
//             error:error.message
//         })

//      }
// }

// //bcrip
  


  export const specificusercontroller=async(req,res)=>{
    try{
        let idd=req.params.id // ( this id should be in route)
        const specific=  await User.findById(idd)
        res.status(201).json({
            message:"sucessfully got",
            data:specific
        })

    }
    catch(error){
        res.status(501).json({
            message:"not found",
            error:error.message
        })

    }
}


  export const  updateUserController=async(req,res)=>{
    try{
        let data=req.body
        const id= req.params.id
        const result= await User.findByIdAndUpdate(id,data,{new:true})
  res.status(201).json({
    message:"upgraded succeffully",
    data:result
  })
    }   
    catch(error){
         res.status(501).json({
            message:"not found",
            error:error.message
        })

    }
}


  export        const deleteUserController=(req,res)=>{
    try{
        let data=req.body
        const id=req.params.id;
        let result= User.findByIdAndDelete(id)
        res.status(201).json({
    message:"delected succeffully",
    data:result
  })

    }
    catch(error){
        res.status(501).json({
            message:"not deleted",
            error:error.message
        })

    }
}


export const createUserController = async(req, res) => {
try {

    let data=req.body          //npm install bcryptjs
    let hashpassword=await bcrypt.hash(data.password,10   ) //we need to import bcrypt and npm ibycryptjs
    console.log(hashpassword)
    data={
        ...data,password:hashpassword
}
//  console.log(hashpassword)
    const result= await User.create(data) 

    res.status(201).json({       //responsing to client 2000 means ok 201 means created
        message:"User created successfully",
        data:result   //data can be declared again
    })    
}

catch (error){
    res.status(500).json({       //500 means server error
        message:"Error in creating user",
        error:error.message
    })
}
}
    //4000 means server error
    //401 unauthorized
    //403 forbidden
    //404 not found



// export const loginUsercontroller= async(req,res)=>{
//     try{
//         let {email,password}=req.body
//     const result= await User.findOne({email:email})

//     //we use uniquse email which is saved in database and we are doing login
//     //1st user from database 2nd from user
   
//     if(!result){
//         res.status(404).json({
//             massage:"invalid email"
//         })
//     }
//     const isValidPassword= awaitbcrypt.compare(password,result.password)//1st passwaord user
//      res.status(200).json({
//         message:"login completed",
//          data:isValidPassword      //this is true case
//     })
// }
//     catch(error){ res.status(500).json({
//             massage:"error fatching users",
//             error:error.message
//         })

//      }
// }

  export const loginUsercontroller =async(req,res)=>{
    try{
        ///const email=res.body
        const result=await User.findOne({email:req.body.email })
     //now this result save all database
       if(!result)
        res.status(201).json({
            message:"invalid email"})
    ///const password=res.body
    const isValidPassword=await bcrypt.compare(req.body.password,result.password)
    if(!isValidPassword)
    {
        res.status(401).json({
            message:"invalid password"
        })
    }
let infoObj={     //npm install jsonswebtoken it has sign and verify method
id:result._id,
email:result.email
}
let secretkey="secret"

const token=jwt.sign(infoObj,secretkey,{expiresIn:"1h"}) //
console.log(token)



       res.status(201).json({
        message:"login sucessfully",
        result:result,
        token:token
    })
    }
    catch(error){
        res.status(500).json({       //500 means server error
        message:"Error in creating user",
        error:error.message
    })

    }

}



