import express from "express";
import {getTestHandler, postTestHandler} from "../controllers/testController.js";

const testRouter = express.Router();

testRouter.get("/", getTestHandler).post("/", postTestHandler);

export default testRouter;
