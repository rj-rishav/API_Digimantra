import express from "express"
import { createUser } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get('/', (req, res) => {
    res.status(200).send({response_code: 200, message: "user working!"})
}).post('/', createUser)

export default userRouter;