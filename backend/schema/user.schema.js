import mongoose from "mongoose"

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:[true,"username has already been taken"]
    
    },

    email:{
        type:String,
        required:true,
        unique:[true,"email has already been registered"]
    },
    password:{
        type:String,
        required:true
    },

    role:{
    type:String,
     enum:["user","admin"],
     default:"user"
    },

   isVarified:{
    type:Boolean,
   default:false
    }
})

export const Usermodel= mongoose.model("Usermodel",userSchema)