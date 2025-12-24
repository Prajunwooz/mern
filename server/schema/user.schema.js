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
        required:false,},

        // userInFor:{
        //     fullName:{
        //         type:"string",
        //         required:[true,"fullName must be given"]
        //     },
        //     email:{
        //    type:"string",
        //    required:[true,"email must be given"]
        //     },
        //     address:{
        //         type:"string",
        //         required:[true,"must given"]
        //     }

        // }

        //jwt act as role and athenticiation
        isverified:{
            type:Boolean,
            required:[true],
            default:fixed //
        },

        role:{
            type:"string",
            enum:["admin","user"],  //we use enum if there is many option (procesing .cancelled)
            default:"user"

        }
});

export const User=mongoose.model("User",userschema); //it creates a model named User
//we export it to use in other files like controller
//User is the collection name in mongodb database
//userschema is schema created above
