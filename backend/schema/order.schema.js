import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    productId:{
        type: String,
        required: [true, "Product Id is required"]
    },
    quantity:{
        type: Number,
        required: [true, "Quantity is required"]
    },
    totalPrice:{
        type: Number,
        required: [true, "Total price is required"]
    },
    userInfo:{
       fullName:{
        type: String,
        required: [true, "Fullname is required"]
       },
       email:{
        type: String,
        required: true
       },
       address:{
        type: String,
        required: true,
       },
       city:{
        type: String,
        required: true
       },
       phone:{
        type: Number,
        required: true
       }
    },
    status:{
     type: String,
     enum: ["ongoing", "delivered", "cancelled"],
     default: "ongoing"
    }
})

// type required unique enum default - validation

export const Order = mongoose.model("Order", orderSchema)