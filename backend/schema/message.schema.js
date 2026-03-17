// models/Contact.js - MongoDB/Mongoose schema
import mongoose from 'mongoose';

 const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    
  },
  
  email: {
    type: String,
    required: [true, 'Email is required'],},
    
  
  phone: {
    type: String,
    required: false,
    
  },
  
  subject: {
    type: String,
    required: [true, 'Subject is required'],
    
  },
  
  message: {
    type: String,
    required: [true, 'Message is required']},

});

export const Contact = mongoose.model("Contact", contactSchema);
  