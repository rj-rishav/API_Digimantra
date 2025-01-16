configDotenv();
import express from "express";
import bodyParser from "body-parser";
import { configDotenv } from "dotenv";
import dbConnectionHandler from "./connection.js"
import testRouter from "./routes/testRoute.js";
import authRouter from "./routes/authRoute.js";
import userRouter from "./routes/userRoute.js";
import noPathMiddleware from "./middlewares/noPathMiddleware.js";
import validateJwt from "./middlewares/validateJwt.js";

dbConnectionHandler();

const PORT = process.env.PORT;

// Express app initialized
const app = express();

// Body and Json Parser middleware
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/test',testRouter);

// JWT token validation
app.use(validateJwt)

// Test route

app.use('/auth', authRouter)

app.use('/user', userRouter);

// Handle Unknown URLS 404
app.use('*',noPathMiddleware);

// Started Server
app.listen(PORT || 9091, () => console.log(`Server is running on ${PORT}`));
