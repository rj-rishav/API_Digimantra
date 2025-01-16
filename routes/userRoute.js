import express from "express";
import { validator } from "../middlewares/validateMiddleware.js";
import { createUser, getAllUsers, getUserByUsername, updateUser } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter
    .get("/", (req, res) => {
        res.status(200).send({ response_code: 200, message: "user working!" });
    })
    .get("/all", getAllUsers)
    .get('/:username',getUserByUsername)
    .patch('/:username', updateUser)
    .post("/", validator, createUser);

export default userRouter;
