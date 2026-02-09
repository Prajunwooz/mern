import mongoose from "mongoose"
import dotenv from "dotenv";
  //config is path  location
// dotenv.config({path:"../.env"});
export const connectDB = async() => {
// console.log(process.env.SECRET_KEY)
    try {
        const result = await mongoose.connect(process.env.MONGODB_URL|| "mongodb://localhost:27017/e-commerce") //we can also write url directly but we use env package to we should import it;
        console.log(process.env.MONGODB_URL || "mongodb://localhost:27017/e-commerce")
{result ? console.log("Mongo DB connected ") :console.log ("Mongo DB is not connected")}
    } catch (error) {
        console.log(error.message)
        process.exit() //to stop process
    }
} 