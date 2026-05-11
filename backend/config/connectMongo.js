import mongoose from "mongoose"
import { MONGODB_URL } from "./env.js"

  //config is path  location
// dotenv.config({path:"../.env"});
export const connectDB = async() => {
// console.log(process.env.SECRET_KEY)
    try {
        const result = await mongoose.connect(MONGODB_URL) //we can also write url directly but we use env package to we should import it;
        console.log( MONGODB_URL)
{result ? console.log("Mongo DB connected ") :console.log ("Mongo DB is not connected")}
    } catch (error) {
        console.log(error.message)
        process.exit() //to stop process
    }
} 