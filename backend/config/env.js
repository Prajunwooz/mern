import dotenv from "dotenv";   //env means environment variables 
dotenv.config({path:"../.env"});  //config is path  location
export const MONGODB_URL=process.env.MONGODB_URL  //we use env package to we should import it
 console.log(MONGODB_URL)    
 export const SECRET_KEY=process.env.SECRET_KEY || "hello123"
 console.log(SECRET_KEY )
 export const SMTP_EMAIL=process.env.SMTP_EMAIL|| "puriprajun@gmail.com"
 export const SMTP_PASSWORD=process.env.SMTP_PASSWORD||"dact qori zwms etai"
    console.log(SMTP_EMAIL,SMTP_PASSWORD)