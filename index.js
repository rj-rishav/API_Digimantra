configDotenv();
import { CronJob } from "cron";
import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { configDotenv } from "dotenv";
import { dbConnectionHandler, smtpConnectionHandler } from "./connection.js";
import testRouter from "./routes/testRoute.js";
import authRouter from "./routes/authRoute.js";
import userRouter from "./routes/userRoute.js";
import rateLimiter from "./middlewares/rateLimiterTokenBucket.js";
import noPathMiddleware from "./middlewares/noPathMiddleware.js";
import validateJwt from "./middlewares/validateJwt.js";

dbConnectionHandler();
export const mailer = smtpConnectionHandler();

const PORT = process.env.PORT;
global.requestCounter = 0;

// Express app initialized
const app = express();

// Rate Limiter -> Token Bucket
app.use(rateLimiter);

// Cookie, Body and Json Parser middleware
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", testRouter);

app.use("/auth", authRouter);

app.use(validateJwt); // JWT token validation

// JWT secured routes
app.use("/user", userRouter);

app.use("*", noPathMiddleware); // Handle Unknown URLS 404

// Started Server
app.listen(PORT || 9091, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
    new CronJob(
        "*/10 * * * * *", // Update every 10 seconds
        () => {
            global.requestCounter = 0;
        },
        null,
        true
    );
});
