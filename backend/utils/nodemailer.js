// import nodemailer from "nodemailer";
// import { SMTP_EMAIL, SMTP_PASSWORD } from "../config/env.js";
// console.log(SMTP_EMAIL,SMTP_PASSWORD)
// let transportor =nodemailer.createTransport({ //.createTransport is method of nodemailer used to send mail
    
//     host:"smtp.gmail.com",
//     port:587,
//     secure:false,
    
//     auth:{ //auth means authentication that verify from google 
//         user:SMTP_EMAIL,
//         pass:SMTP_PASSWORD //app password from google account
//     },

//     });
//     console.log(SMTP_PASSWORD,SMTP_EMAIL)
    
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

    // export const sendMail=async({email,subject,html})=>{ //.sendMail is method of transportor used to send mail
        
    //         const result= await transportor.sendMail(
    //             {
    //             // from:"Prajun Puri < puriprajun@gmail.com>",
    //             to:email,
    //             subject:subject,
    //             html:html,
    //             }
    //         )
        
    //     }
    

// import nodemailer from "nodemailer";
// import { SMTP_EMAIL, SMTP_PASSWORD } from "../config/env.js";
// console.log(SMTP_EMAIL, SMTP_PASSWORD);
// const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//         user: SMTP_EMAIL,
//         pass: SMTP_PASSWORD,
//     },
// });

// transporter.verify((error, success) => {
//     if (error) {
//         console.log("VERIFY ERROR:", error);
//     } else {
//         console.log("Server is ready");
//     }
// });

// // export const sendMail = async ({ email, subject, html }) => {
// //     try {
// //         const result = await transporter.sendMail({
// //             from: `Prajun Puri <${SMTP_EMAIL}>`,
// //             to: email,
// //             subject,
// //             html,
// //         });

// //         console.log("MAIL SENT:", result.response);

// //     } catch (error) {
// //         console.log("SEND ERROR:", error);
// //     }
// // };
// export const sendMail = async ({ email, subject, html }) => {
//     try {

//         console.log("Sending mail to:", email);

//         const result = await transporter.sendMail({
//             from: `Prajun Puri <${process.env.SMTP_EMAIL}>`,
//             to: email,
//             subject,
//             html,
//         });

//         console.log("Mail sent successfully");
//         console.log(result);

//     } catch (error) {
//         console.log("MAIL ERROR:");
//         console.log(error);
//     }
// };
// console.log("sendMail function is ready to send emails");

// import nodemailer from "nodemailer";
// import { SMTP_EMAIL, SMTP_PASSWORD } from "../config/env.js";



// const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 465,
//     secure: true,
//     auth: {
//         user: SMTP_EMAIL,
//         pass: SMTP_PASSWORD,
//     },
// });

// transporter.verify((error, success) => {
//     if (error) {
//         console.log("VERIFY ERROR:", error);
//     } else {
//         console.log("Server is ready");
//     }
// });

// export const sendMail = async ({ email, subject, html }) => {
//     try {
//         console.log("Sending mail to:", email);

//         const result = await transporter.sendMail({
//             from: `Prajun Puri <${SMTP_EMAIL}>`,
//             to: email,
//             subject,
//             html,
//         });

//         console.log("Mail sent successfully");
//         console.log(result);

//     } catch (error) {
//         console.log("MAIL ERROR:");
//         console.log(error);
//     }
// };
import { Resend } from "resend";
import { RESEND_API_KEY, SMTP_EMAIL } from "../config/env.js";

const resend = new Resend(RESEND_API_KEY);

export const sendMail = async ({ email, subject, html }) => {
    try {
        console.log("Sending mail to:", email);

        const result = await resend.emails.send({
            from: `Prajun Puri <${SMTP_EMAIL}>`,
            to: [email],
            subject:subject,
            html:html,
        });

        console.log("Mail sent successfully");
        console.log(result);

    } catch (error) {
        console.log("MAIL ERROR:");
        console.log(error);
    }
};