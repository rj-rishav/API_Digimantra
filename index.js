configDotenv();
import express from "express";
import bodyParser from "body-parser";
import { configDotenv } from "dotenv";
import dbConnectionHandler from "./connection.js"
import testRouter from "./routes/testRoute.js";
import userRouter from "./routes/userRoute.js";
import noPathMiddleware from "./middlewares/noPathMiddleware.js";

dbConnectionHandler();

const PORT = process.env.PORT;

// Express app initialized
const app = express();

// Body and Json Parser middleware
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/user', userRouter);

// Test route
app.use('/test',testRouter);

// Handle Unknown URLS 404
app.use('*',noPathMiddleware);

// Started Server
app.listen(PORT || 9091, () => console.log(`Server is running on ${PORT}`));
