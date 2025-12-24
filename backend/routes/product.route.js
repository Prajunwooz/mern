import  { Router } from "express"
import { createProductController, deleteProductController, getAllProductController, getSpecificProductController, updateProductController } from "../controller/product.controller.js"


export const productRouter = Router()
productRouter.post("/create", createProductController)
productRouter.get("/getAll", getAllProductController)
productRouter.get("/get/:id", getSpecificProductController) // "/:" lai dynamic routing bhanincha
productRouter.patch("/update/:id", updateProductController)
productRouter.delete("/delete/:id", deleteProductController)

