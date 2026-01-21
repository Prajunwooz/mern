import mongoose from "mongoose"
import dotenv from "dotenv";
dotenv.config();  //config is path  location

export const connectDB = async() => {
console.log(process.env.SECRET_KEY)
    try {
        const result = await mongoose.connect(process.env.MONGODB_URL);
{result ? console.log("Mongo DB connected ") :console.log ("Mongo DB is not connected")}
    } catch (error) {
        console.log(error.message)
        process.exit() //to stop process
    }
} 