import  { Router } from "express"
import { createProductController, deleteProductController, getAllProductController, getSpecificProductController, updateProductController } from "../controller/product.controller.js"
import { isauthenticated } from "../middleware/isauthenticated.js"
import { isauthorized } from "../middleware/isauthorized.js"


export const productRouter = Router()
productRouter.post("/create",isauthenticated,// to check user is logged in or not
    //isauthorizedRBAC(["admin","driver"]),//this is useed when multiple roles are there (RBAC)
    // to check user is admin or not to create product only admin can create product 
    // and we put only admin in array because only admin can create product
    isauthorized,// to check user is admin or not to create product only admin can create product
    createProductController)
productRouter.get("/getAll", getAllProductController)
productRouter.get("/get/:id", getSpecificProductController) // "/:" lai dynamic routing bhanincha
productRouter.patch("/update/:id", isauthenticated, updateProductController)
productRouter.delete("/delete/:id", isauthenticated, deleteProductController)