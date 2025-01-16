import express from "express";

import { validator } from "../middlewares/validateMiddleware.js";
import {signupHandler, signinHandler} from "../controllers/authController.js"

const authRouter = express.Router();

authRouter.post("/signup",validator, signupHandler).post("/signin", signinHandler);

export default authRouter;
