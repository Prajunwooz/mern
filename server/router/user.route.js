import { Router } from "express";
import { createUserController, deleteUserController, getAllUsercontoller, loginUsercontroller, specificusercontroller, updateUserController } from "../controller/user.controller.js";

 export const userrouter=Router(); //CRUD is used here

userrouter.post("/create",createUserController) // post is route method is creating data


userrouter.get("/get",getAllUsercontoller)     //get is route method


userrouter.post("/login" ,loginUsercontroller)

userrouter.get("/specific/:id",specificusercontroller)

userrouter.patch("/update/:id",updateUserController)

userrouter.delete("/delete/:id",deleteUserController)


