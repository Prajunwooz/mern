import { Router } from "express";
import { createOrderController } from "../controller/order.controller.js";

export const orderRouter = Router()

orderRouter.post("/create/:id", createOrderController)