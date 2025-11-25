import mongoose from "mongoose";
export const connectdatabase= async()=>{
    try {
                await mongoose.connect("mongodb://localhost:27017/")  
         //const result= await mongoose.connect("mongodb://localhost:27017/")  
         // wwe store mongoose.connect in result variable to check connection
         //console.log(result);  
          console.log("Connected to database successfully"); 
           //CONNECTING WITH MONGODB DATABASE //CONNECT METHOD
    }
    catch (error) {
        console.log("Error in connecting to database");  
    }
    
}
//connectdatabase(); //we have to call function running it