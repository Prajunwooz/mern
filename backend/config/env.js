// import dotenv from "dotenv";   //env means environment variables 
// dotenv.config({path:"../.env"});  //config is path  location
// export const MONGODB_URL=process.env.MONGODB_URL  //we use env package to we should import it
//  console.log(MONGODB_URL)    
//  export const SECRET_KEY=process.env.SECRET_KEY || "hello12345"
//  console.log(SECRET_KEY )
//  export const SMTP_EMAIL=process.env.SMTP_EMAIL|| "puriprajun@gmail.com"
//  export const SMTP_PASSWORD=process.env.SMTP_PASSWORD||"nexv qbhp  ccma eqqq"
//     console.log(SMTP_EMAIL,SMTP_PASSWORD) 
// import dotenv from "dotenv";   //env means environment variables
// dotenv.config({path:"../.env"});  //config is path  location
import dotenv from "dotenv"
dotenv.config()
export const MONGODB_URL=process.env.MONGODB_URL  //we use env package to we should import it
   console.log(MONGODB_URL)
export const SECRET_KEY=process.env.SECRET_KEY 
   console.log(SECRET_KEY )
export const SMTP_EMAIL=process.env.SMTP_EMAIL
export const SMTP_PASSWORD=process.env.SMTP_PASSWORD
   console.log(SMTP_EMAIL,SMTP_PASSWORD)
   export const PORT=process.env.PORT 
   console.log(PORT)
   export const BASE_URL=process.env.BASE_URL 
   console.log(BASE_URL)
