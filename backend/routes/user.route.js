import router from "express"
import { forgetpasswordController, LoginuserController, updateUserController, userController, verifyResetPassword, verifyuserController } from "../controller/user.controller.js"
import { isauthenticated } from "../middleware/isauthenticated.js";

export const userRoute=router();
 userRoute.post("/create",userController)
 userRoute.get("/verify",verifyuserController) //this must be aadded on link we send in email //we have to write http://localhost:8080/user/verify?token=..... in the postman to verify user
userRoute.post("/login",LoginuserController)
userRoute.post("/forgotpassword",forgetpasswordController)
userRoute.patch("/resetpassword",verifyResetPassword)
userRoute.patch("/update",isauthenticated,updateUserController)