import mongoose from "mongoose";   //import mongoose package 1st step

 export const connectDatabase =() => {
    try {
        mongoose.connect("mongodb://lhost:27017");
        console.log("connect database successfully");
    } catch (error) {
        console.log(error);
    }                 //we have to in function
};
connectDatabase();

 export const text = async() => {    //async await means to avoid synchronous code
    try {
       await mongoose.connect("mongodb://lhost:27017");
        console.log("connect database successfully");
    } catch (error) {
        console.log(error);
    }                 //we have to in function
};
connectDatabase();