import mongoose from "mongoose";
  
const userSchema= mongoose.Schema( {//chamel case (userSchema) //schema method
    name:{
        type:String,
        required:true,  // name is schema field,type is valuation String and it is required
    },  

    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,  
    },
    age:{
        type:Number,
        required:false, //it is not necessary to fill age
    }
});
 const User= mongoose.model("User",userSchema); 
 //User is collection name in database 
 //model method