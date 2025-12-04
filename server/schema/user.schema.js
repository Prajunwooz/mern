import mongoose from "mongoose";    

// schema for sign up new id

const userschema=new mongoose.Schema({ //we working in database so we use mongoose
    name:{  //valuation                         //.schema is schema method
        type:String,    
        required:true,
    },
    email:{     
        type:String,    
        required:[true,"email must be send"],// we use array to give unique response
    unique:[true,"email must be unique"], //unique means same email cannot   be used
        
    },
    password:{     
        type:String,  //string means collection of aplhanumeric characters
        required:true,
    },
        gender:{     
        type:String,    
        required:false,}
});

export const User=mongoose.model("User",userschema); //it creates a model named User
//we export it to use in other files like controller
//User is the collection name in mongodb database
//userschema is schema created above
