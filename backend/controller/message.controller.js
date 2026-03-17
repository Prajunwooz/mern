// schemas/apiSchemas.js


import { Contact } from "../schema/message.schema.js";
import { sendMail } from "../utils/nodemailer.js";

// Request validation middleware

export const validateContactRequest = async (req, res) => {
  const { name, email, phone, subject, message } = req.body;
  console.log(email)
  try {
    const result = await Contact.create({ name, email, phone, subject, message });
     res.status(201).json({ success: true, data: result });
 
    sendMail({
      email: email,
      subject: `New Contact Message from ${name}`,
      html: `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: white; border: 2px solid #16497c; border-radius: 8px; overflow: hidden;">
    
    <!-- Header -->
    <div style="background-color: #16497c; padding: 15px; text-align: center;">
      <h3 style="color: white; margin: 0;">📬 New Contact Message</h3>
    </div>
    
    <!-- Content -->
    <div style="padding: 25px; background: white;">
      
      <!-- Alert Box (Your exact format with better contrast) -->
      <div style="background-color: #16497c; padding: 18px; border-left: 5px solid #dc3545; margin-bottom: 20px; border-radius: 0 5px 5px 0;">
        <p style="margin: 0; font-size: 16px; color: white;">
          📨 You have received a new message from <strong style="color: #FFD700;">${name}</strong> 
          (<a href="mailto:${email}" style="color: #87CEEB; font-weight: bold;">${email}</a>)
        </p>
      </div>

      <!-- Subject (Your color with white text for readability) -->
      <div style="margin-bottom: 20px;">
        <p style="font-weight: bold; color: #16497c; margin-bottom: 5px;">📌 Subject:</p>
        <div style="background-color: #2b5885; padding: 12px; border-radius: 5px;">
          <p style="margin: 0; color: white; font-size: 15px;">${subject}</p>
        </div>
      </div>

      <!-- Message (Your darker color with white text) -->
      <div style="margin-bottom: 20px;">
        <p style="font-weight: bold; color: #16497c; margin-bottom: 5px;">💬 Message:</p>
        <div style="background-color: #212f3d; padding: 15px; border-radius: 5px; white-space: pre-wrap;">
          <p style="margin: 0; color: white; line-height: 1.5;">${message}</p>
        </div>
      </div>

      <!-- Phone (if provided) -->
      ${phone ? `
        <div style="margin-bottom: 20px;">
          <p style="font-weight: bold; color: #16497c; margin-bottom: 5px;">📞 Phone:</p>
          <div style="background-color: #f0f7ff; padding: 10px; border-radius: 5px; border: 1px solid #16497c;">
            <p style="margin: 0; color: #16497c;">${phone}</p>
          </div>
        </div>
      ` : ''}

      <!-- Timestamp -->
      <hr style="border: none; border-top: 2px solid #16497c; margin: 20px 0;">
      
      <p style="color: #666; font-size: 12px; text-align: center; margin: 15px 0 0;">
        Received: ${new Date().toLocaleString()}
      </p>
      
    </div>
    
    <!-- Footer -->
    <div style="background-color: #0d224c; padding: 12px; text-align: center;">
      <p style="margin: 0; color: #87CEEB; font-size: 11px;">
        This is an automated message from your website
      </p>
    </div>
  </div>
`
    });

  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
}
 
