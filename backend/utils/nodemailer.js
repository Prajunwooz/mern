import nodemailer from "nodemailer";
import { SMTP_EMAIL, SMTP_PASSWORD } from "../config/env.js";
///console.log(SMTP_EMAIL,SMTP_PASSWORD)
let transportor =nodemailer.createTransport({ //.createTransport is method of nodemailer used to send mail
    
    host:"smtp.gmail.com",
    port:587,
    secure:false,
    
    auth:{ //auth means authentication that verify from google 
        user:SMTP_EMAIL||"puriprajun@gmail.com",

        pass:SMTP_PASSWORD||"nexvqbhpccmaeqqq" //app password from google account
    },
    });
    
    // export const sendMail=async()=>{ //.sendMail is method of transportor used to send mail
        
    //         const result= await transportor.sendMail(
    //             {
    //             to:"puriprajun@gmail.com",
    //             subject:"Test mail from nodemailer",
    //             text:"hello this is test mail from nodemailer",
    //             }
    //         )
        
    //     }
    // sendMail();
    // export const sendMail=async(email)=>{ //.sendMail is method of transportor used to send mail
        
    //         const result= await transportor.sendMail(
    //             {
    //             from:"Prajun Puri < puriprajun@gmail.com>",
    //             to:email,
    //             subject:"Test mail from nodemailer",
    //             text:"hello this is test mail from nodemailer",
    //             }
    //         )
        
    //     }

    export const sendMail=async({email,subject,html})=>{ //.sendMail is method of transportor used to send mail
        
            const result= await transportor.sendMail(
                {
                from:"Prajun Puri < puriprajun@gmail.com>",
                to:email,
                subject:subject,
                html:html,
                }
            )
        
        }
    