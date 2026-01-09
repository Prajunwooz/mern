import { Router } from "express";
import { singleFileController } from "../controller/file.controller.js";
import { uploadMulter } from "../utils/multer.js";

export const fileRouter = Router();

fileRouter.post("/upload", uploadMulter.single("uploads"), singleFileController);// uploadss is multer as middleware and .single is used to upload single file. "uploads" is the key name from frontend form data
