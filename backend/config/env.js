import dotenv from "dotenv";   //env means environment variables 
dotenv.config({path:"../.env"});  //config is path  location
export const MONGODB_URL=process.env.MONGOBD_URL  //we use env package to we should import it
 console.log(MONGODB_URL)    
 export const SECRET_KEY=process.env.SECRET_KEY
 console.log(SECRET_KEY)
 export const SMTP_EMAIL=process.env.SMTP_EMAIL
 export const SMTP_PASSWORD=process.env.SMTP_PASSWORD