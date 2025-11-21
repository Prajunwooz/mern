import { Router } from "express";
import { createUsercase } from "../controller/user.controller.js";

export const router=Router();

router.post("/create-user",createUsercase);