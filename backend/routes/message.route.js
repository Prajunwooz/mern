import { Router } from "express";
import { validateContactRequest } from "../controller/message.controller.js";

export const orderRouter = Router()

orderRouter.post("/message", validateContactRequest)