import dotenv from "dotenv";
dotenv.config();
export const MONGODB_URL = process.env.MONGODB_URL;
console.log(MONGODB_URL)
export const SECRET_KEY = process.env.SECRET_KEY;
export const PORT = process.env.PORT;
export const BASE_URL = process.env.BASE_URL;
export const RESEND_API_KEY = process.env.RESEND_API_KEY;
export const SMTP_EMAIL = process.env.SMTP_EMAIL;