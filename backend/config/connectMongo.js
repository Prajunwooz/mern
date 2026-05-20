import mongoose from "mongoose";
import { MONGODB_URL } from "./env.js";

export const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URL);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
};

export default connectDB;